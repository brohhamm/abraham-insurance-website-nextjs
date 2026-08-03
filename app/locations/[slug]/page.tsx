import { notFound } from "next/navigation";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { getServiceLocation, serviceLocations } from "@/content/locations";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return serviceLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getServiceLocation(slug);
  return location ? {
    title: `Insurance Agent & Broker in ${location.name}, CA`,
    description: location.summary,
    alternates: { canonical: `/locations/${location.slug}` },
  } : { title: "Southern California Insurance" };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getServiceLocation(slug);
  if (!location) notFound();
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${siteConfig.url}/#service-areas` },
      { "@type": "ListItem", position: 3, name: location.name, item: `${siteConfig.url}/locations/${location.slug}` },
    ],
  };
  return <><PageHero eyebrow={location.eyebrow} title={`Insurance support for ${location.name}`}>{location.summary}</PageHero>
    <nav className="shell breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><span>Service Areas</span><span>›</span><span aria-current="page">{location.name}</span></nav>
    <section className="section"><div className="shell service-layout"><div><p className="lead-small">{location.intro}</p><h2>Coverage needs commonly reviewed</h2><ul className="service-list">{location.localNeeds.map((item) => <li key={item}>{item}</li>)}</ul></div><aside className="details-card"><h2>Local access</h2><p>{location.officeNote}</p><p><strong>Direct:</strong> <a className="text-link" href={siteConfig.phoneHref}>{siteConfig.directPhone}</a></p><p><strong>CA License:</strong> {siteConfig.license}</p><div className="profile-links"><Link className="button" href={`/contact?market=${encodeURIComponent(location.name)}`}>Request Local Quote Support</Link><Link className="text-link" href={location.officeHref}>{location.officeLabel} →</Link></div></aside></div></section>
    <section className="section risk-context"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Local risk guide</p><h2>What can affect coverage and cost in {location.name}.</h2></div><p>These are educational starting points. Carrier models, inspection results, claims history, building characteristics, coverage selections, and the exact risk address determine the actual underwriting result.</p></div><div className="local-risk-grid">{location.risks.map((risk) => <article key={risk.title}><h3>{risk.title}</h3><p><strong>Local signal:</strong> {risk.signal}</p><p><strong>Insurance impact:</strong> {risk.insurance}</p><a href={risk.resourceUrl} target="_blank" rel="noreferrer">{risk.resourceLabel} ↗</a></article>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Official resources</p><h2>Check the exact address before making a coverage decision.</h2></div><p>Maps and public data change. Use the current government source, then confirm insurance eligibility and coverage with a licensed professional.</p></div><div className="resource-link-grid">{location.additionalResources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.url}><strong>{resource.label}</strong><span>Open official resource ↗</span></a>)}</div><p className="disclaimer">This guide is general insurance education, not legal advice, a hazard determination, or a guarantee of coverage. Flood, earthquake, wildfire, auto, landlord, and liability coverage vary by policy and carrier.</p></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Coverage options</p><h2>Personal and commercial insurance</h2></div><p>Begin with the protection you need, then review eligibility, limits, deductibles, and available markets.</p></div><div className="location-links"><Link href="/personal-insurance"><strong>Personal Insurance</strong><span>Home, auto, renters, condo, landlord, umbrella, life, and earthquake →</span></Link><Link href="/business-insurance"><strong>Business Insurance</strong><span>GL, property, workers’ compensation, commercial auto, BOP, and cyber →</span></Link><Link href="/wildfire-insurance"><strong>Wildfire & Earthquake</strong><span>FAIR Plan, DIC, CEA, readiness, and retrofit resources →</span></Link></div></div></section>
    <CTA />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>;
}
