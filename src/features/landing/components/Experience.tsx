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
    <div className={styles['lp-exp-root']} aria-label="Experience">

      {/* ── Header row: index + heading ──────────────────── */}
      <div className={styles['lp-exp-header-row']}>
        <p className={styles['lp-exp-header-index']}>{experience.meta.index}</p>
        <h1 className={styles['lp-exp-heading']}>
          {experience.meta.heading}
        </h1>
      </div>

      {/* ── Experience list ───────────────────────────────── */}
      <ul className={styles['lp-exp-list']} role="list">
        {experience.entries.map((entry) => (
          <li key={entry.id} className={styles['lp-exp-row']}>

            {/* Left — COMPANY, LOCATION */}
            <p className={styles['lp-exp-company']}>
              {entry.company}, {entry.location}
            </p>

            {/* Right — ROLE (stacked above) + PERIOD (below) */}
            <div className={styles['lp-exp-role-block']}>
              <p className={styles['lp-exp-role']}>{entry.role}</p>
              <p className={styles['lp-exp-period']}>{entry.period}</p>
            </div>

          </li>
        ))}
      </ul>

    </div>
  )
}
