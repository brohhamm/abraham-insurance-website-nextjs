import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-config";
export function Footer() { return <footer className="footer"><div className="shell footer-grid">
  <div><p className="footer-brand">{siteConfig.name}</p><p>{siteConfig.title} · CA Lic. No. {siteConfig.license}</p><p>{siteConfig.agency}</p></div>
  <div><h2>Explore</h2>{navigation.slice(0,4).map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/about">Our Agency</Link><Link href="/customer-service">Customer Service</Link></div>
  <div><h2>Contact</h2><a href={siteConfig.phoneHref}>{siteConfig.directPhone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><p>{siteConfig.address}</p></div>
</div><div className="shell legal-row"><p>Abraham Nunez-Chavez, CA Lic. No. 4357305. Abel Duran, CA Lic. No. 0F17442. Devan Wright, CA Lic. No. 0H19544. Abel Duran Insurance Agency, Inc., CA Agency Lic. No. 0K15422. Insurance products and availability vary by carrier, underwriting eligibility, coverage selection, and state.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>; }
