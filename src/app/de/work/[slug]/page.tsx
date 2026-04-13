/*
 * app/de/work/[slug]/page.tsx — German case study detail router
 *
 * Mirrors app/work/[slug]/page.tsx exactly.
 * Feature CaseStudyPage components are locale-agnostic for now;
 * they will consume content.de.ts files once German text is provided.
 *
 * Routing table (same as EN):
 *   'erp-admin'               → features/case-studies/adm/CaseStudyPage
 *   'manufacturing-platform'  → features/case-studies/axion-ray/CaseStudyPage
 *   'center-health'           → features/case-studies/center-health/CaseStudyPage
 *
 * Static generation: same slug set as EN route.
 * Unknown slugs: 404 via notFound().
 */

import { notFound }      from 'next/navigation'
import type { Metadata } from 'next'

// ── Feature page components ───────────────────────────────────────────────────
import ADMCaseStudyPage          from '@/features/case-studies/adm/CaseStudyPage'
import AxionRayCaseStudyPage     from '@/features/case-studies/axion-ray/CaseStudyPage'
import CenterHealthCaseStudyPage from '@/features/case-studies/center-health/CaseStudyPage'

// ── Content registry — used for generateStaticParams + generateMetadata
import { caseStudies } from '@/content/case-studies'


/* ============================================================
   TYPES
   ============================================================ */

type Props = {
  params: { slug: string }
}


/* ============================================================
   STATIC PARAMS — pre-render all registered slugs under /de/work/
   ============================================================ */

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}


/* ============================================================
   METADATA — per-page title + description (German locale marker)
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

export default function DECaseStudyPage({ params }: Props) {

  if (params.slug === 'erp-admin') {
    return <ADMCaseStudyPage />
  }

  if (params.slug === 'manufacturing-platform') {
    return <AxionRayCaseStudyPage />
  }

  if (params.slug === 'center-health') {
    return <CenterHealthCaseStudyPage />
  }

  notFound()
}
