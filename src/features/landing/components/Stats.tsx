/*
 * features/landing/components/Stats.tsx
 *
 * Social proof numbers section — (003).
 *
 * Renders 4 key metrics from the pitch deck:
 *   8+  · ~$25M · NPS 84 · 10+
 *
 * Layout: section index label + 4-column stat grid.
 * Metric values render at H2 scale; labels at body/muted.
 *
 * Content:  src/features/landing/content.ts → stats
 *
 * Server Component — no client-side state or effects required.
 */

import styles from './Stats.module.css'


/* ── Types ──────────────────────────────────────────────── */

type StatItem = {
  value: string
  label: string
}

type StatsContent = {
  meta:  { index: string }
  items: readonly StatItem[]
}

type Props = { content: StatsContent }


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Stats({ content }: Props) {
  return (
    <div className={styles['lp-stats']} aria-label="Key statistics">

      {/* Section index */}
      <div className={styles['lp-stats-meta']}>
        <p className={styles['lp-stats-index']}>{content.meta.index}</p>
      </div>

      {/* 4-column metric grid */}
      <dl className={styles['lp-stats-grid']}>
        {content.items.map((item) => (
          <div key={item.value} className={styles['lp-stats-item']}>
            <dt className={styles['lp-stats-value']}>{item.value}</dt>
            <dd className={styles['lp-stats-label']}>{item.label}</dd>
          </div>
        ))}
      </dl>

    </div>
  )
}
