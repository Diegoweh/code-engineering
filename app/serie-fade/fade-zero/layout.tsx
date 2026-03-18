import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FADE-ZERO | Serie Fade",
  description:
    "FADE-ZERO de CODE® Engineering: alternativa de completación accionada por presión diferencial tubería-yacimiento. Compatible con DOT-ONE para sistema de activación redundante e infalible.",
  openGraph: {
    title: "FADE-ZERO | Serie Fade — CODE® Engineering",
    description:
      "Sistema basado en pines de cizallamiento calibrables en campo. Cilindros internos endurecidos eliminan aristas vivas tras la rotura. Añadiendo DOT-ONE se obtiene FADE-ZERO.1 con doble activación.",
    url: "/serie-fade/fade-zero",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
