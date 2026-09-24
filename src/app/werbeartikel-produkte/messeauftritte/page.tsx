import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Store, Presentation, Sparkles } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const MESSE_ITEMS = [
  {
    title: "Modulare Messe- & Präsentationsstände",
    client: "Fach- & Publikumsmessen",
    desc: "Schnell auf- und abbaubare Standkonzepte mit integrierter Beleuchtung, individualisierten Rückwänden und Prospektständern.",
    image: "/images/enhanced/ReweCenterMannheim.jpg",
  },
  {
    title: "Promotion-Counter & Show-Theken",
    client: "Verkostung & Beratung",
    desc: "Mobile Event-Tresen mit Stauraum, Hygiene-Oberflächen und vollflächigem Branding für Mitarbeiter und Besucher.",
    image: "/images/enhanced/Retro-coffee-bike1-1.jpg",
  },
  {
    title: "Großdisplays & Interaktive Module",
    client: "Messe-Highlight",
    desc: "Aufmerksamkeitsstarke Erlebnis-Module wie Fußball-Torwände, Simulatoren und Gewinnspiel-Räder für maximale Verweildauer.",
    image: "/images/enhanced/Aufblasbare-Torwand.jpg",
  },
];

export default function MesseauftrittePage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      {/* Breadcrumb & Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
        <Link
          href="/werbeartikel-produkte"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-black/60 hover:text-brand-accent transition-colors font-bold mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Zurück zur Übersicht: Werbeartikel & Unikate</span>
        </Link>

        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/10 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-bold text-brand-accent">Messe & Show</span>
            <span className="text-brand-black/30">•</span>
            <span>Markeninszenierung</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Messeauftritte & Stände
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Unsere Produkte haben wir bereits auf zahlreichen nationalen Fach- und Publikumsmessen erfolgreich präsentiert. Wir planen, fertigen, liefern und montieren Ihren maßgeschneiderten Messestand.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MESSE_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col h-full">
              <PremiumImageCard
                src={item.image}
                alt={item.title}
                aspect="aspect-[16/10] h-44 sm:h-48"
                badge={item.client}
                title={item.title}
                subtitle={item.desc}
                className="h-full border border-brand-black/10 shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Steht Ihr nächster Messeauftritt an?</h3>
            <p className="text-white/75 text-sm sm:text-base">Wir unterstützen Sie bei Konzept, Bau, Logistik und Einlagerung nach der Messe.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Messeprojekt besprechen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
