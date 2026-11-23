import { EventRsvpForm } from "@/components/event-rsvp-form";
import { event, isRsvpOpen } from "@/lib/event-rsvp";
import { siteConfig } from "@/lib/site-config";
import { connection } from "next/server";
import "./christmas-event.css";

const copy = {
  en: {
    kicker: "A new year. The same heartfelt thanks.", title: "You’re part of our community. Let’s start the year together.",
    name: "New Year Client Appreciation & Community Event",
    welcome: "To our clients, neighbors, and friends: thank you for being part of our community. We’re grateful for the trust you place in our team and for the chance to help protect the people and places you care about.",
    invitation: "Join us in January for good food, friendly conversation, and practical ideas you can take home. Whether you’ve worked with us for years or are meeting us for the first time, we’d love to welcome you.",
    date: "Thursday, January 28", time: "2027 · 4–6 p.m., Pacific time", rsvp: "Request My Place",
    gathering: "Good company. Useful conversations. A fresh start.", gatheringTitle: "Pull up a chair and spend the afternoon with us.",
    motto: "Building a life is hard work. Let’s protect your future.",
    speakersIntro: "Our speakers are confirmed, and there will be time for your questions. Bring the things you’ve always wanted to ask about protecting your home, your vehicle, or your family.",
    speakers: [
      {name:"Abel Duran and our agency team", text:"Let’s make insurance easier to understand. We’ll talk about protecting what matters and leave room for your general insurance questions."},
      {name:"Fix It Auto", text:"Know what to do when a drive takes an unexpected turn. Learn about vehicle preparedness and the first steps to take immediately after a crash."},
      {name:"Nichole Mowrey · SERVPRO Team Lingurar", text:"A little home preparedness can make a difficult day easier to navigate. Nichole will discuss preparedness and the first steps after water or fire damage."},
    ],
    dinnerTitle:"Come hungry. Stay for the conversation.",
    dinner:"Sharing a meal is one of our favorite ways to bring people together. We’ve selected Juan Pollo in Moreno Valley and are planning dinner for our full capacity of 50 guests.",
    menu:"Our planned menu includes chicken, rice, beans, potato salad, green salad, salsa, and tortillas. Drinks and cookies are planned separately; those selections are still being finalized.",
    caterer:"Meet our selected caterer: Juan Pollo", dietary:"Have a dietary concern? Mention it with your RSVP so we can review it with you. Special meals and dietary accommodations have not been confirmed.",
    howTitle:"We’d love to know you’re coming.", steps:["Tell us your name and who’s joining you. Include yourself in the total.","Choose text or email. Your message will be ready; press Send in your app.","Look for our reply confirming available places. That reply confirms your reservation."],
    detailsTitle:"A few details before we get together", questions:[
      {q:"Who’s invited?",a:"Clients and community members are welcome to request a place. Bringing family or friends? Include each person’s name so we can plan for your group."},
      {q:"When should I send my RSVP?",a:"For prize-drawing eligibility, send your RSVP by Wednesday, January 27, 2027, at 4 p.m. Pacific, 24 hours before the event. Final drawing rules will also apply. We have space for 50 guests, excluding staff, and our team confirms availability manually."},
      {q:"What if I miss that deadline?",a:"Call 951-653-8888 to ask whether places remain to attend. The drawing-eligibility deadline is separate from seat availability; a late inquiry does not establish eligibility for the drawings."},
      {q:"When is my place confirmed?",a:"Your place is confirmed when our team replies. Completing the form prepares a message; you still need to press Send in your text or email app. We’ll review your request and reply about availability."},
    ],
    prizesKicker:"A little extra excitement", prizesTitle:"Prizes with a practical purpose.",
    prizesIntro:"Our planned prize drawings connect with the ideas you’ll hear from our speakers. Here’s what we’re looking forward to sharing:",
    prizes:[
      {name:"SERVPRO · Home Preparedness Gift Basket",text:"Planned items include a home camera, fire-safety devices, and water-damage mitigation items. The theme is spotting problems early and getting your household ready for the unexpected."},
      {name:"Fix It Auto · Auto Preparedness Gift Basket",text:"Emergency and vehicle-preparedness supplies, plus a pamphlet with the first steps to take after a crash, bring the presentation’s practical advice together."},
      {name:"Abel Duran · Television",text:"A television is planned as another prize for the celebration. We’ll share any additional confirmed gift details before the event."},
    ],
    prizeNote:"Basket contents are being finalized. These are drawing prizes, so not every guest receives a gift. Preparedness products do not prevent every loss, and installation services are not included in the announced gifts.",
    rules:"Final prize-drawing eligibility, attendance, and entry rules will be announced. Any client status you share will be checked by our team. No entries are awarded for Google reviews.",
    formKicker:"Let’s make plans", formTitle:"We’d love to welcome you.",
    formIntro:"Complete one request for your group, then choose text or email. Our team will reply to confirm available places. Your details are used to coordinate the event.",
    closed:"The January 27, 4 p.m. Pacific RSVP deadline for drawing eligibility has passed. Call us to ask about any remaining places to attend. A late inquiry does not establish drawing eligibility.", help:"For help, changes, or cancellations:",
  },
  es: {
    kicker:"Un nuevo año, con el mismo agradecimiento.",title:"Usted es parte de nuestra comunidad. Empecemos el año juntos.",
    name:"Encuentro de Año Nuevo para Clientes y Comunidad",
    welcome:"A nuestros clientes, vecinos y amigos: gracias por ser parte de nuestra comunidad. Agradecemos la confianza que depositan en nuestro equipo y la oportunidad de ayudarles a proteger a sus seres queridos, sus hogares y sus negocios.",
    invitation:"Acompáñenos en enero para compartir buena comida, conversar y llevarse ideas prácticas para su hogar. Ya sea que nos conozca desde hace años o nos visite por primera vez, nos dará mucho gusto recibirle.",
    date:"Jueves 28 de enero",time:"2027 · 4–6 p. m., hora del Pacífico",rsvp:"Solicitar mi lugar",
    gathering:"Buena compañía. Conversaciones útiles. Un nuevo comienzo.",gatheringTitle:"Acompáñenos y comparta la tarde con nosotros.",
    motto:"Construir una vida requiere mucho esfuerzo. Protejamos su futuro.",
    speakersIntro:"Nuestros invitados ya están confirmados y habrá tiempo para sus preguntas. Traiga sus dudas sobre cómo proteger su vivienda, su vehículo o a su familia.",
    speakers:[
      {name:"Abel Duran y nuestro equipo",text:"Queremos que el seguro sea más fácil de entender. Conversaremos sobre cómo proteger lo que más importa y responderemos preguntas generales de seguros."},
      {name:"Fix It Auto",text:"Sepa qué hacer cuando un recorrido cambia inesperadamente. Conozca ideas de preparación para su vehículo y los primeros pasos que debe tomar después de un accidente."},
      {name:"Nichole Mowrey · SERVPRO Team Lingurar",text:"Preparar su hogar ayuda a afrontar un día difícil con más información. Nichole hablará de preparación y de los primeros pasos después de daños por agua o incendio."},
    ],
    dinnerTitle:"Venga con apetito. Quédese para conversar.",
    dinner:"Compartir la mesa es una de nuestras formas favoritas de reunir a la comunidad. Hemos elegido a Juan Pollo en Moreno Valley y planeamos ofrecer cena para el cupo completo de 50 invitados.",
    menu:"El menú previsto incluye pollo, arroz, frijoles, ensalada de papa, ensalada verde, salsa y tortillas. Las bebidas y galletas se planean por separado; esas selecciones aún se están definiendo.",
    caterer:"Conozca al restaurante elegido: Juan Pollo",dietary:"¿Tiene alguna necesidad alimentaria? Menciónela en su solicitud para revisarla con usted. Aún no se han confirmado comidas especiales ni adaptaciones alimentarias.",
    howTitle:"Nos encantará saber que nos acompañará.",steps:["Comparta su nombre y el de cada acompañante. Inclúyase en el total.","Elija mensaje de texto o correo. Prepararemos el mensaje; pulse Enviar en su aplicación.","Espere nuestra respuesta sobre los lugares disponibles. Esa respuesta confirma su reservación."],
    detailsTitle:"Algunos detalles antes de reunirnos",questions:[
      {q:"¿Quién está invitado?",a:"Los clientes y miembros de la comunidad pueden solicitar un lugar. Si viene con familiares o amigos, incluya el nombre de cada persona para que podamos planear para su grupo."},
      {q:"¿Hasta cuándo debo enviar mi solicitud?",a:"Para la elegibilidad de los sorteos, envíe su solicitud a más tardar el miércoles 27 de enero de 2027 a las 4 p. m., hora del Pacífico, 24 horas antes del evento. También aplicarán las reglas finales de los sorteos. Hay espacio para 50 invitados, sin contar al personal; nuestro equipo confirma la disponibilidad personalmente."},
      {q:"¿Qué pasa si se me pasa el plazo?",a:"Llame al 951-653-8888 para preguntar si quedan lugares para asistir. El plazo de elegibilidad de sorteos es distinto de la disponibilidad de asientos; una consulta tardía no otorga participación en los sorteos."},
      {q:"¿Cuándo queda confirmado mi lugar?",a:"Su lugar queda confirmado cuando nuestro equipo le responda. El formulario prepara un mensaje; usted todavía debe pulsar Enviar en su aplicación de texto o correo. Revisaremos la solicitud y le responderemos sobre la disponibilidad."},
    ],
    prizesKicker:"Un toque más de emoción",prizesTitle:"Premios con un propósito práctico.",
    prizesIntro:"Los sorteos previstos se relacionan con las ideas de nuestros invitados. Estos son los premios que estamos preparando:",
    prizes:[
      {name:"SERVPRO · Canasta de preparación para el hogar",text:"Se planea incluir una cámara para el hogar, dispositivos de seguridad contra incendios y artículos para mitigar daños por agua. La idea es detectar problemas a tiempo y preparar a su hogar para lo inesperado."},
      {name:"Fix It Auto · Canasta de preparación para el auto",text:"Artículos de emergencia y preparación para el vehículo, junto con un folleto sobre los primeros pasos después de un accidente, complementan los consejos de la presentación."},
      {name:"Abel Duran · Televisor",text:"También se planea sortear un televisor. Compartiremos los detalles de otros regalos si se confirman antes del evento."},
    ],
    prizeNote:"El contenido de las canastas aún se está definiendo. Son premios de sorteos; no todos los asistentes reciben un regalo. Estos productos no evitan toda pérdida y los regalos anunciados no incluyen servicios de instalación.",
    rules:"Anunciaremos las reglas finales de elegibilidad, asistencia y participaciones. Nuestro equipo verificará cualquier condición de cliente que usted indique. No se otorgan participaciones por reseñas de Google.",
    formKicker:"Hagamos planes",formTitle:"Nos encantará darle la bienvenida.",
    formIntro:"Complete una solicitud para su grupo y elija mensaje de texto o correo. Le responderemos para confirmar lugares disponibles. Sus datos se usan para coordinar el evento.",
    closed:"El plazo de solicitud para la elegibilidad de sorteos terminó el 27 de enero a las 4 p. m., hora del Pacífico. Llame para consultar lugares disponibles para asistir. Una consulta tardía no otorga participación en los sorteos.",help:"Para asistencia, cambios o cancelaciones:",
  },
};

export async function ChristmasEvent({ locale }: { locale: "en" | "es" }) {
  await connection();
  const t=copy[locale], closed=!isRsvpOpen();
  const schema={"@context":"https://schema.org","@type":"Event",name:t.name,description:t.invitation,startDate:event.startsAt,endDate:event.endsAt,previousStartDate:"2026-12-10T17:00:00-08:00",eventStatus:"https://schema.org/EventRescheduled",eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",url:siteConfig.url+(locale==="es"?event.esPath:event.enPath),location:{"@type":"Place",name:"Farmers Insurance, Office of Abel Duran",address:event.address},organizer:{"@type":"InsuranceAgency",name:siteConfig.agencyLegalName,url:siteConfig.url},maximumAttendeeCapacity:event.capacity};
  return <div className="holiday-event">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <section className="holiday-intro"><div className="shell"><div className="holiday-ornaments" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span></div><p className="holiday-kicker">{t.kicker}</p><h1>{t.title}</h1><p className="holiday-subtitle">{t.name}</p><p className="holiday-welcome">{t.welcome}</p><p className="holiday-welcome">{t.invitation}</p><div className="holiday-date-strip"><span><strong>{t.date}</strong><br/>{t.time}</span><span><strong>Moreno Valley</strong><br/>{event.address}</span><a href="#event-rsvp" className="button">{t.rsvp}</a></div></div></section>
    <section className="holiday-body"><div className="shell rsvp-layout"><div className="holiday-details">
      <article className="holiday-card"><p className="holiday-kicker">{t.gathering}</p><h2>{t.gatheringTitle}</h2><p>{t.motto}</p><p>{t.speakersIntro}</p>{t.speakers.map(s=><div key={s.name}><h3>{s.name}</h3><p>{s.text}</p></div>)}</article>
      <article className="holiday-card"><h2>{t.dinnerTitle}</h2><p>{t.dinner}</p><p>{t.menu}</p><p><a href="https://juanpollo.com/locations/moreno-valley/" target="_blank" rel="noopener noreferrer">{t.caterer}</a></p><p>{t.dietary}</p></article>
      <article className="holiday-card holiday-how"><h2>{t.howTitle}</h2><ol>{t.steps.map(s=><li key={s}>{s}</li>)}</ol></article>
      <article className="holiday-card"><h2>{t.detailsTitle}</h2><dl>{t.questions.map(q=><div key={q.q}><dt>{q.q}</dt><dd>{q.a}</dd></div>)}</dl></article>
      <article className="holiday-card holiday-drawings" id="preparedness"><p className="holiday-kicker">{t.prizesKicker}</p><h2>{t.prizesTitle}</h2><p>{t.prizesIntro}</p>{t.prizes.map(p=><div key={p.name}><h3>{p.name}</h3><p>{p.text}</p></div>)}<p>{t.prizeNote}</p><p><strong>{t.rules}</strong></p></article>
      <p className="holiday-help">{t.help} <a href="tel:+19516538888">951-653-8888</a>.</p>
    </div><div className="form-card holiday-form" id="event-rsvp"><p className="holiday-kicker">{t.formKicker}</p><h2>{t.formTitle}</h2><p className="holiday-form-event">{t.name} · {t.date} · {t.time}</p><p>{t.formIntro}</p>{closed?<p role="status">{t.closed} <a href="tel:+19516538888">951-653-8888</a></p>:<EventRsvpForm locale={locale}/>}</div></div></section>
  </div>;
}
