import { guideLessons } from "./guide-lessons";

const introductions: Record<string, { en: string; es: string }> = {
  "homeowners-insurance": {
    en: "If a covered fire damages your kitchen, you need to know who pays for the building repairs, your belongings, and the extra cost of living elsewhere. Those are different parts of a home policy. We can compare them alongside the deductible you would pay and the cost to rebuild your particular house—not its sale price.",
    es: "Si un incendio cubierto daña su cocina, necesita saber quién paga reparaciones, pertenencias y el costo adicional de vivir en otro lugar. Son partes distintas de la póliza. Podemos compararlas junto con el deducible que pagaría y el costo de reconstruir su casa, no su precio de venta.",
  },
  "auto-insurance": {
    en: "Start with three questions: what if you injure someone, what if your car is damaged, and what if the responsible driver has no insurance? Liability, collision/comprehensive, and uninsured/underinsured motorist coverage answer different parts of that problem. We can explain each limit in dollars and compare the price of the options available for your drivers and vehicles.",
    es: "Empiece con tres preguntas: ¿y si lesiona a alguien, dañan su auto o el conductor responsable no tiene seguro? Responsabilidad, colisión/integral y conductor sin seguro o con seguro insuficiente responden partes distintas. Podemos explicar cada límite en dólares y comparar opciones disponibles para sus conductores y vehículos.",
  },
  "renters-insurance": {
    en: "The landlord's building insurance does not replace your furniture, clothes, or electronics. A renters policy addresses insured belongings, eligible extra living costs after a covered loss, and certain claims that you injured someone or damaged their property. Start with an inventory, then check the lease's liability requirement and who in the household needs their own coverage.",
    es: "El seguro del edificio no reemplaza sus muebles, ropa o aparatos electrónicos. Una póliza de inquilinos atiende pertenencias aseguradas, gastos adicionales elegibles después de una pérdida cubierta y ciertos reclamos por lesiones o daños que cause a otros. Empiece con un inventario; después revise la responsabilidad exigida en el contrato y quién necesita cobertura en el hogar.",
  },
  "condo-insurance": {
    en: "The association insures some parts of a condo building; you are responsible for others. HO-6 is a common name for the unit-owner policy. Bring the homeowners association (HOA) master policy and its recorded covenants, conditions, and restrictions (CC&Rs), so we can identify the boundary before choosing limits for interiors, improvements, belongings, and eligible assessments.",
    es: "La asociación asegura ciertas partes del condominio; otras le corresponden a usted. HO-6 es un nombre habitual de la póliza del dueño de la unidad. Traiga la póliza maestra de la asociación (HOA) y sus convenios, condiciones y restricciones registrados (CC&R) para identificar responsabilidades antes de elegir límites de interiores, mejoras, pertenencias y cuotas por pérdidas elegibles.",
  },
  "landlord-insurance": {
    en: "A rental home creates two separate concerns: damage to the property you own and claims arising from operating it as a rental. A landlord policy can address those covered risks and eligible rent lost after covered property damage. It is not rent-payment insurance for every missed payment. Tell us about the lease, vacancies, renovations, and any short-term stays before comparing policies.",
    es: "Una casa de alquiler plantea dos preocupaciones: daños a su propiedad y reclamos relacionados con operarla como alquiler. La póliza del arrendador puede atender esos riesgos cubiertos y renta elegible perdida por daños materiales cubiertos. No asegura cualquier pago de renta incumplido. Informe contratos, vacancias, remodelaciones y estancias cortas antes de comparar.",
  },
  "umbrella-insurance": {
    en: "An umbrella adds a layer of liability protection above qualifying policies that pay first, such as home or auto liability. It does not add repair money for your own house or car. We can check the limits you must maintain underneath it and whether every driver, property, and rental has been disclosed and accepted.",
    es: "El seguro paraguas agrega responsabilidad sobre pólizas elegibles que pagan primero, como casa o auto. No agrega dinero para reparar su propia vivienda o vehículo. Podemos revisar los límites base que exige y confirmar que se hayan declarado y aceptado conductores, propiedades y alquileres.",
  },
  "life-insurance": {
    en: "If your family lost your income or the care you provide, what bills would remain? Life insurance planning starts with that question, not a fixed multiple of your salary. We can compare a defined period of term coverage with the longer funding commitment of permanent coverage, then review the benefit, premiums, guarantees, and beneficiaries together.",
    es: "Si su familia perdiera sus ingresos o los cuidados que brinda, ¿qué cuentas quedarían? La planificación de vida empieza allí, no con un múltiplo fijo del salario. Podemos comparar un periodo definido de seguro temporal con el compromiso de pago del permanente y revisar beneficio, primas, garantías y beneficiarios juntos.",
  },
  "earthquake-insurance": {
    en: "Earthquake shaking is a separate coverage question from a typical homeowners claim. The California Earthquake Authority (CEA) and other earthquake options have their own terms. A percentage deductible can mean tens of thousands of dollars, so compare the dollar amount, belongings protection, and temporary-living benefits—not just the annual price.",
    es: "El movimiento sísmico requiere una revisión separada de un reclamo típico de casa. California Earthquake Authority (CEA) y otras opciones tienen condiciones propias. Un deducible porcentual puede representar decenas de miles de dólares; compare su monto real, pertenencias y vivienda temporal, no solo la prima anual.",
  },
  "general-liability-insurance": {
    en: "If a customer is injured at your premises or alleges your work damaged their property, general liability is the policy to examine. It does not replace insurance for employee injuries, business vehicles, or professional mistakes. We can compare covered operations, exclusions, and contract requirements with the actual work your business performs.",
    es: "Si un cliente se lesiona en su local o alega que su trabajo dañó sus bienes, se revisa responsabilidad general. No reemplaza seguro de lesiones laborales, autos comerciales o errores profesionales. Podemos comparar operaciones cubiertas, exclusiones y requisitos contractuales con el trabajo real de su negocio.",
  },
  "workers-compensation-insurance": {
    en: "California businesses with one or more employees must satisfy workers' compensation requirements through insurance or authorized self-insurance. The coverage provides statutory benefits for covered job-related injury or illness. We can help organize duties and payroll for a quote and explain why the final payroll audit can change the premium.",
    es: "Los negocios de California con uno o más empleados deben cumplir requisitos de compensación laboral mediante seguro o autoseguro autorizado. La cobertura brinda beneficios legales por lesiones o enfermedades de trabajo cubiertas. Podemos organizar funciones y nómina para cotizar y explicar por qué la auditoría final puede cambiar la prima.",
  },
  "commercial-auto-insurance": {
    en: "A company van, an employee's personal car used for errands, and a rented truck raise different insurance questions. Commercial auto must match vehicle ownership and actual use. We can identify which vehicles receive liability or damage protection and review hired and non-owned auto coverage for vehicles the business does not own.",
    es: "Una camioneta de la empresa, el auto personal de un empleado usado para mandados y un camión rentado plantean preguntas distintas. El seguro debe coincidir con titularidad y uso real. Podemos identificar qué vehículos reciben responsabilidad o daños y revisar autos contratados y no propios para los que la empresa no posee.",
  },
  "business-owners-policy": {
    en: "A business owners policy (BOP) packages property and liability for eligible businesses. If a covered fire closes your shop, replacing damaged stock is different from addressing lost income and continuing bills. We can review those coverage parts separately and identify which add-ons your operation needs instead of assuming the package includes everything.",
    es: "Una póliza para dueños de negocio (BOP) reúne propiedad y responsabilidad para empresas elegibles. Si un incendio cubierto cierra su tienda, reemplazar mercancía no es lo mismo que atender ingresos perdidos y cuentas continuas. Podemos revisar esas partes e identificar opciones necesarias sin suponer que el paquete incluye todo.",
  },
  "commercial-property-insurance": {
    en: "Think beyond the building: equipment, stock, tenant improvements, and the time needed to reopen all affect the loss your business could face. Property coverage and business income have different limits and conditions. We can compare a current inventory with the policy's valuation rules and a realistic restoration timeline.",
    es: "Piense más allá del edificio: equipo, mercancía, mejoras del inquilino y tiempo para reabrir afectan la pérdida del negocio. Propiedad e ingresos tienen límites y condiciones diferentes. Podemos comparar un inventario actual con las reglas de valoración y un plazo realista de restauración.",
  },
  "contractor-insurance": {
    en: "A customer injury, an injured employee, stolen tools, and a work-truck accident do not belong to one interchangeable policy. Contractor coverage coordinates those exposures with the actual trades and jobs. Send the contract and work description so we can review insurance requirements, additional-insured endorsements, and coverage for completed work; a certificate alone does not add protection.",
    es: "Una lesión de cliente, un empleado lesionado, herramientas robadas y un choque de trabajo no corresponden a una sola póliza intercambiable. El seguro de contratista coordina exposiciones con oficios y proyectos reales. Envíe contrato y descripción para revisar requisitos, endosos de asegurado adicional y trabajos terminados; una constancia sola no agrega cobertura.",
  },
  "cyber-professional-liability": {
    en: "A data breach and an allegation that your advice cost a client money are different problems. Cyber coverage addresses specified digital incidents; professional liability, or errors and omissions, addresses covered professional-service claims. We can compare response costs, client claims, reporting dates, exclusions, and the security controls the insurer expects you to maintain.",
    es: "Una filtración de datos y la alegación de que su asesoría causó una pérdida son problemas distintos. Cibernética atiende incidentes digitales específicos; responsabilidad profesional, o errores y omisiones, atiende reclamos cubiertos por servicios. Podemos comparar costos de respuesta, reclamos de clientes, fechas, exclusiones y controles de seguridad exigidos.",
  },
};

export function serviceExplanation(slug: string, guideSlug: string, locale: "en" | "es") {
  const intro = introductions[slug]?.[locale];
  const lesson = guideLessons[guideSlug]?.[locale];
  return intro && lesson ? { intro, limits: lesson.limits } : {};
}
