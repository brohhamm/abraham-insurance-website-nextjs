export type Locale = "en" | "es";

const staticPairs = [
  ["/", "/es"],
  ["/personal-insurance", "/es/seguros-personales"],
  ["/business-insurance", "/es/seguros-comerciales"],
  ["/carriers", "/es/aseguradoras"],
  ["/wildfire-insurance", "/es/seguro-contra-incendios-forestales"],
  ["/referral-partners", "/es/socios-de-referidos"],
  ["/education", "/es/educacion"],
  ["/about", "/es/nuestra-agencia"],
  ["/abel-duran", "/es/abel-duran"],
  ["/abraham-nunez-chavez", "/es/abraham-nunez-chavez"],
  ["/devan-wright", "/es/devan-wright"],
  ["/emily-lussier", "/es/emily-lussier"],
  ["/rosalia-elizabeth-gomez", "/es/rosalia-elizabeth-gomez"],
  ["/moreno-valley-office", "/es/oficina-moreno-valley"],
  ["/yorba-linda-office", "/es/oficina-yorba-linda"],
  ["/customer-service", "/es/servicio-al-cliente"],
  ["/contact", "/es/contacto"],
  ["/privacy", "/es/privacidad"],
  ["/terms", "/es/terminos"],
] as const;

export const serviceSlugPairs = {
  "homeowners-insurance": "seguro-de-casa",
  "auto-insurance": "seguro-de-auto",
  "renters-insurance": "seguro-para-inquilinos",
  "condo-insurance": "seguro-de-condominio",
  "landlord-insurance": "seguro-para-propietarios",
  "umbrella-insurance": "seguro-paraguas",
  "life-insurance": "seguro-de-vida",
  "earthquake-insurance": "seguro-contra-terremotos",
  "general-liability-insurance": "seguro-de-responsabilidad-civil-general",
  "workers-compensation-insurance": "seguro-de-compensacion-laboral",
  "commercial-auto-insurance": "seguro-de-auto-comercial",
  "business-owners-policy": "poliza-para-duenos-de-negocio",
  "commercial-property-insurance": "seguro-de-propiedad-comercial",
  "contractor-insurance": "seguro-para-contratistas",
  "cyber-professional-liability": "seguro-cibernetico-y-responsabilidad-profesional",
} as const;

export const locationSlugPairs = {
  "moreno-valley": "moreno-valley",
  "yorba-linda": "yorba-linda",
  "riverside-county": "condado-de-riverside",
  "orange-county": "condado-de-orange",
} as const;

export const articleSlugPairs = {
  "home-insurance-deductibles": "deducibles-del-seguro-de-casa",
  "fair-plan-dic": "fair-plan-y-cobertura-dic",
  "replacement-cost-market-value": "costo-de-reemplazo-y-valor-de-mercado",
  "insurance-before-escrow": "seguro-antes-del-cierre-de-escrow",
  "auto-garaging-address": "domicilio-de-garaje-del-auto",
  "general-liability-workers-compensation": "responsabilidad-general-y-compensacion-laboral",
  "insurance-mortgage-escrow": "seguro-hipoteca-y-cuenta-de-escrow",
  "umbrella-insurance": "guia-del-seguro-paraguas",
  "california-auto-liability-limits": "limites-de-responsabilidad-de-auto-en-california",
  "uninsured-underinsured-motorist-california": "conductores-sin-seguro-o-con-seguro-insuficiente",
  "comprehensive-collision-deductibles": "cobertura-integral-colision-y-deducibles",
  "california-homeowners-coverage-limits": "limites-del-seguro-de-casa-en-california",
  "renters-insurance-california": "seguro-para-inquilinos-en-california",
  "condo-insurance-california": "seguro-de-condominio-en-california",
  "landlord-insurance-california": "seguro-para-propietarios-en-california",
  "life-insurance-needs-california": "necesidades-de-seguro-de-vida",
  "earthquake-insurance-retrofit-discounts": "seguro-de-terremoto-y-descuentos-por-refuerzo",
  "wildfire-readiness-home-hardening": "preparacion-contra-incendios-y-fortalecimiento-del-hogar",
  "commercial-general-liability-limits": "limites-de-responsabilidad-civil-comercial",
  "business-owners-policy-property-income": "bop-propiedad-e-ingresos-comerciales",
  "workers-compensation-california": "compensacion-laboral-en-california",
  "commercial-auto-california": "seguro-de-auto-comercial-en-california",
  "cyber-professional-liability-california": "responsabilidad-cibernetica-y-profesional",
} as const;

const pairs: [string, string][] = [
  ...staticPairs.map(([en, es]) => [en, es] as [string, string]),
  ...Object.entries(serviceSlugPairs).map(([en, es]) => [`/insurance/${en}`, `/es/${es}`] as [string, string]),
  ...Object.entries(locationSlugPairs).map(([en, es]) => [`/locations/${en}`, `/es/areas/${es}`] as [string, string]),
  ...Object.entries(articleSlugPairs).map(([en, es]) => [`/education/${en}`, `/es/educacion/${es}`] as [string, string]),
];

export const routePairs = Object.fromEntries(pairs) as Record<string, string>;
export const reverseRoutePairs = Object.fromEntries(pairs.map(([en, es]) => [es, en])) as Record<string, string>;

export function localeFromPath(pathname: string): Locale { return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en"; }
export function localizePath(pathname: string, locale: Locale) {
  const [path, suffix = ""] = pathname.split(/(?=[?#])/);
  if (locale === "es") return `${routePairs[path] || (path.startsWith("/es") ? path : `/es${path}`)}${suffix}`;
  return `${reverseRoutePairs[path] || path.replace(/^\/es(?=\/|$)/, "") || "/"}${suffix}`;
}

export const navByLocale = {
  en: [["Home", "/"], ["Personal Lines", "/personal-insurance"], ["Business Lines", "/business-insurance"], ["Carriers", "/carriers"], ["Wildfire", "/wildfire-insurance"], ["Education", "/education"], ["Our Agency", "/about"], ["About Abel", "/abel-duran"], ["Moreno Valley", "/moreno-valley-office"], ["Yorba Linda", "/yorba-linda-office"], ["Customer Service", "/customer-service"], ["Referral Partners", "/referral-partners"]],
  es: [["Inicio", "/es"], ["Seguros personales", "/es/seguros-personales"], ["Seguros comerciales", "/es/seguros-comerciales"], ["Aseguradoras", "/es/aseguradoras"], ["Incendios forestales", "/es/seguro-contra-incendios-forestales"], ["Educación", "/es/educacion"], ["Nuestra agencia", "/es/nuestra-agencia"], ["Acerca de Abel", "/es/abel-duran"], ["Moreno Valley", "/es/oficina-moreno-valley"], ["Yorba Linda", "/es/oficina-yorba-linda"], ["Servicio al cliente", "/es/servicio-al-cliente"], ["Socios de referidos", "/es/socios-de-referidos"]],
} as const;

export function alternatesFor(enPath: string) {
  const esPath = routePairs[enPath];
  return { canonical: enPath, languages: { "en-US": enPath, "es-US": esPath, "x-default": enPath } };
}

export function spanishAlternates(esPath: string) {
  const enPath = reverseRoutePairs[esPath];
  return { canonical: esPath, languages: { "en-US": enPath, "es-US": esPath, "x-default": enPath } };
}
