/*
 * Outcome.tsx — (005)
 * ADM-specific section: Outcome
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────
 *   Primary outcome statement (large text)
 *   ─────────────────────────────────────────
 *   Process outcomes (list items with dividers)
 *   ─────────────────────────────────────────
 *   Impact statement (dark card)
 *   ─────────────────────────────────────────
 *   Skills chips
 *
 * Follows the Axion Ray Outcome visual pattern but adapted
 * for qualitative outcomes (no metric cards).
 * Server Component — no client-side interaction.
 */

import type { ADMOutcomeSection } from '../content'
import styles from './Outcome.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface OutcomeProps {
  section: ADMOutcomeSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Outcome({ section }: OutcomeProps) {
  return (
    <div className={styles['outcome-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <div className={styles['outcome-header-row']}>
        <h1 className={styles['outcome-heading']}>{section.heading}</h1>
      </div>

      {/* ── Primary outcome ──────────────────────────────── */}
      <p className={styles['outcome-primary']}>{section.primaryOutcome}</p>

      {/* ── Process outcomes ─────────────────────────────── */}
      <div className={styles['outcome-process-list']}>
        {section.processOutcomes.map((outcome, i) => (
          <div key={i} className={styles['outcome-process-item']}>
            <div className={styles['outcome-process-divider']} aria-hidden="true" />
            <p className={styles['outcome-process-text']}>{outcome}</p>
          </div>
        ))}
      </div>

      {/* ── Impact statement — dark card ───────────────────── */}
      <div className={styles['outcome-impact-block']}>
        <p className={styles['outcome-impact-text']}>{section.impactStatement}</p>
      </div>

      {/* ── Skills section ─────────────────────────────────── */}
      <div className={styles['outcome-skills-section']}>
        <p className={styles['outcome-skills-label']}>Skills Applied</p>
        <div className={styles['outcome-skills-chips']}>
          {section.skills.map((skill) => (
            <div key={skill} className={styles['outcome-chip']}>
              <span className={styles['outcome-chip-label']}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
