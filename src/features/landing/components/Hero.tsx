/*
 * features/landing/components/Hero.tsx
 *
 * Landing page hero section — confirmed from Figma node 966:7520.
 *
 * Grid layout (2 columns × 2 rows):
 *
 *   ┌─────────────────────┬──────────────────────────────────────┐
 *   │  Arrow ↗ (flipped)  │  Bio paragraph                       │
 *   │  lp-hero-arrow-cell │  + Specialty chip tags               │
 *   │  col 1 / row 1      │  lp-hero-bio-cell · col 2 / row 1    │
 *   ├─────────────────────┴──────────────────────────────────────┤
 *   │  FAZLUL AZIM KHAN                                           │
 *   │  Product DESIGNER                                           │
 *   │  & UX STRATEGIST                                           │
 *   │  Enterprise AI · Safety-critical domains · ...             │
 *   │  lp-hero-headline-cell · col 1-2 / row 2 (full span)       │
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
    <div className={styles['lp-hero']} aria-label="Hero">

      <div className={styles['lp-hero-grid']}>

        {/* ── TOP RIGHT: Bio + Specialty chips ────────────── */}
        <div className={styles['lp-hero-bio-cell']}>

          <p className={styles['lp-hero-bio']}>
            {hero.bio}
          </p>

          <div className={styles['lp-hero-chips']} role="list" aria-label="Specialties">
            {hero.chips.map((chip) => (
              <div key={chip} role="listitem">
                <Chip label={chip} />
              </div>
            ))}
          </div>

        </div>

        {/* ── BOTTOM FULL-WIDTH: Name + Headline + Subline ── */}
        <div className={styles['lp-hero-headline-cell']}>

          {/* Name label — "FAZLUL AZIM KHAN" */}
          <p className={styles['lp-hero-name']}>
            {hero.name}
          </p>

          {/* Headline — split across two lines for per-word colour control */}
          <div
            className={styles['lp-hero-headline-block']}
            aria-label={`${hero.headline.line1} ${hero.headline.line2.ampersand}${hero.headline.line2.rest}`}
          >
            {/* Line 1: "Product DESIGNER" */}
            <span className={styles['lp-hero-headline-line']}>
              {hero.headline.line1}
            </span>

            {/* Line 2: "& UX STRATEGIST" — & renders in --color-tertiary */}
            <span className={styles['lp-hero-headline-line']}>
              <span className={styles['lp-hero-ampersand']}>
                {hero.headline.line2.ampersand}
              </span>
              {hero.headline.line2.rest}
            </span>
          </div>

          {/* Subline */}
          <p className={styles['lp-hero-subline']}>
            {hero.subline}
          </p>

        </div>

      </div>

    </div>
  )
}
