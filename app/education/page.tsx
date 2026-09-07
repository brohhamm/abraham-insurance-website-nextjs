import { PageHero } from "@/components/ui";
import { EducationLibrary } from "@/components/education-library";
import { GriefSupport } from "@/components/grief-support";
import { articles } from "@/content/articles";
import Link from "next/link";

export const metadata = {
  title: "Insurance Education Center",
  description: "Interactive California insurance guides for consumers, business owners, Realtors, and loan officers.",
  alternates:{canonical:"/education",languages:{"en-US":"/education","es-US":"/es/educacion","x-default":"/education"}},
};

export default function Page() {
  return <><PageHero eyebrow="Wildfire & education center" title="Understand the coverage behind the price.">Start with the question you need answered: What would I pay after a claim? What does my policy leave out? What should I check before buying a home? These guides explain the terms, work through examples, and show what to ask next.</PageHero><section className="section wildfire-hub"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Wildfire, FAIR Plan & catastrophe resources</p><h2>Start with California property readiness.</h2></div><p>Learn how FAIR Plan fire insurance and a separate Difference in Conditions (DIC) policy fit together, then review steps to reduce wildfire damage and compare earthquake coverage.</p></div><div className="guide-actions"><Link className="button" href="/education/fair-plan-dic">FAIR Plan & DIC guide</Link><Link className="button button-secondary" href="/education/wildfire-readiness-home-hardening">Wildfire readiness</Link><Link className="button button-secondary" href="/education/earthquake-insurance-retrofit-discounts">Earthquake resources</Link></div></div></section><section className="section"><div className="shell"><GriefSupport placement="education" /><EducationLibrary articles={articles.map(({ slug, title, summary, category, commonLimits, quickFacts }) => ({ slug, title, summary, category, commonLimits, quickFacts }))} /><p className="disclaimer">Limits shown are educational starting points—not universal recommendations. Coverage needs vary by applicant, property, operation, contract, carrier, and policy. Actual policy language controls.</p></div></section></>;
}
