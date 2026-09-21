type BilingualOpening = { en: string; es: string };

// These are clearly framed, representative teaching scenarios—not client testimonials
// or descriptions of a particular claim. They give readers a practical reason to keep
// reading before the guide moves into definitions, limits, and policy details.
export const articleOpenings: Record<string, BilingualOpening> = {
  "home-insurance-deductibles": {
    en: "Picture a homeowner opening a claim estimate after a kitchen fire and learning that the first several thousand dollars are their responsibility. The policy may be working exactly as written—the surprise is the deductible. This guide helps you translate every deductible into real dollars before a loss, so the amount you choose is one you could actually pay.",
    es: "Imagine que un propietario abre el estimado de un reclamo después de un incendio en la cocina y descubre que los primeros miles de dólares son su responsabilidad. La póliza puede estar funcionando exactamente como fue escrita; la sorpresa es el deducible. Esta guía le ayuda a convertir cada deducible en una cantidad real antes de una pérdida, para elegir una suma que realmente podría pagar.",
  },
  "fair-plan-dic": {
    en: "A buyer in a wildfire-exposed neighborhood may receive two policies instead of one: a FAIR Plan policy for certain fire-related protection and a separate Difference in Conditions policy for important gaps. Seeing two documents can feel like duplicate coverage, but the real question is whether they fit together without leaving liability, water, theft, or temporary-living gaps. This guide shows you how to read the pair as one protection plan.",
    es: "Un comprador en una zona expuesta a incendios puede recibir dos pólizas en vez de una: una póliza FAIR Plan para cierta protección contra incendio y otra de Difference in Conditions para vacíos importantes. Dos documentos pueden parecer cobertura duplicada, pero la pregunta real es si se complementan sin dejar vacíos de responsabilidad, agua, robo o vivienda temporal. Esta guía explica cómo revisar ambas como un solo plan de protección.",
  },
  "replacement-cost-market-value": {
    en: "A home can sell for $900,000 and still need a very different amount of dwelling coverage. The sale price includes land and location; the insurance estimate asks what labor, materials, demolition, permits, and code upgrades could cost after a major loss. This guide explains why those numbers should not match automatically—and which number actually protects the structure.",
    es: "Una casa puede venderse por $900,000 y aun necesitar una cantidad muy distinta de cobertura de vivienda. El precio de venta incluye el terreno y la ubicación; el estimado del seguro considera mano de obra, materiales, demolición, permisos y mejoras de código después de una pérdida grave. Esta guía explica por qué esas cifras no deben coincidir automáticamente y cuál protege realmente la estructura.",
  },
  "insurance-before-escrow": {
    en: "Imagine a buyer who is days from closing when the insurer asks for a roof inspection or declines the property because of wildfire exposure. The loan, appraisal, and moving plans may all be ready, yet insurance can still stop the timeline. This guide shows real-estate professionals what to gather early so an underwriting question becomes a manageable task instead of a last-minute emergency.",
    es: "Imagine a un comprador a pocos días del cierre cuando la aseguradora solicita una inspección del techo o rechaza la propiedad por exposición a incendios. El préstamo, la tasación y la mudanza pueden estar listos, pero el seguro todavía puede detener el proceso. Esta guía muestra a los profesionales de bienes raíces qué reunir con anticipación para convertir una pregunta de suscripción en una tarea manejable y no en una emergencia de último minuto.",
  },
  "auto-garaging-address": {
    en: "A driver moves across town, keeps the same car and commute, and wonders why the premium changes. Insurers rate the place where the vehicle usually sleeps because theft, traffic, vandalism, and claim patterns vary by area. This guide explains what a garaging address means and why keeping it accurate protects both pricing and the integrity of a future claim.",
    es: "Un conductor se muda al otro lado de la ciudad, conserva el mismo auto y trayecto, y se pregunta por qué cambia la prima. Las aseguradoras califican el lugar donde normalmente pasa la noche el vehículo porque el robo, tráfico, vandalismo y frecuencia de reclamos varían por zona. Esta guía explica qué significa el domicilio de garaje y por qué mantenerlo correcto protege tanto la tarifa como la integridad de un reclamo futuro.",
  },
  "general-liability-workers-compensation": {
    en: "A customer slips in a shop while an employee strains a back lifting inventory on the same day. Both injuries involve the business, but they belong in different insurance conversations. This guide separates general liability from workers' compensation so an owner understands which people, events, and costs each policy is designed to address.",
    es: "Un cliente se resbala en un negocio mientras un empleado se lesiona la espalda al levantar inventario el mismo día. Ambas lesiones involucran al negocio, pero pertenecen a conversaciones de seguro distintas. Esta guía separa la responsabilidad civil general de la compensación laboral para que el propietario entienda qué personas, eventos y costos busca atender cada póliza.",
  },
  "insurance-mortgage-escrow": {
    en: "A buyer divides the annual home premium by twelve and expects that exact amount to appear in the mortgage payment—then the closing disclosure shows a larger deposit. Nothing is necessarily wrong: prepaid premium, reserves, timing, and lender cushions can change the first-year figures. This guide explains the moving parts so you know which questions belong with the insurer and which belong with the lender or escrow officer.",
    es: "Un comprador divide la prima anual de la casa entre doce y espera ver exactamente esa cantidad en el pago hipotecario, pero la divulgación de cierre muestra un depósito mayor. No necesariamente existe un error: la prima prepagada, reservas, fechas y colchones del prestamista pueden cambiar las cifras del primer año. Esta guía explica cada parte para saber qué preguntas corresponden a la aseguradora y cuáles al prestamista o al oficial de escrow.",
  },
  "umbrella-insurance": {
    en: "A serious freeway crash can produce medical bills and lost-income claims far beyond an ordinary auto liability limit. Once that limit is exhausted, personal savings, income, and property may be exposed. This guide explains how umbrella insurance can add another layer of liability protection and why the underlying home and auto limits must be coordinated first.",
    es: "Un accidente grave en la autopista puede generar facturas médicas y pérdida de ingresos muy superiores a un límite común de responsabilidad de auto. Cuando ese límite se agota, los ahorros, ingresos y propiedades personales pueden quedar expuestos. Esta guía explica cómo un seguro paraguas puede añadir otra capa de responsabilidad y por qué primero deben coordinarse los límites de casa y auto.",
  },
  "california-auto-liability-limits": {
    en: "Suppose a driver causes a chain-reaction collision involving a newer SUV and two injured passengers. California's legal minimum can satisfy the law and still run out long before every covered claim is paid. This guide turns 30/60/15 and other limit options into plain English so you can compare legal compliance with meaningful financial protection.",
    es: "Suponga que un conductor causa un choque en cadena con una SUV reciente y dos pasajeros lesionados. El mínimo legal de California puede cumplir la ley y aun agotarse mucho antes de pagar todos los reclamos cubiertos. Esta guía traduce 30/60/15 y otros límites a lenguaje claro para comparar el cumplimiento legal con una protección financiera significativa.",
  },
  "uninsured-underinsured-motorist-california": {
    en: "You can drive responsibly, carry strong liability limits, and still be injured by someone who has no insurance—or only the minimum. Your liability coverage protects others when you are at fault; it does not automatically replace what an uninsured driver should have paid you. This guide explains how UM/UIM can protect your household when the other driver's coverage fails.",
    es: "Puede conducir responsablemente, llevar límites sólidos de responsabilidad y aun resultar lesionado por alguien sin seguro o con el mínimo. Su responsabilidad protege a otros cuando usted tiene la culpa; no reemplaza automáticamente lo que un conductor sin seguro debió pagarle. Esta guía explica cómo UM/UIM puede proteger a su hogar cuando falla la cobertura del otro conductor.",
  },
  "comprehensive-collision-deductibles": {
    en: "Two damaged cars can lead to two different coverages: one hits a freeway barrier, while the other is struck by a falling tree branch. Collision commonly addresses the first event and comprehensive may address the second, subject to the policy. This guide helps you understand the distinction and choose a deductible you could handle more than once—not merely the option with the lowest premium.",
    es: "Dos autos dañados pueden activar coberturas distintas: uno choca con una barrera de la autopista y al otro le cae una rama. Colisión suele atender el primer evento e integral puede atender el segundo, según la póliza. Esta guía ayuda a entender la diferencia y elegir un deducible que podría pagar más de una vez, no solamente la opción con la prima más baja.",
  },
  "california-homeowners-coverage-limits": {
    en: "After a major neighborhood fire, rebuilding is not just lumber and labor. Debris removal, permits, code upgrades, temporary housing, and regional demand can all arrive at once. This guide walks through the separate parts of a homeowners policy so you can see which limit pays for the structure, belongings, living elsewhere, and liability—and where a gap may remain.",
    es: "Después de un incendio importante en un vecindario, reconstruir no significa solamente madera y mano de obra. Retiro de escombros, permisos, mejoras de código, vivienda temporal y demanda regional pueden llegar al mismo tiempo. Esta guía recorre las partes separadas de una póliza de casa para identificar qué límite paga la estructura, pertenencias, vivienda temporal y responsabilidad, y dónde puede quedar un vacío.",
  },
  "renters-insurance-california": {
    en: "A pipe bursts in the apartment above, damaging a tenant's bed, laptop, clothing, and furniture. The landlord may repair the building, but that does not mean the tenant's belongings or hotel costs are covered. This guide explains the three jobs renters insurance can perform: protect personal property, help with eligible temporary living expenses, and provide personal liability coverage.",
    es: "Una tubería revienta en el apartamento de arriba y daña la cama, computadora, ropa y muebles del inquilino. El propietario puede reparar el edificio, pero eso no significa que cubra las pertenencias o el hotel del inquilino. Esta guía explica las tres funciones del seguro para inquilinos: proteger bienes personales, ayudar con gastos elegibles de vivienda temporal y brindar responsabilidad civil personal.",
  },
  "condo-insurance-california": {
    en: "A leak damages cabinets, flooring, and drywall inside a condo, and the owner assumes the HOA master policy will pay for everything. The answer depends on the master policy and the CC&Rs—documents many owners do not read until a loss. This guide shows how to coordinate those documents with an HO-6 policy before a repair becomes a dispute over who insures what.",
    es: "Una fuga daña gabinetes, pisos y paneles de yeso dentro de un condominio, y el propietario supone que la póliza maestra de la HOA pagará todo. La respuesta depende de la póliza maestra y los CC&R, documentos que muchos propietarios no leen hasta una pérdida. Esta guía muestra cómo coordinarlos con una póliza HO-6 antes de que una reparación se convierta en una disputa sobre quién asegura cada parte.",
  },
  "landlord-insurance-california": {
    en: "Imagine a tenant-occupied home becomes unlivable after a covered kitchen fire. The owner may face building repairs, lost rent, tenant questions, and a premises-liability concern at the same time. This guide explains how landlord insurance differs from homeowners insurance and which limits deserve attention before rental income is interrupted.",
    es: "Imagine que una vivienda ocupada por inquilinos queda inhabitable después de un incendio cubierto en la cocina. El propietario puede enfrentar reparaciones, pérdida de renta, preguntas del inquilino y una preocupación de responsabilidad al mismo tiempo. Esta guía explica cómo el seguro para propietarios de alquiler difiere del seguro de casa y qué límites merecen atención antes de que se interrumpan los ingresos.",
  },
  "life-insurance-needs-california": {
    en: "A life-insurance number becomes meaningful only when it is connected to the people and obligations it must support. If an income disappeared tomorrow, the household might still face a mortgage, childcare, education, debt, and final expenses. This guide turns those responsibilities into a practical needs calculation instead of relying on a round number or a workplace benefit alone.",
    es: "Una cantidad de seguro de vida cobra sentido cuando se conecta con las personas y obligaciones que debe sostener. Si un ingreso desapareciera mañana, el hogar todavía podría enfrentar hipoteca, cuidado infantil, educación, deudas y gastos finales. Esta guía convierte esas responsabilidades en un cálculo práctico en vez de depender de una cifra redonda o solamente del beneficio del trabajo.",
  },
  "earthquake-insurance-retrofit-discounts": {
    en: "A homeowner sees a 15% earthquake deductible and assumes it means 15% of the repair bill. It commonly applies to the insured dwelling limit, which can produce a much larger out-of-pocket amount. This guide helps you calculate the deductible in dollars, understand the separate coverage, and evaluate retrofit resources without assuming that mitigation guarantees a discount.",
    es: "Un propietario ve un deducible sísmico de 15% y supone que significa 15% de la factura de reparación. Por lo general se aplica al límite asegurado de la vivienda, lo que puede producir una cantidad de bolsillo mucho mayor. Esta guía ayuda a calcularlo en dólares, entender la cobertura separada y evaluar recursos de refuerzo sin suponer que la mitigación garantiza un descuento.",
  },
  "wildfire-readiness-home-hardening": {
    en: "A wildfire does not need to reach the front door for a home to ignite; wind-driven embers can travel ahead of the flames and find a vent, roof edge, deck, or dry vegetation. That makes preparation both a property-maintenance issue and an insurance issue. This guide turns home hardening, defensible space, documentation, evacuation, and policy review into a practical checklist.",
    es: "Un incendio forestal no necesita llegar a la puerta para encender una casa; las brasas impulsadas por el viento pueden adelantarse a las llamas y entrar por una ventilación, borde del techo, terraza o vegetación seca. Por eso la preparación es un asunto de mantenimiento y de seguro. Esta guía convierte el fortalecimiento, espacio defendible, documentación, evacuación y revisión de póliza en una lista práctica.",
  },
  "commercial-general-liability-limits": {
    en: "A contractor hands over a certificate showing $1 million in liability coverage and assumes the contract requirement is complete. Later, the contract also calls for additional-insured status, completed-operations protection, and specific wording the certificate alone does not create. This guide explains what the common limits mean and why endorsements, exclusions, and actual operations matter as much as the number on the page.",
    es: "Un contratista entrega un certificado con $1 millón de responsabilidad y supone que cumplió el contrato. Después descubre que también se exigían asegurado adicional, operaciones terminadas y lenguaje específico que el certificado por sí solo no crea. Esta guía explica los límites comunes y por qué los endosos, exclusiones y operaciones reales importan tanto como la cifra en la página.",
  },
  "business-owners-policy-property-income": {
    en: "A small business survives a covered fire, but reopening takes months while rent, payroll, and loan payments continue. Replacing damaged equipment is only part of the recovery; lost income and extra operating costs can be just as serious. This guide explains how a Business Owners Policy can package property, liability, and eligible business-income protection—and which exposures still need separate review.",
    es: "Una pequeña empresa sobrevive a un incendio cubierto, pero reabrir toma meses mientras continúan renta, nómina y préstamos. Reemplazar equipo dañado es solamente parte de la recuperación; la pérdida de ingresos y los gastos adicionales pueden ser igual de serios. Esta guía explica cómo una BOP puede combinar propiedad, responsabilidad e ingresos comerciales elegibles, y qué riesgos todavía necesitan revisión separada.",
  },
  "workers-compensation-california": {
    en: "A business hires its first part-time employee and assumes workers' compensation can wait until the company grows. In California, the obligation can begin with that first employee, and the final premium depends on actual payroll and job duties. This guide explains coverage, classifications, audits, and recordkeeping before a routine hire becomes a compliance or pricing problem.",
    es: "Un negocio contrata a su primer empleado de medio tiempo y supone que la compensación laboral puede esperar hasta que crezca la empresa. En California, la obligación puede comenzar con ese primer empleado, y la prima final depende de la nómina y funciones reales. Esta guía explica cobertura, clasificaciones, auditorías y registros antes de que una contratación rutinaria se convierta en un problema de cumplimiento o precio.",
  },
  "commercial-auto-california": {
    en: "A pickup may look personal in the driveway but operate commercially when it carries tools, visits job sites, or is titled to a business. If ownership, drivers, radius, or use are described incorrectly, the policy may not match the exposure. This guide shows how commercial auto coverage is built and why the vehicle list is only the beginning of an accurate submission.",
    es: "Una camioneta puede parecer personal en la entrada de la casa, pero operar comercialmente cuando lleva herramientas, visita obras o está titulada a nombre de una empresa. Si la propiedad, conductores, radio o uso se describen mal, la póliza puede no corresponder al riesgo. Esta guía muestra cómo se estructura el seguro de auto comercial y por qué la lista de vehículos es solamente el principio de una solicitud correcta.",
  },
  "cyber-professional-liability-california": {
    en: "A convincing email causes an employee to send money to the wrong account while a separate software error delays a client's project. Both losses may involve technology, but they do not necessarily trigger the same coverage. This guide separates cyber, crime, and professional-liability concerns so a business can match insurance to the way it stores data, moves money, and delivers advice or services.",
    es: "Un correo convincente hace que un empleado envíe dinero a la cuenta equivocada mientras un error de software retrasa el proyecto de un cliente. Ambas pérdidas involucran tecnología, pero no necesariamente activan la misma cobertura. Esta guía separa riesgos cibernéticos, de crimen y responsabilidad profesional para relacionar el seguro con la forma en que el negocio guarda datos, mueve dinero y presta servicios.",
  },
  "california-home-insurance-non-renewal": {
    en: "Opening a non-renewal notice can feel like being told the home is suddenly uninsurable. It may instead reflect a roof concern, wildfire model, property detail, claims history, or broader underwriting change—and the response depends on which one applies. This guide gives you an orderly first-day plan so valuable time is spent correcting facts, gathering documents, and comparing complete alternatives.",
    es: "Abrir un aviso de no renovación puede sentirse como si la casa fuera de repente imposible de asegurar. En realidad puede reflejar el techo, un modelo de incendio, un dato de la propiedad, reclamos o un cambio general de suscripción, y la respuesta depende de la causa. Esta guía ofrece un plan ordenado para el primer día y aprovechar el tiempo corrigiendo datos, reuniendo documentos y comparando alternativas completas.",
  },
  "high-value-home-insurance-underwriting-california": {
    en: "A custom home cannot be explained by square footage and sale price alone. Imported finishes, hillside access, detached structures, collections, domestic staff, and wildfire features can each change reconstruction or liability exposure. This guide helps organize the detailed underwriting story so the insurer sees the property that actually exists—not an incomplete database profile.",
    es: "Una casa personalizada no puede explicarse solamente con pies cuadrados y precio de venta. Acabados importados, acceso en ladera, estructuras separadas, colecciones, empleados domésticos y características contra incendios pueden cambiar la reconstrucción o responsabilidad. Esta guía ayuda a organizar la historia completa de suscripción para que la aseguradora vea la propiedad real y no un perfil incompleto de una base de datos.",
  },
  "insuring-jewelry-art-collections": {
    en: "A homeowner may have $200,000 of personal-property coverage and still discover that a stolen ring is subject to a much smaller jewelry limit. The total limit and the category limit are different questions. This guide explains how inventories, appraisals, scheduling, valuation methods, and protection away from home work together for items that cannot be treated like ordinary household contents.",
    es: "Un propietario puede tener $200,000 de cobertura de bienes personales y aun descubrir que un anillo robado está sujeto a un límite mucho menor para joyas. El límite total y el límite por categoría son preguntas distintas. Esta guía explica cómo inventarios, tasaciones, bienes programados, métodos de valoración y protección fuera del hogar se coordinan para artículos que no deben tratarse como contenido común.",
  },
};

export function articleOpening(slug: string, locale: keyof BilingualOpening) {
  return articleOpenings[slug]?.[locale];
}

