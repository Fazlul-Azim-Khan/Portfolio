/*
 * components/ui/IconButton/index.tsx
 *
 * Square icon-only button — sister component to Button.
 *
 * Same design tokens as Button:
 *   size:   --button-height × --button-height  (44 × 44px)
 *   radius: --radius-sm  (8px)
 *
 * Variants:
 *   primary  → bg --color-primary,   icon --color-secondary  (black bg, white icon)
 *   outlined → bg transparent,        icon --color-primary,   1px border --color-primary
 *   ghost    → bg transparent,        icon --color-primary,   no border
 *   light    → bg transparent,        icon --color-secondary, 1px border --color-secondary
 *              (white icon/border — for use on dark backgrounds, e.g. modal overlay)
 *
 * Usage:
 *   import IconButton from '@/components/ui/IconButton'
 *   import { ArrowLeft } from '@/components/icons'
 *   <IconButton icon={<ArrowLeft />} aria-label="Previous image" onClick={prev} />
 *   <IconButton icon={<X />} variant="light" aria-label="Close" onClick={close} />
 */

import styles from './IconButton.module.css'

type IconButtonVariant = 'primary' | 'outlined' | 'ghost' | 'light'


/* ============================================================
   PROPS
   ============================================================ */

interface IconButtonProps {
  /** The icon element — use from @/components/icons */
  icon:        React.ReactNode
  variant?:    IconButtonVariant       // default: 'outlined'
  onClick?:    () => void
  disabled?:   boolean
  type?:       'button' | 'submit' | 'reset'
  className?:  string
  'aria-label': string                 // required — no text label to fall back on
}

// Explicit map so dynamic variant lookup stays type-safe after rename
const variantClass: Record<IconButtonVariant, string> = {
  primary:  styles['icon-btn-primary'],
  outlined: styles['icon-btn-outlined'],
  ghost:    styles['icon-btn-ghost'],
  light:    styles['icon-btn-light'],
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function IconButton({
  icon,
  variant   = 'outlined',
  onClick,
  disabled  = false,
  type      = 'button',
  className,
  'aria-label': ariaLabel,
}: IconButtonProps) {

  const combined = [
    styles['icon-btn-root'],
    variantClass[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}
