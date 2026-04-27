/*
 * SectionProblem.tsx — Center Health
 *
 * Shared "Problem" block used by every major section to anchor the
 * narrative — frames the tension that motivated the design decisions
 * shown below.
 *
 * Visual structure mirrors the existing "What I designed" label + body
 * pattern used across sections:
 *
 *   <h3 — Integral CF H4 32px, --color-primary>
 *   {label}                              ← e.g. "Problem" or "System Challenge"
 *   </h3>
 *
 *   <p — body 16px, --color-primary, max line length 500px>
 *   {text}
 *   </p>
 *
 * Server Component — content is static.
 */

import styles from './SectionProblem.module.css'

interface SectionProblemProps {
  /** Body text — 2-4 lines describing the friction this section's design addresses. */
  text:   string
  /** Label shown above the body. Defaults to "Problem"; (014) uses "System Challenge". */
  label?: string
}

export default function SectionProblem({ text, label = 'Problem' }: SectionProblemProps) {
  return (
    <div className={styles['sp-root']}>
      <h3 className={styles['sp-label']}>{label}</h3>
      <p className={styles['sp-body']}>{text}</p>
    </div>
  )
}
