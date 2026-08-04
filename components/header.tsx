"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { localeFromPath, localizePath, navByLocale } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const navigation = navByLocale[locale];
  const spanish = locale === "es";
  const agents = [
    { name: "Abel Duran", role: spanish ? "Agente principal" : "Principal Agent", href: spanish ? "/es/abel-duran" : "/abel-duran" },
    { name: "Abraham Nunez-Chavez", role: spanish ? "Agente/Corredor" : "Agent/Broker", href: spanish ? "/es/abraham-nunez-chavez" : "/abraham-nunez-chavez" },
    { name: "Devan Wright", role: spanish ? "Agente/Corredora" : "Agent/Broker", href: spanish ? "/es/devan-wright" : "/devan-wright" },
    { name: "Rosalia Elizabeth Gomez", role: spanish ? "Agente/Corredora" : "Agent/Broker", href: spanish ? "/es/rosalia-elizabeth-gomez" : "/rosalia-elizabeth-gomez" },
  ] as const;

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <header className="site-header">
    <div className="topbar"><div className="shell topbar-inner"><Link href={spanish ? "/es" : "/"} aria-label={spanish ? "Página principal" : "Home"}>{spanish ? "Licencia de seguros de CA" : "CA Insurance Lic. No."} {siteConfig.license}</Link><a href={siteConfig.phoneHref}>{spanish ? "Línea directa" : "Direct"}: {siteConfig.directPhone}</a></div></div>
    <nav className="shell agent-navigation" aria-label={spanish ? "Seleccione un agente" : "Choose an agent"}>
      {agents.map((agent) => <Link key={agent.name} href={agent.href} className="agent-brand" aria-current={pathname === agent.href ? "page" : undefined}><strong>{agent.name}</strong><span>{agent.role}</span></Link>)}
    </nav>
    <div className="shell nav-row">
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? (spanish ? "Cerrar menú de navegación" : "Close navigation menu") : (spanish ? "Abrir menú de navegación" : "Open navigation menu")}>{open ? (spanish ? "Cerrar" : "Close") : (spanish ? "Menú" : "Menu")}</button>
      <nav id="main-navigation" className={open ? "nav-links open" : "nav-links"} aria-label={spanish ? "Navegación principal" : "Main navigation"}>
        {navigation.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="button button-small language-button" href={localizePath(pathname, spanish ? "en" : "es")} hrefLang={spanish ? "en-US" : "es-US"} lang={spanish ? "en" : "es"} aria-label={spanish ? "View this page in English" : "Ver esta página en español"} onClick={() => setOpen(false)}>{spanish ? "English" : "Español"}</Link>
        <Link className="button button-small" href={spanish ? "/es/contacto" : "/contact"} aria-current={pathname === (spanish ? "/es/contacto" : "/contact") ? "page" : undefined} onClick={() => setOpen(false)}>{spanish ? "Solicitar una cotización" : "Request a Quote"}</Link>
      </nav>
    </div>
  </header>;
}
