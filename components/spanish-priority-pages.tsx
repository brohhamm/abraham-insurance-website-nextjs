import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero } from "@/components/ui";
import { ServiceRequestForm } from "@/components/service-request-form";
import { siteConfig } from "@/lib/site-config";

const team = [
  {
    name: "Rosalia Elizabeth Gomez",
    role: "Agente y Corredora de Seguros · Moreno Valley",
    license: "Lic. de CA n.º 0K37042",
    copy: "Rosalia ofrece asistencia con seguros personales, comerciales y de vida. Su oficina principal está en Moreno Valley.",
    href: "/es/contacto?agent=rosalia",
    cta: "Solicitar una cotización con Rosalia",
  },
  {
    name: "Abel Duran",
    role: "Agente de Farmers Insurance · Agente principal",
    license: "Lic. de CA núm. 0F17442 · Lic. de agencia núm. 0K15422",
    copy: "Abel es propietario y dirige las oficinas de Moreno Valley y Yorba Linda, y ayuda a los clientes con seguros personales, comerciales y de vida.",
    href: "/es/abel-duran",
    cta: "Conozca a Abel",
  },
  {
    name: "Devan Wright",
    role: "Agente / Corredor · Yorba Linda",
    license: "Lic. de CA núm. 0H19544",
    copy: "Devan atiende la oficina de Yorba Linda y se especializa en seguros de casa, auto, vida, arrendador, comerciales, marítimos, vehículos todoterreno, remolques, paraguas y terremoto.",
    href: "/es/devan-wright",
    cta: "Conozca a Devan",
  },
  {
    name: "Emily Lussier",
    role: "Representante de servicio al cliente · Yorba Linda",
    license: "Servicio de pólizas y atención al cliente",
    copy: "Emily ayuda a los clientes de Yorba Linda con preguntas sobre pólizas, documentos, orientación de facturación, renovaciones y apoyo general de sus cuentas.",
    href: "/es/oficina-yorba-linda",
    cta: "Conozca al equipo de Yorba Linda",
  },
  {
    name: "Rashel Dominguez",
    role: "Especialista en servicios de seguros · Moreno Valley",
    license: "Lic. de CA núm. 4412046",
    copy: "Rashel ayuda a los clientes actuales con preguntas sobre pólizas, documentos, orientación de facturación, renovaciones y solicitudes de servicio.",
    href: "/es/servicio-al-cliente",
    cta: "Contactar a Rashel",
  },
  {
    name: "Suzee Cervantes",
    role: "Especialista en servicios de seguros · Moreno Valley",
    license: "Lic. de CA núm. 4494455",
    copy: "Suzee ayuda a los clientes con documentos de póliza, preguntas sobre sus cuentas, orientación de facturación y solicitudes de servicio.",
    href: "/es/servicio-al-cliente",
    cta: "Contactar a Suzee",
  },
];

export function SpanishAgency() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra agencia"
        title="Orientación local respaldada por un equipo conectado."
      >
        Abraham continúa siendo su contacto principal en este sitio, con agentes
        experimentados y apoyo especializado para el servicio de pólizas en dos
        oficinas del sur de California.
      </PageHero>
      <section className="section">
        <div className="shell profile-layout">
          <div className="photo-frame portrait-frame">
            <Image
              src="/images/abraham-nunez-chavez-insurance-agent.jpg"
              alt="Abraham Nunez-Chavez, productor de seguros con licencia al servicio del sur de California"
              fill
              sizes="(max-width: 760px) 75vw, 340px"
              priority
            />
          </div>
          <div>
            <p className="eyebrow">Contacto principal del sitio web</p>
            <h2>Abraham Nunez-Chavez</h2>
            <p>
              <strong>
                Agente/Corredor de Seguros · Lic. de CA núm.{" "}
                {siteConfig.license}
              </strong>
            </p>
            <p>
              Abraham es un productor de seguros con licencia afiliado a la
              Oficina de Abel Duran. Ayuda a los clientes a comparar opciones
              prácticas de cobertura para seguros personales, comerciales y de
              vida, así como necesidades de escrow, incendios forestales y
              propiedades difíciles de asegurar.
            </p>
            <p>
              Abraham y Abel son profesionales de seguros con licencias
              individuales que trabajan a través de Abel Duran Insurance Agency,
              Inc. Cuando corresponde, pueden estar disponibles opciones con
              aseguradoras adicionales; esas aseguradoras son independientes de
              Farmers Insurance.
            </p>
            <div className="button-row">
              <Link className="button" href="/es/contacto?agent=abraham">
                Solicitar una cotización con Abraham
              </Link>
              <a
                className="button button-secondary"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Conozca al equipo</p>
              <h2>Agentes y especialistas de apoyo para pólizas.</h2>
            </div>
            <p>
              Las solicitudes de nuevos seguros y el servicio de pólizas
              existentes siguen procesos distintos para que usted se comunique
              rápidamente con la persona adecuada.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <article className="team-card" key={m.name}>
                <div className="initial-avatar" aria-hidden="true">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="eyebrow">{m.role}</p>
                <h3>{m.name}</h3>
                <strong>{m.license}</strong>
                <p>{m.copy}</p>
                <Link className="text-link" href={m.href}>
                  {m.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Visite una oficina</p>
              <h2>Dos oficinas locales. Una agencia conectada.</h2>
            </div>
            <p>
              Seleccione una oficina para conocer a su equipo o abrir las
              indicaciones en Google Maps.
            </p>
          </div>
          <div className="agency-location-grid">
            <article>
              <div className="agency-location-photo">
                <Image
                  src="/images/moreno-valley-front-desk.jpg"
                  alt="Oficina de Moreno Valley de Abel Duran Insurance Agency"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="eyebrow">Moreno Valley</p>
                <h3>Oficina principal de la agencia</h3>
                <p>{siteConfig.morenoValleyOffice}</p>
                <div className="profile-links">
                  <a
                    className="text-link"
                    href="https://maps.google.com/?q=13800+Heacock+St+Suite+C120+Moreno+Valley+CA+92553"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cómo llegar ↗
                  </a>
                  <Link className="text-link" href="/es/areas/moreno-valley">
                    Explore los servicios de Moreno Valley →
                  </Link>
                </div>
              </div>
            </article>
            <article>
              <div className="agency-location-photo">
                <Image
                  src="/images/yorba-linda-office-wide.jpg"
                  alt="Exterior de la oficina de Yorba Linda de Abel Duran Insurance Agency"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="eyebrow">Yorba Linda</p>
                <h3>Oficina del Condado de Orange</h3>
                <p>{siteConfig.yorbaLindaOffice}</p>
                <div className="profile-links">
                  <Link className="text-link" href="/es/oficina-yorba-linda">
                    Conozca al equipo de Yorba Linda →
                  </Link>
                  <a
                    className="text-link"
                    href="https://maps.google.com/?q=23621+La+Palma+Ave+Suite+A+Yorba+Linda+CA+92887"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cómo llegar ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

const abelServices = [
  "Auto",
  "Casa",
  "Inquilinos y condominio",
  "Arrendador",
  "Paraguas",
  "Vida",
  "Negocios",
  "Auto comercial",
  "Propiedad comercial",
  "Responsabilidad civil general",
  "Compensación laboral",
];
export function SpanishAbel() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abel Duran",
    image: `${siteConfig.url}/images/abel-duran.jpg`,
    jobTitle: "Propietario y agente principal de Farmers Insurance",
    worksFor: {
      "@type": "InsuranceAgency",
      name: "Abel Duran Insurance Agency, Inc.",
      identifier: "Licencia de agencia de California núm. 0K15422",
    },
    telephone: "+1-951-653-8888",
    email: "Aduran@farmersagent.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13800 Heacock St., Suite C120",
      addressLocality: "Moreno Valley",
      addressRegion: "CA",
      postalCode: "92553",
      addressCountry: "US",
    },
    knowsLanguage: ["English", "Spanish"],
    award: [
      "2026 Farmers Insurance President’s Council",
      "Farmers Insurance Century Club",
    ],
    url: `${siteConfig.url}/es/abel-duran`,
    inLanguage: "es-US",
  };
  return (
    <>
      <PageHero
        eyebrow="Acerca de Abel Duran"
        title="Experiencia, liderazgo local y orientación práctica sobre seguros."
      >
        Abel Duran es el propietario y agente principal de Abel Duran Insurance
        Agency, que atiende a sus clientes desde las oficinas de Moreno Valley y
        Yorba Linda.
      </PageHero>
      <section className="section">
        <div className="shell abel-intro">
          <div className="abel-portrait">
            <Image
              src="/images/abel-duran.jpg"
              alt="Abel Duran, propietario y agente principal de Abel Duran Insurance Agency"
              fill
              sizes="(max-width: 760px) 85vw, 420px"
              priority
            />
          </div>
          <div>
            <p className="eyebrow">
              Agente de Farmers Insurance · Propietario de la agencia
            </p>
            <h2>Abel Duran</h2>
            <p>
              <strong>
                Lic. individual de CA núm. 0F17442
                <br />
                Lic. de agencia de CA núm. 0K15422
              </strong>
            </p>
            <p>
              Abel es un agente experimentado de Farmers Insurance y propietario
              y agente principal de Abel Duran Insurance Agency, Inc. Ha estado
              nombrado con Farmers por más de una década y ha prestado servicio
              a la comunidad de Moreno Valley desde aproximadamente 2006.
            </p>
            <p>
              Su enfoque se centra en la orientación personalizada,
              explicaciones claras sobre la cobertura y el servicio al cliente a
              largo plazo. Abel ayuda a personas, familias, propietarios de
              inmuebles y negocios a comprender las opciones disponibles y
              seleccionar protección según sus necesidades.
            </p>
            <p>
              En 2026, Abel recibió el reconocimiento President’s Council de
              Farmers Insurance, que refleja un desempeño distinguido de la
              agencia y liderazgo dentro de Farmers.
            </p>
            <p>
              El servicio está disponible en inglés y español en los condados de
              Riverside, Orange y San Bernardino, el Inland Empire y comunidades
              cercanas del sur de California.
            </p>
            <div className="button-row">
              <Link className="button" href="/es/contacto?agent=abel">
                Solicitar una cotización con Abel
              </Link>
              <a className="button button-secondary" href="tel:+19516538888">
                Llamar al 951-653-8888
              </a>
              <a
                className="button button-secondary"
                href="mailto:Aduran@farmersagent.com"
              >
                Enviar correo a Abel
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Soluciones de seguros</p>
              <h2>Seguros personales, comerciales y de vida.</h2>
            </div>
            <p>
              La disponibilidad de coberturas y aseguradoras varía según la
              elegibilidad, suscripción, ubicación y límites seleccionados.
            </p>
          </div>
          <div className="specialty-grid">
            {abelServices.map((x) => (
              <span key={x}>Seguro de {x.toLowerCase()}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell about-abel-details">
          <div>
            <p className="eyebrow">Trayectoria profesional</p>
            <h2>Liderazgo de un equipo con dos oficinas.</h2>
            <p>
              Abel es propietario y dirige ambas oficinas de la agencia. Se
              coordina con agentes que cuentan con licencias individuales y
              especialistas de servicio dedicados para que los clientes tengan
              procesos claros tanto para nuevas cotizaciones como para el
              servicio de pólizas existentes.
            </p>
            <div className="recognition-list">
              <p>
                <strong>Más de 10 años</strong>
                <span>Nombrado con Farmers Insurance</span>
              </p>
              <p>
                <strong>Inglés y español</strong>
                <span>Orientación bilingüe sobre seguros</span>
              </p>
              <p>
                <strong>Certificación CSP</strong>
                <span>Certificación profesional de Farmers</span>
              </p>
              <p>
                <strong>President’s Council 2026</strong>
                <span>Reconocimiento de Farmers Insurance</span>
              </p>
              <p>
                <strong>Century Club</strong>
                <span>Reconocimiento de Farmers</span>
              </p>
            </div>
          </div>
          <aside className="details-card">
            <h2>Relación con la agencia</h2>
            <p>
              Abraham Nunez-Chavez es un productor de seguros con licencia
              afiliado a la Oficina de Abel Duran. Abraham y Abel son
              profesionales de seguros con licencias individuales que trabajan a
              través de Abel Duran Insurance Agency, Inc.
            </p>
            <p>
              Cuando corresponde, pueden estar disponibles opciones con
              aseguradoras adicionales. Las aseguradoras que no pertenecen a
              Farmers son entidades independientes y no están afiliadas con
              Farmers Insurance.
            </p>
            <Link className="text-link" href="/es/nuestra-agencia">
              Conozca a todo el equipo de la agencia →
            </Link>
          </aside>
        </div>
      </section>
      <section className="section navy-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ubicaciones de las oficinas</p>
              <h2>Reúnase con el equipo de la agencia de Abel.</h2>
            </div>
            <p>Elija la oficina que le resulte más conveniente.</p>
          </div>
          <div className="abel-office-grid">
            <article>
              <h3>Moreno Valley</h3>
              <p>{siteConfig.morenoValleyOffice}</p>
              <p>
                <a href="tel:+19516538888">951-653-8888</a>
              </p>
              <a
                className="text-link"
                href="https://maps.google.com/?q=13800+Heacock+St+Suite+C120+Moreno+Valley+CA+92553"
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar ↗
              </a>
            </article>
            <article>
              <h3>Yorba Linda</h3>
              <p>{siteConfig.yorbaLindaOffice}</p>
              <p>
                <a href="tel:+17147016411">714-701-6411</a>
              </p>
              <Link className="text-link" href="/es/oficina-yorba-linda">
                Conozca al equipo de Yorba Linda →
              </Link>
              <a
                className="text-link"
                href="https://maps.google.com/?q=23621+La+Palma+Ave+Suite+A+Yorba+Linda+CA+92887"
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar ↗
              </a>
            </article>
          </div>
          <div className="button-row">
            <a
              className="button button-light"
              href="https://agents.farmers.com/ca/moreno-valley/abel-duran/"
              target="_blank"
              rel="noreferrer"
            >
              Ver el perfil oficial de Abel en Farmers ↗
            </a>
          </div>
        </div>
      </section>
      <CTA />
      <script
        id="abel-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

const officeData = {
  "Moreno Valley": {
    county: "Condado de Riverside",
    phone: "951-653-8888",
    phoneHref: "tel:+19516538888",
    fax: "951-656-3333",
    front: "/images/moreno-valley-front-desk.jpg",
    second: "/images/private-office.jpg",
    address: "morenoValleyOffice" as const,
    staff: [
      [
        "Abel Duran",
        "Propietario y agente principal",
        "0F17442",
        "Abel es propietario y dirige ambas oficinas de la agencia, y ayuda con seguros personales, comerciales y de vida.",
        "/images/abel-duran.jpg",
      ],
      [
        "Abraham Nunez-Chavez",
        "Agente / Corredor de seguros",
        "4357305",
        "Abraham ayuda con necesidades de seguros personales, comerciales y de vida, además de escrow, incendios forestales y propiedades difíciles de asegurar.",
        "/images/abraham-nunez-chavez-insurance-agent.jpg",
      ],
      [
        "Rosalia Elizabeth Gomez",
        "Agente y Corredora de Seguros · Moreno Valley",
        "0K37042",
        "Rosalia ofrece asistencia con seguros personales, comerciales y de vida. Su oficina principal está en Moreno Valley.",
        "/images/rosalia-elizabeth-gomez-insurance-agent.jpg",
      ],
      [
        "Rashel Dominguez",
        "Especialista en servicios de seguros",
        "4412046",
        "Rashel ayuda a los clientes actuales con preguntas sobre pólizas, documentos, orientación de facturación, renovaciones y solicitudes de servicio.",
        "",
      ],
      [
        "Suzee Cervantes",
        "Especialista en servicios de seguros",
        "4494455",
        "Suzee ayuda a los clientes actuales con documentos de póliza, preguntas sobre sus cuentas, orientación de facturación y solicitudes de servicio.",
        "",
      ],
    ],
  },
  "Yorba Linda": {
    county: "Condado de Orange",
    phone: "714-701-6411",
    phoneHref: "tel:+17147016411",
    fax: "714-694-7159",
    front: "/images/yorba-linda-office-front.jpg",
    second: "/images/yorba-linda-office-wide.jpg",
    address: "yorbaLindaOffice" as const,
    staff: [
      [
        "Abel Duran",
        "Propietario y agente principal",
        "0F17442",
        "Abel es propietario y dirige ambas oficinas de la agencia, y ayuda a los clientes con seguros personales, comerciales y de vida.",
        "/images/abel-duran.jpg",
      ],
      [
        "Devan Wright",
        "Agente / Corredor",
        "0H19544",
        "Devan brinda orientación sobre seguros personales, comerciales y de vida desde la oficina de Yorba Linda.",
        "",
      ],
      [
        "Emily Lussier",
        "Representante de servicio al cliente",
        "",
        "Emily ayuda a los clientes de Yorba Linda con preguntas sobre pólizas, documentos, orientación de facturación, renovaciones y apoyo general de sus cuentas.",
        "/images/emily-lussier.jpg",
      ],
    ],
  },
};
const officeSpecialties = {
  "Moreno Valley": [
    "Casa",
    "Auto",
    "Arrendador",
    "Vida",
    "Comercial",
    "Compensación laboral",
    "Auto comercial",
    "Paraguas",
    "Incendios forestales",
    "Terremoto",
  ],
  "Yorba Linda": [
    "Vida",
    "Casa",
    "Arrendador e inquilinos",
    "Auto",
    "Comercial",
    "Marítimo",
    "Vehículos todoterreno",
    "Remolques",
    "Paraguas",
    "Terremoto",
  ],
};
export function SpanishOffice({ city }: { city: keyof typeof officeData }) {
  const d = officeData[city],
    mv = city === "Moreno Valley",
    address = siteConfig[d.address],
    other = mv ? siteConfig.yorbaLindaOffice : siteConfig.morenoValleyOffice;
  return (
    <>
      <PageHero
        eyebrow={`Oficina de ${city}`}
        title={`Orientación local sobre seguros y apoyo para pólizas en ${city}.`}
      >
        Conozca al equipo de Abel Duran Insurance Agency que atiende al{" "}
        {d.county} desde{" "}
        {mv
          ? "13800 Heacock Street, Suite C120"
          : "23621 La Palma Avenue, Suite A"}
        .
      </PageHero>
      <section className="office-gallery" aria-label={`Oficina de ${city}`}>
        <div className="shell office-gallery-grid">
          <div>
            <Image
              src={d.front}
              alt={`Vista principal de la oficina de seguros en ${city}`}
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
              priority
            />
          </div>
          <div>
            <Image
              src={d.second}
              alt={`Vista adicional de la oficina de seguros en ${city}`}
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell office-summary">
          <div>
            <p className="eyebrow">Una agencia · Dos ubicaciones</p>
            <h2>Propiedad y dirección de Abel Duran.</h2>
            <p>
              {mv
                ? "La oficina de Moreno Valley es la ubicación principal de Abel Duran Insurance Agency. Los agentes con licencia ayudan con nuevas coberturas y los especialistas de servicio ayudan a los clientes actuales con documentos de póliza, facturación, renovaciones y solicitudes de sus cuentas."
                : "Abel Duran es propietario y agente principal de las oficinas de Yorba Linda y Moreno Valley de Abel Duran Insurance Agency. El equipo de Yorba Linda ofrece orientación para nuevos seguros y apoyo para pólizas existentes desde una oficina local."}
            </p>
            <div className="button-row">
              <a className="button" href={d.phoneHref}>
                Llamar al {d.phone}
              </a>
              <a
                className="button button-secondary"
                href={`https://maps.google.com/?q=${mv ? "13800+Heacock+St+Suite+C120+Moreno+Valley+CA+92553" : "23621+La+Palma+Ave+Suite+A+Yorba+Linda+CA+92887"}`}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar ↗
              </a>
            </div>
          </div>
          <aside className="details-card">
            <h2>Datos de la oficina</h2>
            <dl>
              <dt>Dirección</dt>
              <dd>{address}</dd>
              <dt>Oficina principal</dt>
              <dd>
                <a href={d.phoneHref}>{d.phone}</a>
              </dd>
              <dt>Fax</dt>
              <dd>{d.fax}</dd>
              {mv ? (
                <>
                  <dt>Horario</dt>
                  <dd>{siteConfig.hours}</dd>
                </>
              ) : null}
              <dt>Segunda ubicación</dt>
              <dd>
                {other} ·{" "}
                <a href={mv ? "tel:+17147016411" : "tel:+19516538888"}>
                  {mv ? "714-701-6411" : "951-653-8888"}
                </a>
              </dd>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Equipo de {city}</p>
              <h2>Agentes y servicio al cliente.</h2>
            </div>
            <p>
              Elija a un agente con licencia para una cotización y orientación
              sobre cobertura, o a un especialista de servicio para recibir
              ayuda con una póliza existente.
            </p>
          </div>
          <div className={`location-team-grid ${mv ? "moreno-team-grid" : ""}`}>
            {d.staff.map((p) => (
              <article className="location-profile" key={p[0]}>
                {p[4] ? (
                  <div className={`location-profile-photo ${p[0] === "Rosalia Elizabeth Gomez" ? "rosalia-profile-photo" : ""}`}>
                    <Image
                      src={p[4]}
                      alt={
                        p[0] === "Abraham Nunez-Chavez"
                          ? "Abraham Nunez-Chavez, productor de seguros con licencia al servicio del sur de California"
                          : p[0] === "Rosalia Elizabeth Gomez"
                            ? "Rosalia Elizabeth Gomez, agente de seguros con licencia en la oficina de Moreno Valley"
                          : `${p[0]}, ${p[1]}`
                      }
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                    />
                  </div>
                ) : (
                  <div
                    className="location-profile-placeholder"
                    aria-hidden="true"
                  >
                    {p[0]
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="eyebrow">{p[1]}</p>
                  <h2>{p[0]}</h2>
                  {p[2] ? (
                    <p>
                      <strong>Lic. de CA núm. {p[2]}</strong>
                    </p>
                  ) : null}
                  <p>{p[3]}</p>
                  <div className="profile-links">
                    {p[0] === "Abel Duran" ? (
                      <>
                        <Link className="text-link" href="/es/abel-duran">
                          Ver el perfil de Abel →
                        </Link>
                        <Link
                          className="text-link"
                          href="/es/contacto?agent=abel"
                        >
                          Solicitar una cotización con Abel →
                        </Link>
                      </>
                    ) : p[0] === "Abraham Nunez-Chavez" ? (
                      <>
                        <Link className="text-link" href="/es/nuestra-agencia">
                          Conozca a Abraham →
                        </Link>
                        <a className="text-link" href="tel:+17143889533">
                          Llamar o enviar mensaje al 714-388-9533 →
                        </a>
                        <a
                          className="text-link"
                          href="mailto:Abraham.aduran@farmersagency.com"
                        >
                          Enviar correo a Abraham →
                        </a>
                      </>
                    ) : p[0] === "Devan Wright" ? (
                      <>
                        <Link className="text-link" href="/es/devan-wright">
                          Ver el perfil de Devan →
                        </Link>
                        <a className="text-link" href="tel:+17147016412">
                          Llamar o enviar mensaje al 714-701-6412 →
                        </a>
                        <a
                          className="text-link"
                          href="mailto:devan.aduran@farmersagency.com"
                        >
                          Enviar correo a Devan →
                        </a>
                      </>
                    ) : p[0] === "Rosalia Elizabeth Gomez" ? (
                      <>
                        <Link
                          className="text-link"
                          href="/es/contacto?agent=rosalia"
                        >
                          Solicitar una cotización con Rosalia →
                        </Link>
                        <a className="text-link" href="tel:9516538888">
                          Llamar al 951-653-8888 →
                        </a>
                      </>
                    ) : p[0] === "Emily Lussier" ? (
                      <>
                        <a
                          className="text-link"
                          href="mailto:emily.aduran@farmersagency.com"
                        >
                          Enviar correo a Emily →
                        </a>
                        <a className="text-link" href="tel:+17147016411">
                          Llamar al 714-701-6411 →
                        </a>
                        <a
                          className="text-link"
                          href="https://www.linkedin.com/in/emily-lussier/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Conectar en LinkedIn ↗
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          className="text-link"
                          href={`mailto:${p[0].startsWith("Rashel") ? "rashel" : "suzee"}.aduran@farmersagency.com`}
                        >
                          Enviar correo a {p[0].split(" ")[0]} →
                        </a>
                        <a className="text-link" href="tel:+19516538888">
                          Llamar al 951-653-8888 →
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Información local sobre cobertura</p>
              <h2>
                Guías de riesgos para {city} y el {d.county}.
              </h2>
            </div>
            <p>
              Revise recursos oficiales sobre incendios forestales, terremotos,
              inundaciones, clasificación de autos y arrendadores antes de
              solicitar cobertura.
            </p>
          </div>
          <div className="location-links">
            <Link href={`/es/areas/${mv ? "moreno-valley" : "yorba-linda"}`}>
              <strong>Guía de riesgos de {city}</strong>
              <span>
                Peligros específicos de la ciudad, efectos en el seguro y
                recursos oficiales →
              </span>
            </Link>
            <Link
              href={`/es/areas/${mv ? "condado-de-riverside" : "condado-de-orange"}`}
            >
              <strong>Guía de riesgos del {d.county}</strong>
              <span>
                Consideraciones de incendios, terremotos, inundaciones, auto y
                arrendadores en todo el condado →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Opciones de cobertura</p>
              <h2>
                Seguros personales, comerciales,{" "}
                {mv ? "para catástrofes" : "especializados"} y de vida.
              </h2>
            </div>
            <p>
              La disponibilidad varía según la aseguradora, elegibilidad,
              suscripción y cobertura seleccionada.
            </p>
          </div>
          <div className="specialty-grid">
            {officeSpecialties[city].map((x) => (
              <span key={x}>Seguro de {x.toLowerCase()}</span>
            ))}
          </div>
          <p className="disclaimer">
            Enviar una solicitud no obliga ni cambia cobertura. La cobertura
            entra en vigor únicamente después de que la confirme un profesional
            de seguros con licencia o la aseguradora correspondiente.
          </p>
        </div>
      </section>
    </>
  );
}

const requests = [
  "Asistencia con facturación y pagos",
  "Comprobante o evidencia de seguro",
  "Tarjetas de identificación del seguro de auto",
  "Actualizaciones de acreedor hipotecario o prestamista",
  "Solicitudes de asegurado adicional",
  "Cambios de vehículos o conductores",
  "Cambios de dirección postal o de residencia",
  "Preguntas y solicitudes sobre cobertura",
  "Documentos de póliza",
  "Preguntas sobre renovación o restablecimiento",
  "Solicitudes de cancelación",
  "Orientación sobre reclamos",
];
export function SpanishCustomerService() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Abel Duran Insurance Agency, Inc.",
    url: `${siteConfig.url}/es/servicio-al-cliente`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "servicio al cliente",
      telephone: "+1-951-653-8888",
      faxNumber: "+1-951-656-3333",
      availableLanguage: ["English", "Spanish"],
      areaServed: "Southern California",
    },
    inLanguage: "es-US",
  };
  return (
    <>
      <PageHero
        eyebrow="Servicio al cliente y apoyo para pólizas"
        title="Ayuda para pólizas existentes de un verdadero equipo de agencia."
      >
        Las especialistas en servicios de seguros Rashel Dominguez y Suzee
        Cervantes ayudan con preguntas sobre pólizas, documentos, orientación de
        facturación, renovaciones y solicitudes de servicio.
      </PageHero>
      <section className="section">
        <div className="shell">
          <div className="support-cards">
            {[
              [
                "Rashel Dominguez",
                "4412046",
                "rashel.aduran@farmersagency.com",
              ],
              ["Suzee Cervantes", "4494455", "suzee.aduran@farmersagency.com"],
            ].map((x) => (
              <article className="team-card" key={x[0]}>
                <div className="initial-avatar" aria-hidden="true">
                  {x[0]
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="eyebrow">Especialista en servicios de seguros</p>
                <h2>{x[0]}</h2>
                <p>
                  <strong>Lic. de CA núm. {x[1]}</strong>
                </p>
                <p>
                  <a className="text-link" href={`mailto:${x[2]}`}>
                    {x[2]}
                  </a>
                  <br />
                  <a href="tel:+19516538888">951-653-8888</a> · Fax 951-656-3333
                </p>
                <div className="button-row">
                  <a className="button" href={`mailto:${x[2]}`}>
                    Enviar correo a {x[0].split(" ")[0]}
                  </a>
                  <a
                    className="button button-secondary"
                    href="tel:+19516538888"
                  >
                    Llamar a servicio al cliente
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="shell service-layout">
          <div>
            <p className="eyebrow">Solicitudes comunes</p>
            <h2>Apoyo para su póliza sin ingresar al proceso de cotización.</h2>
            <ul className="service-list">
              {requests.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="urgent-note">
              <h3>¿Necesita reportar un reclamo?</h3>
              <p>
                Para orientación general sobre reclamos, comuníquese con nuestro
                equipo de servicio al{" "}
                <a href="tel:+19516538888">951-653-8888</a>. Para reportar un
                reclamo urgente fuera del horario normal, comuníquese con su
                aseguradora mediante el número de reclamos que aparece en los
                documentos de su póliza o tarjeta de identificación del seguro.
              </p>
              <p>
                <strong>
                  Si existe una amenaza inmediata para la vida, la seguridad o
                  la propiedad, llame al 911 antes de comunicarse con la
                  agencia.
                </strong>
              </p>
            </div>
          </div>
          <div className="form-card">
            <h2>Enviar una solicitud de servicio</h2>
            <ServiceRequestForm locale="es" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell location-links">
          <a
            href="https://maps.google.com/?q=13800+Heacock+St+Suite+C120+Moreno+Valley+CA+92553"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Oficina de Moreno Valley</strong>
            <span>{siteConfig.morenoValleyOffice}</span>
            <span>951-653-8888 · Cómo llegar ↗</span>
          </a>
          <a
            href="https://maps.google.com/?q=23621+La+Palma+Ave+Suite+A+Yorba+Linda+CA+92887"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Oficina de Yorba Linda</strong>
            <span>{siteConfig.yorbaLindaOffice}</span>
            <span>714-701-6411 · Cómo llegar ↗</span>
          </a>
        </div>
      </section>
      <script
        id="customer-service-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
