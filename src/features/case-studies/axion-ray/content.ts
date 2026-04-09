/*
 * features/case-studies/axion-ray/content.ts
 *
 * Single source of truth for the Axion Ray case study.
 * Slug: manufacturing-platform  |  Client: Under NDA
 *
 * Content confirmed verbatim from Figma node 966:7654 (Axionray frame)
 * unless marked ⚠️ (stub — pending Figma confirmation).
 *
 * Section order:
 *   Hero · Problem (001) · UserResearch (002) · DesignDecisions (003)
 *   SolutionStructure (004) · PhaseOne (005) · PhaseTwo (006)
 *   FundingMilestone (007) · PhaseThree (008) · Outcome (009)
 *   Reflections (010) · ClientFeedback · NextCaseStudy
 *
 * Image paths — ⚠️ files must be present at these paths:
 *   public/images/works/manufacturing-platform/axion-1.png
 *   public/images/works/manufacturing-platform/phase-01.png
 *   public/images/works/manufacturing-platform/phase-02.png
 *   public/images/works/manufacturing-platform/phase-03a.png   (1315×390)
 *   public/images/works/manufacturing-platform/phase-03b.png   (1315×605)
 *   public/images/works/manufacturing-platform/phase-03-axion.png (1331×1187)
 *   public/images/works/manufacturing-platform/ai-watermark.png
 *   public/images/works/manufacturing-platform/milestone-sbir.png
 *
 * To update content: edit strings in this file only.
 * To change layout: edit the section components.
 */


/* ============================================================
   INTERFACES
   Section-specific types not covered by @/types.
   Shared types (CaseStudyHeroData, etc.) imported from @/types.
   ============================================================ */

import type {
  CaseStudyHeroData,
  CaseStudyProblemSection,
  CaseStudyResearchSection,
  CaseStudyDecisionsSection,
  CaseStudySolutionSection,
  CaseStudyPhaseSection,
  CaseStudyClientFeedbackSection,
} from '@/types'


/* ── FundingMilestone ──────────────────────────────────────── */

export interface FundingMilestoneSection {
  type:     'funding-milestone'
  index:    string
  /** Chip icon — rendered in Integral CF 32px (e.g. "*") */
  chipIcon: string
  /** Chip label — e.g. "Milestone · U.S. Air Force SBIR Contract" */
  chip:     string
  /** Section heading — Integral CF H3 */
  heading:  string
  /** Body paragraph — Inter 16px */
  body:     string
  /** Full-width image below the heading+body row */
  image:    string
}


/* ── Outcome ───────────────────────────────────────────────── */

export interface OutcomeSection {
  type:  'outcome'
  index: string
  /** Large heading — Integral CF H3, uppercase */
  heading: string
  /** Descriptor text right of heading — Inter 14px, w-268px */
  descriptor: string
  /** Four metric cards — value (H3) + label (H5 tertiary) */
  metrics: Array<{
    value: string  // e.g. '$7.5M', 'SBIR'
    label: string  // e.g. 'Seed Round', 'U.S. Air Force Contract'
  }>
  /** Impact statement — dark card, Integral CF H4 uppercase */
  impactStatement: string
  /** Skill chip labels */
  skills: string[]
  /** NDA disclaimer — Inter 12px uppercase */
  ndaNote: string
}


/* ── Reflections ───────────────────────────────────────────── */

export interface ReflectionsSection {
  type:    'reflections'
  index:   string
  heading: string  // "REFLECTIONS OF TWO YEARS. THREE FUNDING STAGES."
  insights: Array<{
    number:  string  // '01', '02', '03'
    title:   string  // "DOMAIN DEPTH IMPROVES DESIGN DECISIONS."
    body:    string  // body paragraph
  }>
}


/* ── NextCaseStudy ─────────────────────────────────────────── */

export interface NextCaseStudySection {
  type:     'next-case-study'
  label:    string   // "Next Case Study"
  index?:   string   // "02" — project number shown below the image
  title:    string   // "Center Health"
  subtitle: string   // brief descriptor (becomes the card headline)
  href:     string   // "/work/center-health"
  image?:   string   // preview image path — aspect 1328/710
}


/* ── Union ─────────────────────────────────────────────────── */

export type AxionRaySectionData =
  | CaseStudyProblemSection
  | CaseStudyResearchSection
  | CaseStudyDecisionsSection
  | CaseStudySolutionSection
  | CaseStudyPhaseSection
  | FundingMilestoneSection
  | OutcomeSection
  | ReflectionsSection
  | CaseStudyClientFeedbackSection
  | NextCaseStudySection


/* ── Top-level shape ───────────────────────────────────────── */

export interface AxionRayCaseStudy {
  slug:     string
  hero:     CaseStudyHeroData
  sections: AxionRaySectionData[]
}


/* ============================================================
   CONTENT
   ============================================================ */

export const axionRay: AxionRayCaseStudy = {

  slug: 'manufacturing-platform',


  /* ── Hero ──────────────────────────────────────────────────
     Figma: node 977:5889 (Case Hero row) + node 966:7719 (image)
     ─────────────────────────────────────────────────────────── */

  hero: {
    title:       'AI-powered Manufacturing forecasting platform',
    heroImage:   '/images/works/manufacturing-platform/axion-1.jpg',
    aiWatermark: '/images/works/manufacturing-platform/ai-watermark.png',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Pre-Seed → Seed → Series A',
      year:   '2021 – 2022',
      sector: 'Industrial AI · Predictive Reliability',
      note:   'Company name withheld under NDA',
      chips:  ['Case Study', 'Enterprise AI', 'Confidential'],
    },
  },


  sections: [

    /* ── (001) The Problem ─────────────────────────────────
       Confirmed: Figma node 978:6022
       ─────────────────────────────────────────────────────── */
    {
      type:    'problem',
      index:   '(001)',
      heading: 'The Problem',

      quote:
        '" Product failures don\'t arrive as surprises. They arrive as ignored signals. ' +
        'The signals are there. The problem is that nobody has connected them yet. "',

      body:
        'Warranty claims. Service technician notes. Supplier quality reports. Assembly line logs. ' +
        'In manufacturing, the early warning signs of a reliability crisis are almost always present ' +
        '— scattered across disconnected systems, weeks or months before anyone connects them. ' +
        'By the time a failure reaches recall threshold, the window to act cheaply has long closed. ' +
        'The damage — field repairs, regulatory scrutiny, reputational cost — has already compounded. ' +
        'AI can monitor fragmented reliability signals continuously and surface anomalies to engineers ' +
        'before they become crises.',
    } satisfies CaseStudyProblemSection,


    /* ── (002) User Research ───────────────────────────────
       Confirmed: Figma node 978:6038 (dark card)
       ─────────────────────────────────────────────────────── */
    {
      type:    'research',
      index:   '(002)',
      heading: 'User Research',

      intro:
        'Reliability engineers need to justify every decision to their team. ' +
        'Before designing anything, I needed to understand how they investigate failures, ' +
        'where existing tools break down, and what makes an AI recommendation worth trusting.',

      personalityTraits: [
        'Creativity',
        'Collaborative Spirit, Embraces Feedback',
        'Work-Life Balance Adept To Collaboration',
        'Critical Thinking',
        'Direct, Open & Honest',
        'Curiosity',
      ],

      challengesPains: [
        'Visibility into program, progress status',
        'Limited engineering input to process improvements.',
        'Limited visibility in engineering team accomplishments',
        'Alignment of engineering vs cost/timing',
        'Anecdotal feedback from engineering dept for improvement',
        'Accurate visibility into program/project metrics',
        'Deadline & engineering activities incompatibilities',
        'Timing Pressure',
      ],

      existingCauses: [
        'Anxiety',
        'Helplessness',
        'Frustrated',
        'Unsure / Overwhelmed',
      ],

      targetEmotions: [
        'Excitement',
        'Inspiration',
        'Pride',
      ],

      conclusions: [
        'Manufacturing reliability engineers are trained skeptics.',
        'A dashboard that simply said "anomaly detected" would be ignored. ' +
          'A system that shows WHY something is unusual, WHAT signals contributed, ' +
          'and HOW confident the AI is — earns investigation',
        'All UX decisions in this phase focused on interpretability and investigation.',
      ],
    } satisfies CaseStudyResearchSection,


    /* ── (003) Key Design Decisions ────────────────────────
       Confirmed: Figma node 1005:6337
       ─────────────────────────────────────────────────────── */
    {
      type:    'decisions',
      index:   '(003)',
      heading: 'Key Design Decisions',

      decisions: [
        {
          title: 'Interpretability over abstraction',
          chose:
            'Every anomaly card shows WHY the AI flagged it, WHAT signals contributed, ' +
            'and HOW confident the model is — rather than just surfacing an alert.',
          why:
            "Manufacturing engineers are trained to dismiss signals they can't audit. " +
            'A system that presents conclusions without showing its reasoning gets treated as noise.',
          tradeoff:
            'Each anomaly card carries significantly more visual weight. Resolved with progressive ' +
            'disclosure: summary view for scanning, expanded view for investigation.',
        },
        {
          title: 'Layered drill-down over single-screen density',
          chose:
            'Every anomaly card shows WHY the AI flagged it, WHAT signals contributed, ' +
            'and HOW confident the model is — rather than just surfacing an alert.',
          why:
            "Manufacturing engineers are trained to dismiss signals they can't audit. " +
            'A system that presents conclusions without showing its reasoning gets treated as noise.',
          tradeoff:
            'Each anomaly card carries significantly more visual weight. Resolved with progressive ' +
            'disclosure: summary view for scanning, expanded view for investigation.',
        },
        {
          title: 'Consistent visual encoding over per-chart flexibility',
          chose:
            'A unified chart grammar where the same visual treatment — colour, density, axis scale ' +
            '— means the same thing across all five data source types.',
          why:
            'Engineers rotate between data sources. Inconsistent visual encoding creates cognitive ' +
            'overhead and misinterpretation risk. A shared grammar removes that tax.',
          tradeoff:
            "Some data types don't map perfectly to the standard encoding. We accepted minor visual " +
            'precision trade-offs to preserve system-wide legibility.',
        },
      ],
    } satisfies CaseStudyDecisionsSection,


    /* ── (004) Solution Structure ──────────────────────────
       Confirmed: Figma node 978:7108
       ─────────────────────────────────────────────────────── */
    {
      type:    'solution',
      index:   '(004)',
      heading: 'Solution Structure',

      dataSourcesTitle: 'Five data sources.\nOne intelligence layer.',
      dataSourcesBody:
        'The platform ingests reliability signals from across the manufacturing operation simultaneously.',

      dataSources: [
        {
          name:        'Warranty Claims',
          description: 'Structured field failure data — the clearest signal, but always lagging.',
        },
        {
          name:        'Service Reports',
          description: 'Technician observations — unstructured but rich with early warning insight.',
        },
        {
          name:        'Manufacturing Logs',
          description: 'Assembly line process deviations and quality checkpoints.',
        },
        {
          name:        'Engineering Feedback',
          description: 'Internal reliability assessments from engineering teams.',
        },
        {
          name:        'Supplier Data',
          description: 'Component quality metrics and inspection reports.',
        },
      ],

      flowTitle: 'From signal to root cause.\nEnd-to-End Experience',

      flowSteps: [
        { number: '01', label: 'AI Detects Anomaly' },
        { number: '02', label: 'Signal surfaces in reliability dashboard' },
        { number: '03', label: 'Engineer opens anomaly insight panel' },
        { number: '04', label: 'Trend visualization shows deviation' },
        { number: '05', label: 'Engineer filters master dataset' },
        { number: '06', label: 'Component-level root cause investigation' },
      ],

      dataFlowTitle: 'Data Flow',
      dataFlowBody:
        'AI can monitor fragmented reliability signals continuously and surface anomalies ' +
        'to engineers before they become crises.',

      pipeline: [
        { name: 'Manufacturing Data Sources' },
        { name: 'AI Processing Layer',             detail: 'pattern detection · anomaly scoring' },
        { name: 'Insight Layer',                   detail: 'anomaly alerts · signal trends' },
        { name: 'Engineer Investigation Workspace', detail: 'dashboards · charts · master tables' },
      ],
    } satisfies CaseStudySolutionSection,


    /* ── (005) Phase 01 — Pre-Seed ─────────────────────────
       Confirmed: Figma node 978:7314
       ─────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(005)',
      chip:    'Phase 01 · Pre-Seed · 2021',
      heading: 'Building the foundation. Sole designer. Zero to investor-ready.',

      body:
        'When I joined, the company had a thesis, a technical team, and an urgent need: build ' +
        'something real enough to show investors this idea could become a product. I was the sole ' +
        'designer. No design system. No component library. No product interface to extend. I had to ' +
        "design interfaces that demonstrated the platform's analytical potential clearly enough to " +
        'convince investors — while also being structurally sound enough to actually build.',

      keyWork: [
        'Dashboard architecture',
        'Chart visualization patterns',
        'Early reliability insight layouts',
        'Analytical interface structure',
      ],

      outcome: {
        label:    'Series Outcome',
        headline: '$7.5M Seed Raise — February 2023',
        subline:  'Investors: Boeing · Amplo · Inspired Capital',
      },

      image:       '/images/works/manufacturing-platform/phase-01.jpg',
      imageAspect: '4096 / 3072',
    } satisfies CaseStudyPhaseSection,


    /* ── (006) Phase 02 — Seed Stage ───────────────────────
       Confirmed: Figma node 980:7443
       ─────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(006)',
      chip:    'Phase 02 · Seed Stage · 2021 – 2022',
      heading: "Designing for engineers who don't trust what they can't audit.",

      featureCards: [
        {
          title: 'AI Insight Interface',
          bullets: [
            'Anomaly alerts',
            'Signal confidence indicators',
            'Deviation highlights against historical baselines',
            'Interpretable insight summaries',
          ],
          description:
            'Engineers could see what changed, how unusual it was, and why the system flagged it.',
        },
        {
          title: 'Data Visualization System',
          bullets: [
            'Trend charts',
            'Anomaly score graphs',
            'Comparative component analysis',
            'Reliability signal overlays',
          ],
          description:
            'Helped engineers interpret patterns quickly across millions of records.',
        },
        {
          title: 'Enterprise Data Tables',
          bullets: [
            'Multi-dimensional filtering',
            'Configurable column views',
            'Anomaly-score sorting',
            'Expandable row inspection',
          ],
          description:
            'These tables became the most-used workspace for reliability investigation.',
        },
      ],

      image:       '/images/works/manufacturing-platform/phase-02.jpg',
      imageAspect: '1329 / 997',
    } satisfies CaseStudyPhaseSection,


    /* ── (007) Funding Milestone ────────────────────────────
       Confirmed: Figma node 981:7629
       Self-contained dark card — U.S. Air Force SBIR Contract milestone.
       No CaseStudySectionWrapper — index column is rendered internally.
       ─────────────────────────────────────────────────────── */
    {
      type:     'funding-milestone',
      index:    '(007)',
      chipIcon: '*',
      chip:     'Milestone · U.S. Air Force SBIR Contract',
      heading:  'Defense-grade reliability intelligence.',
      body:
        'During the Series A stage, the platform secured a U.S. Air Force SBIR contract. ' +
        'This validated both the AI technology and the product\'s operational readiness. ' +
        'Design work contributed to presenting AI-driven reliability insights clearly enough ' +
        'for government and defense evaluation contexts. Every label, chart axis and confidence ' +
        'indicator needed to stand up to scrutiny.',
      image: '/images/works/manufacturing-platform/milestone-sbir.jpg',
    } satisfies FundingMilestoneSection,


    /* ── (008) Phase 03 — Post Series A ────────────────────
       Confirmed: Figma node 966:8035
       ─────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(008)',
      chip:    'Phase 03 · Post Series A · 2022',
      heading: 'From sole designer to scaling an enterprise platform.',

      body:
        'Following Series A funding, the product team expanded. I transitioned from ' +
        'sole designer to part of a three-person design team alongside a Senior UX ' +
        'Designer and Acting Art Director. The design focus shifted from invention to scale.',

      keyWorkItems: [
        {
          title: 'Investigation Workflow Refinement',
          desc:  'Reducing friction between anomaly alerts and root-cause analysis.',
        },
        {
          title: 'Data Interface Scaling',
          desc:  'Supporting larger datasets and more complex filtering scenarios.',
        },
        {
          title: 'Design System Growth',
          desc:  "Contributing new chart and table components and aligning the platform's UI patterns.",
        },
        {
          title: 'Enterprise Collaboration',
          desc:  'Working with product, engineering and customer stakeholders including Boeing, Denso, Baxter and Raytheon.',
        },
      ],

      outcome: {
        label:    'Series A Outcome',
        headline: '$17.5M Series A — March 2024, Total Raised: $25M',
        subline:  'Led by Bessemer Venture Partners, Strategic investment from RTX Ventures (Raytheon)',
      },

      // Phase 03 dark card — exported as single composite image
      // Figma node 1014:6751 (panels + geo combined)
      imagesComposite:       '/images/works/manufacturing-platform/phase-03-panels.jpg',
      imagesCompositeAspect: '2662 / 2042',
      image:       '/images/works/manufacturing-platform/phase-03-axion.jpg',
      imageAspect: '2662 / 2374',
    } satisfies CaseStudyPhaseSection,


    /* ── (009) Outcome ─────────────────────────────────────
       Confirmed: Figma node 982:5745
       Inside CaseStudySectionWrapper (standard index column).
       ─────────────────────────────────────────────────────── */
    {
      type:    'outcome',
      index:   '(009)',
      heading: 'Outcome: A platform engineers trust. A product investors backed.',
      // ⚠️ "platforM" (capital M) verbatim from Figma node 982:5778 — confirm if intentional typo
      descriptor:
        'From whiteboard concept to $25M-funded enterprise platforM — ' +
        'I was part of it from the first screen.',

      metrics: [
        { value: '$7.5M',  label: 'Seed Round' },
        { value: '$17.5M', label: 'Series A' },
        { value: '$25M',   label: 'Total Raised' },
        { value: 'SBIR',   label: 'U.S. Air Force Contract' },
      ],

      impactStatement:
        'The platform enabled reliability engineers at Boeing, Denso, Baxter and Raytheon ' +
        'to detect failure signals earlier and investigate large-scale manufacturing datasets more effectively.',

      skills: [
        'Enterprise Product Design',
        'AI Interface Design',
        'Data Visualization Systems',
        'Investigative Workflow UX',
        'Design Systems',
        'Startup Product Scaling',
      ],

      ndaNote: 'All visuals subject to NDA. Interfaces shown are conceptual reconstructions.',
    } satisfies OutcomeSection,


    /* ── (010) Reflections ─────────────────────────────────
       Confirmed: Figma node 966:8153
       Three-column insight layout.
       Note: "TOW" is a typo in Figma — preserved verbatim.
       ─────────────────────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(010)',
      // ⚠️ Figma reads "TOW" — confirm if intentional typo before correcting
      heading: 'Reflections of two years. Three funding stages.',

      insights: [
        {
          number: '01',
          title:  'Domain depth improves design decisions.',
          body:
            'Understanding reliability engineering workflows changed how interfaces were structured.',
        },
        {
          number: '02',
          title:  'AI interfaces require transparency.',
          body:
            'Confidence indicators and interpretability are essential for user trust.',
        },
        {
          number: '03',
          title:  'Design systems are infrastructure.',
          body:
            'Consistent visual encoding is essential for complex analytical products.',
        },
      ],
    } satisfies ReflectionsSection,


    /* ── Client Feedback ────────────────────────────────────
       Confirmed: Figma node 1005:6253
       Brand colour #2fe3ff is Axion-specific — not a design token.
       ─────────────────────────────────────────────────────── */
    {
      type:    'client-feedback',
      heading: 'Client Feedback',

      quotes: [
        '"It was a true pleasure working with Fazlul. His designs are highly professional, expert, and aesthetically sophisticated."',
        '"Fazlul is the best designer you could ever ask for. Dedicated, respectful, and a creative genius."',
        '"Fazlul is the most talented designer I have ever worked with."',
      ],

      attribution: 'Daniel First, CEO',
    } satisfies CaseStudyClientFeedbackSection,


    /* ── Next Case Study ────────────────────────────────────
       Terminal section — two-scroll behaviour:
         1st scroll-down: section reveals (opacity/translateY transition)
         2nd scroll-down: router.push(href)
       Confirmed: → Center Health
       ─────────────────────────────────────────────────────── */
    {
      type:     'next-case-study',
      label:    'Next Case Study',
      index:    '02',
      title:    'Center Health',
      subtitle: 'AI-powered diabetes management platform',
      href:     '/work/center-health',
      image:    '/images/works/center-health/mockup.jpg',
    } satisfies NextCaseStudySection,

  ],
}
