"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Building,
} from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export default function KontaktPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(
          "Vielen Dank! Ihre Nachricht wurde erfolgreich an Andreas Sauer und Ralf Weisbrod übermittelt. Wir melden uns schnellstmöglich bei Ihnen."
        );
        reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          resData.error || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
        );
      }
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage(
        "Verbindungsfehler. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns direkt an."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-black/15 shadow-sm text-xs font-mono uppercase tracking-wider text-brand-black">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
            <span className="font-bold text-brand-accent">Direkter Kontakt</span>
            <span className="text-brand-black/30">•</span>
            <span>Simmern / Westerwald</span>
          </div>
          <TextReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black leading-[1.08]">
              Lassen Sie uns über Ihre Werbeidee sprechen.
            </h1>
          </TextReveal>
          <p className="text-base sm:text-lg lg:text-xl text-brand-black/75 leading-relaxed font-normal">
            Ob konkrete Anfrage für Sonderanfertigungen, Großbestellungen oder
            ein persönliches Kennenlernen: Wir sind gerne für Sie da.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <Reveal direction="left" className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-brand-black/15 shadow-xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black">
                Nachricht senden
              </h2>
              <p className="text-sm sm:text-base text-brand-black/70 font-normal">
                Füllen Sie das Formular aus. Andreas Sauer oder Ralf Weisbrod antworten Ihnen persönlich in der Regel innerhalb von 24 Stunden.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
              {/* Name */}
              <div className="space-y-2.5">
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-black">
                  Ihr Name / Firma <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Max Mustermann (Muster GmbH)"
                  {...register("name", { required: "Bitte geben Sie Ihren Namen an." })}
                  className={`w-full px-5 py-4 rounded-2xl border-2 text-base transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                    errors.name
                      ? "border-red-500 bg-red-50/50"
                      : "border-brand-black/15 bg-brand-white/50 focus:bg-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="block text-sm font-bold uppercase tracking-wider text-brand-black">
                    E-Mail-Adresse <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@unternehmen.de"
                    {...register("email", {
                      required: "Bitte geben Sie Ihre E-Mail an.",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Ungültige E-Mail-Adresse.",
                      },
                    })}
                    className={`w-full px-5 py-4 rounded-2xl border-2 text-base transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                      errors.email
                        ? "border-red-500 bg-red-50/50"
                        : "border-brand-black/15 bg-brand-white/50 focus:bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2.5">
                  <label className="block text-sm font-bold uppercase tracking-wider text-brand-black">
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 (0) 123 456789"
                    {...register("phone")}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-brand-black/15 bg-brand-white/50 focus:bg-white text-base transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="space-y-2.5">
                <label className="block text-sm font-bold uppercase tracking-wider text-brand-black">
                  Ihre Nachricht / Projektbeschreibung <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben, gewünschte Stückzahl, Zieltermin..."
                  {...register("message", {
                    required: "Bitte hinterlassen Sie eine kurze Nachricht.",
                  })}
                  className={`w-full px-5 py-4 rounded-2xl border-2 text-base transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-50/50"
                      : "border-brand-black/15 bg-brand-white/50 focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Alert */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-2xl bg-green-50 border-2 border-green-300 text-green-900 text-base flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <p className="font-medium leading-relaxed">{statusMessage}</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-2xl bg-red-50 border-2 border-red-300 text-red-900 text-base flex items-start gap-3.5"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                    <p className="font-medium leading-relaxed">{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-5 rounded-full bg-brand-accent text-white font-extrabold text-base sm:text-lg hover:bg-brand-accent-hover transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer tracking-wide"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Nachricht wird versendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Nachricht jetzt absenden</span>
                  </>
                )}
              </button>

              <p className="text-sm text-brand-black/60 text-center font-medium">
                Ihre Daten werden vertraulich behandelt und ausschließlich zur
                Beantwortung Ihrer Anfrage genutzt (DSGVO-konform).
              </p>
            </form>
          </Reveal>

          {/* Right: Direct Contacts & Address Blocks */}
          <Reveal direction="right" className="lg:col-span-5 space-y-8">
            {/* Person 1: Andreas Sauer */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-black/10 shadow-lg space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-mono uppercase text-brand-accent font-extrabold tracking-wider">
                    Geschäftsleitung & Beratung
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-black">
                    Andreas Sauer
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-black text-white flex items-center justify-center font-display font-black text-lg shadow-md">
                  AS
                </div>
              </div>

              <div className="space-y-3.5 text-base sm:text-lg text-brand-black/85 pt-4 border-t border-brand-black/10">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="font-semibold">Tel: +49 (0) 2630 96379-24</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-black/40 shrink-0" />
                  <span>Mobil: +49 (0) 177 6887569</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                  <a
                    href="mailto:sauer@cconcepts.de"
                    className="hover:text-brand-accent transition-colors font-bold underline underline-offset-4 decoration-brand-accent/40"
                  >
                    sauer@cconcepts.de
                  </a>
                </div>
              </div>
            </div>

            {/* Person 2: Ralf Weisbrod */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-black/10 shadow-lg space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-mono uppercase text-brand-accent font-extrabold tracking-wider">
                    Geschäftsleitung & Logistik
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-brand-black">
                    Ralf Weisbrod
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-black text-white flex items-center justify-center font-display font-black text-lg shadow-md">
                  RW
                </div>
              </div>

              <div className="space-y-3.5 text-base sm:text-lg text-brand-black/85 pt-4 border-t border-brand-black/10">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="font-semibold">Tel: +49 (0) 2620 94099-28</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-black/40 shrink-0" />
                  <span>Mobil: +49 (0) 151 18362001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                  <a
                    href="mailto:weisbrod@cconcepts.de"
                    className="hover:text-brand-accent transition-colors font-bold underline underline-offset-4 decoration-brand-accent/40"
                  >
                    weisbrod@cconcepts.de
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-black text-brand-white space-y-5 shadow-2xl">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-accent text-white">
                  <Building className="w-6 h-6" />
                </div>
                <h4 className="font-display font-black text-2xl text-white">
                  Firmensitz & Lageranschrift
                </h4>
              </div>

              <div className="space-y-3 text-base sm:text-lg text-brand-white/85 leading-relaxed">
                <p>
                  <strong className="text-white font-bold text-xl block mb-1">C-Concepts Vertriebs GmbH</strong>
                  Siebenbornstraße 26 / Im Maerenthal 6a<br />
                  56337 Simmern / Westerwald<br />
                  Deutschland
                </p>
                <div className="pt-3 border-t border-white/10 text-brand-white/70 text-sm font-medium">
                  Montag – Freitag: 08:00 – 17:00 Uhr
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl overflow-hidden border border-brand-black/10 shadow-md bg-white">
          <div className="p-6 bg-brand-white border-b border-brand-black/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-brand-black/70">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Standort Simmern im Westerwald (Google Maps)</span>
            </div>
            <a
              href="https://maps.google.com/?q=Siebenbornstraße+26,+56337+Simmern"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-accent hover:underline"
            >
              In Google Maps öffnen
            </a>
          </div>
          <div className="relative aspect-[21/9] min-h-[350px] w-full bg-brand-black/5">
            <iframe
              title="C-Concepts Standort Simmern"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Siebenbornstra%C3%9Fe%2026,%2056337%20Simmern&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
