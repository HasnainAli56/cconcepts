"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Layers,
  Truck,
  Box,
  ExternalLink,
  Award,
  Star,
  MapPin,
  Clock,
  ChevronRight,
  Zap,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const CLIENT_LOGOS = [
  { name: "Pepsi Cola", logo: "/images/real/logo-pepsi.jpg", note: "15 Jahre Partnerschaft" },
  { name: "Rockstar Energy", logo: "/images/real/logo-rockstar.jpg", note: "Festival & Action Kampagnen" },
  { name: "Lipton Ice Tea", logo: "/images/real/logo-lipton.jpg", note: "Sampling & Roadshow" },
  { name: "Chio Chips", logo: "/images/real/logo-chio.jpg", note: "POS & Give-Aways" },
  { name: "Punica", logo: "/images/real/logo-punica.jpg", note: "Event-Promotion & Sonderbau" },
  { name: "Funny-Frisch", logo: "/images/real/logo-funny.jpg", note: "Promotion & Aktionen" },
  { name: "Oasis Floristik", logo: "/images/real/logo-oasis.jpg", note: "12 Jahre Zusammenarbeit" },
];

const TICKER_ITEMS = [
  "INDIVIDUELLE SONDERKONSTRUKTIONEN",
  "WERBEARTIKEL FULL-SERVICE",
  "2.500 m² HOCHREGALLAGER SIMMERN",
  "QUALITÄT SEIT 1993",
  "INHOUSE KONFEKTIONIERUNG & PACKAGING",
  "SEDEX COMPLIANCE AUDITED",
  "JUST-IN-TIME LOGISTIK EUROPAWEIT",
  "MARKENERLEBNISSE FÜR WELTMARKEN",
];

const SERVICES_PREVIEW = [
  {
    step: "01",
    title: "Planung & Beratung",
    desc: "Sie haben eine Idee für eine spektakuläre Werbemaßnahme? Wir unterstützen Sie von der ersten Skizze über CAD-Konstruktionen bis hin zu Prototypen – außergewöhnlich konzipiert und wirtschaftlich kalkuliert.",
    icon: Layers,
    img: "/images/enhanced/beratung.jpg",
    link: "/full-service-leistungen#planung",
    badge: "Konzeption & 3D-CAD",
    stats: "30+ Jahre Branchenexpertise",
  },
  {
    step: "02",
    title: "Logistik & Lagerung",
    desc: "Von der Fertigung direkt an den Point of Sale. Wir organisieren die komplette Logistik Ihrer Werbemittel auf über 2.500 m² modernster Hochregalfläche in Simmern für termingenaue und schadenfreie Transporte.",
    icon: Truck,
    img: "/images/enhanced/logistik.jpg",
    link: "/full-service-leistungen#logistik",
    badge: "2.500 m² Hochregallager",
    stats: "Termingarantie europaweit",
  },
  {
    step: "03",
    title: "Verpackung & Konfektionierung",
    desc: "Sichere, edle und verkaufsfördernde Verpackungslösungen. In unseren eigenen Werkhallen konfektionieren, bestücken, veredeln und etikettieren wir Ihre Werbemittel nach strengsten Standards.",
    icon: Box,
    img: "/images/enhanced/konfektion-1.jpg",
    link: "/full-service-leistungen#konfektionierung",
    badge: "Inhouse Manufaktur",
    stats: "100% Sicht- & Endkontrolle",
  },
  {
    step: "04",
    title: "Full-Service Dienstleistung",
    desc: "Alles aus einer Hand. Das volle Spektrum an Service und Betreuung: Ein fester Projektleiter steuert Ihr gesamtes Vorhaben von der ersten Idee bis zur schlüsselfertigen Übergabe vor Ort.",
    icon: Sparkles,
    img: "/images/enhanced/service01.jpg",
    link: "/full-service-leistungen#service",
    badge: "Fester Ansprechpartner",
    stats: "Rundum-Sorglos-Betreuung",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Kicker-Tisch für Pepsi",
    category: "Konstruktionen & Sonderbau",
    client: "Pepsi Cola Deutschland",
    img: "/images/enhanced/pepsi-kicker.jpg",
    direction: "left" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "Turnierstandard Sonderbau",
    desc: "Vollständig folierter Profi-Kickertisch mit LED-Spielfeldbeleuchtung und individuellem Ballauswurf für Gastro- und Eventpromotions.",
  },
  {
    title: "Punica Nostalgie-Mofa & Promotion-Scooter",
    category: "Promotion & Events",
    client: "Punica / PepsiCo",
    img: "/images/enhanced/punica-mofa.jpg",
    direction: "right" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "Fahrbereites Unikat",
    desc: "Mobiles Werbefahrzeug im nostalgischen Marken-Look, fahrbereit umgebaut für nationale Sommerkampagnen und Messen.",
  },
  {
    title: "Retro Coffee-Bike",
    category: "Messeauftritte & Roadshow",
    client: "Rockstar / C-Concepts",
    img: "/images/enhanced/Retro-coffee-bike1-1.jpg",
    direction: "left" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "Autarke Siebträger",
    desc: "Autarkes Dreirad mit professioneller Siebträgermaschine und vollflächigem Branding für Messestände und Guerilla-Marketing.",
  },
  {
    title: "Rockstar Snowboard Promotion",
    category: "Werbeaktionen",
    client: "Rockstar Energy",
    img: "/images/enhanced/rockstar-snowboard.jpg",
    direction: "right" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "UV-Spezialprint & Sammlerstück",
    desc: "Exklusive Marken-Snowboards mit speziellem High-End-Belag und fotorealistischem UV-Grafikdruck für Wintersport-Gewinnspiele.",
  },
  {
    title: "Gaming & Skate Simulator",
    category: "Gewinnspiele & Verlosung",
    client: "Rockstar Energy",
    img: "/images/enhanced/Gaming.jpg",
    direction: "left" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "Interaktive Sensorik",
    desc: "Digitaler und haptischer Gamification-Simulator für Jugend- und Extremsport-Events mit Sofortgewinn-Ausgabe.",
  },
  {
    title: "Branded Event-Barrels & Stehtische",
    category: "Sonderanfertigungen",
    client: "Punica / Rockstar",
    img: "/images/enhanced/barrel.jpg",
    direction: "right" as const,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "aspect-[16/10] max-h-52",
    badge: "Wetterfeste Veredelung",
    desc: "Upgecycelte Event-Ölfässer mit Echtholz-Tischplatte, integrierter LED-Beleuchtung und robuster Pulverbeschichtung.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24 overflow-hidden">
      {/* ========================================================
          1. HERO SECTION - TIGHT TOP SPACING (NO DEAD GAP)
         ======================================================== */}
      <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
        {/* Ambient Glowing Background Orbs */}
        <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT CONTENT: Compact & High Impact */}
            <Reveal direction="left" className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/15 shadow-xs text-xs font-mono uppercase tracking-wider text-brand-black">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                <span className="font-bold text-brand-accent">C-CONCEPTS</span>
                <span className="text-brand-black/30">•</span>
                <span>Full-Service Werbemittel</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-[1.08]">
                Starke Werbung <br />
                <span className="text-brand-black/85">für Ihr </span>
                <span className="relative inline-block text-brand-accent">
                  Unternehmen.
                  <span className="absolute -bottom-1.5 left-0 right-0 h-2 bg-brand-accent/20 rounded-full -z-10" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-brand-black/75 max-w-xl leading-relaxed font-normal">
                Ihr Premium-Partner für innovative Werbeartikel,
                Erlebnis-Promotion und maßgeschneiderte Sonderkonstruktionen.
                Wir entwickeln Unikate, organisieren die Konfektionierung und
                übernehmen die weltweite Logistik direkt an den Point of Sale.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <MagneticButton strength={15}>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-accent text-white text-sm sm:text-base font-bold shadow-md shadow-brand-accent/25 hover:bg-brand-accent-hover transition-all duration-200 group"
                  >
                    <span>Projekt anfragen</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={12}>
                  <Link
                    href="/werbeartikel-produkte"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-brand-black hover:text-white text-brand-black text-sm sm:text-base font-bold border border-brand-black/15 shadow-xs transition-all duration-200 group"
                  >
                    <span>Unikate entdecken</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </MagneticButton>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-brand-black/75 border-t border-brand-black/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Seit 1993 in Simmern</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">2.500 m² Hochregallager</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Sedex & GS1 zertifiziert</span>
                </div>
              </div>
            </Reveal>

            {/* RIGHT VISUAL: 100% Clean Image without covering badges */}
            <Reveal direction="right" className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden border border-brand-black/15 bg-white p-3 shadow-xl">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-900">
                    <Image
                      src="/images/enhanced/pepsi-kicker.jpg"
                      alt="C-Concepts Werbeartikel & Sonderkonstruktionen"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4 space-y-1 bg-white">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-brand-accent font-bold uppercase">Sonderkonstruktion</span>
                      <span className="text-brand-black/60">Turnier-Kicker Pepsi</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-brand-black">
                      Maßgefertigte Spitzenqualität aus Simmern
                    </h3>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. MARQUEE - PROMINENT, BOLD & HIGH-VISIBILITY LOGOS
         ======================================================== */}
      <section className="border-y border-brand-black/10 py-10 bg-white/90 shadow-xs space-y-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
            <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-wide text-brand-black">
              Vertrauen führender Weltmarken seit über 3 Jahrzehnten
            </h3>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-brand-accent">
            Pepsi • Rockstar • Punica • Chio • Lipton • Oasis
          </span>
        </div>

        {/* Marquee 1: Enlarged High-Visibility Client Logos */}
        <Marquee speed="normal" direction="left" className="py-2">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-5 px-7 py-4 rounded-2xl bg-white border border-brand-black/15 shadow-sm hover:border-brand-accent/50 hover:shadow-md transition-all duration-200 min-w-[270px] sm:min-w-[290px]"
            >
              <div className="relative h-14 w-28 flex items-center justify-center shrink-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={112}
                  height={56}
                  className="max-h-12 max-w-[110px] object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-base font-extrabold text-brand-black">{client.name}</div>
                <div className="text-xs text-brand-black/60 font-medium">{client.note}</div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Marquee 2: Capabilities Ticker */}
        <Marquee speed="slow" direction="right" className="py-1">
          {TICKER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-brand-black/65 px-5"
            >
              <span className="text-brand-accent font-extrabold text-base">•</span>
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ========================================================
          3. THREE-COLUMN HIGHLIGHTS - 100% EQUAL HEIGHT & ALIGNED
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 */}
          <Reveal direction="left" delay={0.1} className="h-full flex flex-col">
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-brand-black/15 shadow-sm hover:border-brand-accent/50 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider block">
                  Full-Service
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug min-h-[3.25rem] flex items-center">
                  Alles aus einer Hand
                </h3>
                <p className="text-sm text-brand-black/75 leading-relaxed font-normal">
                  Unser Rundum-Sorglos-Service für Ihre Werbeartikel: Von der kreativen Konzeption & Herstellung
                  über die Konfektionierung bis hin zur termingenauen Speditionslogistik.
                </p>
              </div>
              <div className="pt-5 border-t border-brand-black/10 mt-6">
                <Link
                  href="/full-service-leistungen"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-black hover:text-brand-accent transition-colors group"
                >
                  <span>Leistungen im Detail</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal direction="up" delay={0.2} className="h-full flex flex-col">
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-brand-black/15 shadow-sm hover:border-brand-accent/50 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider block">
                  Produkt-Portfolio
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug min-h-[3.25rem] flex items-center">
                  Maßgeschneiderte Unikate
                </h3>
                <p className="text-sm text-brand-black/75 leading-relaxed font-normal">
                  Entdecken Sie innovative Sonderbauten und Erlebnis-Attraktionen, die wir für
                  Kunden wie Pepsi, Rockstar und Punica realisiert haben – fernab von Standard-Katalogen.
                </p>
              </div>
              <div className="pt-5 border-t border-brand-black/10 mt-6">
                <Link
                  href="/werbeartikel-produkte"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-black hover:text-brand-accent transition-colors group"
                >
                  <span>Werbeartikel entdecken</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal direction="right" delay={0.3} className="h-full flex flex-col">
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-brand-black/15 shadow-sm hover:border-brand-accent/50 hover:shadow-md transition-all duration-200">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider block">
                  Standort & Kapazität
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug min-h-[3.25rem] flex items-center">
                  Simmern / Westerwald
                </h3>
                <p className="text-sm text-brand-black/75 leading-relaxed font-normal">
                  C-Concepts Vertriebs GmbH<br />
                  Im Maerenthal 6a & Siebenbornstraße 26<br />
                  56337 Simmern, Deutschland
                </p>
                <div className="text-xs font-mono font-semibold text-brand-black/60 pt-1">
                  ✓ 2.500 m² Hochregallager • Eigene Konfektionierung
                </div>
              </div>
              <div className="pt-5 border-t border-brand-black/10 mt-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-black hover:text-brand-accent transition-colors group"
                >
                  <span>Standort & Kontakt</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ========================================================
          4. STATS SECTION - PERFECT HORIZONTAL & VERTICAL ALIGNMENT
         ======================================================== */}
      <section className="bg-brand-black text-brand-white py-16 relative overflow-hidden border-y border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                Fakten & Leistungsdaten
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2 tracking-tight text-white">
                Verlässlichkeit, die man messen kann.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            {/* Stat 1 */}
            <div className="border-l-2 border-brand-accent pl-5 space-y-2">
              <div className="h-14 flex items-baseline">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-accent whitespace-nowrap">
                  <Counter to={30} suffix="+" />
                </span>
              </div>
              <div className="h-10 flex items-center text-base font-bold text-white leading-snug">
                Jahre Erfahrung
              </div>
              <div className="text-xs text-white/60">Gegründet im Jahr 1993</div>
            </div>

            {/* Stat 2 */}
            <div className="border-l-2 border-white/20 pl-5 space-y-2">
              <div className="h-14 flex items-baseline">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white whitespace-nowrap">
                  <Counter to={15} suffix="+" />
                </span>
              </div>
              <div className="h-10 flex items-center text-base font-bold text-white leading-snug">
                Feste Mitarbeiter
              </div>
              <div className="text-xs text-white/60">Beratung, Montage & Logistik</div>
            </div>

            {/* Stat 3 */}
            <div className="border-l-2 border-white/20 pl-5 space-y-2">
              <div className="h-14 flex items-baseline">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white whitespace-nowrap">
                  <Counter to={2500} suffix=" m²" />
                </span>
              </div>
              <div className="h-10 flex items-center text-base font-bold text-white leading-snug">
                Lager- & Bürofläche
              </div>
              <div className="text-xs text-white/60">Eigene Hallen in Simmern</div>
            </div>

            {/* Stat 4 */}
            <div className="border-l-2 border-brand-accent pl-5 space-y-2">
              <div className="h-14 flex items-baseline">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-accent whitespace-nowrap">
                  <Counter to={100} suffix="%" />
                </span>
              </div>
              <div className="h-10 flex items-center text-base font-bold text-white leading-snug">
                Pünktlichkeits-Rate
              </div>
              <div className="text-xs text-white/60">Just-in-Time am Point of Sale</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FOUR-STEP FULL-SERVICE (AUTHENTIC ENHANCED VISUALS)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal direction="left" className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
              Der 4-Stufen Prozess
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Vollservice von der Idee bis zum Point of Sale.
            </h2>
          </Reveal>
          <Reveal direction="right">
            <Link
              href="/full-service-leistungen"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-black text-white text-sm sm:text-base font-bold hover:bg-brand-accent transition-colors shadow-md"
            >
              <span>Alle Leistungen ansehen</span>
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_PREVIEW.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Reveal
                key={item.step}
                direction={isLeft ? "left" : "right"}
                delay={0.15 * (idx % 2)}
                className="h-full"
              >
                <div className="group p-7 sm:p-8 rounded-3xl bg-white border border-brand-black/15 hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-extrabold text-brand-accent">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-brand-black/5 flex items-center justify-center text-brand-black group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Enhanced Real Studio Card */}
                    <PremiumImageCard
                      src={item.img}
                      alt={item.title}
                      aspect="aspect-[16/10]"
                      badge={item.badge}
                      client={item.stats}
                      className="shadow-sm border border-brand-black/10"
                    />

                    {/* Content Details */}
                    <div className="space-y-2 pt-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-black group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-brand-black/10 mt-5 flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-black/50 font-semibold">C-Concepts Simmern</span>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-black group-hover:text-brand-accent transition-colors"
                    >
                      <span>Mehr zu {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          6. FEATURED PROJECTS (AUTHENTIC ENHANCED REAL BUILDS)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal direction="left" className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
              Ausgewählte Referenzen & Sonderbauten
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Maßgefertigte Unikate & Markenerlebnisse.
            </h2>
            <p className="text-brand-black/75 text-base sm:text-lg font-normal leading-relaxed">
              Entdecken Sie einen Auszug unserer bisherigen Werbeprodukte, Promotionsartikel
              sowie individuellen Sonderkonstruktionen direkt aus unserer eigenen Fertigung.
            </p>
          </Reveal>
          <Reveal direction="right">
            <Link
              href="/werbeartikel-produkte"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-black text-white text-sm sm:text-base font-bold hover:bg-brand-accent transition-all duration-300 shadow-md"
            >
              <span>Komplettes Portfolio ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {FEATURED_PROJECTS.map((proj) => (
            <Reveal
              key={proj.title}
              direction={proj.direction}
              className={`${proj.colSpan} w-full`}
            >
              <PremiumImageCard
                src={proj.img}
                alt={proj.title}
                aspect={proj.aspect}
                badge={proj.category}
                client={proj.client}
                title={proj.title}
                subtitle={proj.desc}
                className="h-full border-2 border-brand-black/10"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. TESTIMONIALS (BALANCED CLIENT STARS)
         ======================================================== */}
      <section className="bg-white border-y border-brand-black/10 py-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                Kundenstimmen & Referenzen
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Langjährige Partnerschaften auf höchstem Niveau.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pepsi Testimonial: Slide from LEFT */}
            <Reveal direction="left">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-white border border-brand-black/15 shadow-sm space-y-6 flex flex-col justify-between h-full hover:border-brand-accent/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug">
                    „Wir arbeiten seit 15 Jahren mit der Firma C-Concepts erfolgreich
                    auf höchstem Niveau zusammen. Vielen Dank dafür!“
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-brand-black/10 flex items-center justify-center shadow-xs">
                      <Image
                        src="/images/real/logo-pepsi.jpg"
                        alt="Pepsi Cola"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-brand-black">
                        Pepsi Cola Deutschland
                      </h4>
                      <span className="text-xs sm:text-sm text-brand-black/70 font-medium">
                        15 Jahre vertrauensvolle Zusammenarbeit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Oasis Testimonial: Slide from RIGHT */}
            <Reveal direction="right">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-white border border-brand-black/15 shadow-sm space-y-6 flex flex-col justify-between h-full hover:border-brand-accent/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug">
                    „Vielen Dank für die langjährige, verlässliche und kreative
                    Zusammenarbeit bei unseren Promotion-Events und Give-Aways.“
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-brand-black/10 flex items-center justify-center shadow-xs">
                      <Image
                        src="/images/real/logo-oasis.jpg"
                        alt="Oasis"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-brand-black">
                        Oasis Dekoration & Floristik
                      </h4>
                      <span className="text-xs sm:text-sm text-brand-black/70 font-medium">
                        12 Jahre erfolgreiche Partnerschaft
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. REMUNDI GRILL FEATURE (BALANCED IMPACT SECTION)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-brand-white p-8 sm:p-12 md:p-14 overflow-hidden border border-brand-white/10 shadow-xl relative">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <Reveal direction="left" className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-xs font-mono text-brand-accent uppercase tracking-wider font-bold">
                Eine Konstruktion aus unserem Hause
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Das Remundi Grill-Erlebnis
              </h2>

              <p className="text-sm sm:text-base text-brand-white/80 leading-relaxed font-normal">
                Vorbei sind die Zeiten, in denen der Grillmeister im Abseits sein
                Dasein fristete. Ab jetzt gibt es das gemeinsame Grill- und
                Genuss-Erlebnis. Remundi ist ein komplettes Konzept für Events
                aller Art – ob Promotion, Messe oder exklusives Kundenevent.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.youtube.com/@remundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-sm sm:text-base font-bold transition-all shadow-lg shadow-brand-accent/25 hover:scale-105"
                >
                  <span>Remundi Kanal ansehen</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold transition-colors border border-white/15"
                >
                  <span>Event anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Right Video Embed */}
            <Reveal direction="right" className="lg:col-span-7 space-y-4">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-xl bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/PSMCJBFatSg"
                  title="Das Remundi Grill-Erlebnis Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. SEDEX & ETHICAL STANDARDS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal direction="left">
          <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-brand-black/15 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-brand-accent/40 transition-colors">
            <div className="space-y-3.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent font-bold">
                <ShieldCheck className="w-4 h-4" />
                Zertifizierte Verantwortung & Compliance
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black">
                C-Concepts: Mitglied und Partner bei Sedex.
              </h3>
              <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed font-normal">
                Sedex bietet Mitgliedsunternehmen eine sichere Plattform für den
                Austausch und die Verwaltung von Informationen zu vier wichtigen
                Säulen: <strong>Gesundheit & Sicherheit</strong>,{" "}
                <strong>Arbeitsnormen</strong>, <strong>Unternehmensethik</strong>{" "}
                und <strong>Umwelt</strong>. Die Mitgliedschaft bei Sedex ist ein
                Zeichen für die Bereitschaft von C-Concepts, ethisch einwandfreie
                Lieferketten zu garantieren.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0 w-full sm:w-auto">
              <div className="p-5 rounded-2xl bg-brand-white border border-brand-black/10 flex items-center gap-4 shadow-xs">
                <Image
                  src="/images/real/sedex-logo.png"
                  alt="Sedex Member Logo"
                  width={120}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <div className="font-display font-bold text-sm text-brand-black">Sedex Member</div>
                  <div className="text-[11px] text-brand-black/60 font-mono">Geprüfte Kette</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-white border border-brand-black/10 text-center shadow-xs">
                <div className="font-display font-bold text-sm text-brand-black">GS1 Standard Partner</div>
                <div className="text-[11px] text-brand-black/60 font-mono">Global Traceability</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ========================================================
          10. FINAL CTA SECTION (BALANCED & CONFIDENT)
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal direction="up">
          <div className="relative rounded-3xl bg-brand-black text-brand-white p-10 md:p-16 text-center space-y-6 overflow-hidden shadow-xl border border-white/10">
            <div className="absolute -top-28 -left-28 w-80 h-80 bg-brand-accent/25 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
              Ihr Projekt startet hier
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto tracking-tight">
              Sie haben noch Fragen? Lassen Sie uns sprechen.
            </h2>

            <p className="text-brand-white/80 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
              Gemeinsam klären wir, was Sie mit Ihrer Werbung erreichen wollen. Wir
              entwickeln außergewöhnliche Konzepte ohne dabei Ihre Kosten aus dem
              Blick zu verlieren.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton strength={20}>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-white font-extrabold text-base sm:text-lg hover:bg-brand-accent-hover transition-all shadow-xl shadow-brand-accent/25 hover:scale-105"
                >
                  <span>Jetzt Termin vereinbaren!</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>

              <a
                href="tel:+4926309637924"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base sm:text-lg font-bold transition-colors border border-white/15"
              >
                <PhoneCall className="w-5 h-5 text-brand-accent" />
                <span>+49 (0) 2630 96379-24</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
