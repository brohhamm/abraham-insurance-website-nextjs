import { coveragePathways } from "@/content/coverage-pathways";
import { marketGuidance } from "@/content/market-guidance";
import { personalMarkets, commercialMarkets } from "@/content/carriers";
import { griefSupportContent } from "@/content/grief-support";
import { experience, serviceExperience } from "@/content/abraham-experience";
import { insuranceServices } from "@/content/services";
import { articles } from "@/content/articles";
import { serviceLocations } from "@/content/locations";
import { spanishServices, spanishArticles, spanishLocations } from "@/content/spanish";
import { routePairs, navByLocale } from "@/lib/i18n";
import { isPublicSearchPath } from "@/lib/site-search.mjs";

export type SearchEntry = { href: string; title: string; description: string; locale: "en" | "es"; keywords?: string; category?: string };

// Explicit public content only. Never inspect environment variables, request data,
// submission stores, or arbitrary files when building the client-visible index.
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const add = (href: string, title: string, description: string, locale: "en" | "es", keywords = "") => {
    const category = href === '/carriers' || href === '/es/aseguradoras' ? 'market' : href.includes('/education/') || href.includes('/educacion/') ? 'guide' : href.includes('/insurance/') || href.includes('inland-marine') || href.includes('seguro-de-equipo') || /^\/es\/seguro-/.test(href) ? 'service' : href.includes('/locations/') || href.includes('/areas/') ? 'location' : href.includes('/events/') || href.includes('/eventos/') ? 'event' : /abraham-nunez|abel-duran|devan-wright|rosalia-elizabeth|emily-lussier/.test(href) ? 'agent' : 'page';
    entries.push({ href, title, description, locale, keywords, category });
  };
  for (const [locale, links] of Object.entries(navByLocale)) for (const [title, href] of links) add(href, title, locale === "es" ? "Explore los servicios y el equipo de la agencia." : "Explore the agency’s services and team.", locale as "en" | "es");
  for (const service of insuranceServices) add(`/insurance/${service.slug}`, service.name, service.summary, "en", JSON.stringify([coveragePathways[service.slug]?.en, service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.slug] ? experience[serviceExperience[service.slug]].en : ""]));
  for (const service of spanishServices) add(`/es/${service.slug}`, service.name, service.summary, "es", JSON.stringify([coveragePathways[service.englishSlug]?.es, service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.englishSlug] ? experience[serviceExperience[service.englishSlug]].es : ""]));
  for (const article of articles) add(`/education/${article.slug}`, article.title, article.summary, "en", JSON.stringify([article.body, article.sections, article.quickFacts, article.commonLimits]));
  for (const article of spanishArticles) add(`/es/educacion/${article.slug}`, article.title, article.summary, "es", JSON.stringify([article.body, article.sections, article.quickFacts, article.commonLimits]));
  for (const location of serviceLocations) add(`/locations/${location.slug}`, location.name, location.summary, "en");
  for (const location of spanishLocations) add(`/es/areas/${location.slug}`, location.name, location.summary, "es");
  const people = ["Abel Duran", "Abraham Nunez-Chavez", "Devan Wright", "Rosalia Elizabeth Gomez", "Emily Lussier"];
  const paths = ["/abel-duran", "/abraham-nunez-chavez", "/devan-wright", "/rosalia-elizabeth-gomez", "/emily-lussier"];
  for (let i = 0; i < people.length; i++) {
    const abraham = i === 1;
    add(paths[i], people[i], abraham ? "Coverage reviews, landlord portfolios, first-time buyers, escrow, commercial and life insurance. Direct: 714-388-9533." : "Meet the agency team and find contact information.", "en", abraham ? "Riverside Perris Corona Anaheim Garden Grove Moreno Valley Yorba Linda DP-3 LLC admitted nonadmitted California Bay Area annuities" : "");
    add(routePairs[paths[i]], people[i], abraham ? "Revisiones de cobertura, propiedades de alquiler, compradores primerizos, escrow, seguros comerciales y de vida. 714-388-9533." : "Conozca al equipo y sus datos de contacto.", "es", abraham ? "Riverside Perris Corona Anaheim Garden Grove Moreno Valley Yorba Linda DP-3 LLC admitidos no admitidos California Área de la Bahía anualidades" : "");
  }
  add("/customer-service", "Customer service: Rashel and Suzee", "Contact the Moreno Valley customer-service team.", "en");
  add("/es/servicio-al-cliente", "Servicio al cliente: Rashel y Suzee", "Comuníquese con servicio al cliente en Moreno Valley.", "es");
  add("/contact", "Contact Abraham and request a quote", "Request a coverage review or an appointment.", "en");
  add("/es/contacto", "Contacte a Abraham y solicite una cotización", "Solicite una revisión de cobertura o una cita.", "es");
  add("/events/christmas-client-appreciation", "Christmas Client Appreciation & Community Event", "December 10, 2026 in Moreno Valley. Event details, dinner, and RSVP options.", "en", "Juan Pollo catering food holiday Christmas dinner Fix It Auto SERVPRO Nichole raffle prize drawings");
  add("/es/eventos/convivio-navideno", "Convivio navideño de agradecimiento a clientes y comunidad", "10 de diciembre de 2026 en Moreno Valley. Detalles, cena y confirmación de asistencia.", "es", "Juan Pollo comida cena navidad Fix It Auto SERVPRO Nichole sorteos premios");
  add("/inland-marine-insurance", "Inland Marine and Equipment Insurance", "Equipment rented to others, transit, portable restrooms, and coordinated commercial insurance.", "en");
  add("/es/seguro-de-equipo-y-bienes-en-transito", "Seguro de equipo y bienes en tránsito", "Inland marine, sanitarios portátiles, alquiler a terceros y programas comerciales coordinados.", "es");
  // Index shared public resources as first-class section results, not just page titles.
  for (const locale of ["en", "es"] as const) {
    const copy = griefSupportContent[locale];
    add(`${locale === "es" ? "/es/educacion" : "/education"}#grief-support`, locale === "es" ? "GriefShare: apoyo durante el duelo" : "GriefShare: grief support groups", copy.education.copy, locale, "GriefShare grief share grief bereavement grieving loss loved one support groups duelo pérdida ser querido apoyo emocional");
    add(`${locale === "es" ? "/es/seguro-de-vida" : "/insurance/life-insurance"}#grief-support`, copy.life.heading, copy.life.copy, locale, "GriefShare grief share grief bereavement grieving loss loved one support groups duelo pérdida ser querido apoyo emocional");
  }
  for (const locale of ["en", "es"] as const) {
    add(locale === "es" ? "/es/aseguradoras" : "/carriers", locale === "es" ? "Aseguradoras y mercados" : "Carriers and insurance markets", locale === "es" ? "Consulte las compañías y categorías de cobertura de la agencia." : "Browse the agency’s carriers and coverage categories.", locale, JSON.stringify([personalMarkets,commercialMarkets,marketGuidance[locale]]));
  }
  for (const [slug, pathway] of Object.entries(coveragePathways)) {
    for (const locale of ["en", "es"] as const) {
      const page = locale === "en" ? `/insurance/${slug}` : routePairs[`/insurance/${slug}`];
      pathway[locale].questions.forEach((item, index) => add(`${page}#question-${slug}-${index}`, item.question, item.answer, locale));
      pathway[locale].sections.forEach((item, index) => add(`${page}#topic-${slug}-${index}`, item.title, item.paragraphs.join(" "), locale));
    }
  }
  // Familiar short labels lead straight to the relevant, published answer.
  for (const locale of ["en", "es"] as const) {
    const label = (en: string, es: string) => locale === "en" ? en : es;
    const page = (slug: string) => locale === "en" ? `/insurance/${slug}` : routePairs[`/insurance/${slug}`];
    add(`${page("condo-insurance")}#question-condo-insurance-1`, label("Vacant condo insurance", "Seguro de condominio vacante"), coveragePathways["condo-insurance"][locale].questions[1].answer, locale, "empty condo vacant condominium condominio vacío desocupado");
    add(`${page("landlord-insurance")}#question-landlord-insurance-0`, label("LLC rental property insurance", "Seguro de alquiler a nombre de una LLC"), coveragePathways["landlord-insurance"][locale].questions[0].answer, locale);
    add(`${page("contractor-insurance")}#question-contractor-insurance-1`, label("New contractor insurance", "Seguro para contratista nuevo"), coveragePathways["contractor-insurance"][locale].questions[1].answer, locale);
    add(`${page("life-insurance")}#topic-life-insurance-0`, label("Family income and mortgage protection life insurance", "Seguro de vida para ingresos familiares y protección hipotecaria"), coveragePathways["life-insurance"][locale].sections[0].paragraphs.join(" "), locale);
    add(`${page("life-insurance")}#topic-life-insurance-2`, label("Three-generation legacy life insurance", "Seguro de vida y legado para tres generaciones"), coveragePathways["life-insurance"][locale].sections[2].paragraphs.join(" "), locale, "generation 1 generation 2 generation 3 generations grandparents children grandchildren generacion 1 generacion 2 generacion 3 generaciones abuelos hijos nietos");
  }
  const unique = new Map<string, SearchEntry>();
  for (const entry of entries) if (isPublicSearchPath(entry.href)) unique.set(entry.href, entry);
  return [...unique.values()];
}
