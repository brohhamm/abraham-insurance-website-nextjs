import Image from "next/image";
import Link from "next/link";
import { guidanceLinks } from "@/content/abraham-guidance";
import { experience, abrahamCities, abrahamSocials, type ExperienceTopic } from "@/content/abraham-experience";
import { localizePath } from "@/lib/i18n";

export function AbrahamContact({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return <div className="abraham-contact"><div className="button-row"><Link className="button" href={es ? "/es/contacto?agent=abraham" : "/contact?agent=abraham"}>{es ? "Solicitar una revisión de cobertura" : "Request a Coverage Review"}</Link><a className="button button-secondary" href="tel:+17143889533">{es ? "Llamar a Abraham: " : "Call Abraham: "}714-388-9533</a><a className="button button-secondary" href="sms:+17143889533">{es ? "Enviar mensaje a Abraham" : "Text Abraham"}</a><a className="button button-secondary" href="mailto:Abraham.aduran@farmersagency.com">{es ? "Enviar correo a Abraham" : "Email Abraham"}</a></div><p className="experience-note">{es ? "Atención en inglés y español por mensaje, teléfono, correo y en persona. Para una videollamada, envíe una fecha y hora que le convengan. Abraham le responderá para confirmar la cita." : "English and Spanish consultations by text, phone, email, and in person. For a video appointment, text a date and time that work for you. Abraham will reply to confirm the appointment."}</p></div>;
}

export function ExperienceSection({ topic, locale }: { topic: ExperienceTopic; locale: "en" | "es" }) {
  const copy = experience[topic][locale];
  const es = locale === "es";
  return <section className="section soft abraham-experience"><div className="shell service-layout"><div><p className="eyebrow">{es ? "Experiencia de Abraham Nunez-Chavez" : "Experience with Abraham Nunez-Chavez"}</p><h2>{copy.title}</h2><p>{copy.text}</p><Link className="text-link" href={es ? "/es/abraham-nunez-chavez" : "/abraham-nunez-chavez"}>{es ? "Conozca a Abraham y su enfoque" : "Meet Abraham and explore his approach"}</Link></div><div className="experience-detail"><h3>{copy.question}</h3><p>{copy.answer}</p></div></div><div className="shell"><AbrahamContact locale={locale} /></div></section>;
}

export function AbrahamHomeFeature({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return <section className="section abraham-home-feature"><div className="shell abraham-home-grid">
    <div className="abraham-home-photo"><Image src="/images/abraham-nunez-chavez-insurance-agent.jpg" alt={es ? "Abraham Nunez-Chavez, agente y corredor de seguros" : "Abraham Nunez-Chavez, insurance agent and broker"} fill sizes="(max-width: 760px) 220px, 280px" /></div>
    <div><p className="eyebrow">Abraham Nunez-Chavez · {es ? "Lic. de CA n.º" : "CA Lic. No."} 4357305</p><h2>{es ? "Proteja lo que ha trabajado para construir." : "Protect what you have worked to build."}</h2>
    <p>{es ? "Su vivienda, sus alquileres y su negocio merecen una revisión que vaya más allá del precio. Abraham compara cobertura, explica diferencias y coordina requisitos con su equipo de cierre. Atiende en inglés y español desde Moreno Valley mediante Abel Duran Insurance Agency, Inc., con servicio en todo California." : "Your home, rental properties, and business deserve a review that goes beyond price. Abraham compares coverage, explains differences, and coordinates requirements with your closing team. He offers English and Spanish service from Moreno Valley through Abel Duran Insurance Agency, Inc., serving clients throughout California."}</p>
    <div className="profile-links"><Link className="text-link" href={localizePath("/insurance/homeowners-insurance", locale)}>{es ? "Vivienda y escrow" : "Homeowners and escrow"}</Link><Link className="text-link" href={localizePath("/insurance/landlord-insurance", locale)}>{es ? "Alquileres y LLC" : "Landlords and LLC rentals"}</Link><Link className="text-link" href={localizePath("/insurance/condo-insurance", locale)}>{es ? "Condominios y unidades vacantes" : "Condos and vacant units"}</Link><Link className="text-link" href={localizePath("/business-insurance", locale)}>{es ? "Negocios y empleados" : "Businesses and employees"}</Link><Link className="text-link" href={localizePath("/insurance/life-insurance", locale)}>{es ? "Vida y legado" : "Life and legacy"}</Link></div>
    <div className="button-row"><Link className="button" href={localizePath("/abraham-nunez-chavez", locale)}>{es ? "Conozca a Abraham" : "Meet Abraham"}</Link><a className="button button-secondary" href="tel:+17143889533">{es ? "Llamar: " : "Call: "}714-388-9533</a><a className="button button-secondary" href="sms:+17143889533">{es ? "Enviar mensaje" : "Text Abraham"}</a><a className="button button-secondary" href="mailto:Abraham.aduran@farmersagency.com">{es ? "Enviar correo" : "Email Abraham"}</a></div></div>
  </div></section>;
}

function PlacementExample({ copy, locale }: { copy: { text: string; example?: string; why?: string }; locale: "en" | "es" }) {
  if (!copy.example) return null;
  const es = locale === "es";
  return <details className="expertise-example"><summary>{es ? "Un caso real y por qué importa" : "A real client situation and why it matters"}</summary><p className="experience-note">{es ? "Nombres y datos identificativos omitidos por privacidad." : "Client names and identifying details omitted for privacy."}</p><p>{copy.example}</p><p><strong>{es ? "Qué significa para usted: " : "What this means for you: "}</strong>{copy.why}</p></details>;
}

export function AbrahamProfileExperience({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return <section className="section abraham-experience" id="coverage-review"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">{es ? "Su revisión con Abraham" : "Your review with Abraham"}</p><h2>{es ? "Primero la cobertura. Después, una decisión informada." : "Coverage first. Then an informed decision."}</h2></div></div>
    <p className="lead-small">{experience.review[locale].text}</p>
    <p>{es ? "Abraham Nunez-Chavez es agente y corredor de seguros con licencia de California en propiedad, accidentes y responsabilidad, vida, accidentes personales y salud. Licencia n.º 4357305. Trabaja en Abel Duran Insurance Agency, Inc., donde compara Farmers y otros mercados admitidos y no admitidos para sus clientes." : "Abraham Nunez-Chavez is a California-licensed insurance agent and broker in property, casualty, life, accident and health. License No. 4357305. At Abel Duran Insurance Agency, Inc., he compares Farmers and additional admitted and nonadmitted markets for his clients."} <Link className="text-link" href={es ? "/es/aseguradoras" : "/carriers"}>{es ? "Conozca las compañías y mercados disponibles" : "See the agency’s carriers and insurance markets"}</Link></p>
    <p>{es ? "Una aseguradora admitida tiene licencia para ofrecer ese seguro en California. Las opciones no admitidas se colocan mediante las reglas de líneas excedentes y tienen condiciones y protecciones distintas. Abraham le explica la compañía propuesta y esas diferencias antes de elegir." : "An admitted insurer is licensed to offer that insurance in California. Nonadmitted options are placed through surplus-lines rules and have different terms and consumer protections. Abraham explains the proposed company and those differences before you choose."}</p>
    <p>{es ? "Originario de Garden Grove, atiende desde la oficina de Moreno Valley a clientes en " : "Originally from Garden Grove, he serves clients from the Moreno Valley office across "}{abrahamCities.join(", ")}{es ? ", comunidades cercanas y todo California, incluyendo el Área de la Bahía, donde también atiende clientes. La agencia tiene oficinas en Moreno Valley y Yorba Linda; consulte disponibilidad con Abraham antes de programar una visita a Yorba Linda. El punto de partida es su propiedad, su familia o su negocio; Abraham identifica los mercados que aceptan ese riesgo y explica las opciones disponibles." : ", surrounding communities, and throughout California, including clients in the Bay Area. The agency’s offices are in Moreno Valley and Yorba Linda; contact Abraham to confirm availability before arranging a Yorba Linda visit. Your property, family, or business is the starting point; Abraham identifies markets that accept the risk and explains the available options."}</p>
    <div className="experience-grid">{(["homebuyer", "landlord", "commercial", "inland", "life", "auto"] as const).map(topic => {
      const copy = experience[topic][locale];
      const links = guidanceLinks[topic];
      return <article className="card" key={topic}><h3>{copy.title}</h3><p>{copy.text}</p>
        <details className="expertise-details"><summary>{copy.question}</summary><p>{copy.answer}</p></details>
        <PlacementExample copy={copy} locale={locale}/>
        {topic === "homebuyer" && <p><Link className="text-link" href={localizePath("/insurance/condo-insurance", locale)}>{es ? "Revise condominios propios, alquilados o vacantes" : "Review owner-occupied, rented, or vacant condos"}</Link></p>}
        {topic === "life" && <p><Link className="text-link" href={localizePath("/insurance/life-insurance", locale)+"#topic-life-insurance-2"}>{es ? "Conozca el ejemplo de legado entre tres generaciones" : "Understand the three-generation legacy example"}</Link></p>}
        <div className="expertise-links"><Link className="text-link" href={localizePath(links.service, locale)}>{links[locale][0]}</Link><Link className="text-link" href={localizePath(links.guide, locale)}>{links[locale][1]}</Link></div>
      </article>;
    })}</div>
    <AbrahamContact locale={locale}/>
    <div className="experience-social"><h2>{es ? "Conecte con Abraham" : "Connect with Abraham"}</h2><div className="button-row"><a className="button button-secondary" href={abrahamSocials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={es ? "Perfil de Abraham en LinkedIn (abre otra pestaña)" : "Abraham’s LinkedIn profile (opens a new tab)"}>LinkedIn</a><a className="button button-secondary" href={abrahamSocials.facebook} target="_blank" rel="noopener noreferrer" aria-label={es ? "Perfil de Abraham en Facebook (abre otra pestaña)" : "Abraham’s Facebook profile (opens a new tab)"}>Facebook</a></div></div>
  </div></section>;
}
