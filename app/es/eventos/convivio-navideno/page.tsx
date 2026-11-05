import { ChristmasEvent } from "@/components/christmas-event";
import { spanishAlternates } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export const metadata = { title: "Confirmar asistencia al convivio navideño", description: "Acompáñenos el 10 de diciembre de 2026, de 5 a 8 p. m., en Moreno Valley. Confirme su asistencia a más tardar el 23 de noviembre.", alternates: spanishAlternates("/es/eventos/convivio-navideno") };
export default function Page() { return <ChristmasEvent locale="es" />; }
