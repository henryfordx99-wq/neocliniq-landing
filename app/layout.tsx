import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeoCliniq — La gestion de clinique réinventée",
  description:
    "Remplacez GoRendezvous par une plateforme IA-native pour chiropraticiens. Prise de rendez-vous, dossiers patients, notes SOAP, facturation — tout en un.",
  metadataBase: new URL("https://neocliniq.ca"),
  openGraph: {
    title: "NeoCliniq — La gestion de clinique réinventée",
    description:
      "Rejoignez la liste d'attente. Accès anticipé + tarif fondateur pour les 50 premières cliniques.",
    url: "https://neocliniq.ca",
    siteName: "NeoCliniq",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoCliniq",
    description: "La gestion de clinique que vos patients méritent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
