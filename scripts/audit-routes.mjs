import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const base = process.argv[2] || "https://www.theduranagency.com";
const output = resolve(process.argv[3] || "audit-output/routes.json");
const canonicalBase = "https://www.theduranagency.com";
const fetchOptions = { signal: AbortSignal.timeout(30000) };
const sitemapResponse = await fetch(`${base}/sitemap.xml`, fetchOptions);
const sitemap = await sitemapResponse.text();
if (!sitemapResponse.ok || !sitemap.includes("<urlset")) throw new Error("Sitemap unavailable or not XML; check preview access.");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const results = [];
let index = 0;
async function inspect(original) {
  const path = new URL(original).pathname;
  let current = `${base}${path}`;
  const redirects = [];
  for (let hop = 0; hop < 6; hop++) {
    const response = await fetch(current, { redirect: "manual", signal: AbortSignal.timeout(30000) });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const destination = new URL(response.headers.get("location"), current).href;
      redirects.push({ from: current, status: response.status, to: destination });
      if (new URL(destination).origin !== new URL(base).origin) return { path, status: response.status, redirects, error: "External redirect; not counted as a passing page" };
      current = destination;
      continue;
    }
    const html = await response.text();
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return { path, status: response.status, url: current, redirects, canonical, canonicalUsesPrimary: canonical?.startsWith(canonicalBase), server: response.headers.get("server"), hasVercelHeader: response.headers.has("x-vercel-id"), title: html.match(/<title>(.*?)<\/title>/s)?.[1], headings: [...html.matchAll(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/g)].map((m) => m[1].replace(/<[^>]+>/g, "")), hasUpdatedLessons: html.includes("2026-09-07"), hasQuoteForm: html.includes("quote-form"), text };
  }
  return { path, error: "Too many redirects", redirects };
}
await Promise.all(Array.from({ length: 6 }, async () => {
  while (index < urls.length) {
    const url = urls[index++];
    try { results.push(await inspect(url)); }
    catch (error) { results.push({ path: new URL(url).pathname, error: String(error) }); }
  }
}));
results.sort((a, b) => a.path.localeCompare(b.path));
const report = { checkedAt: new Date().toISOString(), base, sitemapStatus: sitemapResponse.status, count: results.length, english: results.filter((x) => !x.path.startsWith("/es")).length, spanish: results.filter((x) => x.path.startsWith("/es")).length, results };
await mkdir(resolve(output, ".."), { recursive: true });
await writeFile(output, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, results: undefined, issues: results.filter((x) => x.status !== 200 || x.error || !x.canonicalUsesPrimary), redirects: results.filter((x) => x.redirects?.length).map(({ path, redirects }) => ({ path, redirects })), output }, null, 2));
if (results.some((x) => x.status !== 200 || x.error || !x.canonicalUsesPrimary)) process.exitCode = 1;
