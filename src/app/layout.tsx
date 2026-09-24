import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "C-Concepts | Werbeartikel & Erlebnis-Promotion mit Full-Service",
  description:
    "C-Concepts Vertriebs GmbH aus Simmern: Ihr zuverlässiger Partner für individuelle Werbeartikel, Gimmicks, Give-Aways, Erlebnis-Promotion, Konfektionierung und Logistik.",
  keywords: [
    "Werbeartikel Simmern",
    "Full-Service Werbeartikel",
    "Erlebnis Promotion",
    "Sonderanfertigungen Werbemittel",
    "Konfektionierung und Logistik",
    "C-Concepts Vertriebs GmbH",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-brand-white text-brand-black selection:bg-brand-accent selection:text-white">
        <SmoothScroll>
          <Header />
          <main className="flex-grow pt-4 sm:pt-6">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
