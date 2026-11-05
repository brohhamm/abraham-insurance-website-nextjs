import { ChristmasEvent } from "@/components/christmas-event";
import { alternatesFor } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export const metadata = { title: "Christmas Client Appreciation RSVP", description: "Join our Christmas community event December 10, 2026, 5–8 p.m. in Moreno Valley. RSVP by November 23.", alternates: alternatesFor("/events/christmas-client-appreciation") };
export default function Page() { return <ChristmasEvent locale="en" />; }
