import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";

export const metadata = {
  title: "Wildfire, FAIR Plan & Earthquake Resources",
  description: "California FAIR Plan, DIC, wildfire readiness, CEA earthquake coverage, and retrofit-discount resources.",
  alternates: { canonical: "/wildfire-insurance" },
};

const resources = [
  { title: "Wildfire readiness", text: "Home hardening, defensible space, evacuation planning, and CAL FIRE's interactive readiness tools.", href: "https://www.readyforwildfire.org/", label: "Open Ready for Wildfire" },
  { title: "Safer from Wildfires", text: "California mitigation actions for the structure, immediate surroundings, and community that may qualify for insurance discounts.", href: "https://www.insurance.ca.gov/01-consumers/200-wrr/Safer-from-Wildfires.cfm", label: "Review California discounts" },
  { title: "California FAIR Plan", text: "Official eligibility, coverage, policy, and contact resources for California's insurer of last resort.", href: "https://www.cfpnet.com/", label: "Visit the FAIR Plan" },
  { title: "CEA earthquake coverage", text: "Explore CEA dwelling, personal property, loss-of-use, deductible, and earthquake policy options.", href: "https://www.earthquakeauthority.com/", label: "Explore CEA coverage" },
  { title: "Earthquake retrofit discounts", text: "Review current premium discounts for qualifying seismic retrofits and required verification.", href: "https://www.earthquakeauthority.com/california-earthquake-insurance-policies/earthquake-insurance-policy-premium-discounts", label: "Review CEA discounts" },
  { title: "Brace + Bolt grants", text: "Check current eligibility and registration for code-compliant foundation bolting and cripple-wall bracing assistance.", href: "https://www.earthquakebracebolt.com/", label: "Check retrofit grants" },
] as const;

export default function Page() {
  return <><PageHero eyebrow="Wildfire & catastrophe readiness" title="Protect the property—and prepare the household.">Review insurance placement, wildfire mitigation, earthquake coverage, and retrofit resources in one California-focused center.</PageHero>
    <section className="section"><div className="shell steps"><article><span>01</span><h2>Start with the property</h2><p>Review construction, roof, occupancy, brush exposure, updates, claims history when available, and lender requirements.</p></article><article><span>02</span><h2>Understand the FAIR Plan</h2><p>The California FAIR Plan can provide basic property coverage for eligible applicants as an insurer of last resort. It is not equivalent to a standard homeowners policy.</p></article><article><span>03</span><h2>Evaluate DIC coverage</h2><p>A Difference in Conditions policy may add liability, theft, water damage, loss of use, and other non-fire protection, depending on the policy.</p></article><article><span>04</span><h2>Prepare for multiple catastrophes</h2><p>Wildfire mitigation and earthquake retrofitting address different hazards. Insurance limits, deductibles, exclusions, and readiness plans should be reviewed together.</p></article></div></section>
    <section className="section soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Official readiness center</p><h2>California wildfire and earthquake resources</h2></div><p>Use the official sites below to verify current requirements, discounts, grants, and program availability.</p></div><div className="resource-grid">{resources.map((resource) => <article className="resource-card" key={resource.title}><h3>{resource.title}</h3><p>{resource.text}</p><a href={resource.href} target="_blank" rel="noreferrer">{resource.label} ↗</a></article>)}</div></div></section>
    <section className="section"><div className="shell split"><div><p className="eyebrow">Interactive guides</p><h2>Go deeper before choosing coverage.</h2><p>Compare common limits, deductibles, mitigation priorities, and official resources in the education center.</p><div className="guide-actions"><Link className="button" href="/education/wildfire-readiness-home-hardening">Wildfire readiness guide</Link><Link className="button button-secondary" href="/education/earthquake-insurance-retrofit-discounts">CEA and retrofit guide</Link></div></div><div className="note"><strong>Coverage reminder</strong><p>A quote is not a binder. Mitigation or retrofit work does not guarantee eligibility, coverage, or a discount. Confirm documentation and carrier requirements before relying on a credit.</p></div></div></section>
    <CTA />
  </>;
}
