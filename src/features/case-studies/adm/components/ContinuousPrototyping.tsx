/*
 * ContinuousPrototyping.tsx — (007)
 * ADM-specific section: Continuous Prototyping methodology
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   Intro paragraph
 *   ─────────────────────────────────────────
 *   Phase 1: title + body
 *   ─────────────────────────────────────────
 *   Phase 2: title + body
 *   …
 *
 * Each phase: divider line + title (H5 Integral CF) + body (Inter 14px).
 * Same visual rhythm as Constraints section.
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

      {/* ── Phases list ──────────────────────────────────── */}
      <div className={styles['proto-phases']}>
        {section.phases.map((phase) => (
          <div key={phase.title} className={styles['proto-phase']}>

            {/* Top rule line */}
            <div className={styles['proto-divider']} aria-hidden="true" />

            {/* Title — phase name */}
            <p className={styles['proto-phase-title']}>{phase.title}</p>

            {/* Body paragraph */}
            <p className={styles['proto-phase-body']}>{phase.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
