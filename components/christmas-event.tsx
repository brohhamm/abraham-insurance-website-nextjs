import { EventRsvpForm } from "@/components/event-rsvp-form";
import { event, isRsvpOpen } from "@/lib/event-rsvp";
import { connection } from "next/server";
import "./christmas-event.css";

export async function ChristmasEvent({ locale }: { locale: "en" | "es" }) {
  await connection();
  const es = locale === "es", closed = !isRsvpOpen();
  return <div className="holiday-event">
    <section className="holiday-intro"><div className="shell">
      <div className="holiday-ornaments" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span></div>
      <p className="holiday-kicker">{es ? "Una invitación de la agencia Abel Duran" : "An invitation from the Abel Duran Agency"}</p>
      <h1>{es ? "Celebremos juntos esta Navidad." : "A little holiday cheer. A community to celebrate."}</h1>
      <p className="holiday-subtitle">{es ? "Convivio navideño de agradecimiento a clientes y comunidad" : "Christmas Client Appreciation & Community Event"}</p>
      <p className="holiday-welcome">{es ? "Comparta una tarde de comida, convivencia y orientación práctica con nuestro equipo. Clientes y miembros de la comunidad son bienvenidos." : "Join our team for food, friendly conversation, and practical guidance. Clients and community members are welcome."}</p>
      <div className="holiday-date-strip"><span><strong>{es ? "Jueves 10 de diciembre" : "Thursday, December 10"}</strong><br />{es ? "2026 · 5–8 p. m., hora del Pacífico" : "2026 · 5–8 p.m., Pacific time"}</span><span><strong>Moreno Valley</strong><br />{event.address}</span><a href="#event-rsvp" className="button">{es ? "Solicitar mi lugar" : "Request My Place"}</a></div>
    </div></section>
    <section className="holiday-body"><div className="shell rsvp-layout">
      <div className="holiday-details">
        <article className="holiday-card"><p className="holiday-kicker">{es ? "Una tarde para compartir" : "Gather, connect & celebrate"}</p><h2>{es ? "Nos encantará recibirle." : "We would love to see you."}</h2>
          <p>{es ? "Abel Duran dará la bienvenida. Fix It Auto compartirá qué hacer después de un accidente de auto, y Nichole de SERVPRO explicará los primeros pasos después de daños por agua o incendio. Habrá tiempo para preguntas generales y convivencia." : "Abel Duran will welcome guests. Fix It Auto will discuss what to do after a car accident, and Nichole from SERVPRO will share first steps after water or fire damage. There will be time for general questions and conversation."}</p>
          <div className="holiday-partners"><span>Abel Duran Agency</span><span>Fix It Auto</span><span>SERVPRO</span></div>
        </article>
        <article className="holiday-card holiday-how"><h2>{es ? "Su solicitud, paso a paso" : "Your RSVP, made simple"}</h2>
          <ol><li>{es ? "Complete sus datos e indique quiénes le acompañan." : "Enter your details and tell us who is coming with you."}</li><li>{es ? "Elija texto o Gmail. Abriremos un mensaje preparado; pulse Enviar." : "Choose text or Gmail. We open a prepared message; press Send."}</li><li>{es ? "Espere la respuesta de la agencia para confirmar sus lugares." : "Wait for the agency's reply confirming your places."}</li></ol>
        </article>
        <article className="holiday-card"><h2>{es ? "Antes de confirmar" : "Before you RSVP"}</h2>
          <dl><dt>{es ? "¿Quién puede solicitar asistencia?" : "Who can RSVP?"}</dt><dd>{es ? "Clientes y miembros de la comunidad. Incluya el nombre de cada invitado en su solicitud." : "Clients and community members. Include every guest's name in your request."}</dd>
          <dt>{es ? "Fecha límite y cupo" : "Deadline & capacity"}</dt><dd>{es ? "Envíe su solicitud antes de que termine el 23 de noviembre de 2026, hora del Pacífico. Cupo máximo: 50 invitados, sin contar al personal. La agencia mantiene la lista y confirma disponibilidad manualmente." : "Send your request by the end of November 23, 2026, Pacific time. Capacity is 50 guests, excluding staff. The agency maintains the list and confirms availability manually."}</dd>
          <dt>{es ? "¿Mi lugar ya está reservado?" : "Is my place reserved?"}</dt><dd>{es ? "Solo después de recibir confirmación de la agencia. Completar el formulario o abrir un mensaje no reserva lugares ni confirma la entrega." : "Only after the agency confirms. Completing the form or opening a message does not reserve places or confirm delivery."}</dd></dl>
        </article>
        <article className="holiday-card holiday-drawings"><p className="holiday-kicker">{es ? "Un toque de emoción" : "A little extra excitement"}</p><h2>{es ? "Sorteos" : "Prize drawings"}</h2><p><strong>{es ? "Los detalles y las reglas de los sorteos se anunciarán próximamente." : "Prize-drawing details will be announced."}</strong></p><p>{es ? "Compartiremos los requisitos de elegibilidad, asistencia y participaciones antes de los sorteos. La agencia debe verificar cualquier condición de cliente declarada en el formulario." : "We will share final eligibility, attendance requirements, and entry details before the drawings. Any client status reported in the form requires agency verification."}</p></article>
        <p className="holiday-help">{es ? "Para asistencia, cambios o cancelaciones:" : "For help, changes, or cancellations:"} <a href="tel:+19516538888">951-653-8888</a>.</p>
      </div>
      <div className="form-card holiday-form" id="event-rsvp"><p className="holiday-kicker">{es ? "Hagamos planes" : "Make a little room for cheer"}</p><h2>{es ? "Solicite su lugar" : "Join us this December"}</h2><p className="holiday-form-event">{es ? "Evento seleccionado: Convivio navideño · 10 de diciembre" : "Selected event: Christmas Client Appreciation · December 10"}</p>
        <p>{es ? "Una solicitud por grupo. Inclúyase en el total y espere nuestra confirmación de disponibilidad." : "One request per party. Include yourself in the total and wait for our availability confirmation."}</p>
        {closed ? <p role="status">{es ? "El registro cerró el 23 de noviembre. Llame a la oficina para recibir asistencia." : "Registration closed on November 23. Please call the office for assistance."}</p> : <EventRsvpForm locale={locale} />}
      </div>
    </div></section>
  </div>;
}
