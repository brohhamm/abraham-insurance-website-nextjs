import Link from "next/link";
import { coveragePathways, pathwaySources } from "@/content/coverage-pathways";
import { localizePath } from "@/lib/i18n";

export function CoverageGuidance({ slug, locale }: { slug: string; locale: "en" | "es" }) {
  const pathway = coveragePathways[slug];
  if (!pathway) return null;
  const copy = pathway[locale];
  const es = locale === "es";
  const source = slug === "life-insurance" ? pathwaySources.life : ["homeowners-insurance", "landlord-insurance", "condo-insurance"].includes(slug) ? pathwaySources.property : pathwaySources.commercial;
  return <section className="section soft coverage-guidance" id="coverage-options"><div className="shell">
    <p className="eyebrow">{es ? "Una revisión con Abraham Nunez-Chavez" : "Your review with Abraham Nunez-Chavez"}</p>
    <h2>{copy.heading}</h2>
    <div className="pathway-grid">{copy.sections.map((section, index) => <article key={section.title} id={`topic-${slug}-${index}`}><h3>{section.title}</h3>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
    <div className="expertise-links"><Link className="text-link" href={localizePath(pathway.guide, locale)}>{es ? "Lea la guía que explica esta cobertura paso a paso" : "Read the step-by-step coverage guide"}</Link><Link className="text-link" href={localizePath("/carriers", locale)}>{es ? "Conozca las compañías y opciones que revisamos" : "See the insurance companies and options we review"}</Link></div>
    <p className="experience-note"><a href={source.href} target="_blank" rel="noopener noreferrer">{es ? "Recurso oficial del Departamento de Seguros de California" : source.label}</a></p>
  {slug === "life-insurance" && <p className="experience-note"><a href="https://www.irs.gov/faqs/interest-dividends-other-types-of-income/life-insurance-disability-insurance-proceeds" target="_blank" rel="noopener noreferrer">{es ? "IRS: beneficios de seguro de vida e impuestos federales" : "IRS: life insurance proceeds and federal income tax"}</a></p>}
  </div></section>;
}
