import { readerArticleBody } from "@/content/article-structure";
import { readerServices } from "@/content/reader-services";
import { articleOpenings } from "@/content/article-openings";
import { event } from "@/lib/event-rsvp";
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
  for (const service of insuranceServices) add(`/insurance/${service.slug}`, service.name, service.summary, "en", JSON.stringify([readerServices[service.slug]?.en, coveragePathways[service.slug]?.en, service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.slug] ? experience[serviceExperience[service.slug]].en : ""]));
  for (const service of spanishServices) add(`/es/${service.slug}`, service.name, service.summary, "es", JSON.stringify([readerServices[service.englishSlug]?.es, coveragePathways[service.englishSlug]?.es, service.intro, service.protects, service.quoteInfo, service.commonQuestions, service.limits, serviceExperience[service.englishSlug] ? experience[serviceExperience[service.englishSlug]].es : ""]));
  for (const article of articles) add(`/education/${article.slug}`, article.title, article.summary, "en", JSON.stringify([readerArticleBody(article.slug, article.body), article.sections, article.quickFacts, article.commonLimits, articleOpenings[article.slug]?.en]));
  for (const article of spanishArticles) add(`/es/educacion/${article.slug}`, article.title, article.summary, "es", JSON.stringify([readerArticleBody(article.englishSlug, article.body), article.sections, article.quickFacts, article.commonLimits, articleOpenings[article.englishSlug]?.es]));
  for (const location of serviceLocations) add(`/locations/${location.slug}`, location.name, location.summary, "en", JSON.stringify(location));
  for (const location of spanishLocations) add(`/es/areas/${location.slug}`, location.name, location.summary, "es", JSON.stringify(location));
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
  add("/events/christmas-client-appreciation", "New Year Client Appreciation & Community Event", "January 28, 2027, 4–6 p.m. Pacific in Moreno Valley. Drawing-eligibility RSVP deadline: January 27 at 4 p.m. Pacific.", "en", "Juan Pollo catering food winter New Year January RSVP dinner Fix It Auto SERVPRO Nichole Mowrey home preparedness auto emergency gift basket television raffle prize drawings");
  add("/es/eventos/convivio-navideno", "Encuentro de Año Nuevo para Clientes y Comunidad", "28 de enero de 2027, de 4 a 6 p. m., hora del Pacífico. Plazo de elegibilidad de sorteos: 27 de enero a las 4 p. m.", "es", "Juan Pollo comida cena Año Nuevo enero confirmar asistencia Fix It Auto SERVPRO Nichole Mowrey preparación hogar auto emergencias canastas televisor sorteos premios");
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
  // Service tasks need their own searchable descriptions, not just a generic
  // customer-service summary. These are real public services, never records.
  for (const locale of ["en", "es"] as const) {
    const es=locale==='es';
    const support=(title:string,description:string,keywords:string) => {
      const href=es?'/es/servicio-al-cliente':'/customer-service';
      const key=keywords.includes('billing')?'billing':keywords.includes('documents')?'documents':'policyservice';
      add(`${href}#${key}`,title,description,locale,keywords);
      entries[entries.length-1].category='support';
    };
    support(es?'Ayuda con pagos y facturación':'Billing and payment help',es?'Comuníquese con Rashel o Suzee para preguntas sobre facturas, pagos y su póliza.':'Contact Rashel or Suzee for questions about bills, payments, and your policy.','billing pay my bill payment factura facturacion pagar pago cobro');
    support(es?'Comprobantes de seguro y tarjetas':'Proof of insurance and ID cards',es?'Solicite comprobantes, documentos de póliza o tarjetas de seguro con nuestro equipo de servicio.':'Request evidence of insurance, policy documents, or insurance ID cards from the service team.','documents ID cards insurance card proof of insurance evidence comprobante constancia tarjetas identificacion certificado');
    support(es?'Cambios de vehículos, conductores y póliza':'Vehicle, driver, and policy changes',es?'Pida ayuda para agregar o eliminar vehículos y conductores, actualizar domicilio o consultar una cancelación. El equipo confirma cualquier cambio.':'Ask for help adding or removing vehicles and drivers, changing your address, or requesting cancellation. The team confirms any policy change.','policyservice change my car add remove driver vehicle cancel policy cambio agregar quitar conductor vehiculo cancelacion');
    add(es?'/es/abraham-nunez-chavez':'/abraham-nunez-chavez','Abraham Nunez-Chavez',es?'Llame, envíe mensaje o correo a Abraham. Atención en inglés y español. 714-388-9533.':'Call, text, or email Abraham. English and Spanish appointments. 714-388-9533.',locale,'Abraham Nunez Chavez hablar llamar contacto cita schedule appointment direct phone email');
    const eventPath=es?event.esPath:event.enPath;
    add(eventPath+'#preparedness',es?'SERVPRO, Fix It Auto y premios de preparación':'SERVPRO, Fix It Auto and preparedness prizes',es?'Nichole Mowrey de SERVPRO Team Lingurar, Fix It Auto y Abel Duran comparten preparación para el hogar y el auto el 28 de enero de 2027. Canastas y televisor previstos.':'Nichole Mowrey of SERVPRO Team Lingurar, Fix It Auto, and Abel Duran discuss home and auto preparedness on January 28, 2027. Gift baskets and a television are planned.',locale,'preparedness emergency home camera fire water flood mitigation seguridad prevencion preparacion hogar auto canasta basket speaker Nichole Mowrey Servpro Fix It Auto');
  }
  const unique = new Map<string, SearchEntry>();
  for (const entry of entries) if (isPublicSearchPath(entry.href)) {
    const previous=unique.get(entry.href);
    unique.set(entry.href,previous?{...entry,keywords:[previous.keywords,entry.keywords].filter(Boolean).join(" ")}:entry);
  }
  return [...unique.values()];
}
