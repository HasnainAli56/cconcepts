import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Wrench, ShieldCheck } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const PROJECTS = [
  {
    title: "Pepsi Cola Turnier-Kicker",
    client: "PepsiCo Deutschland",
    desc: "Offizieller Profi-Tischfußballtisch mit individualisiertem Spielfeld, gebrandeten Banden und robuster Turniermechanik für Gastronomie und Events.",
    image: "/images/enhanced/pepsi-kicker.jpg",
  },
  {
    title: "Retro Coffee & Promotion Bike",
    client: "C-Concepts Event",
    desc: "Handgefertigtes mobiles Dreirad mit gebrandeter Holztheke, integrierter Kühlung und Schirmhalterung für flexible Verkostungen im Innen- und Außenbereich.",
    image: "/images/enhanced/Retro-coffee-bike1-1.jpg",
  },
  {
    title: "Punica Retro-Mofa",
    client: "Punica / PepsiCo",
    desc: "Voll funktionsfähiges, speziallackiertes Retro-Moped als aufmerksamkeitsstarker Hauptgewinn für nationale Handels-Gewinnspiele.",
    image: "/images/enhanced/punica-mofa.jpg",
  },
  {
    title: "Ölfass-Stehtische & Barrels",
    client: "Motorsport & Getränkemarken",
    desc: "Upcycling von 200L-Stahlfässern zu robusten Stehtischen mit individuellem Foliendruck, Holztischplatten und wetterfester Pulverbeschichtung.",
    image: "/images/enhanced/barrel.jpg",
  },
  {
    title: "Rockstar Energy Custom Snowboards",
    client: "Rockstar Energy",
    desc: "Hochwertige Sportausrüstung mit markanten Rockstar-Grafiken als exklusiver Preis für Winter-Promotions und Events.",
    image: "/images/enhanced/rockstar-snowboard.jpg",
  },
  {
    title: "Remundi Krombacher Feuerstellen-Grill",
    client: "Krombacher / Remundi",
    desc: "Handgefertigter Luxus-Grill mit Natursteinsockel und gelasertem Markenlogo für hochwertige Grill-Promotions.",
    image: "/images/enhanced/remundi-krombacher.jpg",
  },
];

export default function KonstruktionenPage() {
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
            <span className="font-bold text-brand-accent">Sonderbauten</span>
            <span className="text-brand-black/30">•</span>
            <span>Eyecatcher & Unikate</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Konstruktionen & Sonderanfertigungen
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Wir bieten Ihnen fast jede Form der Sonderanfertigung an. Echte Eyecatcher, die Ihr Produkt oder Unternehmen garantiert in den Mittelpunkt rücken und nachhaltig im Gedächtnis bleiben.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((item) => (
            <div key={item.title} className="flex flex-col h-full">
              <PremiumImageCard
                src={item.image}
                alt={item.title}
                aspect="aspect-[16/10] max-h-52"
                badge={item.client}
                title={item.title}
                subtitle={item.desc}
                className="h-full border border-brand-black/10 shadow-lg hover:shadow-2xl transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Haben Sie eine eigene Sonderbau-Idee?</h3>
            <p className="text-white/75 text-sm sm:text-base">Von der ersten Skizze über CAD-Modelle bis zur fertigen Konstruktion in unserer Werkstatt.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Sonderanfertigung anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
