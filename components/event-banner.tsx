import Link from "next/link";
import { event } from "@/lib/event-rsvp";
export function EventBanner({ locale = "en" }: { locale?: "en" | "es" }) {
  const es = locale === "es";
  return <aside className="rsvp-banner"><div className="shell"><p>{es ? "Convivio navideño para clientes y comunidad · 10 de diciembre, 5–8 p. m." : "Christmas Client Appreciation & Community Event · December 10, 5–8 p.m."}</p><Link className="button button-small" href={es ? event.esPath : event.enPath}>{es ? "Confirmar asistencia" : "RSVP"}</Link></div></aside>;
}
