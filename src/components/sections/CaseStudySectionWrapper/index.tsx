/*
 * CaseStudySectionWrapper/index.tsx
 * Shared layout wrapper for all numbered case study sections.
 * Confirmed from Figma nodes 978:6022, 978:6038, 1005:6337, 978:7108, 978:7314
 *
 * Pattern (used for every section 001–005):
 *
 *   ┌──────────┬──────────────────────────────────────────────┐
 *   │  (001)   │  [section content]                           │
 *   │  index   │                                              │
 *   │  w:38px  │  flex-1                                      │
 *   └──────────┴──────────────────────────────────────────────┘
 *
 * Index column width: 38.64px — Figma node 978:6023
 * Gap between columns: var(--case-section-col-gap) = 40px
 *
 * Dark variant: used for the User Research section (002).
 *   bg-[var(--primary)], px-16px, py-64px, rounded-[16px] — Figma node 978:6038
 *
 * Usage:
 *   <CaseStudySectionWrapper index="(001)">
 *     <CaseStudyProblemSection ... />
 *   </CaseStudySectionWrapper>
 */

import styles from './CaseStudySectionWrapper.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface CaseStudySectionWrapperProps {
  index:      string                 // e.g. '(001)'
  children:   React.ReactNode
  dark?:      boolean                // true = dark card variant (Research section)
  className?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudySectionWrapper({
  index,
  children,
  dark      = false,
  className,
}: CaseStudySectionWrapperProps) {

  const wrapClass = [
    styles.wrapper,
    dark ? styles.dark : undefined,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapClass}>

      {/* ── Index column ─────────────────────────────────── */}
      {/*
        w-[38.64px], pt-[8px] — Figma node 978:6023
        Index text: Inter 14px uppercase (Figma uses DM Sans with opsz 14,
        visually equivalent to Inter Regular 14px)
      */}
      <div className={styles.indexCol}>
        <span className={styles.index} aria-label={`Section ${index}`}>
          {index}
        </span>
      </div>

      {/* ── Content column ───────────────────────────────── */}
      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}
