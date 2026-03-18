import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundLightRays from "@/components/BackgroundLightRays";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adelleSans = localFont({
  src: [{
    path: "../public/fonts/adelle-sans-regular.otf",
    weight: "400",
    style: "normal",
  }],
  display: "swap",
  variable: "--font-adelle-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://code-engineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CODE® Engineering",
    template: "%s | CODE® Engineering",
  },
  description:
    "CODE® Engineering diseña y fabrica herramientas de completación de pozos de petróleo y gas: FILL-D, FLUID-RD y Serie Fade (TORPEDO, FADE-ONE, FADE-TWO, FADE-ZERO, DOT-ONE PLUS).",
  keywords: [
    "completación de pozos",
    "herramientas de completación",
    "petróleo y gas",
    "FILL-D",
    "FLUID-RD",
    "Serie Fade",
    "TORPEDO",
    "FADE-ONE",
    "FADE-TWO",
    "FADE-ZERO",
    "DOT-ONE PLUS",
    "cúpulas cerámicas",
    "CODE Engineering",
  ],
  openGraph: {
    type: "website",
    siteName: "CODE® Engineering",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${adelleSans.variable} antialiased`}
      >
        <BackgroundLightRays />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
