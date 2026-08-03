"use client";
import Link from "next/link";
import { useState } from "react";
import { navigation, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="topbar"><div className="shell topbar-inner"><span>CA Insurance Lic. No. {siteConfig.license}</span><a href={siteConfig.phoneHref}>Direct: {siteConfig.directPhone}</a></div></div>
    <div className="shell nav-row">
      <Link href="/" className="brand" aria-label="Home"><strong>Abraham Nunez-Chavez</strong><span>Insurance Agent/Broker</span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">Menu</button>
      <nav id="main-navigation" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="button button-small" href="/contact">Request a Quote</Link>
      </nav>
    </div>
  </header>;
}
