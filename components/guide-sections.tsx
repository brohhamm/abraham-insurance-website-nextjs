import type { GuideSection } from "@/content/guide-lessons";

export function GuideSections({ sections }: { sections?: GuideSection[] }) {
  return sections?.map((section) => (
    <section className="guide-copy" key={section.heading}>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>
  ));
}
