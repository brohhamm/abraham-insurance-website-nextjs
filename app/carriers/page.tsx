import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";

export const metadata = { title: "Insurance Carriers and Markets", description: "Insurance carriers, brokerage markets, and California programs available through Abraham Nunez-Chavez.", alternates: { canonical: "/carriers" } };

const markets = [
  { title: "Core agency market", names: ["Farmers Insurance"], text: "Personal, commercial, and life insurance options, subject to product availability and underwriting." },
  { title: "Personal auto", names: ["Bristol West", "National General Insurance", "Border Solutions"], text: "Options for a range of drivers, vehicles, and household profiles." },
  { title: "Homeowners & property", names: ["Aegis Specialty", "AUGold", "Bamboo", "Delos", "LightSpeed", "ONE80", "Pacific Specialty (PSIC)", "SageSure", "Steadily"], text: "Homeowners, landlord, vacant, builders-risk, and specialty property markets where eligible." },
  { title: "Specialty personal lines", names: ["Progressive", "SkiSafe", "American Home Shield", "Hagerty", "Pets Best", "Jewelers Mutual", "RLI", "GeoVera Insurance", "Arrowhead"], text: "Watercraft, collector vehicles, pets, valuable property, umbrella, and earthquake-related options." },
  { title: "Commercial lines", names: ["AmTrust", "BTIS", "BOXX", "CRC Tapco", "ERGO NXT", "Hiscox NOW", "LIO", "Pathpoint", "RLI", "SageSure", "Tokio Marine HCC", "USLI", "US Assure", "ONE80"], text: "Markets for liability, property, cyber, workers’ compensation, builders risk, lessor’s risk, and other business exposures." },
  { title: "Flood & public programs", names: ["AON Edge", "Neptune", "NFIP", "California FAIR Plan", "California Earthquake Authority"], text: "Flood options and California programs that may form part of a broader coverage strategy." },
] as const;

export default function Page() {
  return <><PageHero eyebrow="Carrier and market access" title="More ways to find an appropriate insurance fit.">Abraham can begin with Farmers Insurance and review additional brokerage markets or public programs when the risk calls for another path.</PageHero>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Available markets</p><h2>Organized by the coverage you need.</h2></div><p>This list reflects current agency and brokerage resources and can change. A market shown here does not guarantee eligibility, pricing, or availability.</p></div><div className="market-grid">{markets.map((group) => <article className="market-card" key={group.title}><p className="eyebrow">{group.title}</p><p>{group.text}</p><ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul><Link className="text-link" href={`/contact?market=${encodeURIComponent(group.title)}`}>Explore quote options →</Link></article>)}</div></div></section>
    <section className="section soft"><div className="shell legal-copy"><p className="eyebrow">Important distinction</p><h2>Carriers, programs, and access partners are not all the same.</h2><p>Some names above are insurance carriers; others are managing general agencies, wholesalers, placement platforms, or public insurance programs. Access may be direct or through an approved brokerage relationship. Final coverage is governed by carrier approval and the issued policy.</p><p>Market access is subject to current agency appointments, brokerage relationships, licensing, territory, product availability, and underwriting. Inclusion does not imply direct appointment, endorsement, or guaranteed access.</p></div></section><CTA /></>;
}
