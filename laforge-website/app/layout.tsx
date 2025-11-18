import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "La Forge Basketball | PrepU Canada - Montréal",
  description: "La Forge Basketball - Équipe PrepU Canada basée à Montréal. Excellence • Passion • Performance. Découvrez notre équipe, calendrier, actualités et galerie.",
  keywords: "basketball, Montréal, PrepU, La Forge, équipe basketball, basketball Québec",
  openGraph: {
    title: "La Forge Basketball",
    description: "Excellence • Passion • Performance - PrepU Canada",
    type: "website",
    locale: "fr_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
