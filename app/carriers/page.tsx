import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";

export const metadata = { title: "Insurance Carriers and Markets", description: "Insurance carriers, brokerage markets, and California programs available through Abraham Nunez-Chavez." };
const carriers = [
  { title: "Farmers Insurance", text: "Personal, commercial, and life insurance options, subject to product availability and underwriting." },
  { title: "Foremost Insurance", text: "Specialty personal insurance, including eligible landlord, manufactured-home, and property risks." },
  { title: "Bristol West", text: "Personal auto insurance options for a range of driver and household profiles." },
  { title: "Mercury Insurance", text: "Personal and commercial insurance options where eligibility and brokerage access permit." },
  { title: "Bamboo Insurance", text: "California residential property options, including eligible homeowners and landlord risks." },
  { title: "AEGIS", text: "Property insurance options for eligible California homes and specialty risks." },
  { title: "AAA Insurance", text: "Additional personal insurance options when available through the applicable brokerage channel." },
] as const;
const programs = [
  { title: "California FAIR Plan", text: "Basic property coverage for eligible applicants who cannot obtain coverage through the traditional market." },
  { title: "California Earthquake Authority", text: "Residential earthquake coverage through participating insurers, subject to eligibility." },
] as const;
function MarketCards({ items }: { items: readonly { title: string; text: string }[] }) { return <div className="card-grid">{items.map((item) => <article className="card" key={item.title}><div className="card-mark" aria-hidden="true">✓</div><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={`/contact?carrier=${encodeURIComponent(item.title)}`}>Request a Quote →</Link></article>)}</div>; }
export default function Page() { return <><PageHero eyebrow="Carrier access" title="Multiple insurance markets for different types of risk.">As a Farmers Insurance agent with brokerage access, Abraham can review multiple carrier and program options when appropriate.</PageHero><section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Insurance carriers</p><h2>Carrier and brokerage access</h2></div><p>Availability depends on appointments, location, risk characteristics, underwriting, and current market conditions.</p></div><MarketCards items={carriers} /></div></section><section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">California programs</p><h2>Specialty property and earthquake programs</h2></div><p>These programs should be reviewed alongside any companion policy needed to address coverage gaps.</p></div><MarketCards items={programs} /></div></section><section className="section"><div className="shell legal-copy"><h2>How carrier selection works</h2><p>A carrier name does not guarantee eligibility, coverage, pricing, or binding. Carrier access may be direct or through an approved brokerage relationship. Final coverage is governed by the issued policy and carrier confirmation.</p></div></section><CTA /></>; }
