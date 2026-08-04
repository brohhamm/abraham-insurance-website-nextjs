import { AgentProfile } from "@/components/agent-profile";

export const metadata = {
  title: "Rosalia Elizabeth Gomez | Insurance Agent and Broker in Moreno Valley",
  description: "Meet Rosalia Elizabeth Gomez for personal, commercial, and life insurance assistance from the Moreno Valley office. CA Lic. 0K37042.",
  alternates: { canonical: "/rosalia-elizabeth-gomez", languages: { "en-US": "/rosalia-elizabeth-gomez", "es-US": "/es/rosalia-elizabeth-gomez", "x-default": "/rosalia-elizabeth-gomez" } },
};

export default function Page() { return <AgentProfile agent="rosalia" locale="en" />; }
