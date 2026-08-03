import Link from "next/link";

const guideMap: Record<string, string> = {
  "Home & Property": "california-homeowners-coverage-limits",
  "Auto & Umbrella": "california-auto-liability-limits",
  "Business Insurance": "commercial-general-liability-limits",
  "Life Insurance": "life-insurance-needs-california",
  "Escrow Support": "insurance-before-escrow",
  "Carrier Options": "fair-plan-dic",
  "Homeowners": "california-homeowners-coverage-limits",
  "Auto": "california-auto-liability-limits",
  "Renters": "renters-insurance-california",
  "Condo": "condo-insurance-california",
  "Landlord": "landlord-insurance-california",
  "Umbrella": "umbrella-insurance",
  "Life": "life-insurance-needs-california",
  "Earthquake": "earthquake-insurance-retrofit-discounts",
  "General Liability": "commercial-general-liability-limits",
  "Commercial Property": "business-owners-policy-property-income",
  "Workers’ Compensation": "workers-compensation-california",
  "Commercial Auto": "commercial-auto-california",
  "Business Owners Policy": "business-owners-policy-property-income",
  "Industry Review": "cyber-professional-liability-california",
};

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-hero"><div className="shell narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{children}</p></div></section>;
}

export function CTA() {
  return <section className="cta"><div className="shell cta-inner"><div><p className="eyebrow light">Clear next steps</p><h2>Let’s review your insurance needs.</h2><p>Receive responsive guidance and coverage options based on your situation.</p></div><div className="button-row"><Link className="button button-light" href="/contact">Request a Quote</Link><a className="button button-outline-light" href="tel:+17143889533">Call 714-388-9533</a></div></div></section>;
}

export function Cards({ items }: { items: readonly { title: string; text: string }[] }) {
  return <div className="card-grid">{items.map((item) => {
    const guide = guideMap[item.title];
    return <article className="card" key={item.title}><div className="card-mark" aria-hidden="true">✓</div><h3>{item.title}</h3><p>{item.text}</p><div className="card-actions"><Link className="card-link" href={`/contact?insurance=${encodeURIComponent(item.title)}`}>Request a Quote →</Link>{guide ? <Link className="learn-link" href={`/education/${guide}`}>Learn about this coverage →</Link> : null}</div></article>;
  })}</div>;
}
