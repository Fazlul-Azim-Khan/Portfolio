/*
 * CaseStudyProblemSection/index.tsx
 * The Problem section — (001)
 * Confirmed from Figma node 978:6022
 *
 * Layout (content column, inside SectionWrapper):
 *
 *   H3 "The Problem"
 *   ─────────────────────────────  (divider, #e5e5e5)
 *   [quote — H3 56px, w-full]
 *   [body — Inter 14px, w-600px, align bottom-right]
 *
 * The content column has pt-[191px] pb-[42px] with a bottom white border.
 * The quote uses Integral CF 56px (same as H3 heading).
 *
 * Server Component — no client-side interaction.
 */

import type { CaseStudyProblemSection as CaseStudyProblemSectionType } from '@/types'
import styles from './CaseStudyProblemSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudyProblemSectionProps {
  section: CaseStudyProblemSectionType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyProblemSection({ section }: CaseStudyProblemSectionProps) {
  return (
    <div className={styles.content}>

      {/* ── Heading ──────────────────────────────────────── */}
      <h1 className={styles.heading}>{section.heading}</h1>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className={styles.divider} aria-hidden="true" />

      {/* ── Quote ─────────────────────────────────────────── */}
      {/*
        H3 scale (56px) — same font size as heading.
        Full width. Confirmed: Figma node 978:6035
      */}
      <blockquote className={styles.quote}>
        {section.quote}
      </blockquote>

      {/* ── Body text ─────────────────────────────────────── */}
      {/*
        Inter 14px, w-[600px], bottom-right aligned.
        Confirmed: Figma node 978:6031
      */}
      <div className={styles.bodyWrap}>
        <p className={styles.body}>{section.body}</p>
      </div>

    </div>
  )
}
