/*
 * shared/ui/Button/Button.tsx
 *
 * Primitive button component — confirmed from Figma nodes 941:6021–6025
 *
 * Renders as <button> by default.
 * Renders as <a>      when `href` is provided (nav CTAs, external links).
 *
 * Variants:
 *   primary  → filled black,  white text,   no border
 *   outlined → transparent,   black text,   1px solid black border
 *   ghost    → transparent,   black text,   no border, no padding-x
 *
 * Usage:
 *   <Button label="Contact me →" variant="primary" href="#contact" />
 *   <Button label="Download CV ↓" variant="outlined" href="/cv.pdf" />
 *   <Button label="Submit" variant="primary" onClick={handleSubmit} />
 */

import styles from './Button.module.css'


/* ============================================================
   TYPES
   ============================================================ */

export type ButtonVariant = 'primary' | 'outlined' | 'ghost'


/* ============================================================
   PROPS
   ============================================================ */

interface ButtonProps {
  label:       string
  variant?:    ButtonVariant     // default: 'primary'
  href?:       string            // renders as <a> when provided
  target?:     '_blank' | '_self'
  onClick?:    () => void
  type?:       'button' | 'submit' | 'reset'
  disabled?:   boolean
  className?:  string
  'aria-label'?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Button({
  label,
  variant   = 'primary',
  href,
  target,
  onClick,
  type      = 'button',
  disabled  = false,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {

  const combinedClass = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  // Render as anchor when href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={combinedClass}
        aria-label={ariaLabel ?? label}
      >
        {label}
      </a>
    )
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </button>
  )
}
