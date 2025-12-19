import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundLightRays from "@/components/BackgroundLightRays";
import Navbar from "@/components/Navbar";

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

export const metadata: Metadata = {
  title: "Code Engineering",
  description: "Herramientas y recursos para desarrolladores y entusiastas de la producción de petroleo y gas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${adelleSans.variable} antialiased`}
      >
        <BackgroundLightRays />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
