import { griefSupportContent } from "@/content/grief-support";

const griefShareUrl = "https://find.griefshare.org/find";

type GriefSupportProps = {
  locale?: "en" | "es";
  placement: "education" | "life";
};


export function GriefSupport({ locale = "en", placement }: GriefSupportProps) {
  const localized = griefSupportContent[locale];
  const section = localized[placement];

  return <article className="guide-callout grief-support" id="grief-support">
    <p className="eyebrow">{section.eyebrow}</p>
    <h2>{section.heading}</h2>
    <p>{section.copy}</p>
    <p className="service-disclosure">{localized.disclosure}</p>
    <a className="button" href={griefShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`${localized.label} (${localized.newTab})`}>
      {section.button} <span aria-hidden="true">↗</span>
    </a>
  </article>;
}
