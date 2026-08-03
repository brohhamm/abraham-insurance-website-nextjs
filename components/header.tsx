"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <header className="site-header">
    <div className="topbar"><div className="shell topbar-inner"><span>CA Insurance Lic. No. {siteConfig.license}</span><a href={siteConfig.phoneHref}>Direct: {siteConfig.directPhone}</a></div></div>
    <div className="shell nav-row">
      <Link href="/" className="brand" aria-label="Abraham Nunez-Chavez Insurance home"><strong>Abraham Nunez-Chavez</strong><span>Insurance Agent/Broker</span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>{open ? "Close" : "Menu"}</button>
      <nav id="main-navigation" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="button button-small" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Request a Quote</Link>
      </nav>
    </div>
  </header>;
}
