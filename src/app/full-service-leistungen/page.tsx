"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Truck,
  Box,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const SERVICES = [
  {
    id: "planung",
    number: "01",
    tab: "Planung & Beratung",
    title: "Planung & Beratung",
    subtitle: "Konzeption, CAD-Entwicklung & Machbarkeit",
    desc: "Sie haben eine Idee für eine aufsehenerregende Werbemaßnahme? Wir unterstützen Sie von Anfang an. Unser erfahrenes Team analysiert Ihre Zielgruppe, prüft technische Machbarkeiten und entwirft außergewöhnliche Konzepte, ohne dabei Ihr Budget aus den Augen zu verlieren.",
    points: [
      "Persönliche Beratung durch die Geschäftsleitung",
      "Kreative Sonderanfertigungen fernab von Standard-Katalogen",
      "3D-CAD-Visualisierung, Prototyping & Freigabeprozesse",
      "Kostenoptimierung bei Materialauswahl und Fertigungsmengen",
    ],
    icon: Layers,
    img: "/images/enhanced/beratung.jpg",
    stats: "30+ Jahre Branchenerfahrung",
  },
  {
    id: "logistik",
    number: "02",
    tab: "Logistik & Lagerung",
    title: "Logistik & Lagerung",
    subtitle: "2.500 m² Lagerfläche & globale Distributionsketten",
    desc: "Von der Fertigung bis zum Kunden: Wir organisieren die komplette Logistik für Ihre Werbeartikel und Event-Module. Ob termingenaue Just-in-Time-Lieferung an Messestände oder dezentraler Filialversand – Ihre Ware kommt pünktlich und unbeschadet an.",
    points: [
      "Großzügiges Hochregal- und Freilager in Simmern",
      "Kommissionierung nach Filialverteilern & POS-Listen",
      "Sicherer weltweiter Speditions- und Paketversand",
      "Retourenmanagement und Event-Wiederaufbereitung",
    ],
    icon: Truck,
    img: "/images/enhanced/logistik.jpg",
    stats: "Über 2.500 m² Lagerfläche in Simmern",
  },
  {
    id: "konfektionierung",
    number: "03",
    tab: "Konfektionierung",
    title: "Konfektionierung & Verpackung",
    subtitle: "Präzision, Schutz & Veredelung im Haus",
    desc: "Werbeartikel entfalten ihre Wirkung erst durch die perfekte Präsentation. In unseren eigenen Hallen verpacken, etikettieren und konfektionieren wir Ihre Werbemittel. Ob hochwertige Geschenkboxen, Give-Away-Sets oder produktspezifische Banderolen.",
    points: [
      "Manuelle und automatisierte Konfektionierung vor Ort",
      "Sets zusammenstellen & personalisierte Beileger hinzufügen",
      "Schadensfreie Spezialverpackungen für empfindliche Güter",
      "Etikettierung nach GS1- und Handelsstandards",
    ],
    icon: Box,
    img: "/images/enhanced/konfektionierung.jpg",
    stats: "100% Sicht- und Qualitätskontrolle",
  },
  {
    id: "service",
    number: "04",
    tab: "Full-Service Dienstleistung",
    title: "Full-Service Dienstleistung",
    subtitle: "Ein fester Ansprechpartner für Ihr gesamtes Projekt",
    desc: "Das volle Spektrum an Service und Betreuung. Wir entlasten Ihre Marketing- und Einkaufsabteilung vollständig: von der Ideenfindung über die Produktion bis hin zum After-Sales-Service. Ein Anruf genügt und Ihr Projekt läuft.",
    points: [
      "Persönlicher Projektleiter vom Briefing bis zur Auslieferung",
      "Transparente Budget- und Zeitplanung ohne Überraschungen",
      "Sedex-geprüfte Compliance und Arbeitsstandards",
      "Höchste Flexibilität bei kurzfristigen Event-Anpassungen",
    ],
    icon: Sparkles,
    img: "/images/enhanced/perfect-match.jpg",
    stats: "15+ Jahre Partnerschaften mit Großkunden",
  },
];

export default function FullServicePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-16 md:space-y-24 pb-28">
      {/* Header / Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/15 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
            <span className="font-bold text-brand-accent">Full-Service</span>
            <span className="text-brand-black/30">•</span>
            <span>Ganzheitliche Betreuung</span>
          </div>
          <TextReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-[1.08]">
              Full-Service für Ihre Werbeartikel & Events.
            </h1>
          </TextReveal>
          <p className="text-base sm:text-lg lg:text-xl text-brand-black/75 leading-relaxed font-normal">
            Wir bieten mehr als nur Produkte. Von der Konzeption über die Produktion
            bis hin zur Logistik und individuellen Konfektionierung übernehmen wir
            jeden Schritt – damit Sie sich voll auf Ihren Marketingerfolg konzentrieren können.
          </p>
        </div>

        {/* Tab Navigation Switcher */}
        <div className="flex flex-wrap gap-2.5 pt-8 border-b border-brand-black/10 pb-5">
          {SERVICES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-xs ${
                activeTab === idx
                  ? "bg-brand-black text-white shadow-md scale-102"
                  : "bg-white border border-brand-black/15 text-brand-black/80 hover:bg-brand-black/5 hover:text-brand-black"
              }`}
            >
              <span className="font-mono text-brand-accent font-bold">{s.number}</span>
              <span>{s.tab}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Feature View (Agency Tabbed Showcase) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-14 rounded-3xl bg-white border-2 border-brand-black/10 shadow-xl"
          >
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <span className="text-sm font-mono uppercase text-brand-accent font-extrabold tracking-wider">
                  {SERVICES[activeTab].subtitle}
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-black leading-tight">
                  {SERVICES[activeTab].title}
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal">
                {SERVICES[activeTab].desc}
              </p>

              {/* Bullet points */}
              <div className="space-y-3.5 pt-2">
                {SERVICES[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3.5 text-base sm:text-lg text-brand-black/85 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-5">
                <MagneticButton strength={15}>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-white text-base sm:text-lg font-bold hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/25"
                  >
                    <span>Termin vereinbaren</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </MagneticButton>
                <span className="text-xs sm:text-sm font-mono font-bold text-brand-black/70 bg-brand-black/5 px-4 py-2.5 rounded-xl border border-brand-black/10">
                  {SERVICES[activeTab].stats}
                </span>
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-6">
              <PremiumImageCard
                src={SERVICES[activeTab].img}
                alt={SERVICES[activeTab].title}
                aspect="aspect-[4/3]"
                badge={`Säule ${SERVICES[activeTab].number}`}
                client={SERVICES[activeTab].stats}
                title={SERVICES[activeTab].title}
                subtitle={SERVICES[activeTab].subtitle}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Case-Study Style Sticky Sections Breakdown */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Reveal direction="left">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
              Leistungsübersicht im Detail
            </span>
            <TextReveal>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-black">
                Alle 4 Säulen für Ihren Werbeerfolg
              </h2>
            </TextReveal>
            <p className="text-sm sm:text-base text-brand-black/70">
              Jede Phase ist exakt aufeinander abgestimmt – für maximale Wirkung am Point of Sale.
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {SERVICES.map((srv, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Reveal
                key={srv.id}
                direction={isLeft ? "left" : "right"}
                className="w-full"
              >
                <div
                  id={srv.id}
                  className="scroll-mt-32 p-8 md:p-14 rounded-3xl bg-white border border-brand-black/10 hover:border-brand-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-brand-black text-white">
                        Säule {srv.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                        {srv.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-brand-black">
                      {srv.title}
                    </h3>

                    <p className="text-sm md:text-base text-brand-black/75 leading-relaxed">
                      {srv.desc}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {srv.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-black/80 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 flex items-center gap-4">
                      <Link
                        href={
                          srv.id === "planung"
                            ? "/full-service-leistungen/planung-beratung"
                            : srv.id === "logistik"
                            ? "/full-service-leistungen/logistik-lagerung"
                            : srv.id === "konfektionierung"
                            ? "/full-service-leistungen/konfektionierung"
                            : "/full-service-leistungen/full-service-fur-werbeartikel"
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-black text-white text-xs sm:text-sm font-bold hover:bg-brand-accent transition-colors shadow-sm"
                      >
                        <span>Details zu {srv.title}</span>
                        <ChevronRight className="w-4 h-4 text-brand-accent" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <PremiumImageCard
                      src={srv.img}
                      alt={srv.title}
                      aspect="aspect-[16/10]"
                      badge={`Säule ${srv.number}`}
                      client={srv.stats}
                      className="shadow-md"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Section: Termin vereinbaren */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-brand-white p-10 md:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold">
            Persönliche Beratung
          </span>

          <TextReveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
              Haben Sie ein konkretes Projekt oder eine Idee?
            </h2>
          </TextReveal>

          <p className="text-brand-white/70 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Rufen Sie uns an oder vereinbaren Sie direkt einen unverbindlichen
            Beratungstermin mit Andreas Sauer oder Ralf Weisbrod in Simmern oder per Video-Call.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton strength={18}>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-bold text-base hover:bg-brand-accent-hover transition-colors shadow-xl shadow-brand-accent/20"
              >
                <span>Termin vereinbaren</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>

            <a
              href="tel:+4926309637924"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-brand-white/10 hover:bg-brand-white/15 text-white font-medium text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-accent" />
              <span>+49 (0) 2630 96379-24</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
