import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AGBPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-brand-black/60 hover:text-brand-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück zur Startseite
      </Link>

      <h1 className="font-display text-3xl md:text-5xl font-extrabold text-brand-black">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="space-y-6 text-sm text-brand-black/80 leading-relaxed bg-white p-8 rounded-3xl border border-brand-black/10">
        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            § 1 Geltungsbereich
          </h2>
          <p>
            Für alle Lieferungen und Leistungen der C-Concepts Vertriebs GmbH an
            Unternehmer im Sinne des § 14 BGB gelten ausschließlich die
            nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum
            Zeitpunkt der Bestellung gültigen Fassung.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            § 2 Angebot und Vertragsschluss
          </h2>
          <p>
            Unsere Angebote sind freibleibend und unverbindlich, es sei denn, sie
            sind ausdrücklich als verbindlich gekennzeichnet. Aufträge kommen
            durch unsere schriftliche Auftragsbestätigung oder durch Ausführung
            der Lieferung zustande.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            § 3 Sonderanfertigungen & Freigabe
          </h2>
          <p>
            Bei kundenspezifischen Werbeartikeln und Sonderkonstruktionen bedarf
            die Ausführung der schriftlichen Druck- bzw. Konstruktionsfreigabe
            durch den Auftraggeber.
          </p>
        </div>
      </div>
    </div>
  );
}
