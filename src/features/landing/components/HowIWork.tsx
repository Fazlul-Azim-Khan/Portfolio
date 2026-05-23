/*
 * features/landing/components/HowIWork.tsx
 *
 * Process section — (007), between Experience and Contact.
 *
 * Renders a 4-step process loop from the pitch deck:
 *   Discover → Shape → Ship → Evolve
 *
 * Layout: meta (index + heading) + 4-column step grid.
 * Each step: index label (Lead/muted) + step name (H4).
 * Top border on each step cell creates a clean visual rhythm.
 *
 * Content:  src/features/landing/content.ts → howIWork
 *
 * Server Component — no client-side state or effects required.
 */

import styles from './HowIWork.module.css'


/* ── Types ──────────────────────────────────────────────── */

type ProcessStep = {
  index: string
  label: string
}

type HowIWorkContent = {
  meta:  { index: string; heading: string }
  steps: readonly ProcessStep[]
}

type Props = { content: HowIWorkContent }


/* ============================================================
   COMPONENT
   ============================================================ */

export default function HowIWork({ content }: Props) {
  return (
    <div className={styles['lp-how']} aria-label="How I work">

      {/* Section index + heading */}
      <div className={styles['lp-how-meta']}>
        <p className={styles['lp-how-index']}>{content.meta.index}</p>
        <h2 className={styles['lp-how-heading']}>{content.meta.heading}</h2>
      </div>

      {/* 4-step process grid */}
      <ol className={styles['lp-how-steps']}>
        {content.steps.map((step) => (
          <li key={step.index} className={styles['lp-how-step']}>
            <span className={styles['lp-how-step-index']}>{step.index}</span>
            <p className={styles['lp-how-step-label']}>{step.label}</p>
          </li>
        ))}
      </ol>

    </div>
  )
}
