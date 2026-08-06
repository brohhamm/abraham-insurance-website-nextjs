import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { commercialMarkets, personalMarkets } from "@/content/carriers";

export const metadata = {
  title: "Insurance Carriers and Markets",
  description: "Personal and commercial insurance carriers, brokerage markets, and California programs available through Abraham Nunez-Chavez.",
  alternates:{canonical:"/carriers",languages:{"en-US":"/carriers","es-US":"/es/aseguradoras","x-default":"/carriers"}},
};

function MarketSection({ title, description, markets }: { title: string; description: string; markets: ReadonlyArray<{ readonly title: string; readonly names: readonly string[] }> }) {
  return <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Kraft Lake brokerage access</p><h2>{title}</h2></div><p>{description}</p></div><div className="market-grid">{markets.map((group) => <article className="market-card" key={group.title}><p className="eyebrow">{group.title}</p><ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul><Link className="text-link" href={`/contact?market=${encodeURIComponent(group.title)}`}>Explore quote options →</Link></article>)}</div></div></section>;
}

export default function Page() {
  return <><PageHero eyebrow="Carrier and market access" title="More ways to find an appropriate insurance fit.">Start with Farmers Insurance or review additional brokerage markets when the coverage need, property, vehicle, or business calls for another path.</PageHero>
    <section className="section soft"><div className="shell"><div className="market-intro-grid"><article className="market-card"><p className="eyebrow">Core agency market</p><h2>Farmers Insurance</h2><p>Personal, commercial, and life insurance options, subject to product availability, eligibility, and underwriting.</p><Link className="text-link" href="/contact?market=Farmers%20Insurance">Request Farmers quote options →</Link></article><article className="market-card"><p className="eyebrow">California coverage programs</p><h2>Specialized protection</h2><ul><li>California FAIR Plan</li><li>California Earthquake Authority</li></ul><p>Public or statutory programs may form one part of a broader property coverage strategy.</p><Link className="text-link" href="/contact?market=California%20coverage%20programs">Discuss a coverage strategy →</Link></article></div></div></section>
    <MarketSection title="Personal insurance markets" description="Options span auto, property, flood, earthquake, umbrella, watercraft, valuable items, and other specialty personal risks." markets={personalMarkets} />
    <div className="soft"><MarketSection title="Commercial insurance markets" description="Options span liability, property, bonds, cyber, workers' compensation, commercial auto, habitational, lessor's risk, flood, and catastrophe exposures." markets={commercialMarkets} /></div>
    <section className="section"><div className="shell legal-copy"><p className="eyebrow">Important distinction</p><h2>Carriers, programs, and access partners are not all the same.</h2><p>Some names shown are insurance carriers; others are managing general agencies, wholesalers, placement platforms, or public insurance programs. Access may be direct or through Kraft Lake or another approved brokerage relationship. Final coverage is governed by carrier approval and the issued policy.</p><p><strong>Additional commercial, specialty, workers’ compensation, commercial auto, farm, and agribusiness markets may be available through Kraft Lake Compare.</strong> Carrier and product availability varies by risk, underwriting eligibility, location, and state. Coverage is not guaranteed until approved and bound by the applicable insurance carrier.</p><p>Market access is subject to current agency appointments, brokerage relationships, licensing, territory, product availability, and underwriting. Inclusion does not imply direct appointment, endorsement, or guaranteed access. Carrier and program availability can change.</p></div></section><CTA /></>;
}
