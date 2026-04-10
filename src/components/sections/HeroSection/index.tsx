/*
 * HeroSection/index.tsx
 * Confirmed from Figma node 966:7520
 *
 * Grid layout — 2 columns × 2 rows:
 *
 *   ┌──────────────────┬──────────────────────────────────────┐
 *   │  Arrow (↘)       │  Bio paragraph                       │
 *   │  col 1 / row 1   │  + Chip tags                         │
 *   │                  │  col 2 / row 1                       │
 *   ├──────────────────┴──────────────────────────────────────┤
 *   │  FAZLUL AZIM KHAN                                        │
 *   │  PRODUCT DESIGNER                                        │
 *   │  & UX STRATEGIST                                        │
 *   │  Enterprise AI · Safety-critical domains · ...          │
 *   │  col 1-2 / row 2 (full span)                            │
 *   └─────────────────────────────────────────────────────────┘
 *
 * All content sourced from src/content/hero.ts.
 * Chip primitive sourced from src/components/ui/Chip.
 *
 * Server Component — no client-side interaction required.
 */

import Chip from '@/components/ui/Chip'
import {
  heroBio,
  heroChips,
  heroDecorativeArrow,
  heroHeadline,
  heroName,
  heroSubline,
} from '@/content/hero'
import styles from './HeroSection.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function HeroSection() {
  return (
    <section className={styles['hero-section']} aria-label="Hero">

      <div className={styles['hero-grid']}>

        {/* ── TOP LEFT: Decorative arrow ──────────────────── */}
        {/*
          The ↗ glyph is flipped with scaleY(-1) in CSS to appear as ↘.
          Confirmed: Figma uses -scale-y-100 on the container div.
          aria-hidden — purely decorative, no semantic meaning.
        */}
        <div className={styles['hero-arrow-cell']} aria-hidden="true">
          <span className={styles['hero-arrow']}>
            {heroDecorativeArrow}
          </span>
        </div>

        {/* ── TOP RIGHT: Bio + Chips ──────────────────────── */}
        <div className={styles['hero-bio-cell']}>

          {/* Bio paragraph */}
          <p className={styles['hero-bio']}>
            {heroBio}
          </p>

          {/* Specialty chip tags */}
          <div className={styles['hero-chips']} role="list" aria-label="Specialties">
            {heroChips.map((chip) => (
              <div key={chip} role="listitem">
                <Chip label={chip} />
              </div>
            ))}
          </div>

        </div>

        {/* ── BOTTOM FULL-WIDTH: Name + Headline + Subline ── */}
        <div className={styles['hero-headline-cell']}>

          {/* Name label */}
          <p className={styles['hero-name']}>
            {heroName}
          </p>

          {/* Headline — two lines, "&" in tertiary colour */}
          <div className={styles['hero-headline-block']} aria-label={`${heroHeadline.line1} ${heroHeadline.line2.ampersand}${heroHeadline.line2.rest}`}>
            {/* Line 1: "Product DESIGNER" */}
            <span className={styles['hero-headline-line']}>
              {heroHeadline.line1}
            </span>

            {/* Line 2: "& UX STRATEGIST" — & is in --color-tertiary */}
            <span className={styles['hero-headline-line']}>
              <span className={styles['hero-ampersand']}>
                {heroHeadline.line2.ampersand}
              </span>
              {heroHeadline.line2.rest}
            </span>
          </div>

          {/* Subline */}
          <p className={styles['hero-subline']}>
            {heroSubline}
          </p>

        </div>

      </div>

    </section>
  )
}
