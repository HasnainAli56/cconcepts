import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Box, Sparkles, Layers, ShieldCheck } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

export default function KonfektionierungPage() {
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
            <span>Schritt 3</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Konfektionierung & Co-Packing
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Kommt die Standard-Automatisierung an ihre Grenzen, bringen wir handwerkliche Präzision ins Spiel. Wir verpacken, etikettieren, wiegen, zählen und konfektionieren individuelle Promotionsets termingerecht.
          </p>
        </div>
      </section>

      {/* Main Feature Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
                Handarbeit & Präzision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Flexible Verpackungslösungen für höchste Ansprüche.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-black/80 leading-relaxed">
              <p>
                Besondere Werbeaktionen erfordern oft unkonventionelle Verpackungen und manuelle Feinarbeit. Durch unsere erfahrenen Mitarbeiter und flexible Arbeitsplätze reagieren wir blitzschnell auf spezifische Kundenanforderungen.
              </p>
              <p>
                Ganz gleich, ob Sie bestehende Ware neu verpacken, Give-Aways bündeln, Gutscheine beilegen oder komplexe Verkaufsdisplays bestücken möchten: Wir finden die passende Verpackungslösung und garantieren strikte Qualitätskontrolle.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Box className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Umetikettierung & Neuverpackung</strong>
                  <span className="text-sm text-brand-black/75">Aktualisierung von Labels, EAN-Codes, Inhaltsstoffen oder Banderolen.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Layers className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Set-Zusammenstellung</strong>
                  <span className="text-sm text-brand-black/75">Konfektionierung von mehrteiligen Präsentboxen, Give-Away-Bundles und Messepaketen.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">100% Manuelle Endkontrolle</strong>
                  <span className="text-sm text-brand-black/75">Gewichts- und Stückzahlprüfung vor jedem Palettenverschluss.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PremiumImageCard
              src="/images/enhanced/konfektion-1.jpg"
              alt="Konfektionierung und Verpackung C-Concepts"
              aspect="aspect-[4/3]"
              badge="Eigene Konfektionierung"
              client="Simmern / Westerwald"
              title="Sorgfältige Handarbeit"
              subtitle="Präzises Umpacken, Bestücken von Displays und Erstellung individueller Geschenksets."
              className="border border-brand-black/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Benötigen Sie schnelle Konfektionierung?</h3>
            <p className="text-white/75 text-sm sm:text-base">Wir beraten Sie zur optimalen Verpackungsart und kalkulieren termintreu.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Projekt anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
