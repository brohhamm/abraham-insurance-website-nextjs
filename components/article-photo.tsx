import Image from "next/image";

const photos = {
  "home-insurance-deductibles": { src: "/images/california-suburban-homes.webp", en: "Suburban California homes along a quiet residential street", es: "Casas suburbanas de California en una calle residencial tranquila", portrait: false },
  "fair-plan-dic": { src: "/images/california-building-palms-and-sky.webp", en: "California building framed by palm trees and open sky", es: "Edificio de California enmarcado por palmeras y cielo abierto", portrait: true },
  "replacement-cost-market-value": { src: "/images/residential-building-with-complex-rooflines.webp", en: "Large residential building with varied rooflines and exterior finishes", es: "Edificio residencial grande con distintos tipos de techo y acabados exteriores", portrait: false },
  "insurance-before-escrow": { src: "/images/seasonal-office-welcome-display.webp", en: "Welcoming seasonal display inside the insurance office", es: "Decoración de bienvenida de temporada dentro de la oficina de seguros", portrait: true },
  "high-value-home-insurance-underwriting-california": { src: "/images/high-value-california-residences.webp", en: "Large California residences viewed from a neighborhood street", es: "Residencias grandes de California vistas desde una calle residencial", portrait: false },
  "renters-insurance-california": { src: "/images/california-apartment-building-and-parking.webp", en: "California apartment building with a shared residential parking area", es: "Edificio de apartamentos en California con estacionamiento residencial compartido", portrait: false },
  "auto-garaging-address": { src: "/images/palm-lined-california-street-and-parked-cars.webp", en: "Palm-lined California street with moving and parked vehicles", es: "Calle de California con palmeras y vehículos estacionados y en circulación", portrait: true },
  "general-liability-workers-compensation": { src: "/images/california-small-business-storefront.webp", en: "Small-business storefront along a California commercial street", es: "Local de una pequeña empresa en una calle comercial de California", portrait: true },
  "insurance-mortgage-escrow": { src: "/images/seasonal-office-consultation-table.webp", en: "Consultation table inside the insurance office with seasonal decor", es: "Mesa de consulta dentro de la oficina de seguros con decoración de temporada", portrait: true },
  "umbrella-insurance": { src: "/images/california-forest-waterway.webp", en: "Tree-lined California waterway reflecting the surrounding landscape", es: "Canal de California rodeado de árboles que refleja el paisaje", portrait: true },
  "california-auto-liability-limits": { src: "/images/california-coastal-highway.webp", en: "California coastal highway beside rocky shoreline", es: "Carretera costera de California junto a una costa rocosa", portrait: true },
  "california-homeowners-coverage-limits": { src: "/images/california-coastal-landscape.webp", en: "Open California coastal landscape with ocean and grassy shoreline", es: "Paisaje costero abierto de California con océano y costa cubierta de pasto", portrait: false },
  "condo-insurance-california": { src: "/images/california-residential-neighborhood-street.webp", en: "California residential neighborhood with attached homes and parked vehicles", es: "Vecindario residencial de California con viviendas adosadas y vehículos estacionados", portrait: true },
  "life-insurance-needs-california": { src: "/images/welcoming-insurance-office-lounge.webp", en: "Welcoming seating area inside the Moreno Valley insurance office", es: "Área acogedora de asientos dentro de la oficina de seguros en Moreno Valley", portrait: false },
  "earthquake-insurance-retrofit-discounts": { src: "/images/california-desert-and-mountain-terrain.webp", en: "Rocky California terrain with mountains in the distance", es: "Terreno rocoso de California con montañas a la distancia", portrait: false },
  "wildfire-readiness-home-hardening": { src: "/images/people-walking-on-california-overlook-trail.webp", en: "Two people walking along an elevated California trail", es: "Dos personas caminando por un sendero elevado de California", portrait: true },
  "commercial-general-liability-limits": { src: "/images/insurance-agency-office-and-recognition-wall.webp", en: "Insurance agency office with Farmers signage and a recognition display", es: "Oficina de seguros con letrero de Farmers y una vitrina de reconocimientos", portrait: false },
  "business-owners-policy-property-income": { src: "/images/california-urban-commercial-buildings.webp", en: "Older and modern commercial buildings along a California city street", es: "Edificios comerciales antiguos y modernos en una calle urbana de California", portrait: true },
  "workers-compensation-california": { src: "/images/palm-lined-california-business-street.webp", en: "Palm-lined California business street at dusk", es: "Calle comercial de California con palmeras al atardecer", portrait: false },
  "commercial-auto-california": { src: "/images/california-commercial-street-and-vehicles.webp", en: "California commercial street with parked and moving vehicles", es: "Calle comercial de California con vehículos estacionados y en circulación", portrait: false },
  "cyber-professional-liability-california": { src: "/images/california-urban-business-district.webp", en: "California urban business district viewed from above", es: "Distrito comercial urbano de California visto desde arriba", portrait: true },
  "california-home-insurance-non-renewal": { src: "/images/california-coastal-homes-and-walkway.webp", en: "California coastal homes beside a landscaped public walkway", es: "Casas costeras de California junto a un paseo público ajardinado", portrait: false },
  "insuring-jewelry-art-collections": { src: "/images/agency-recognition-display-detail.webp", en: "Detailed view of a glass recognition display inside the agency office", es: "Vista detallada de una vitrina de reconocimientos dentro de la oficina de la agencia", portrait: false },
} as const;

export function ArticlePhoto({ slug, locale }: { slug: string; locale: "en" | "es" }) {
  const photo = photos[slug as keyof typeof photos];
  if (!photo) return null;
  return <figure className={`article-photo${photo.portrait ? " article-photo-portrait" : ""}`}><Image src={photo.src} alt={photo[locale]} fill sizes={photo.portrait ? "(max-width: 620px) 100vw, 480px" : "(max-width: 820px) 100vw, 790px"} /></figure>;
}
