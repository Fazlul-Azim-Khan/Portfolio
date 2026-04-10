/*
 * CaseStudySolutionSection/index.tsx
 * Solution Structure — (004)
 * Confirmed from Figma node 978:7108
 *
 * Layout (inside SectionWrapper, light bg):
 *
 *   H3 "Solution Structure"
 *   ─────────────────────────────────────────  (divider)
 *
 *   "Five data sources. One intelligence layer."  |  body text
 *   [5 data source columns — H5 + body]
 *   ─────────────────────────────────────────
 *
 *   "From signal to root cause. End-to-End Experience"
 *   [6-step flow with arrows between steps]
 *   ─────────────────────────────────────────
 *
 *   "Data Flow"  |  body text
 *   [4-node pipeline — dark boxes with arrows]
 *
 * Server Component — no client-side interaction.
 */

import type { CaseStudySolutionSection as SolutionType } from '@/types'
import styles from './CaseStudySolutionSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudySolutionSectionProps {
  section: SolutionType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudySolutionSection({ section }: CaseStudySolutionSectionProps) {
  return (
    <div className={styles.content}>

      {/* ── Section heading + top divider ────────────────── */}
      <div className={styles.headingBlock}>
        <h1 className={styles.heading}>{section.heading}</h1>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      {/* ── Data sources sub-section ─────────────────────── */}
      {/*
        Title (H4) left + body right, then 5-col source grid below
        Confirmed: Figma node 1014:6819
      */}
      <div className={`${styles.subSection} ${styles.panel}`}>

        <div className={styles.subHeader}>
          <h3 className={styles.subTitle}>
            {section.dataSourcesTitle.split('\n').map((line, i) => (
              <span key={i}>{line}{i < section.dataSourcesTitle.split('\n').length - 1 && <br />}</span>
            ))}
          </h3>
          <p className={styles.subBody}>{section.dataSourcesBody}</p>
        </div>

        {/* 5-column data source grid */}
        {/*
          h-[106px], gap-[40px] — Figma node 978:7123
          Each source: top divider + name (H5) + description (Inter 14px)
        */}
        <div className={styles.sourcesGrid}>
          {section.dataSources.map((src) => (
            <div key={src.name} className={styles.sourceItem}>
              <div className={styles.sourceDivider} aria-hidden="true" />
              <p className={styles.sourceName}>{src.name}</p>
              <p className={styles.sourceDesc}>{src.description}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className={styles.divider} aria-hidden="true" />

      {/* ── End-to-end flow ──────────────────────────────── */}
      {/*
        Title + 6 numbered steps connected by arrows
        Confirmed: Figma node 1014:6770
      */}
      <div className={`${styles.subSection} ${styles.panel}`}>

        <h3 className={styles.subTitle}>
          {section.flowTitle.split('\n').map((line, i) => (
            <span key={i}>{line}{i < section.flowTitle.split('\n').length - 1 && <br />}</span>
          ))}
        </h3>

        {/* Step flow */}
        <div className={styles.flowRow}>
          {section.flowSteps.map((step, i) => (
            <div key={step.number} className={styles.flowItem}>
              {/* Step box */}
              <div className={styles.stepBox}>
                <div className={styles.stepDivider} aria-hidden="true" />
                <p className={styles.stepNumber}>{step.number}</p>
                <p className={styles.stepLabel}>{step.label}</p>
              </div>
              {/* Arrow connector (not after last step) */}
              {i < section.flowSteps.length - 1 && (
                <span className={styles.flowArrow} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className={styles.divider} aria-hidden="true" />

      {/* ── Data flow pipeline ───────────────────────────── */}
      {/*
        Title + 4 dark nodes with arrows between them
        Confirmed: Figma node 978:7201
      */}
      <div className={`${styles.subSection} ${styles.panel}`}>

        <div className={styles.subHeader}>
          <h3 className={styles.subTitle}>{section.dataFlowTitle}</h3>
          <p className={styles.subBody}>{section.dataFlowBody}</p>
        </div>

        {/* Pipeline */}
        <div className={styles.pipeline}>
          {section.pipeline.map((node, i) => (
            <div key={node.name} className={styles.pipelineItem}>
              {/* Node box */}
              <div className={styles.pipelineNode}>
                <div className={styles.pipelineDivider} aria-hidden="true" />
                <p className={styles.nodeName}>{node.name}</p>
                {node.detail && <p className={styles.nodeDetail}>{node.detail}</p>}
              </div>
              {/* Arrow connector (not after last node) */}
              {i < section.pipeline.length - 1 && (
                <span className={styles.pipelineArrow} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
