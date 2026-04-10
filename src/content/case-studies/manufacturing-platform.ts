/*
 * content/case-studies/manufacturing-platform.ts
 * Case study content — AI-powered manufacturing forecasting platform
 * Slug: manufacturing-platform  |  Client: Under NDA
 *
 * All content extracted directly from Figma node 966:7654 (Axionray frame).
 * Sections map 1:1 to the components in src/components/sections/CaseStudy*.
 *
 * ⚠️  Image paths are placeholders — files must be placed at these paths:
 *   public/images/works/manufacturing-platform/axion-1.png   (hero image)
 *   public/images/works/manufacturing-platform/phase-01.png  (phase 01 image)
 *   public/images/works/manufacturing-platform/phase-02.png  (phase 02 image)
 *
 * To update content: edit strings in this file only.
 * To change layout: edit the section components.
 * To add a new phase: append a new 'phase' object to sections[].
 */

import type { CaseStudy } from '@/types'


export const manufacturingPlatform: CaseStudy = {

  slug: 'manufacturing-platform',

  /* ── Hero ──────────────────────────────────────────────────
     Figma: node 977:5889 (Case Hero row) + node 966:7719 (image)
     ────────────────────────────────────────────────────────── */

  hero: {
    title:     'AI-Powered Manufacturing Forecasting Platform',
    heroImage: '/images/works/manufacturing-platform/axion-1.jpg',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Pre-Seed → Seed → Series A',
      year:   '2021 – 2022',
      sector: 'Industrial AI · Predictive Reliability',
      chips:  ['Case Study', 'Enterprise AI', 'Industrial AI'],
    },
  },

  sections: [

    /* ── (001) The Problem ─────────────────────────────────
       Figma: node 978:6022
       ────────────────────────────────────────────────────── */
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
    },

    /* ── (002) User Research ───────────────────────────────
       Figma: node 978:6038 (dark card)
       ────────────────────────────────────────────────────── */
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
    },

    /* ── (003) Key Design Decisions ────────────────────────
       Figma: node 1005:6337
       ────────────────────────────────────────────────────── */
    {
      type:    'decisions',
      index:   '(003)',
      heading: 'Key Design Decisions',

      decisions: [
        {
          title: 'Interpretability Over Abstraction',
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
          title: 'Layered Drill-Down Over Single-Screen Density',
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
          title: 'Consistent Visual Encoding Over Per-Chart Flexibility',
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
    },

    /* ── (004) Solution Structure ──────────────────────────
       Figma: node 978:7108
       ────────────────────────────────────────────────────── */
    {
      type:    'solution',
      index:   '(004)',
      heading: 'Solution Structure',

      dataSourcesTitle: 'Five data sources. One intelligence layer.',

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

      pipeline: [
        { name: 'Manufacturing Data Sources' },
        { name: 'AI Processing Layer',          detail: 'pattern detection · anomaly scoring' },
        { name: 'Insight Layer',                detail: 'anomaly alerts · signal trends' },
        { name: 'Engineer Investigation Workspace', detail: 'dashboards · charts · master tables' },
      ],
    },

    /* ── (005) Phase 01 — Pre-Seed ─────────────────────────
       Figma: node 978:7314
       ────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(005)',
      chip:    'Phase 01 · Pre-Seed · 2021',
      heading: 'Building the Foundation. Sole Designer. Zero to Investor-Ready.',

      body:
        "When I joined, the company had a thesis, a technical team, and an urgent need: build " +
        "something real enough to show investors this idea could become a product. I was the sole " +
        "designer. No design system. No component library. No product interface to extend. I had to " +
        "design interfaces that demonstrated the platform's analytical potential clearly enough to " +
        "convince investors — while also being structurally sound enough to actually build.",

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
    },

    /* ── (006) Phase 02 — Seed Stage ───────────────────────
       Figma: node 980:7443
       Content confirmed from Figma nodes 980:7481, 980:7540, 980:7578 (three cards)
       Image: 1329×997px, cornerRadius 8 — Figma node 1014:6749
       ────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(006)',
      chip:    'Phase 02 · Seed Stage · 2021 – 2022',
      heading: "Designing for Engineers Who Don't Trust What They Can't Audit.",

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
    },

    /* ── (007) Phase 03 — Post Series A ────────────────────
       Figma: node 966:8035 (section container)
       Chip: node 1005:6407
       Images card: node 1014:6751 (VERTICAL, 2 children)
         Child 1 (1014:6752): 1315×390 — top dashboard panels
         Child 2 (1014:6756): 1315×605 — geo map image
       Single image: node 1021:6854 — 1331×1187 rectangle
       ────────────────────────────────────────────────────── */
    {
      type:    'phase',
      index:   '(007)',
      chip:    'Phase 03 · Post Series A · 2022',
      heading: 'From Sole Designer to Scaling an Enterprise Platform.',

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

      // Phase 03 dark card — exported as single composite
      imagesComposite:       '/images/works/manufacturing-platform/phase-03-panels.jpg',
      imagesCompositeAspect: '2662 / 2042',

      // Single full-width image below the dark card
      image:       '/images/works/manufacturing-platform/phase-03-axion.jpg',
      imageAspect: '2662 / 2374',
    },

    /* ── Client Feedback ────────────────────────────────────
       Figma: node 1005:6253
       ────────────────────────────────────────────────────── */
    {
      type:    'client-feedback',
      heading: 'Client Feedback',

      quotes: [
        '"It was a true pleasure working with Fazlul. His designs are highly professional, expert, and aesthetically sophisticated."',
        '"Fazlul is the best designer you could ever ask for. Dedicated, respectful, and a creative genius."',
        '"Fazlul is the most talented designer I have ever worked with."',
      ],

      attribution: 'Daniel First, CEO',
    },

  ],
}
