# Bilingual educational content audit — September 7, 2026

## Scope and baseline

Baseline production commit: `492c486b15a1e711dade5aa0b219ce223e28a721`.
Existing production project: `abraham-insurance-website-nextjs` in `brohhamms-projects`.
Production identity remains https://www.theduranagency.com.

The production sitemap was checked before edits: 128 URLs (64 English, 64 Spanish), all resolved successfully. The existing `/es/seguro-contra-incendios-forestales` redirect leads to `/es/educacion`.

Content changes affect 49 English and 49 Spanish URLs: 26 educational guides, 15 insurance service pages, four local risk guides, and home, education, carriers and referral-partner pages in each language. Other pages were reviewed without rewriting staff, contact or legal content. No routes were renamed.

## Editorial findings and decisions

- Short guides relied on generic caveats and unexplained terms. Added topic-specific definitions, practical situations, clearly hypothetical examples, and concrete questions to bring to a coverage review.
- Replaced generic limit benchmarks with the actual decision to compare. A sample deductible or liability limit is not a universal recommendation.
- Explained FAIR Plan versus a separate DIC contract, rebuilding cost versus market value, UM/UIM injuries versus vehicle damage, aggregate limits, claims-made dates, payroll audits, flood exclusions and earthquake deductibles.
- Kept qualifications that depend on a contract, eligibility, underwriting or law. No invented client stories, staff experiences, savings, availability or claim guarantees.
- English and Spanish additions convey matching coverage conditions and numbers. Spanish is written for readers, not a word-for-word mechanical translation.
- Retained original article authorship and publication dates; separately identified educational modification dates without suggesting new staff or legal approval.
- Dated existing FEMA statistics and removed an unsupported local acreage/home-count assertion. Added direct official resources for readers.
- Preserved existing design. New article sections render on the server; the education filter receives only the fields it uses.

## Primary-source research

Sources reviewed September 7, 2026. Policy wording and current official requirements control. Local parcel maps are screening resources, not insurer eligibility decisions.

| Topic | Official source |
| --- | --- |
| Home, renters, condo, valuation and nonrenewal | [California Department of Insurance residential guide](https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/res-ins-guide.cfm) |
| Auto coverage and deductibles | [CDI automobile guide](https://www.insurance.ca.gov/01-consumers/105-type/95-guides/01-auto/auto101.cfm) |
| Standard 30/60/15 auto minimums; separate Low Cost program | [California DMV insurance requirements](https://www.dmv.ca.gov/portal/vehicle-registration/insurance-requirements/) |
| UIM exhaustion, offsets and limits | [California Insurance Code 11580.2](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=11580.2.) |
| FAIR Plan named-peril coverage and companion policy | [FAIR Plan dwelling](https://www.cfpnet.com/policies/dwelling/), [DIC explanation](https://www.cfpnet.com/difference-in-conditions-dic/) |
| Commercial limits, business income, auto and claims-made coverage | [CDI commercial guide](https://www.insurance.ca.gov/01-consumers/105-type/95-guides/09-comm/commercialguide.cfm) |
| Workers' compensation obligations and benefits | [California DWC FAQs](https://www.dir.ca.gov/dwc/faqs.html) |
| Earthquake deductibles, selected living expenses and retrofit eligibility | [CEA coverages](https://www.earthquakeauthority.com/california-earthquake-insurance-policies/homeowners/coverages-and-deductibles), [CEA discounts](https://www.earthquakeauthority.com/california-earthquake-insurance-policies/earthquake-insurance-policy-premium-discounts) |
| Wildfire mitigation | [CDI Safer from Wildfires](https://www.insurance.ca.gov/01-consumers/200-wrr/Safer-from-Wildfires.cfm), [CAL FIRE home hardening](https://www.readyforwildfire.org/prepare-for-wildfire/hardening-your-home/) |
| Life insurance needs and policy types | [CDI life guide](https://www.insurance.ca.gov/01-consumers/105-type/95-guides/07-life/life-ins-guide.cfm) |
| Escrow calculations and force-placed coverage | [CFPB Regulation X 1024.17](https://www.consumerfinance.gov/rules-policy/regulations/1024/17/), [CFPB force-placed insurance](https://www.consumerfinance.gov/ask-cfpb/what-can-i-do-if-my-mortgage-lender-servicer-is-charging-me-for-force-placed-homeowners-insurance-en-219/) |
| Cyber first- and third-party coverage | [NAIC cyber insurance guide](https://content.naic.org/sites/default/files/inline-files/cyber-insurance-naic.pdf) |
| Flood definition, NFIP exclusions | [FloodSmart flood definition](https://www.floodsmart.gov/know-your-risk/what-is-a-flood), [NFIP coverage](https://www.floodsmart.gov/get-insured/buy-a-policy) |
| Liquefaction explanation | [USGS](https://earthquake.usgs.gov/education/geologicmaps/liquefaction.php) |
| Local wildfire mapping | [Yorba Linda 2025 maps](https://www.yorbalindaca.gov/930/2025-CalFIRE-Fire-Hazard-Severity-Zone-M) |

Existing FEMA June 2023 one-inch damage illustration and May 2023 outside-high-risk-area claims statistic remain linked on the homepage with their dates and qualifications. Existing CEA market-share statistic retains its official financial-strength source.

## Verification and release gate

No automated test suite existed in the package scripts. Added `node --test scripts/content-audit.test.cjs` for bilingual guide/service parity, example arithmetic, encoding, and protected legal content. These checks do not replace browser or functional verification.

Use the established `next build --webpack`, ESLint and TypeScript checks. `scripts/audit-routes.mjs` checks every sitemap URL and records intentional redirects, titles, canonicals and page text. Reports are local verification artifacts, not public consumer data.

Release requires a READY preview in the existing project, every sitemap route, visual inspection of changed pages, representative responsive layouts, links/forms/metadata checks, and unchanged legal copy before merge. Production is not verified by this document alone: final deployment URLs, commit and actual live results belong in the release report.

Infrastructure, domain routing, analytics, quote delivery, environment variables, staff details and protected legal disclosures are outside the edit scope. No new staff or attorney approval is claimed. A validation-only quote API test does not prove email delivery.
