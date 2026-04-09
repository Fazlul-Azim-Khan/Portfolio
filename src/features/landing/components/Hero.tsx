/*
 * features/landing/components/Hero.tsx
 *
 * Landing page hero section — confirmed from Figma node 966:7520.
 *
 * Grid layout (2 columns × 2 rows):
 *
 *   ┌─────────────────────┬──────────────────────────────────────┐
 *   │  Arrow ↗ (flipped)  │  Bio paragraph                       │
 *   │  arrowCell          │  + Specialty chip tags               │
 *   │  col 1 / row 1      │  bioCell · col 2 / row 1             │
 *   ├─────────────────────┴──────────────────────────────────────┤
 *   │  FAZLUL AZIM KHAN                                           │
 *   │  Product DESIGNER                                           │
 *   │  & UX STRATEGIST                                           │
 *   │  Enterprise AI · Safety-critical domains · ...             │
 *   │  headlineCell · col 1-2 / row 2 (full span)                │
 *   └────────────────────────────────────────────────────────────┘
 *
 * Content:  src/features/landing/content.ts
 * Chip UI:  src/shared/ui/Chip/Chip
 *
 * Server Component — no client-side state or effects required.
 * The scroll ref is owned by LandingPage, not this component.
 */

import Chip         from '@/shared/ui/Chip/Chip'
import { hero }     from '../content'
import styles       from './Hero.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Hero() {
  return (
    <div className={styles.hero} aria-label="Hero">

      <div className={styles.grid}>

        {/* ── TOP LEFT: Decorative arrow ──────────────────── */}
        {/*
          The ↗ glyph is rendered at 200px and flipped vertically
          with scaleY(-1) so it appears as ↘.
          Confirmed: Figma uses -scale-y-100 on this element.
          aria-hidden — purely decorative, no semantic meaning.
        */}
        <div className={styles.arrowCell} aria-hidden="true">
          <span className={styles.arrow}>
            {hero.decorativeArrow}
          </span>
        </div>

        {/* ── TOP RIGHT: Bio + Specialty chips ────────────── */}
        <div className={styles.bioCell}>

          <p className={styles.bio}>
            {hero.bio}
          </p>

          <div className={styles.chips} role="list" aria-label="Specialties">
            {hero.chips.map((chip) => (
              <div key={chip} role="listitem">
                <Chip label={chip} />
              </div>
            ))}
          </div>

        </div>

        {/* ── BOTTOM FULL-WIDTH: Name + Headline + Subline ── */}
        <div className={styles.headlineCell}>

          {/* Name label — "FAZLUL AZIM KHAN" */}
          <p className={styles.name}>
            {hero.name}
          </p>

          {/* Headline — split across two lines for per-word colour control */}
          <div
            className={styles.headlineBlock}
            aria-label={`${hero.headline.line1} ${hero.headline.line2.ampersand}${hero.headline.line2.rest}`}
          >
            {/* Line 1: "Product DESIGNER" */}
            <span className={styles.headlineLine}>
              {hero.headline.line1}
            </span>

            {/* Line 2: "& UX STRATEGIST" — & renders in --color-tertiary */}
            <span className={styles.headlineLine}>
              <span className={styles.ampersand}>
                {hero.headline.line2.ampersand}
              </span>
              {hero.headline.line2.rest}
            </span>
          </div>

          {/* Subline */}
          <p className={styles.subline}>
            {hero.subline}
          </p>

        </div>

      </div>

    </div>
  )
}
