/*
 * shared/ui/Container/Container.tsx
 *
 * Single structural wrapper that constrains all page content width
 * and provides horizontal padding.
 *
 * Specs confirmed from Figma node 1021:6891 — "Body" wrapper:
 *   max-width:  1920px  → --layout-max-width
 *   padding-x:    16px  → --layout-padding-x
 *
 * Layout hierarchy:
 *   <page>
 *     <NavBar />       ← full-bleed, sits outside Container
 *     <Container>      ← this component
 *       <Hero />
 *       <SelectedWorks />
 *       ...
 *     </Container>
 *   </page>
 *
 * Usage:
 *   <Container>
 *     {children}
 *   </Container>
 *
 *   <Container as="main">
 *     {children}
 *   </Container>
 */

import styles from './Container.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ContainerProps {
  children:   React.ReactNode
  /** Semantic element to render — defaults to 'div' */
  as?:        'div' | 'main' | 'section' | 'article'
  className?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Container({
  children,
  as: Tag   = 'div',
  className,
}: ContainerProps) {

  const combinedClass = [styles['shared-container'], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={combinedClass}>
      {children}
    </Tag>
  )
}
