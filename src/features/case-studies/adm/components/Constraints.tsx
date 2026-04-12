/*
 * Constraints.tsx — (002)
 * ADM-specific section: Constraints & Givens
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────
 *   Constraint 1 title + body
 *   ─────────────────────────────────────────
 *   Constraint 2 title + body
 *   …
 *
 * Each constraint: divider line + title (H5 Integral CF) + body (Inter 14px).
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

      {/* ── Constraints list ─────────────────────────────── */}
      <div className={styles['constraints-list']}>
        {section.constraints.map((constraint) => (
          <div key={constraint.title} className={styles['constraints-item']}>

            {/* Top rule line */}
            <div className={styles['constraints-divider']} aria-hidden="true" />

            {/* Title — bold constraint name */}
            <p className={styles['constraints-title']}>{constraint.title}</p>

            {/* Body paragraph */}
            <p className={styles['constraints-body']}>{constraint.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
