import { after, NextResponse } from "next/server";
import { event, parseRegistration, RsvpError } from "@/lib/event-rsvp";
import { isRsvpConfigured, rateLimit, reserve } from "@/lib/event-store";
import { notifyRegistration } from "@/lib/event-notifications";

export const runtime = "nodejs";
export const maxDuration = 60;
const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };
export async function GET() {
  return NextResponse.json({ available: isRsvpConfigured() && Date.now() < event.deadline, closed: Date.now() >= event.deadline }, { headers });
}
export async function POST(request: Request) {
  try {
    if (!isRsvpConfigured()) throw new RsvpError("unavailable", 503);
    if (request.headers.get("origin") !== new URL(request.url).origin || !request.headers.get("content-type")?.startsWith("application/json")) throw new RsvpError("invalid", 400);
    const ip = request.headers.get("x-vercel-forwarded-for") ?? request.headers.get("x-forwarded-for")?.split(',')[0] ?? "unknown";
    await rateLimit(ip);
    const body = await request.text();
    if (body.length > 12000) throw new RsvpError("invalid", 413);
    let input;
    try { input = JSON.parse(body); } catch { throw new RsvpError("invalid"); }
    if (!input || typeof input !== "object") throw new RsvpError("invalid");
    if (input.website) throw new RsvpError("invalid");
    const requestId = request.headers.get("idempotency-key");
    if (!requestId || !/^[a-f0-9-]{36}$/i.test(requestId)) throw new RsvpError("invalid");
    const result = await reserve(parseRegistration(input), requestId);
    if (result.code === "created") after(async () => {
      try { await notifyRegistration(result.registration); } catch { console.error("RSVP notification remains pending; check staff list"); }
    });
    return NextResponse.json({ ok: true, reference: result.reference }, { headers });
  } catch (e) {
    const error = e instanceof RsvpError ? e : new RsvpError("unavailable", 503);
    return NextResponse.json({ error: error.code }, { status: error.status, headers });
  }
}
