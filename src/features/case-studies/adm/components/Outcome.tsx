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
 *   "Delivery Milestones" label
 *   3-column grid — each cell:
 *     ─────────
 *     01
 *     Milestone title
 *     Body
 *   ─────────────────────────────────────────
 *   "Process outcomes" label
 *   3-column grid — each cell:
 *     ─────────
 *     01
 *     Body text
 *   ─────────────────────────────────────────
 *   Impact statement (dark card)
 *   ─────────────────────────────────────────
 *   Skills chips
 *
 * 3-column grid sections follow the Reflections pattern.
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

      {/* ── Delivery milestones — 3-column grid ──────────── */}
      {section.deliveryMilestones && section.deliveryMilestones.length > 0 && (
        <div className={styles['outcome-block']}>
          <p className={styles['outcome-block-label']}>Delivery Milestones</p>
          <div className={styles['outcome-grid']}>
            {section.deliveryMilestones.map((milestone, i) => (
              <div key={i} className={styles['outcome-grid-item']}>
                <div className={styles['outcome-item-divider']} aria-hidden="true" />
                <p className={styles['outcome-item-number']}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className={styles['outcome-item-title']}>{milestone.title}</p>
                <p className={styles['outcome-item-body']}>{milestone.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Process outcomes — 3-column grid ─────────────── */}
      <div className={styles['outcome-block']}>
        <p className={styles['outcome-block-label']}>Process outcomes</p>
        <div className={styles['outcome-grid']}>
          {section.processOutcomes.map((outcome, i) => (
            <div key={i} className={styles['outcome-grid-item']}>
              <div className={styles['outcome-item-divider']} aria-hidden="true" />
              <p className={styles['outcome-item-number']}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className={styles['outcome-item-body']}>{outcome}</p>
            </div>
          ))}
        </div>
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
