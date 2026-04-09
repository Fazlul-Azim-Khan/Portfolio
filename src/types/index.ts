/*
 * types/index.ts
 * Shared TypeScript interfaces for the portfolio system
 *
 * Add new interfaces here as components are built.
 * Keep interfaces lean — only add fields that are actively used.
 *
 * Ordering rule: primitive types (variants) are declared first
 * so they can be safely referenced by interfaces below.
 */


/* ============================================================
   COMPONENT VARIANTS
   Declared first — referenced by interfaces below
   ============================================================ */

export type ButtonVariant = 'primary' | 'outlined' | 'ghost'
export type ButtonSize    = 'default'
export type ChipVariant   = 'default'
export type DividerVariant = 'light' | 'dark'


/* ============================================================
   NAVIGATION
   ============================================================ */

export interface NavLink {
  label: string
  href:  string
}

export interface NavCTA extends NavLink {
  variant:   ButtonVariant    // 'primary' | 'outlined' | 'ghost'
  download?: boolean          // triggers browser file download instead of navigation
}


/* ============================================================
   WORKS & PROJECTS
   ============================================================ */

export interface WorkItem {
  id:       string
  index:    string   // e.g. "01", "02", "03"
  title:    string
  client:   string   // e.g. "Under NDA", "Center Health", "Arrival OS"
  slug:     string   // e.g. "manufacturing-platform"
  mockup:   string   // image path
  tags?:    string[]
  summary?: string
}

export interface GalleryItem {
  id:               string
  title:            string
  image:            string   // image path
  href?:            string   // optional external/internal link
  radiusVariant?:   'default' | 'large'  // 'large' = --radius-sm (8px) — project-wide single radius
  backgroundColor?: string   // per-item fill behind transparent images
                              // e.g. MnMridez = '#c0d004' (confirmed Figma node 1021:7099)
                              // Not a design token — content-layer value only
}


/* ============================================================
   EXPERIENCE
   ============================================================ */

export interface ExperienceEntry {
  id:       string
  company:  string
  location: string
  role:     string
  period:   string
}


/* ============================================================
   LANGUAGES
   ============================================================ */

export interface LanguageEntry {
  language:    string
  proficiency: string
}


/* ============================================================
   CASE STUDIES
   Confirmed from Figma node 966:7654 (Axionray frame)
   ============================================================ */

/* ── Hero ──────────────────────────────────────────────────── */

export interface CaseStudyHeroMeta {
  role:    string   // e.g. 'Product UI/UX Designer'
  stage:   string   // e.g. 'Pre-Seed → Seed → Series A'
  year:    string   // e.g. '2021 – 2022'
  sector:  string   // e.g. 'Industrial AI · Predictive Reliability'
  note?:   string   // e.g. 'Company name withheld under NDA'
  chips:   string[] // e.g. ['Case Study', 'Enterprise AI', 'Confidential']
}

export interface CaseStudyHeroData {
  title:        string   // H1 display text
  heroImage?:   string   // path below the hero row
  imageAspect?: string   // CSS aspect-ratio override e.g. '1328 / 710' (default: var(--case-hero-img-aspect) = 1408/776)
  aiWatermark?: string   // path to decorative watermark image — omit for projects without it
  meta:         CaseStudyHeroMeta
}


/* ── Section types (discriminated union) ───────────────────── */

/** (001) The Problem — quote + body paragraph */
export interface CaseStudyProblemSection {
  type:    'problem'
  index:   string   // e.g. '(001)'
  heading: string
  quote:   string
  body:    string
}

/** Single feature card used in Phase 02 three-card block */
export interface FeatureCard {
  title:       string    // e.g. 'AI Insight Interface'
  bullets:     string[]  // 4 short bullet items at 12px Inter
  description: string    // closing sentence at 14px Inter
}

/** (002) User Research — dark card with chips and insight columns */
export interface CaseStudyResearchSection {
  type:              'research'
  index:             string
  heading:           string
  intro:             string
  personalityTraits: string[]
  challengesPains:   string[]
  existingCauses:    string[]
  targetEmotions:    string[]
  conclusions:       [string, string, string]  // 3-column text row
}

/** Single design decision entry */
export interface DesignDecision {
  title:    string
  chose:    string
  why:      string
  tradeoff: string
}

/** (003) Key Design Decisions */
export interface CaseStudyDecisionsSection {
  type:      'decisions'
  index:     string
  heading:   string
  decisions: DesignDecision[]
}

/** Single data source in Solution section */
export interface CaseStudyDataSource {
  name:        string
  description: string
}

/** Single step in the end-to-end flow */
export interface CaseStudyFlowStep {
  number: string  // '01', '02', …
  label:  string
}

/** Single node in the data pipeline */
export interface CaseStudyPipelineNode {
  name:    string
  detail?: string
}

/** (004) Solution Structure */
export interface CaseStudySolutionSection {
  type:              'solution'
  index:             string
  heading:           string
  dataSourcesTitle:  string
  dataSourcesBody:   string
  dataSources:       CaseStudyDataSource[]
  flowTitle:         string
  flowSteps:         CaseStudyFlowStep[]
  dataFlowTitle:     string
  dataFlowBody:      string
  pipeline:          CaseStudyPipelineNode[]
}

/** Outcome card within a phase section */
export interface CaseStudyPhaseOutcome {
  label:    string   // small label, e.g. 'Series Outcome'
  headline: string   // large text, e.g. '$7.5M Seed Raise — February 2023'
  subline:  string   // e.g. 'Investors: Boeing · Amplo · Inspired Capital'
}

/** Key work item with title + description — used in Phase 03 4-col column layout */
export interface CaseStudyKeyWorkItem {
  title: string
  desc:  string
}

/** (005+) Phase section — repeats for each funding stage */
export interface CaseStudyPhaseSection {
  type:          'phase'
  index:         string
  chip:          string   // e.g. 'Phase 01 · Pre-Seed · 2021'
  heading:       string
  body?:         string   // optional — Phase 02 has no body paragraph
  featureCards?:   FeatureCard[]           // Phase 02 three-card block (Figma 980:7480)
  keyWork?:        string[]                // dark tile labels (Phase 01)
  keyWorkItems?:   CaseStudyKeyWorkItem[]  // 4-col column layout with title+desc (Phase 03)
  outcome?:        CaseStudyPhaseOutcome
  imagesRow?:         string[]   // Phase 03: 3 images side-by-side in row 1 of dark card (Figma 1014:6752)
  imagesBottom?:      string     // Phase 03: full-width image in row 2 of dark card (Figma 1014:6756)
  imagesBottomAspect?: string    // e.g. '1315 / 605'
  imagesComposite?:       string  // Phase 03: single composite image replacing panels+geo (exported as one)
  imagesCompositeAspect?: string  // e.g. '2662 / 2042'
  image?:             string     // single full-width image BELOW the dark card — Phase 01, Phase 03
  imageAspect?:       string     // e.g. '4096 / 3072'
}

/** Client Feedback section — 3 teal quote cards on dark bg */
export interface CaseStudyClientFeedbackSection {
  type:        'client-feedback'
  heading:     string    // e.g. 'Client Feedback'
  quotes:      string[]  // 3 testimonial quotes
  attribution: string    // e.g. 'Daniel First, CEO'
}

/** Discriminated union of all section types */
export type CaseStudySectionData =
  | CaseStudyProblemSection
  | CaseStudyResearchSection
  | CaseStudyDecisionsSection
  | CaseStudySolutionSection
  | CaseStudyPhaseSection
  | CaseStudyClientFeedbackSection

/** Top-level case study data object */
export interface CaseStudy {
  slug:     string
  hero:     CaseStudyHeroData
  sections: CaseStudySectionData[]
}
