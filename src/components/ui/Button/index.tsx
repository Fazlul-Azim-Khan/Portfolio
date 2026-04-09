/*
 * Button/index.tsx
 * Primitive button component — confirmed from Figma nodes 941:6021–6025
 *
 * Renders as <button> by default.
 * Renders as <a> when `href` is provided (nav CTAs, external links).
 *
 * Usage:
 *   <Button label="Contact me →" variant="primary" href="#contact" />
 *   <Button label="Download CV ↓" variant="outlined" href="/cv.pdf" />
 *   <Button label="Submit" variant="primary" onClick={handleSubmit} />
 */

import styles from './Button.module.css'
import type { ButtonVariant } from '@/types'


/* ============================================================
   PROPS
   ============================================================ */

interface ButtonProps {
  label:     string
  variant?:  ButtonVariant    // 'primary' | 'outlined' | 'ghost' — default: 'primary'
  href?:     string           // renders as <a> when provided
  target?:   '_blank' | '_self'
  download?: boolean          // adds HTML download attribute — triggers file download
  onClick?:  () => void
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
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
  download,
  onClick,
  type      = 'button',
  disabled  = false,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {

  const variantClass = styles[variant]
  const combinedClass = [
    styles.button,
    variantClass,
    className,
  ].filter(Boolean).join(' ')

  // Render as anchor when href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download || undefined}
        className={combinedClass}
        aria-label={ariaLabel ?? label}
        onClick={onClick}
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
