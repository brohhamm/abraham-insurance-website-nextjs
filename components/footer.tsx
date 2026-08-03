import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-config";
export function Footer() { return <footer className="footer"><div className="shell footer-grid">
  <div><p className="footer-brand">{siteConfig.name}</p><p>{siteConfig.title} · CA Lic. No. {siteConfig.license}</p><p>{siteConfig.agency}</p></div>
  <div><h2>Explore</h2>{navigation.slice(0,4).map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}</div>
  <div><h2>Contact</h2><a href={siteConfig.phoneHref}>{siteConfig.directPhone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><p>{siteConfig.address}</p></div>
</div><div className="shell legal-row"><p>Insurance products are subject to eligibility, underwriting, terms, conditions, limitations, and exclusions.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>; }
