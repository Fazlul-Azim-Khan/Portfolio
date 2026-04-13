/*
 * Constraints.tsx — (003)
 * ADM-specific section: Constraints & Givens
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────────────────────
 *   3-column grid — each cell:
 *     ─────────
 *     01
 *     Title
 *     Body paragraph
 *
 * 6 constraints → 2 rows × 3 columns.
 * Same visual pattern as Reflections section.
 * Numbers auto-generated from array index.
 * Server Component — no client-side interaction.
 */

import type { ADMConstraintsSection } from '../content'
import styles from './Constraints.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ConstraintsProps {
  section: ADMConstraintsSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Constraints({ section }: ConstraintsProps) {
  return (
    <div className={styles['constraints-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['constraints-heading']}>{section.heading}</h1>

      {/* ── 3-column grid ────────────────────────────────── */}
      <div className={styles['constraints-grid']}>
        {section.constraints.map((constraint, i) => (
          <div key={constraint.title} className={styles['constraints-item']}>

            {/* Top rule line */}
            <div className={styles['constraints-divider']} aria-hidden="true" />

            {/* Number — auto-generated */}
            <p className={styles['constraints-number']}>
              {String(i + 1).padStart(2, '0')}
            </p>

            {/* Title */}
            <p className={styles['constraints-title']}>{constraint.title}</p>

            {/* Body paragraph */}
            <p className={styles['constraints-body']}>{constraint.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
