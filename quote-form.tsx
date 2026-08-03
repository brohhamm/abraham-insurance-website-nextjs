"use client";
import { FormEvent, useState } from "react";

export function QuoteForm({ partner = false }: { partner?: boolean }) {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try { const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Unable to send your request.");
      setStatus("success"); setMessage("Thank you. Your request has been received. Coverage is not bound or changed by this submission."); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Unable to send your request."); }
  }
  return <form className="quote-form" onSubmit={submit} aria-describedby="form-note">
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid"><label>First name<input name="firstName" required autoComplete="given-name" /></label><label>Last name<input name="lastName" required autoComplete="family-name" /></label>
    <label>Phone<input name="phone" required type="tel" autoComplete="tel" /></label><label>Email<input name="email" required type="email" autoComplete="email" /></label>
    <label>Preferred contact<select name="contactMethod" required defaultValue=""><option value="" disabled>Select</option><option>Phone</option><option>Email</option><option>Text</option></select></label>
    <label>City<input name="city" required autoComplete="address-level2" /></label><label>ZIP code<input name="zip" required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" autoComplete="postal-code" /></label>
    <label>Insurance type<select name="insuranceType" required defaultValue={partner ? "Referral partnership" : ""}><option value="" disabled>Select</option>{["Home","Auto","Renters","Condo","Landlord","Umbrella","Life","Commercial","Workers’ compensation","Commercial auto","Referral partnership","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Current carrier <span>(optional)</span><input name="currentCarrier" /></label><label>Desired effective date <span>(optional)</span><input name="effectiveDate" type="date" /></label></div>
    <label>How can we help?<textarea name="description" required rows={5} /></label>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required /> I agree to be contacted about this request. Submission does not bind or alter coverage.</label>
    <button className="button" disabled={status === "loading"}>{status === "loading" ? "Sending…" : partner ? "Submit Partner Request" : "Request My Quote"}</button>
    <p id="form-note" className={`form-message ${status}`}>{message || "Do not use this form for claims or urgent policy changes."}</p>
  </form>;
}
