/*
 * Container/index.tsx
 * Page body wrapper — confirmed from Figma node 1021:6891
 *
 * This is the single outermost content wrapper for the landing page body.
 * It constrains width to --layout-max-width (1920px) and adds
 * horizontal padding of --layout-padding-x (16px) on each side.
 *
 * Usage:
 *   <Container>
 *     {children}
 *   </Container>
 *
 *   <Container className={styles.customOverride}>
 *     {children}
 *   </Container>
 */

import styles from './Container.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ContainerProps {
  children:   React.ReactNode
  className?: string
  as?:        'div' | 'main' | 'section' | 'article'
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {

  const combinedClass = [
    styles['layout-container'],
    className,
  ].filter(Boolean).join(' ')

  return (
    <Tag className={combinedClass}>
      {children}
    </Tag>
  )
}
