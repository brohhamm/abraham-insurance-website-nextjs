"use client";

import { FormEvent, MouseEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { agents } from "@/lib/site-config";
import { localeFromPath } from "@/lib/i18n";

type ContactLinks = { gmail: string; email: string; text: string } | null;

const personalOptions = [
  "Homeowners Insurance",
  "Auto Insurance",
  "Renters Insurance",
  "Condo Insurance",
  "Landlord Insurance",
  "Umbrella Insurance",
  "Life Insurance",
  "Earthquake Insurance",
] as const;
const commercialOptions = [
  "General Liability Insurance",
  "Workers’ Compensation Insurance",
  "Commercial Auto Insurance",
  "Business Owners Policy",
  "Commercial Property Insurance",
  "Contractor Insurance",
  "Cyber & Professional Liability",
] as const;
const otherOptions = [
  "Escrow or lender request",
  "Referral partnership",
  "Other",
] as const;
const insuranceOptions = [
  ...personalOptions,
  ...commercialOptions,
  ...otherOptions,
];

const insuranceAliases: Record<string, string> = {
  "Home & Property": "Homeowners Insurance",
  Home: "Homeowners Insurance",
  "Auto & Umbrella": "Auto Insurance",
  Auto: "Auto Insurance",
  Renters: "Renters Insurance",
  Condo: "Condo Insurance",
  Landlord: "Landlord Insurance",
  Umbrella: "Umbrella Insurance",
  Life: "Life Insurance",
  "Business Insurance": "General Liability Insurance",
  Commercial: "General Liability Insurance",
  "Workers’ compensation": "Workers’ Compensation Insurance",
  "Commercial auto": "Commercial Auto Insurance",
  "Escrow Support": "Escrow or lender request",
  "Carrier Options": "Other",
};

function createRequestMessage(
  data: Record<string, FormDataEntryValue>,
  es = false,
) {
  const value = (key: string) => String(data[key] || "Not provided");
  if (es)
    return [
      `Hola ${value("preferredAgent") === "first" ? "equipo de la agencia" : value("preferredAgentName")}:`,
      "",
      "Solicito asistencia con un seguro.",
      "",
      `Agente solicitado: ${value("preferredAgentName")}`,
      `Lugar preferido para la cita: ${value("meetingOffice")}`,
      `Nombre: ${value("firstName")} ${value("lastName")}`,
      `Teléfono: ${value("phone")}`,
      `Correo electrónico: ${value("email")}`,
      `Método de contacto preferido: ${value("contactMethod")}`,
      `Código postal: ${value("zip")}`,
      `Tipo de seguro: ${value("insuranceType")}`,
      `Área de servicio o mercado: ${value("market")}`,
      `Aseguradora actual: ${value("currentCarrier")}`,
      `Fecha de vigencia deseada: ${value("effectiveDate")}`,
      "",
      "Detalles adicionales:",
      value("description"),
      "",
      "Entiendo que esta solicitud no obliga ni modifica cobertura alguna.",
    ].join("\n");
  return [
    `Hello ${value("preferredAgent") === "first" ? "Agency Team" : value("preferredAgentName")},`,
    "",
    "I am requesting insurance assistance.",
    "",
    `Requested agent: ${value("preferredAgentName")}`,
    `Preferred meeting location: ${value("meetingOffice")}`,
    `Name: ${value("firstName")} ${value("lastName")}`,
    `Phone: ${value("phone")}`,
    `Email: ${value("email")}`,
    `Preferred contact method: ${value("contactMethod")}`,
    `ZIP code: ${value("zip")}`,
    `Insurance type: ${value("insuranceType")}`,
    `Service area or selected market: ${value("market")}`,
    `Current carrier: ${value("currentCarrier")}`,
    `Desired effective date: ${value("effectiveDate")}`,
    "",
    "Additional details:",
    value("description"),
    "",
    "I understand this request does not bind or alter coverage.",
  ].join("\n");
}

export function QuoteForm({
  partner = false,
  initialInsuranceType = "",
  initialMarket = "",
  initialAgent = "first",
}: {
  partner?: boolean;
  initialInsuranceType?: string;
  initialMarket?: string;
  initialAgent?: keyof typeof agents | "first";
}) {
  const es = localeFromPath(usePathname()) === "es";
  const selectedInsurance =
    insuranceAliases[initialInsuranceType] ||
    (insuranceOptions.includes(
      initialInsuranceType as (typeof insuranceOptions)[number],
    )
      ? initialInsuranceType
      : partner
        ? "Referral partnership"
        : "");
  const [step, setStep] = useState(1);
  const [links, setLinks] = useState<ContactLinks>(null);
  const [message, setMessage] = useState("");
  const [coverage, setCoverage] = useState(selectedInsurance);
  const [zipCode, setZipCode] = useState("");
  const [preferredAgent, setPreferredAgent] = useState<
    keyof typeof agents | "first"
  >(initialAgent);

  function continueToContact(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    const insurance = form?.elements.namedItem(
      "insuranceType",
    ) as HTMLSelectElement | null;
    const zip = form?.elements.namedItem("zip") as HTMLInputElement | null;
    if (!insurance?.reportValidity() || !zip?.reportValidity()) return;
    setStep(2);
    requestAnimationFrame(() =>
      document.getElementById("quote-step-heading")?.focus(),
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    if (payload.website) return;
    const selected =
      preferredAgent === "first" ? agents.abraham : agents[preferredAgent];
    payload.preferredAgent = preferredAgent;
    payload.preferredAgentName =
      preferredAgent === "first"
        ? es
          ? "Primer agente disponible"
          : "First available agent"
        : `${selected.name} — ${es ? "Oficina de " : ""}${selected.office}${es ? "" : " Office"}`;
    const request = createRequestMessage(payload, es);
    const subject = `${es ? (partner ? "Solicitud de socio de referidos" : "Solicitud de seguro") : (partner ? "Referral Partner" : "Insurance") + " Request"} - ${String(payload.firstName)} ${String(payload.lastName)}`;
    const email = `mailto:${selected.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(selected.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
    const text = `${selected.textHref}?&body=${encodeURIComponent(request)}`;
    setLinks({ gmail, email, text });
    setMessage(
      es
        ? "Su solicitud está lista. Elija mensaje de texto, Gmail, correo electrónico o llamada. La agencia la recibirá después de que presione Enviar en la aplicación seleccionada."
        : "Your request is ready. Choose Text, Gmail, Email, or Call below. The agency receives it after you press Send in the selected app.",
    );
  }

  return (
    <form
      className="quote-form easy-quote-form"
      onSubmit={submit}
      aria-describedby="form-note"
    >
      <div className="honeypot" aria-hidden="true">
        <label>
          {es ? "Sitio web de la empresa" : "Company website"}
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="market" value={initialMarket} />
      <div
        className="quote-progress"
        aria-label={`${es ? "Paso" : "Step"} ${step} ${es ? "de" : "of"} 2`}
      >
        <span className={step >= 1 ? "active" : ""}>1</span>
        <i />
        <span className={step >= 2 ? "active" : ""}>2</span>
        <strong>
          {es ? "Paso" : "Step"} {step} {es ? "de" : "of"} 2
        </strong>
      </div>

      {step === 1 ? (
        <fieldset className="quote-step">
          <legend>
            {es
              ? "¿Qué necesita asegurar?"
              : "What can our agency help you insure?"}
          </legend>
          <p>
            {es
              ? "Comience con dos datos. En el siguiente paso solo le preguntaremos cómo comunicarnos con usted."
              : "Start with two details. The next step only asks how to reach you."}
          </p>
          <label>
            {es ? "Cobertura necesaria" : "Coverage needed"}
            <select
              name="insuranceType"
              required
              value={coverage}
              onChange={(event) => setCoverage(event.target.value)}
            >
              <option value="" disabled>
                {es ? "Seleccione una cobertura" : "Select coverage"}
              </option>
              <optgroup
                label={es ? "Seguros personales" : "Personal insurance"}
              >
                {personalOptions.map((item) => (
                  <option key={item} value={item}>
                    {es
                      ? (
                          {
                            "Homeowners Insurance": "Seguro de casa",
                            "Auto Insurance": "Seguro de auto",
                            "Renters Insurance": "Seguro para inquilinos",
                            "Condo Insurance": "Seguro de condominio",
                            "Landlord Insurance": "Seguro para propietarios",
                            "Umbrella Insurance": "Seguro paraguas",
                            "Life Insurance": "Seguro de vida",
                            "Earthquake Insurance": "Seguro contra terremotos",
                          } as Record<string, string>
                        )[item]
                      : item}
                  </option>
                ))}
              </optgroup>
              <optgroup
                label={es ? "Seguros comerciales" : "Business insurance"}
              >
                {commercialOptions.map((item) => (
                  <option key={item} value={item}>
                    {es
                      ? (
                          {
                            "General Liability Insurance":
                              "Responsabilidad civil general",
                            "Workers’ Compensation Insurance":
                              "Compensación laboral",
                            "Commercial Auto Insurance": "Auto comercial",
                            "Business Owners Policy":
                              "Póliza para dueños de negocio",
                            "Commercial Property Insurance":
                              "Propiedad comercial",
                            "Contractor Insurance": "Seguro para contratistas",
                            "Cyber & Professional Liability":
                              "Responsabilidad cibernética y profesional",
                          } as Record<string, string>
                        )[item]
                      : item}
                  </option>
                ))}
              </optgroup>
              <optgroup label={es ? "Otras solicitudes" : "Other requests"}>
                {otherOptions.map((item) => (
                  <option key={item} value={item}>
                    {es
                      ? (
                          {
                            "Escrow or lender request":
                              "Solicitud de escrow o prestamista",
                            "Referral partnership": "Socio de referidos",
                            Other: "Otro",
                          } as Record<string, string>
                        )[item]
                      : item}
                  </option>
                ))}
              </optgroup>
            </select>
          </label>
          <label>
            {es ? "Código postal" : "ZIP code"}
            <input
              name="zip"
              required
              inputMode="numeric"
              pattern="[0-9]{5}(-[0-9]{4})?"
              autoComplete="postal-code"
              placeholder="92553"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </label>
          <label>
            {es
              ? "¿Con quién prefiere trabajar?"
              : "Who would you prefer to work with?"}
            <select
              name="preferredAgent"
              value={preferredAgent}
              onChange={(event) =>
                setPreferredAgent(
                  event.target.value as keyof typeof agents | "first",
                )
              }
            >
              <option value="first">
                {es
                  ? "Sin preferencia — primer agente disponible"
                  : "No preference — first available agent"}
              </option>
              {Object.entries(agents).map(([key, agent]) => (
                <option key={key} value={key}>
                  {agent.name} — {es ? "Oficina de " : ""}
                  {agent.office}
                  {es ? "" : " Office"}
                </option>
              ))}
            </select>
          </label>
          {preferredAgent !== "first" ? (
            <p className="selected-market">
              {agents[preferredAgent].office === "Yorba Linda"
                ? es
                  ? "Su oficina principal está en Yorba Linda. Puede solicitar una cita presencial en la oficina de Moreno Valley."
                  : "Based at the Yorba Linda office. In-person appointments at the Moreno Valley office are available upon request."
                : es
                  ? "Su oficina principal está en Moreno Valley. Puede solicitar una cita presencial en la oficina de Yorba Linda."
                  : "Based at the Moreno Valley office. In-person appointments at the Yorba Linda office are available upon request."}
            </p>
          ) : null}
          {initialMarket ? (
            <p className="selected-market">
              <strong>
                {es ? "Área de servicio o mercado" : "Service area or market"}:
              </strong>{" "}
              {initialMarket}
            </p>
          ) : null}
          <button
            className="button quote-next"
            type="button"
            onClick={continueToContact}
          >
            {es ? "Continuar" : "Continue"} →
          </button>
          <p className="privacy-reassurance">
            {es
              ? "No solicitamos su número de Seguro Social, licencia de conducir ni información de pago."
              : "No Social Security number, driver’s license number, or payment information is requested."}
          </p>
        </fieldset>
      ) : null}

      {step === 2 && !links ? (
        <fieldset className="quote-step">
          <input type="hidden" name="insuranceType" value={coverage} />
          <input type="hidden" name="zip" value={zipCode} />
          <legend id="quote-step-heading" tabIndex={-1}>
            {es
              ? "¿Cómo debemos comunicarnos con usted?"
              : "How should we contact you?"}
          </legend>
          <p>
            {es
              ? "Solo se requieren su nombre y teléfono. Los demás datos son opcionales."
              : "Only your name and phone number are required. Everything else is optional."}
          </p>
          <div className="form-grid">
            <label>
              {es ? "Nombre" : "First name"}
              <input name="firstName" required autoComplete="given-name" />
            </label>
            <label>
              {es ? "Apellido" : "Last name"}
              <input name="lastName" required autoComplete="family-name" />
            </label>
            <label>
              {es ? "Teléfono" : "Phone"}
              <input
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                placeholder="(714) 555-0123"
              />
            </label>
            <label>
              {es ? "Correo electrónico" : "Email"}{" "}
              <span>({es ? "opcional" : "optional"})</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              {es ? "Contacto preferido" : "Preferred contact"}
              <select
                name="contactMethod"
                defaultValue={es ? "Mensaje de texto" : "Text"}
              >
                <option>{es ? "Mensaje de texto" : "Text"}</option>
                <option>{es ? "Teléfono" : "Phone"}</option>
                <option>{es ? "Correo electrónico" : "Email"}</option>
              </select>
            </label>
            <label>
              {es
                ? "Lugar preferido para una cita"
                : "Preferred meeting location"}
              <select
                name="meetingOffice"
                defaultValue={es ? "Sin preferencia" : "No preference"}
              >
                <option>{es ? "Sin preferencia" : "No preference"}</option>
                <option>
                  {es
                    ? "Oficina de Moreno Valley — solicitud de cita"
                    : "Moreno Valley Office — appointment request"}
                </option>
                <option>
                  {es
                    ? "Oficina de Yorba Linda — solicitud de cita"
                    : "Yorba Linda Office — appointment request"}
                </option>
                <option>
                  {es ? "Teléfono o virtual" : "Phone or virtual"}
                </option>
              </select>
            </label>
            <label>
              {es ? "Fecha de vigencia deseada" : "Desired effective date"}{" "}
              <span>({es ? "opcional" : "optional"})</span>
              <input name="effectiveDate" type="date" />
            </label>
          </div>
          <details className="optional-details">
            <summary>
              {es
                ? "Agregar aseguradora actual u otros detalles (opcional)"
                : "Add current carrier or extra details (optional)"}
            </summary>
            <div>
              <label>
                {es ? "Aseguradora actual" : "Current carrier"}
                <input name="currentCarrier" />
              </label>
              <label>
                {es ? "¿Cómo podemos ayudarle?" : "How can we help?"}
                <textarea name="description" rows={4} />
              </label>
            </div>
          </details>
          <label className="consent">
            <input name="consent" type="checkbox" value="yes" required />{" "}
            {es
              ? "Acepto que se comuniquen conmigo sobre esta solicitud. Prepararla no obliga ni modifica cobertura alguna."
              : "I agree to be contacted about this request. Preparing a request does not bind or alter coverage."}
          </label>
          <div className="quote-navigation">
            <button
              className="button button-secondary"
              type="button"
              onClick={() => setStep(1)}
            >
              ← {es ? "Atrás" : "Back"}
            </button>
            <button className="button" type="submit">
              {es
                ? partner
                  ? "Preparar solicitud de referido"
                  : "Elegir cómo enviar"
                : partner
                  ? "Prepare Partner Request"
                  : "Choose How to Send"}
            </button>
          </div>
        </fieldset>
      ) : null}

      {links ? (
        <section className="quote-ready" aria-labelledby="quote-ready-title">
          <div className="ready-mark" aria-hidden="true">
            ✓
          </div>
          <h2 id="quote-ready-title">
            {es ? "Su solicitud está lista." : "Your request is ready."}
          </h2>
          <p id="form-note" className="form-message success">
            {message}
          </p>
          <div
            className="contact-action-panel"
            aria-label={
              es
                ? "Enviar su solicitud de cotización"
                : "Send your quote request"
            }
          >
            <a className="button" href={links.text}>
              {es ? "Enviar mensaje al agente" : "Text selected agent"}
            </a>
            <a
              className="button button-secondary"
              href={links.gmail}
              target="_blank"
              rel="noreferrer"
            >
              {es ? "Abrir Gmail" : "Open Gmail"}
            </a>
            <a className="button button-secondary" href={links.email}>
              {es ? "Otra aplicación de correo" : "Other Email App"}
            </a>
            <a
              className="button button-secondary"
              href={
                (preferredAgent === "first"
                  ? agents.abraham
                  : agents[preferredAgent]
                ).phoneHref
              }
            >
              {es ? "Llamar al" : "Call"}{" "}
              {
                (preferredAgent === "first"
                  ? agents.abraham
                  : agents[preferredAgent]
                ).phone
              }
            </a>
          </div>
          <button
            className="text-link reset-button"
            type="button"
            onClick={() => {
              setLinks(null);
              setMessage("");
              setCoverage(selectedInsurance);
              setZipCode("");
              setStep(1);
            }}
          >
            {es ? "Comenzar de nuevo" : "Start over"}
          </button>
        </section>
      ) : null}
      {!links ? (
        <p id="form-note" className="form-message">
          {es
            ? "Solicitud rápida en dos pasos. No use este formulario para reclamos ni cambios urgentes de póliza."
            : "Fast two-step request. Do not use this form for claims or urgent policy changes."}
        </p>
      ) : null}
    </form>
  );
}
