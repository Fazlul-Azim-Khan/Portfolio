/*
 * ContinuousPrototyping.tsx — (007)
 * ADM-specific section: Continuous Prototyping methodology
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   Intro paragraph
 *   ─────────────────────────────────────────────────────────
 *   3-column grid — each cell:
 *     ─────────
 *     01
 *     Phase title
 *     Body paragraph
 *
 * 6 phases → 2 rows × 3 columns.
 * Same visual pattern as Reflections section.
 * Numbers auto-generated from array index.
 * Server Component — no client-side interaction.
 */

import type { ADMPrototypingSection } from '../content'
import styles from './ContinuousPrototyping.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ContinuousPrototypingProps {
  section: ADMPrototypingSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function ContinuousPrototyping({ section }: ContinuousPrototypingProps) {
  return (
    <div className={styles['proto-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['proto-heading']}>{section.heading}</h1>

      {/* ── Intro paragraph ─────────────────────────────── */}
      <p className={styles['proto-intro']}>{section.intro}</p>

      {/* ── 3-column grid ────────────────────────────────── */}
      <div className={styles['proto-grid']}>
        {section.phases.map((phase, i) => (
          <div key={phase.title} className={styles['proto-item']}>

            {/* Top rule line */}
            <div className={styles['proto-divider']} aria-hidden="true" />

            {/* Number — auto-generated */}
            <p className={styles['proto-number']}>
              {String(i + 1).padStart(2, '0')}
            </p>

            {/* Title */}
            <p className={styles['proto-title']}>{phase.title}</p>

            {/* Body paragraph */}
            <p className={styles['proto-body']}>{phase.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
