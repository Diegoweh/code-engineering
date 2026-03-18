import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOT-ONE PLUS | Serie Fade",
  description:
    "DOT-ONE PLUS de CODE® Engineering: agrega versatilidad a las herramientas FADE con un mecanismo independiente de activación por presión diferencial y protección contra activación accidental.",
  openGraph: {
    title: "DOT-ONE PLUS | Serie Fade — CODE® Engineering",
    description:
      "DOT-ONE añade activación por presión diferencial Tubería-Yacimiento. PLUS bloquea la herramienta hasta que la presión de yacimiento supere la presión de tubería, evitando activaciones accidentales.",
    url: "/serie-fade/dot-one-plus",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
