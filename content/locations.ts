export type RiskTopic = {
  title: string;
  signal: string;
  insurance: string;
  resourceLabel: string;
  resourceUrl: string;
};

export type ServiceLocation = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  intro: string;
  localNeeds: string[];
  officeNote: string;
  officeHref: string;
  officeLabel: string;
  risks: RiskTopic[];
  additionalResources: { label: string; url: string }[];
};

const autoRisk: RiskTopic = {
  title: "Garaging address, traffic, and hit-and-run losses",
  signal: "California insurers retain each vehicle’s garaging ZIP code, annual mileage, and use classification as rating data. A move, commute change, youthful driver, accident, theft, or hit-and-run can change the risk profile even when the vehicle stays the same.",
  insurance: "Keep the true overnight garaging address and vehicle use current. Review collision, uninsured motorist bodily injury, and any available uninsured motorist property-damage or collision-deductible-waiver protection; a hit-and-run is not automatically covered the same way under every policy.",
  resourceLabel: "California Department of Insurance auto-rating data guidance",
  resourceUrl: "https://www.insurance.ca.gov/0400-news/0200-studies-reports/0600-research-studies/auto-class-plan/circular-ppa-drg.cfm",
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    eyebrow: "Moreno Valley insurance and risk guide",
    summary: "Local insurance guidance, hazard resources, and coverage considerations for Moreno Valley households, landlords, drivers, and businesses.",
    intro: "Moreno Valley combines hillside and brush exposure, seasonal flooding, earthquake risk, long commuter routes, rental housing, and growing commercial activity. Insurance should be reviewed at the exact address because hazard zones, construction, occupancy, vehicle use, and loss history can differ block by block.",
    localNeeds: ["Home, landlord, auto, umbrella, and life coverage reviews", "Commercial insurance for contractors, restaurants, offices, salons, and service businesses", "Wildfire, FAIR Plan, DIC, flood, and earthquake guidance", "Fast evidence, invoice, and lender support for escrow"],
    officeNote: "Meet the Moreno Valley team at 13800 Heacock St., Suite C120, Moreno Valley, CA 92553.",
    officeHref: "/moreno-valley-office",
    officeLabel: "Meet the Moreno Valley team",
    risks: [
      { title: "Wildfire and brush exposure", signal: "Moreno Valley maintains a Fire Hazard Reduction Program with inspections and abatement procedures, and directs residents to current Fire Hazard Severity Zone resources. The City’s hazard plan treats wildfire as an address-specific risk rather than a citywide yes-or-no label.", insurance: "Confirm the current fire-hazard zone, defensible-space condition, roof and exterior materials, access, and distance to responding fire resources before relying on a standard homeowners market. FAIR Plan plus DIC may be needed when admitted-market eligibility is limited.", resourceLabel: "Moreno Valley fire-safety and hazard resources", resourceUrl: "https://moval.gov/departments/fire/firesafe-resources.html" },
      { title: "Earthquake and ground movement", signal: "The City’s Local Hazard Mitigation Plan evaluates earthquake risk along with other threats. Standard homeowners and landlord policies generally exclude earth movement, making a separate earthquake policy or endorsement important to evaluate.", insurance: "Compare dwelling limits, earthquake deductibles, personal property, loss of use, masonry, foundation, and retrofit characteristics. Deductibles commonly apply as a percentage and can be materially higher than a standard home deductible.", resourceLabel: "Moreno Valley Local Hazard Mitigation Plan", resourceUrl: "https://www.moval.gov/departments/fire/LHM-Plan.html" },
      { title: "Flood and storm runoff", signal: "Moreno Valley identifies 100-year floodplains on FEMA Flood Insurance Rate Maps. A 100-year floodplain means a 1% chance of flooding in any given year—not one flood every 100 years.", insurance: "Homeowners insurance normally excludes flooding from rising surface water. Check the exact parcel in FEMA’s map and consider NFIP or private flood insurance even outside a high-risk zone, especially near drainage paths or post-fire runoff areas.", resourceLabel: "Moreno Valley flood protection and flood-zone guidance", resourceUrl: "https://moval.gov/resident_services/flood-protection.html" },
      autoRisk,
      { title: "Landlord liability and eviction disputes", signal: "Riverside Superior Court maintains dedicated unlawful-detainer procedures and current court statistics. Filing volume and legal requirements change, so property owners should rely on current court and legal guidance instead of general market anecdotes.", insurance: "Landlord insurance can address covered property loss and premises liability, but it does not replace legal compliance and generally does not insure ordinary eviction costs, rent disputes, intentional acts, or every habitability allegation. Review fair-rental-value, personal-injury, ordinance, and umbrella options.", resourceLabel: "Riverside Superior Court eviction resources", resourceUrl: "https://www.riverside.courts.ca.gov/self-help/self-help-information" },
    ],
    additionalResources: [
      { label: "FEMA Flood Map Service Center", url: "https://msc.fema.gov/portal/home" },
      { label: "California earthquake hazard maps", url: "https://maps.conservation.ca.gov/cgs/EQZApp/app/" },
      { label: "Alert RivCo emergency notifications", url: "https://rivcoready.org/alert-rivco" },
    ],
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    eyebrow: "Yorba Linda insurance and risk guide",
    summary: "Localized property, auto, wildfire, earthquake, flood, landlord, and business insurance guidance for Yorba Linda and North Orange County.",
    intro: "Yorba Linda’s hillside neighborhoods, open-space interface, higher reconstruction values, pools, rental homes, and commuter traffic create risks that should be reviewed at the individual property and vehicle level.",
    localNeeds: ["High-value home reconstruction and extended replacement-cost reviews", "Auto, youthful-driver, umbrella, and uninsured-motorist protection", "Wildfire mitigation, specialty property, flood, and earthquake options", "Coverage and documentation support for buyers, Realtors, landlords, and lenders"],
    officeNote: "Meet the Yorba Linda team at 23621 La Palma Ave., Suite A, Yorba Linda, CA 92887.",
    officeHref: "/yorba-linda-office",
    officeLabel: "Meet the Yorba Linda team",
    risks: [
      { title: "Wildfire and open-space interface", signal: "Yorba Linda’s 2025 CAL FIRE mapping identifies Moderate, High, and Very High Fire Hazard Severity Zones. A city fuel-reduction project targets approximately 78 acres near 296 homes, reflecting the localized nature of the exposure.", insurance: "Verify the parcel’s current zone, defensible space, roof, vents, eaves, vegetation, slope, access, and reconstruction estimate. Wildfire eligibility and mitigation credits are carrier-specific; the hazard map alone does not determine the premium.", resourceLabel: "Yorba Linda 2025 fire-hazard maps", resourceUrl: "https://www.yorbalindaca.gov/930/2025-CalFIRE-Fire-Hazard-Severity-Zone-M" },
      { title: "Earthquake and liquefaction", signal: "The City’s mapping tools allow residents to review seismic and liquefaction hazard information by location, while the Local Hazard Mitigation Plan evaluates earthquake vulnerability citywide.", insurance: "Standard homeowners insurance generally excludes earthquake damage. Review earthquake dwelling limits, percentage deductibles, contents, loss of use, masonry features, and retrofit status separately from the home policy.", resourceLabel: "Map Yorba Linda hazard-zone viewer", resourceUrl: "https://www.yorbalindaca.gov/750/Geographic-Information-Systems-GIS" },
      { title: "Flood, drainage, and hillside runoff", signal: "The City warns that proximity to open space creates both wildfire and hillside-runoff concerns. Flood exposure can exist outside mapped high-risk areas and can change after wildfire or major drainage changes.", insurance: "Check the parcel in FEMA and City mapping tools. Homeowners policies generally exclude rising surface water; NFIP and private flood policies have separate limits, deductibles, exclusions, and waiting-period rules.", resourceLabel: "Yorba Linda emergency and natural-hazard maps", resourceUrl: "https://www.yorbalindaca.gov/161/Emergency-Management" },
      autoRisk,
      { title: "Landlord and tenant legal exposure", signal: "Orange County Superior Court provides unlawful-detainer services, while statewide court reports track changing civil caseloads. Lawsuit frequency varies over time and by property circumstances; screening, documentation, maintenance, and legal compliance remain central controls.", insurance: "Landlord liability can protect against covered bodily injury or property-damage claims, but eviction costs, rent disputes, intentional conduct, and many statutory violations are commonly outside coverage. Review fair-rental-value, personal-injury, equipment-breakdown, ordinance, and umbrella options.", resourceLabel: "Orange County Superior Court self-help services", resourceUrl: "https://www.occourts.org/self-help/self-help-services/landlord-tenant" },
    ],
    additionalResources: [
      { label: "Yorba Linda Local Hazard Mitigation Plan", url: "https://www.yorbalindaca.gov/854/Local-Hazard-Mitigation-Plan" },
      { label: "FEMA Flood Map Service Center", url: "https://msc.fema.gov/portal/home" },
      { label: "AlertOC emergency notifications", url: "https://www.ocgov.com/about-county/emergency/emergency-notification-system-alertoc" },
    ],
  },
  {
    slug: "riverside-county",
    name: "Riverside County",
    eyebrow: "Riverside County insurance and risk guide",
    summary: "County-level wildfire, earthquake, flood, auto, landlord, and commercial-risk guidance with official planning and preparedness resources.",
    intro: "Riverside County spans dense cities, mountain and wildland interfaces, deserts, flood channels, rental communities, agriculture, logistics corridors, and fast-growing business districts. County-level information is a starting point; underwriting still depends on the exact address and operations.",
    localNeeds: ["Homeowners, landlord, and difficult-to-insure property placement", "Commercial auto, general liability, workers’ compensation, and BOP coverage", "FAIR Plan and DIC coordination where traditional property coverage is unavailable", "Escrow support before insurance becomes a closing issue"],
    officeNote: "Service is available from the Moreno Valley office and remotely throughout Riverside County.",
    officeHref: "/moreno-valley-office",
    officeLabel: "Visit the Riverside County office",
    risks: [
      { title: "Wildfire across varied terrain", signal: "RivCo Ready describes wildfire preparedness as a year-round responsibility because heat, low humidity, dry vegetation, and Santa Ana winds can allow fires to spread rapidly. The County’s 2025 mitigation-plan update evaluates wildland fire among its major hazards.", insurance: "Use parcel-level CAL FIRE maps and carrier eligibility tools. Review defensible space, structure hardening, secondary access, water supply, roof age, vegetation, and replacement cost; do not assume neighboring homes receive the same underwriting result.", resourceLabel: "Riverside County wildfire preparedness", resourceUrl: "https://rivcoready.org/disaster-preparedness/have-plan/wildfire" },
      { title: "Earthquake exposure", signal: "The County’s hazard-mitigation process identifies earthquakes among the risks with potential for major community impact. Fault rupture, shaking, liquefaction, landslide, and building vulnerability differ substantially across the county.", insurance: "Home and commercial property policies generally exclude earth movement. Compare earthquake limits, percentage deductibles, business income, contents, equipment, masonry, and retrofit needs using the actual risk location.", resourceLabel: "Riverside County 2025 hazard-mitigation plan", resourceUrl: "https://rivcoready.org/about-emd/plans/local-hazard-mitigation-plan" },
      { title: "Flooding and post-fire runoff", signal: "RivCo Ready identifies flooding as the county’s most common natural disaster and notes that even a few inches of water can cause tens of thousands of dollars in damage.", insurance: "Flood is generally excluded from homeowners and standard commercial property policies. Evaluate FEMA and private flood options, building and contents limits, business income gaps, elevation, drainage, and post-fire debris-flow exposure.", resourceLabel: "Riverside County disaster-planning resources", resourceUrl: "https://rivcoready.org/disaster-preparedness/have-plan" },
      autoRisk,
      { title: "Rental-property and legal risk", signal: "Riverside County’s court system handles unlawful-detainer matters through dedicated procedures, and the Judicial Council publishes annual county-level caseload data. Current filing data should be reviewed directly because prevalence changes with economic and legal conditions.", insurance: "Use written leases, documented inspections, prompt repairs, and professional legal guidance. Insurance should separately address the dwelling, other structures, landlord contents, fair rental value, premises liability, personal injury where available, and umbrella limits.", resourceLabel: "California Courts annual caseload statistics", resourceUrl: "https://courts.ca.gov/news-reference/research-data/court-statistics" },
    ],
    additionalResources: [
      { label: "Know Your Zone evacuation lookup", url: "https://rivcoready.org/know-your-zone" },
      { label: "Riverside County flood-control district", url: "https://rcflood.org/" },
      { label: "CAL FIRE incident information", url: "https://www.fire.ca.gov/incidents" },
    ],
  },
  {
    slug: "orange-county",
    name: "Orange County",
    eyebrow: "Orange County insurance and risk guide",
    summary: "County-level property, wildfire, earthquake, flood, auto, landlord, life, and business-risk guidance with direct official resources.",
    intro: "Orange County combines coastal flood and tsunami exposure, hillside wildfire zones, major faults, dense traffic, high reconstruction costs, rental housing, and valuable personal and commercial property. Accurate limits and parcel-level hazard review matter more than county averages.",
    localNeeds: ["Home, condo, landlord, auto, umbrella, and life coverage", "Commercial insurance for professional services, contractors, property owners, and small businesses", "Earthquake, wildfire, coastal flood, and water-backup reviews", "Responsive buyer, lender, Realtor, and property-manager support"],
    officeNote: "Service is available through the Yorba Linda office, Moreno Valley office, and remote appointments.",
    officeHref: "/yorba-linda-office",
    officeLabel: "Visit the Orange County office",
    risks: [
      { title: "Wildfire in foothill communities", signal: "Orange County’s 2026 hazard-mitigation plan analyzes wildfire along with flooding and earthquakes. Communities bordering wildland and open space can face wind-driven fire, evacuation, utility-shutoff, and post-fire runoff concerns.", insurance: "Review the exact CAL FIRE zone, structure-hardening details, defensible space, roof and vent condition, slope, access, and rebuilding estimate. Standard, surplus-lines, and FAIR Plan/DIC solutions have different forms and limitations.", resourceLabel: "Orange County 2026 hazard-mitigation plan information", resourceUrl: "https://www.ocgov.com/press/county-orange-orange-county-fire-authority-invite-public-comment-2026-local-hazard-mitigation" },
      { title: "Earthquake and liquefaction", signal: "Orange County advises that earthquakes strike without warning and directs residents to reduce structural and contents hazards in advance. Shaking, liquefaction, and landslide potential varies by parcel and soil conditions.", insurance: "Homeowners and standard commercial property policies generally exclude earthquake. Compare dwelling or building limits, contents, loss of use or business income, percentage deductibles, masonry, and retrofit characteristics.", resourceLabel: "Orange County earthquake preparedness", resourceUrl: "https://www.ocgov.com/about-county/emergency/prevention-preparation/earthquake-emergency" },
      { title: "Flood, coastal, and storm exposure", signal: "Flood exposure includes riverine and drainage flooding as well as coastal and low-lying areas. FEMA flood zones describe mapped probability, but damaging water can occur outside Special Flood Hazard Areas.", insurance: "Check the individual parcel and lender requirements. Flood, water backup, seepage, and storm-driven water are distinct causes of loss and may require separate coverage or endorsements.", resourceLabel: "Orange County flood emergency resources", resourceUrl: "https://www.ocgov.com/about-county/emergency/prevention-preparation/flood-emergency" },
      autoRisk,
      { title: "Landlord liability and tenant disputes", signal: "Orange County Superior Court provides landlord-tenant and unlawful-detainer resources, and annual Judicial Council reports publish county-level civil caseload information. Legal exposure is influenced by property condition, lease practices, local ordinances, and current state law.", insurance: "Landlord coverage can address covered property and liability claims, but it is not a substitute for legal compliance and does not cover every lawsuit, eviction expense, rent loss, or intentional act. Higher property values can also justify stronger liability and umbrella limits.", resourceLabel: "Orange County landlord-tenant court resources", resourceUrl: "https://www.occourts.org/self-help/self-help-services/landlord-tenant" },
    ],
    additionalResources: [
      { label: "FEMA Flood Map Service Center", url: "https://msc.fema.gov/portal/home" },
      { label: "Orange County Fire Authority wildfire preparedness", url: "https://ocfa.org/RSG/" },
      { label: "California earthquake hazard maps", url: "https://maps.conservation.ca.gov/cgs/EQZApp/app/" },
    ],
  },
];

export function getServiceLocation(slug: string) {
  return serviceLocations.find((location) => location.slug === slug);
}
