/*
 * features/landing/components/Languages.tsx
 *
 * Languages section — Figma node 1036:7190 / 1036:7193
 *
 * Layout (top to bottom):
 *
 *   ┌─────────────────────────────────────────────────────────┐  ← light bg
 *   │  LANGUAGES                         H3 Integral CF 56px  │
 *   │                                                          │
 *   │  ENGLISH              GERMAN                            │
 *   │  Native               Elementary (A1)                   │
 *   │                                                          │
 *   │  ─────────────────────── divider ───────────────────── │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Two-column grid (2 × 1fr):
 *   Left  — English · Native
 *   Right — German  · Elementary (A1)
 *
 * Each language item stacks:
 *   Language name  — Integral CF H5 (20px) · uppercase   · --color-primary
 *   Proficiency    — Inter Body  (14px)    · mixed-case  · --color-text-muted
 *   gap: --gap-1 (1px) — near-zero stacking confirmed from token comment
 *
 * Bottom <hr> closes the section visually.
 *
 * Server component — no interactivity required.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 *
 * Content: src/features/landing/content.ts
 */

import { languages } from '../content'
import styles        from './Languages.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Languages() {
  return (
    <div className={styles.root} aria-label="Languages">

      {/* ── Heading ──────────────────────────────────────── */}
      {/*
        "LANGUAGES"
        Integral CF · H3 (56px) · uppercase · --color-primary
        Content is mixed-case in content.ts — uppercase applied via CSS.
        Confirmed: Figma node 1036:7190
      */}
      <h1 className={styles.heading}>
        {languages.meta.heading}
      </h1>

      {/* ── Language grid ─────────────────────────────────── */}
      {/*
        2-column equal grid.
        Left  — English  / Native
        Right — German   / Elementary (A1)
        Each item stacks language name (H5) over proficiency (Body).
        gap between name and proficiency: --gap-1 (1px)
        Confirmed: Figma node 1036:7190 / 1036:7193
      */}
      <div className={styles.grid}>
        {languages.items.map((item) => (
          <div key={item.language} className={styles.item}>
            <p className={styles.language}>{item.language}</p>
            <p className={styles.proficiency}>{item.proficiency}</p>
          </div>
        ))}
      </div>

      {/* ── Bottom divider ────────────────────────────────── */}
      {/*
        1px horizontal rule — closes the section visually.
        Confirmed: Figma node 1036:7190 (visible at bottom of screenshot)
      */}
      <hr className={styles.divider} aria-hidden="true" />

    </div>
  )
}
