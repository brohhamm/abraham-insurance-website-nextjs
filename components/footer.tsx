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
          <p className="footer-brand">Abel Duran</p>
          <p>{es ? "Propietario de la agencia" : "Agency Owner"} · {es ? "Lic. de agencia de CA n.º 0K15422" : "CA Agency Lic. No. 0K15422"}</p>
          <p>Abel Duran Insurance Agency, Inc.</p>
        </div>
        <div>
          <h2>{es ? "Explorar" : "Explore"}</h2>
          {navigation.map(([l, h]) => (
            <Link key={h} href={h}>
              {l}
            </Link>
          ))}
          <Link className="footer-quote" href={es ? "/es/contacto" : "/contact"}>{es ? "Solicitar una cotización" : "Request a Quote"}</Link>
        </div>
        <div>
          <h2>{es ? "Contacto principal del sitio web" : "Primary Website Contact"}</h2>
          <p>{siteConfig.name}</p>
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
            ? "Abel Duran, Lic. de CA núm. 0F17442. Devan Wright, Lic. de CA núm. 0H19544. Rosalia Elizabeth Gomez, Lic. de CA núm. 0K37042. Abel Duran Insurance Agency, Inc., Lic. de agencia de CA núm. 0K15422. Los productos y su disponibilidad varían según la aseguradora, la elegibilidad de suscripción, la cobertura seleccionada y el estado."
            : "Abel Duran, CA Lic. No. 0F17442. Devan Wright, CA Lic. No. 0H19544. Rosalia Elizabeth Gomez, CA Lic. No. 0K37042. Abel Duran Insurance Agency, Inc., CA Agency Lic. No. 0K15422. Insurance products and availability vary by carrier, underwriting eligibility, coverage selection, and state."}
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
