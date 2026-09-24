import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-12 pb-8 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section / Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-brand-white/15">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="bg-white px-3.5 py-1.5 rounded-xl inline-block shadow-sm">
                <Image
                  src="/images/real/cconcepts-logo.png"
                  alt="C-Concepts Logo"
                  width={140}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-white/70 font-semibold">
                Full-Service seit 1993
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-white leading-tight">
              Bereit für Ihren nächsten Werbeerfolg?
            </h2>
            <p className="text-brand-white/80 max-w-lg leading-relaxed text-sm sm:text-base font-normal">
              Lassen Sie uns gemeinsam außergewöhnliche Konzepte realisieren. Von der ersten Skizze über Sonderanfertigungen bis hin zur weltweiten Logistik.
            </p>
            <div className="pt-1">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-hover transition-all shadow-md shadow-brand-accent/25 tracking-wide"
              >
                <span>Jetzt Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-6">
            {/* Contact Person 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-white/5 border border-brand-white/10 space-y-2 shadow-sm backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-accent font-mono">
                Geschäftsleitung & Beratung
              </div>
              <h3 className="font-display text-lg font-bold text-brand-white">Andreas Sauer</h3>
              <div className="space-y-1 text-xs text-brand-white/80">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <a href="tel:+4926309637924" className="hover:text-white transition-colors font-medium">
                    +49 (0) 2630 96379-24
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <a href="mailto:sauer@cconcepts.de" className="hover:text-brand-accent transition-colors font-semibold underline underline-offset-2 decoration-brand-accent/50">
                    sauer@cconcepts.de
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Person 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-white/5 border border-brand-white/10 space-y-2 shadow-sm backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-wider font-bold text-brand-accent font-mono">
                Geschäftsleitung & Logistik
              </div>
              <h3 className="font-display text-lg font-bold text-brand-white">Ralf Weisbrod</h3>
              <div className="space-y-1 text-xs text-brand-white/80">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <a href="tel:+4926209409928" className="hover:text-white transition-colors font-medium">
                    +49 (0) 2620 94099-28
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <a href="mailto:weisbrod@cconcepts.de" className="hover:text-brand-accent transition-colors font-semibold underline underline-offset-2 decoration-brand-accent/50">
                    weisbrod@cconcepts.de
                  </a>
                </p>
              </div>
            </div>

            {/* Location & Trust */}
            <div className="sm:col-span-2 p-4 sm:p-5 rounded-2xl bg-brand-white/5 border border-brand-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-brand-white/80 leading-snug">
                  <strong className="text-brand-white block text-sm font-bold">Standort & Zentrallager</strong>
                  Siebenbornstraße 26 / Im Maerenthal 6a, 56337 Simmern
                </div>
              </div>
              <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white text-brand-black shadow-sm">
                <Image
                  src="/images/real/sedex-logo.png"
                  alt="Sedex Member"
                  width={75}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[11px] font-black uppercase text-brand-black border-l border-brand-black/20 pl-2.5">
                  Sedex Member
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-brand-white/15 text-sm">
          <div>
            <h4 className="font-display font-extrabold text-brand-white text-lg mb-5">Navigation</h4>
            <ul className="space-y-3 text-brand-white/75 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-accent transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/full-service-leistungen" className="hover:text-brand-accent transition-colors">
                  Full-Service-Leistungen
                </Link>
              </li>
              <li>
                <Link href="/werbeartikel-produkte" className="hover:text-brand-accent transition-colors">
                  Werbeartikel & Kreation
                </Link>
              </li>
              <li>
                <Link href="/uber-uns" className="hover:text-brand-accent transition-colors">
                  Über Uns & Historie
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-brand-accent transition-colors">
                  Kontakt & Anfahrt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-brand-white text-lg mb-5">Leistungen</h4>
            <ul className="space-y-3 text-brand-white/75 font-medium">
              <li>
                <Link href="/full-service-leistungen#planung" className="hover:text-brand-accent transition-colors">
                  Planung & Beratung
                </Link>
              </li>
              <li>
                <Link href="/full-service-leistungen#logistik" className="hover:text-brand-accent transition-colors">
                  Logistik & Lagerung
                </Link>
              </li>
              <li>
                <Link href="/full-service-leistungen#konfektionierung" className="hover:text-brand-accent transition-colors">
                  Verpackung & Konfektion
                </Link>
              </li>
              <li>
                <Link href="/full-service-leistungen#service" className="hover:text-brand-accent transition-colors">
                  Full-Service Dienstleistung
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-brand-white text-lg mb-5">Partner & Brands</h4>
            <ul className="space-y-3 text-brand-white/75 font-medium">
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Remundi Feuerstellen
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Wema-Step Promotion
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Pepsi Cola Turnier-Kicker
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-brand-white text-lg mb-5">Rechtliches</h4>
            <ul className="space-y-3 text-brand-white/75 font-medium">
              <li>
                <Link href="/impressum" className="hover:text-brand-accent transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-brand-accent transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-brand-accent transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-white/60 font-medium">
          <p>© {new Date().getFullYear()} C-Concepts Vertriebs GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-brand-white/80 font-semibold">Made in Simmern / Westerwald</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
