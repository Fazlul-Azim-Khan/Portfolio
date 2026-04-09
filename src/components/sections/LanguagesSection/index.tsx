/*
 * LanguagesSection/index.tsx
 * Confirmed from Figma node 1036:7190
 *
 * This is the final section on the current landing page.
 * Skills, Contact, and Footer are not yet present in Figma.
 *
 * Structure:
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  (light bg, --padding-64 all sides)                      │
 *   │                                                          │
 *   │  LANGUAGES                 ← H3, --color-primary         │
 *   │                                                          │
 *   │  ENGLISH    │  GERMAN                                    │
 *   │  Native     │  Elementary (A1)                           │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Layout:
 *   - Section: flex col, gap --gap-40, padding --padding-64 all sides
 *   - Heading: Integral CF 56px H3, --color-primary, --tracking-h3
 *   - Languages row: flex row, gap --gap-16, two entries
 *   - Each entry: flex col, gap --gap-1 (1px tight stack), flex: 1 0 0
 *   - Language name: Integral CF 20px H5, --color-primary
 *   - Proficiency: Inter 14px body, --color-text-muted (#424242)
 *
 * Confirmed from Figma node 1036:7190 (full design context):
 *   gap-[var(--gap/40,40px)]     → --gap-40 between heading and row
 *   p-[var(--padding/64,64px)]   → --padding-64 all sides
 *   gap-[16px] on row            → --gap-16 between entries
 *   gap-px on each entry         → --gap-1 between name and proficiency
 *   text-[#424242] on proficiency → --color-text-muted
 *
 * All content sourced from src/content/languages.ts.
 * Server Component — no client-side interaction required.
 */

import { languages, languagesMeta } from '@/content/languages'
import styles from './LanguagesSection.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function LanguagesSection() {
  return (
    <section
      className={styles.section}
      aria-label="Languages"
    >

      {/* ── Heading ────────────────────────────────────────── */}
      {/*
        Integral CF 56px H3, --color-primary, tracking -0.84px
        Confirmed: Figma node 1036:7193
      */}
      <h2 className={styles.heading}>{languagesMeta.heading}</h2>

      {/* ── Languages row ──────────────────────────────────── */}
      {/*
        Flex row — entries side by side, equal width via flex: 1 0 0
        gap: --gap-16 between entries
        Confirmed: Figma node 1036:7206 — gap-[16px]
      */}
      <div className={styles.row} role="list">
        {languages.map((entry) => (
          <div
            key={entry.language}
            className={styles.entry}
            role="listitem"
          >

            {/* Language name — Integral CF 20px H5
                Confirmed: Figma node 1036:7197 */}
            <p className={styles.language}>{entry.language}</p>

            {/* Proficiency — Inter 14px body, --color-text-muted
                Confirmed: Figma node 1036:7199 — text-[#424242] text-[14px] */}
            <p className={styles.proficiency}>{entry.proficiency}</p>

          </div>
        ))}
      </div>

    </section>
  )
}
