import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TORPEDO | Serie Fade",
  description:
    "TORPEDO de CODE® Engineering: dispositivo que rompe cúpulas cerámicas sin Coiled Tubing, sin explosivos ni baterías. Activación por diferenciales de presión desde superficie.",
  openGraph: {
    title: "TORPEDO | Serie Fade — CODE® Engineering",
    description:
      "Dispositivo lanzado dentro de la tubería que dispara un proyectil sobre la cúpula cerámica usando diferenciales de presión. Sin electrónica, sin explosivos.",
    url: "/serie-fade",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
