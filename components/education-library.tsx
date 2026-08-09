"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/content/articles";

const categories = ["All", "Personal", "Commercial", "Wildfire & Catastrophe", "Real Estate", "General"] as const;

export function EducationLibrary({ articles, spanish = false }: { articles: Article[]; spanish?: boolean }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return articles.filter((article) => {
      const articleCategory = article.category || "General";
      const matchesCategory = category === "All" || articleCategory === category;
      const matchesSearch = !search || [article.title, article.summary, article.commonLimits || "", ...(article.quickFacts || [])].join(" ").toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [articles, category, query]);

  return <div>
    <div className="education-controls">
      <label className="education-search">{spanish ? "Buscar guías" : "Search guides"}
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={spanish ? "Límites de auto, incendios, negocios…" : "Auto limits, wildfire, workers’ comp…"} />
      </label>
      <div className="filter-row" aria-label="Filter education guides">
        {categories.map((item) => <button key={item} type="button" className={category === item ? "filter-chip active" : "filter-chip"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <p className="results-count" aria-live="polite">{filtered.length} guide{filtered.length === 1 ? "" : "s"} shown</p>
    </div>
    <div className="article-grid">
      {filtered.map((article) => <article className="article-card interactive-card" key={article.slug}>
        <span>{article.category || "General"} guide</span>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        {article.commonLimits ? <details><summary>Common limits and starting points</summary><p>{article.commonLimits}</p></details> : null}
        <Link href={`/education/${article.slug}`}><strong>Open full guide →</strong></Link>
      </article>)}
    </div>
    {!filtered.length ? <div className="empty-guides"><h2>No guides match that search.</h2><button type="button" className="text-link reset-button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div> : null}
  </div>;
}
