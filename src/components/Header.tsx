"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SubLink {
  href: string;
  label: string;
  desc?: string;
}

interface NavItem {
  href: string;
  label: string;
  sublinks?: SubLink[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Startseite" },
  {
    href: "/full-service-leistungen",
    label: "Full-Service",
    sublinks: [
      {
        href: "/full-service-leistungen/planung-beratung",
        label: "Planung & Beratung",
        desc: "Kreative Ideenfindung, CAD-Entwürfe und Kostensicherheit",
      },
      {
        href: "/full-service-leistungen/logistik-lagerung",
        label: "Logistik & Lagerung",
        desc: "2.500 m² Hochregallager & Just-in-Time POS-Lieferung",
      },
      {
        href: "/full-service-leistungen/konfektionierung",
        label: "Konfektionierung",
        desc: "Manuelle & maschinelle Veredelung, Sets & Neuverpackung",
      },
      {
        href: "/full-service-leistungen/full-service-fur-werbeartikel",
        label: "Full-Service Dienstleistung",
        desc: "Alles aus einer Hand von der Skizze bis zur Promotion",
      },
    ],
  },
  {
    href: "/werbeartikel-produkte",
    label: "Werbeartikel & Unikate",
    sublinks: [
      {
        href: "/werbeartikel-produkte/konstruktionen-und-sonderanfertigungen",
        label: "Konstruktionen & Sonderanfertigungen",
        desc: "Pepsi Turnier-Kicker, Retro-Bikes, Barrels & Unikate",
      },
      {
        href: "/werbeartikel-produkte/messeauftritte",
        label: "Messeauftritte & Stände",
        desc: "Modulare Displays, Show-Module und Markeninszenierung",
      },
      {
        href: "/werbeartikel-produkte/promotion-events",
        label: "Promotion & Events",
        desc: "Aufblasbare Event-Module, Torwände, E-Scooter & Simulatoren",
      },
      {
        href: "/werbeartikel-produkte/werbeaktionen",
        label: "Werbeaktionen & POS",
        desc: "Verkaufsfördernde Displays und Handels-Promotions",
      },
      {
        href: "/werbeartikel-produkte/streuartikel-give-aways",
        label: "Streuartikel & Give Aways",
        desc: "Langlebige Streuartikel, Textilien, Gimmicks mit Branding",
      },
      {
        href: "/werbeartikel-produkte/gewinnspiele-verlosung",
        label: "Gewinnspiele & Verlosung",
        desc: "Exklusive Hauptpreise, Brand-Bikes und Merchandising",
      },
    ],
  },
  { href: "/uber-uns", label: "Über Uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-black text-white text-[11px] sm:text-xs py-1.5 px-6 md:px-12 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-medium tracking-wide">
              Full-Service Werbemittel seit 1993 • Simmern / Westerwald
            </span>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <a
              href="tel:+4926309637924"
              className="hover:text-brand-accent transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>+49 (0) 2630 96379-24</span>
            </a>
            <span className="text-white/20">•</span>
            <span className="text-white/60">Sedex & GS1 Partner</span>
          </div>
        </div>
      </div>

      {/* Floating Pillow (Capsule) Navbar */}
      <header
        className={cn(
          "sticky top-3 sm:top-4 z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300",
            "bg-white/95 backdrop-blur-xl border border-brand-black/10 shadow-lg shadow-black/[0.06]",
            scrolled ? "py-2 px-5 sm:px-6 shadow-xl" : "py-2.5 sm:py-3 px-5 sm:px-7"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-8 sm:h-9 w-32 sm:w-40 flex items-center">
                <Image
                  src="/images/real/cconcepts-logo.png"
                  alt="C-Concepts Logo"
                  width={160}
                  height={38}
                  priority
                  className="object-contain object-left h-full w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation Pillow Items */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const hasSub = item.sublinks && item.sublinks.length > 0;
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasSub && handleMouseEnter(item.label)}
                    onMouseLeave={() => hasSub && handleMouseLeave()}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "bg-brand-black text-white shadow-sm"
                          : "text-brand-black/80 hover:text-brand-black hover:bg-black/5"
                      )}
                    >
                      <span>{item.label}</span>
                      {hasSub && (
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200 opacity-60",
                            isDropdownOpen && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Floating Dropdown Menu */}
                    {hasSub && (
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2.5 w-80 p-2.5 rounded-2xl bg-white border border-brand-black/10 shadow-2xl shadow-black/15 z-50 backdrop-blur-xl"
                          >
                            <div className="space-y-1">
                              {item.sublinks?.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className={cn(
                                    "block p-3 rounded-xl transition-all duration-150 group",
                                    pathname === sub.href
                                      ? "bg-brand-black text-white"
                                      : "hover:bg-brand-black/5 text-brand-black"
                                  )}
                                >
                                  <div className="font-semibold text-xs sm:text-sm group-hover:text-brand-accent transition-colors">
                                    {sub.label}
                                  </div>
                                  {sub.desc && (
                                    <div
                                      className={cn(
                                        "text-[11px] mt-0.5 line-clamp-1",
                                        pathname === sub.href
                                          ? "text-white/70"
                                          : "text-brand-black/60"
                                      )}
                                    >
                                      {sub.desc}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Pillow Action CTA */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/kontakt"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-accent text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-accent/25 hover:bg-brand-accent-hover transition-all duration-200 active:scale-95 tracking-wide"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-brand-black/5 border border-brand-black/10 text-brand-black hover:bg-brand-black/10 transition-colors"
                aria-label="Hauptmenü umschalten"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 max-w-lg mx-auto rounded-3xl bg-white border border-brand-black/15 p-5 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="border-b border-brand-black/5 pb-2">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-bold py-2 px-3 rounded-xl flex items-center justify-between",
                        isActive
                          ? "bg-brand-black text-white"
                          : "text-brand-black hover:bg-brand-black/5"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>

                    {item.sublinks && (
                      <div className="pl-3 pt-1.5 space-y-1">
                        {item.sublinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "block text-xs py-1.5 px-3 rounded-lg font-medium",
                              pathname === sub.href
                                ? "text-brand-accent font-bold bg-brand-accent/5"
                                : "text-brand-black/70 hover:text-brand-black"
                            )}
                          >
                            • {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+4926309637924"
                  className="text-xs font-semibold text-brand-black flex items-center justify-center gap-2 py-2.5 rounded-full bg-brand-black/5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span>+49 (0) 2630 96379-24</span>
                </a>
                <Link
                  href="/kontakt"
                  className="w-full text-center py-2.5 rounded-full bg-brand-accent text-white text-sm font-bold shadow-md hover:bg-brand-accent-hover transition-colors"
                >
                  Jetzt Projekt anfragen
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
