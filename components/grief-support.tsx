const griefShareUrl = "https://find.griefshare.org/find";

type GriefSupportProps = {
  locale?: "en" | "es";
  placement: "education" | "life";
};

const content = {
  en: {
    education: {
      eyebrow: "Independent grief-support resource",
      heading: "Grief Support for Families and Loved Ones",
      copy: "Life insurance provides financial protection, but families may also need emotional and community support after losing someone they love. GriefShare connects individuals with local grief-recovery support groups. Enter your location to find a nearby group and view available meeting information.",
      button: "Find a GriefShare Group Near You",
    },
    life: {
      eyebrow: "Resource for grieving families",
      heading: "Support Beyond the Life Insurance Policy",
      copy: "A life insurance policy can provide financial stability after a loss. Grieving families may also benefit from ongoing emotional and community support. GriefShare offers local grief-recovery groups where loved ones can connect with others, access helpful resources, and find support during the grieving process.",
      button: "Find Local Grief Support",
    },
    disclosure: "GriefShare is an independent third-party organization. Availability, program details, and services are determined by GriefShare and participating local groups.",
    label: "Find a local grief-support group through GriefShare",
    newTab: "opens in a new tab",
  },
  es: {
    education: {
      eyebrow: "Recurso independiente de apoyo durante el duelo",
      heading: "Apoyo durante el duelo para familias y seres queridos",
      copy: "El seguro de vida brinda protección financiera, pero las familias también pueden necesitar apoyo emocional y comunitario después de perder a un ser querido. GriefShare conecta a las personas con grupos locales de apoyo para la recuperación durante el duelo. Ingrese su ubicación para encontrar un grupo cercano y consultar la información disponible sobre sus reuniones.",
      button: "Encuentre un grupo de GriefShare cerca de usted",
    },
    life: {
      eyebrow: "Recurso para familias que atraviesan un duelo",
      heading: "Apoyo más allá de la póliza de seguro de vida",
      copy: "Una póliza de seguro de vida puede brindar estabilidad financiera después de una pérdida. Las familias en duelo también pueden beneficiarse del apoyo emocional y comunitario continuo. GriefShare ofrece grupos locales de recuperación durante el duelo donde los seres queridos pueden relacionarse con otras personas, acceder a recursos útiles y encontrar apoyo durante este proceso.",
      button: "Encontrar apoyo local durante el duelo",
    },
    disclosure: "GriefShare es una organización independiente de terceros. La disponibilidad, los detalles de los programas y los servicios son determinados por GriefShare y los grupos locales participantes.",
    label: "Encontrar un grupo local de apoyo durante el duelo a través de GriefShare",
    newTab: "se abre en una pestaña nueva",
  },
} as const;

export function GriefSupport({ locale = "en", placement }: GriefSupportProps) {
  const localized = content[locale];
  const section = localized[placement];

  return <article className="guide-callout grief-support">
    <p className="eyebrow">{section.eyebrow}</p>
    <h2>{section.heading}</h2>
    <p>{section.copy}</p>
    <p className="service-disclosure">{localized.disclosure}</p>
    <a className="button" href={griefShareUrl} target="_blank" rel="noopener noreferrer" aria-label={`${localized.label} (${localized.newTab})`}>
      {section.button} <span aria-hidden="true">↗</span>
    </a>
  </article>;
}
