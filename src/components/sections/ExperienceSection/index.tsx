/*
 * ExperienceSection/index.tsx
 * Confirmed from Figma node 1036:7650 ("Container" — Experience section)
 *
 * This section is a self-contained DARK CARD.
 * It handles its own padding, background, and border-radius.
 * It does NOT rely on SectionWrapper — it IS the section.
 *
 * Structure:
 *
 *   ┌────────────────────────────────────────────────────────────┐
 *   │  (dark bg, --radius-sm, --padding-64 all sides)            │
 *   │                                                            │
 *   │  "Explore my design journey"  ← H3, --color-secondary      │
 *   │                                                            │
 *   │  ─────────────────────────────  ← Divider (dark)           │
 *   │  COMPANY, LOCATION       │  ROLE            │
 *   │                          │  PERIOD (Inter 12px)            │
 *   │  ─────────────────────────────  ← Divider (dark)           │
 *   │  COMPANY, LOCATION       │  ROLE                           │
 *   │  ...                     │  PERIOD                         │
 *   │  (9 entries total)                                         │
 *   └────────────────────────────────────────────────────────────┘
 *
 * Row layout (each entry):
 *   Left  — "{company}, {location}" — Integral CF 20px (H5)
 *   Right — flex col with px-64px padding
 *             Role   — Integral CF 20px (H5)
 *             Period — Inter 12px (Lead), uppercase
 *
 * Divider pattern:
 *   Each entry is preceded by a <Divider variant="dark" />.
 *   No trailing divider after the last entry.
 *   Gap between dividers and rows: --space-experience-row-gap (29px)
 *   Confirmed: Figma node 1036:7718 gap-[29px]
 *
 * All content sourced from src/content/experience.ts.
 * Server Component — no client-side interaction required.
 */

import { Fragment }  from 'react'
import Divider       from '@/components/ui/Divider'
import { experienceEntries, experienceMeta } from '@/content/experience'
import styles        from './ExperienceSection.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function ExperienceSection() {
  return (
    <section
      className={styles.section}
      aria-label="Design Journey / Experience"
    >

      {/* ── Section heading ────────────────────────────────── */}
      {/*
        Integral CF 56px H3, --color-secondary (white), tracking -0.84px
        No index label — confirmed: Figma node 1036:7716 shows heading only
      */}
      <h2 className={styles.heading}>{experienceMeta.heading}</h2>

      {/* ── Work history list ──────────────────────────────── */}
      {/*
        Flat flex column — gap: --space-experience-row-gap (29px) between ALL children
        Pattern: [Divider] [Row] [Divider] [Row] ... (no trailing divider)
        Confirmed: Figma node 1036:7718
      */}
      <div className={styles.list}>
        {experienceEntries.map((entry) => (
          <Fragment key={entry.id}>

            {/* Dark divider above each row — confirmed: Figma nodes 1036:7697–7713 */}
            <Divider variant="dark" />

            {/* ── Experience row ─────────────────────────── */}
            {/*
              Two-column flex row:
                Left  — "{company}, {location}" — Integral CF 20px
                Right — flex col with px-64px padding — role + period
              Confirmed: Figma node 1036:7651 and subsequent rows
            */}
            <div className={styles.row} role="listitem">

              {/* Left: company name + location as single display string */}
              <p className={styles.company}>
                {entry.company}, {entry.location}
              </p>

              {/* Right: role (H5) stacked above period (Lead) */}
              <div className={styles.right}>
                <p className={styles.role}>{entry.role}</p>
                <p className={styles.period}>{entry.period}</p>
              </div>

            </div>

          </Fragment>
        ))}
      </div>

    </section>
  )
}
