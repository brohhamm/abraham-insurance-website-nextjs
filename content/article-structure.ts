// Retain unique context while the teaching sections provide definitions and
// examples. The former introductory paragraphs often repeated those sections.
const keep:Record<string,number[]>={
  "home-insurance-deductibles":[],"fair-plan-dic":[],"replacement-cost-market-value":[],
  "insurance-before-escrow":[0],"auto-garaging-address":[1],"general-liability-workers-compensation":[],
  "insurance-mortgage-escrow":[],"umbrella-insurance":[1],"california-auto-liability-limits":[],
  "uninsured-underinsured-motorist-california":[2],"comprehensive-collision-deductibles":[],
  "california-homeowners-coverage-limits":[0],"renters-insurance-california":[1],"condo-insurance-california":[],
  "landlord-insurance-california":[],"life-insurance-needs-california":[],"earthquake-insurance-retrofit-discounts":[],
  "wildfire-readiness-home-hardening":[1],"commercial-general-liability-limits":[2],
  "business-owners-policy-property-income":[0],"workers-compensation-california":[],
  "commercial-auto-california":[2],"cyber-professional-liability-california":[0],
};
export function readerArticleBody(slug:string,body:string[]){
  const selected=keep[slug];
  return selected?body.filter((_,i)=>selected.includes(i)):body;
}
