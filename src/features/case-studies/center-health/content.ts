/*
 * features/case-studies/center-health/content.ts
 *
 * Single source of truth for the Center Health case study.
 * Slug: center-health  |  Client: Center Health
 *
 * Content confirmed from Figma node 1206:5756 (Hero frame).
 * Remaining sections are added as Figma links are provided.
 *
 * Section order (re-indexed — Figma (002) = code (001)):
 *   Hero · WhyItMattered (001) · Scope (002) · DesignSystem (003)
 *   Onboarding (004) · Devices (005) · Home (006) · ARIA (007)
 *   Logging (008) · MealLogging (009) · ProviderPortal (010)
 *   Website (011) · Branding (012) · ContinuousUX (013)
 *   Reflections (014) · RecommendationLetter (016)
 *
 * Image paths — ⚠️ files must be placed at these paths:
 *   public/images/works/center-health/hero.png
 *   public/images/works/center-health/ds-overview.png       (aspect ~2975/2038 — Figma node 1161:5917)
 *   public/images/works/center-health/ds-spacing.png        (Figma node 1172:6095)
 *   public/images/works/center-health/ds-components.png     (Figma node 1172:6097)
 *   public/images/works/center-health/ds-component-demo.png (aspect ~2424/1558 — Figma node 1161:5920)
 *   public/images/works/center-health/onboarding.png        (Figma node 1161:5976)
 *   public/images/works/center-health/devices-1.png         (aspect 828/701 — Figma node 1172:6270)
 *   public/images/works/center-health/devices-2.png         (aspect 828/602 — Figma node 1172:6272)
 *   public/images/works/center-health/devices-3.png         (aspect 828/638 — Figma node 1172:6274)
 *   public/images/works/center-health/devices-4.png         (aspect 780/568 — Figma node 1172:6276)
 *   public/images/works/center-health/home-dashboard.png    (aspect 1504/1128 — Figma node 1161:6255)
 *   public/images/works/center-health/logging.png           (aspect 1600/1200 — Figma node 1161:6453)
 *
 * To update content: edit strings in this file only.
 * To change layout: edit the section components.
 */


/* ============================================================
   IMPORTS
   ============================================================ */

import type {
  CaseStudyHeroData,
  CaseStudyProblemSection,
  CaseStudyDecisionsSection,
} from '@/types'


/* ============================================================
   CENTER HEALTH–SPECIFIC SECTION TYPES
   ============================================================ */

/** Person card in (001) Why this product mattered */
export interface PersonCard {
  name:    string   // e.g. 'Julian (CTO)'
  detail:  string   // e.g. 'Longtime Type 1 diabetic'
}

/** (001) Why this product mattered — person cards + quote card */
export interface CenterHealthWhyItMatteredSection {
  type:    'why-it-mattered'
  index:   string        // '(001)'
  heading: string        // 'Why this product mattered'
  people:  PersonCard[]  // left-column person cards (2 stacked)
  quote:   string        // right-column large quote (H4 32px uppercase)
}


/** (002) What I Have Designed — blue brand card, 3-column scope grid */
export interface CenterHealthScopeSection {
  type:    'scope-of-work'
  index:   string    // '(002)'
  heading: string    // 'What I have done'
  items:   string[]  // scope item labels — each becomes a grid cell
}


/** Single image entry for section 004 demo card */
export interface DemoImage {
  src:     string   // image path under /public/
  alt:     string   // descriptive alt text
  aspect?: string   // CSS aspect-ratio string e.g. '2975 / 2038' — omit for auto height
}

/** Single image entry for sections with multiple images */
export interface SectionImage {
  src:     string    // path under /public/
  alt:     string
  aspect:  string    // CSS aspect-ratio string e.g. '828 / 701'
  rounded?: boolean  // true → border-radius: var(--radius-sm)
}

/** Next Case Study — navigation card linking to the next project */
export interface CenterHealthNextCaseStudySection {
  type:     'next-case-study'
  index:    string    // '01'
  label:    string    // 'Under NDA'
  title:    string    // H4 32px Integral CF
  image:    string    // cover image path
  href:     string    // link to the case study page
}


/** (016) Recommendation Letter — dark card with blue quote, click opens PDF modal */
export interface CenterHealthRecommendationLetterSection {
  type:     'recommendation-letter'
  index:    string    // '(016)'
  heading:  string    // H3 heading — Integral CF 56px
  author:   string    // 'CTO: Julian Laval'
  quote:    string    // italic pull-quote snippet from the letter
  pdfSrc:   string    // path to the PDF file in public/
}


/** (014) Reflections — index-left/content-right (gap-40), heading + 3×2 numbered grid */
export interface ReflectionItem {
  number: string   // '01'–'06'
  text:   string   // reflection statement
}

export interface CenterHealthReflectionsSection {
  type:        'reflections'
  index:       string            // '(014)'
  heading:     string            // H3 heading (pre-wrap)
  reflections: ReflectionItem[]  // 6 items in 3×2 grid
}


/** (013) Continuous UX — index-left/content-right, heading + 4 features, no image/results */
export interface CenterHealthContinuousUXSection {
  type:     'continuous-ux'
  index:    string    // '(013)'
  heading:  string    // H3 heading
  features: string[]  // 4 feature items — divider + H5 title (flex row, gap-40)
}


/** (012) Branding — simple: index+heading row + single image */
export interface CenterHealthBrandingSection {
  type:    'branding'
  index:   string    // '(012)'
  heading: string    // H3 heading
  image:   { src: string; alt: string; aspect: string }
}


/** (011) Provider Portal — index-left/content-right (gap-24), body right, features, image, H4 results */
export interface CenterHealthProviderPortalSection {
  type:        'provider-portal'
  index:       string    // '(011)'
  heading:     string    // H3 heading (pre-wrap)
  body:        string    // body paragraph (369px, right-aligned)
  features:    string[]  // 4 feature items — divider + H5 title (flex row, gap-40)
  image:       { src: string; alt: string; aspect: string }
  resultsText: string    // H4 32px results statement
}


/** (010) Website — flat vertical stack, features, 4 images, H4 results */
export interface CenterHealthWebsiteSection {
  type:        'website'
  index:       string           // '(010)'
  heading:     string           // H3 heading (pre-wrap for line break)
  features:    string[]         // 4 feature items — divider + H5 title (flex row, gap-40)
  images:      SectionImage[]   // 4 stacked images with aspect ratios + optional rounded flag
  resultsText: string           // H4 32px results statement
}


/** (009) Meal Logging — heading+body row, feature items (gap-40), image, H4 results */
export interface CenterHealthMealLoggingSection {
  type:        'meal-logging'
  index:       string    // '(009)'
  heading:     string    // H3 heading (flex-1, left side of heading row)
  body:        string    // body paragraph (310px, right side of heading row)
  features:    string[]  // 5 feature items — divider + H5 title (flex row, gap-40)
  image:       { src: string; alt: string; aspect: string }
  resultsText: string    // H4 32px results statement
}


/** (008) Logging — heading+body row, feature items, image, H4 results */
export interface CenterHealthLoggingSection {
  type:        'logging'
  index:       string    // '(008)'
  heading:     string    // H3 heading (flex-1, left side of heading row)
  body:        string    // body paragraph (310px, right side of heading row)
  features:    string[]  // 5 feature items — divider + H5 title (flex row, gap-24)
  image:       { src: string; alt: string; aspect: string }
  resultsText: string    // H4 32px results statement
}


/** (007) ARIA — sub-section for Chat & Feed + Notification System */
export interface AriaSubSection {
  heading:       string           // sub-section H3 heading
  headingAlign?: 'left' | 'right' // default left; Notification is right-aligned
  headingWidth?: string           // optional fixed width, e.g. '812px'
  features?:     string[]         // Chat has 5 feature items; Notification has none
  image:         { src: string; alt: string; aspect: string; rounded?: boolean }
}

/** (007) ARIA — two sub-sections (Chat & Feed, Notification), results */
export interface CenterHealthAriaSection {
  type:          'aria'
  index:         string           // '(007)'
  heading:       string           // H3 heading
  body:          string           // body paragraph, right-aligned 392px
  subSections:   AriaSubSection[]
  resultsText:   string           // H4 32px results statement
}


/** (006) Home Dashboard — right-aligned body, 3×2 grid, image, H4 results */
export interface CenterHealthHomeDashboardSection {
  type:          'home-dashboard'
  index:         string    // '(006)'
  heading:       string    // H3 heading
  body:          string    // body paragraph — right-aligned via align-items: flex-end
  whatIDesigned: string[]  // 6 items for 3-col × 2-row CSS grid
  image:         { src: string; alt: string; aspect: string }
  resultsText:   string    // H4 (32px) results statement — smaller than sections 004–006
}


/** (005) Devices Integration — blue card, header, what I designed, 4 images, results */
export interface CenterHealthDevicesSection {
  type:          'devices'
  index:         string        // '(005)'
  heading:       string        // H3 heading text
  body:          string        // body paragraph (may contain \n\n for paragraph breaks)
  whatIDesigned: string[]      // 5 feature items
  images:        SectionImage[] // 4 stacked images with aspect ratios
  resultsText:   string        // large H3 results statement
}


/** (004) Onboarding — heading, body paragraph, what I designed, image, results */
export interface CenterHealthOnboardingSection {
  type:          'onboarding'
  index:         string    // '(004)'
  heading:       string    // multiline H3
  body:          string    // right-aligned body paragraph
  whatIDesigned: string[]  // 6 feature items in wrapping flex row
  image:         { src: string; alt: string }
  resultsText:   string    // large H3 results statement
}


/** (003) Design System — header, feature grid, demo images, results */
export interface CenterHealthDesignSystemSection {
  type:        'design-system'
  index:       string       // '(003)'
  heading:     string       // 'Design system: the invisible infrastructure'
  sideText:    string       // sidebar paragraph — 3 short lines
  features:    string[]     // 6 feature items for the 3-col grid
  demoImages:  DemoImage[]  // 4 stacked images in the demo card
  resultsText: string       // large H3 results statement
}


/* ============================================================
   SECTION UNION
   Expand as new section types are added for this case study.
   ============================================================ */

export type CenterHealthSectionData =
  | CenterHealthWhyItMatteredSection
  | CaseStudyProblemSection
  | CaseStudyDecisionsSection
  | CenterHealthScopeSection
  | CenterHealthDesignSystemSection
  | CenterHealthOnboardingSection
  | CenterHealthDevicesSection
  | CenterHealthHomeDashboardSection
  | CenterHealthAriaSection
  | CenterHealthLoggingSection
  | CenterHealthMealLoggingSection
  | CenterHealthWebsiteSection
  | CenterHealthProviderPortalSection
  | CenterHealthBrandingSection
  | CenterHealthContinuousUXSection
  | CenterHealthReflectionsSection
  | CenterHealthRecommendationLetterSection
  | CenterHealthNextCaseStudySection


/* ── Top-level shape ─────────────────────────────────────── */

export interface CenterHealthCaseStudy {
  slug:     string
  hero:     CaseStudyHeroData
  sections: CenterHealthSectionData[]
}


/* ============================================================
   CONTENT
   ============================================================ */

export const centerHealth: CenterHealthCaseStudy = {

  slug: 'center-health',


  /* ── Hero ──────────────────────────────────────────────────
     Confirmed from Figma node 1206:5756
     Image aspect: 1328/710 (differs from Axion Ray 1408/776)
     No AI watermark — omitted intentionally.
     ─────────────────────────────────────────────────────────── */

  hero: {
    title:        'ai-powered health & diabetes Management platform',
    heroImage:    '/images/works/center-health/hero.jpg',
    imageAspect:  '1328 / 710',
    // aiWatermark intentionally omitted — Center Health has none
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Redesign & Scale — Strip App to Full Health Ecosystem',
      year:   '2021 – 2023',
      sector: 'Clinical Healthcare · AI Health Management',
      note:   'Forbes 30 Under 30 - Consumer Technology (2021)',
      chips:  ['Case Study', 'Enterprise AI', 'Clinical Healthcare'],
    },
  },


  sections: [

    /* ── (001) Why this product mattered ──────────────────────
       Two-column card layout: person cards (left) + quote (right).
       Cards: white bg, rounded-16, blue shadow, p-64, gap-12.
       Heading: 64px H2 Integral CF (larger than H3 used in later sections).
       Confirmed from Figma node 1161:5809
       ─────────────────────────────────────────────────────── */
    {
      type:    'why-it-mattered',
      index:   '(001)',
      heading: 'Why this product mattered',
      people: [
        { name: 'Julian (CTO)', detail: 'Longtime Type 1 diabetic' },
        { name: 'Ali (CEO)',    detail: 'Father had Type 1' },
      ],
      quote: 'Center Health wasn\'t just another healthtech app. It was built by people who live the reality of diabetes. I joined at the perfect moment — the product was evolving from a strip-centric starter app into a full AI-powered metabolic health ecosystem. My role: design the systems, surfaces, and experiences that would make that evolution possible. So instead of "Let\'s build a cool feature," decisions often sounded like: "Would this have helped me last night?"',
    },

    /* ── (002) What I Have Designed ─────────────────────────
       Blue brand card — 3-column scope grid
       Confirmed from Figma node 1161:5830
       ─────────────────────────────────────────────────────── */
    {
      type:    'scope-of-work',
      index:   '(002)',
      heading: 'What I have Designed',
      items: [
        'Feature Research & Credibility Evaluation.',
        'Aria AI UX Flow & Interaction design, making it the BRAIN & Soul of the app.',
        'User research & Flow Architecture.',
        'Doctor & Patient portal.',
        'Website Redesign.',
        'Connected Devices interaction design.',
        'UX for Mobile app Redesign.',
        'Rapid iteration pipelines (Hotjar, CS insights, micro-fixes)',
        'Design system , cross-platform, tokenised with documentation.',
        'Brand Design, Marketing assets, Pitch decks & Printing Materials.',
      ],
    },

    /* ── (003) Design System: The Invisible Infrastructure ───
       Self-contained section — owns header, 6-feature grid,
       4 demo images, and results statement.
       Confirmed from Figma node 1161:5872
       ─────────────────────────────────────────────────────── */
    {
      type:     'design-system',
      index:    '(003)',
      heading:  'Design system: the invisible infrastructure',
      sideText: 'Three platforms.\nMultiple feature teams.\nWe needed coherence.',
      features: [
        'Tokenized foundation: color, spacing, typography, Shadow.',
        'Everything is an instance of a master atomic component.',
        'Level based nested Block Structure contain predefining padding, Gap & Typography behaviour.',
        'Custom Icon, Image & Illustration Library with color-coded health domains.',
        'Interaction, Tone and Component Use case, Adaptive logic all Documented.',
        'Dev-first structure (gap scales, boilerplate rules)',
      ],
      demoImages: [
        {
          src:    '/images/works/center-health/ds-overview.jpg',
          alt:    'Center Health design system — component library overview',
          aspect: '2975 / 2038',
        },
        {
          src: '/images/works/center-health/ds-spacing.jpg',
          alt: 'Center Health design system — spacing scale documentation',
        },
        {
          src: '/images/works/center-health/ds-components.jpg',
          alt: 'Center Health design system — components grid documentation',
        },
        {
          src:    '/images/works/center-health/ds-component-demo.jpg',
          alt:    'Center Health design system — component usage demo',
          aspect: '2424 / 1558',
        },
      ],
      resultsText: '40% Faster ship cycles. Cleaner UIs. Lower cognitive load for users. And fewer surprises for developers.',
    },

    /* ── (004) Onboarding: Adaptive UX ───────────────────────
       Self-contained section — header, body paragraph,
       "what I designed" block, hero image, results.
       Has bottom border divider.
       Confirmed from Figma node 1161:5925
       ─────────────────────────────────────────────────────── */
    {
      type:    'onboarding',
      index:   '(004)',
      heading: 'Onboarding: Adaptive UX based Pre personalised Experience.',
      body:    'Center Health expanded from one user type to five: Type 1, Type 2, prediabetes, weight-loss users, caregivers, and clinicians. One single onboarding funnel wasn\'t going to cut it.',
      whatIDesigned: [
        'Persona-based branching on step one',
        'Modular steps library: Diagnosis info, A1c range, meds, comorbidities',
        'Goals + behavior patterns',
        'Device setup (Duo, CGM, Dexcom, Apple/Google Health)',
        'Progressive disclosure and resume-anytime logic',
        'Designed prompts that feel like a friendly conversation, not a tax form',
      ],
      image: {
        src: '/images/works/center-health/onboarding.jpg',
        alt: 'Center Health onboarding flow — adaptive UX screens',
      },
      resultsText: 'Users entered the app already feeling understood. Setup completion rates improved — and Aria had better data from day one.',
    },

    /* ── (005) Devices Integration, interaction & Results ────
       Blue brand card (#1ab1fe) — all white text.
       Index sits alone at top; heading row has left spacer.
       5 "what I designed" items, 4 images, stacked results.
       Confirmed from Figma node 1172:6231
       ─────────────────────────────────────────────────────── */
    {
      type:    'devices',
      index:   '(005)',
      heading: 'Devices Integration, interaction & Results',
      body:    'The platform supported a growing range of connected health devices. Each had its own pairing logic, data format, and edge cases — and each needed to feel seamless.',
      whatIDesigned: [
        'BLOOD GLUCOSE METER FLOW',
        'BLOOD PRESSURE CALF FLOW',
        'WEIGHT SCALE WITH PULSE DETECTION FLOW.',
        'CGM INTEGRATION FLOW',
        'FITNESS DATA SOURCE INTEGRATION MODULES',
      ],
      images: [
        { src: '/images/works/center-health/devices-1.jpg', alt: 'Center Health — blood glucose meter flow screens', aspect: '828 / 701' },
        { src: '/images/works/center-health/devices-2.jpg', alt: 'Center Health — blood pressure calf flow screens',  aspect: '828 / 602' },
        { src: '/images/works/center-health/devices-3.jpg', alt: 'Center Health — weight scale with pulse detection', aspect: '828 / 638' },
        { src: '/images/works/center-health/devices-4.jpg', alt: 'Center Health — CGM integration flow screens',      aspect: '780 / 568' },
      ],
      resultsText: 'Each device integration reduced manual logging friction and fed Aria richer real-time data.',
    },

    /* ── (006) Home: turning readings into real understanding ─
       White bg, bottom border divider.
       items-end on outer container → body paragraph right-aligns.
       "What I Designed" uses CSS Grid (3×2).
       Image aspect 1504/1128.
       Results text is H4 (32px) — smaller than sections 004–006.
       Confirmed from Figma node 1161:6208
       ─────────────────────────────────────────────────────── */
    {
      type:    'home-dashboard',
      index:   '(006)',
      heading: 'Home: turning readings into real understanding',
      body:    'The v1 dashboard was perfect for early strip users.…but the product had grown into something much bigger: CGM data, nutrition, meds, sleep, activity, mood, weight, caregiver access. We needed a dashboard that behaved like a health intelligence layer, not just a chart.',
      whatIDesigned: [
        '"glanceable" safety strip: current BG + time-in-range',
        '3×2 dynamic health tiles: auto-ranked by what the user logs most',
        'Multi-factor comparison graphs: BG vs meals, sleep, insulin, exercise, calories',
        'Aria insight lane built into the dashboard\'s fold',
        'Shareable summaries for doctors & caregivers',
        'Dev-first structure (gap scales, boilerplate rules)',
      ],
      image: {
        src:    '/images/works/center-health/home-dashboard.jpg',
        alt:    'Center Health home dashboard — turning readings into real understanding',
        aspect: '1504 / 1128',
      },
      resultsText: 'Users could finally see patterns, causes, and trends — not isolated numbers. The dashboard became the daily command center of their metabolic health.',
    },

    /* ── (007) ARIA: giving the platform a brain & Soul ──────
       White bg, bottom border.
       Index-left / content-right row (gap-48).
       Content column (flex-1, gap-10 top-level):
         heading + body (right 392px) + 2 sub-sections + results.
       Sub-section 1 (Chat & Feed): heading py-64 + 5 feature items
         (flex row, gap-40, no stars) + image (1760/1158, no radius).
       Sub-section 2 (Notification System): heading right-aligned
         w-812px py-64 + image (2004/1281, rounded-sm).
       Results: H5 label + H4 32px statement (row).
       Confirmed from Figma node 1161:6257
       ─────────────────────────────────────────────────────── */
    {
      type:    'aria',
      index:   '(007)',
      heading: 'ARIA:\ngiving the platform a brain & Soul.',
      body:    'Aria become the mind and soul with insights, trends and suggestions. Aria already powered insights in the backend. But to users, it felt like an invisible ghost. We needed to give Aria a face, voice, personality, and safe boundaries.',
      subSections: [
        {
          heading:      'ARIA Chat & Feed',
          headingAlign: 'left',
          features: [
            'Personalised to the core & Individual User aligned.',
            'Active monitoring, Comparison showcasing.',
            'Insights, trend showcase.',
            'Health Coaching based on the health data points.',
            'Voice Tones & Personality preferences.',
          ],
          image: {
            src:     '/images/works/center-health/aria-chat-feed.jpg',
            alt:     'Center Health Aria Chat & Feed — personalised AI health coaching interface',
            aspect:  '1760 / 1158',
            rounded: false,
          },
        },
        {
          heading:      'ARIA Notification System',
          headingAlign: 'right',
          headingWidth: '812px',
          image: {
            src:     '/images/works/center-health/aria-notifications.jpg',
            alt:     'Center Health Aria Notification System — contextual health alerts and reminders',
            aspect:  '2004 / 1281',
            rounded: true,
          },
        },
      ],
      resultsText: 'Aria became the emotional core of the product — the part users talked to, not just looked at. It also aligned the company\'s branding, website, and product story around AI-first health coaching.',
    },

    /* ── (008) Logging, reminders & habit systems ────────────
       White bg, bottom border.
       Two-column content rows: muted label (252px) + content.
       Bullet list in "what I built".
       Adapted to site identity: clean flex layout, Inter body,
       --color-text-muted labels — no Figma absolute-positioning.
       py-64px, gap-40px (tighter than sections 005/007).
       Image aspect 1600/1200.
       Results: H4 32px (same as section 007).
       Confirmed from Figma node 1161:6410
       ─────────────────────────────────────────────────────── */
    {
      type:    'logging',
      index:   '(008)',
      heading: 'Logging, reminders & habit systems',
      body:    'Better logging = smarter Aria.\nBut logging is… logging.\nPeople forget.',
      features: [
        'One-tap logging hub',
        'Context-aware defaults (fasting, post-meal, etc.)',
        'Logging type ascending based on frequency.',
        'Daily tasks & streaks to gently drive consistency',
        'Passive integrations (Apple Health, Google Fit)',
      ],
      image: {
        src:    '/images/works/center-health/logging.jpg',
        alt:    'Center Health logging hub — one-tap event tracking screens',
        aspect: '1600 / 1200',
      },
      resultsText: 'Logging frequency increased significantly. Aria became sharper, more relevant, and more "on your side."',
    },

    /* ── (009) Meal logging, nutrition & Restaurants ───────────
       White bg, bottom border.
       Index-left / content-right row (gap-48).
       Content column (w-1325px → flex-1, gap-64):
         headingRow (heading flex-1 + body 310px, gap-48)
         + 5 feature items (flex row, gap-40, divider + H5 title)
         + image (rounded-sm)
         + results (H5 + H4 32px row).
       Confirmed from Figma node 1237:5781
       ─────────────────────────────────────────────────────── */
    {
      type:    'meal-logging',
      index:   '(009)',
      heading: 'Meal logging, nutrition & Restaurants based menu Suggestions.',
      body:    'If BG is the "what," then food is the "why."\nThe product needed a diabetic-friendly approach to meals.',
      features: [
        'Curated searchable food database',
        'Build-your-own meal with ingredient-level accuracy',
        'Save custom meals for two-tap logging',
        'Aria feedback on carbs → actions ("A short walk can help level this out.")',
        'Restaurants menu integration and recommendations',
      ],
      image: {
        src:    '/images/works/center-health/meal-logging.jpg',
        alt:    'Center Health meal logging — nutrition tracking and restaurant menu suggestions',
        aspect: '1325 / 932',
      },
      resultsText: 'Food became as measurable as blood sugar — giving Aria the context it needed to coach more precisely.',
    },

    /* ── (010) Website: rewriting the story for an AI-first future
       White bg, bottom border.
       Flat vertical stack (NO index-left / content-right row).
       py-64px, gap-40px.
       Index at top → heading → 4 features (gap-40) → 4 images → results.
       Confirmed from Figma node 1161:6549
       ─────────────────────────────────────────────────────── */
    {
      type:    'website',
      index:   '(010)',
      heading: 'Website:\nrewriting the story for an ai-first future',
      features: [
        'Aria-driven hero narrative, as the product shifted its pitch from strips to ARIA.',
        'Clear explanation of how AI turns data into coaching',
        'Program pages for diabetes, prediabetes, weight loss, metabolic health',
        'Visual identity aligned with the app',
      ],
      images: [
        {
          src:     '/images/works/center-health/website-hero.jpg',
          alt:     'Center Health website hero — 100% accurate blood sugar readings from your phone',
          aspect:  '1408 / 923',
          rounded: true,
        },
        {
          src:     '/images/works/center-health/website-aria.jpg',
          alt:     'Center Health website — Meet Aria, your AI diabetes coach',
          aspect:  '1408 / 864',
          rounded: false,
        },
        {
          src:     '/images/works/center-health/website-teams.jpg',
          alt:     'Center Health website — Connect with your care team',
          aspect:  '1408 / 772',
          rounded: true,
        },
        {
          src:     '/images/works/center-health/website-privacy.jpg',
          alt:     'Center Health website — Data privacy designed by patients, for patients',
          aspect:  '1408 / 711',
          rounded: true,
        },
      ],
      resultsText: 'The website finally told the story the product was already living.',
    },

    /* ── (011) Provider Portal: giving clinicians superpowers ──
       White bg, no bottom border (last visible section before branding).
       Index-left / content-right row (gap-24, not 48).
       Content column (flex-1, gap-64, items-center):
         heading + body (right 369px) + 4 features (gap-40)
         + image (1352/909, rounded-sm) + results (H5 + H4 32px).
       Confirmed from Figma node 1245:11796
       ─────────────────────────────────────────────────────── */
    {
      type:    'provider-portal',
      index:   '(011)',
      heading: 'Provider portal:\ngiving clinicians superpowers',
      body:    'Doctors were working off screenshots sent by patients. Not scalable. Not safe. Not helpful.',
      features: [
        'A triage-friendly patient list with at-a-glance risk indicators',
        'Detailed BG timelines with data overlays (meals, meds, sleep, activity)',
        'View of recent Aria insights, so clinicians knew what coaching patients already received',
        'Clear, reversible permission model for data access',
      ],
      image: {
        src:    '/images/works/center-health/provider-portal.jpg',
        alt:    'Center Health Provider Dashboard — triage-friendly patient list with metabolic health data',
        aspect: '1352 / 909',
      },
      resultsText: 'Clinicians finally had a meaningful tool to evaluate patients\' metabolic health remotely. This unlocked new strategic B2B conversations for Center Health.',
    },

    /* ── (012) Branding, packaging designs ─────────────────────
       Simple section: index+heading row (gap-24) + single image.
       py-96px, gap-24, border-b.
       No features, no body, no results.
       Confirmed from Figma node 1237:11424
       ─────────────────────────────────────────────────────── */
    {
      type:    'branding',
      index:   '(012)',
      heading: 'Branding, packaging designs',
      image: {
        src:    '/images/works/center-health/branding.jpg',
        alt:    'Center Health branding and packaging design — welcome letter and getting started guide',
        aspect: '1408 / 950',
      },
    },

    /* ── (013) The Continuous UX Engine ────────────────────────
       Index-left / content-right row (gap-48).
       Content column (flex-1, gap-64): heading + 4 features (gap-40).
       No image, no body, no results.
       pt-96px, pb-1px, border-b.
       Confirmed from Figma node 1161:6598
       ─────────────────────────────────────────────────────── */
    {
      type:     'continuous-ux',
      index:    '(013)',
      heading:  'The continuous ux engine',
      features: [
        'Hotjar session reviews',
        'Research User feedback from app+play store, customer Support, Analyze &  loop',
        'Notification + copy experiments',
        'cleaned friction points, tightened flows',
      ],
    },

    /* ── (014) Reflections of Two & Half years ─────────────────
       Index-left / content-right row (gap-40).
       Content column (flex-1, gap-64): heading + 3×2 numbered grid.
       Each cell: divider + card (white bg, rounded-16, p-4, gap-24)
       with number (01–06) + text.
       py ~77px, white border-b.
       Confirmed from Figma node 1237:11350
       ─────────────────────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(014)',
      heading: 'Reflections of Two & Half years.\nThe scale up stage.',
      reflections: [
        { number: '01', text: 'Domain depth improves design decisions.' },
        { number: '02', text: 'Adaptive AI UX' },
        { number: '03', text: 'Design systems Cross-platform consistency' },
        { number: '04', text: 'Data visualization' },
        { number: '05', text: 'Healthcare Design complexity' },
        { number: '06', text: 'Business + product intuition' },
      ],
    },

    /* ─────────────────────────────────────────────────────────
       (016) Recommendation Letter
       Flat vertical stack: index + heading + quote card.
       Click opens PDF in a full-screen modal with ✕ close button.
       pt-96px, border-b.
       Confirmed from Figma node 1161:6685
       ─────────────────────────────────────────────────────── */
    {
      type:    'recommendation-letter',
      index:   '(016)',
      heading: 'Recommendation letter',
      author:  'CTO: Julian Laval',
      quote:   'Faz played a leading role in shaping the next iteration of our products — from UX research and design systems to branding and cross-platform implementation.',
      pdfSrc:  '/images/works/center-health/recommendation-letter.pdf',
    },

    /* ─────────────────────────────────────────────────────────
       Next Case Study — navigation card
       Image (1328/710, rounded-8) + index/label/title row.
       Links to the next project in the portfolio.
       Confirmed from Figma node 1242:11481
       ─────────────────────────────────────────────────────── */
    {
      type:  'next-case-study',
      index: '01',
      label: 'Axion Ray',
      title: 'AI-powered manufacturing reliability platform',
      image: '/images/works/manufacturing-platform/mockup.jpg',
      href:  '/work/manufacturing-platform',
    },

  ],
}
