import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Gift, Coffee, Sparkles } from "lucide-react";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const GIVEAWAY_ITEMS = [
  {
    title: "Premium Lunchboxen mit Fächern",
    client: "Nachhaltige Werbeartikel",
    desc: "BPA-freie Mehrweg-Lunchboxen mit separaten Fächern für Brot, Gemüse und Joghurt. Langlebig, alltagstauglich und spülmaschinenfest.",
    image: "/images/enhanced/Lunchbox_mit_Brot_Gemuese_oder-Joghurt-Fach.png",
  },
  {
    title: "Mehrwegbecher & Trinkflaschen",
    client: "Pepsi Cola Promotion",
    desc: "Hochwertige Hartplastikbecher und Trinkflaschen mit langlebigem Markendruck für Events, Messen und Gastronomie.",
    image: "/images/enhanced/pepsi-becher.jpg",
  },
  {
    title: "Gaming- & Lifestyle-Merchandising",
    client: "Young Target Groups",
    desc: "Trendartikel wie Headset-Halterungen, Mousepads, LED-Gadgets und Soundboxen mit Firmenlogo für moderne Zielgruppen.",
    image: "/images/enhanced/Gaming.jpg",
  },
];

export default function StreuartikelGiveawaysPage() {
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
            <span className="font-bold text-brand-accent">Give-Aways</span>
            <span className="text-brand-black/30">•</span>
            <span>Alltagsbegleiter</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-tight">
            Streuartikel & Give Away´s
          </h1>
          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Kleine Präsente kommen bei jedermann gut an. Durch hohe Alltagstauglichkeit, ansprechendes Design und nachhaltige Materialien entfalten unsere Give-Aways eine langanhaltende Werbewirkung.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GIVEAWAY_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col h-full">
              <PremiumImageCard
                src={item.image}
                alt={item.title}
                aspect="aspect-[16/10] max-h-52"
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
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Suchen Sie nach dem perfekten Werbeartikel?</h3>
            <p className="text-white/75 text-sm sm:text-base">Wir finden Artikel, die zu Ihrer Marke passen und täglich gerne genutzt werden.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-accent text-white font-bold text-sm sm:text-base hover:bg-brand-accent-hover transition-colors shrink-0 shadow-lg"
          >
            <span>Katalog anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
