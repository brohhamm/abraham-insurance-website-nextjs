import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Moreno Valley Insurance Office | Abel Duran Insurance Agency",
  description: "Meet Abel Duran, Abraham Nunez-Chavez, Rosalia Elizabeth Gomez, and the service team at the Moreno Valley office. Call 951-653-8888.",
  alternates:{canonical:"/moreno-valley-office",languages:{"en-US":"/moreno-valley-office","es-US":"/es/oficina-moreno-valley","x-default":"/moreno-valley-office"}},
};

const specialties = ["Homeowners", "Auto", "Landlord", "Life", "Commercial", "Workers’ compensation", "Commercial auto", "Umbrella", "Wildfire", "Earthquake"];

export default function MorenoValleyOfficePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Abel Duran Insurance Agency — Moreno Valley",
    url: `${siteConfig.url}/moreno-valley-office`,
    telephone: "+1-951-653-8888",
    address: { "@type": "PostalAddress", streetAddress: "13800 Heacock St., Suite C120", addressLocality: "Moreno Valley", addressRegion: "CA", postalCode: "92553", addressCountry: "US" },
    parentOrganization: { "@type": "InsuranceAgency", name: "Abel Duran Insurance Agency, Inc.", identifier: "California Agency License No. 0K15422" },
    employee: [
      { "@type": "Person", name: "Abel Duran", jobTitle: "Owner and Principal Agent", identifier: "California Insurance License No. 0F17442" },
      { "@type": "Person", name: "Abraham Nunez-Chavez", jobTitle: "Insurance Agent and Broker", identifier: "California Insurance License No. 4357305" },
      { "@type": "Person", name: "Rosalia Elizabeth Gomez", image: `${siteConfig.url}/images/rosalia-elizabeth-gomez-insurance-agent.jpg`, jobTitle: "Insurance Agent and Broker", identifier: "California Insurance License No. 0K37042" },
      { "@type": "Person", name: "Rashel Dominguez", jobTitle: "Insurance Services Specialist", identifier: "California Insurance License No. 4412046" },
      { "@type": "Person", name: "Suzee Cervantes", jobTitle: "Insurance Services Specialist", identifier: "California Insurance License No. 4494455" },
    ],
  };

  return <>
    <PageHero eyebrow="Moreno Valley office" title="Local insurance guidance and policy support in Moreno Valley.">Meet the Abel Duran Insurance Agency team serving Riverside County from 13800 Heacock Street, Suite C120.</PageHero>
    <section className="office-gallery" aria-label="Moreno Valley office"><div className="shell office-gallery-grid"><div><Image src="/images/moreno-valley-front-desk.jpg" alt="Front desk at the Moreno Valley Farmers Insurance office" fill sizes="(max-width: 760px) 100vw, 58vw" priority /></div><div><Image src="/images/private-office.jpg" alt="Private meeting office at the Moreno Valley insurance agency" fill sizes="(max-width: 760px) 100vw, 42vw" /></div></div></section>
    <section className="section"><div className="shell office-summary"><div><p className="eyebrow">One agency · Two locations</p><h2>Owned and led by Abel Duran.</h2><p>The Moreno Valley office is the primary location for Abel Duran Insurance Agency. Licensed agents assist with new coverage and dedicated service specialists help existing clients with policy documents, billing, renewals, and account requests.</p><div className="button-row"><a className="button" href="tel:+19516538888">Call 951-653-8888</a><a className="button button-secondary" href="https://maps.google.com/?q=13800+Heacock+St+Suite+C120+Moreno+Valley+CA+92553" target="_blank" rel="noreferrer">Get Directions ↗</a></div></div><aside className="details-card"><h2>Office details</h2><dl><dt>Address</dt><dd>{siteConfig.morenoValleyOffice}</dd><dt>Main office</dt><dd><a href="tel:+19516538888">951-653-8888</a></dd><dt>Fax</dt><dd>951-656-3333</dd><dt>Hours</dt><dd>{siteConfig.hours}</dd><dt>Second location</dt><dd>{siteConfig.yorbaLindaOffice} · <a href="tel:+17147016411">714-701-6411</a></dd></dl></aside></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Moreno Valley team</p><h2>Agents and customer service.</h2></div><p>Choose a licensed agent for quote and coverage guidance or a service specialist for help with an existing policy.</p></div><div className="location-team-grid moreno-team-grid">
      <article className="location-profile"><div className="location-profile-photo"><Image src="/images/abel-duran.jpg" alt="Abel Duran, owner and principal agent" fill sizes="(max-width: 760px) 100vw, 25vw" priority /></div><div><p className="eyebrow">Owner and principal agent</p><h2>Abel Duran</h2><p><strong>CA Lic. No. 0F17442</strong></p><p>Abel owns and leads both agency locations and assists with personal, commercial, and life insurance.</p><div className="profile-links"><Link className="text-link" href="/abel-duran">View Abel’s profile →</Link><Link className="text-link" href="/contact?agent=abel">Request a quote with Abel →</Link></div></div></article>
      <article className="location-profile"><div className="location-profile-photo"><Image src="/images/abraham-nunez-chavez-insurance-agent.jpg" alt="Abraham Nunez-Chavez, licensed insurance producer serving Southern California" fill sizes="(max-width: 760px) 100vw, 25vw" /></div><div><p className="eyebrow">Insurance Agent / Broker</p><h2>Abraham Nunez-Chavez</h2><p><strong>CA Lic. No. 4357305</strong></p><p>Abraham assists with personal, commercial, life, escrow, wildfire, and difficult-to-insure property needs.</p><div className="profile-links"><Link className="text-link" href="/about">Meet Abraham →</Link><a className="text-link" href="tel:+17143889533">Call or text 714-388-9533 →</a><a className="text-link" href="mailto:Abraham.aduran@farmersagency.com">Email Abraham →</a></div></div></article>
      <article className="location-profile"><div className="location-profile-photo"><Image src="/images/rosalia-elizabeth-gomez-insurance-agent.jpg" alt="Rosalia Elizabeth Gomez, licensed insurance agent at the Moreno Valley office" fill sizes="(max-width: 760px) 100vw, 25vw" /></div><div><p className="eyebrow">Insurance Agent / Broker · Moreno Valley</p><h2>Rosalia Elizabeth Gomez</h2><p><strong>California Insurance License No. 0K37042</strong></p><p>Rosalia assists individuals, families, property owners, and businesses with personal, commercial, and life insurance.</p><p>Based at the Moreno Valley office. In-person appointments at the Yorba Linda office are available upon request.</p><div className="profile-links"><Link className="text-link" href="/contact?agent=rosalia">Request a quote with Rosalia →</Link><a className="text-link" href="tel:9516538888">Call 951-653-8888 →</a></div></div></article>
      <article className="location-profile"><div className="location-profile-placeholder" aria-hidden="true">RD</div><div><p className="eyebrow">Insurance Services Specialist</p><h2>Rashel Dominguez</h2><p><strong>CA Lic. No. 4412046</strong></p><p>Rashel assists existing clients with policy questions, documents, billing guidance, renewals, and service requests.</p><div className="profile-links"><a className="text-link" href="mailto:rashel.aduran@farmersagency.com">Email Rashel →</a><a className="text-link" href="tel:+19516538888">Call 951-653-8888 →</a></div></div></article>
      <article className="location-profile"><div className="location-profile-placeholder" aria-hidden="true">SC</div><div><p className="eyebrow">Insurance Services Specialist</p><h2>Suzee Cervantes</h2><p><strong>CA Lic. No. 4494455</strong></p><p>Suzee helps existing clients with policy documents, account questions, billing guidance, and policy-service requests.</p><div className="profile-links"><a className="text-link" href="mailto:suzee.aduran@farmersagency.com">Email Suzee →</a><a className="text-link" href="tel:+19516538888">Call 951-653-8888 →</a></div></div></article>
    </div></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Local coverage intelligence</p><h2>Moreno Valley and Riverside County risk guides.</h2></div><p>Review official wildfire, earthquake, flood, auto-rating, and landlord resources before requesting coverage.</p></div><div className="location-links"><Link href="/locations/moreno-valley"><strong>Moreno Valley risk guide</strong><span>City-specific hazards, insurance impacts, and official resources →</span></Link><Link href="/locations/riverside-county"><strong>Riverside County risk guide</strong><span>Countywide wildfire, earthquake, flood, auto, and landlord considerations →</span></Link></div></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Coverage options</p><h2>Personal, commercial, catastrophe, and life insurance.</h2></div><p>Availability varies by carrier, eligibility, underwriting, and coverage selection.</p></div><div className="specialty-grid">{specialties.map((item) => <span key={item}>{item} insurance</span>)}</div><p className="disclaimer">Submitting a request does not bind or change coverage. Coverage is effective only after confirmation by a licensed insurance professional or applicable carrier.</p></div></section>
    <script id="moreno-valley-office-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
