import Link from "next/link";
import { Cards, CTA } from "@/components/ui";

const services = [
  { title: "Home & Property", text: "Learn how dwelling, belongings, liability, loss of use, deductibles, and replacement cost work together." },
  { title: "Auto & Umbrella", text: "Understand liability, uninsured motorists, physical damage, and added protection for serious claims." },
  { title: "Business Insurance", text: "Review liability, property, workers’ compensation, commercial auto, contracts, and audit exposure." },
  { title: "Life Insurance", text: "Explore coverage designed to replace income, address debts, and protect the people who depend on you." },
  { title: "Escrow Support", text: "Get responsive quotes, lender-ready documents, and help with challenging or wildfire-exposed properties." },
  { title: "Carrier Options", text: "Review Farmers Insurance products and additional brokerage markets when appropriate for the risk." },
] as const;

export default function Home() {
  return <>
    <section className="hero"><div className="shell hero-grid"><div><p className="eyebrow">Southern California Insurance Agent/Broker</p><h1>Your local agent and broker for personal and business insurance.</h1><p className="lead">Understand the protection behind the price, compare available carrier options, and receive responsive support from quote through policy service.</p><div className="button-row"><Link className="button" href="/contact">Request a Quote</Link><a className="button button-secondary" href="tel:+17143889533">Call 714-388-9533</a></div><div className="trust-line"><span>CA Lic. No. 4357305</span><span>Moreno Valley & Yorba Linda</span></div></div><aside className="hero-panel"><p className="eyebrow">Local agent and broker</p><h2>One conversation. A clearer path forward.</h2><ul><li>Coverage explained in plain English</li><li>Personal and commercial insurance</li><li>Support for escrow and referral partners</li><li>Wildfire-area and FAIR Plan education</li></ul><Link href="/about">Meet Abraham <span>→</span></Link></aside></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Insurance agent and broker services</p><h2>Education, coverage, and quote options.</h2></div><p>Learn what each policy protects, where common gaps develop, and how limits and deductibles affect a claim.</p></div><Cards items={services} /></div></section>
    <section className="section split-section"><div className="shell split"><div><p className="eyebrow">For real estate professionals</p><h2>Keep insurance from becoming a last-minute escrow problem.</h2><p className="lead-small">Early review can identify wildfire exposure, claims-history concerns, reconstruction questions, or underwriting requirements before they affect closing.</p><Link className="text-link" href="/referral-partners">Explore partner support →</Link></div><div className="stat-list"><div><strong>Responsive</strong><span>quote and documentation support</span></div><div><strong>Clear</strong><span>buyer and lender communication</span></div><div><strong>Continued</strong><span>service after escrow closes</span></div></div></div></section>
    <section className="section"><div className="shell section-heading"><div><p className="eyebrow">Education center</p><h2>Make coverage decisions with context.</h2></div><Link className="text-link" href="/education">View all resources →</Link></div><div className="shell feature-links"><Link href="/education/fair-plan-dic"><span>Wildfire properties</span><strong>California FAIR Plan and DIC Coverage Explained</strong></Link><Link href="/education/replacement-cost-market-value"><span>Home insurance</span><strong>Replacement Cost vs. Market Value</strong></Link><Link href="/education/insurance-before-escrow"><span>Real estate</span><strong>What Realtors Should Know Before Escrow</strong></Link></div></section>
    <CTA />
  </>;
}
