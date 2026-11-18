import Image from "next/image";
import Link from "next/link";
import { abrahamReviews, agencyReviewsUrl } from "@/content/client-reviews";

function GoogleAttribution({ spanish }: { spanish: boolean }) {
  return <div className="review-attribution"><Image src="/images/google-g-full-color.png" alt="Google" width={24} height={24} /><span>{spanish ? "Reseñas publicadas en Google" : "Reviews published on Google"}</span></div>;
}

export function AbrahamReviews({ locale }: { locale: "en" | "es" }) {
  const spanish = locale === "es";
  return <section className="section soft" aria-labelledby="abraham-reviews-heading"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">{spanish ? "Experiencias compartidas" : "Shared experiences"}</p><h2 id="abraham-reviews-heading">{spanish ? "Lo que dicen los clientes sobre trabajar con Abraham" : "What clients say about working with Abraham"}</h2></div></div>
    <GoogleAttribution spanish={spanish} />
    <p className="review-note">{spanish ? "Selección de reseñas, de la más reciente a la más antigua. Las fechas relativas se muestran como aparecían en Google al verificarlas el 17 de noviembre de 2026. Son opiniones individuales, no la calificación general de la agencia." : "Selected reviews, newest first. Relative dates are shown as they appeared on Google when checked November 17, 2026. These are individual opinions, not the agency’s overall rating."}</p>
    <div className="client-review-grid">{abrahamReviews.map(review => <figure className="card client-review" key={review.name}>
      <figcaption><strong>{review.name}</strong><span>{review.age[locale]}</span></figcaption>
      <p className="review-rating">{spanish ? "Calificación individual: " : "Individual rating: "}{review.rating}/5</p>
      <blockquote><p>“{review.excerpt[locale]}”</p></blockquote>
      {spanish && <p className="review-note">Traducción del original en inglés.</p>}
      <a className="text-link" href={review.url} target="_blank" rel="noopener noreferrer">{spanish ? "Leer la reseña original en Google" : "Read the original review on Google"}<span className="review-source-name"> ({review.name})</span> ↗</a>
    </figure>)}</div>
    <div className="button-row"><Link className="button" href={spanish ? "/es/contacto?agent=abraham" : "/contact?agent=abraham"}>{spanish ? "Solicitar una cotización con Abraham" : "Request a quote with Abraham"}</Link><a className="button button-secondary" href="tel:+17143889533">{spanish ? "Llame a Abraham: " : "Call Abraham: "}714-388-9533</a></div>
  </div></section>;
}

// General review quotations remain unpublished until their own authors' reuse
// consent is confirmed. Link to the complete listing rather than implying a rating.
export function CommunityReviews({ locale }: { locale: "en" | "es" }) {
  const spanish = locale === "es";
  return <section className="section soft" aria-labelledby="community-reviews-heading"><div className="shell narrow"><p className="eyebrow">{spanish ? "Nuestra comunidad" : "Our community"}</p><h2 id="community-reviews-heading">{spanish ? "Conozca las experiencias de nuestra comunidad" : "Hear from our community"}</h2><GoogleAttribution spanish={spanish} /><p>{spanish ? "Consulte las experiencias que los clientes han compartido sobre nuestra oficina de Moreno Valley en Google." : "Read the experiences clients have shared about our Moreno Valley office on Google."}</p><a className="text-link" href={agencyReviewsUrl} target="_blank" rel="noopener noreferrer">{spanish ? "Leer las reseñas de la agencia en Google" : "Read the agency’s reviews on Google"} ↗</a></div></section>;
}
