import { experience, serviceExperience } from "@/content/abraham-experience";
import { insuranceServices } from "@/content/services";
import { articles } from "@/content/articles";
import { serviceLocations } from "@/content/locations";
import { spanishServices, spanishArticles, spanishLocations } from "@/content/spanish";
import { routePairs, navByLocale } from "@/lib/i18n";
import { isPublicSearchPath } from "@/lib/site-search.mjs";

export type SearchEntry = { href: string; title: string; description: string; locale: "en" | "es"; keywords?: string };

// Explicit public content only. Never inspect environment variables, request data,
// submission stores, or arbitrary files when building the client-visible index.
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const add = (href: string, title: string, description: string, locale: "en" | "es", keywords = "") => entries.push({ href, title, description, locale, keywords });
  for (const [locale, links] of Object.entries(navByLocale)) for (const [title, href] of links) add(href, title, locale === "es" ? "Explore los servicios y el equipo de la agencia." : "Explore the agency’s services and team.", locale as "en" | "es");
  for (const service of insuranceServices) add(`/insurance/${service.slug}`, service.name, service.summary, "en", serviceExperience[service.slug] ? experience[serviceExperience[service.slug]].en.text : "");
  for (const service of spanishServices) add(`/es/${service.slug}`, service.name, service.summary, "es", serviceExperience[service.englishSlug] ? experience[serviceExperience[service.englishSlug]].es.text : "");
  for (const article of articles) add(`/education/${article.slug}`, article.title, article.summary, "en");
  for (const article of spanishArticles) add(`/es/educacion/${article.slug}`, article.title, article.summary, "es");
  for (const location of serviceLocations) add(`/locations/${location.slug}`, location.name, location.summary, "en");
  for (const location of spanishLocations) add(`/es/areas/${location.slug}`, location.name, location.summary, "es");
  const people = ["Abel Duran", "Abraham Nunez-Chavez", "Devan Wright", "Rosalia Elizabeth Gomez", "Emily Lussier"];
  const paths = ["/abel-duran", "/abraham-nunez-chavez", "/devan-wright", "/rosalia-elizabeth-gomez", "/emily-lussier"];
  for (let i = 0; i < people.length; i++) {
    const abraham = i === 1;
    add(paths[i], people[i], abraham ? "Coverage reviews, landlord portfolios, first-time buyers, escrow, commercial and life insurance. Direct: 714-388-9533." : "Meet the agency team and find contact information.", "en", abraham ? "Riverside Perris Corona Anaheim Garden Grove Moreno Valley Yorba Linda DP-3 LLC admitted nonadmitted" : "");
    add(routePairs[paths[i]], people[i], abraham ? "Revisiones de cobertura, propiedades de alquiler, compradores primerizos, escrow, seguros comerciales y de vida. 714-388-9533." : "Conozca al equipo y sus datos de contacto.", "es", abraham ? "Riverside Perris Corona Anaheim Garden Grove Moreno Valley Yorba Linda DP-3 LLC admitidos no admitidos" : "");
  }
  add("/customer-service", "Customer service: Rashel and Suzee", "Contact the Moreno Valley customer-service team.", "en");
  add("/es/servicio-al-cliente", "Servicio al cliente: Rashel y Suzee", "Comuníquese con servicio al cliente en Moreno Valley.", "es");
  add("/contact", "Contact Abraham and request a quote", "Request a coverage review or an appointment.", "en");
  add("/es/contacto", "Contacte a Abraham y solicite una cotización", "Solicite una revisión de cobertura o una cita.", "es");
  add("/events/christmas-client-appreciation", "Christmas Client Appreciation & Community Event", "December 10, 2026 in Moreno Valley. Event details, dinner, and RSVP options.", "en");
  add("/es/eventos/convivio-navideno", "Convivio navideño de agradecimiento a clientes y comunidad", "10 de diciembre de 2026 en Moreno Valley. Detalles, cena y confirmación de asistencia.", "es");
  add("/inland-marine-insurance", "Inland Marine and Equipment Insurance", "Equipment rented to others, transit, portable restrooms, and coordinated commercial insurance.", "en");
  add("/es/seguro-de-equipo-y-bienes-en-transito", "Seguro de equipo y bienes en tránsito", "Inland marine, sanitarios portátiles, alquiler a terceros y programas comerciales coordinados.", "es");
  const unique = new Map<string, SearchEntry>();
  for (const entry of entries) if (isPublicSearchPath(entry.href)) unique.set(entry.href, entry);
  return [...unique.values()];
}
