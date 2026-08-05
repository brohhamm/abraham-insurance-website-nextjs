import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { SiteAnalytics } from "@/components/site-analytics";
import { siteConfig } from "@/lib/site-config";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const lora = Lora({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Insurance Agent & Broker in Moreno Valley, CA | Abraham Nunez-Chavez",
    template: "%s | Abraham Nunez-Chavez",
  },
  description: "Personal, commercial, wildfire, life, and escrow insurance support for Riverside and Orange Counties.",
  openGraph: {
    siteName: "Abraham Nunez-Chavez Insurance",
    locale: "en_US",
    title: "Insurance Agent & Broker in Moreno Valley, CA",
    description: "Personal and business insurance support across Riverside and Orange Counties.",
    type: "website",
    url: siteConfig.url,
    images: [{ url: "/og-insurance.svg", width: 1200, height: 630, alt: "Abraham Nunez-Chavez Insurance Agent and Broker" }],
  },
  twitter: { card: "summary_large_image", title: "Abraham Nunez-Chavez Insurance", description: "Personal and business insurance support across Riverside and Orange Counties.", images: ["/og-insurance.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale=(await headers()).get("x-site-locale")==="es"?"es":"en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${siteConfig.url}/#insurance-agency`,
    name: siteConfig.name,
    description: "Licensed California insurance agent and broker serving personal, commercial, life, wildfire, and escrow insurance needs.",
    url: siteConfig.url,
    image: `${siteConfig.url}/og-insurance.svg`,
    telephone: "+1-714-388-9533",
    email: siteConfig.email,
    priceRange: "$$",
    identifier: { "@type": "PropertyValue", name: "California Insurance License", value: siteConfig.license },
    address: { "@type": "PostalAddress", streetAddress: "13800 Heacock St., Suite C120", addressLocality: "Moreno Valley", addressRegion: "CA", postalCode: "92553", addressCountry: "US" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" }],
    areaServed: ["Moreno Valley", "Riverside County", "Yorba Linda", "Orange County", "Inland Empire", "Southern California"],
    sameAs: [siteConfig.linkedin],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance Services",
      itemListElement: ["Homeowners", "Auto", "Renters", "Condo", "Landlord", "Umbrella", "Life", "Earthquake", "General Liability", "Workers Compensation", "Commercial Auto", "Commercial Property", "Business Owners Policy"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
  return <html lang={locale}><body className={`${geist.variable} ${lora.variable}`}><Header/><main>{children}</main><Footer/><MobileContactBar/><script id="insurance-agency-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteAnalytics /></body></html>;
}
