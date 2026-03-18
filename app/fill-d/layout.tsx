import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FILL-D",
  description:
    "FILL-D de CODE® Engineering: dispositivo de llenado de tubería activado remotamente por pulso de presión desde superficie. Elimina la necesidad de llenar la tubería manualmente o usar Coiled Tubing.",
  openGraph: {
    title: "FILL-D | CODE® Engineering",
    description:
      "Dispositivo de llenado de tubería que se activa remotamente mediante un pulso de presión desde superficie. Doble sistema de cierre independiente.",
    url: "/fill-d",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
