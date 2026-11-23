import { readerServices } from "@/content/reader-services";
export function InsuranceWords({slug,locale}:{slug:string;locale:"en"|"es"}){
  const copy=readerServices[slug]?.[locale];
  if(!copy)return null;
  return <div className="insurance-words"><h2>{locale==="es"?"En palabras sencillas":"In plain English"}</h2><dl>{copy.words.map(item=><div key={item.term}><dt><strong>{item.term}</strong></dt><dd>{item.meaning}</dd></div>)}</dl></div>;
}
