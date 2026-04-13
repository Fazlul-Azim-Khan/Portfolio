/*
 * Problem.tsx — (001)
 * ADM-specific section: The Problem
 *
 * Layout (inside CaseStudySectionWrapper):
 *
 *   H1 heading
 *   ─────────────────────────────────────────
 *   Quote (large Integral CF text)
 *   ─────────────────────────────────────────
 *   Body — subheader + paragraph blocks:
 *     ─────────
 *     Subheader
 *     Body paragraph
 *     ─────────
 *     Subheader
 *     Body paragraph
 *     …
 *
 * Replaces the shared CaseStudyProblemSection to allow structured
 * body blocks instead of a single string.
 * Server Component — no client-side interaction.
 */

import type { ADMProblemSection } from '../content'
import styles from './Problem.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ProblemProps {
  section: ADMProblemSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Problem({ section }: ProblemProps) {
  return (
    <div className={styles['problem-root']}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles['problem-heading']}>{section.heading}</h1>

      {/* ── Quote ────────────────────────────────────────── */}
      <p className={styles['problem-quote']}>{section.quote}</p>

      {/* ── Body — subheader + paragraph blocks ──────────── */}
      <div className={styles['problem-body-blocks']}>
        {section.body.map((block, i) => (
          <div key={i} className={styles['problem-body-block']}>
            <div className={styles['problem-body-divider']} aria-hidden="true" />
            <p className={styles['problem-body-subheader']}>{block.subheader}</p>
            <p className={styles['problem-body-text']}>{block.body}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
