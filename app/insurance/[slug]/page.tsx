import { notFound } from "next/navigation";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { getInsuranceService, insuranceServices } from "@/content/services";
import { siteConfig } from "@/lib/site-config";
import { alternatesFor } from "@/lib/i18n";
import { GriefSupport } from "@/components/grief-support";

export function generateStaticParams() {
  return insuranceServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getInsuranceService(slug);
  return service ? {
    title: `${service.name} in Southern California`,
    description: `${service.summary} Serving Moreno Valley, Riverside County, Yorba Linda, and Orange County.`,
    alternates: alternatesFor(`/insurance/${service.slug}`),
  } : { title: "Insurance Coverage" };
}

export default async function InsuranceServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getInsuranceService(slug);
  if (!service) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    provider: { "@type": "InsuranceAgency", "@id": `${siteConfig.url}/#insurance-agency`, name: siteConfig.name },
    areaServed: ["Moreno Valley", "Riverside County", "Yorba Linda", "Orange County", "Southern California"],
    url: `${siteConfig.url}/insurance/${service.slug}`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: service.category === "Personal" ? "Personal Insurance" : "Business Insurance", item: `${siteConfig.url}/${service.category === "Personal" ? "personal-insurance" : "business-insurance"}` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/insurance/${service.slug}` },
    ],
  };
  return <><PageHero eyebrow={`${service.category} insurance · Southern California`} title={service.name}>{service.summary}</PageHero>
    <nav className="shell breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href={service.category === "Personal" ? "/personal-insurance" : "/business-insurance"}>{service.category} Insurance</Link><span>›</span><span aria-current="page">{service.name}</span></nav>
    <section className="section"><div className="shell service-layout"><div><p className="lead-small">{service.intro}</p><h2>What this coverage can protect</h2><ul className="service-list">{service.protects.map((item) => <li key={item}>{item}</li>)}</ul></div><aside className="limit-panel service-limit"><p className="eyebrow">Common limits and starting points</p><p>{service.limits}</p><small>Actual recommendations depend on the applicant, risk, contracts, carrier, and policy.</small><Link className="button" href={`/contact?insurance=${encodeURIComponent(service.name)}`}>Request a {service.name} Quote</Link></aside></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Prepare for a quote</p><h2>Information that helps produce an accurate option</h2></div><p>No Social Security number, payment information, or sensitive documents are requested through the website.</p></div><div className="quote-info-grid">{service.quoteInfo.map((item, index) => <article key={item}><strong>0{index + 1}</strong><p>{item}</p></article>)}</div></div></section>
    <section className="section"><div className="shell service-layout"><div><p className="eyebrow">Common questions</p><h2>What clients commonly ask</h2><div className="faq-list">{service.commonQuestions.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div><aside className="guide-callout"><p className="eyebrow">Coverage guide</p><h2>Understand the details before comparing price.</h2><p>Review limits, tradeoffs, and California resources related to this coverage.</p><Link className="text-link" href={`/education/${service.guideSlug}`}>Read the related guide →</Link></aside></div></section>
    {service.slug === "life-insurance" ? <section className="section soft"><div className="shell"><GriefSupport placement="life" /></div></section> : null}
    <CTA />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>;
}
