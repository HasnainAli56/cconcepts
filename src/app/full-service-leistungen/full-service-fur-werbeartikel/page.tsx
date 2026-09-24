import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Award, Layers, ShieldCheck } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

export default function FullServiceWerbeartikelPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-24">
      {/* Breadcrumb & Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
        <Link
          href="/full-service-leistungen"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-black/60 hover:text-brand-accent transition-colors font-bold mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Zurück zur Übersicht: Full-Service</span>
        </Link>

        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/10 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-bold text-brand-accent">Full-Service</span>
            <span className="text-brand-black/30">•</span>
            <span>Gesamtdienstleistung</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Full-Service für Werbeartikel
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Unser 360°-Sorglos-Paket: Von der ersten Idee, über Konstruktion, weltweites Sourcing und Konfektionierung bis hin zur pünktlichen Auslieferung direkt an Ihren Point of Sale.
          </p>
        </div>
      </section>

      {/* Main Feature Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
                Alles aus einer Hand
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Ein einziger Ansprechpartner für Ihre gesamte Kampagne.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-black/80 leading-relaxed">
              <p>
                Sparen Sie sich die aufwendige Koordination zwischen Designern, verschiedenen Herstellern, Verpackungsbetrieben und Logistikern. Bei C-Concepts erhalten Sie alle Leistungen aus einer Hand – mit persönlicher Betreuung durch die Geschäftsleitung.
              </p>
              <p>
                Seit 1993 realisieren wir komplexe Projekte für globale Marken wie Pepsi Cola, Punica, Rockstar Energy oder Remundi Grill mit kompromissloser Qualität und Termintreue.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Sparkles className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Idee & Kreation</strong>
                  <span className="text-sm text-brand-black/75">Entwicklung außergewöhnlicher Werbeartikel und maßgeschneiderter Sonderbauten.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Layers className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Inhouse Veredelung & Konfektion</strong>
                  <span className="text-sm text-brand-black/75">Eigene Werkstatt und Verpackungsstraßen in Simmern / Westerwald.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Award className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Zertifizierte Standards</strong>
                  <span className="text-sm text-brand-black/75">Sedex Member und GS1-zertifizierte Prozesse für höchste Verlässlichkeit.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PremiumImageCard
              src="/images/enhanced/service01.png"
              alt="Full Service für Werbeartikel C-Concepts"
              aspect="aspect-[4/3]"
              badge="360° Full-Service"
              client="Simmern / Westerwald"
              title="Komplette Kampagnenbetreuung"
              subtitle="Von der Beratung und Produktion bis zur Endlagerung und POS-Distribution."
              className="border border-brand-black/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Bereit für Ihren nächsten Werbeerfolg?</h3>
            <p className="text-white/75 text-sm sm:text-base">Lassen Sie uns gemeinsam außergewöhnliche Konzepte realisieren.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Projekt jetzt anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
