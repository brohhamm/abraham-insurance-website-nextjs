import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/content/articles";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.summary, alternates: { canonical: `/education/${article.slug}` } } : { title: "Article" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <article className="article-page"><div className="shell article-body">
    <Link className="back-link" href="/education">← Education Center</Link>
    <p className="eyebrow">{article.category || "Insurance"} guide</p>
    <h1>{article.title}</h1>
    <p className="article-summary">{article.summary}</p>
    {article.quickFacts?.length ? <section className="guide-panel"><h2>What to know first</h2><ul>{article.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></section> : null}
    {article.commonLimits ? <section className="limit-panel"><p className="eyebrow">California limits and common starting points</p><p>{article.commonLimits}</p><small>These are educational benchmarks, not a recommendation for every applicant.</small></section> : null}
    <section className="guide-copy">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
    {article.officialResources?.length ? <section className="official-resources"><h2>Official California resources</h2><div>{article.officialResources.map((resource) => <a href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>{resource.label}<span aria-hidden="true">↗</span></a>)}</div></section> : null}
    <div className="article-disclaimer"><strong>Important:</strong> This information is educational and does not modify any policy. Coverage is subject to eligibility, underwriting, policy terms, conditions, limitations, and exclusions. Laws, programs, limits, and carrier rules can change. Actual policy language and current official requirements control.</div>
    <div className="guide-actions"><Link className="button" href={`/contact?insurance=${encodeURIComponent(article.title)}`}>Ask About This Coverage</Link><Link className="button button-secondary" href="/education">Explore More Guides</Link></div>
  </div></article>;
}
