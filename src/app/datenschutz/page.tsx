import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-sm text-brand-black/80 leading-relaxed bg-white p-8 rounded-3xl border border-brand-black/10">
        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            1. Datenschutz auf einen Blick
          </h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            2. Datenerfassung auf unserer Website
          </h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber: C-Concepts Vertriebs GmbH, 56337 Simmern. Ihre Daten
            werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B.
            über das Kontaktformular).
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-brand-black mb-2">
            3. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
            Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
            dieser Daten zu verlangen.
          </p>
        </div>
      </div>
    </div>
  );
}
