"use client";
import { FormEvent, MouseEvent, useState } from "react";
import { event, buildRsvpMessage, parseRegistration, smsHref, gmailHref, emailHref, isRsvpOpen, ClientStatus, Guest } from "@/lib/event-rsvp";

const messages = {
  en: {
    name: "Full name", phone: "Phone number", email: "Email",
    client: "Are you the primary named insured on a current policy with our agency?",
    count: "Total people attending, including you", guest: "Guest",
    guestClient: "Is this guest the primary named insured on a current agency policy?",
    notes: "Dietary or accessibility requests (optional; no sensitive medical details)",
    yes: "Yes", no: "No", unsure: "Not sure",
    text: "Text My RSVP", gmail: "Email My RSVP with Gmail", emailApp: "Use another email app",
    ready: "Your RSVP message is ready",
    instructions: "Choose text or email below. We prepare your message; you press Send in your messaging app or Gmail. Your place is confirmed only after the agency replies.",
    pending: "Your request has not been sent by this website. Opening a message does not submit an RSVP, reserve seats, or confirm delivery.",
    open: "Open Text Message", copy: "Copy Message", copied: "Message copied. Paste it into your preferred message or email app, then press Send.",
    copyFailed: "Copy was unavailable. Select and copy the prepared message below.",
    edit: "Edit details", privacy: "Your details stay in this form until you choose a text or email handoff, or copy the message. They are used for event coordination. This page does not save registrations or subscribe you to marketing.",
    help: "For assistance, changes, or cancellations, call",
    closed: "Registration closed on November 23. Please call the office.",
    invalid: "Check your contact details and enter a different full name for each guest.",
    preview: "Prepared RSVP message", fallback: "No messaging app available? Copy the message or use another email app.",
    recipient: "Text: 714-388-9533 · Email: Abraham.aduran@farmersagency.com",
  },
  es: {
    name: "Nombre completo", phone: "Número de teléfono", email: "Correo electrónico",
    client: "¿Es usted el asegurado principal de una póliza vigente con nuestra agencia?",
    count: "Total de asistentes, incluyéndose a usted", guest: "Invitado",
    guestClient: "¿Es este invitado el asegurado principal de una póliza vigente con la agencia?",
    notes: "Necesidades alimentarias o de accesibilidad (opcional; no incluya detalles médicos sensibles)",
    yes: "Sí", no: "No", unsure: "No estoy seguro",
    text: "Enviar mi solicitud por mensaje de texto", gmail: "Enviar mi solicitud con Gmail", emailApp: "Usar otra aplicación de correo",
    ready: "Su mensaje de solicitud está listo",
    instructions: "Elija mensaje de texto o correo electrónico. Preparamos su mensaje; usted pulsa Enviar en su aplicación de mensajes o Gmail. Su lugar se confirma únicamente cuando la agencia responda.",
    pending: "Este sitio no ha enviado su solicitud. Abrir un mensaje no registra su asistencia, reserva lugares ni confirma la entrega.",
    open: "Abrir mensaje de texto", copy: "Copiar mensaje", copied: "Mensaje copiado. Péguelo en su aplicación de mensajes o correo y pulse Enviar.",
    copyFailed: "No se pudo copiar automáticamente. Seleccione y copie el mensaje preparado a continuación.",
    edit: "Editar datos", privacy: "Sus datos permanecen en este formulario hasta que abra su aplicación de mensajes o correo, o copie el mensaje. Se utilizan para coordinar el evento. Esta página no guarda registros ni lo suscribe a publicidad.",
    help: "Para asistencia, cambios o cancelaciones, llame al",
    closed: "El registro cerró el 23 de noviembre. Llame a la oficina.",
    invalid: "Revise sus datos de contacto e ingrese un nombre completo diferente para cada invitado.",
    preview: "Mensaje de solicitud preparado", fallback: "¿No tiene una aplicación de mensajes disponible? Copie el mensaje o use otra aplicación de correo.",
    recipient: "Mensajes: 714-388-9533 · Correo: Abraham.aduran@farmersagency.com",
  },
};
type Channel = "text" | "gmail" | "email" | "copy";
export function EventRsvpForm({ locale }: { locale: "en" | "es" }) {
  const t = messages[locale];
  const [details, setDetails] = useState({ name: "", phone: "", email: "", client: "unsure" as ClientStatus, notes: "" });
  const [guests, setGuests] = useState<Guest[]>([]);
  const [message, setMessage] = useState(""), [error, setError] = useState(""), [copyStatus, setCopyStatus] = useState("");
  function choices() { return <><option value="unsure">{t.unsure}</option><option value="yes">{t.yes}</option><option value="no">{t.no}</option></>; }
  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text); setCopyStatus(t.copied); }
    catch { setCopyStatus(t.copyFailed); }
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setCopyStatus("");
    if (!isRsvpOpen()) { setError(t.closed); return; }
    try {
      const text = buildRsvpMessage(parseRegistration({ ...details, guests, locale }));
      const channel = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value as Channel || "text";
      setMessage(text);
      if (channel === "gmail") window.open(gmailHref(text, locale), "_blank", "noopener,noreferrer");
      else if (channel === "email") window.location.href = emailHref(text, locale);
      else if (channel === "copy") void copy(text);
      else window.location.href = smsHref(text);
    } catch { setError(t.invalid); }
  }
  function guard(e: MouseEvent<HTMLAnchorElement>) {
    if (!isRsvpOpen()) { e.preventDefault(); setError(t.closed); }
  }
  if (message) return <section className="rsvp-ready" aria-labelledby="rsvp-ready-title">
    <p className="holiday-kicker">{locale === "es" ? "Un paso más" : "One more step"}</p>
    <h3 id="rsvp-ready-title" tabIndex={-1}>{t.ready}</h3>
    <p role="status">{t.pending}</p><p>{t.instructions}</p>
    <div className="rsvp-channels"><a className="button" href={smsHref(message)} onClick={guard}>{t.open}</a><a className="button rsvp-gmail" href={gmailHref(message, locale)} target="_blank" rel="noopener noreferrer" onClick={guard}>{t.gmail}</a></div>
    <div className="rsvp-fallbacks"><a href={emailHref(message, locale)} onClick={guard}>{t.emailApp}</a><button type="button" onClick={() => void copy(message)}>{t.copy}</button></div>
    <p className="rsvp-recipient">{t.recipient}</p>
    <label className="rsvp-preview">{t.preview}<textarea readOnly rows={12} value={message} /></label>
    {copyStatus && <p role="status">{copyStatus}</p>}{error && <p role="alert">{error}</p>}
    <p>{t.help} <a href="tel:+19516538888">951-653-8888</a>.</p>
    <button type="button" className="button button-secondary" onClick={() => { setMessage(""); setError(""); }}>{t.edit}</button>
  </section>;
  return <form className="quote-form" onSubmit={submit}>
    <label>{t.name}<input required minLength={2} maxLength={100} autoComplete="name" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} /></label>
    <div className="form-grid"><label>{t.phone}<input required type="tel" maxLength={30} autoComplete="tel" value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} /></label><label>{t.email}<input required type="email" maxLength={180} autoComplete="email" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} /></label></div>
    <label>{t.client}<select value={details.client} onChange={e => setDetails({ ...details, client: e.target.value as ClientStatus })}>{choices()}</select></label>
    <label>{t.count}<select value={guests.length + 1} onChange={e => { const count = Number(e.target.value) - 1; setGuests(old => Array.from({ length: count }, (_, i) => old[i] ?? { name: "", client: "unsure" })); }}>{Array.from({ length: event.capacity }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>
    {guests.map((g, i) => <fieldset key={i} className="rsvp-guest"><legend>{t.guest} {i + 1}</legend><label>{t.name}<input required minLength={2} maxLength={100} value={g.name} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, name: e.target.value } : x))} /></label><label>{t.guestClient}<select value={g.client} onChange={e => setGuests(old => old.map((x, n) => n === i ? { ...x, client: e.target.value as ClientStatus } : x))}>{choices()}</select></label></fieldset>)}
    <label>{t.notes}<textarea maxLength={500} rows={2} value={details.notes} onChange={e => setDetails({ ...details, notes: e.target.value })} /></label>
    <p className="service-disclosure">{t.privacy}</p><p>{t.instructions}</p>
    {error && <p role="alert">{error}</p>}
    <div className="rsvp-channels"><button className="button" type="submit" value="text">{t.text}</button><button className="button rsvp-gmail" type="submit" value="gmail">{t.gmail}</button></div>
    <p className="rsvp-recipient">{t.recipient}</p><p className="service-disclosure">{t.fallback}</p>
    <div className="rsvp-fallbacks"><button type="submit" value="email">{t.emailApp}</button><button type="submit" value="copy">{t.copy}</button></div>
  </form>;
}
