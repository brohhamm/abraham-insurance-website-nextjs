"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { usePathname } from "next/navigation";
import { localeFromPath, navByLocale } from "@/lib/i18n";
export function Footer() {
  const pathname = usePathname();
  const es = localeFromPath(pathname) === "es";
  const navigation = navByLocale[es ? "es" : "en"];
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-brand">{siteConfig.name}</p>
          <p>
            {siteConfig.title} · CA Lic. No. {siteConfig.license}
          </p>
          <p>{siteConfig.agency}</p>
        </div>
        <div>
          <h2>{es ? "Explorar" : "Explore"}</h2>
          {navigation.slice(0, 4).map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
          <Link href={es ? "/es/nuestra-agencia" : "/about"}>
            {es ? "Nuestra agencia" : "Our Agency"}
          </Link>
          <Link href={es ? "/es/oficina-yorba-linda" : "/yorba-linda-office"}>
            {es ? "Oficina de Yorba Linda" : "Yorba Linda Office"}
          </Link>
          <Link href={es ? "/es/servicio-al-cliente" : "/customer-service"}>
            {es ? "Servicio al cliente" : "Customer Service"}
          </Link>
        </div>
        <div>
          <h2>{es ? "Contacto" : "Contact"}</h2>
          <a href={siteConfig.phoneHref}>{siteConfig.directPhone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            {es ? "Conectar en LinkedIn" : "Connect on LinkedIn"} ↗
          </a>
          <p>{siteConfig.address}</p>
        </div>
      </div>
      <div className="shell legal-row">
        <p>
          {es
            ? "Abraham Nunez-Chavez, Lic. de CA núm. 4357305. Abel Duran, Lic. de CA núm. 0F17442. Devan Wright, Lic. de CA núm. 0H19544. Rosalia Elizabeth Gomez, Lic. de CA núm. 0K37042. Abel Duran Insurance Agency, Inc., Lic. de agencia de CA núm. 0K15422. Los productos y su disponibilidad varían según la aseguradora, la elegibilidad de suscripción, la cobertura seleccionada y el estado."
            : "Abraham Nunez-Chavez, CA Lic. No. 4357305. Abel Duran, CA Lic. No. 0F17442. Devan Wright, CA Lic. No. 0H19544. Rosalia Elizabeth Gomez, CA Lic. No. 0K37042. Abel Duran Insurance Agency, Inc., CA Agency Lic. No. 0K15422. Insurance products and availability vary by carrier, underwriting eligibility, coverage selection, and state."}
        </p>
        <div>
          <Link href={es ? "/es/privacidad" : "/privacy"}>
            {es ? "Privacidad" : "Privacy"}
          </Link>
          <Link href={es ? "/es/terminos" : "/terms"}>
            {es ? "Términos" : "Terms"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
