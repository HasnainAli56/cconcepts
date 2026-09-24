"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Filter,
  Sparkles,
  X,
  CheckCircle2,
  Phone,
  Eye,
} from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const CATEGORIES = [
  "Alle",
  "Konstruktionen und Sonderanfertigungen",
  "Messeauftritte",
  "Promotion & Events",
  "Werbeaktionen",
  "Streuartikel & Give Away's",
  "Gewinnspiele & Verlosung",
];

const PRODUCTS = [
  {
    id: "pepsi-kicker",
    title: "Kicker-Tisch für Pepsi",
    client: "Pepsi Cola Deutschland",
    category: "Konstruktionen und Sonderanfertigungen",
    image: "/images/enhanced/pepsi-kicker.jpg",
    desc: "Vollständig folierter Profi-Kickertisch mit LED-Spielfeldbeleuchtung und individuellem Ballauswurf für Gastronomie- und Eventpromotions.",
    specs: ["Sonderbau & Folierung", "Turnierstandard", "Integrierte Beleuchtung"],
  },
  {
    id: "punica-mofa",
    title: "Punica Nostalgie-Mofa & Scooter",
    client: "Punica / PepsiCo",
    category: "Promotion & Events",
    image: "/images/enhanced/punica-mofa.jpg",
    desc: "Mobiles Promotionfahrzeug im nostalgischen Marken-Look. Individuell modifiziert und voll fahrbereit als zentraler Blickfang für Kampagnen.",
    specs: ["Fahrbereites Custom-Modell", "Retro-Markenlackierung", "POS- & Event-Einsatz"],
  },
  {
    id: "remundi-grill",
    title: "Remundi-Scooter & Grill",
    client: "Remundi / Punica",
    category: "Konstruktionen und Sonderanfertigungen",
    image: "/images/enhanced/remundi_grill_Stein.jpg",
    desc: "Mobiles Gourmet-Grillkonzept auf Custom-Roller-Basis. Die zentrale Attraktion für exklusive Firmenevents, Messen und Festivals.",
    specs: ["Mobiles Showcooking", "Maßgeschweißte Halterungen", "Brand-Design"],
  },
  {
    id: "coffee-bike",
    title: "Retro Coffee-Bike",
    client: "Rockstar / C-Concepts",
    category: "Messeauftritte",
    image: "/images/enhanced/Retro-coffee-bike1-1.jpg",
    desc: "Autarkes Dreirad mit professioneller Siebträgermaschine und vollflächigem Branding für Messestände, Roadshows und Guerilla-Marketing.",
    specs: ["Autarke Wasserversorgung", "Italienische Siebträger", "Vollfolierung"],
  },
  {
    id: "rockstar-snowboard",
    title: "Rockstar Snowboard Promotion",
    client: "Rockstar Energy",
    category: "Werbeaktionen",
    image: "/images/enhanced/rockstar-snowboard.jpg",
    desc: "Exklusive Marken-Snowboards mit High-End-Belag und UV-Grafikprint für Wintersport-Gewinnspiele und Händlerprämien.",
    specs: ["Echtes Profi-Snowboard", "UV-beständiger Druck", "Limitiertes Sammlerstück"],
  },
  {
    id: "skate-game",
    title: "Gaming & Skate-Simulator",
    client: "Rockstar Energy",
    category: "Gewinnspiele & Verlosung",
    image: "/images/enhanced/Gaming.jpg",
    desc: "Digitaler und haptischer Gamification-Simulator für Jugend- und Extremsport-Events mit sofortiger Punkte- und Gewinn-Ausgabe.",
    specs: ["Interaktive Sensorik", "Highscore-Monitor", "Branded Game-Stage"],
  },
  {
    id: "pepsi-becher",
    title: "Pepsi Becher & Stadion-Tools",
    client: "Pepsi Cola",
    category: "Streuartikel & Give Away's",
    image: "/images/enhanced/pepsi-becher.jpg",
    desc: "Robuste, IML-bedruckte Mehrweg-Trinkbecher mit Pfandsystem für Großveranstaltungen, Konzerte und Fußballstadien.",
    specs: ["BPA-frei & spülmaschinenfest", "IML-Fotodruck", "Ressourcenschonend"],
  },
  {
    id: "barrel-stehtisch",
    title: "Branded Event-Barrels",
    client: "Punica / Rockstar",
    category: "Konstruktionen und Sonderanfertigungen",
    image: "/images/enhanced/barrel.jpg",
    desc: "Upgecycelte Ölfässer mit Echtholz-Tischplatte, integrierter LED-Beleuchtung und wetterfester Pulverbeschichtung.",
    specs: ["Wetterfeste Beschichtung", "Echtholz-Finish", "Stapelbar & robust"],
  },
  {
    id: "torwand",
    title: "Aufblasbare Torwand & Eventmodule",
    client: "Pepsi / Intersnack",
    category: "Promotion & Events",
    image: "/images/enhanced/Aufblasbare-Torwand.jpg",
    desc: "Riesige aufblasbare Torwand für Fußball-Fanmeilen, Schulfeste und Sportplatz-Aktionen. Schneller Auf- und Abbau mit Dauergebläse.",
    specs: ["B1 feuerhemmend zertifiziert", "Dauergebläse inkl.", "Fotorealistischer Druck"],
  },
  {
    id: "ninebot-scooter",
    title: "Ninebot E-Scooter Lipton Edition",
    client: "Lipton Ice Tea",
    category: "Gewinnspiele & Verlosung",
    image: "/images/enhanced/Ninebot-E-IceTea.jpg",
    desc: "Segway-Ninebot E-Scooter mit straßenzugelassener Sonderbeklebung und Display für Handelspromotions und Sommer-Verlosungen.",
    specs: ["Straßenzulassung (StVZO)", "Sonderfolierung", "Hauptgewinn-Kategorie"],
  },
  {
    id: "lunchboxen",
    title: "Multi-Fach Lunchboxen",
    client: "Handelskunden & FMCG",
    category: "Streuartikel & Give Away's",
    image: "/images/enhanced/Lunchbox_mit_Brot_Gemuese_oder-Joghurt-Fach.png",
    desc: "Hochwertige Brotdosen mit separaten Fächern für Brot, Gemüse und Joghurt. Langlebig, lebensmittelecht und spülmaschinengeeignet.",
    specs: ["BPA-frei / Lebensmittelzertifikat", "Mehrfarbiger Siebdruck", "Praktische Klickverschlüsse"],
  },
  {
    id: "pos-rewe",
    title: "POS-Erlebnisplatzierung Handelsmärkte",
    client: "Intersnack / REWE & Globus",
    category: "Werbeaktionen",
    image: "/images/enhanced/ReweCenterMannheim.jpg",
    desc: "Großflächige Erlebnis-Warenplatzierungen im Lebensmitteleinzelhandel. Steigert die Abverkaufszahlen und sorgt für maximale Markenpräsenz im Markt.",
    specs: ["Modular anpassbar", "Tragfähige Konstruktion", "Schnelle Montage im Markt"],
  },
];

export default function ProduktePage() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof PRODUCTS)[0] | null
  >(null);

  const filteredProducts =
    activeFilter === "Alle"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-16 md:space-y-24 pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/15 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
            <span className="font-bold text-brand-accent">Portfolio</span>
            <span className="text-brand-black/30">•</span>
            <span>Sonderanfertigungen & Unikate</span>
          </div>
          <TextReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-[1.08]">
              Werbeartikel & Unikate, die begeistern.
            </h1>
          </TextReveal>
          <p className="text-base sm:text-lg lg:text-xl text-brand-black/75 leading-relaxed font-normal">
            Entdecken Sie einen Auszug unserer bisherigen Werbeprodukte,
            Promotionsartikel sowie individuellen Sonderkonstruktionen –
            maßgeschneidert und fernab der üblichen Katalogware.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="pt-8">
          <div className="flex items-center gap-2 mb-3.5 text-xs font-mono text-brand-black/70 font-bold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-brand-accent" />
            <span>Kategorie filtern:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-brand-black text-white shadow-md scale-102"
                      : "bg-white border border-brand-black/15 text-brand-black/80 hover:bg-brand-black/5 hover:text-brand-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Subpage Deep-Dive Links */}
          <div className="mt-5 pt-4 border-t border-brand-black/10 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-black/70">
            <span className="font-mono uppercase text-brand-accent font-bold">Direkt zu den Themenseiten:</span>
            <Link href="/werbeartikel-produkte/konstruktionen-und-sonderanfertigungen" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Sonderanfertigungen
            </Link>
            <span>•</span>
            <Link href="/werbeartikel-produkte/messeauftritte" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Messeauftritte
            </Link>
            <span>•</span>
            <Link href="/werbeartikel-produkte/promotion-events" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Promotion & Events
            </Link>
            <span>•</span>
            <Link href="/werbeartikel-produkte/werbeaktionen" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Werbeaktionen
            </Link>
            <span>•</span>
            <Link href="/werbeartikel-produkte/streuartikel-give-aways" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Streuartikel
            </Link>
            <span>•</span>
            <Link href="/werbeartikel-produkte/gewinnspiele-verlosung" className="hover:text-brand-accent transition-colors underline underline-offset-2">
              Gewinnspiele & Verlosung
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Products Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProducts.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white border-2 border-brand-black/10 hover:border-brand-accent/50 hover:shadow-2xl transition-all duration-500"
              >
                <div>
                  {/* Ultra-HD Photo Container */}
                  <div
                    onClick={() => setSelectedProduct(item)}
                    className="relative aspect-[16/10] max-h-40 sm:max-h-44 w-full overflow-hidden bg-neutral-950 cursor-pointer rounded-t-2xl"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs sm:text-sm font-mono font-semibold tracking-wider border border-white/15">
                        {item.client}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                    </div>

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-6 py-3 rounded-full bg-white text-brand-black text-sm font-bold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-brand-accent" />
                        <span>Details & Spezifikationen</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content with Balanced Typography */}
                  <div className="p-6 sm:p-7 space-y-2.5">
                    <div className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wide">
                      {item.category}
                    </div>
                    <h3
                      onClick={() => setSelectedProduct(item)}
                      className="font-display text-xl sm:text-2xl font-bold text-brand-black leading-snug group-hover:text-brand-accent transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-black/75 leading-relaxed line-clamp-2 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:p-7 pt-0 border-t border-brand-black/10 flex items-center justify-between mt-3">
                  <span className="text-xs text-brand-black/60 font-mono font-semibold">
                    C-Concepts Unikat
                  </span>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-black group-hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    <span>Ansehen & Anfragen</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox / Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-brand-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-black/60 text-white flex items-center justify-center hover:bg-brand-black transition-colors cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full bg-brand-black">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-brand-black/80 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider">
                    {selectedProduct.client}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-brand-accent font-semibold">
                    {selectedProduct.category}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black">
                    {selectedProduct.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-brand-black/80 leading-relaxed">
                  {selectedProduct.desc}
                </p>

                {selectedProduct.specs && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase text-brand-black/60 font-semibold">
                      Highlights & Details
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-black/5 text-xs font-medium text-brand-black/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-brand-black/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/kontakt"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-accent text-white text-sm font-semibold hover:bg-brand-accent-hover transition-colors shadow-md"
                  >
                    <span>Dieses Projekt unverbindlich anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+4926309637924"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-black/80 hover:text-brand-accent transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-accent" />
                    <span>+49 (0) 2630 96379-24</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Special Request Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-14 rounded-3xl bg-brand-black text-brand-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
            <span className="text-xs font-mono uppercase text-brand-accent font-semibold tracking-wider">
              Sonderanfertigungen nach Maß
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-extrabold text-white">
              Sie haben eine ganz eigene Idee?
            </h3>
            <p className="text-sm sm:text-base text-brand-white/70 leading-relaxed">
              Ob Spezialmechanik, interaktive Promotionmodule oder ausgefallene
              Materialien: Wir konstruieren und realisieren Unikate exakt nach
              Ihren Wünschen.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <MagneticButton strength={15}>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shadow-xl shadow-brand-accent/20"
              >
                <span>Idee unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
