import { PageHero } from "@/components/ui";
import { EducationLibrary } from "@/components/education-library";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Insurance Education Center",
  description: "Interactive California insurance guides for consumers, business owners, Realtors, and loan officers.",
  alternates:{canonical:"/education",languages:{"en-US":"/education","es-US":"/es/educacion","x-default":"/education"}},
};

export default function Page() {
  return <><PageHero eyebrow="Insurance education center" title="Understand the coverage behind the price.">Search 23 practical guides, compare common limits, and open official California resources for personal, commercial, wildfire, earthquake, and escrow decisions.</PageHero><section className="section"><div className="shell"><EducationLibrary articles={articles} /><p className="disclaimer">Limits shown are educational starting points—not universal recommendations. Coverage needs vary by applicant, property, operation, contract, carrier, and policy. Actual policy language controls.</p></div></section></>;
}
