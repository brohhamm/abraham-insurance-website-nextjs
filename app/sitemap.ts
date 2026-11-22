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
const contextReviewModified = new Date("2026-09-26T00:00:00-07:00");
const contextReviewPaths = new Set(["/personal-insurance", "/business-insurance"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/inland-marine-insurance", "", "/personal-insurance", "/business-insurance", "/carriers", "/referral-partners", "/education", "/about", "/abel-duran", "/abraham-nunez-chavez", "/devan-wright", "/emily-lussier", "/rosalia-elizabeth-gomez", "/moreno-valley-office", "/yorba-linda-office", "/customer-service", "/contact", "/privacy", "/sms-terms-and-conditions", "/terms"];
  const english = [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: contextReviewPaths.has(path) ? contextReviewModified : updatedStaticPaths.has(path) ? contentModified : lastModified, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...insuranceServices.map((service) => ({ url: `${siteConfig.url}/insurance/${service.slug}`, lastModified: contentModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...serviceLocations.map((location) => ({ url: `${siteConfig.url}/locations/${location.slug}`, lastModified: contentModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/education/${article.slug}`, lastModified: article.dateModified ? new Date(`${article.dateModified}T00:00:00-08:00`) : lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
  const englishDates = new Map(english.map((entry) => [new URL(entry.url).pathname, entry.lastModified]));
  const spanish = Object.entries(routePairs).map(([en, path]) => ({ url: `${siteConfig.url}${path}`, lastModified: englishDates.get(en) ?? lastModified, changeFrequency: path === "/es" ? "weekly" as const : "monthly" as const, priority: path === "/es" ? 0.9 : 0.7 }));
  const eventEntry = { url: `${siteConfig.url}/events/christmas-client-appreciation`, lastModified: new Date("2026-11-05T00:00:00-08:00"), changeFrequency: "weekly" as const, priority: 0.7 };
  const revised = new Set(["/personal-insurance", "/carriers", "/", "/abraham-nunez-chavez", "/business-insurance", "/referral-partners", "/inland-marine-insurance", "/insurance/homeowners-insurance", "/insurance/condo-insurance", "/insurance/landlord-insurance", "/insurance/auto-insurance", "/insurance/life-insurance", "/insurance/general-liability-insurance", "/insurance/commercial-property-insurance", "/insurance/business-owners-policy", "/insurance/workers-compensation-insurance", "/insurance/contractor-insurance", "/insurance/commercial-auto-insurance"]);
  for (const path of [...revised]) if (routePairs[path]) revised.add(routePairs[path]);
  const priorOnly = new Set(["/referral-partners", "/es/socios-de-referidos", "/inland-marine-insurance", "/es/seguro-de-equipo-y-bienes-en-transito", "/insurance/auto-insurance", "/es/seguro-de-auto"]);
  return [...english, ...spanish, eventEntry].map(entry => revised.has(new URL(entry.url).pathname) ? { ...entry, lastModified: new Date(priorOnly.has(new URL(entry.url).pathname) ? "2026-11-18T00:00:00-08:00" : "2026-11-21T00:00:00-08:00") } : entry);
}

