"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type ContactLinks = { gmail: string; email: string; text: string } | null;

const personalOptions = ["Homeowners Insurance", "Auto Insurance", "Renters Insurance", "Condo Insurance", "Landlord Insurance", "Umbrella Insurance", "Life Insurance", "Earthquake Insurance"] as const;
const commercialOptions = ["General Liability Insurance", "Workers’ Compensation Insurance", "Commercial Auto Insurance", "Business Owners Policy", "Commercial Property Insurance", "Contractor Insurance", "Cyber & Professional Liability"] as const;
const otherOptions = ["Escrow or lender request", "Referral partnership", "Other"] as const;
const insuranceOptions = [...personalOptions, ...commercialOptions, ...otherOptions];

const insuranceAliases: Record<string, string> = {
  "Home & Property": "Homeowners Insurance",
  "Home": "Homeowners Insurance",
  "Auto & Umbrella": "Auto Insurance",
  "Auto": "Auto Insurance",
  "Renters": "Renters Insurance",
  "Condo": "Condo Insurance",
  "Landlord": "Landlord Insurance",
  "Umbrella": "Umbrella Insurance",
  "Life": "Life Insurance",
  "Business Insurance": "General Liability Insurance",
  "Commercial": "General Liability Insurance",
  "Workers’ compensation": "Workers’ Compensation Insurance",
  "Commercial auto": "Commercial Auto Insurance",
  "Escrow Support": "Escrow or lender request",
  "Carrier Options": "Other",
};

function createRequestMessage(data: Record<string, FormDataEntryValue>) {
  const value = (key: string) => String(data[key] || "Not provided");
  return [
    "Hello Abraham,", "", "I am requesting insurance assistance.", "",
    `Name: ${value("firstName")} ${value("lastName")}`,
    `Phone: ${value("phone")}`,
    `Email: ${value("email")}`,
    `Preferred contact method: ${value("contactMethod")}`,
    `ZIP code: ${value("zip")}`,
    `Insurance type: ${value("insuranceType")}`,
    `Service area or selected market: ${value("market")}`,
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
  const [step, setStep] = useState(1);
  const [links, setLinks] = useState<ContactLinks>(null);
  const [message, setMessage] = useState("");
  const selectedInsurance =
    insuranceAliases[initialInsuranceType] ||
    (insuranceOptions.includes(initialInsuranceType) ? initialInsuranceType : partner ? "Referral partnership" : "");

  function continueToContact(event: React.MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    const insurance = form?.elements.namedItem("insuranceType") as HTMLSelectElement | null;
    const zip = form?.elements.namedItem("zip") as HTMLInputElement | null;
    if (!insurance?.reportValidity() || !zip?.reportValidity()) return;
    setStep(2);
    requestAnimationFrame(() => document.getElementById("quote-step-heading")?.focus());
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (payload.website) return;
    const request = createRequestMessage(payload);
    const subject = `${partner ? "Referral Partner" : "Insurance"} Request - ${String(payload.firstName)} ${String(payload.lastName)}`;
    const email = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const text = `sms:+17143889533?&body=${encodeURIComponent(request)}`;
    setLinks({ gmail, email, text });
    setMessage("Your request is ready. Choose Text, Gmail, Email, or Call below. The agency receives it after you press Send in the selected app.");
  }

  return <form className="quote-form easy-quote-form" onSubmit={submit} aria-describedby="form-note">
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <input type="hidden" name="market" value={initialMarket} />
    <div className="quote-progress" aria-label={`Step ${step} of 2`}><span className={step >= 1 ? "active" : ""}>1</span><i/><span className={step >= 2 ? "active" : ""}>2</span><strong>Step {step} of 2</strong></div>

    {step === 1 ? <fieldset className="quote-step">
      <legend>What can Abraham help you insure?</legend>
      <p>Start with two details. The next step only asks how to reach you.</p>
      <label>Coverage needed<select name="insuranceType" required defaultValue={selectedInsurance}><option value="" disabled>Select coverage</option><optgroup label="Personal insurance">{personalOptions.map((item) => <option key={item}>{item}</option>)}</optgroup><optgroup label="Business insurance">{commercialOptions.map((item) => <option key={item}>{item}</option>)}</optgroup><optgroup label="Other requests">{otherOptions.map((item) => <option key={item}>{item}</option>)}</optgroup></select></label>
      <label>ZIP code<input name="zip" required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" autoComplete="postal-code" placeholder="92553" /></label>
      {initialMarket ? <p className="selected-market"><strong>Service area or market:</strong> {initialMarket}</p> : null}
      <button className="button quote-next" type="button" onClick={continueToContact}>Continue →</button>
      <p className="privacy-reassurance">No Social Security number, driver’s license number, or payment information is requested.</p>
    </fieldset> : null}

    {step === 2 && !links ? <fieldset className="quote-step">
      <legend id="quote-step-heading" tabIndex={-1}>How should Abraham contact you?</legend>
      <p>Only your name and phone number are required. Everything else is optional.</p>
      <div className="form-grid"><label>First name<input name="firstName" required autoComplete="given-name" /></label><label>Last name<input name="lastName" required autoComplete="family-name" /></label>
      <label>Phone<input name="phone" required type="tel" autoComplete="tel" placeholder="(714) 555-0123" /></label><label>Email <span>(optional)</span><input name="email" type="email" autoComplete="email" /></label>
      <label>Preferred contact<select name="contactMethod" defaultValue="Text"><option>Text</option><option>Phone</option><option>Email</option></select></label>
      <label>Desired effective date <span>(optional)</span><input name="effectiveDate" type="date" /></label></div>
      <details className="optional-details"><summary>Add current carrier or extra details (optional)</summary><div><label>Current carrier<input name="currentCarrier" /></label><label>How can we help?<textarea name="description" rows={4} /></label></div></details>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /> I agree to be contacted about this request. Preparing a request does not bind or alter coverage.</label>
      <div className="quote-navigation"><button className="button button-secondary" type="button" onClick={() => setStep(1)}>← Back</button><button className="button" type="submit">{partner ? "Prepare Partner Request" : "Choose How to Send"}</button></div>
    </fieldset> : null}

    {links ? <section className="quote-ready" aria-labelledby="quote-ready-title"><div className="ready-mark" aria-hidden="true">✓</div><h2 id="quote-ready-title">Your request is ready.</h2><p id="form-note" className="form-message success">{message}</p><div className="contact-action-panel" aria-label="Send your quote request"><a className="button" href={links.text}>Text Abraham</a><a className="button button-secondary" href={links.gmail} target="_blank" rel="noreferrer">Open Gmail</a><a className="button button-secondary" href={links.email}>Other Email App</a><a className="button button-secondary" href={siteConfig.phoneHref}>Call {siteConfig.directPhone}</a></div><button className="text-link reset-button" type="button" onClick={() => { setLinks(null); setMessage(""); setStep(1); }}>Start over</button></section> : null}
    {!links ? <p id="form-note" className="form-message">Fast two-step request. Do not use this form for claims or urgent policy changes.</p> : null}
  </form>;
}
