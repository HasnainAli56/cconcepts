import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  History,
  FileCheck,
  Sparkles,
  MapPin,
  Clock,
  Warehouse,
} from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import PremiumImageCard from "@/components/ui/PremiumImageCard";

const TIMELINE = [
  {
    year: "1993",
    title: "Gründung in Simmern / Westerwald",
    desc: "Andreas Sauer und Ralf Weisbrod gründen die C-Concepts Vertriebs GmbH mit dem Ziel, maßgeschneiderte Werbeartikel und innovative Promotionlösungen aus einer Hand zu realisieren.",
  },
  {
    year: "2004",
    title: "Partnerschaft mit Weltmarken",
    desc: "Start langjähriger Kooperationen mit globalen Marken wie Pepsi Cola, Punica, Rockstar Energy und Remundi Grill. Entwicklung von Sonderanfertigungen und exklusiven Gewinnspiel-Preisen.",
  },
  {
    year: "2014",
    title: "Erweiterung Konfektionierung & Co-Packing",
    desc: "Aufbau eigener Kapazitäten für manuelle & maschinelle Veredelung, Neuverpackung, Sortierung und Set-Zusammenstellung direkt an unserem Standort.",
  },
  {
    year: "Heute",
    title: "2.500 m² Full-Service Logistikzentrum",
    desc: "Über 3 Jahrzehnte verlässliche Qualität, Sedex-zertifizierte Lieferketten, GS1-Standardisierung und weltweiter Just-in-Time-Versand direkt an den Point of Sale.",
  },
];

const FOUNDERS = [
  {
    name: "Andreas Sauer",
    role: "Geschäftsleitung & Beratung",
    tagline: "Kundenberatung, Sonderanfertigungen & Markenkonzepte",
    phone: "+49 (0) 2630 96379-24",
    email: "sauer@cconcepts.de",
    bio: "Mit über 30 Jahren Branchenerfahrung entwickelt Andreas Sauer individuelle Marketingkonzepte, Sonderkonstruktionen und innovative Werbeartikel für namhafte Marken. Ihr direkter Ansprechpartner für Konzeption, Musterbau und Realisierung.",
  },
  {
    name: "Ralf Weisbrod",
    role: "Geschäftsleitung & Logistik",
    tagline: "Zentrallager, Konfektionierung & POS-Distribution",
    phone: "+49 (0) 2620 94099-28",
    email: "weisbrod@cconcepts.de",
    bio: "Ralf Weisbrod steuert unser 2.500 m² großes Hochregallager, die hausinterne Konfektionierung und weltweite Transportketten. Er garantiert pünktliche POS-Belieferung, lückenlose Qualitätssicherung und modernste Logistikprozesse.",
  },
];

export default function UberUnsPage() {
  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-6">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-brand-black/10 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="font-bold text-brand-accent">Über Uns</span>
            <span className="text-brand-black/30">•</span>
            <span>Seit 1993 in Simmern / Westerwald</span>
          </div>

          <TextReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-[1.08]">
              Innovative Marketing Concepts – Made in Germany.
            </h1>
          </TextReveal>

          <p className="text-lg sm:text-xl text-brand-black/80 leading-relaxed font-normal max-w-3xl">
            Die Firma <strong>C-Concepts Vertriebs GmbH</strong> mit Sitz in Simmern wurde im Jahr 1993 von Andreas Sauer und Ralf Weisbrod gegründet. Seit über drei Jahrzehnten verbinden wir persönliche Beratung, kreative Sonderanfertigungen und eigene Logistik zu einem reibungslosen Full-Service.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal direction="left" className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
                Tradition & Verlässlichkeit
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Vom Entwurf bis direkt an den Point of Sale.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-brand-black/80 leading-relaxed font-normal">
              <p>
                Wir haben es uns zur Aufgabe gesetzt, individuelle und ganzheitliche Werbeartikel-Lösungen zu entwickeln. Hierzu zählen neben der Beschaffung und Sonderkonstruktion vor allem auch die hauseigene Konfektionierung Ihrer Ware.
              </p>
              <p>
                Das bedeutet: Wir verpacken oder etikettieren Ihre Werbemittel neu, führen Qualitätskontrollen durch und kommissionieren nach Stückzahl oder Gewicht – flexibel, termintreu und auch für Ihre bereits bestehenden Warenbestände.
              </p>
              <p>
                Durch Innovation und qualitativ hochwertige Arbeit haben wir uns bei international agierenden Marken wie <strong>Pepsi Cola</strong>, <strong>Punica</strong>, <strong>Rockstar Energy</strong> und <strong>Remundi</strong> als geschätzter Langzeitpartner etabliert.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand-black">1993</div>
                <div className="text-xs sm:text-sm text-brand-black/70 font-semibold mt-1">Gegründet in Simmern</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand-accent">2.500 m²</div>
                <div className="text-xs sm:text-sm text-brand-black/70 font-semibold mt-1">Lager- & Logistikfläche</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-brand-black/10 shadow-sm col-span-2 sm:col-span-1">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-600">Sedex</div>
                <div className="text-xs sm:text-sm text-brand-black/70 font-semibold mt-1">Audited Member</div>
              </div>
            </div>
          </Reveal>

          {/* Real Headquarters Photo */}
          <Reveal direction="right" className="lg:col-span-6">
            <PremiumImageCard
              src="/images/enhanced/CConcepts_Home.jpg"
              alt="C-Concepts Unternehmenssitz in Simmern Westerwald"
              aspect="aspect-[4/3]"
              badge="Unternehmenssitz Simmern"
              client="Im Maerenthal 6a / Siebenbornstraße"
              title="C-Concepts Firmengebäude"
              subtitle="Verwaltung, Musterbau und modernes Zentrallager in Simmern / Westerwald."
              className="border border-brand-black/10 shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Key Stats Counter Section */}
      <section className="bg-brand-black text-brand-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
              Zahlen & Fakten
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Warum Werbeartikel von CConcepts?
            </h2>
            <p className="text-base sm:text-lg text-white/70">
              Dank unserer langjährigen Erfahrung und umfassenden Organisationsstruktur setzen wir Projekte flexibel, verlässlich und zeitnah um.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <div className="font-display text-4xl sm:text-5xl font-black text-brand-accent">30+</div>
              <div className="text-base font-bold text-white">Jahre Erfahrung</div>
              <p className="text-xs text-white/60">Kontinuierliches Wachstum seit der Gründung 1993</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <div className="font-display text-4xl sm:text-5xl font-black text-white">5</div>
              <div className="text-base font-bold text-white">Spezialisten vor Ort</div>
              <p className="text-xs text-white/60">Festes Kernteam für Beratung, Grafik & Konfektion</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <div className="font-display text-4xl sm:text-5xl font-black text-white">2.500 m²</div>
              <div className="text-base font-bold text-white">Büro & Zentrallager</div>
              <p className="text-xs text-white/60">Hochregale & temperierte Konfektionszonen</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
              <div className="font-display text-4xl sm:text-5xl font-black text-emerald-400">100%</div>
              <div className="text-base font-bold text-white">Zuverlässig</div>
              <p className="text-xs text-white/60">Pünktliche Auslieferung direkt an den POS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Team Photo & Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
            <Users className="w-4 h-4" />
            <span>Unser Experten-Team</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-black">
            Persönlicher Kontakt. Kein anonymes Callcenter.
          </h2>
          <p className="text-base sm:text-lg text-brand-black/75 leading-relaxed">
            Durch unsere jahrzehntelange Erfahrung und unseren engen Kundenkontakt wissen wir genau, worauf es ankommt. Unsere Mitarbeiter nehmen sich Zeit für Sie, um Ihren Kundenwunsch zur vollsten Zufriedenheit umzusetzen.
          </p>
        </div>

        {/* Real Team Photo */}
        <div className="max-w-5xl mx-auto">
          <PremiumImageCard
            src="/images/enhanced/team.jpg"
            alt="Das C-Concepts Team in Simmern Westerwald"
            aspect="aspect-[16/9] sm:aspect-[21/9]"
            badge="C-Concepts Experten-Team"
            client="Simmern / Westerwald"
            title="Gemeinsam für Ihren Werbeerfolg"
            subtitle="Unser Team vor Ort in Simmern vereint Produktberatung, CAD-Konstruktion, Konfektionierung und Logistik."
            className="border border-brand-black/10 shadow-2xl"
          />
        </div>

        {/* Real Founders Cards - Authentic, Elegant, No AI placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-6">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="p-8 rounded-3xl bg-white border border-brand-black/10 shadow-md space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-brand-black">
                      {founder.name}
                    </h3>
                    <div className="text-xs font-mono uppercase text-brand-accent font-bold tracking-wider mt-1">
                      {founder.role}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-black/5 flex items-center justify-center text-brand-accent shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-sm font-semibold text-brand-black/90">
                  {founder.tagline}
                </div>

                <p className="text-base text-brand-black/75 leading-relaxed font-normal">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-black/10 space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a
                    href={`tel:${founder.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-brand-accent font-semibold text-brand-black transition-colors"
                  >
                    {founder.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a
                    href={`mailto:${founder.email}`}
                    className="hover:text-brand-accent font-semibold text-brand-accent transition-colors underline underline-offset-4"
                  >
                    {founder.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-brand-accent font-bold">
            <History className="w-4 h-4" />
            Firmengeschichte
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black">
            30 Jahre Kontinuität & Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIMELINE.map((item) => (
            <div
              key={item.year}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-brand-black/10 hover:border-brand-accent/40 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="font-mono text-3xl font-extrabold text-brand-accent">
                  {item.year}
                </div>
                <h3 className="font-display font-bold text-lg text-brand-black">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-black/75 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-brand-black/10 text-xs text-brand-black/50 font-mono font-medium">
                C-Concepts Simmern
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Trust Badges */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-black/10 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-accent font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Zertifizierte Standards
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-black">
              Qualität, Ethik und globale Handelsstandards.
            </h3>
            <p className="text-base text-brand-black/75 leading-relaxed font-normal">
              Als offizielles <strong>Sedex-Mitglied</strong> und zertifizierter <strong>GS1 Germany Partner</strong> garantieren wir transparente Lieferketten, faire Arbeitsbedingungen und internationale Kennzeichnungsstandards für den weltweiten Handel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-brand-white border border-brand-black/10 space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/real/sedex-logo.png"
                  alt="Sedex Member Logo"
                  width={100}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="text-sm font-bold text-brand-black">Sedex Member</div>
              <p className="text-xs text-brand-black/70">
                Geprüfte Nachhaltigkeit und soziale Verantwortung in der Beschaffung.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-white border border-brand-black/10 space-y-3">
              <div className="flex items-center gap-2 text-brand-black">
                <FileCheck className="w-7 h-7 text-brand-accent" />
                <span className="font-display font-black text-lg">GS1 Germany</span>
              </div>
              <div className="text-sm font-bold text-brand-black">GS1 Zertifiziert</div>
              <p className="text-xs text-brand-black/70">
                Offizielle GTIN- & EAN-Standards für barcode-geführte Logistik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-brand-black text-brand-white p-10 md:p-14 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
            Direktkontakt & Beratung
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold max-w-xl mx-auto">
            Besuchen Sie uns in Simmern im Westerwald.
          </h2>
          <p className="text-brand-white/80 max-w-lg mx-auto text-base">
            Gerne zeigen wir Ihnen vor Ort unsere Ausstellungsstücke, Muster und die Möglichkeiten unseres 2.500 m² Logistikzentrums.
          </p>
          <div className="pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent text-white font-bold text-base hover:bg-brand-accent-hover transition-all shadow-xl shadow-brand-accent/25"
            >
              <span>Jetzt Termin vereinbaren</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
