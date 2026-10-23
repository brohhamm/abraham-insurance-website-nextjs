import Image from "next/image";
import { moses } from "@/lib/moses";

export function MosesServiceCard({ locale = "en", location = false }: { locale?: "en" | "es"; location?: boolean }) {
  const text = moses[locale];
  return (
    <article className={location ? "location-profile" : "team-card"}>
      <div className={location ? "location-profile-photo" : "team-card-photo"}>
        <Image src={moses.image} alt={`${moses.name}, ${text.role} · Moreno Valley`} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "contain" }} />
      </div>
      <div>
        <p className="eyebrow">{text.role}</p>
        <h2>{moses.name}</h2>
        <p><strong>{locale === "es" ? "Lic. de CA n.º" : "CA Lic. No."} {moses.license}</strong></p>
        <p>{text.copy}</p>
        <p><a className="text-link" href={`mailto:${moses.email}`}>{moses.email}</a></p>
        <div className="profile-links"><a className="text-link" href={`mailto:${moses.email}`}>{text.emailLabel} →</a></div>
      </div>
    </article>
  );
}
