import Link from "next/link";
import { event } from "@/lib/event-rsvp";
export function EventBanner({ locale = "en" }: { locale?: "en" | "es" }) {
  const es = locale === "es";
  return <aside className="rsvp-banner"><div className="shell"><p>{es ? "Encuentro de Año Nuevo para Clientes y Comunidad · 28 de enero, 4–6 p. m." : "New Year Client Appreciation & Community Event · January 28, 4–6 p.m."}</p><Link className="button button-small" href={es ? event.esPath : event.enPath}>{es ? "Confirmar asistencia" : "RSVP"}</Link></div></aside>;
}
