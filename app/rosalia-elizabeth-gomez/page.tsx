import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Rosalia Elizabeth Gomez | Insurance Agent and Broker in Moreno Valley",
  description: "Meet Rosalia Elizabeth Gomez, a licensed insurance agent and broker assisting with personal, commercial, and life insurance in Moreno Valley. CA Lic. 0K37042.",
  alternates: { canonical: "/rosalia-elizabeth-gomez", languages: { "en-US": "/rosalia-elizabeth-gomez", "es-US": "/es/rosalia-elizabeth-gomez", "x-default": "/rosalia-elizabeth-gomez" } },
};

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: "Rosalia Elizabeth Gomez", image: `${siteConfig.url}/images/rosalia-elizabeth-gomez-insurance-agent.jpg`, jobTitle: "Insurance Agent and Broker", worksFor: { "@type": "InsuranceAgency", name: "Abel Duran Insurance Agency, Inc." }, telephone: "+1-951-653-8888", address: { "@type": "PostalAddress", streetAddress: "13800 Heacock St., Suite C120", addressLocality: "Moreno Valley", addressRegion: "CA", postalCode: "92553", addressCountry: "US" }, areaServed: ["Moreno Valley", "Riverside County", "Southern California"], url: `${siteConfig.url}/rosalia-elizabeth-gomez`, identifier: "California Insurance License No. 0K37042" };
  return <>
    <PageHero eyebrow="Meet Rosalia Elizabeth Gomez" title="Personal, commercial, and life insurance support in Moreno Valley.">Rosalia assists clients from the Moreno Valley office of Abel Duran Insurance Agency.</PageHero>
    <section className="section"><div className="shell profile-layout"><div className="photo-frame portrait-frame rosalia-profile-photo"><Image src="/images/rosalia-elizabeth-gomez-insurance-agent.jpg" alt="Rosalia Elizabeth Gomez, licensed insurance agent and broker in Moreno Valley, California" fill sizes="(max-width: 760px) 75vw, 340px" priority /></div><div><p className="eyebrow">Insurance Agent / Broker · CA Lic. No. 0K37042</p><h2>Local guidance for the coverage you need.</h2><p>Rosalia assists with personal, commercial, and life insurance. Based at the Moreno Valley office, she helps clients review available coverage and move forward with the appropriate quote process.</p><p>Coverage and carrier availability vary based on eligibility, underwriting, location, selected limits, and policy terms.</p><div className="button-row"><Link className="button" href="/contact?agent=rosalia">Request a Quote With Rosalia</Link><a className="button button-secondary" href="tel:+19516538888">Call 951-653-8888</a></div><aside className="details-card details-wrap"><h2>Moreno Valley office</h2><dl><dt>Address</dt><dd>{siteConfig.morenoValleyOffice}</dd><dt>Main office</dt><dd><a href="tel:+19516538888">951-653-8888</a></dd><dt>Office hours</dt><dd>{siteConfig.hours}</dd></dl></aside></div></div></section>
    <CTA/><script id="rosalia-profile-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
