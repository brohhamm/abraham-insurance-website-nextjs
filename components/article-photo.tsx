import Image from "next/image";

const photos = {
  "replacement-cost-market-value": { src: "/images/residential-building-with-complex-rooflines.webp", en: "Large residential building with varied rooflines and exterior finishes", es: "Edificio residencial grande con distintos tipos de techo y acabados exteriores", portrait: false },
  "high-value-home-insurance-underwriting-california": { src: "/images/high-value-california-residences.webp", en: "Large California residences viewed from a neighborhood street", es: "Residencias grandes de California vistas desde una calle residencial", portrait: false },
  "renters-insurance-california": { src: "/images/california-apartment-building-and-parking.webp", en: "California apartment building with a shared residential parking area", es: "Edificio de apartamentos en California con estacionamiento residencial compartido", portrait: false },
  "auto-garaging-address": { src: "/images/palm-lined-california-street-and-parked-cars.webp", en: "Palm-lined California street with moving and parked vehicles", es: "Calle de California con palmeras y vehículos estacionados y en circulación", portrait: true },
  "business-owners-policy-property-income": { src: "/images/california-urban-commercial-buildings.webp", en: "Older and modern commercial buildings along a California city street", es: "Edificios comerciales antiguos y modernos en una calle urbana de California", portrait: true },
} as const;

export function ArticlePhoto({ slug, locale }: { slug: string; locale: "en" | "es" }) {
  const photo = photos[slug as keyof typeof photos];
  if (!photo) return null;
  return <figure className={`article-photo${photo.portrait ? " article-photo-portrait" : ""}`}><Image src={photo.src} alt={photo[locale]} fill sizes={photo.portrait ? "(max-width: 620px) 100vw, 480px" : "(max-width: 820px) 100vw, 790px"} /></figure>;
}
