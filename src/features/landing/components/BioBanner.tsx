/*
 * features/landing/components/BioBanner.tsx
 *
 * Bio banner — standalone full-viewport section.
 * Lifted from lp-hero-bio-cell (Figma node 966:7525).
 *
 * Position: between Hero (001) and Selected Works (003).
 *
 * Renders:
 *   - Professional bio statement at H1 scale (--text-h1 fluid token)
 *   - Specialty chip tags below
 *
 * Content:  src/features/landing/content.ts → bioBanner
 * Chip UI:  src/shared/ui/Chip/Chip
 *
 * Server Component — no client-side state or effects required.
 * The scroll ref is owned by LandingPage, not this component.
 */

import Chip   from '@/shared/ui/Chip/Chip'
import styles from './BioBanner.module.css'


/* ── Types ──────────────────────────────────────────────── */

type BioBannerContent = {
  text:  string
  chips: readonly string[]
}

type Props = { content: BioBannerContent }


/* ============================================================
   COMPONENT
   ============================================================ */

export default function BioBanner({ content }: Props) {
  return (
    <div className={styles['lp-bio-banner']} aria-label="About">

      {/* Bio statement — H1 scale */}
      <h2 className={styles['lp-bio-banner-text']}>
        {content.text}
      </h2>

      {/* Specialty chip tags */}
      <div className={styles['lp-bio-banner-chips']} role="list" aria-label="Specialties">
        {content.chips.map((chip) => (
          <div key={chip} role="listitem">
            <Chip label={chip} />
          </div>
        ))}
      </div>

    </div>
  )
}
