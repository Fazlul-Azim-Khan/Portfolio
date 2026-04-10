/*
 * shared/ui/Chip/Chip.tsx
 *
 * Tag/label chip — confirmed from Figma nodes 848:87, 1002:5922–5937
 *
 * Decorative by default (no pointer, no hover state).
 * Pass `interactive` to enable hover + pointer cursor (for filter/toggle usage).
 *
 * Renders as <span>   when decorative.
 * Renders as <button> when interactive or onClick is provided.
 *
 * Usage:
 *   <Chip label="AI prediction & analytics" />
 *   <Chip label="Product Strategy" interactive onClick={handleClick} />
 */

import styles from './Chip.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ChipProps {
  label:        string
  /** Enables hover state and pointer cursor — renders as <button> */
  interactive?: boolean
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
  ]
    .filter(Boolean)
    .join(' ')

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
