"use client";
import { FormEvent, useRef, useState } from "react";
import { ClientStatus, Guest } from "@/lib/event-rsvp";

const messages = {
  en: { name: "Full name", phone: "Phone number", email: "Email", client: "Are you the primary named insured on a current policy with our agency?", count: "Total people attending, including you", guest: "Guest", guestClient: "Is this guest the primary named insured on a current agency policy?", notes: "Dietary or accessibility requests (optional)", yes: "Yes", no: "No", unsure: "Not sure", submit: "RSVP", busy: "Saving your RSVP…", done: "You're on the guest list!", ref: "Your registration reference", details: "Thursday, December 10, 2026 · 5–8 p.m.", privacy: "Your contact and guest details are used to coordinate this event and are sent to the agency's event coordinator by text and email. Optional requests are available only to authorized staff. Registration does not subscribe you to marketing or attendee text messages.", help: "For corrections or cancellations, call", full: "The event is full. Please call the office for assistance.", closed: "Registration closed on November 23. Please call the office for assistance.", duplicate: "We already have a registration using this email or phone. Please call the office for changes.", conflict: "This request has already been used. Please contact the office before submitting again.", rate: "Too many attempts. Please try again later or call the office.", invalid: "Please check your contact details and enter a different full name for each guest.", unavailable: "We could not confirm your RSVP. Please retry or call the office. If you already received a reference, your RSVP is saved." },
  es: { name: "Nombre completo", phone: "Número de teléfono", email: "Correo electrónico", client: "¿Es usted el asegurado principal de una póliza vigente con nuestra agencia?", count: "Total de asistentes, incluyéndose a usted", guest: "Invitado", guestClient: "¿Es este invitado el asegurado principal de una póliza vigente con la agencia?", notes: "Necesidades alimentarias o de accesibilidad (opcional)", yes: "Sí", no: "No", unsure: "No estoy seguro", submit: "Confirmar asistencia", busy: "Guardando su confirmación…", done: "¡Su asistencia está confirmada!", ref: "Su número de confirmación", details: "Jueves 10 de diciembre de 2026 · 5–8 p. m.", privacy: "Sus datos de contacto y los de sus invitados se utilizan para coordinar este evento y se envían al coordinador de la agencia por mensaje de texto y correo electrónico. Las solicitudes opcionales están disponibles únicamente para el personal autorizado. Su registro no lo suscribe a publicidad ni a mensajes de texto para asistentes.", help: "Para cambios o cancelaciones, llame al", full: "El evento está lleno. Llame a la oficina para recibir asistencia.", closed: "El registro cerró el 23 de noviembre. Llame a la oficina para recibir asistencia.", duplicate: "Ya existe un registro con este correo o teléfono. Llame a la oficina para realizar cambios.", conflict: "Esta solicitud ya fue utilizada. Comuníquese con la oficina antes de volver a registrarse.", rate: "Se realizaron demasiados intentos. Inténtelo más tarde o llame a la oficina.", invalid: "Revise sus datos de contacto e ingrese un nombre completo diferente para cada invitado.", unavailable: "No pudimos confirmar su asistencia. Inténtelo de nuevo o llame a la oficina. Si ya recibió un número de confirmación, su registro está guardado." },
};
export function EventRsvpForm({ locale }: { locale: "en" | "es" }) {
  const t = messages[locale];
  const [guests, setGuests] = useState<Guest[]>([]);
  const [busy, setBusy] = useState(false), [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const requestId = useRef("");
  function choices() { return <><option value="unsure">{t.unsure}</option><option value="yes">{t.yes}</option><option value="no">{t.no}</option></>; }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (busy || reference) return;
    setBusy(true); setError("");
    if (!requestId.current) requestId.current = crypto.randomUUID();
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/events/rsvp", { method: "POST", headers: { "Content-Type": "application/json", "Idempotency-Key": requestId.current }, body: JSON.stringify({ name: data.get("name"), phone: data.get("phone"), email: data.get("email"), client: data.get("client"), notes: data.get("notes"), website: data.get("website"), locale, guests }) });
      const result = await r.json();
      if (!r.ok || !result.ok || !result.reference) {
        setError(t[result.error as keyof typeof t] ?? t.unavailable); return;
      }
      setReference(result.reference);
    } catch { setError(t.unavailable); }
    finally { setBusy(false); }
  }
  if (reference) return <section className="quote-ready" role="status"><h2>{t.done}</h2><p>{t.details}</p><p>13800 Heacock St., Suite C120, Moreno Valley, CA 92553</p><p>{t.ref}: <strong className="rsvp-reference">{reference}</strong></p><p>{t.help} <a href="tel:+19516538888">951-653-8888</a>.</p></section>;
  return <form className="quote-form" onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <fieldset disabled={busy} className="rsvp-fields">
      <label>{t.name}<input name="name" required minLength={2} maxLength={100} autoComplete="name" /></label>
      <div className="form-grid"><label>{t.phone}<input name="phone" required type="tel" maxLength={30} autoComplete="tel" /></label><label>{t.email}<input name="email" required type="email" maxLength={180} autoComplete="email" /></label></div>
      <label>{t.client}<select name="client">{choices()}</select></label>
      <label>{t.count}<select value={guests.length + 1} onChange={e => { const count = Number(e.target.value) - 1; setGuests(old => Array.from({ length: count }, (_, i) => old[i] ?? { name: "", client: "unsure" })); }}>{Array.from({ length: 50 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>
      {guests.map((g, i) => <fieldset key={i} className="rsvp-guest"><legend>{t.guest} {i + 1}</legend><label>{t.name}<input required minLength={2} maxLength={100} value={g.name} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, name: e.target.value } : x))} /></label><label>{t.guestClient}<select value={g.client} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, client: e.target.value as ClientStatus } : x))}>{choices()}</select></label></fieldset>)}
      <label>{t.notes}<textarea name="notes" maxLength={500} rows={2} /></label>
      <p className="service-disclosure">{t.privacy}</p>
      {error && <p role="alert">{error}</p>}
      <button className="button" type="submit">{busy ? t.busy : t.submit}</button>
    </fieldset>
  </form>;
}
