import { InlandMarinePage } from "@/components/inland-marine-page";
import { alternatesFor } from "@/lib/i18n";
export const metadata = { title: "Inland Marine & Equipment Insurance | California", description: "Abraham Nunez-Chavez reviews inland marine, mobile equipment, rental equipment and coordinated commercial programs in California. Call 714-388-9533.", alternates: alternatesFor("/inland-marine-insurance") };
export default function Page() { return <InlandMarinePage locale="en"/>; }
