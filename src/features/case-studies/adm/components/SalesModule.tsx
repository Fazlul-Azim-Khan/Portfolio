/*
 * SalesModule.tsx — (006)
 * ADM-specific section: System Design — Sales Module
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   Intro paragraph
 *   ─────────────────────────────────────────
 *   Cluster 1: title + description + images
 *   ─────────────────────────────────────────
 *   Cluster 2: title + description + images
 *   …
 *
 * Same visual pattern as Execution (clusters with dividers) but with
 * an additional intro paragraph describing the Sales module scope.
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { ADMSalesModuleSection } from '../content'
import styles from './SalesModule.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface SalesModuleProps {
  section: ADMSalesModuleSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function SalesModule({ section }: SalesModuleProps) {
  return (
    <div className={styles['sales-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['sales-heading']}>{section.heading}</h1>

      {/* ── Intro paragraph ─────────────────────────────── */}
      <p className={styles['sales-intro']}>{section.intro}</p>

      {/* ── Pattern clusters ─────────────────────────────── */}
      <div className={styles['sales-clusters']}>
        {section.clusters.map((cluster) => (
          <div key={cluster.title} className={styles['sales-cluster']}>

            {/* Top rule line */}
            <div className={styles['sales-divider']} aria-hidden="true" />

            {/* Title — pattern cluster name */}
            <p className={styles['sales-cluster-title']}>{cluster.title}</p>

            {/* Description */}
            <p className={styles['sales-cluster-desc']}>{cluster.description}</p>

            {/* Image grid — renders when images are provided */}
            {cluster.images && cluster.images.length > 0 && (
              <div className={styles['sales-images']}>
                {cluster.images.map((img) => (
                  <div key={img} className={styles['sales-image-wrapper']}>
                    <Image
                      src={img}
                      alt={cluster.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles['sales-image']}
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
