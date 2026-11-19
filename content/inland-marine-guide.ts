export const inlandGuideDate = "2026-11-18";
export const inlandGuideSlug = "inland-marine-rental-equipment-california";
export const inlandGuideSpanishSlug = "seguro-equipo-alquilado-y-transporte-california";

export const inlandMarineLesson = {
  sources: [
    { label: "California Department of Insurance: Commercial Insurance Guide", url: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/commercialguide.cfm" },
    { label: "NAIC: Property/Casualty Product Coding Matrix, Inland Marine", url: "https://content.naic.org/sites/default/files/property-casualty-pcm_0.pdf" },
  ],
  en: {
    limits: "Review the equipment schedule, per-item and per-loss limits, valuation, deductibles, transit, rental-to-others, and off-premises provisions together.",
    sections: [
      { heading: "Follow the equipment through the job", paragraphs: ["Describe where the property is stored, who transports it, how it is installed, and who uses it. Identify equipment owned by the business separately from property borrowed or leased from someone else. Renting a unit to a customer adds questions that an inventory kept at your own premises does not answer.", "Ask the broker to check transit, customer use, theft conditions, unattended vehicles, storage locations, and the rental agreement against the actual policy. Inland marine is a category of property insurance; the selected form and endorsements determine the protection. A policy name alone does not settle these questions."] },
      { heading: "Actual placement: portable restrooms rented for events", paragraphs: ["Client names and identifying details are omitted for privacy. Abraham Nunez-Chavez coordinated general liability, commercial auto, and inland marine through three separate brokered insurers for a portable sanitation rental business. The placement addressed the rented units, their transit to events, and their use at event locations under the policies.", "Why this matters: a damaged rental unit, an accident involving the delivery vehicle, and an injury claim are different exposures. Reviewing the full job helps connect each exposure with the appropriate policy. This example describes an actual placement, not one carrier’s package or a substitute for reviewing your contracts."] },
      { heading: "Bring a useful equipment inventory", paragraphs: ["Bring descriptions, replacement values, serial numbers where available, storage addresses, transport radius, rental contracts, prior losses, and current policies. Discuss the value of equipment traveling or stored together, not just the price of one unit. Review the settlement basis and deductible before comparing premiums.", "Ask which policy handles the equipment, which handles the vehicle, and which addresses liability. Confirm the named insureds, scheduled property, and business activities correspond across the program. Abraham explains those connections so your decision is based on the work you perform."] },
    ],
  },
  es: {
    limits: "Revise conjuntamente lista de equipo, límites por bien y por pérdida, valoración, deducibles, tránsito, alquiler a terceros y disposiciones fuera del local.",
    sections: [
      { heading: "Siga el equipo durante todo el trabajo", paragraphs: ["Describa dónde se guarda, quién lo transporta, cómo se instala y quién lo utiliza. Separe el equipo del negocio de los bienes prestados o arrendados por otra persona. Alquilar una unidad a un cliente plantea preguntas distintas de mantener un inventario en su propio local.", "Pida revisar tránsito, uso por clientes, condiciones de robo, vehículos desatendidos, almacenamiento y contrato de alquiler frente a la póliza. Inland marine es una categoría de seguro de bienes; el formulario y sus endosos determinan la protección. El nombre de la póliza no resuelve esas preguntas."] },
      { heading: "Colocación real: sanitarios portátiles alquilados para eventos", paragraphs: ["Se omiten nombres y datos identificativos por privacidad. Abraham Nunez-Chavez coordinó responsabilidad general, auto comercial e inland marine mediante tres aseguradoras de corretaje para un negocio de alquiler de sanitarios portátiles. La colocación atendió las unidades alquiladas, su traslado y uso en eventos conforme a las pólizas.", "Por qué importa: una unidad dañada, un accidente del vehículo de entrega y una reclamación por lesiones son exposiciones distintas. Revisar todo el trabajo permite relacionar cada exposición con la póliza apropiada. El ejemplo describe una colocación real, no el paquete de una sola aseguradora ni un sustituto de sus contratos."] },
      { heading: "Prepare un inventario útil del equipo", paragraphs: ["Tenga descripciones, valores de reemplazo, números de serie disponibles, direcciones de almacenamiento, radio de transporte, contratos de alquiler, pérdidas anteriores y pólizas actuales. Comente el valor de los bienes transportados o guardados juntos, no solo el precio de una unidad. Revise valoración y deducible antes de comparar primas.", "Pregunte qué póliza atiende equipo, cuál vehículos y cuál responsabilidad. Confirme que asegurados, bienes declarados y actividades correspondan entre pólizas. Abraham explica esas conexiones para que usted decida según el trabajo que realiza."] },
    ],
  },
};

export const inlandMarineArticle = {
  slug: inlandGuideSlug,
  title: "Inland Marine for Rental Equipment: Transit, Customer Use, and Liability",
  category: "Commercial" as const,
  summary: "Understand how equipment coverage, commercial auto, and liability fit together when your property is rented to others or moves between jobs.",
  body: ["Equipment insurance should follow the business’s actual operations. A unit in storage, on a delivery vehicle, and at a customer’s event presents a different set of questions at each stage. This guide shows what to bring to a review and why separate policies must be coordinated."],
};

export const inlandMarineSpanishArticle = {
  slug: inlandGuideSpanishSlug,
  englishSlug: inlandGuideSlug,
  title: "Equipo alquilado: seguro de transporte, uso por clientes y responsabilidad",
  category: "Commercial" as const,
  summary: "Conozca cómo se coordinan equipo, auto comercial y responsabilidad al alquilar bienes a terceros o transportarlos entre trabajos.",
  body: ["El seguro del equipo debe corresponder a las operaciones reales. Una unidad almacenada, en el vehículo de entrega y en el evento de un cliente plantea preguntas diferentes. Esta guía explica qué preparar para la revisión y por qué deben coordinarse pólizas separadas."],
  sections: inlandMarineLesson.es.sections,
  commonLimits: inlandMarineLesson.es.limits,
  officialResources: inlandMarineLesson.sources,
  dateModified: inlandGuideDate,
};
