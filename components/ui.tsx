"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath } from "@/lib/i18n";

const learnMap: Record<string, string> = {
  "Home & Property": "/insurance/homeowners-insurance",
  "Auto & Umbrella": "/insurance/auto-insurance",
  "Business Insurance": "/insurance/general-liability-insurance",
  "Life Insurance": "/insurance/life-insurance",
  "Escrow Support": "/education/insurance-before-escrow",
  "Carrier Options": "/carriers",
  "Homeowners": "/insurance/homeowners-insurance",
  "Auto": "/insurance/auto-insurance",
  "Renters": "/insurance/renters-insurance",
  "Condo": "/insurance/condo-insurance",
  "Landlord": "/insurance/landlord-insurance",
  "Umbrella": "/insurance/umbrella-insurance",
  "Life": "/insurance/life-insurance",
  "Earthquake": "/insurance/earthquake-insurance",
  "General Liability": "/insurance/general-liability-insurance",
  "Commercial Property": "/insurance/commercial-property-insurance",
  "Workers’ Compensation": "/insurance/workers-compensation-insurance",
  "Commercial Auto": "/insurance/commercial-auto-insurance",
  "Business Owners Policy": "/insurance/business-owners-policy",
  "Industry Review": "/insurance/cyber-professional-liability",
};

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-hero"><div className="shell narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{children}</p></div></section>;
}

export function CTA() {
  const es=localeFromPath(usePathname())==="es";
  return <section className="cta"><div className="shell cta-inner"><div><p className="eyebrow light">{es?"Siguientes pasos claros":"Clear next steps"}</p><h2>{es?"Revisemos sus necesidades de seguro.":"Let’s review your insurance needs."}</h2><p>{es?"Reciba orientación oportuna y opciones de cobertura basadas en su situación.":"Receive responsive guidance and coverage options based on your situation."}</p></div><div className="button-row"><Link className="button button-light" href={es?"/es/contacto":"/contact"}>{es?"Solicitar una cotización":"Request a Quote"}</Link><a className="button button-outline-light" href="tel:+17143889533">{es?"Llamar al":"Call"} 714-388-9533</a></div></div></section>;
}

export function Cards({ items }: { items: readonly { title: string; text: string }[] }) {
  const pathname=usePathname(); const es=localeFromPath(pathname)==="es";
  return <div className="card-grid">{items.map((item) => {
    const learnHref = learnMap[item.title];
    return <article className="card" key={item.title}><div className="card-mark" aria-hidden="true">✓</div><h3>{item.title}</h3><p>{item.text}</p><div className="card-actions"><Link className="card-link" href={`${es?"/es/contacto":"/contact"}?insurance=${encodeURIComponent(item.title)}`}>{es?"Solicitar una cotización":"Request a Quote"} →</Link>{learnHref ? <Link className="learn-link" href={es?localizePath(learnHref,"es"):learnHref}>{es?"Conozca esta cobertura":"Learn about this coverage"} →</Link> : null}</div></article>;
  })}</div>;
}
