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
    <div className={styles['solution-content']}>

      {/* ── Section heading + top divider ────────────────── */}
      <div className={styles['solution-heading-block']}>
        <h1 className={styles['solution-heading']}>{section.heading}</h1>
        <div className={styles['solution-divider']} aria-hidden="true" />
      </div>

      {/* ── Data sources sub-section ─────────────────────── */}
      {/*
        Title (H2) left, then 5-col source grid below
        Confirmed: Figma node 1014:6819
      */}
      <div className={`${styles['solution-sub-section']} ${styles['solution-panel']}`}>

        <div className={styles['solution-sub-header']}>
          <h3 className={styles['solution-title']}>{section.dataSourcesTitle}</h3>
        </div>

        {/* 5-column data source grid */}
        {/*
          h-[106px], gap-[40px] — Figma node 978:7123
          Each source: top divider + name (H5) + description (body)
        */}
        <div className={styles['solution-sources-grid']}>
          {section.dataSources.map((src) => (
            <div key={src.name} className={styles['solution-source-item']}>
              <div className={styles['solution-source-divider']} aria-hidden="true" />
              <p className={styles['solution-source-name']}>{src.name}</p>
              <p className={styles['solution-source-desc']}>{src.description}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className={styles['solution-divider']} aria-hidden="true" />

      {/* ── End-to-end flow ──────────────────────────────── */}
      {/*
        Title + 6 numbered steps connected by arrows
        Confirmed: Figma node 1014:6770
      */}
      <div className={`${styles['solution-sub-section']} ${styles['solution-panel']}`}>

        <h3 className={styles['solution-title']}>
          {section.flowTitle.split('\n').map((line, i) => (
            <span key={i}>{line}{i < section.flowTitle.split('\n').length - 1 && <br />}</span>
          ))}
        </h3>

        {/* Step flow */}
        <div className={styles['solution-flow-row']}>
          {section.flowSteps.map((step, i) => (
            <div key={step.number} className={styles['solution-flow-item']}>
              {/* Step box */}
              <div className={styles['solution-flow-step']}>
                <div className={styles['solution-flow-step-divider']} aria-hidden="true" />
                <p className={styles['solution-flow-number']}>{step.number}</p>
                <p className={styles['solution-flow-label']}>{step.label}</p>
              </div>
              {/* Arrow connector (not after last step) */}
              {i < section.flowSteps.length - 1 && (
                <span className={styles['solution-flow-arrow']} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className={styles['solution-divider']} aria-hidden="true" />

      {/* ── Data flow pipeline ───────────────────────────── */}
      {/*
        Title + 4 dark nodes with arrows between them
        Confirmed: Figma node 978:7201
      */}
      <div className={`${styles['solution-sub-section']} ${styles['solution-panel']}`}>

        <div className={styles['solution-sub-header']}>
          <h3 className={styles['solution-title']}>{section.dataFlowTitle}</h3>
        </div>

        {/* Pipeline */}
        <div className={styles['solution-pipeline-row']}>
          {section.pipeline.map((node, i) => (
            <div key={node.name} className={styles['solution-pipeline-item']}>
              {/* Node box */}
              <div className={styles['solution-pipeline-node']}>
                <div className={styles['solution-pipeline-node-divider']} aria-hidden="true" />
                <p className={styles['solution-pipeline-name']}>{node.name}</p>
                {node.detail && <p className={styles['solution-pipeline-detail']}>{node.detail}</p>}
              </div>
              {/* Arrow connector (not after last node) */}
              {i < section.pipeline.length - 1 && (
                <span className={styles['solution-pipeline-arrow']} aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
