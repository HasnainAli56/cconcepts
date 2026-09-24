import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
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
        Impressum
      </h1>

      <div className="space-y-6 text-sm text-brand-black/80 leading-relaxed bg-white p-8 rounded-3xl border border-brand-black/10">
        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            <strong>C-Concepts Vertriebs GmbH</strong><br />
            Im Maerenthal 6a / Siebenbornstraße 26<br />
            56337 Simmern / Westerwald<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            Vertreten durch die Geschäftsführer:
          </h2>
          <p>
            Andreas Sauer<br />
            Ralf Weisbrod
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            Kontakt
          </h2>
          <p>
            Telefon: +49 (0) 2630 96379-24<br />
            Telefax: +49 (0) 2630 96379-25<br />
            E-Mail: sauer@cconcepts.de / weisbrod@cconcepts.de<br />
            Web: www.cconcepts.eu
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            Registereintrag
          </h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Montabaur / Koblenz<br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 149318182
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Andreas Sauer & Ralf Weisbrod<br />
            56337 Simmern
          </p>
        </div>
      </div>
    </div>
  );
}
