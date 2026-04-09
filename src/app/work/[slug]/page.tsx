/*
 * work/[slug]/page.tsx — Case Study detail page router
 *
 * Architecture (Option A):
 *   - generateStaticParams + generateMetadata remain here (server-side)
 *   - Known feature slugs delegate rendering to their feature page component
 *   - Legacy fallback handles any future slugs not yet migrated
 *
 * Routing table:
 *   'manufacturing-platform' → features/case-studies/axion-ray/CaseStudyPage
 *   (all other slugs)        → legacy render path (legacy components registry)
 *
 * To add a new case study:
 *   1. Build features/case-studies/[slug]/
 *   2. Add its slug to the feature dispatch below
 *   3. Register it in content/case-studies/index.ts for metadata
 *
 * Static generation: generateStaticParams pre-renders all registered slugs.
 * Unknown slugs: 404 via notFound().
 */

import { notFound }      from 'next/navigation'
import type { Metadata } from 'next'

// ── Feature page components ───────────────────────────────────────────────────
// Each feature owns its full render — NavBar, NoticeStrip, Container, sections.
import AxionRayCaseStudyPage    from '@/features/case-studies/axion-ray/CaseStudyPage'
import CenterHealthCaseStudyPage from '@/features/case-studies/center-health/CaseStudyPage'

// ── Legacy content registry — used for generateStaticParams + generateMetadata
import { caseStudies } from '@/content/case-studies'


/* ============================================================
   TYPES
   ============================================================ */

type Props = {
  params: { slug: string }
}


/* ============================================================
   STATIC PARAMS — pre-render all registered slugs
   ============================================================ */

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}


/* ============================================================
   METADATA — per-page title + description
   Sourced from legacy registry (hero data is identical to feature content)
   ============================================================ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies[params.slug]
  if (!cs) return { title: 'Case Study Not Found' }
  return {
    title:       `${cs.hero.title} — Fazlul Azim Khan`,
    description: `${cs.hero.meta.role} · ${cs.hero.meta.sector} · ${cs.hero.meta.year}`,
  }
}


/* ============================================================
   PAGE COMPONENT — feature dispatch
   ============================================================ */

export default function CaseStudyPage({ params }: Props) {

  // ── Feature dispatch ─────────────────────────────────────
  // Each known slug delegates to its feature's full-page component.
  // The feature component owns NavBar + NoticeStrip + Container + sections.

  if (params.slug === 'manufacturing-platform') {
    return <AxionRayCaseStudyPage />
  }

  if (params.slug === 'center-health') {
    return <CenterHealthCaseStudyPage />
  }

  // ── Unknown slug — 404 ───────────────────────────────────
  // All registered slugs must have a feature dispatch entry above.
  // This catches slugs in the registry without a feature implementation.
  notFound()
}
