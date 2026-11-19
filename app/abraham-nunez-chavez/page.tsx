import { AgentProfile } from "@/components/agent-profile";

export const metadata = {
  title: "Abraham Nunez-Chavez | Insurance Agent and Broker in Southern California",
  description: "Abraham Nunez-Chavez: landlord portfolios, first-time homebuyers, escrow coordination, commercial liability, inland marine and life insurance. 714-388-9533.",
  alternates: { canonical: "/abraham-nunez-chavez", languages: { "en-US": "/abraham-nunez-chavez", "es-US": "/es/abraham-nunez-chavez", "x-default": "/abraham-nunez-chavez" } },
};

export default function Page() { return <AgentProfile agent="abraham" locale="en" />; }
