import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Compass, FileSpreadsheet, Phone } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

export default function PlanungBeratungPage() {
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
            <span>Schritt 1</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Planung & Beratung
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Am Anfang jeder erfolgreichen Werbekampagne steht eine überzeugende Idee. Wir analysieren Ihre Ziele, Zielgruppen und Ihr Budget, um kreative und wirtschaftlich machbare Werbemittelkonzepte zu entwickeln.
          </p>
        </div>
      </section>

      {/* Main Feature Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
                Konzeption & Musterbau
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Vom ersten Entwurf bis zum freigegebenen Prototyp.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-black/80 leading-relaxed">
              <p>
                Die Werbeartikel können entweder durch Sie bereitgestellt oder durch uns nach Ihren Wünschen individuell beschafft und entwickelt werden. Dank unserer jahrzehntelangen Erfahrung im Werbemittelmarkt stehen wir Ihnen als verlässlicher Partner zur Seite.
              </p>
              <p>
                Gemeinsam klären wir im Vorfeld alle relevanten Parameter: Materialauswahl, Veredelungstechniken, rechtliche Vorgaben, Sedex-Auditierung sowie terminliche Meilensteine bis zum Verkaufsstart.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Kreative Ideenfindung</strong>
                  <span className="text-sm text-brand-black/75">Maßgeschneiderte Vorschläge abseits standardisierter Katalogware.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">3D-Visualisierung & Muster</strong>
                  <span className="text-sm text-brand-black/75">Vorab-Freigabemuster zur haptischen und optischen Prüfung vor Serienstart.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Transparente Kostenplanung</strong>
                  <span className="text-sm text-brand-black/75">Verlässliche Festpreise ohne versteckte Nachkalkulationen.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PremiumImageCard
              src="/images/enhanced/beratung.jpg"
              alt="Planung und Beratung C-Concepts Simmern"
              aspect="aspect-[4/3]"
              badge="Persönliche Beratung"
              client="Andreas Sauer • Geschäftsleitung"
              title="Individuelle Konzeption"
              subtitle="Direkter Dialog mit erfahrenen Werbeartikel-Spezialisten vor Ort in Simmern."
              className="border border-brand-black/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Haben Sie ein konkretes Projekt vor Augen?</h3>
            <p className="text-white/75 text-sm sm:text-base">Lassen Sie uns unverbindlich über Ideen, Machbarkeit und Timings sprechen.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Beratung anfordern</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
