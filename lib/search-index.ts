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
    const category = href.includes('/education/') || href.includes('/educacion/') ? 'guide' : href.includes('/insurance/') || href.includes('inland-marine') || href.includes('seguro-de-equipo') || /^\/es\/seguro-/.test(href) ? 'service' : href.includes('/locations/') || href.includes('/areas/') ? 'location' : href.includes('/events/') || href.includes('/eventos/') ? 'event' : /abraham-nunez|abel-duran|devan-wright|rosalia-elizabeth|emily-lussier/.test(href) ? 'agent' : 'page';
    entries.push({ href, title, description, locale, keywords, category });
  };
  for (const [locale, links] of Object.entries(navByLocale)) for (const [title, href] of links) add(href, title, locale === "es" ? "Explore los servicios y el equipo de la agencia." : "Explore the agency’s services and team.", locale as "en" | "es");
  for (const service of insuranceServices) add(`/insurance/${service.slug}`, service.name, service.summary, "en", JSON.stringify([service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.slug] ? experience[serviceExperience[service.slug]].en : ""]));
  for (const service of spanishServices) add(`/es/${service.slug}`, service.name, service.summary, "es", JSON.stringify([service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.englishSlug] ? experience[serviceExperience[service.englishSlug]].es : ""]));
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
    add(locale === "es" ? "/es/aseguradoras" : "/carriers", locale === "es" ? "Aseguradoras y mercados" : "Carriers and insurance markets", locale === "es" ? "Consulte las compañías y categorías de cobertura de la agencia." : "Browse the agency’s carriers and coverage categories.", locale, JSON.stringify([personalMarkets,commercialMarkets]));
  }
  const unique = new Map<string, SearchEntry>();
  for (const entry of entries) if (isPublicSearchPath(entry.href)) unique.set(entry.href, entry);
  return [...unique.values()];
}
