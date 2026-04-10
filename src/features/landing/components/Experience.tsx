/*
 * features/landing/components/Experience.tsx
 *
 * "Explore my design journey" section — Figma node 1036:7650
 *
 * Layout (top to bottom):
 *
 *   ┌─────────────────────────────────────────────────────────┐  ← dark bg
 *   │  EXPLORE MY DESIGN                                       │
 *   │  JOURNEY                           H3 Integral CF 56px  │
 *   │                                                          │
 *   │  ───────────────────────── divider ──────────────────   │
 *   │  GB3 SERVICES LLC, SHERIDAN, WY    PRODUCT DESIGNER …   │
 *   │                                    FEBRUARY 2022 – NOW  │
 *   │  ───────────────────────── divider ──────────────────   │
 *   │  … (9 rows total)                                        │
 *   │  ───────────────────────── divider ──────────────────   │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Row anatomy:
 *   Left  — COMPANY, LOCATION       Integral CF H5 (20px) · uppercase · white
 *   Right — ROLE                    Integral CF H5 (20px) · uppercase · white
 *            PERIOD                 Inter Lead (12px)     · uppercase · --color-tertiary
 *
 * Row padding: --space-experience-row-gap (29px) top + bottom
 *              Confirmed: Figma node 1036:7718
 *
 * Dividers: 1px · --color-divider-dark (#cccccc) — readable on dark bg
 *   One divider above each row + one closing divider after the last row
 *   Implemented via border-top on each <li> + border-bottom on <ul>
 *
 * Background:
 *   --color-primary (#0a0a0a) — dark treatment.
 *   Negative-margin bleed breaks out of Container's padding-x so the
 *   dark bg reaches the container edges (effectively full-width at design size).
 *
 * Server component — no interactivity, no client JS required.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 *
 * Content: src/features/landing/content.ts
 */

import { experience } from '../content'
import styles         from './Experience.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Experience() {
  return (
    <div className={styles.root} aria-label="Experience">

      {/* ── Heading ──────────────────────────────────────── */}
      {/*
        "EXPLORE MY DESIGN JOURNEY"
        Integral CF · H3 (56px) · uppercase · white
        Confirmed: Figma node 1036:7650
        Content is mixed-case in content.ts — uppercase applied via CSS.
      */}
      <h1 className={styles.heading}>
        {experience.meta.heading}
      </h1>

      {/* ── Experience list ───────────────────────────────── */}
      {/*
        One <li> per entry.
        Each row: flex-row, justify-content: space-between
          Left  — COMPANY, LOCATION  (Integral CF H5)
          Right — ROLE + PERIOD      (flex-column)

        Dividers via CSS:
          border-top on each <li>
          border-bottom on <ul>
      */}
      <ul className={styles.list} role="list">
        {experience.entries.map((entry) => (
          <li key={entry.id} className={styles.row}>

            {/* Left — COMPANY, LOCATION */}
            <p className={styles.company}>
              {entry.company}, {entry.location}
            </p>

            {/* Right — ROLE (stacked above) + PERIOD (below) */}
            <div className={styles.roleBlock}>
              <p className={styles.role}>{entry.role}</p>
              <p className={styles.period}>{entry.period}</p>
            </div>

          </li>
        ))}
      </ul>

    </div>
  )
}
