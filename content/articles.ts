export type Article = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  category?: "Personal" | "Commercial" | "Wildfire & Catastrophe" | "Real Estate" | "General";
  quickFacts?: string[];
  commonLimits?: string;
  officialResources?: { label: string; url: string }[];
  relatedSlugs?: string[];
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
{
  "slug": "california-auto-liability-limits",
  "title": "California Auto Liability Limits: Minimum vs. Meaningful Protection",
  "category": "Personal",
  "summary": "Compare California's legal minimum 30/60/15 limits with more protective options for income, assets, and serious accidents.",
  "quickFacts": [
    "California's minimum is $30,000/$60,000 bodily injury and $15,000 property damage.",
    "The state minimum is a legal floor, not a recommendation for every household.",
    "Limits should reflect vehicles, income, assets, drivers, and umbrella requirements."
  ],
  "commonLimits": "Legal minimum: 30/60/15. A common protection-focused starting point is 100/300/100; households with greater assets or umbrella plans often review 250/500/100 or higher.",
  "body": [
    "Liability coverage pays covered claims when an insured driver is legally responsible for injuring someone or damaging property. California increased its private-passenger minimum limits to $30,000 per person, $60,000 per accident, and $15,000 for property damage.",
    "Minimum limits can be exhausted quickly by hospital treatment, lost income, multiple injured people, or damage to a newer vehicle. Amounts above the policy limit may become the driver's responsibility.",
    "A limit review should consider household income, savings, home ownership, youthful drivers, vehicle use, and any umbrella requirements. Higher limits cost more but provide a larger buffer against severe claims."
  ],
  "officialResources": [
    {
      "label": "California DMV insurance requirements",
      "url": "https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/"
    },
    {
      "label": "California Department of Insurance auto resources",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/1-auto/"
    }
  ]
},
{
  "slug": "uninsured-underinsured-motorist-california",
  "title": "Uninsured and Underinsured Motorist Coverage in California",
  "category": "Personal",
  "summary": "Understand how UM/UIM can protect your household when an at-fault driver has too little—or no—insurance.",
  "quickFacts": [
    "UM/UIM addresses covered injuries caused by uninsured or underinsured drivers.",
    "Uninsured-motorist property-damage rules differ from collision coverage.",
    "Matching UM/UIM to bodily-injury limits is a strong comparison point where available."
  ],
  "commonLimits": "Common selections are 100/300 or 250/500. A protection-focused approach is to compare UM/UIM at the same level as your bodily-injury liability limit, subject to carrier rules.",
  "body": [
    "Uninsured motorist coverage can respond when a covered person is injured by a driver with no liability insurance. Underinsured motorist coverage may apply when the at-fault driver's limit is insufficient for the covered damages.",
    "California policies and carrier forms differ, particularly for property damage, deductibles, stacking, and who qualifies as an insured. Collision coverage may still be important for vehicle damage.",
    "Review every household driver, regular passenger exposure, medical-insurance deductibles, income, and liability limits. Rejecting or reducing UM/UIM can materially shift accident risk back to the household."
  ],
  "officialResources": [
    {
      "label": "California Department of Insurance auto resources",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/1-auto/"
    }
  ]
},
{
  "slug": "comprehensive-collision-deductibles",
  "title": "Comprehensive, Collision, and Auto Deductibles",
  "category": "Personal",
  "summary": "See what physical-damage coverage protects and how $500 and $1,000 deductibles affect premium and claim costs.",
  "quickFacts": [
    "Collision addresses covered impact losses; comprehensive generally addresses covered non-collision losses.",
    "Lenders and lessors commonly require both coverages.",
    "The deductible applies separately to each covered claim."
  ],
  "commonLimits": "$500 and $1,000 deductibles are common. Choose an amount you could pay promptly after a loss; compare the premium difference before increasing it.",
  "body": [
    "Collision coverage generally addresses covered damage from impact with another vehicle or object. Comprehensive coverage commonly addresses theft, vandalism, falling objects, animal strikes, glass, and certain weather losses, subject to the contract.",
    "A higher deductible can reduce premium but increases the amount due after each covered claim. The vehicle's value, loan balance, repair costs, and available emergency savings should guide the choice.",
    "Older vehicles still require an economic review rather than an automatic removal of coverage. Compare annual savings with the vehicle's actual cash value and the household's ability to replace it."
  ],
  "officialResources": [
    {
      "label": "California Department of Insurance auto resources",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/1-auto/"
    }
  ]
},
{
  "slug": "california-homeowners-coverage-limits",
  "title": "California Homeowners Coverage Limits: What to Review",
  "category": "Personal",
  "summary": "A practical guide to dwelling, personal property, liability, loss of use, and California reconstruction concerns.",
  "quickFacts": [
    "Dwelling coverage should follow estimated reconstruction cost, not sale price.",
    "Code-upgrade, extended replacement cost, and debris-removal provisions can materially affect a total loss.",
    "Home inventory and high-value property limits deserve separate review."
  ],
  "commonLimits": "Dwelling: insurer replacement-cost estimate. Liability: $300,000–$500,000 is commonly reviewed. Water backup: often $10,000–$25,000. Deductibles: commonly $1,000–$5,000 or a percentage in higher-risk placements.",
  "body": [
    "California rebuilding costs can be affected by labor shortages, debris removal, permitting, building-code upgrades, access, slope, and demand after a regional catastrophe. The dwelling limit should be supported by an accurate reconstruction estimate.",
    "Personal property, loss of use, other structures, and liability are separate coverage parts. Jewelry, collectibles, water backup, service lines, home businesses, pools, and accessory structures may need endorsements or specific limits.",
    "Review the replacement-cost estimate after renovations and compare all deductibles in actual dollars. Wildfire-exposed properties may require a FAIR Plan and companion DIC structure instead of one standard homeowners policy."
  ],
  "officialResources": [
    {
      "label": "CDI residential coverage comparison tool",
      "url": "https://interactive.web.insurance.ca.gov/apex/f?p=143:1"
    },
    {
      "label": "California Department of Insurance homeowners resources",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/5-residential/"
    }
  ]
},
{
  "slug": "renters-insurance-california",
  "title": "Renters Insurance in California",
  "category": "Personal",
  "summary": "Protect belongings, temporary living expenses, and liability that a landlord's policy generally does not cover.",
  "quickFacts": [
    "A landlord's policy generally does not insure a tenant's belongings.",
    "Loss-of-use coverage can help with eligible temporary living costs.",
    "Roommates are not automatically insured unless the policy says so."
  ],
  "commonLimits": "Personal property commonly starts around $25,000–$50,000. Liability commonly starts at $100,000, with $300,000 often reviewed for stronger protection.",
  "body": [
    "Renters insurance typically combines personal property, additional living expense, and personal liability coverage. The building owner's policy generally protects the structure—not the tenant's furniture, clothing, electronics, or liability.",
    "Replacement-cost settlement can provide stronger protection than actual cash value because depreciation is not applied in the same way, subject to policy terms. Jewelry, bicycles, collectibles, and business equipment may have special limits.",
    "Choose personal-property coverage using a room-by-room inventory. Review liability exposure from pets, guests, water damage, and daily activities, and confirm every resident who needs coverage is properly listed."
  ],
  "officialResources": [
    {
      "label": "CDI homeowners, renters, and condo comparison tool",
      "url": "https://interactive.web.insurance.ca.gov/apex/f?p=143:1"
    }
  ]
},
{
  "slug": "condo-insurance-california",
  "title": "California Condo Insurance and HOA Gaps",
  "category": "Personal",
  "summary": "Coordinate HO-6 coverage with the HOA master policy for interiors, loss assessment, belongings, and liability.",
  "quickFacts": [
    "The HOA master policy and CC&Rs determine what the unit owner must insure.",
    "Loss assessment coverage has conditions and sublimits.",
    "Interior upgrades may require more building-property coverage than a basic quote provides."
  ],
  "commonLimits": "Building property should match the owner's responsibility under the master policy and CC&Rs. Liability of $300,000–$500,000 and loss assessment of $25,000–$50,000 are commonly reviewed.",
  "body": [
    "Condo insurance must be coordinated with the HOA master policy. Some associations insure portions of the interior; others leave drywall, flooring, cabinets, fixtures, and improvements to the unit owner.",
    "Loss assessment coverage may help with certain assessments arising from covered losses or liability claims, but deductibles and exclusions apply. It does not cover every HOA assessment.",
    "Obtain the master policy declarations and relevant CC&R insurance language. Review interior replacement cost, belongings, temporary living expenses, water deductibles, liability, and any rental or business use."
  ],
  "officialResources": [
    {
      "label": "CDI homeowners, renters, and condo comparison tool",
      "url": "https://interactive.web.insurance.ca.gov/apex/f?p=143:1"
    }
  ]
},
{
  "slug": "landlord-insurance-california",
  "title": "California Landlord Insurance: Coverage and Limits",
  "category": "Personal",
  "summary": "Review dwelling, landlord contents, loss of rents, premises liability, and tenant-related exposures.",
  "quickFacts": [
    "A homeowners policy is generally not designed for a tenant-occupied property.",
    "Loss-of-rents coverage requires a covered loss and is subject to time and dollar limits.",
    "Vacancy, short-term rental, and renovation exposures require specific underwriting."
  ],
  "commonLimits": "Dwelling: current reconstruction estimate. Premises liability: $500,000–$1 million is commonly reviewed. Loss of rents: often 12 months or the carrier's available limit.",
  "body": [
    "Landlord policies are designed around a non-owner-occupied dwelling and can include building coverage, landlord-owned contents, fair rental value or loss of rents, and premises liability.",
    "Tenant belongings are not covered by the landlord's policy. Requiring renters insurance can improve risk transfer, but the lease requirement does not replace accurate landlord coverage.",
    "Confirm occupancy, number of units, leases, renovations, vacancy, short-term rental activity, pools, pets, property management, and ownership entity. These details affect eligibility and policy form."
  ],
  "officialResources": [
    {
      "label": "California Department of Insurance residential resources",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/5-residential/"
    }
  ]
},
{
  "slug": "life-insurance-needs-california",
  "title": "Life Insurance Needs: Term, Permanent, and Benefit Amounts",
  "category": "Personal",
  "summary": "Estimate protection for income replacement, debts, education, final expenses, and family goals.",
  "quickFacts": [
    "Term insurance provides coverage for a defined period.",
    "Permanent coverage may provide lifetime protection if funded and maintained as required.",
    "Beneficiaries and ownership should be reviewed after major life changes."
  ],
  "commonLimits": "There is no California-prescribed recommended amount. A common starting calculation is 7–10 times annual income, then adjust for debts, mortgage, education, existing assets, and survivor income.",
  "body": [
    "Life insurance needs are personal. A useful analysis starts with income replacement, mortgage and debt payoff, education funding, final expenses, caregiving needs, and the resources already available to survivors.",
    "Term insurance can provide a larger death benefit for a defined period at a lower initial premium. Permanent products may add lifetime coverage and cash-value features but require a longer funding and performance review.",
    "Compare guarantees, non-guaranteed values, premium duration, conversion options, ownership, and beneficiaries. Replacement of an existing policy requires particular care because new surrender charges and contestability periods may apply."
  ],
  "officialResources": [
    {
      "label": "CDI Life Insurance and Annuities guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/07-life/upload/Life-Insurance-and-Annuities-Updated-073123.pdf"
    }
  ]
},
{
  "slug": "earthquake-insurance-retrofit-discounts",
  "title": "CEA Earthquake Coverage and Retrofit Discounts",
  "category": "Wildfire & Catastrophe",
  "summary": "Understand separate earthquake coverage, percentage deductibles, CEA options, and retrofit resources that may reduce risk and premium.",
  "quickFacts": [
    "Standard homeowners policies generally exclude earthquake shaking damage.",
    "CEA policies offer selectable coverages and percentage deductibles.",
    "Qualifying retrofits may reduce damage and may qualify for premium discounts."
  ],
  "commonLimits": "Dwelling generally follows the companion residential policy. CEA deductible options commonly range from 5% to 25%, depending on coverage and eligibility. Compare personal property and loss-of-use selections separately.",
  "body": [
    "Earthquake coverage is separate from standard homeowners insurance. CEA coverage is sold through participating residential insurers and should be reviewed for dwelling, personal property, loss of use, building-code upgrade, and deductible structure.",
    "A percentage deductible can represent a substantial dollar amount because it is based on the insured dwelling limit. Compare the actual dollar deductible, premium, retrofit status, and ability to finance repairs after a major earthquake.",
    "Qualifying foundation bolting and cripple-wall bracing may reduce structural damage. Current grants, eligibility, and discount rules change, so homeowners should verify requirements before permits or work begin."
  ],
  "officialResources": [
    {
      "label": "California Earthquake Authority coverage",
      "url": "https://www.earthquakeauthority.com/"
    },
    {
      "label": "CEA premium discounts",
      "url": "https://www.earthquakeauthority.com/california-earthquake-insurance-policies/earthquake-insurance-policy-premium-discounts"
    },
    {
      "label": "Earthquake Brace + Bolt grants",
      "url": "https://www.earthquakebracebolt.com/"
    }
  ]
},
{
  "slug": "wildfire-readiness-home-hardening",
  "title": "Wildfire Readiness, Home Hardening, and Insurance Discounts",
  "category": "Wildfire & Catastrophe",
  "summary": "Use California readiness resources to reduce ember, structure, defensible-space, and evacuation risk.",
  "quickFacts": [
    "Embers can ignite homes well ahead of the flame front.",
    "The first five feet around a structure deserve special attention.",
    "California's Safer from Wildfires framework identifies mitigation actions tied to insurance discounts."
  ],
  "commonLimits": "Readiness is not an insurance limit. Pair mitigation with an annual dwelling reconstruction review, adequate loss of use, code-upgrade coverage, and a deductible you can fund.",
  "body": [
    "Wildfire readiness combines structure hardening, defensible space, property maintenance, evacuation planning, and accurate insurance documentation. Roofs, vents, eaves, windows, decks, fences, vegetation, and debris are common focus areas.",
    "California's Safer from Wildfires framework addresses the structure, immediate surroundings, and community. Insurer credits vary, and documentation or inspection may be required.",
    "Maintain a home inventory, store policy documents securely, photograph improvements, and review reconstruction and loss-of-use limits before fire season. Mitigation improves resilience but does not guarantee eligibility or prevent every loss."
  ],
  "officialResources": [
    {
      "label": "CAL FIRE Ready for Wildfire",
      "url": "https://www.readyforwildfire.org/"
    },
    {
      "label": "CAL FIRE home hardening guide",
      "url": "https://www.readyforwildfire.org/prepare-for-wildfire/hardening-your-home/"
    },
    {
      "label": "CDI Safer from Wildfires discounts",
      "url": "https://www.insurance.ca.gov/01-consumers/200-wrr/Safer-from-Wildfires.cfm"
    },
    {
      "label": "California FAIR Plan",
      "url": "https://www.cfpnet.com/"
    }
  ]
},
{
  "slug": "commercial-general-liability-limits",
  "title": "Commercial General Liability Limits for California Businesses",
  "category": "Commercial",
  "summary": "Understand occurrence, aggregate, products-completed operations, contracts, and common $1M/$2M limits.",
  "quickFacts": [
    "GL addresses covered third-party injury, property damage, and certain personal or advertising injury.",
    "Contracts may require specific limits and additional-insured wording.",
    "Professional, auto, employee injury, and cyber risks generally need separate coverage."
  ],
  "commonLimits": "$1 million per occurrence / $2 million aggregate is common for small businesses. Higher limits or an umbrella may be appropriate for contracts, premises traffic, products, construction, or larger revenue.",
  "body": [
    "Commercial general liability is foundational but not all-inclusive. It commonly addresses covered third-party bodily injury, property damage, and certain personal or advertising injury claims.",
    "The occurrence limit and general aggregate work differently. Products-completed operations, damage to rented premises, medical payments, deductibles, and exclusions should be reviewed with contracts and operations.",
    "Describe all work accurately, including subcontracting, height, excavation, hot work, products, geographic territory, and additional-insured requirements. Undisclosed operations can create underwriting and claim problems."
  ],
  "officialResources": [
    {
      "label": "CDI commercial liability information",
      "url": "https://www.insurance.ca.gov/0100-consumers/0060-information-guides/0040-commercial/commercial-liability.cfm"
    },
    {
      "label": "CDI Commercial Insurance guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/upload/IG-Commercial-Insurance-Updated-061524.pdf"
    }
  ]
},
{
  "slug": "business-owners-policy-property-income",
  "title": "Business Owners Policies, Property, and Business Income",
  "category": "Commercial",
  "summary": "See how eligible businesses can combine liability, property, and income protection—and where gaps remain.",
  "quickFacts": [
    "A BOP typically packages property and liability for eligible businesses.",
    "Business income generally requires direct covered physical loss unless endorsed otherwise.",
    "Equipment breakdown, water, flood, earthquake, and cyber require separate review."
  ],
  "commonLimits": "Property should follow a current replacement-cost inventory. Business income is often evaluated for at least 12 months; $1M/$2M liability is common, subject to the operation and contracts.",
  "body": [
    "A business owners policy can combine commercial property and general liability for eligible small and midsize operations. Eligibility depends on industry, revenue, square footage, payroll, property values, and loss history.",
    "Property schedules should capture tenant improvements, furniture, inventory, tools, equipment, outdoor property, signs, and property off premises. Business-income limits should reflect the time needed to resume operations.",
    "Review equipment breakdown, utility interruption, spoilage, ordinance or law, water, crime, hired and non-owned auto, cyber, earthquake, and flood rather than assuming they are automatically included."
  ],
  "officialResources": [
    {
      "label": "CDI Commercial Insurance guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/upload/IG-Commercial-Insurance-Updated-061524.pdf"
    }
  ]
},
{
  "slug": "workers-compensation-california",
  "title": "California Workers’ Compensation Requirements and Audits",
  "category": "Commercial",
  "summary": "Understand mandatory employee protection, classifications, payroll estimates, audits, and employer liability.",
  "quickFacts": [
    "California employers generally must carry workers' compensation when they have employees.",
    "Premium is commonly based on payroll, classifications, experience, and carrier factors.",
    "Final audits can create additional premium or return premium."
  ],
  "commonLimits": "Statutory workers' compensation benefits apply. Employer's liability limits commonly begin at $1 million each accident / $1 million disease-policy limit / $1 million disease-each employee.",
  "body": [
    "California employers generally must maintain workers' compensation coverage when they have employees. Industry-specific rules, officers, owners, contractors, and exclusions require careful review.",
    "Premium starts with estimated payroll and classifications, then is commonly reconciled through an audit. Accurate job descriptions, payroll separation, subcontractor certificates, and ownership records reduce avoidable surprises.",
    "Report operational and payroll changes during the term. General liability does not replace workers' compensation, and independent-contractor labels do not by themselves determine worker status."
  ],
  "officialResources": [
    {
      "label": "California DWC employer information",
      "url": "https://www.dir.ca.gov/dwc/employer.htm"
    },
    {
      "label": "CDI Workers’ Compensation guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/9-compare-prem/wc-rate/"
    }
  ]
},
{
  "slug": "commercial-auto-california",
  "title": "California Commercial Auto Coverage and Limits",
  "category": "Commercial",
  "summary": "Review liability, physical damage, symbols, drivers, vehicle use, filings, and hired/non-owned exposure.",
  "quickFacts": [
    "Personal auto policies may exclude or restrict business use.",
    "Covered-auto symbols determine which vehicles receive each coverage.",
    "Federal, state, local, and contract requirements may exceed California's basic vehicle minimum."
  ],
  "commonLimits": "$1 million combined single-limit liability is common for many commercial operations. Higher limits or filings may be required for regulated vehicles, contracts, passenger transport, or hazardous materials.",
  "body": [
    "Commercial auto insurance should reflect the vehicles, drivers, radius, cargo, ownership, garaging, and actual business use. Titled ownership and named-insured structure must align.",
    "Liability, physical damage, uninsured motorists, medical payments, hired auto, non-owned auto, towing, rental, and cargo are separate considerations. Policy symbols control which autos are covered.",
    "Motor carriers, passenger transportation, interstate operations, and certain commodities may require filings and higher limits. Confirm regulatory and contractual requirements before binding."
  ],
  "officialResources": [
    {
      "label": "California DMV insurance requirements",
      "url": "https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/"
    },
    {
      "label": "CDI Commercial Insurance guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/upload/IG-Commercial-Insurance-Updated-061524.pdf"
    }
  ]
},
{
  "slug": "cyber-professional-liability-california",
  "title": "Cyber and Professional Liability for California Businesses",
  "category": "Commercial",
  "summary": "Protect against data incidents, technology failures, and claims that professional services caused financial harm.",
  "quickFacts": [
    "GL generally does not replace cyber or professional liability.",
    "Cyber coverage can include response costs, notification, restoration, extortion, and liability.",
    "Professional liability is usually written on a claims-made basis."
  ],
  "commonLimits": "$1 million is a common starting point for small-business cyber or professional liability. Revenue, records, contract requirements, regulated data, and potential client loss may justify higher limits.",
  "body": [
    "Cyber coverage can address incident response, forensic investigation, notification, credit monitoring, data restoration, business interruption, extortion, fraud, regulatory matters, and third-party liability, subject to the form.",
    "Professional liability or errors and omissions coverage can address claims that advice, design, technology, or professional services caused financial loss. The retroactive date and continuous coverage are critical on claims-made policies.",
    "Review contracts, revenue, largest-client exposure, record count, payment processes, remote access, backups, multifactor authentication, vendor dependencies, and professional services. Limits should reflect a credible severe event—not only the smallest contract."
  ],
  "officialResources": [
    {
      "label": "California Cybersecurity Integration Center resources",
      "url": "https://calcsic.ca.gov/"
    },
    {
      "label": "CDI Commercial Insurance guide",
      "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/upload/IG-Commercial-Insurance-Updated-061524.pdf"
    }
  ]
},
{
  slug: "california-home-insurance-non-renewal",
  title: "What to Do After a California Home Insurance Non-Renewal",
  category: "Wildfire & Catastrophe",
  summary: "A practical response plan for reviewing the notice, documenting the property, comparing alternatives, and protecting a mortgage or escrow timeline.",
  quickFacts: [
    "A non-renewal generally ends coverage at expiration and differs from a midterm cancellation.",
    "California residential non-renewal notices generally must be sent at least 75 days before expiration, subject to current law and exceptions.",
    "FAIR Plan, DIC, admitted, and excess-and-surplus policies are not interchangeable."
  ],
  commonLimits: "Start immediately: confirm the expiration date, request the stated reason, correct inaccurate property information, and prepare photographs, inspection records, mitigation documents, loss history, and a current reconstruction estimate.",
  body: [
    "A home insurance non-renewal does not necessarily mean the homeowner did something wrong. Read the entire notice, preserve the envelope or email, identify the expiration date and stated reason, and contact the insurer or agent promptly. Ask whether the decision involves a correctable property condition, missing information, wildfire assessment, roof condition, claims history, reconstruction value, or a broader underwriting change.",
    "Review the policy and application for accurate occupancy, square footage, roof details, system updates, detached structures, accessory dwelling units, business activity, prior claims, and wildfire-mitigation features. If information is inaccurate, ask how to correct it. If repairs could affect the decision, request the requirements in writing. Repairs and mitigation can strengthen a file but do not guarantee renewal.",
    "Prepare an underwriting file with current photographs, roof and renovation records, inspections, mitigation receipts, loss history, the current declarations page, and a replacement-cost estimate. A licensed agent or broker may review an admitted insurer, a specialty or excess-and-surplus insurer, the California FAIR Plan, or a FAIR Plan policy combined with Difference in Conditions coverage. Compare covered causes of loss, liability, theft, water damage, loss of use, deductibles, code coverage, and lender requirements rather than premium alone.",
    "California may establish temporary non-renewal protections after declared wildfire disasters, but they can be limited by location, policy type, and time period. Confirm eligibility with the California Department of Insurance. Homeowners with a mortgage should begin early to avoid a lapse and potential force-placed coverage."
  ],
  officialResources: [
    { label: "CDI Residential Insurance: Homeowners and Renters", url: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm" },
    { label: "California Department of Insurance wildfire resources", url: "https://www.insurance.ca.gov/01-consumers/200-wrr/" }
  ],
  relatedSlugs: ["fair-plan-dic", "wildfire-readiness-home-hardening", "replacement-cost-market-value", "insurance-before-escrow"]
},
{
  slug: "high-value-home-insurance-underwriting-california",
  title: "Preparing a High-Value California Home for Insurance Underwriting",
  category: "Personal",
  summary: "Organize the property details, reconstruction records, mitigation proof, appraisals, and liability information underwriters may need.",
  quickFacts: [
    "A strong submission explains the property instead of listing only an address and dwelling limit.",
    "Reconstruction cost should reflect custom features, specialized labor, debris removal, permits, and code requirements—not sale price.",
    "Mitigation documentation can strengthen a file but does not guarantee eligibility, pricing, or coverage."
  ],
  commonLimits: "Begin before a renewal, non-renewal, or escrow deadline. Gather a current reconstruction estimate, photographs, inspection and renovation records, mitigation proof, loss history, appraisals, and details about all structures and household liability exposures.",
  body: [
    "High-value homes often require more underwriting detail because custom construction, luxury finishes, access, wildfire exposure, secondary structures, valuable collections, and complex ownership can affect eligibility and coverage design. Start early enough for inspections, appraisals, replacement-cost review, and questions from more than one market.",
    "Create an accurate property profile covering construction, occupancy, roof and materials, system updates, custom finishes, detached structures, pools, solar equipment, generators, private roads, gates, hydrants, sprinklers, alarms, and trust or entity ownership. Explain discrepancies among prior applications, public records, inspections, and the reconstruction estimate.",
    "Support the dwelling limit with reconstruction information rather than market value. Automated estimates may miss imported finishes, architectural work, specialized contractors, slope access, demolition, debris removal, permits, and building-code requirements. Review the estimate after renovations and document changes with invoices, plans, photographs, and appraisals.",
    "For wildfire-exposed property, document relevant roof, vent, eave, window, defensible-space, vegetation, fencing, and community mitigation work. Also disclose water-leak controls, security, pools, domestic employees, home businesses, events, animals, and recreational exposures. Coordinate home, auto, umbrella, rental-property, watercraft, valuables, and secondary-home policies."
  ],
  officialResources: [
    { label: "CDI Residential Insurance: Homeowners and Renters", url: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm" },
    { label: "CDI Safer from Wildfires", url: "https://www.insurance.ca.gov/01-consumers/200-wrr/Safer-from-Wildfires.cfm" }
  ],
  relatedSlugs: ["california-homeowners-coverage-limits", "replacement-cost-market-value", "wildfire-readiness-home-hardening", "umbrella-insurance"]
},
{
  slug: "insuring-jewelry-art-collections",
  title: "How to Insure Jewelry, Fine Art, and Valuable Collections",
  category: "Personal",
  summary: "Understand special limits, scheduled-property coverage, appraisals, inventories, valuation, and protection away from home.",
  quickFacts: [
    "A large personal-property limit does not eliminate category-specific limits for jewelry, art, firearms, silverware, money, or collectibles.",
    "Scheduling property may provide broader protection depending on the contract and generally requires documentation.",
    "Appraisals and inventories should be updated as values and collections change."
  ],
  commonLimits: "Review the policy's actual special limits rather than relying on a generic amount. Inventory valuable items, confirm the settlement method and deductible, and ask whether scheduled or separate valuable-articles coverage is appropriate.",
  body: [
    "Homeowners, renters, and condo policies can protect personal property, but may apply smaller special limits to jewelry, fine art, antiques, firearms, silverware, money, computers, business property, and collections. These limits are generally part of—not additional to—the total personal-property limit. A policy may also restrict a particular cause of loss such as theft.",
    "Scheduling generally means listing an item through an endorsement or separate valuable-articles policy. Depending on the contract, it may provide a separate limit, broader covered causes of loss, different deductible terms, or agreed-value treatment. Verify each feature in the policy rather than assuming it applies.",
    "Create an inventory recording the maker or artist, identifying marks, serial number, purchase information, appraisal, photographs, receipts, ownership history, storage location, and security. Keep copies away from the home or in secure cloud storage. Ask how often appraisals must be updated and how newly acquired property is treated before scheduling.",
    "Review whether claims use replacement cost, actual cash value, agreed value, stated amount, or repair and restoration cost. Confirm how coverage applies to accidental breakage, disappearance, flood, earthquake, transit, vault storage, exhibitions, restoration, second homes, and international travel. Risk controls do not guarantee eligibility or a discount."
  ],
  officialResources: [
    { label: "CDI Residential Insurance: Homeowners and Renters", url: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm" }
  ],
  relatedSlugs: ["california-homeowners-coverage-limits", "renters-insurance-california", "condo-insurance-california", "replacement-cost-market-value"]
}
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
