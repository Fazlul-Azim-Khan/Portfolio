/*
 * Chip/index.tsx
 * Specialty/tag chip — confirmed from Figma node 848:87
 *
 * Used in:
 *   - HeroSection: specialty area tags (AI prediction & analytics, etc.)
 *
 * By default chips are decorative (no pointer, no hover).
 * Pass `interactive` to enable hover state and pointer cursor.
 *
 * Usage:
 *   <Chip label="AI prediction & analytics" />
 *   <Chip label="Product Strategy" interactive />
 */

import styles from './Chip.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ChipProps {
  label:        string
  interactive?: boolean     // enables hover state + pointer cursor
  onClick?:     () => void
  className?:   string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Chip({
  label,
  interactive = false,
  onClick,
  className,
}: ChipProps) {

  const combinedClass = [
    styles['chip-root'],
    interactive ? styles['chip-interactive'] : undefined,
    className,
  ].filter(Boolean).join(' ')

  if (interactive || onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={combinedClass}
        aria-label={label}
      >
        {label}
      </button>
    )
  }

  return (
    <span className={combinedClass}>
      {label}
    </span>
  )
}
