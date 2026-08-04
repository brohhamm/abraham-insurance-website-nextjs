"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function MobileContactBar() {
  const es=localeFromPath(usePathname())==="es";
  return <nav className="mobile-contact-bar" aria-label={es?"Contacto rápido":"Quick contact"}>
    <a href={siteConfig.phoneHref}>{es?"Llamar":"Call"}</a>
    <a href="sms:+17143889533">{es?"Mensaje":"Text"}</a>
    <Link href={es?"/es/contacto":"/contact"}>{es?"Cotizar":"Quote"}</Link>
  </nav>;
}
