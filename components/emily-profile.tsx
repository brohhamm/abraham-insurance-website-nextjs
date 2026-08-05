import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export function EmilyProfile({ locale }: { locale: "en" | "es" }) {
  const spanish = locale === "es";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emily Lussier",
    image: `${siteConfig.url}/images/emily-lussier-yorba-linda-insurance-professional.jpg`,
    jobTitle: "Customer Service Representative",
    identifier: "California Insurance License No. 4440213",
    worksFor: { "@type": "InsuranceAgency", name: "Abel Duran Insurance Agency, Inc." },
    telephone: "+1-714-701-6411",
    email: "emily.aduran@farmersagency.com",
    address: { "@type": "PostalAddress", streetAddress: "23621 La Palma Ave., Suite A", addressLocality: "Yorba Linda", addressRegion: "CA", postalCode: "92887", addressCountry: "US" },
    sameAs: ["https://www.linkedin.com/in/emily-lussier/"],
  };

  return <>
    <PageHero eyebrow={spanish ? "Conozca a Emily Lussier" : "Meet Emily Lussier"} title={spanish ? "Servicio local para los clientes de la oficina de Yorba Linda." : "Local policy support from the Yorba Linda office."}>
      {spanish ? "Emily ayuda a los clientes con preguntas sobre pólizas, documentos, facturación, renovaciones y solicitudes generales de servicio." : "Emily assists clients with policy questions, documents, billing guidance, renewals, and general account support."}
    </PageHero>
    <section className="section"><div className="shell profile-layout">
      <div className="photo-frame portrait-frame"><Image src="/images/emily-lussier-yorba-linda-insurance-professional.jpg" alt={spanish ? "Emily Lussier, profesional de seguros con licencia en la oficina de Yorba Linda" : "Emily Lussier, licensed insurance professional at the Yorba Linda office"} fill sizes="(max-width: 760px) 75vw, 340px" priority /></div>
      <div><p className="eyebrow">{spanish ? "Representante de servicio al cliente · Lic. de CA n.º 4440213" : "Customer Service Representative · CA Lic. No. 4440213"}</p><h2>{spanish ? "Atención clara para sus necesidades de servicio." : "Clear help for your policy-service needs."}</h2>
        <p>{spanish ? "Emily ayuda a los clientes de Yorba Linda con preguntas sobre pólizas, documentos, orientación de facturación, renovaciones y apoyo general de sus cuentas." : "Emily assists Yorba Linda clients with policy questions, documents, billing guidance, renewals, and general account support."}</p>
        <p>{spanish ? "Trabaja desde la oficina de Yorba Linda de Abel Duran Insurance Agency, Inc. Para cotizaciones nuevas, el equipo puede conectarlo con el agente con licencia adecuado." : "She works from the Yorba Linda office of Abel Duran Insurance Agency, Inc. For new quotes, the team can connect you with the appropriate licensed agent."}</p>
        <div className="button-row"><a className="button" href="mailto:emily.aduran@farmersagency.com">{spanish ? "Enviar correo a Emily" : "Email Emily"}</a><a className="button button-secondary" href="tel:+17147016411">{spanish ? "Llamar al 714-701-6411" : "Call 714-701-6411"}</a><a className="button button-secondary" href="https://www.linkedin.com/in/emily-lussier/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <aside className="details-card details-wrap"><h2>{spanish ? "Oficina de Yorba Linda" : "Yorba Linda office"}</h2><dl><dt>{spanish ? "Dirección" : "Address"}</dt><dd>{siteConfig.yorbaLindaOffice}</dd><dt>{spanish ? "Oficina principal" : "Main office"}</dt><dd><a href="tel:+17147016411">714-701-6411</a></dd><dt>{spanish ? "Correo electrónico" : "Email"}</dt><dd><a href="mailto:emily.aduran@farmersagency.com">emily.aduran@farmersagency.com</a></dd></dl><Link className="text-link" href={spanish ? "/es/oficina-yorba-linda" : "/yorba-linda-office"}>{spanish ? "Conozca al equipo de Yorba Linda →" : "Meet the Yorba Linda team →"}</Link></aside>
      </div>
    </div></section><CTA /><script id="emily-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
