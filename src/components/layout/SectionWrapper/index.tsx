/*
 * SectionWrapper/index.tsx
 * Structural wrapper for each landing page section.
 *
 * Used inside <Container> to wrap section content.
 * Controls: background color, padding, rounded corners, anchor id.
 *
 * Padding is opt-in via props — not all sections use the same padding:
 *   padded    → adds py-64px (vertical padding, both sides)
 *   paddedX   → adds px-64px (horizontal padding, both sides)
 *               Combine padded + paddedX for the full p-64px pattern
 *               seen in Experience and Languages sections.
 *
 * For asymmetric padding (e.g. More Works: pt-200px pb-64px),
 * pass a `className` from the section's own module CSS.
 *
 * Usage:
 *
 *   // Standard section (Hero, Selected Works):
 *   <SectionWrapper id="works" padded>
 *     ...
 *   </SectionWrapper>
 *
 *   // Dark section with all-sides padding + rounded corners (Experience):
 *   <SectionWrapper background="dark" padded paddedX rounded>
 *     ...
 *   </SectionWrapper>
 *
 *   // Section with custom padding override:
 *   <SectionWrapper className={styles.galleryPadding}>
 *     ...
 *   </SectionWrapper>
 */

import styles from './SectionWrapper.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface SectionWrapperProps {
  children:    React.ReactNode
  background?: 'light' | 'dark'   // default: 'light'
  padded?:     boolean             // adds py-64px
  paddedX?:    boolean             // adds px-64px (combine with padded for p-64px)
  rounded?:    boolean             // adds border-radius (--radius-sm)
  id?:         string              // anchor id for smooth-scroll navigation
  as?:         'div' | 'section' | 'article'
  className?:  string              // for asymmetric or custom padding overrides
  'aria-labelledby'?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function SectionWrapper({
  children,
  background = 'light',
  padded     = false,
  paddedX    = false,
  rounded    = false,
  id,
  as: Tag    = 'section',
  className,
  'aria-labelledby': ariaLabelledBy,
}: SectionWrapperProps) {

  const combinedClass = [
    styles.wrapper,
    styles[background],
    padded  ? styles.padded  : undefined,
    paddedX ? styles.paddedX : undefined,
    rounded ? styles.rounded : undefined,
    className,
  ].filter(Boolean).join(' ')

  return (
    <Tag
      id={id}
      className={combinedClass}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </Tag>
  )
}
