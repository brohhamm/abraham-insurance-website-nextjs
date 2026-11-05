export const event = {
  id: "christmas-2026",
  enPath: "/events/christmas-client-appreciation",
  esPath: "/es/eventos/convivio-navideno",
  // November 23 ends at midnight Pacific (UTC-8).
  deadline: Date.parse("2026-11-24T00:00:00-08:00"),
  capacity: 50,
  address: "13800 Heacock St., Suite C120, Moreno Valley, CA 92553",
};
export type ClientStatus = "yes" | "no" | "unsure";
export type Guest = { name: string; client: ClientStatus };
export type Registration = {
  reference: string; created: string; name: string; phone: string; email: string;
  client: ClientStatus; guests: Guest[]; notes: string; locale: "en" | "es";
  sms: string; emailStatus: string; smsSid?: string; cancelled?: boolean;
};
export class RsvpError extends Error {
  constructor(public code: string, public status = 400) { super(code); }
}
const clean = (v: unknown, max: number) => {
  if (typeof v !== "string" || v.trim().length > max || /[\x00-\x08\x0b-\x1f]/.test(v)) throw new RsvpError("invalid");
  return v.trim().normalize("NFC");
};
const client = (v: unknown): ClientStatus => {
  if (v !== "yes" && v !== "no" && v !== "unsure") throw new RsvpError("invalid");
  return v;
};
export function parseRegistration(input: unknown) {
  if (!input || typeof input !== "object") throw new RsvpError("invalid");
  const d = input as Record<string, unknown>;
  const name = clean(d.name, 100), email = clean(d.email, 180).toLowerCase();
  const rawPhone = clean(d.phone, 30), digits = rawPhone.replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits.startsWith("1") ? `+${digits}` : "";
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || !phone || !Array.isArray(d.guests) || d.guests.length > 49) throw new RsvpError("invalid");
  const guests = d.guests.map((g: unknown) => {
    if (!g || typeof g !== "object") throw new RsvpError("invalid");
    const x = g as Record<string, unknown>, n = clean(x.name, 100);
    if (n.length < 2) throw new RsvpError("invalid");
    return { name: n, client: client(x.client) };
  });
  const names = [name, ...guests.map(g => g.name)].map(n => n.toLocaleLowerCase());
  if (new Set(names).size !== names.length) throw new RsvpError("invalid");
  return { name, phone, email, client: client(d.client), guests, notes: clean(d.notes ?? "", 500), locale: d.locale === "es" ? "es" as const : "en" as const };
}
