import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLUID-RD",
  description:
    "FLUID-RD de CODE® Engineering: herramienta de completación de pozos de petróleo y gas de alto rendimiento y confiabilidad.",
  openGraph: {
    title: "FLUID-RD | CODE® Engineering",
    description:
      "FLUID-RD de CODE® Engineering: herramienta de completación de pozos de petróleo y gas de alto rendimiento y confiabilidad.",
    url: "/fluid-rd",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
