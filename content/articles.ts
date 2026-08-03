export type Article = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "home-insurance-deductibles",
    title: "Understanding Home Insurance Deductibles",
    summary: "Learn how flat-dollar and percentage deductibles affect your out-of-pocket cost after a covered loss.",
    body: [
      "A deductible is the portion of a covered property claim you are responsible for before the insurer pays. A higher deductible can reduce premium, but it also increases the amount you must be prepared to pay after a loss.",
      "Some policies use one deductible for most covered losses and separate deductibles for risks such as water, wind, or wildfire. Percentage deductibles are generally calculated from the dwelling coverage limit, not from the amount of the claim.",
      "Compare the actual dollar amount of every deductible with the premium savings. The stronger option is one that remains manageable during a claim while preserving the coverage needed to rebuild or repair the property.",
    ],
  },
  {
    slug: "fair-plan-dic",
    title: "California FAIR Plan and DIC Coverage Explained",
    summary: "Understand how FAIR Plan fire coverage and a Difference in Conditions policy may work together.",
    body: [
      "The California FAIR Plan can provide basic property coverage when traditional insurers are unwilling to insure a property because of wildfire exposure or another underwriting concern. It is designed as an insurer of last resort and is not the same as a comprehensive homeowners policy.",
      "A Difference in Conditions policy may supplement a FAIR Plan policy with coverages such as liability, theft, water damage, loss of use, and other non-fire protections, depending on its terms. The two policies should be reviewed together because coverage, limits, and deductibles may not match automatically.",
      "Eligibility and available coverage vary. Confirm which policy covers each peril, review exclusions, and provide both policies to the lender when the property is financed.",
    ],
  },
  {
    slug: "replacement-cost-market-value",
    title: "Replacement Cost vs. Market Value",
    summary: "Why a home's insurance limit is based on rebuilding cost rather than its sale price.",
    body: [
      "Market value reflects what a buyer may pay for the home and land. Replacement cost estimates what it may cost to rebuild the insured structure with comparable materials and labor after a covered total loss.",
      "Land value, neighborhood demand, demolition, debris removal, building-code requirements, labor, and material costs can cause the two figures to differ substantially. A higher purchase price does not always require the same amount of dwelling coverage, and a lower purchase price does not mean reconstruction will be inexpensive.",
      "Review the replacement-cost estimate for the home's square footage, construction features, finishes, attached structures, and improvements. Update the estimate after major renovations or additions.",
    ],
  },
  {
    slug: "insurance-before-escrow",
    title: "What Realtors Should Know About Insurance Before Escrow",
    summary: "Early insurance review can identify underwriting concerns before they threaten a closing timeline.",
    body: [
      "Insurance availability should be reviewed early, especially for properties in wildfire areas, older homes, unusual construction, prior claims, deferred maintenance, or properties with multiple units and accessory structures.",
      "The insurance professional may need the property address, expected closing date, occupancy, buyer information, lender requirements, and details about the roof, plumbing, electrical system, heating, and prior losses. Starting early provides time to address inspections or underwriting questions.",
      "A quote is not proof that coverage is bound. Escrow should obtain the final evidence of insurance, invoice, effective date, mortgagee information, and confirmation that all binding requirements are complete.",
    ],
  },
  {
    slug: "auto-garaging-address",
    title: "Why Your Auto Garaging Address Matters",
    summary: "Your vehicle's usual overnight location affects rating, underwriting, and accurate policy information.",
    body: [
      "The garaging address is generally where a vehicle is primarily kept overnight. Insurers use it to evaluate factors such as traffic density, theft, vandalism, weather, and claim frequency in that area.",
      "Moving can change the premium even when the vehicle and drivers remain the same. Household composition also matters because insurers commonly evaluate licensed residents and regular vehicle operators when determining exposure.",
      "Report address, driver, vehicle-use, and mileage changes promptly. Accurate information helps prevent coverage disputes, rating corrections, or underwriting problems later.",
    ],
  },
  {
    slug: "general-liability-workers-compensation",
    title: "General Liability vs. Workers' Compensation",
    summary: "These business policies address different risks and are often needed together.",
    body: [
      "General liability insurance commonly addresses third-party bodily injury, property damage, and certain personal or advertising injury claims arising from business operations. It generally does not replace coverage for employee job-related injuries.",
      "Workers' compensation provides benefits for covered employee occupational injuries and illnesses and may include medical care, disability benefits, and employer liability protection. California employers must evaluate their legal obligations carefully when hiring workers.",
      "Payroll, job duties, classifications, subcontractor practices, and ownership structure affect workers' compensation underwriting and audits. Accurate records reduce the risk of unexpected premium adjustments.",
    ],
  },
  {
    slug: "insurance-mortgage-escrow",
    title: "How Insurance Premiums Affect Mortgage Escrow",
    summary: "See how annual insurance costs may be collected as part of a monthly mortgage payment.",
    body: [
      "When a lender escrows insurance, the annual premium is generally incorporated into the amount collected with the mortgage payment. Dividing the annual premium by twelve provides a useful estimate of the ongoing monthly insurance component.",
      "The initial escrow deposit, prepaid premium, lender cushion, policy fees, and timing of renewal bills can make the actual closing figures different from a simple annual-premium calculation. The lender or escrow officer controls the final payment calculation.",
      "Provide updated premiums and invoices promptly when coverage changes. This helps the lender prepare accurate closing disclosures and reduces last-minute funding issues.",
    ],
  },
  {
    slug: "umbrella-insurance",
    title: "Umbrella Insurance: When Additional Liability Protection Matters",
    summary: "An umbrella policy can add liability limits above qualifying home and auto policies.",
    body: [
      "A personal umbrella policy generally provides additional liability protection after the required limits of an underlying home, renters, condo, landlord, or auto policy are exhausted. It may also cover certain claims not addressed by an underlying policy, subject to its terms.",
      "Additional protection can be important for households with income, savings, property, youthful drivers, rental properties, pools, pets, or other exposures that could lead to a serious liability claim.",
      "Umbrella insurers usually require minimum underlying liability limits and disclosure of vehicles, properties, drivers, and other exposures. Review all underlying policies together so the required limits remain in place.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
