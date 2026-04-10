/*
 * Divider/index.tsx
 * Horizontal rule — confirmed from Figma nodes 1021:6896, 1036:7697
 *
 * Two variants:
 *   light → #e5e5e5 — used on white/light section backgrounds
 *   dark  → #cccccc — used inside the dark Experience section
 *
 * Renders as <hr> (semantic) with role="separator".
 *
 * Usage:
 *   <Divider />                   — light (default)
 *   <Divider variant="dark" />    — for dark-background sections
 */

import styles from './Divider.module.css'
import type { DividerVariant } from '@/types'


/* ============================================================
   PROPS
   ============================================================ */

interface DividerProps {
  variant?:   DividerVariant  // 'light' | 'dark' — default: 'light'
  className?: string
}

// Explicit map so dynamic variant lookup stays type-safe after rename
const variantClass: Record<DividerVariant, string> = {
  light: styles['divider-light'],
  dark:  styles['divider-dark'],
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Divider({
  variant   = 'light',
  className,
}: DividerProps) {

  const combinedClass = [
    styles['divider-root'],
    variantClass[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <hr
      role="separator"
      aria-hidden="true"
      className={combinedClass}
    />
  )
}
