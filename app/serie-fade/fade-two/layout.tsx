import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FADE-TWO | Serie Fade",
  description:
    "FADE-TWO de CODE® Engineering: accionada por presión absoluta contra la cámara atmosférica entre dos domos cerámicos. Activación programable por pines calibrados en campo.",
  openGraph: {
    title: "FADE-TWO | Serie Fade — CODE® Engineering",
    description:
      "Activación por presión absoluta con pines calibrados modificables en campo. Con DOT-ONE obtiene sistemas redundantes: presión diferencial y presión absoluta, garantizando infalibilidad.",
    url: "/serie-fade/fade-two",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
