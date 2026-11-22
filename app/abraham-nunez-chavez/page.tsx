import { AgentProfile } from "@/components/agent-profile";

export const metadata = {
  title: { absolute: "Abraham Nunez-Chavez | Home, Landlord & Business Insurance Broker" },
  description: "Abraham Nunez-Chavez: landlord portfolios, first-time homebuyers, escrow coordination, commercial liability, inland marine and life insurance. 714-388-9533.",
  openGraph: { title: "Abraham Nunez-Chavez | Home, Landlord & Business Insurance Broker", description: "Home purchases, rental properties, business coverage, and family protection. English and Spanish. Direct: 714-388-9533.", url: "/abraham-nunez-chavez", type: "profile", images: [{ url: "/images/abraham-nunez-chavez-insurance-agent.jpg", alt: "Abraham Nunez-Chavez, California insurance agent and broker" }] },
  alternates: { canonical: "/abraham-nunez-chavez", languages: { "en-US": "/abraham-nunez-chavez", "es-US": "/es/abraham-nunez-chavez", "x-default": "/abraham-nunez-chavez" } },
};

export default function Page() { return <AgentProfile agent="abraham" locale="en" />; }
