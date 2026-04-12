/*
 * Reflections.tsx — (006)
 * ADM Reflections section.
 *
 * Identical layout pattern to Axion Ray Reflections:
 * Three-column insight layout with numbered cards.
 *
 * Server Component — no client-side interaction.
 */

import type { ADMReflectionsSection } from '../content'
import styles from './Reflections.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ReflectionsProps {
  section: ADMReflectionsSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Reflections({ section }: ReflectionsProps) {
  return (
    <div className={styles['reflections-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['reflections-heading']}>{section.heading}</h1>

      {/* ── Insight columns ──────────────────────────────── */}
      <div className={styles['reflections-insights-row']}>
        {section.insights.map((insight) => (
          <div key={insight.number} className={styles['reflections-insight']}>

            {/* Top rule line */}
            <div className={styles['reflections-insight-divider']} aria-hidden="true" />

            {/* Number — "01", "02", "03" */}
            <p className={styles['reflections-number']}>{insight.number}</p>

            {/* Title */}
            <p className={styles['reflections-title']}>{insight.title}</p>

            {/* Body paragraph */}
            <p className={styles['reflections-body']}>{insight.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
