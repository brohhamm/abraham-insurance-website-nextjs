import { Registration } from "./event-rsvp";
import { updateRecord } from "./event-store";

const destination = "+17143889533";
export async function notifyRegistration(r: Registration) {
  // Durable claims prevent repeated submissions/workers sending duplicate SMS.
  // An uncertain provider result is never retried automatically.
  if (await updateRecord(r.reference, { sms: "sending" }, "sms")) {
    try {
      const sid = process.env.TWILIO_ACCOUNT_SID, token = process.env.TWILIO_AUTH_TOKEN, sender = process.env.TWILIO_MESSAGING_SERVICE_SID;
      if (!sid || !token || !sender) throw new Error("SMS not configured");
      const body = new URLSearchParams({ To: destination, MessagingServiceSid: sender, Body: `Christmas event Dec 10 RSVP\n${r.name}\nPhone: ${r.phone}\nEmail: ${r.email}\nParty: ${r.guests.length + 1}\nClient: ${r.client} (pending verification)\nReference: ${r.reference}` });
      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, { method: "POST", headers: { Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" }, body, signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error("SMS rejected");
      const message = await response.json();
      if (!/^SM[a-f0-9]{32}$/i.test(message.sid)) throw new Error("Invalid message receipt");
      await updateRecord(r.reference, { sms: "accepted-not-confirmed-delivered", smsSid: message.sid });
    } catch { await updateRecord(r.reference, { sms: "failed-or-unknown-check-provider" }); }
  }
  // Send an email receipt for every registration, also providing SMS fallback.
  if (await updateRecord(r.reference, { emailStatus: "sending" }, "emailStatus")) {
    try {
      const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `rsvp-${r.reference}` }, body: JSON.stringify({ from: process.env.QUOTE_FROM_EMAIL, to: [process.env.RSVP_NOTIFICATION_EMAIL], subject: `Christmas event RSVP: ${r.reference}`, text: `Saved event registration. SMS delivery must be checked separately.\n\nName: ${r.name}\nPhone: ${r.phone}\nEmail: ${r.email}\nParty size: ${r.guests.length + 1}\nClient status: ${r.client} (pending verification)\nGuests: ${r.guests.map(g => `${g.name}: ${g.client} (pending verification)`).join('; ')}\nReference: ${r.reference}\n\nView the secure staff attendee list for registration details.` }), signal: AbortSignal.timeout(10000) });
      await updateRecord(r.reference, { emailStatus: response.ok ? "accepted" : "failed" });
    } catch { await updateRecord(r.reference, { emailStatus: "failed-or-unknown" }); }
  }
}
