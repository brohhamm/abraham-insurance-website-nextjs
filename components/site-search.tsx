"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { searchPublicPages, normalizeSearch } from "@/lib/site-search.mjs";
import type { SearchEntry } from "@/lib/search-index";

export function SiteSearch({ entries, locale, onNavigate }: { entries: SearchEntry[]; locale: "en" | "es"; onNavigate: () => void }) {
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const es = locale === "es";
  const suggestions = es ? ["Seguro de casa", "Propietarios", "Condominio vacante", "Contratista nuevo", "Compensación laboral", "Legado"] : ["Home insurance", "Landlord", "Vacant condo", "New contractor", "Workers compensation", "Legacy life"];
  const categories: Record<string, string> = es ? {support:"Servicio al cliente", market:"Aseguradoras", service:"Seguros", guide:"Guía", agent:"Equipo", location:"Área de servicio", event:"Evento", page:"Página"} : {support:"Customer service", market:"Carriers", service:"Insurance", guide:"Guide", agent:"Team", location:"Service area", event:"Event", page:"Page"};
  const results = searchPublicPages(entries, query, locale);
  function close() { dialog.current?.close(); trigger.current?.focus(); }
  function open() { setQuery(""); dialog.current?.showModal(); input.current?.focus(); }
  return <>
    <button ref={trigger} type="button" className="search-trigger" aria-haspopup="dialog" onClick={open}>{es ? "Buscar" : "Search"}</button>
    <dialog ref={dialog} className="site-search-dialog" aria-labelledby="site-search-title" onKeyDown={event => { if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); close(); } }} onCancel={event => { event.preventDefault(); close(); }}>
      <div className="search-heading"><h2 id="site-search-title">{es ? "Busque en el sitio" : "Search the website"}</h2><button type="button" className="button button-secondary button-small" onClick={close}>{es ? "Cerrar" : "Close"}</button></div>
      <label className="search-label" htmlFor="site-search-input">{es ? "Agentes, seguros, guías, oficinas y eventos" : "Agents, insurance, guides, offices, and events"}</label>
      <input ref={input} id="site-search-input" type="search" value={query} maxLength={120} autoComplete="off" onChange={event => setQuery(event.target.value)} placeholder={es ? "Por ejemplo: alquiler, equipo, Abraham" : "Try landlord, equipment, or Abraham"} aria-describedby="search-status" />
      {query && <button className="search-clear" type="button" onClick={() => { setQuery(""); input.current?.focus(); }}>{es ? "Borrar búsqueda" : "Clear search"}</button>}
      {!query.trim() && <div className="search-suggestions" aria-label={es ? "Búsquedas sugeridas" : "Suggested searches"}>{suggestions.map(term => <button key={term} type="button" onClick={() => { setQuery(term); input.current?.focus(); }}>{term}</button>)}</div>}
      <p className="experience-note" id="search-status" role="status">{!query.trim() ? (es ? "Escriba para buscar. Se priorizan resultados en español." : "Start typing to search. English results appear first.") : results.length ? (es ? `${results.length} resultados. Use Tab para recorrer los enlaces.` : `${results.length} results. Use Tab to move through the links.`) : (es ? "No encontramos resultados. Pruebe otro término o contacte a la agencia." : "No results found. Try another term or contact the agency.")}</p>
      <ul className="search-results">{results.map((entry, index) => <li key={entry.href} lang={entry.locale}><Link href={entry.href} onClick={() => { close(); onNavigate(); }}><small>{categories[entry.category || "page"]}{index === 0 && normalizeSearch(entry.title) === normalizeSearch(query) ? (es ? " · Coincidencia exacta" : " · Exact match") : ""}</small><strong>{entry.title}</strong><span>{entry.description}</span>{entry.locale !== locale && <small>{entry.locale === "es" ? "Español" : "English"}</small>}</Link></li>)}</ul>
    </dialog>
  </>;
}
