"use client";
import { FormEvent, useState } from "react";
import { event, buildRsvpMessage, parseRegistration, smsHref, ClientStatus, Guest } from "@/lib/event-rsvp";

const messages = {
  en: { name: "Full name", phone: "Phone number", email: "Email", client: "Are you the primary named insured on a current policy with our agency?", count: "Total people attending, including you", guest: "Guest", guestClient: "Is this guest the primary named insured on a current agency policy?", notes: "Dietary or accessibility requests (optional; no sensitive medical details)", yes: "Yes", no: "No", unsure: "Not sure", submit: "Text My RSVP", ready: "Your RSVP message is ready", instructions: "Tap Send in your messaging app to send your request to Abraham at 714-388-9533. Your place is confirmed only after the agency replies. This page does not send or save your RSVP automatically.", open: "Open Text Message", copy: "Copy Message", copied: "Message copied", edit: "Edit details", privacy: "Your details stay in this form until you send or copy the message. Sent details are used by the agency to coordinate the event. This does not subscribe you to marketing.", help: "If texting is unavailable, copy the message or call", closed: "Registration closed on November 23. Please call the office.", invalid: "Check your contact details and enter a different full name for each guest.", preview: "Prepared RSVP message" },
  es: { name: "Nombre completo", phone: "Número de teléfono", email: "Correo electrónico", client: "¿Es usted el asegurado principal de una póliza vigente con nuestra agencia?", count: "Total de asistentes, incluyéndose a usted", guest: "Invitado", guestClient: "¿Es este invitado el asegurado principal de una póliza vigente con la agencia?", notes: "Necesidades alimentarias o de accesibilidad (opcional; no incluya detalles médicos sensibles)", yes: "Sí", no: "No", unsure: "No estoy seguro", submit: "Enviar mi solicitud por mensaje de texto", ready: "Su mensaje está listo", instructions: "Pulse Enviar en su aplicación de mensajes para enviar su solicitud a Abraham al 714-388-9533. Su lugar se confirma únicamente cuando la agencia responda. Esta página no envía ni guarda su solicitud automáticamente.", open: "Abrir mensaje de texto", copy: "Copiar mensaje", copied: "Mensaje copiado", edit: "Editar datos", privacy: "Sus datos permanecen en este formulario hasta que envíe o copie el mensaje. La agencia utiliza los datos enviados para coordinar el evento. Esto no lo suscribe a publicidad.", help: "Si no puede enviar mensajes, copie el mensaje o llame al", closed: "El registro cerró el 23 de noviembre. Llame a la oficina.", invalid: "Revise sus datos de contacto e ingrese un nombre completo diferente para cada invitado.", preview: "Mensaje de solicitud preparado" },
};
export function EventRsvpForm({ locale }: { locale: "en" | "es" }) {
  const t = messages[locale];
  const [details, setDetails] = useState({ name: "", phone: "", email: "", client: "unsure" as ClientStatus, notes: "" });
  const [guests, setGuests] = useState<Guest[]>([]);
  const [message, setMessage] = useState(""), [error, setError] = useState(""), [copied, setCopied] = useState(false);
  function choices() { return <><option value="unsure">{t.unsure}</option><option value="yes">{t.yes}</option><option value="no">{t.no}</option></>; }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError("");
    if (Date.now() >= event.deadline) { setError(t.closed); return; }
    try {
      const text = buildRsvpMessage(parseRegistration({ ...details, guests, locale }));
      setMessage(text); setCopied(false); window.location.href = smsHref(text);
    } catch { setError(t.invalid); }
  }
  if (message) return <section className="quote-ready"><h3>{t.ready}</h3><p role="status">{t.instructions}</p><div className="actions"><a className="button" href={smsHref(message)} onClick={e => { if (Date.now() >= event.deadline) { e.preventDefault(); setError(t.closed); } }}>{t.open}</a><button className="button secondary" type="button" onClick={async () => { try { await navigator.clipboard.writeText(message); setCopied(true); } catch { setCopied(false); } }}>{t.copy}</button></div><label>{t.preview}<textarea readOnly rows={12} value={message} /></label>{copied && <p role="status">{t.copied}</p>}{error && <p role="alert">{error}</p>}<p>{t.help} <a href="tel:+19516538888">951-653-8888</a>.</p><button type="button" className="button secondary" onClick={() => setMessage("")}>{t.edit}</button></section>;
  return <form className="quote-form" onSubmit={submit}>
    <label>{t.name}<input required minLength={2} maxLength={100} autoComplete="name" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} /></label>
    <div className="form-grid"><label>{t.phone}<input required type="tel" maxLength={30} autoComplete="tel" value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} /></label><label>{t.email}<input required type="email" maxLength={180} autoComplete="email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} /></label></div>
    <label>{t.client}<select value={details.client} onChange={e => setDetails({ ...details, client: e.target.value as ClientStatus })}>{choices()}</select></label>
    <label>{t.count}<select value={guests.length + 1} onChange={e => { const count = Number(e.target.value) - 1; setGuests(old => Array.from({ length: count }, (_, i) => old[i] ?? { name: "", client: "unsure" })); }}>{Array.from({ length: 50 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>
    {guests.map((g, i) => <fieldset key={i} className="rsvp-guest"><legend>{t.guest} {i + 1}</legend><label>{t.name}<input required minLength={2} maxLength={100} value={g.name} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, name: e.target.value } : x))} /></label><label>{t.guestClient}<select value={g.client} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, client: e.target.value as ClientStatus } : x))}>{choices()}</select></label></fieldset>)}
    <label>{t.notes}<textarea maxLength={500} rows={2} value={details.notes} onChange={e => setDetails({ ...details, notes: e.target.value })} /></label>
    <p className="service-disclosure">{t.privacy}</p><p>{t.instructions}</p>{error && <p role="alert">{error}</p>}<button className="button" type="submit">{t.submit}</button>
  </form>;
}
