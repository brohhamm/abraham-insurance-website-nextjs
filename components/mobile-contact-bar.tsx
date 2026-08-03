import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileContactBar() {
  return <nav className="mobile-contact-bar" aria-label="Quick contact">
    <a href={siteConfig.phoneHref}>Call</a>
    <a href="sms:+17143889533">Text</a>
    <Link href="/contact">Quote</Link>
  </nav>;
}
