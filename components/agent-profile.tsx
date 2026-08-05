import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

type Agent = "abraham" | "rosalia";

const profiles = {
  en: {
    abraham: {
      name: "Abraham Nunez-Chavez",
      eyebrow: "Moreno Valley insurance agent and broker",
      intro: "Personal, commercial, life, escrow, wildfire, and difficult-to-insure property guidance from a licensed Southern California producer.",
      license: "CA Lic. No. 4357305",
      image: "/images/abraham-nunez-chavez-insurance-agent.jpg",
      alt: "Abraham Nunez-Chavez, licensed insurance producer serving Southern California",
      bio: "Abraham helps individuals, families, property owners, businesses, Realtors, lenders, and escrow teams compare coverage options with clear explanations of premiums, deductibles, limits, and underwriting requirements.",
      detail: "He works through Abel Duran Insurance Agency, Inc. and can review Farmers Insurance solutions as well as additional brokerage markets when appropriate. Non-Farmers carriers are separate insurers and are not affiliated with Farmers Insurance.",
      office: siteConfig.morenoValleyOffice,
      phone: "714-388-9533",
      phoneHref: "tel:+17143889533",
      textHref: "sms:+17143889533",
      email: "Abraham.aduran@farmersagency.com",
      quoteHref: "/contact?agent=abraham",
      quoteLabel: "Request a Quote With Abraham",
      callLabel: "Call Abraham",
      textLabel: "Text Abraham",
      officeLabel: "Moreno Valley office",
      role: "Insurance Agent/Broker",
    },
    rosalia: {
      name: "Rosalia Elizabeth Gomez",
      eyebrow: "Moreno Valley insurance agent and broker",
      intro: "Personal, commercial, and life insurance assistance from the Moreno Valley office of Abel Duran Insurance Agency.",
      license: "CA Lic. No. 0K37042",
      image: "/images/rosalia-elizabeth-gomez-insurance-agent.jpg",
      alt: "Rosalia Elizabeth Gomez, licensed insurance agent at the Moreno Valley office",
      bio: "Rosalia assists with personal, commercial, and life insurance. Her primary office is in Moreno Valley.",
      detail: "She works through Abel Duran Insurance Agency, Inc. and helps clients connect with appropriate quote and coverage support based on their insurance needs.",
      office: siteConfig.morenoValleyOffice,
      phone: "951-653-8888",
      phoneHref: "tel:+19516538888",
      textHref: "sms:+19516538888",
      email: "rosalia.aduran@farmersagency.com",
      quoteHref: "/contact?agent=rosalia",
      quoteLabel: "Request a Quote With Rosalia",
      callLabel: "Call the Moreno Valley Office",
      textLabel: "Text the Moreno Valley Office",
      officeLabel: "Moreno Valley office",
      role: "Insurance Agent/Broker",
    },
  },
  es: {
    abraham: {
      name: "Abraham Nunez-Chavez",
      eyebrow: "Agente y corredor de seguros en Moreno Valley",
      intro: "Orientación sobre seguros personales, comerciales y de vida, escrow, incendios forestales y propiedades difíciles de asegurar de un productor con licencia en el sur de California.",
      license: "Lic. de CA n.º 4357305",
      image: "/images/abraham-nunez-chavez-insurance-agent.jpg",
      alt: "Abraham Nunez-Chavez, productor de seguros con licencia al servicio del sur de California",
      bio: "Abraham ayuda a personas, familias, propietarios, negocios, Realtors, prestamistas y equipos de escrow a comparar opciones de cobertura con explicaciones claras de primas, deducibles, límites y requisitos de suscripción.",
      detail: "Trabaja a través de Abel Duran Insurance Agency, Inc. y puede revisar soluciones de Farmers Insurance y mercados adicionales de corretaje cuando corresponda. Las aseguradoras que no son Farmers son compañías separadas y no están afiliadas con Farmers Insurance.",
      office: siteConfig.morenoValleyOffice,
      phone: "714-388-9533",
      phoneHref: "tel:+17143889533",
      textHref: "sms:+17143889533",
      email: "Abraham.aduran@farmersagency.com",
      quoteHref: "/es/contacto?agent=abraham",
      quoteLabel: "Solicitar una cotización con Abraham",
      callLabel: "Llamar a Abraham",
      textLabel: "Enviar mensaje a Abraham",
      officeLabel: "Oficina de Moreno Valley",
      role: "Agente/Corredor de Seguros",
    },
    rosalia: {
      name: "Rosalia Elizabeth Gomez",
      eyebrow: "Agente y corredora de seguros en Moreno Valley",
      intro: "Asistencia con seguros personales, comerciales y de vida desde la oficina de Moreno Valley de Abel Duran Insurance Agency.",
      license: "Lic. de CA n.º 0K37042",
      image: "/images/rosalia-elizabeth-gomez-insurance-agent.jpg",
      alt: "Rosalia Elizabeth Gomez, agente de seguros con licencia en la oficina de Moreno Valley",
      bio: "Rosalia ofrece asistencia con seguros personales, comerciales y de vida. Su oficina principal está en Moreno Valley.",
      detail: "Trabaja a través de Abel Duran Insurance Agency, Inc. y ayuda a los clientes a comunicarse con el apoyo adecuado para cotizaciones y coberturas según sus necesidades de seguro.",
      office: siteConfig.morenoValleyOffice,
      phone: "951-653-8888",
      phoneHref: "tel:+19516538888",
      textHref: "sms:+19516538888",
      email: "rosalia.aduran@farmersagency.com",
      quoteHref: "/es/contacto?agent=rosalia",
      quoteLabel: "Solicitar una cotización con Rosalia",
      callLabel: "Llamar a la oficina de Moreno Valley",
      textLabel: "Enviar mensaje a la oficina de Moreno Valley",
      officeLabel: "Oficina de Moreno Valley",
      role: "Agente/Corredora de Seguros",
    },
  },
} as const;

export function AgentProfile({ agent, locale }: { agent: Agent; locale: "en" | "es" }) {
  const profile = profiles[locale][agent];
  const spanish = locale === "es";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    image: `${siteConfig.url}${profile.image}`,
    jobTitle: profile.role,
    worksFor: { "@type": "InsuranceAgency", name: "Abel Duran Insurance Agency, Inc." },
    telephone: profile.phoneHref.replace("tel:", ""),
    email: profile.email,
    address: { "@type": "PostalAddress", streetAddress: "13800 Heacock St., Suite C120", addressLocality: "Moreno Valley", addressRegion: "CA", postalCode: "92553", addressCountry: "US" },
  };

  return <>
    <PageHero eyebrow={profile.eyebrow} title={profile.name}>{profile.intro}</PageHero>
    <section className="section"><div className="shell profile-layout">
      <div className={`photo-frame portrait-frame ${agent === "rosalia" ? "rosalia-profile-photo" : ""}`}><Image src={profile.image} alt={profile.alt} fill sizes="(max-width: 760px) 75vw, 340px" priority /></div>
      <div><p className="eyebrow">{profile.license}</p><h2>{spanish ? "Orientación clara y servicio local." : "Clear guidance and local service."}</h2><p>{profile.bio}</p><p>{profile.detail}</p>
        <div className="button-row"><Link className="button" href={profile.quoteHref}>{profile.quoteLabel}</Link><a className="button button-secondary" href={profile.phoneHref}>{profile.callLabel}</a><a className="button button-secondary" href={profile.textHref}>{profile.textLabel}</a></div>
        <aside className="details-card details-wrap"><h2>{profile.officeLabel}</h2><dl><dt>{spanish ? "Dirección" : "Address"}</dt><dd>{profile.office}</dd><dt>{spanish ? "Teléfono" : "Phone"}</dt><dd><a href={profile.phoneHref}>{profile.phone}</a></dd><dt>{spanish ? "Correo electrónico" : "Email"}</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></dl></aside>
      </div>
    </div></section><CTA /><script id={`${agent}-person-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
