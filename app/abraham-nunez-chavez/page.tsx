import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Abraham Nunez-Chavez | Insurance Agent and Broker in Southern California",
  description: "Meet Abraham Nunez-Chavez, a licensed insurance agent and broker serving Moreno Valley, Yorba Linda, Riverside County, and Orange County. CA Lic. 4357305.",
  alternates: { canonical: "/abraham-nunez-chavez", languages: { "en-US": "/abraham-nunez-chavez", "es-US": "/es/abraham-nunez-chavez", "x-default": "/abraham-nunez-chavez" } },
};

const specialties = ["Homeowners", "Auto", "Landlord", "Umbrella", "Life", "Commercial", "Workers’ compensation", "Commercial auto", "Wildfire and FAIR Plan", "Earthquake", "Escrow support"];

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: "Abraham Nunez-Chavez", image: `${siteConfig.url}/images/abraham-nunez-chavez-insurance-agent.jpg`, jobTitle: "Insurance Agent and Broker", worksFor: { "@type": "InsuranceAgency", name: "Abel Duran Insurance Agency, Inc." }, telephone: "+1-714-388-9533", email: siteConfig.email, address: { "@type": "PostalAddress", streetAddress: "13800 Heacock St., Suite C120", addressLocality: "Moreno Valley", addressRegion: "CA", postalCode: "92553", addressCountry: "US" }, areaServed: ["Moreno Valley", "Yorba Linda", "Riverside County", "Orange County", "Southern California"], knowsLanguage: ["English", "Spanish"], url: `${siteConfig.url}/abraham-nunez-chavez`, identifier: "California Insurance License No. 4357305" };
  return <>
    <PageHero eyebrow="Meet Abraham Nunez-Chavez" title="Clear coverage guidance with access to personal and commercial insurance markets.">Abraham helps individuals, families, property owners, businesses, and referral partners compare coverage options throughout Southern California.</PageHero>
    <section className="section"><div className="shell profile-layout"><div className="photo-frame portrait-frame"><Image src="/images/abraham-nunez-chavez-insurance-agent.jpg" alt="Abraham Nunez-Chavez, licensed insurance producer serving Southern California" fill sizes="(max-width: 760px) 75vw, 340px" priority /></div><div><p className="eyebrow">Insurance Agent / Broker · CA Lic. No. 4357305</p><h2>Coverage, responsiveness, and practical options.</h2><p>Abraham is a licensed insurance producer affiliated with the Office of Abel Duran. He assists with personal, commercial, and life insurance, including escrow, wildfire-area, and difficult-to-insure property needs.</p><p>His approach focuses on explaining coverage clearly, identifying gaps, comparing available carrier options, and helping clients understand how limits and deductibles may affect a claim.</p><p>Abraham also supports real estate professionals, lenders, and escrow teams with responsive quotes and lender-ready insurance documentation.</p><div className="button-row"><Link className="button" href="/contact?agent=abraham">Request a Quote With Abraham</Link><a className="button button-secondary" href="tel:+17143889533">Call Abraham</a><a className="button button-secondary" href="sms:+17143889533">Text Abraham</a></div><aside className="details-card details-wrap"><h2>Contact and office</h2><dl><dt>Direct line and text</dt><dd><a href="tel:+17143889533">714-388-9533</a></dd><dt>Email</dt><dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd><dt>Moreno Valley office</dt><dd>{siteConfig.morenoValleyOffice}</dd><dt>Second location</dt><dd>{siteConfig.yorbaLindaOffice}</dd></dl></aside></div></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Coverage specialties</p><h2>Personal, commercial, life, and catastrophe insurance.</h2></div><p>Coverage availability depends on carrier eligibility, underwriting, location, limits, and the selected policy.</p></div><div className="specialty-grid">{specialties.map(item => <span key={item}>{item} insurance</span>)}</div></div></section>
    <CTA/><script id="abraham-profile-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
