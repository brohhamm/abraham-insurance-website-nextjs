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
    const value = (key: string) => String(data[key] || (spanish ? "No proporcionado" : "Not provided"));
    const roleLabels:Record<string,string>={Buyer:"Comprador","Real estate agent":"Agente de bienes raíces","Loan officer or mortgage professional":"Oficial de préstamos o profesional hipotecario","Escrow professional":"Profesional de escrow",Other:"Otro"};
    const body = [
      spanish ? "Solicitud de revisión del historial de reclamaciones de una propiedad" : "Building Claims Check Request",
      "",
      spanish ? "Hola Abraham, me gustaría revisar el historial disponible de esta propiedad antes de tomar una decisión:" : "Hello Abraham, I’d like to review this property’s available claims history before making a decision:",
      `${spanish ? "Solicitante" : "Requester"}: ${value("name")}`,
      `${spanish ? "Empresa" : "Company"}: ${value("company")}`,
      `${spanish ? "Relación con la compra" : "Role"}: ${spanish ? roleLabels[value("role")] || value("role") : value("role")}`,
      `${spanish ? "Correo electrónico" : "Email"}: ${value("email")}`,
      `${spanish ? "Teléfono" : "Phone"}: ${value("phone")}`,
      `${spanish ? "Dirección de la propiedad" : "Property address"}: ${value("propertyAddress")}`,
      `${spanish ? "Fecha prevista de cierre" : "Anticipated closing date"}: ${value("closingDate")}`,
      "",spanish ? "Notas:" : "Notes:",value("notes"),"",
      spanish ? "Entiendo que esta revisión es informativa y no garantiza la asegurabilidad, aceptación de una compañía, prima ni cobertura." : "I understand this review is informational and does not guarantee insurability, carrier acceptance, premium, or coverage.",
    ].join("\n");
    const subject = `${spanish ? "Revisión de reclamaciones de propiedad" : "Building Claims Check Request"} - ${value("propertyAddress")}`;
    setReady({
      email: `mailto:${agents.abraham.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(agents.abraham.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    });
    trackEvent("building_claims_check_prepared", { form_type: "building_claims_check" });
  }

  if (ready) return <div className="quote-ready"><h2>{spanish ? "Su solicitud está lista." : "Your request is ready."}</h2><p>{spanish ? "Elija su aplicación de correo y pulse Enviar. Abraham recibe la solicitud cuando usted la envía." : "Choose your email app, review the message, and press Send. Abraham receives the request when you send it."}</p><div className="button-row"><a className="button" href={ready.email}>{spanish ? "Abrir correo" : "Open Email App"}</a><a className="button button-secondary" href={ready.gmail} target="_blank" rel="noreferrer">{spanish ? "Abrir Gmail" : "Open Gmail"}</a></div></div>;

  return <form className="quote-form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid">
      <label>{spanish ? "Nombre" : "Name"}<input name="name" required autoComplete="name" /></label>
      <label>{spanish ? "Empresa" : "Company"}<input name="company" autoComplete="organization" /></label>
      <label>{spanish ? "¿Cómo participa en la compra?" : "How are you involved in the purchase?"}<select name="role" required defaultValue=""><option value="" disabled>{spanish ? "Seleccione" : "Select"}</option>{["Buyer","Real estate agent","Loan officer or mortgage professional","Escrow professional","Other"].map(role=><option key={role} value={role}>{spanish ? ({Buyer:"Comprador","Real estate agent":"Agente de bienes raíces","Loan officer or mortgage professional":"Oficial de préstamos o profesional hipotecario","Escrow professional":"Profesional de escrow",Other:"Otro"} as Record<string,string>)[role] : role}</option>)}</select></label>
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
