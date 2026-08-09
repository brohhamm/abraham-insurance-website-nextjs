import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/content/articles";
import { siteConfig } from "@/lib/site-config";
import { alternatesFor } from "@/lib/i18n";

const publishedDate = "2026-08-09";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? {
    title: article.title,
    description: article.summary,
    alternates: alternatesFor(`/education/${article.slug}`),
    authors: [{ name: "Abraham Nunez-Chavez", url: "/about" }],
  } : { title: "Article" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const articleUrl = `${siteConfig.url}/education/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Person", name: "Abraham Nunez-Chavez", url: `${siteConfig.url}/about`, identifier: "CA Insurance Lic. No. 4357305" },
    publisher: { "@type": "InsuranceAgency", "@id": `${siteConfig.url}/#insurance-agency`, name: siteConfig.name },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Education", item: `${siteConfig.url}/education` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };
  return <article className="article-page"><div className="shell article-body">
    <nav className="breadcrumbs article-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/education">Education</Link><span>›</span><span aria-current="page">{article.title}</span></nav>
    <p className="eyebrow">{article.category || "Insurance"} guide</p>
    <h1>{article.title}</h1>
    <p className="article-summary">{article.summary}</p>
    <div className="author-row"><div><strong>Written and reviewed by <Link href="/about">Abraham Nunez-Chavez</Link></strong><span>California Insurance Agent/Broker · Lic. No. 4357305</span></div><time dateTime={publishedDate}>Reviewed August 9, 2026</time></div>
    {article.quickFacts?.length ? <section className="guide-panel"><h2>What to know first</h2><ul>{article.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></section> : null}
    {article.commonLimits ? <section className="limit-panel"><p className="eyebrow">California limits and common starting points</p><p>{article.commonLimits}</p><small>These are educational benchmarks, not a recommendation for every applicant.</small></section> : null}
    <section className="guide-copy">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
    {article.officialResources?.length ? <section className="official-resources"><h2>Official California resources</h2><div>{article.officialResources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>{resource.label}<span aria-hidden="true">↗</span></a>)}</div></section> : null}
    {article.relatedSlugs?.length ? <section className="official-resources"><h2>Related Abraham Valley Insurance guides</h2><div>{article.relatedSlugs.map((relatedSlug) => { const related = getArticle(relatedSlug); return related ? <Link href={`/education/${related.slug}`} key={related.slug}>{related.title}<span aria-hidden="true">→</span></Link> : null; })}</div></section> : null}
    <div className="article-disclaimer"><strong>Important:</strong> This information is educational and does not modify any policy. Coverage is subject to eligibility, underwriting, policy terms, conditions, limitations, and exclusions. Laws, programs, limits, and carrier rules can change. Actual policy language and current official requirements control.</div>
    <div className="guide-actions"><Link className="button" href={`/contact?insurance=${encodeURIComponent(article.title)}`}>Ask About This Coverage</Link><Link className="button button-secondary" href="/education">Explore More Guides</Link></div>
    <script id={`article-schema-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script id={`breadcrumb-schema-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </div></article>;
}
