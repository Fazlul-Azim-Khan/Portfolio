/*
 * Reflections.tsx — (010)
 * Confirmed from Figma node 966:8153.
 *
 * Three-column insight layout.
 * Heading + 3 numbered insight columns.
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H2 heading
 *   ─────────────────────────────────────────
 *
 *   ┌──────────────┬──────────────┬──────────────┐
 *   │  01          │  02          │  03          │
 *   │  ──────      │  ──────      │  ──────      │
 *   │  Title       │  Title       │  Title       │
 *   │  Body text   │  Body text   │  Body text   │
 *   └──────────────┴──────────────┴──────────────┘
 */

import type { ReflectionsSection } from '../content'
import styles from './Reflections.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ReflectionsProps {
  section: ReflectionsSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Reflections({ section }: ReflectionsProps) {
  return (
    <div className={styles['reflections-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      {/*
        Confirmed: Figma node 966:8160
        H3 Integral CF, tracking-h3, uppercase.
        Note: Figma source reads "Tow" (typo) — corrected to "two" in content.ts.
      */}
      <h1 className={styles['reflections-heading']}>{section.heading}</h1>

      {/* ── Insight columns ──────────────────────────────── */}
      {/*
        Confirmed: Figma node 966:8162
        3 columns, flex, gap-40.
        Each column: top rule line (1px #e5e5e5) + insight content (gap-24).
        Number is Integral CF 20px (H5), not Lead — confirmed from Figma 1014:6718.
      */}
      <div className={styles['reflections-insights-row']}>
        {section.insights.map((insight) => (
          <div key={insight.number} className={styles['reflections-insight']}>

            {/* Top rule line — confirmed: Figma node 1014:6716, bg-[#e5e5e5] h-px */}
            <div className={styles['reflections-insight-divider']} aria-hidden="true" />

            {/* Number — e.g. "01", "02", "03" (Integral CF 20px, black) */}
            <p className={styles['reflections-number']}>{insight.number}</p>

            {/* Title — uppercase display */}
            <p className={styles['reflections-title']}>{insight.title}</p>

            {/* Body paragraph */}
            <p className={styles['reflections-body']}>{insight.body}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
