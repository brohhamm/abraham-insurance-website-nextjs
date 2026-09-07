import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { insuranceServices } from "@/content/services";
import { serviceLocations } from "@/content/locations";
import { siteConfig } from "@/lib/site-config";
import { routePairs } from "@/lib/i18n";
import { guideUpdated } from "@/content/guide-lessons";
export const dynamic = "force-static";
const lastModified = new Date("2026-09-02T00:00:00-07:00");
const contentModified = new Date(`${guideUpdated}T00:00:00-07:00`);
const updatedStaticPaths = new Set(["", "/education", "/carriers", "/referral-partners"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/personal-insurance", "/business-insurance", "/carriers", "/referral-partners", "/education", "/about", "/abel-duran", "/abraham-nunez-chavez", "/devan-wright", "/emily-lussier", "/rosalia-elizabeth-gomez", "/moreno-valley-office", "/yorba-linda-office", "/customer-service", "/contact", "/privacy", "/sms-terms-and-conditions", "/terms"];
  const english = [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: updatedStaticPaths.has(path) ? contentModified : lastModified, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...insuranceServices.map((service) => ({ url: `${siteConfig.url}/insurance/${service.slug}`, lastModified: contentModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...serviceLocations.map((location) => ({ url: `${siteConfig.url}/locations/${location.slug}`, lastModified: contentModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/education/${article.slug}`, lastModified: article.dateModified ? contentModified : lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
  const englishDates = new Map(english.map((entry) => [new URL(entry.url).pathname, entry.lastModified]));
  const spanish = Object.entries(routePairs).map(([en, path]) => ({ url: `${siteConfig.url}${path}`, lastModified: englishDates.get(en) ?? lastModified, changeFrequency: path === "/es" ? "weekly" as const : "monthly" as const, priority: path === "/es" ? 0.9 : 0.7 }));
  return [...english, ...spanish];
}

