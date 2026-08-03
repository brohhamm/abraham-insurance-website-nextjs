"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type ContactLinks = { gmail: string; email: string; text: string } | null;

const insuranceOptions = [
  "Home", "Auto", "Renters", "Condo", "Landlord", "Umbrella", "Life",
  "Commercial", "Workers’ compensation", "Commercial auto",
  "Referral partnership", "Other",
] as const;

const insuranceAliases: Record<string, string> = {
  "Home & Property": "Home",
  "Auto & Umbrella": "Auto",
  "Business Insurance": "Commercial",
  "Life Insurance": "Life",
  "Escrow Support": "Home",
  "Carrier Options": "Other",
};

function createRequestMessage(data: Record<string, FormDataEntryValue>) {
  const value = (key: string) => String(data[key] || "Not provided");
  return [
    "Hello Abraham,", "", "I am requesting an insurance quote.", "",
    `Name: ${value("firstName")} ${value("lastName")}`,
    `Phone: ${value("phone")}`,
    `Email: ${value("email")}`,
    `Preferred contact method: ${value("contactMethod")}`,
    `City: ${value("city")}`,
    `ZIP code: ${value("zip")}`,
    `Insurance type: ${value("insuranceType")}`,
    `Selected market: ${value("market")}`,
    `Current carrier: ${value("currentCarrier")}`,
    `Desired effective date: ${value("effectiveDate")}`,
    "", "Additional details:", value("description"), "",
    "I understand this request does not bind or alter coverage.",
  ].join("\n");
}

export function QuoteForm({
  partner = false,
  initialInsuranceType = "",
  initialMarket = "",
}: {
  partner?: boolean;
  initialInsuranceType?: string;
  initialMarket?: string;
}) {
  const [links, setLinks] = useState<ContactLinks>(null);
  const [message, setMessage] = useState("");
  const selectedInsurance =
    insuranceAliases[initialInsuranceType] ||
    (insuranceOptions.includes(initialInsuranceType as (typeof insuranceOptions)[number])
      ? initialInsuranceType
      : partner ? "Referral partnership" : "");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (payload.website) return;

    const request = createRequestMessage(payload);
    const subject = `${partner ? "Referral Partner" : "Insurance Quote"} Request - ${String(payload.firstName)} ${String(payload.lastName)}`;
    const email = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const text = `sms:+17143889533?&body=${encodeURIComponent(request)}`;

    setLinks({ gmail, email, text });
    const newWindow = window.open(gmail, "_blank", "noopener,noreferrer");
    setMessage(newWindow
      ? "Gmail opened with your completed request. Review it and press Send so the agency receives it."
      : "Your browser blocked Gmail. Select Open Gmail, Other Email App, Text, or Call below. Your request is not delivered until you press Send.");
  }

  return <form className="quote-form" onSubmit={submit} aria-describedby="form-note">
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <input type="hidden" name="market" value={initialMarket} />
    <div className="form-grid"><label>First name<input name="firstName" required autoComplete="given-name" /></label><label>Last name<input name="lastName" required autoComplete="family-name" /></label>
    <label>Phone<input name="phone" required type="tel" autoComplete="tel" /></label><label>Email<input name="email" required type="email" autoComplete="email" /></label>
    <label>Preferred contact<select name="contactMethod" required defaultValue=""><option value="" disabled>Select</option><option>Phone</option><option>Email</option><option>Text</option></select></label>
    <label>City<input name="city" required autoComplete="address-level2" /></label><label>ZIP code<input name="zip" required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" autoComplete="postal-code" /></label>
    <label>Insurance type<select name="insuranceType" required defaultValue={selectedInsurance}><option value="" disabled>Select</option>{insuranceOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
    <label>Current carrier <span>(optional)</span><input name="currentCarrier" /></label><label>Desired effective date <span>(optional)</span><input name="effectiveDate" type="date" /></label></div>
    {initialMarket ? <p className="selected-market"><strong>Selected market:</strong> {initialMarket}</p> : null}
    <label>How can we help?<textarea name="description" required rows={5} /></label>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required /> I agree to be contacted about this request. Preparing this request does not bind or alter coverage.</label>
    <button className="button" type="submit">{partner ? "Prepare Partner Request" : "Prepare My Quote Request"}</button>
    <p id="form-note" className={`form-message ${links ? "success" : ""}`}>{message || "After preparing the request, choose Gmail, email, text, or call. The agency will not receive it until you press Send. Do not use this form for claims or urgent policy changes."}</p>
    {links ? <div className="contact-action-panel" aria-label="Send your quote request"><a className="button" href={links.gmail} target="_blank" rel="noreferrer">Open Gmail</a><a className="button button-secondary" href={links.email}>Other Email App</a><a className="button button-secondary" href={links.text}>Open Text Message</a><a className="button button-secondary" href={siteConfig.phoneHref}>Call {siteConfig.directPhone}</a></div> : null}
  </form>;
}
