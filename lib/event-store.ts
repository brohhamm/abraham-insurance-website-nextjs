import { createHmac, randomUUID, createHash, timingSafeEqual } from "node:crypto";
import { event, Registration, RsvpError, parseRegistration } from "./event-rsvp";

const key = `rsvp:${event.id}`;
export function isRsvpConfigured() {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN &&
    (process.env.RSVP_HASH_SECRET?.length ?? 0) >= 32 && (process.env.RSVP_ADMIN_TOKEN?.length ?? 0) >= 32 &&
    process.env.RESEND_API_KEY && process.env.QUOTE_FROM_EMAIL && process.env.RSVP_NOTIFICATION_EMAIL);
}
export function privateHash(s: string) {
  return createHmac("sha256", process.env.RSVP_HASH_SECRET!).update(s).digest("hex");
}
export async function redis(command: (string | number)[]) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  if (!url || !url.startsWith("https://") || !process.env.UPSTASH_REDIS_REST_TOKEN) throw new RsvpError("unavailable", 503);
  const r = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, "Content-Type": "application/json" }, body: JSON.stringify(command), cache: "no-store", signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new RsvpError("unavailable", 503);
  const data = await r.json();
  if (data.error) throw new RsvpError("unavailable", 503);
  return data.result;
}
export async function rateLimit(ip: string, scope = "public") {
  const count = await redis(["EVAL", `local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],3600) end; return n`, 1, `${key}:rate:${scope}:${privateHash(ip)}`]);
  if (Number(count) > (scope === "admin" ? 30 : 15)) throw new RsvpError("rate", 429);
}
// One atomic Lua operation performs duplicate, cutoff and capacity checks and saves
// the registration and notification outbox together. Never use instance memory.
export const reserveScript = `
local raw=redis.call('GET',KEYS[1]); local s=raw and cjson.decode(raw) or {total=0,records={},requests={},contacts={}}
local previous=s.requests[ARGV[1]]
if previous then
 if s.records[previous.reference].cancelled then return cjson.encode({code='duplicate'}) end
 if previous.digest~=ARGV[2] then return cjson.encode({code='conflict'}) end
 return cjson.encode({code='existing',reference=previous.reference})
end
local now=redis.call('TIME'); if tonumber(now[1])*1000>=tonumber(ARGV[3]) then return cjson.encode({code='closed'}) end
if s.contacts[ARGV[4]] or s.contacts[ARGV[5]] then return cjson.encode({code='duplicate'}) end
local n=tonumber(ARGV[6]); if s.total+n>tonumber(ARGV[7]) then return cjson.encode({code='full'}) end
local r=cjson.decode(ARGV[8]); s.total=s.total+n; s.records[r.reference]=r
s.requests[ARGV[1]]={digest=ARGV[2],reference=r.reference}; s.contacts[ARGV[4]]=r.reference; s.contacts[ARGV[5]]=r.reference
redis.call('SET',KEYS[1],cjson.encode(s),'EX',10368000)
return cjson.encode({code='created',reference=r.reference})`;
export async function reserve(data: ReturnType<typeof parseRegistration>, requestId: string) {
  const r: Registration = { ...data, reference: `CH-${randomUUID()}`, created: new Date().toISOString(), sms: "pending", emailStatus: "pending" };
  const result = JSON.parse(await redis(["EVAL", reserveScript, 1, key, privateHash(requestId), privateHash(JSON.stringify(data)), event.deadline, privateHash(`email:${data.email}`), privateHash(`phone:${data.phone}`), data.guests.length + 1, event.capacity, JSON.stringify(r)]));
  if (!['created','existing'].includes(result.code)) throw new RsvpError(result.code, 409);
  return { ...result, registration: r } as { code: string; reference: string; registration: Registration };
}
export async function updateRecord(reference: string, fields: Partial<Registration>, claim?: "sms" | "emailStatus") {
  const result = await redis(["EVAL", `local raw=redis.call('GET',KEYS[1]); if not raw then return 0 end; local s=cjson.decode(raw); local r=s.records[ARGV[1]]; if not r then return 0 end; if ARGV[3]~='' and r[ARGV[3]]~='pending' then return 0 end; for k,v in pairs(cjson.decode(ARGV[2])) do r[k]=v end; redis.call('SET',KEYS[1],cjson.encode(s),'KEEPTTL'); return 1`, 1, key, reference, JSON.stringify(fields), claim ?? ""]);
  return result === 1;
}
export async function registrations(): Promise<Registration[]> {
  const raw = await redis(["GET", key]);
  // Lua cjson re-encodes an empty array as an empty object.
  const records = raw ? Object.values(JSON.parse(raw).records) as Registration[] : [];
  return records.map(r => ({ ...r, guests: Array.isArray(r.guests) ? r.guests : [] }));
}
export async function cancelRegistration(reference: string) {
  const record = (await registrations()).find(r => r.reference === reference);
  if (!record) return 0;
  return redis(["EVAL", `local raw=redis.call('GET',KEYS[1]); if not raw then return 0 end; local s=cjson.decode(raw); local r=s.records[ARGV[1]]; if not r or r.cancelled then return 0 end; s.total=s.total-1-#r.guests; r.cancelled=true; s.contacts[ARGV[2]]=nil; s.contacts[ARGV[3]]=nil; redis.call('SET',KEYS[1],cjson.encode(s),'KEEPTTL'); return 1`, 1, key, reference,
    // Hashes are derived only from the stored record, never client-supplied contact details.
    privateHash(`email:${record.email}`), privateHash(`phone:${record.phone}`)]);
}
export function authorizeAdmin(token: unknown) {
  const expected = process.env.RSVP_ADMIN_TOKEN;
  if (!expected || expected.length < 32 || typeof token !== "string" || token.length > 200) return false;
  return timingSafeEqual(createHash("sha256").update(token).digest(), createHash("sha256").update(expected).digest());
}
