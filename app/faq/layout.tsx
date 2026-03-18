import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Preguntas frecuentes sobre las herramientas de completación de CODE® Engineering: FILL-D, FLUID-RD, TORPEDO, FADE-ONE, FADE-TWO, FADE-ZERO y DOT-ONE PLUS.",
  openGraph: {
    title: "FAQ | CODE® Engineering",
    description:
      "Resuelve tus dudas sobre las herramientas de completación de CODE® Engineering.",
    url: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
