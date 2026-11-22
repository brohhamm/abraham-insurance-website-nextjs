import Link from "next/link";
import { marketGuidance } from "@/content/market-guidance";
import { AbrahamContact } from "@/components/abraham-experience";
import { localizePath } from "@/lib/i18n";

export function MarketGuidance({ locale }: { locale: "en" | "es" }) {
  const copy = marketGuidance[locale];
  return <section className="section"><div className="shell narrow"><h2>{copy.title}</h2><p>{copy.intro}</p><div className="faq-list">{copy.questions.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p><Link className="text-link" href={localizePath(item.href, locale)}>{item.label}</Link></details>)}</div><p className="market-programs">{copy.programs}</p><p className="experience-note">{locale === "es" ? "Funciones descritas por los socios: " : "Partner descriptions: "}<a href="https://www.btisinc.com/register_now_gaw.aspx" target="_blank" rel="noopener noreferrer">BTIS</a> · <a href="https://www.crctapco.com/About/About-Us" target="_blank" rel="noopener noreferrer">CRC Tapco</a> · <a href="https://usassure.com/about" target="_blank" rel="noopener noreferrer">US Assure</a></p><AbrahamContact locale={locale}/></div></section>;
}
