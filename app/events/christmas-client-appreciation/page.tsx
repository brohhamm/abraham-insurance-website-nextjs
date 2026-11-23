import { ChristmasEvent } from "@/components/christmas-event";
import { alternatesFor } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export const metadata = { title: "New Year Client Appreciation & Community Event RSVP", description: "Join us January 28, 2027, 4–6 p.m. Pacific in Moreno Valley. Food, preparedness speakers, and planned prizes. Drawing-eligibility RSVP deadline: January 27 at 4 p.m. Pacific.", alternates: alternatesFor("/events/christmas-client-appreciation") };
export default function Page() { return <ChristmasEvent locale="en" />; }
