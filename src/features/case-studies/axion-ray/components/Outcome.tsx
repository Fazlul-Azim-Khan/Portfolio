/*
 * Outcome.tsx — (009)
 * Confirmed from Figma node 982:5745.
 *
 * Rendered inside CaseStudySectionWrapper (standard index column).
 *
 * Layout (content column, flex-col, gap-64px):
 *
 *   ┌─ headerRow (flex, gap-32) ──────────────────────────────────────┐
 *   │  heading (H3 Integral CF, flex-1)   descriptor (Inter 14, 268px) │
 *   └─────────────────────────────────────────────────────────────────┘
 *
 *   ┌─ metricsGrid (grid 4-col, gap-24) ──────────────────────────────┐
 *   │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────────────┐   │
 *   │  │  $7.5M  │  │ $17.5M  │  │  $25M   │  │      SBIR       │   │
 *   │  │ Seed Rd │  │Series A │  │  Total  │  │  U.S. Air Force │   │
 *   │  └─────────┘  └─────────┘  └─────────┘  └─────────────────┘   │
 *   └─────────────────────────────────────────────────────────────────┘
 *
 *   ┌─ impactBlock (dark card, p-40, Integral CF H4 white uppercase) ─┐
 *   │  "The platform enabled reliability engineers at …"              │
 *   └─────────────────────────────────────────────────────────────────┘
 *
 *   ┌─ skillsSection (flex-col, gap-16) ──────────────────────────────┐
 *   │  SKILLS APPLIED (label)                                         │
 *   │  [chip] [chip] [chip] [chip] [chip] [chip]                      │
 *   └─────────────────────────────────────────────────────────────────┘
 *
 *   NDA note (Inter 12px uppercase)
 *
 * Server Component — no client-side interaction.
 */

import type { OutcomeSection } from '../content'
import styles from './Outcome.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface OutcomeProps {
  section: OutcomeSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Outcome({ section }: OutcomeProps) {
  return (
    <div className={styles['outcome-root']}>

      {/* ── Header row — heading only, full-width flex ───── */}
      <div className={styles['outcome-header-row']}>
        <h1 className={styles['outcome-heading']}>{section.heading}</h1>
      </div>

      {/* ── Metrics grid — 4 dark cards ────────────────────── */}
      {/*
        CSS grid, 4 equal columns, gap-24px
        Each card: dark bg, rounded-8px, padding-32px, centered
        Value: H3 Integral CF white | Label: H5 Integral CF tertiary
        Confirmed: Figma nodes 982:5781–982:5800
      */}
      <div className={styles['outcome-metrics-grid']}>
        {section.metrics.map((metric) => (
          <div key={metric.value} className={styles['outcome-metric-card']}>
            <p className={styles['outcome-metric-value']}>{metric.value}</p>
            <p className={styles['outcome-metric-label']}>{metric.label}</p>
          </div>
        ))}
      </div>

      {/* ── Impact statement — dark card ───────────────────── */}
      {/*
        bg: --color-primary, rounded-8px, padding-40px
        Integral CF H4 32px white uppercase
        Confirmed: Figma node 982:5802
      */}
      <div className={styles['outcome-impact-block']}>
        <p className={styles['outcome-impact-text']}>{section.impactStatement}</p>
      </div>

      {/* ── Skills section ─────────────────────────────────── */}
      {/*
        flex-col, gap-16px
        Label: Inter 14px uppercase tracking-0.7px
        Chips: white bg, black border, rounded-8px, padding-12px
        Chip text: Inter 12px uppercase black
        Confirmed: Figma nodes 982:5805–982:5833
      */}
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

      {/* ── NDA note ────────────────────────────────────────── */}
      {/*
        Inter 12px uppercase black
        Confirmed: Figma node 982:5833
      */}
      <p className={styles['outcome-nda-note']}>{section.ndaNote}</p>

    </div>
  )
}
