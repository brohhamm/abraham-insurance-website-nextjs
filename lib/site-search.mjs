/** @typedef {{href:string,title:string,description:string,locale:'en'|'es',keywords?:string,category?:string}} SearchEntry */

/** @param {string} value */
export function normalizeSearch(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\bdp[\s-]*3\b/g, 'dp3').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** @param {string} href */
export function isPublicSearchPath(href) {
  return /^\/(?!\/)[a-zA-Z0-9\/-]*(?:#[a-zA-Z0-9-]+)?$/.test(href) && !/^\/(?:es\/)?(?:api|admin|private|_next|search|buscar)(?:\/|$)/i.test(href);
}

// Specific phrases are replaced before individual words. Equipment rental is
// deliberately not treated as a landlord risk, and annuities are not life synonyms.
const concepts = {
  griefsupport: ['grief share','griefshare','bereavement','grieving','grief','duelo'],
  legacy: ['legacy','legado','multigenerational','multi generational'],
  generation: ['three generations','three generation','3 generations','3 generation','tres generaciones','3 generaciones'],
  contractor: ['contractors','contractor','contratistas','contratista'],
  seasonal: ['seasonal','temporada'],
  mortgage: ['mortgage','hipoteca','hipotecaria','hipotecario'],
  protection: ['protection','proteccion'],
  equipment: ['inland marine','equipment rented to others','equipment rentals','rental equipment','equipo alquilado','alquiler a terceros','bienes en transito','portable restrooms','sanitarios portatiles','equipment','equipos','equipo','herramientas'],
  landlord: ['rental properties','rental property','landlord','landlords','rentals','rental','arrendadores','arrendador','propietarios','alquiler'],
  condo: ['condominium','condominiums','condominio','condominios','condos','condo'],
  vacant: ['vacancy','vacant','vacantes','vacante'],
  manufactured: ['manufactured homes','manufactured home','mobile homes','mobile home','casas moviles','casa movil','casas prefabricadas'],
  buyer: ['first time homebuyers','first time homebuyer','first time buyers','first time buyer','homebuyers','homebuyer','compradores primerizos','comprador primerizo'],
  escrow: ['escrow','closing','cierre'],
  home: ['homeowners','homeowner','home','vivienda','casa','hogar'],
  auto: ['automobile','automovil','vehicles','vehicle','vehiculos','vehiculo','cars','car','auto'],
  business: ['commercial','business','comerciales','comercial','negocios','negocio'],
  liability: ['responsabilidad civil','responsabilidad','liability'],
  restaurant: ['restaurants','restaurant','restaurantes','restaurante'],
  salon: ['nail salons','nail salon','salons','salon','salones'],
  workers: ['workers compensation','workers comp','compensacion laboral'],
  life: ['life insurance','seguro de vida','life','vida'],
  annuity: ['annuities','annuity','anualidades','anualidad'],
  fairplan: ['california fair plan','fair plan','fairplan'],
  dic: ['difference in conditions','dic'],
  event: ['christmas','navidad','navideno','events','event','eventos','evento','rsvp'],
};
const aliases = Object.entries(concepts).flatMap(([key, words]) => words.map(word => [word, key])).sort((a,b) => b[0].length-a[0].length);
const stopWords = new Set(['insurance','coverage','policy','policies','seguro','seguros','and','or','the','of','for','my','a','an','in','de','del','la','el','los','las','y','para','en','con','mi','your','how','what','where','can','find','help','with','about','to','me','como','donde','busco','sobre']);

/** @param {string} text */
function canonicalize(text) {
  let result = normalizeSearch(text);
  for (const [alias, key] of aliases) result = result.replace(new RegExp('\\b'+alias+'\\b','g'), key);
  return result;
}

/** @param {string} a @param {string} b */
function distance(a, b) {
  if (Math.abs(a.length-b.length)>2) return 3;
  if(a.length===b.length) for(let i=0;i<a.length-1;i++) if(a.slice(0,i)+a[i+1]+a[i]+a.slice(i+2)===b) return 1;
  let row=Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++) {
    const next=[i];
    for(let j=1;j<=b.length;j++) next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+Number(a[i-1]!==b[j-1]));
    row=next;
  }
  return row[b.length];
}

/** @type {WeakMap<SearchEntry[], {docs: {entry: SearchEntry, title: string, description: string, keywords: string}[], vocabulary: Set<string>}>} */
const preparedIndexes = new WeakMap();

/** @param {SearchEntry[]} entries @param {string} query @param {'en'|'es'} locale */
export function searchPublicPages(entries, query, locale) {
  const raw=normalizeSearch(query.slice(0,120));
  if(!raw || /[<>]/.test(query)) return [];
  let prepared=preparedIndexes.get(entries);
  if(!prepared) {
    const docs=entries.filter(entry=>isPublicSearchPath(entry.href)).map(entry=>({entry,title:canonicalize(entry.title),description:canonicalize(entry.description),keywords:canonicalize(entry.keywords||'')}));
    const vocabulary=new Set([...docs.flatMap(doc=>(doc.title+' '+doc.description+' '+doc.keywords).split(' ')), ...aliases.flatMap(([alias])=>alias.split(' '))].filter(word=>word.length>=4));
    prepared={docs,vocabulary};
    preparedIndexes.set(entries,prepared);
  }
  const {docs,vocabulary}=prepared;
  const meaningful=raw.split(' ').filter(word=>!stopWords.has(word));
  const corrected=meaningful.map(word=>{
    if(word.length<4 || vocabulary.has(word) || aliases.some(([alias])=>alias.split(' ').includes(word))) return word;
    let best=word, bestDistance=word.length>=7?3:2;
    for(const candidate of vocabulary) {
      const d=distance(word,candidate);
      if(d<bestDistance) {best=candidate;bestDistance=d;}
    }
    return best;
  }).join(' ');
  const canonical=canonicalize(corrected);
  const tokens=[...new Set(canonical.split(' ').filter(Boolean))];
  if(!tokens.length) return docs.filter(doc=>doc.entry.category==='service').sort((a,b)=>Number(b.entry.locale===locale)-Number(a.entry.locale===locale)).slice(0,20).map(doc=>doc.entry);
  /** @param {string} text @param {string} token */
  const has=(text,token)=>text.split(' ').some(word=>word===token || (token.length>=4 && word.startsWith(token)));
  const ranked=docs.map(doc=>{
    let score=0, matches=0;
    for(const token of tokens) {
      if(has(doc.title,token)) score+=80;
      else if(has(doc.description,token)) score+=28;
      else if(has(doc.keywords,token)) score+=12;
      else continue;
      matches++;
    }
    if(matches < Math.max(Math.min(2,tokens.length),Math.ceil(tokens.length*.6))) return {entry:doc.entry,score:0};
    if(matches===tokens.length) score+=300;
    if(normalizeSearch(doc.entry.title)===raw) score+=600;
    else if(doc.title===canonical) score+=550;
    else if(doc.title.includes(canonical)) score+=220;
    if(tokens.every(token=>has(doc.title,token))) score+=100;
    if(doc.entry.locale===locale) score+=45;
    score+=Math.max(0,60-doc.title.split(' ').length*3);
    if(!doc.entry.href.includes('#')) score+=25;
    if(doc.entry.category==='service') score+=12;
    if(doc.entry.category==='market') score+=30;
    if(doc.entry.category==='agent' && tokens.every(token=>has(doc.title,token))) score+=150;
    return {entry:doc.entry,score};
  }).filter(result=>result.score>0);
  ranked.sort((a,b)=>Number(b.entry.locale===locale)-Number(a.entry.locale===locale) || b.score-a.score || a.entry.title.localeCompare(b.entry.title));
  return ranked.slice(0,20).map(result=>result.entry);
}
