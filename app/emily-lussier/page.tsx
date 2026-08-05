import { EmilyProfile } from "@/components/emily-profile";

export const metadata = {
  title: "Emily Lussier | Licensed Insurance Professional in Yorba Linda",
  description: "Meet Emily Lussier, Customer Service Representative at the Yorba Linda office of Abel Duran Insurance Agency. CA Lic. 4440213.",
  alternates: { canonical: "/emily-lussier", languages: { "en-US": "/emily-lussier", "es-US": "/es/emily-lussier", "x-default": "/emily-lussier" } },
};

export default function Page() { return <EmilyProfile locale="en" />; }
