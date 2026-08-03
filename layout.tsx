import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const lora = Lora({ variable: "--font-serif", subsets: ["latin"] });
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: "Abraham Nunez-Chavez | Southern California Insurance", template: "%s | Abraham Nunez-Chavez" }, description: "Clear personal, commercial, wildfire property, and escrow insurance guidance across Southern California.", alternates: { canonical: "/" }, openGraph: { title: "Clear Insurance Guidance", description: "Personal and business insurance guidance for Southern California.", type: "website", url: siteConfig.url, images:["/og-placeholder.svg"] }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const schema = { "@context":"https://schema.org", "@type":"InsuranceAgency", name:siteConfig.name, telephone:"+1-714-388-9533", email:siteConfig.email, address:{"@type":"PostalAddress",streetAddress:"13800 Heacock St., Suite C120",addressLocality:"Moreno Valley",addressRegion:"CA",postalCode:"92553",addressCountry:"US"}, areaServed:["Riverside County","Orange County","Inland Empire","Southern California"], url:siteConfig.url }; return <html lang="en"><body className={`${geist.variable} ${lora.variable}`}><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>; }
