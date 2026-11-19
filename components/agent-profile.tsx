import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { agents, siteConfig } from "@/lib/site-config";
import { AbrahamReviews } from "@/components/client-reviews";
import { AbrahamProfileExperience } from "@/components/abraham-experience";
import { abrahamSocials } from "@/content/abraham-experience";

type Agent = "abraham" | "rosalia";

const profiles = {
  en: {
    abraham: {
      name: "Abraham Nunez-Chavez",
      eyebrow: "Moreno Valley insurance agent and broker",
      intro: "Coverage-focused insurance advice for your home purchase, rental properties, business, vehicles, and family. California License No. 4357305.",
      license: "CA Lic. No. 4357305",
      image: "/images/abraham-nunez-chavez-insurance-agent.jpg",
      alt: "Abraham Nunez-Chavez, licensed insurance producer serving Southern California",
      bio: "Abraham helps individuals, families, property owners, businesses, Realtors, lenders, and escrow teams compare coverage options with clear explanations of premiums, deductibles, limits, and underwriting requirements.",
      detail: "At Abel Duran Insurance Agency, Inc., Abraham compares Farmers and additional brokerage markets, explains the differences, and coordinates the policies around your needs. Brokerage policies are issued by separate insurers.",
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
      phone: agents.rosalia.phone,
      phoneHref: agents.rosalia.phoneHref,
      textHref: agents.rosalia.textHref,
      email: "rosalia.aduran@farmersagency.com",
      quoteHref: "/contact?agent=rosalia",
      quoteLabel: "Request a Quote With Rosalia",
      callLabel: "Call Rosalia",
      textLabel: "Text Rosalia",
      officeLabel: "Moreno Valley office",
      role: "Insurance Agent/Broker",
    },
  },
  es: {
    abraham: {
      name: "Abraham Nunez-Chavez",
      eyebrow: "Agente y corredor de seguros en Moreno Valley",
      intro: "Orientación enfocada en cobertura para su compra de vivienda, alquileres, negocio, vehículos y familia. Licencia de California n.º 4357305.",
      license: "Lic. de CA n.º 4357305",
      image: "/images/abraham-nunez-chavez-insurance-agent.jpg",
      alt: "Abraham Nunez-Chavez, productor de seguros con licencia al servicio del sur de California",
      bio: "Abraham ayuda a personas, familias, propietarios, negocios, Realtors, prestamistas y equipos de escrow a comparar opciones de cobertura con explicaciones claras de primas, deducibles, límites y requisitos de suscripción.",
      detail: "En Abel Duran Insurance Agency, Inc., Abraham compara Farmers y otros mercados de corretaje, explica las diferencias y coordina las pólizas según sus necesidades. Las pólizas de corretaje son emitidas por aseguradoras separadas.",
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
      phone: agents.rosalia.phone,
      phoneHref: agents.rosalia.phoneHref,
      textHref: agents.rosalia.textHref,
      email: "rosalia.aduran@farmersagency.com",
      quoteHref: "/es/contacto?agent=rosalia",
      quoteLabel: "Solicitar una cotización con Rosalia",
      callLabel: "Llamar a Rosalia",
      textLabel: "Enviar mensaje a Rosalia",
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
    ...(agent === "abraham" ? { "@id": `${siteConfig.url}/abraham-nunez-chavez#person`, url: `${siteConfig.url}/abraham-nunez-chavez`, sameAs: Object.values(abrahamSocials), knowsLanguage: ["English", "Spanish"], knowsAbout: ["Landlord insurance", "DP-3", "Homebuyer insurance coordination", "Commercial liability", "Inland marine", "Life insurance", "Insurance coverage reviews"] } : {}),
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
    </div></section>{agent === "abraham" && <><AbrahamProfileExperience locale={locale} /><AbrahamReviews locale={locale} /></>}<CTA /><script id={`${agent}-person-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
