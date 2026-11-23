import { ChristmasEvent } from "@/components/christmas-event";
import { spanishAlternates } from "@/lib/i18n";
export const dynamic = "force-dynamic";
export const metadata = { title: "Encuentro de Año Nuevo para Clientes y Comunidad", description: "Acompáñenos el 28 de enero de 2027, de 4 a 6 p. m., hora del Pacífico, en Moreno Valley. Solicite su lugar antes del 27 de enero a las 4 p. m. para la elegibilidad de sorteos.", alternates: spanishAlternates("/es/eventos/convivio-navideno") };
export default function Page() { return <ChristmasEvent locale="es" />; }
