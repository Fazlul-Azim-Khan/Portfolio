/*
 * Outcome.tsx — (008)
 * ADM-specific section: Outcome & Delivery
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────
 *   Primary outcome statement (large text)
 *   ─────────────────────────────────────────
 *   Delivery milestones (items with dividers)
 *   ─────────────────────────────────────────
 *   Process outcomes (items with dividers)
 *   ─────────────────────────────────────────
 *   Impact statement (dark card)
 *   ─────────────────────────────────────────
 *   Skills chips
 *
 * Expanded from original: now includes delivery milestones
 * block between primary outcome and process outcomes.
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

      {/* ── Delivery milestones ──────────────────────────── */}
      {section.deliveryMilestones && section.deliveryMilestones.length > 0 && (
        <div className={styles['outcome-milestones']}>
          <p className={styles['outcome-milestones-label']}>Delivery Milestones</p>
          <div className={styles['outcome-milestones-list']}>
            {section.deliveryMilestones.map((milestone, i) => (
              <div key={i} className={styles['outcome-milestone-item']}>
                <div className={styles['outcome-milestone-divider']} aria-hidden="true" />
                <p className={styles['outcome-milestone-title']}>{milestone.title}</p>
                <p className={styles['outcome-milestone-body']}>{milestone.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
