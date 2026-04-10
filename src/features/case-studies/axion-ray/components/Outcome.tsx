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
    <div className={styles.root}>

      {/* ── Header row — heading only, full-width flex ───── */}
      <div className={styles.headerRow}>
        <h1 className={styles.heading}>{section.heading}</h1>
      </div>

      {/* ── Metrics grid — 4 dark cards ────────────────────── */}
      {/*
        CSS grid, 4 equal columns, gap-24px
        Each card: dark bg, rounded-8px, padding-32px, centered
        Value: H3 Integral CF white | Label: H5 Integral CF tertiary
        Confirmed: Figma nodes 982:5781–982:5800
      */}
      <div className={styles.metricsGrid}>
        {section.metrics.map((metric) => (
          <div key={metric.value} className={styles.metricCard}>
            <p className={styles.metricValue}>{metric.value}</p>
            <p className={styles.metricLabel}>{metric.label}</p>
          </div>
        ))}
      </div>

      {/* ── Impact statement — dark card ───────────────────── */}
      {/*
        bg: --color-primary, rounded-8px, padding-40px
        Integral CF H4 32px white uppercase
        Confirmed: Figma node 982:5802
      */}
      <div className={styles.impactBlock}>
        <p className={styles.impactText}>{section.impactStatement}</p>
      </div>

      {/* ── Skills section ─────────────────────────────────── */}
      {/*
        flex-col, gap-16px
        Label: Inter 14px uppercase tracking-0.7px
        Chips: white bg, black border, rounded-8px, padding-12px
        Chip text: Inter 12px uppercase black
        Confirmed: Figma nodes 982:5805–982:5833
      */}
      <div className={styles.skillsSection}>
        <p className={styles.skillsLabel}>Skills Applied</p>
        <div className={styles.skillsChips}>
          {section.skills.map((skill) => (
            <div key={skill} className={styles.chip}>
              <span className={styles.chipLabel}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── NDA note ────────────────────────────────────────── */}
      {/*
        Inter 12px uppercase black
        Confirmed: Figma node 982:5833
      */}
      <p className={styles.ndaNote}>{section.ndaNote}</p>

    </div>
  )
}
