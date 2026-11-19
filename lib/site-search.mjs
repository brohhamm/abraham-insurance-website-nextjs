/** @typedef {{href:string,title:string,description:string,locale:'en'|'es',keywords?:string}} SearchEntry */

/** @param {string} value */
export function normalizeSearch(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Only local public page routes are eligible, never API or internal resources.
 * @param {string} href */
export function isPublicSearchPath(href) {
  return /^\/(?!\/)[a-zA-Z0-9\/-]*$/.test(href) && !/^\/(?:es\/)?(?:api|admin|private|_next|search|buscar)(?:\/|$)/i.test(href);
}

const synonyms = [
  ['insurance', 'seguro', 'seguros'],
  ['liability', 'responsabilidad', 'civil'],
  ['landlord', 'rental', 'rentals', 'arrendador', 'propietarios', 'alquiler', 'dp3'],
  ['home', 'homeowners', 'casa', 'vivienda', 'hogar'],
  ['auto', 'car', 'vehicle', 'vehiculo', 'automovil'],
  ['life', 'vida', 'legacy', 'legado'],
  ['inland', 'marine', 'equipment', 'equipo', 'herramientas', 'transito'],
  ['business', 'commercial', 'negocio', 'comercial', 'restaurante', 'restaurant', 'salon'],
  ['escrow', 'closing', 'cierre', 'homebuyer', 'comprador'],
  ['christmas', 'navidad', 'navideno', 'event', 'evento', 'rsvp'],
];

/** @param {SearchEntry[]} entries @param {string} query @param {'en'|'es'} locale */
export function searchPublicPages(entries, query, locale) {
  const normalized = normalizeSearch(query.slice(0, 120));
  const tokens = normalized.split(' ').filter(Boolean);
  const publicEntries = entries.filter(entry => isPublicSearchPath(entry.href));
  if (!tokens.length) return [];
  const ranked = publicEntries.map(entry => {
    const title = normalizeSearch(entry.title);
    const description = normalizeSearch(entry.description + ' ' + (entry.keywords || ''));
    let score = 0;
    for (const token of tokens) {
      const group = synonyms.find(words => words.includes(token));
      const alternatives = group || [token];
      if (title.includes(token)) score += 12;
      else if (description.includes(token)) score += 5;
      else if (alternatives.some(word => title.includes(word) || description.includes(word))) score += 2;
      else return { entry, score: 0 };
    }
    if (title.includes(normalized)) score += 20;
    return { entry, score };
  }).filter(result => result.score > 0);
  ranked.sort((a, b) => Number(b.entry.locale === locale) - Number(a.entry.locale === locale) || b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return ranked.slice(0, 16).map(result => result.entry);
}
