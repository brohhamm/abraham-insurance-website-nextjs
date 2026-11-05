import { PageHero } from "@/components/ui";
import { EventRsvpForm } from "@/components/event-rsvp-form";
import { event } from "@/lib/event-rsvp";
import { isRsvpConfigured } from "@/lib/event-store";
import { connection } from "next/server";

export async function ChristmasEvent({ locale }: { locale: "en" | "es" }) {
  await connection();
  // eslint-disable-next-line react-hooks/purity -- Dynamic Server Component: request time is read after connection(), never in a client render.
  const es = locale === "es", closed = Date.now() >= event.deadline;
  return <>
    <PageHero eyebrow={es ? "Está cordialmente invitado" : "You're invited"} title={es ? "Convivio navideño de agradecimiento a clientes y comunidad" : "Christmas Client Appreciation & Community Event"}>
      {es ? "Acompáñenos a una tarde de comida, convivencia y orientación práctica. Clientes y miembros de la comunidad son bienvenidos." : "Join us for food, friendly conversation, and practical guidance. Clients and community members are welcome."}
    </PageHero>
    <section className="section"><div className="shell rsvp-layout">
      <div><div className="details-card"><h2>{es ? "Detalles del evento" : "Event details"}</h2><p><strong>{es ? "Jueves 10 de diciembre de 2026" : "Thursday, December 10, 2026"}</strong><br />{es ? "5–8 p. m. · Hora del Pacífico" : "5–8 p.m. · Pacific time"}</p><p>{event.address}</p><p>{es ? "Confirme su asistencia antes de que termine el 23 de noviembre de 2026. Cupo máximo: 50 invitados, sin contar al personal." : "RSVP by the end of November 23, 2026. Capacity: 50 guests, excluding staff."}</p></div>
        <h2>{es ? "Una tarde para compartir" : "An evening together"}</h2><p>{es ? "Abel Duran dará la bienvenida. Fix It Auto compartirá qué hacer después de un accidente de auto, y Nichole de SERVPRO explicará los primeros pasos después de daños por agua o incendio. Habrá tiempo para preguntas generales y convivencia." : "Abel Duran will welcome guests. Fix It Auto will discuss what to do after a car accident, and Nichole from SERVPRO will share first steps after water or fire damage. There will be time for general questions and conversation."}</p>
        <h2>{es ? "Sorteos" : "Prize drawings"}</h2><p>{es ? "Los detalles y las reglas de los sorteos se anunciarán próximamente." : "Prize-drawing details will be announced."}</p>
        <p>{es ? "¿Necesita ayuda o desea cambiar o cancelar su registro?" : "Need help or want to change or cancel your registration?"} <a href="tel:+19516538888">951-653-8888</a>.</p>
      </div>
      <div className="form-card"><h2>{es ? "Confirmar asistencia" : "RSVP"}</h2><p>{es ? "Evento seleccionado: Convivio navideño · 10 de diciembre" : "Selected event: Christmas Client Appreciation · December 10"}</p>
        {closed ? <p role="status">{es ? "El registro cerró el 23 de noviembre. Llame a la oficina para recibir asistencia." : "Registration closed on November 23. Please call the office for assistance."}</p> : !isRsvpConfigured() ? <p role="status">{es ? "El registro en línea aún no está disponible. Llame al 951-653-8888 para obtener información. No se ha reservado ningún lugar mediante esta página." : "Online registration is not available yet. Please call 951-653-8888 for information. No place has been reserved through this page."}</p> : <EventRsvpForm locale={locale} />}
      </div>
    </div></section>
  </>;
}
