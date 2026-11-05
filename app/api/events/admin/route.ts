import { NextResponse } from "next/server";
import { authorizeAdmin, cancelRegistration, isRsvpConfigured, rateLimit, registrations } from "@/lib/event-store";
import { notifyRegistration } from "@/lib/event-notifications";
import { RsvpError } from "@/lib/event-rsvp";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function POST(request: Request) {
  const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex", "Referrer-Policy": "no-referrer" };
  try {
    if (!isRsvpConfigured()) throw new RsvpError("unavailable", 503);
    if (request.headers.get("origin") !== new URL(request.url).origin) throw new RsvpError("unauthorized", 403);
    await rateLimit(request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for")?.split(',')[0] ?? "unknown", "admin");
    const raw = await request.text();
    if (raw.length > 1000) throw new RsvpError("invalid");
    const input = JSON.parse(raw);
    if (!authorizeAdmin(input.token)) throw new RsvpError("unauthorized", 401);
    if (input.action === "cancel") await cancelRegistration(String(input.reference));
    if (input.action === "pending") {
      for (const r of await registrations()) if (!r.cancelled && (r.sms === "pending" || r.emailStatus === "pending")) await notifyRegistration(r);
    }
    return NextResponse.json({ records: await registrations() }, { headers });
  } catch (e) {
    const error = e instanceof RsvpError ? e : new RsvpError("unavailable", 503);
    return NextResponse.json({ error: error.code }, { status: error.status, headers });
  }
}
