import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Warehouse, Truck, ShieldCheck, MapPin } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

export default function LogistikLagerungPage() {
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
            <span>Schritt 2</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Logistik & Lagerung
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            2.500 m² Lagerfläche in Simmern / Westerwald für Ihre Werbemittel. Von der sicheren Einlagerung über Paletten-Handling bis zur weltweiten Just-in-Time-Lieferung an Ihren Point of Sale.
          </p>
        </div>
      </section>

      {/* Main Feature Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
                Zentrallager & Distribution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Zuverlässig, termingerecht und weltweit vernetzt.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-black/80 leading-relaxed">
              <p>
                Ihre Ware wird von uns in unserem Hochregallager gewissenhaft überprüft, inventarisiert und geschützt eingelagert. Sie sparen wertvollen eigenen Lagerplatz und profitieren von flexiblen Abrufaufträgen.
              </p>
              <p>
                Ralf Weisbrod und unser Logistikteam koordinieren den sicheren Versand per Spedition, Paketdienst oder Direktkurier – ganz gleich ob Einzellieferung an eine Messe oder koordinierte bundesweite POS-Rollouts im Lebensmitteleinzelhandel.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Warehouse className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">2.500 m² Hochregalkapazität</strong>
                  <span className="text-sm text-brand-black/75">Moderner Lagerstandort in Simmern mit flexiblen Stellplatz-Optionen.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <Truck className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">Just-in-Time POS-Lieferung</strong>
                  <span className="text-sm text-brand-black/75">Direktbelieferung von Filialen, Promotion-Standorten und Messen.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-black text-base font-bold">GS1 & Barcode-geführt</strong>
                  <span className="text-sm text-brand-black/75">Lückenlose Sendungsverfolgung und chargengenaue Bestandskontrolle.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PremiumImageCard
              src="/images/enhanced/logistik.jpg"
              alt="Logistik und Hochregallager C-Concepts Simmern"
              aspect="aspect-[4/3]"
              badge="Zentrallager Simmern"
              client="Ralf Weisbrod • Geschäftsleitung"
              title="2.500 m² Logistikzentrum"
              subtitle="Hochregallager, Warenausgangszone und moderne Kommissioniertechnik."
              className="border border-brand-black/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Planen Sie einen bundesweiten Rollout?</h3>
            <p className="text-white/75 text-sm sm:text-base">Wir übernehmen Lagerung, Kommissionierung und Terminzustellung für Sie.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Logistikanfrage stellen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
