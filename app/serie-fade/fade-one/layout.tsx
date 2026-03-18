import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FADE-ONE | Serie Fade",
  description:
    "FADE-ONE de CODE® Engineering: herramienta con dos cúpulas cerámicas enfrentadas que resisten altas presiones y ambientes agresivos. Activación mecánica con TORPEDO o con tubería flexible.",
  openGraph: {
    title: "FADE-ONE | Serie Fade — CODE® Engineering",
    description:
      "Dos cúpulas cerámicas enfrentadas por sus caras cóncavas forman una cámara atmosférica protegida por sellos redundantes. Compatible con DOT-ONE y PLUS para activación diferencial y protección total.",
    url: "/serie-fade/fade-one",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
