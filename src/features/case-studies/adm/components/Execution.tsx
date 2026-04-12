/*
 * Execution.tsx — (004)
 * ADM-specific section: System Design
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────
 *   Cluster 1: title + description + images
 *   ─────────────────────────────────────────
 *   Cluster 2: title + description + images
 *   …
 *
 * Each pattern cluster: title (H5) + description (Inter 14px) + optional image grid.
 * Images render only if the file exists (graceful placeholder handling).
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { ADMExecutionSection } from '../content'
import styles from './Execution.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ExecutionProps {
  section: ADMExecutionSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Execution({ section }: ExecutionProps) {
  return (
    <div className={styles['execution-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['execution-heading']}>{section.heading}</h1>

      {/* ── Pattern clusters ─────────────────────────────── */}
      <div className={styles['execution-clusters']}>
        {section.clusters.map((cluster) => (
          <div key={cluster.title} className={styles['execution-cluster']}>

            {/* Top rule line */}
            <div className={styles['execution-divider']} aria-hidden="true" />

            {/* Title — pattern cluster name */}
            <p className={styles['execution-cluster-title']}>{cluster.title}</p>

            {/* Description */}
            <p className={styles['execution-cluster-desc']}>{cluster.description}</p>

            {/* Image grid — renders when images are provided */}
            {cluster.images && cluster.images.length > 0 && (
              <div className={styles['execution-images']}>
                {cluster.images.map((img) => (
                  <div key={img} className={styles['execution-image-wrapper']}>
                    <Image
                      src={img}
                      alt={cluster.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles['execution-image']}
                    />
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}
