import { AgentProfile } from "@/components/agent-profile";

export const metadata = {
  title: "Abraham Nunez-Chavez | Insurance Agent and Broker in Southern California",
  description: "Meet Abraham Nunez-Chavez for personal, commercial, life, escrow, wildfire, and difficult-to-insure property guidance. CA Lic. 4357305.",
  alternates: { canonical: "/abraham-nunez-chavez", languages: { "en-US": "/abraham-nunez-chavez", "es-US": "/es/abraham-nunez-chavez", "x-default": "/abraham-nunez-chavez" } },
};

export default function Page() { return <AgentProfile agent="abraham" locale="en" />; }
