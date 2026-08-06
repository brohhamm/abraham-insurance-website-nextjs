"use client";

import { FormEvent, useState } from "react";
import { agents } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function ClaimsCheckForm({ spanish = false }: { spanish?: boolean }) {
  const [ready, setReady] = useState<{ email: string; gmail: string } | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (data.website) return;
    const value = (key: string) => String(data[key] || "Not provided");
    const body = [
      "Building Claims Check Request",
      "",
      `Requester: ${value("name")}`,
      `Company: ${value("company")}`,
      `Role: ${value("role")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      `Property address: ${value("propertyAddress")}`,
      `Anticipated closing date: ${value("closingDate")}`,
      "",
      "Notes:",
      value("notes"),
      "",
      "I understand this review is informational and does not guarantee insurability, carrier acceptance, premium, or coverage.",
    ].join("\n");
    const subject = `Building Claims Check Request - ${value("propertyAddress")}`;
    setReady({
      email: `mailto:${agents.abraham.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(agents.abraham.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    });
    trackEvent("building_claims_check_prepared", { form_type: "building_claims_check" });
  }

  if (ready) return <div className="quote-ready"><h2>{spanish ? "Su solicitud está lista." : "Your request is ready."}</h2><p>{spanish ? "Envíela directamente a Abraham por correo electrónico." : "Send it directly to Abraham by email."}</p><div className="button-row"><a className="button" href={ready.email}>{spanish ? "Abrir correo" : "Open Email App"}</a><a className="button button-secondary" href={ready.gmail} target="_blank" rel="noreferrer">{spanish ? "Abrir Gmail" : "Open Gmail"}</a></div></div>;

  return <form className="quote-form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid">
      <label>{spanish ? "Nombre" : "Name"}<input name="name" required autoComplete="name" /></label>
      <label>{spanish ? "Empresa" : "Company"}<input name="company" autoComplete="organization" /></label>
      <label>{spanish ? "Función" : "Role"}<select name="role" required defaultValue=""><option value="" disabled>{spanish ? "Seleccione" : "Select"}</option><option>Buyer</option><option>Real estate agent</option><option>Loan officer or mortgage professional</option><option>Escrow professional</option><option>Other</option></select></label>
      <label>{spanish ? "Correo electrónico" : "Email"}<input name="email" type="email" required autoComplete="email" /></label>
      <label>{spanish ? "Teléfono" : "Phone"}<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>{spanish ? "Fecha prevista de cierre" : "Anticipated closing date"}<input name="closingDate" type="date" /></label>
    </div>
    <label>{spanish ? "Dirección de la propiedad" : "Property address"}<input name="propertyAddress" required autoComplete="street-address" /></label>
    <label>{spanish ? "Notas" : "Notes"}<textarea name="notes" rows={4} /></label>
    <label className="consent"><input name="consent" type="checkbox" required /> {spanish ? "Entiendo que esta revisión es informativa y no garantiza la asegurabilidad, aceptación de una compañía, prima ni cobertura." : "I understand this review is informational and does not guarantee insurability, carrier acceptance, premium, or coverage."}</label>
    <button className="button" type="submit">{spanish ? "Preparar solicitud" : "Prepare Claims Check Request"}</button>
  </form>;
}
