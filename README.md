# C-Concepts (cconcepts.eu) — Premium Redesign

A bespoke, agency-grade redesign of **C-Concepts Vertriebs GmbH** (Simmern, Germany), rebuilt from scratch using **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis**.

## Key Features & Highlights

- **Bespoke Agency Design Tokens**: 
  - Brand Near-Black: `#0E0E0E`
  - Brand Off-White: `#F7F5F2`
  - Brand Accent: `#D63B1F` (Warm Red/Orange)
- **High-Performance Typography**: Self-hosted geometric display headings (*Plus Jakarta Sans*) and body text (*Inter*) with zero layout shift.
- **Micro-Interactions & Motion**:
  - Lenis buttery-smooth scrolling with `prefers-reduced-motion` detection.
  - Section heading clip-path / text reveals on viewport enter.
  - Animated number counters (`Counter.tsx`) counting up from 0 for stats.
  - Magnetic CTA buttons (`MagneticButton.tsx`) with subtle cursor tracking.
  - Parallax image zoom and editorial hover states.
- **Complete Page Architecture**:
  - `/` (Home): Editorial hero, client strip (Pepsi, Oasis, Punica), 3-col intro, stats, 4-step process, asymmetric featured projects grid, testimonials, Remundi Grill video embed, Sedex trust block, and magnetic CTA.
  - `/full-service-leistungen`: Interactive tabs & detailed sticky sections for *Planung & Beratung*, *Logistik & Lagerung*, *Verpackung & Konfektionierung*, and *Full-Service*.
  - `/werbeartikel-produkte`: Filterable portfolio with animated Framer Motion layout transitions across 6 categories.
  - `/uber-uns`: Founders' history (Andreas Sauer & Ralf Weisbrod, founded 1993 in Simmern), company story, and location showcase.
  - `/kontakt`: Form with React Hook Form validation, contact API route (`/api/contact`), direct contact telephone/email slots, and embedded Google Map.
  - Legal Pages: `/impressum`, `/datenschutz`, and `/agb`.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
