import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { insuranceServices } from "@/content/services";
import { serviceLocations } from "@/content/locations";
import { siteConfig } from "@/lib/site-config";
import { routePairs } from "@/lib/i18n";

const lastModified = new Date("2026-08-03T00:00:00-07:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/personal-insurance", "/business-insurance", "/carriers", "/wildfire-insurance", "/referral-partners", "/education", "/about", "/abel-duran", "/devan-wright", "/moreno-valley-office", "/yorba-linda-office", "/customer-service", "/contact", "/privacy", "/terms"];
  const english = [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...insuranceServices.map((service) => ({ url: `${siteConfig.url}/insurance/${service.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...serviceLocations.map((location) => ({ url: `${siteConfig.url}/locations/${location.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/education/${article.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
  const spanish = Object.values(routePairs).map((path) => ({ url: `${siteConfig.url}${path}`, lastModified, changeFrequency: path === "/es" ? "weekly" as const : "monthly" as const, priority: path === "/es" ? 0.9 : 0.7 }));
  return [...english, ...spanish];
}
