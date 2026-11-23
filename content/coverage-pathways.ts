// Service guidance based on Abraham's confirmed workflow and the linked CDI guides.
// Market names describe the existing agency directory, not direct appointments.
export type PathwayCopy = {
  heading: string;
  sections: { title: string; paragraphs: string[] }[];
  questions: { question: string; answer: string }[];
};
type Pathway = { guide: string; en: PathwayCopy; es: PathwayCopy };
export const coveragePathways: Record<string, Pathway> = {
  "homeowners-insurance": {
    guide: "/education/insurance-before-escrow",
    en: {
      heading: "Make the home yours with insurance you understand.",
      sections: [{ title: "Start with the address, the way you live, and the cost to rebuild.", paragraphs: [
        "Abraham Nunez-Chavez reviews home insurance from the Moreno Valley office of Abel Duran Insurance Agency, Inc. He compares the property’s use, available claims history, rebuilding estimate, roof and system updates, deductibles, and liability needs before recommending available options. Your purchase price includes land; your dwelling limit addresses rebuilding. Understanding that difference makes the quote more useful than a premium alone.",
        "Tell Abraham if the home is your primary residence, a seasonal or secondary home, a manufactured or mobile home, vacant, under renovation, or rented to someone else. Those facts change the review. Bring prospective addresses early, especially during escrow, so you can compare insurance costs and requirements before deciding which home to buy. He coordinates evidence of insurance and outstanding requirements with your transaction team as authorized."
      ] }],
      questions: [
        { question: "How do I find homeowners insurance in Moreno Valley and nearby communities?", answer: "Contact Abraham Nunez-Chavez at 714-388-9533. He serves homeowners from the Moreno Valley office, with English and Spanish consultations and statewide California service. Share the address, intended occupancy, current coverage or purchase timeline, and the issue you want resolved. He reviews Farmers and additional eligible brokerage markets through the agency." },
        { question: "How do I get homeowners insurance before closing on a house?", answer: "Send the property address and expected closing date early. Abraham starts with available claims information, reviews coverage options, and coordinates mortgagee wording, effective dates, evidence of insurance, and invoices. The insurer determines eligibility and the lender decides whether the proposed insurance meets its requirements. Complete required items before the requested coverage date." },
        { question: "What should I do if my home insurance company won’t renew my policy?", answer: "Send the notice, declarations, address, and any inspection or repair information as soon as you receive them. Abraham reviews available replacement markets. When California FAIR Plan is the appropriate route, he explains its named-peril fire coverage and checks a separate DIC policy for specified non-fire protections. Compare both contracts, combined cost, limits, and deductibles; the pair is not automatically identical to a homeowners policy." },
        { question: "Can you help with manufactured homes or seasonal homes?", answer: "Yes. Abraham reviews those property types and their actual use. Share the construction type, year, ownership, location, occupancy schedule, and any rental or renovation plans. A manufactured home, a part-time residence, and a vacant home raise different underwriting questions. He checks the applicable market and policy rather than placing every address under an owner-occupied-home assumption." }
      ]
    },
    es: {
      heading: "Haga suya la vivienda con un seguro que comprenda.",
      sections: [{ title: "Empiece por la dirección, el uso y el costo de reconstrucción.", paragraphs: [
        "Abraham Nunez-Chavez revisa seguros de vivienda desde la oficina de Moreno Valley de Abel Duran Insurance Agency, Inc. Compara uso, historial disponible de reclamaciones, estimación de reconstrucción, actualizaciones de techo y sistemas, deducibles y responsabilidad antes de recomendar opciones disponibles. El precio de compra incluye el terreno; el límite de vivienda atiende la reconstrucción. Esa diferencia permite evaluar más que la prima.",
        "Indique si se trata de su residencia principal, vivienda de temporada o secundaria, casa móvil o prefabricada, inmueble vacante, en remodelación o alquilado. Esos datos cambian la revisión. Envíe direcciones con anticipación, especialmente durante escrow, para comparar costos y requisitos antes de elegir una vivienda. Abraham coordina comprobantes de seguro y requisitos pendientes con su equipo de cierre según su autorización."
      ] }],
      questions: [
        { question: "¿Cómo encuentro seguro de casa en Moreno Valley y comunidades cercanas?", answer: "Comuníquese con Abraham Nunez-Chavez al 714-388-9533. Atiende desde Moreno Valley, con consultas en inglés y español y servicio en todo California. Comparta dirección, ocupación prevista, cobertura actual o fecha de compra y el asunto que necesita resolver. Revisa Farmers y otros mercados de corretaje elegibles mediante la agencia." },
        { question: "¿Cómo consigo seguro de casa antes del cierre de la compra?", answer: "Sí. Envíe dirección y fecha prevista de cierre con anticipación. Abraham revisa información disponible de reclamaciones, opciones, cláusula hipotecaria, vigencia, comprobantes y facturas. La aseguradora determina elegibilidad y el prestamista decide si el seguro cumple sus requisitos. Complete los requisitos pendientes antes de la fecha de cobertura solicitada." },
        { question: "¿Qué hago si no renuevan mi seguro o la vivienda está expuesta a incendios forestales?", answer: "Envíe aviso, declaraciones, dirección e información de inspecciones o reparaciones en cuanto los reciba. Abraham revisa mercados de reemplazo. Cuando corresponde California FAIR Plan, explica su cobertura contra riesgos de incendio enumerados y revisa una póliza DIC separada para protecciones específicas distintas del incendio. Compare ambos contratos, costo total, límites y deducibles; no equivalen automáticamente a una póliza de casa." },
        { question: "¿Ayuda con casas móviles, prefabricadas o de temporada?", answer: "Sí. Abraham revisa esos inmuebles según su uso real. Comparta construcción, año, titularidad, ubicación, temporadas de ocupación y planes de alquiler o remodelación. Una casa prefabricada, una residencia de uso parcial y una vivienda vacante plantean preguntas diferentes. Verifica el mercado y contrato aplicables sin suponer que todas son residencias principales." }
      ]
    }
  },
  "landlord-insurance": {
    guide: "/education/landlord-insurance-california",
    en: {
      heading: "Protect the property and the income behind your investment.",
      sections: [{ title: "Review the rental as a business decision, not just a building.", paragraphs: [
        "Abraham reviews landlord insurance for individual owners, LLC-owned rentals, and coordinated property portfolios. He checks legal ownership, named insureds, tenant occupancy, rebuilding options, landlord-owned furnishings, liability, and loss of rents. Loss-of-rents coverage responds according to the policy after covered damage makes the rental uninhabitable; it is different from protection against ordinary unpaid rent.",
        "Send your property schedule, current declarations, occupancy details, rental income, prior losses, and lender requirements. Identify condos, manufactured homes, seasonal use, vacancies, and work in progress separately. Your ownership and operations should agree with the insurance paperwork across every address. Abraham’s actual portfolio-placement example is explained on his profile, with client identities omitted."
      ] }],
      questions: [
        { question: "Can I insure a rental property owned by my LLC?", answer: "Yes. Abraham reviews LLC-owned rental properties and checks how the entity, owners, property, and liability belong on the application and policy. Bring the exact legal entity name and property schedule. Adding an LLC name without reviewing the form, interests, and occupancy does not establish that every party or activity is insured." },
        { question: "Can you review several rental properties together?", answer: "Yes. Abraham coordinates multi-property reviews so ownership, occupancy, limits, loss of rents, lenders, and renewal dates can be considered together. A coordinated review does not require one policy or one insurer. The available portfolio structure depends on the properties, entities, and market’s underwriting requirements." },
        { question: "What changes when my rental property is vacant between tenants?", answer: "Notify Abraham before the occupancy changes. Tell him when the tenant leaves, how the building is secured and maintained, and whether repairs or renovations are planned. Vacancy or unoccupancy provisions can restrict coverage after a specified period. He checks the existing contract and reviews a different form or market when the actual use calls for it." },
        { question: "Can I compare Steadily landlord insurance with other options?", answer: "Steadily appears in the agency’s published property-market directory and specializes in rental-property insurance. Ask Abraham to check current access and eligibility for your address alongside other available markets. He compares the actual proposed coverage and terms before you choose; a directory listing is not an offer or confirmation of coverage." }
      ]
    },
    es: {
      heading: "Proteja el inmueble y los ingresos que sostienen su inversión.",
      sections: [{ title: "Revise el alquiler como una decisión de negocio, no solo como un edificio.", paragraphs: [
        "Abraham revisa seguros para propietarios individuales, alquileres a nombre de una LLC y carteras de propiedades. Comprueba titularidad, asegurados, ocupación por inquilinos, reconstrucción, bienes del propietario, responsabilidad y pérdida de rentas. Esta última responde según la póliza cuando un daño cubierto impide habitar el inmueble; es distinta del impago ordinario de renta.",
        "Envíe lista de propiedades, declaraciones actuales, ocupación, ingresos por alquiler, pérdidas anteriores y requisitos hipotecarios. Identifique por separado condominios, casas prefabricadas, uso de temporada, inmuebles vacantes y obras. La titularidad y las operaciones deben corresponder con los documentos en cada dirección. Su perfil explica una colocación real de cartera, sin revelar identidades de clientes."
      ] }],
      questions: [
        { question: "¿Puedo asegurar una propiedad de alquiler a nombre de mi LLC?", answer: "Sí. Abraham revisa cómo deben figurar entidad, propietarios, inmueble y responsabilidad en solicitud y póliza. Tenga el nombre legal exacto y la lista de propiedades. Agregar el nombre de una LLC sin revisar formulario, intereses y ocupación no establece que todas las personas o actividades estén aseguradas." },
        { question: "¿Puede revisar varias propiedades de alquiler juntas?", answer: "Sí. Abraham coordina revisiones de titularidad, ocupación, límites, pérdida de rentas, prestamistas y renovaciones. Una revisión conjunta no exige una sola póliza ni aseguradora. La estructura disponible depende de los inmuebles, entidades y requisitos del mercado." },
        { question: "¿Qué cambia cuando mi alquiler queda vacante entre inquilinos?", answer: "Avise antes del cambio. Indique cuándo sale el inquilino, cómo protege y mantiene el inmueble y si habrá reparaciones. Las disposiciones de vacancia o desocupación pueden restringir cobertura después de un plazo específico. Abraham revisa el contrato y otras opciones cuando el uso real requiere otra póliza o mercado." },
        { question: "¿Puede Abraham revisar opciones de seguro para arrendadores mediante Steadily?", answer: "Steadily figura en el directorio publicado de mercados de propiedad de la agencia y se especializa en inmuebles de alquiler. Pida verificar acceso actual y elegibilidad para su dirección junto con otros mercados disponibles. Abraham compara cobertura y condiciones propuestas; aparecer en un directorio no constituye oferta ni confirmación de cobertura." }
      ]
    }
  },
  "condo-insurance": {
    guide: "/education/condo-insurance-california",
    en: {
      heading: "Your condo’s insurance should fit your unit and the way you use it.",
      sections: [{ title: "Start where the association’s responsibility ends.", paragraphs: [
        "A condo-unit policy and the association’s master policy have different jobs. Abraham reviews the master declarations, governing documents, interior improvements, belongings, liability, loss assessments, and deductibles. A master policy’s existence does not establish which cabinets, flooring, fixtures, or upgrades it insures. Matching those responsibilities helps you choose the unit’s building limit with a clear reason behind it.",
        "Tell him whether you live in the unit, rent it to tenants, use it seasonally, or leave it vacant. Include planned renovations, lease terms, and the expected vacancy period. Owner occupancy, landlord use, and vacancy require distinct reviews. He checks the form and market against those facts rather than assuming the same condo policy fits every use."
      ] }],
      questions: [
        { question: "Can you help insure a condo that I rent to tenants?", answer: "Yes. Abraham reviews tenant-occupied condos, landlord liability, insured interior property, landlord-owned furnishings, and loss of rents together. Bring the lease, HOA insurance information, and lender requirements. The tenant’s belongings belong under the tenant’s own coverage, and short-term rental use must be disclosed separately." },
        { question: "What insurance options should I review for a vacant condo?", answer: "Share the vacancy dates, reason, condition, security arrangements, and any renovation plans. Abraham checks whether the current policy restricts vacant or unoccupied property and reviews available specialty options. The unit and association retain different responsibilities, so a vacant-unit review still needs the master policy and governing documents." },
        { question: "Can I compare Farmers and other insurance options for my condo?", answer: "Yes. He reviews eligible Farmers and additional brokerage options for the unit’s ownership, location, condition, and actual occupancy. Compare interior limits, valuation, water deductibles, liability, assessments, and exclusions alongside price. He confirms the applicable market before presenting a specific option." }
      ]
    },
    es: {
      heading: "El seguro de su condominio debe corresponder a su unidad y su uso.",
      sections: [{ title: "Empiece donde termina la responsabilidad de la asociación.", paragraphs: [
        "La póliza de su unidad y la póliza maestra de la asociación tienen funciones distintas. Abraham revisa declaraciones maestras, documentos de la asociación, mejoras interiores, pertenencias, responsabilidad, cuotas extraordinarias por pérdidas y deducibles. Tener póliza maestra no establece qué gabinetes, pisos, instalaciones o mejoras asegura. Coordinar responsabilidades permite elegir el límite interior con fundamento.",
        "Indique si habita la unidad, la alquila, la usa por temporadas o permanece vacante. Incluya remodelaciones, condiciones de alquiler y duración de la vacancia. Residencia propia, uso por inquilinos y vacancia requieren revisiones distintas. Abraham verifica formulario y mercado según esos datos sin suponer que una póliza sirve para todos los usos."
      ] }],
      questions: [
        { question: "¿Puede ayudarme a asegurar un condominio alquilado a inquilinos?", answer: "Sí. Abraham revisa responsabilidad del arrendador, interiores asegurados, bienes del propietario y pérdida de rentas. Tenga contrato de alquiler, seguro de la asociación y requisitos hipotecarios. Las pertenencias del inquilino requieren su propia cobertura; los alquileres de corto plazo deben declararse por separado." },
        { question: "¿Qué opciones debo revisar para un condominio vacante?", answer: "Comparta fechas, motivo, condición, seguridad y remodelaciones previstas. Abraham comprueba restricciones de vacancia o desocupación de la póliza y revisa opciones especializadas disponibles. La unidad y la asociación conservan responsabilidades distintas; la revisión sigue requiriendo póliza maestra y documentos de la asociación." },
        { question: "¿Puede comparar Farmers con otros mercados para mi condominio?", answer: "Sí. Revisa Farmers y opciones elegibles de corretaje según titularidad, ubicación, condición y ocupación real. Compare límites interiores, valoración, deducibles de agua, responsabilidad, cuotas por pérdidas y exclusiones junto con el precio. Confirma el mercado aplicable antes de presentar una opción específica." }
      ]
    }
  },
  "contractor-insurance": {
    guide: "/education/general-liability-workers-compensation",
    en: {
      heading: "Insurance built around the work you actually perform.",
      sections: [{ title: "A trade name is the beginning of the conversation.", paragraphs: [
        "Abraham reviews the contractor’s trades, residential or commercial projects, subcontracting, heights, equipment, vehicles, employees, and contractual obligations. General liability, workers’ compensation, commercial auto, and tools coverage address different exposures. A certificate documents insurance; it does not replace the contract or show that every operation is covered.",
        "Bring your scope of work, experience, revenue and payroll estimates, contracts, vehicle and equipment schedules, current declarations, and prior claims. New businesses and contractors with gaps in coverage are welcome to request a review. Abraham checks Farmers and additional brokerage routes according to the trade, history, and available underwriting options."
      ] }],
      questions: [
        { question: "What insurance does a contractor need?", answer: "Abraham reviews the work you perform and the policies needed for customer claims, employee injuries, business vehicles, and tools. Describe every trade and subcontracted operation, including work your business performs only occasionally. That information helps identify applicable classifications, exclusions, and contract requirements." },
        { question: "Can a new contractor or a contractor with a coverage gap request a quote?", answer: "Yes. Limited operating history or a gap in prior insurance does not prevent you from contacting Abraham. He reviews your experience and current operations and checks appropriate brokerage markets if the risk does not fit Farmers. Acceptance, effective dates, and required documents are determined by the market reviewing the application." }
      ]
    },
    es: {
      heading: "Seguros revisados según el trabajo que realmente realiza.",
      sections: [{ title: "El nombre del oficio es el inicio de la conversación.", paragraphs: [
        "Abraham revisa oficios, proyectos residenciales o comerciales, subcontratación, alturas, equipo, vehículos, empleados y obligaciones contractuales. Responsabilidad general, compensación laboral, auto comercial y herramientas atienden exposiciones diferentes. Un certificado documenta seguro; no sustituye el contrato ni confirma cobertura de toda operación.",
        "Prepare alcance de trabajo, experiencia, estimaciones de ingresos y nómina, contratos, listas de vehículos y equipo, declaraciones y reclamaciones anteriores. Los negocios nuevos y contratistas con interrupciones de cobertura también pueden solicitar revisión. Abraham verifica Farmers y rutas de corretaje según oficio, historial y opciones de suscripción disponibles."
      ] }],
      questions: [
        { question: "¿Qué seguros necesita un contratista?", answer: "Sí. Revisa su trabajo y las pólizas que atienden reclamaciones de clientes, lesiones de empleados, vehículos y herramientas. Describa todos los oficios y operaciones subcontratadas, incluso los trabajos ocasionales. Esa información ayuda a identificar clasificaciones, exclusiones y requisitos contractuales." },
        { question: "¿Puede cotizar un contratista nuevo o con una interrupción de cobertura?", answer: "Sí. Tener poca antigüedad o una interrupción no impide contactar a Abraham. Revisa experiencia y operaciones actuales y verifica mercados de corretaje apropiados si el riesgo no encaja en Farmers. El mercado que evalúa la solicitud determina aceptación, vigencia y documentos necesarios." }
      ]
    }
  },
  "general-liability-insurance": {
    guide: "/education/commercial-general-liability-limits",
    en: {
      heading: "Protect your business against the claims that can interrupt everything.",
      sections: [{ title: "Tell the whole story of your business.", paragraphs: [
        "Abraham reviews general liability for contractors, restaurants, retail stores, offices, and other businesses against the services actually performed. Products, deliveries, food preparation, customer visits, subcontractors, and specialized treatments can change the review. His salon placement involving chemical straightening and perms illustrates why the actual services matter more than a broad industry label.",
        "A general liability policy is not a replacement for business property, employee injury coverage, commercial auto, or professional liability. Bring contracts, revenue, payroll, operations, prior insurance, and loss information. He compares limits, exclusions, additional-insured requirements, and available forms so the quote reflects your business instead of an incomplete description."
      ] }],
      questions: [
        { question: "Can I purchase general liability by itself?", answer: "Abraham checks this for your business class and selected market. Some options permit stand-alone liability; others require a package or another qualifying commercial policy. He explains the available structure and reviews brokerage alternatives when the Farmers route does not fit. A requirement from one market is not a universal rule for every business." },
        { question: "What information do I need for a business insurance quote?", answer: "Start with your legal business name, address, description of every operation, years of experience, revenue, employees and payroll, prior claims, and current coverage. Include contracts requiring insurance. Abraham uses those facts to identify the right review rather than asking you to select a policy solely by name." },
        { question: "Can you explore brokerage options if my business does not fit Farmers?", answer: "Yes. Abraham reviews the agency’s additional brokerage routes for the actual operation and required coverage. Its commercial directory includes names such as Travelers, The Hartford, Chubb, Liberty Mutual, CNA, USLI, Coterie, Hiscox NOW, and ERGO NEXT. He checks current access, territory, and class eligibility before offering any specific market; not every listed company writes every operation." }
      ]
    },
    es: {
      heading: "Proteja su negocio frente a reclamaciones que pueden interrumpirlo todo.",
      sections: [{ title: "Describa la operación completa de su negocio.", paragraphs: [
        "Abraham revisa responsabilidad general para contratistas, restaurantes, comercios, oficinas y otros negocios según los servicios reales. Productos, entregas, preparación de alimentos, visitas, subcontratistas y tratamientos especializados cambian la revisión. Su colocación para un salón con alisados químicos y permanentes muestra por qué importan los servicios y no solo la categoría comercial.",
        "Responsabilidad general no sustituye propiedad comercial, lesiones de empleados, auto comercial o responsabilidad profesional. Prepare contratos, ingresos, nómina, operaciones, seguros y pérdidas anteriores. Abraham compara límites, exclusiones, requisitos de asegurados adicionales y formularios para que la cotización refleje su negocio completo."
      ] }],
      questions: [
        { question: "¿Puedo comprar solamente responsabilidad civil general?", answer: "Abraham lo verifica según su actividad y mercado. Algunas opciones admiten responsabilidad independiente; otras exigen paquete u otra póliza comercial que cumpla requisitos. Explica la estructura y revisa corretaje si Farmers no encaja. El requisito de un mercado no es una regla universal para todo negocio." },
        { question: "¿Qué información necesito para una cotización comercial?", answer: "Empiece por nombre legal, dirección, operaciones, experiencia, ingresos, empleados, nómina, reclamaciones y cobertura actual. Incluya contratos que exijan seguro. Abraham usa esos datos para orientar la revisión sin pedirle elegir una póliza únicamente por su nombre." },
        { question: "¿Revisa corretaje si mi negocio no encaja en Farmers?", answer: "Sí. Abraham revisa rutas adicionales según operación y cobertura. El directorio comercial incluye Travelers, The Hartford, Chubb, Liberty Mutual, CNA, USLI, Coterie, Hiscox NOW y ERGO NEXT. Verifica acceso actual, territorio y elegibilidad antes de ofrecer un mercado; no todas las compañías enumeradas aseguran cada operación." }
      ]
    }
  },
  "workers-compensation-insurance": {
    guide: "/education/workers-compensation-california",
    en: {
      heading: "Protect your employees and keep your payroll story accurate.",
      sections: [{ title: "The job your employee performs matters.", paragraphs: [
        "Workers’ compensation addresses covered work-related employee injuries and illnesses. Abraham reviews the duties behind each payroll classification, owner or officer status, subcontractor arrangements, prior losses, and estimated payroll. A low estimate that does not match the operation can produce a difficult audit adjustment later.",
        "Bring payroll by job duty, employee locations, ownership information, subcontractor records, and any experience modification or loss runs available. The agency directory lists workers’ compensation markets including AmTrust, Employers, The Hartford, Travelers, Liberty Mutual, CNA, and BerkleyNet. Abraham checks the eligible route and explains insurer requirements before the application proceeds."
      ] }],
      questions: [
        { question: "Do I need both workers’ compensation and commercial auto insurance?", answer: "Yes. He reviews employee duties and business driving together while keeping each policy’s role clear. Workers’ compensation addresses eligible employee injury benefits; commercial auto addresses the vehicle-related liability and selected physical damage. Confirm the business entities, employees, vehicles, and operations are described consistently across the applications." },
        { question: "Why did my workers’ compensation bill change after the audit?", answer: "The audit compares the estimates used at the start with actual payroll and work. Abraham helps align estimates and classifications with the work performed and explains the records to keep. The insurer calculates the final premium from actual exposure, classifications, rates, and policy terms. Report payroll or operational changes during the term rather than waiting for the audit." }
      ]
    },
    es: {
      heading: "Proteja a sus empleados con una nómina que refleje el trabajo real.",
      sections: [{ title: "Las funciones del empleado importan.", paragraphs: [
        "Compensación laboral atiende lesiones y enfermedades de trabajo cubiertas. Abraham revisa funciones de cada clasificación, situación de propietarios o directivos, subcontratistas, pérdidas anteriores y nómina estimada. Una estimación baja que no corresponde a la operación puede causar un ajuste importante después de la auditoría.",
        "Prepare nómina por función, ubicaciones de empleados, titularidad, registros de subcontratistas y modificador de experiencia o historial de pérdidas disponible. El directorio incluye AmTrust, Employers, The Hartford, Travelers, Liberty Mutual, CNA y BerkleyNet. Abraham verifica la ruta elegible y explica requisitos antes de continuar la solicitud."
      ] }],
      questions: [
        { question: "¿Puede revisar compensación laboral y auto comercial conjuntamente?", answer: "Sí. Revisa funciones y conducción comercial manteniendo clara la función de cada póliza. Compensación laboral atiende beneficios elegibles por lesiones de empleados; auto comercial atiende responsabilidad vehicular y daños físicos seleccionados. Entidades, empleados, vehículos y operaciones deben describirse coherentemente en las solicitudes." },
        { question: "¿Por qué cambió mi factura después de la auditoría de compensación laboral?", answer: "La auditoría compara las estimaciones iniciales con la nómina y el trabajo reales. Abraham ayuda a alinear estimaciones y clasificaciones con el trabajo y explica qué registros conservar. La aseguradora calcula la prima final según exposición real, clasificaciones, tarifas y contrato. Informe cambios de nómina u operaciones durante la vigencia sin esperar a la auditoría." }
      ]
    }
  },
  "commercial-auto-insurance": {
    guide: "/education/commercial-auto-california",
    en: {
      heading: "Keep the vehicles that move your business in the coverage review.",
      sections: [{ title: "Match the policy to the vehicle’s actual work.", paragraphs: [
        "A delivery route, a service truck carrying tools, and employee use of a personal car raise different questions. Abraham reviews ownership, drivers, vehicle type, garaging, operating radius, deliveries, towing, and contracts. He checks liability limits, selected physical damage, and hired or non-owned auto needs against the operation.",
        "Bring VINs, vehicle values, driver information through a secure channel, current declarations, loss history, and your scope of work. The commercial-auto directory includes Progressive and Berkshire Hathaway Homestate Companies alongside other listed routes. Abraham checks the vehicle and business class before presenting a specific option. Equipment carried in the truck needs a separate property-coverage review."
      ] }],
      questions: [
        { question: "How do I compare commercial auto insurance for my business?", answer: "Share how each vehicle earns its place in the business, who owns and drives it, and where it travels. He reviews eligible Farmers and brokerage options, coordinating vehicle liability with the business’s other policies. Tell him about delivery, rental, for-hire, towing, or unusual vehicle use before the quote is prepared." },
        { question: "Does insurance cover tools stolen from my work truck?", answer: "Abraham checks the auto policy’s treatment of equipment and reviews inland marine or tools coverage for portable property. A damaged truck, stolen tools, and injury to someone else involve different coverage questions, even when they arise from the same job." }
      ]
    },
    es: {
      heading: "Incluya los vehículos que impulsan su negocio en la revisión.",
      sections: [{ title: "Ajuste la póliza al trabajo real del vehículo.", paragraphs: [
        "Una ruta de entregas, una camioneta con herramientas y el auto personal de un empleado plantean preguntas distintas. Abraham revisa titularidad, conductores, tipo de vehículo, garaje, radio de operación, entregas, remolque y contratos. Comprueba límites, daños físicos seleccionados y necesidad de autos alquilados o no propios.",
        "Prepare VIN, valores, información de conductores por un canal seguro, declaraciones, pérdidas y operaciones. El directorio de auto comercial incluye Progressive y Berkshire Hathaway Homestate Companies, además de otras rutas. Abraham verifica vehículo y actividad antes de presentar una opción. El equipo transportado requiere revisión separada de bienes."
      ] }],
      questions: [
        { question: "¿Puede Abraham comparar opciones de auto comercial?", answer: "Sí. Comparta función, titularidad, conductores y recorridos de cada vehículo. Revisa Farmers y opciones elegibles de corretaje y coordina responsabilidad vehicular con las otras pólizas. Declare entregas, alquiler, transporte por cuenta de terceros, remolque o usos especiales antes de preparar la cotización." },
        { question: "¿Asegurar la camioneta también asegura las herramientas?", answer: "Abraham comprueba cómo la póliza de auto trata el equipo y revisa inland marine o herramientas para bienes portátiles. Un vehículo dañado, herramientas robadas y lesiones a terceros plantean preguntas de cobertura diferentes aunque surjan del mismo trabajo." }
      ]
    }
  },
  "business-owners-policy": {
    guide: "/education/business-owners-policy-property-income",
    en: {
      heading: "Protect the place, the operation, and the income you depend on.",
      sections: [{ title: "A package needs to fit the business inside the building.", paragraphs: [
        "A businessowners policy, or BOP, combines specified property and liability protections for eligible businesses. Abraham reviews restaurants, retailers, and offices according to their actual operations. Food preparation and spoilage concerns differ from inventory theft or damage to office equipment. A business category alone does not settle the required limits and endorsements.",
        "Review tenant improvements, equipment, stock, customer exposures, income, extra expense, and restoration time. Bring your lease and lender or landlord insurance requirements. Workers’ compensation, commercial auto, professional liability, and other exposures need their own review. Abraham explains what the proposed package includes and what must be addressed separately."
      ] }],
      questions: [
        { question: "What insurance should a restaurant, retail store, or professional office review?", answer: "Start with liability, property, and income protection, then review employees, vehicles, and specialized operations. Restaurants should describe cooking, delivery, alcohol, and equipment. Retailers should explain products and inventory. Offices should describe professional services and data handling. Abraham uses those details to review a BOP, separate policies, or brokerage routes." },
        { question: "Does business income coverage replace every dollar while I am closed?", answer: "The policy determines the covered trigger, limit, waiting period, restoration period, and required records. Abraham reviews your revenue and expenses against those provisions. Closure alone does not establish coverage; a utility interruption, covered property loss, or other event must meet the specific contract terms." }
      ]
    },
    es: {
      heading: "Proteja el local, la operación y los ingresos de los que depende.",
      sections: [{ title: "El paquete debe corresponder al negocio dentro del edificio.", paragraphs: [
        "Una póliza para dueños de negocio, o BOP, combina protecciones específicas de bienes y responsabilidad para negocios elegibles. Abraham revisa restaurantes, comercios y oficinas según sus operaciones. Preparación de alimentos y deterioro de productos plantean necesidades distintas del robo de inventario o daños a equipo de oficina. La categoría no determina por sí sola límites y endosos.",
        "Revise mejoras del inquilino, equipo, inventario, clientes, ingresos, gastos adicionales y tiempo de recuperación. Tenga contrato de arrendamiento y requisitos del prestamista o propietario. Compensación laboral, auto comercial y responsabilidad profesional requieren revisión propia. Abraham explica qué incluye el paquete y qué debe atenderse por separado."
      ] }],
      questions: [
        { question: "¿Qué seguros debe revisar un restaurante, comercio u oficina profesional?", answer: "Empiece por responsabilidad, bienes e ingresos y revise empleados, vehículos y actividades especiales. Restaurantes: cocina, entregas, alcohol y equipo. Comercios: productos e inventario. Oficinas: servicios profesionales y datos. Abraham usa esos detalles para revisar BOP, pólizas separadas o corretaje." },
        { question: "¿La cobertura de ingresos reemplaza todo mientras el negocio está cerrado?", answer: "La póliza determina causa cubierta, límite, espera, plazo de recuperación y registros. Abraham compara ingresos y gastos con esas disposiciones. Estar cerrado no establece cobertura: la interrupción de servicios, daño a bienes u otro evento debe cumplir las condiciones del contrato." }
      ]
    }
  },
  "commercial-property-insurance": {
    guide: "/education/business-owners-policy-property-income",
    en: {
      heading: "Give your building and business property a value-based review.",
      sections: [{ title: "The building limit is only one part of the decision.", paragraphs: [
        "Abraham reviews commercial buildings, tenant improvements, equipment, inventory, and income exposure with the ownership and occupancy clearly identified. A property leased to others, an owner-occupied office, and a restaurant building present different risks. Tell him about each tenant, vacancy, renovation, construction detail, and building-system update.",
        "Bring replacement-value information, building details, leases, loss history, and lender requirements. Compare valuation, coinsurance, deductibles, covered causes of loss, ordinance or law, and income-related protection. Coinsurance provisions can reduce a claim payment when the insured value does not meet the contract’s requirement. Reviewing values before a loss helps you make a more informed decision."
      ] }],
      questions: [
        { question: "How do I insure a commercial building with different types of tenants?", answer: "Provide the tenant list, each operation, occupied area, lease responsibilities, and any vacancies. Abraham reviews how occupancy affects the available market, liability, and property terms. He checks Farmers and appropriate brokerage routes rather than assuming every commercial building fits the same program." },
        { question: "What if the building or business does not fit a standard market?", answer: "Abraham reviews additional brokerage options and explains the proposed insurer, policy form, limits, deductibles, exclusions, and requirements. The goal is a policy that fits the work, not just a document showing insurance. He identifies what the offer addresses and what remains outside its terms." }
      ]
    },
    es: {
      heading: "Revise el valor y la protección de su edificio y bienes comerciales.",
      sections: [{ title: "El límite del edificio es solo una parte de la decisión.", paragraphs: [
        "Abraham revisa edificios, mejoras del inquilino, equipo, inventario e ingresos con titularidad y ocupación claras. Un inmueble arrendado, una oficina propia y un restaurante presentan riesgos distintos. Describa inquilinos, vacancia, obras, construcción y actualizaciones de sistemas.",
        "Prepare valores de reemplazo, características, contratos, pérdidas y requisitos hipotecarios. Compare valoración, coaseguro, deducibles, causas cubiertas, ordenanzas e ingresos. El coaseguro puede reducir el pago de una reclamación cuando el valor asegurado no cumple el porcentaje exigido por el contrato. Revisar valores antes de una pérdida permite decidir con más información."
      ] }],
      questions: [
        { question: "¿Puede revisar un edificio comercial con distintos tipos de inquilinos?", answer: "Sí. Proporcione lista de inquilinos, actividad, área ocupada, responsabilidades del arrendamiento y vacancias. Abraham revisa cómo afectan mercado, responsabilidad y condiciones de bienes. Verifica Farmers y corretaje apropiado sin suponer que todos los edificios encajan en el mismo programa." },
        { question: "¿Qué ocurre si el edificio o negocio no encaja en un mercado estándar?", answer: "Abraham revisa corretaje y explica aseguradora propuesta, formulario, límites, deducibles, exclusiones y requisitos. Un mercado alternativo representa una decisión específica de cobertura. Identifica qué atiende la oferta y qué queda fuera de sus condiciones." }
      ]
    }
  },
  "life-insurance": {
    guide: "/education/life-insurance-needs-california",
    en: {
      heading: "Protect the people who depend on the life you are building.",
      sections: [
        { title: "Income protection and a home your family can keep.", paragraphs: ["Abraham reviews the income your household would lose, mortgage and other debts, education goals, caregiving, savings, and existing life insurance. The goal is to connect a benefit and funding plan with expenses your family would face. Life insurance intended to help beneficiaries pay a mortgage is different from private mortgage insurance that protects a lender. Beneficiaries use proceeds according to the policy and ownership arrangement."] },
        { title: "Term and permanent coverage serve different timelines.", paragraphs: ["Term insurance covers a specified period, such as years when children depend on your income or a mortgage remains outstanding. Permanent insurance is designed for longer-term protection and can include cash value, subject to required funding and contract terms. Abraham compares affordability, guarantees, nonguaranteed illustrations, charges, and access to money. Loans accrue interest, reduce available benefits, and can create lapse and tax consequences. Keep existing coverage in place until replacement coverage is confirmed and any replacement review is complete."] },
        { title: "A three-generation legacy example, with each role clear.", paragraphs: ["Generation 1: a grandparent considers owning and funding a policy on an adult child, with grandchildren as beneficiaries, after consent, insurable interest, underwriting, and the ownership arrangement are addressed. The owner controls the policy, the insured is the person whose death triggers the benefit, and the beneficiary receives the payment. Those roles are not interchangeable.", "Generation 2: the child remains the insured. Ownership changes only through the chosen arrangement and applicable rules; a grandparent’s death does not automatically make the child the owner or produce a benefit on the child’s life. The owner or trustee remains responsible for policy funding and administration.", "Generation 3: grandchildren named as beneficiaries can receive the death benefit when the insured child dies and the claim meets the contract. Using part of an inheritance for another policy is a new decision requiring a separate application, eligibility review, and funding. One policy does not automatically insure future generations. Abraham coordinates the insurance discussion with your attorney and tax professional for ownership, trusts, gifts, estate, and tax questions."] }
      ],
      questions: [
        { question: "How much life insurance does my family need for income and mortgage payments?", answer: "Abraham reviews who depends on you, the expenses and debts you want addressed, how long protection is needed, and a premium you can sustain. Bring existing coverage and beneficiary information to the appointment. He explains term and permanent options based on those needs rather than starting with a one-size-fits-all benefit." },
        { question: "How does life insurance fit into a three-generation legacy plan?", answer: "The plan connects the policy’s owner, the person insured, and the beneficiaries with the family’s goals. Death benefits are generally excluded from federal income for beneficiaries, subject to exceptions; estate, gift, ownership, transfer, loan, and trust rules are separate questions. Funding must support the policy over time. Abraham explains the insurance terms, while your attorney and tax professional evaluate your individual legal and tax arrangements." }
      ]
    },
    es: {
      heading: "Proteja a quienes dependen de la vida que está construyendo.",
      sections: [
        { title: "Ingresos protegidos y una vivienda que su familia pueda conservar.", paragraphs: ["Abraham revisa ingresos que perdería el hogar, hipoteca, deudas, educación, cuidado familiar, ahorros y seguro de vida existente. Relaciona beneficio y financiamiento con los gastos que enfrentaría su familia. El seguro de vida destinado a ayudar a beneficiarios con la hipoteca es distinto del seguro hipotecario privado que protege al prestamista. Los beneficiarios usan el pago según la póliza y su estructura de titularidad."] },
        { title: "Vida temporal y permanente atienden plazos distintos.", paragraphs: ["Vida temporal cubre un plazo específico, como los años de dependencia de los hijos o de hipoteca pendiente. Vida permanente está diseñada para protección de largo plazo y puede acumular valor en efectivo, sujeta a financiamiento y contrato. Abraham compara presupuesto, garantías, ilustraciones no garantizadas, cargos y acceso al dinero. Los préstamos acumulan intereses, reducen beneficios y pueden causar caducidad y consecuencias fiscales. Mantenga cobertura existente hasta confirmar el reemplazo y completar la revisión correspondiente."] },
        { title: "Ejemplo de legado entre tres generaciones, con funciones claras.", paragraphs: ["Generación 1: un abuelo considera ser titular y financiar una póliza sobre la vida de su hijo adulto, con los nietos como beneficiarios, después de revisar consentimiento, interés asegurable, suscripción y titularidad. El titular controla la póliza; el asegurado es la persona cuyo fallecimiento activa el beneficio; el beneficiario recibe el pago. Son funciones distintas.", "Generación 2: el hijo sigue siendo el asegurado. La titularidad solo cambia mediante el mecanismo elegido y las reglas aplicables. El fallecimiento del abuelo no convierte automáticamente al hijo en titular ni genera el beneficio de una póliza sobre la vida del hijo. El titular o fiduciario conserva responsabilidades de financiamiento y administración.", "Generación 3: los nietos designados reciben el beneficio cuando fallece el hijo asegurado y la reclamación cumple el contrato. Destinar parte de la herencia a otra póliza exige una nueva solicitud, revisión de elegibilidad y financiamiento. Una póliza no asegura automáticamente generaciones futuras. Abraham coordina con su abogado y profesional fiscal las preguntas de titularidad, fideicomisos, donaciones, patrimonio e impuestos."] }
      ],
      questions: [
        { question: "¿Puede ayudarme a elegir seguro de vida para ingresos familiares o hipoteca?", answer: "Sí. Revisa dependientes, gastos, deudas, plazo y una prima sostenible. Tenga información de cobertura y beneficiarios actuales. Explica vida temporal y permanente según esas necesidades sin empezar por un beneficio igual para todas las familias." },
        { question: "¿Cómo encaja el seguro de vida en un plan de legado de tres generaciones?", answer: "El plan relaciona titular, asegurado y beneficiarios con las metas de la familia. Los beneficios por fallecimiento generalmente se excluyen del ingreso federal del beneficiario, con excepciones. Impuestos patrimoniales, donaciones, titularidad, transferencias, préstamos y fideicomisos son preguntas separadas. El financiamiento debe sostener la póliza. Abraham explica el seguro; su abogado y profesional fiscal evalúan su situación individual." }
      ]
    }
  }
};

export const pathwaySources = {
  property: { label: "California Department of Insurance: Residential Insurance", href: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm" },
  commercial: { label: "California Department of Insurance: Commercial Insurance", href: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/commercialguide.cfm" },
  life: { label: "California Department of Insurance: Life Insurance", href: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/07-life/life-ins-guide.cfm" }
};
