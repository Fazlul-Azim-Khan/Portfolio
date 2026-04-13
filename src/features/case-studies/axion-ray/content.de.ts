/*
 * features/case-studies/axion-ray/content.de.ts
 *
 * German translations for the Axion Ray case study.
 * Structure mirrors content.ts exactly — only string values differ.
 * Image paths, slugs, hrefs, and IDs are unchanged.
 *
 * To update translations: edit string values only.
 * Do not modify object shapes or add/remove keys.
 */

import type {
  AxionRayCaseStudy,
  FundingMilestoneSection,
  OutcomeSection,
  ReflectionsSection,
  NextCaseStudySection,
} from './content'

import type {
  CaseStudyProblemSection,
  CaseStudyResearchSection,
  CaseStudyDecisionsSection,
  CaseStudySolutionSection,
  CaseStudyPhaseSection,
  CaseStudyClientFeedbackSection,
} from '@/types'


export const axionRay: AxionRayCaseStudy = {

  slug: 'manufacturing-platform',


  /* ── Hero ────────────────────────────────────────────────── */

  hero: {
    title:       'KI-gestützte Fertigungsvorhersageplattform',
    heroImage:   '/images/works/manufacturing-platform/axion-1.jpg',
    aiWatermark: '/images/works/manufacturing-platform/ai-watermark.png',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Pre-Seed → Seed → Series A',
      year:   '2021 – 2022',
      sector: 'Industrielle KI · Prädiktive Zuverlässigkeit',
      chips:  ['Fallstudie', 'Enterprise KI', 'Industrielle KI'],
    },
  },


  sections: [

    /* ── (001) Das Problem ───────────────────────────────────── */
    {
      type:    'problem',
      index:   '(001)',
      heading: 'Das Problem',

      quote:
        '„ Produktausfälle kommen nicht als Überraschung. Sie kommen als ignorierte Signale. ' +
        'Die Signale sind da. Das Problem ist, dass sie noch niemand miteinander verknüpft hat. "',

      body:
        'Garantieansprüche. Notizen von Servicetechnikern. Qualitätsberichte der Lieferanten. Protokolle der Fertigungsstraße. ' +
        'In der Fertigung sind die Frühwarnsignale einer Zuverlässigkeitskrise fast immer vorhanden — ' +
        'verstreut über getrennte Systeme, Wochen oder Monate bevor sie jemand verknüpft. ' +
        'Wenn ein Ausfall die Rückrufschwelle erreicht, ist das Fenster zum günstigen Handeln längst geschlossen. ' +
        'Der Schaden — Feldreparaturen, behördliche Kontrolle, Reputationsverluste — hat sich bereits potenziert. ' +
        'KI kann fragmentierte Zuverlässigkeitssignale kontinuierlich überwachen und Anomalien an Ingenieure ' +
        'melden, bevor sie zur Krise werden.',
    } satisfies CaseStudyProblemSection,


    /* ── (002) Nutzerforschung ───────────────────────────────── */
    {
      type:    'research',
      index:   '(002)',
      heading: 'Nutzerforschung',

      intro:
        'Zuverlässigkeitsingenieure müssen jede Entscheidung gegenüber ihrem Team rechtfertigen. ' +
        'Bevor ich irgendetwas gestaltete, musste ich verstehen, wie sie Ausfälle untersuchen, ' +
        'wo bestehende Werkzeuge versagen und was eine KI-Empfehlung vertrauenswürdig macht.',

      personalityTraits: [
        'Kreativität',
        'Kollaborationsgeist, offen für Feedback',
        'Work-Life-Balance und Teamfähigkeit',
        'Kritisches Denken',
        'Direkt, offen und ehrlich',
        'Neugier',
      ],

      challengesPains: [
        'Überblick über Programmfortschritt und Status',
        'Eingeschränkte Beteiligung der Ingenieure an Prozessverbesserungen',
        'Mangelnde Sichtbarkeit der Leistungen des Engineering-Teams',
        'Abstimmung zwischen Engineering und Kosten/Zeitplan',
        'Anekdotisches Feedback aus dem Engineering für Verbesserungen',
        'Genaue Sichtbarkeit in Programm-/Projektkennzahlen',
        'Unvereinbarkeit von Deadlines und Engineering-Aktivitäten',
        'Zeitdruck',
      ],

      existingCauses: [
        'Angst',
        'Hilflosigkeit',
        'Frustration',
        'Unsicherheit / Überforderung',
      ],

      targetEmotions: [
        'Begeisterung',
        'Inspiration',
        'Stolz',
      ],

      conclusions: [
        'Zuverlässigkeitsingenieure in der Fertigung sind trainierte Skeptiker.',
        'Ein Dashboard, das einfach „Anomalie erkannt" meldet, würde ignoriert. ' +
          'Ein System, das zeigt WARUM etwas ungewöhnlich ist, WELCHE Signale beigetragen haben ' +
          'und WIE sicher die KI ist — verdient sich die Untersuchung.',
        'Alle UX-Entscheidungen in dieser Phase konzentrierten sich auf Interpretierbarkeit und Untersuchungstiefe.',
      ],
    } satisfies CaseStudyResearchSection,


    /* ── (003) Wichtige Designentscheidungen ─────────────────── */
    {
      type:    'decisions',
      index:   '(003)',
      heading: 'Wichtige Designentscheidungen',

      decisions: [
        {
          title: 'Interpretierbarkeit statt Abstraktion',
          chose:
            'Jede Anomaliekarte zeigt WARUM die KI sie markiert hat, WELCHE Signale beigetragen haben ' +
            'und WIE sicher das Modell ist — anstatt nur eine Warnung anzuzeigen.',
          why:
            'Fertigungsingenieure sind darauf trainiert, Signale zu ignorieren, die sie nicht prüfen können. ' +
            'Ein System, das Schlussfolgerungen ohne Begründung präsentiert, wird als Rauschen behandelt.',
          tradeoff:
            'Jede Anomaliekarte trägt deutlich mehr visuelles Gewicht. Gelöst durch Progressive Disclosure: ' +
            'Zusammenfassungsansicht zum Scannen, erweiterte Ansicht zur Untersuchung.',
        },
        {
          title: 'Mehrstufige Drill-Down-Navigation statt Einzelbildschirm-Dichte',
          chose:
            'Jede Anomaliekarte zeigt WARUM die KI sie markiert hat, WELCHE Signale beigetragen haben ' +
            'und WIE sicher das Modell ist — anstatt nur eine Warnung anzuzeigen.',
          why:
            'Fertigungsingenieure sind darauf trainiert, Signale zu ignorieren, die sie nicht prüfen können. ' +
            'Ein System, das Schlussfolgerungen ohne Begründung präsentiert, wird als Rauschen behandelt.',
          tradeoff:
            'Jede Anomaliekarte trägt deutlich mehr visuelles Gewicht. Gelöst durch Progressive Disclosure: ' +
            'Zusammenfassungsansicht zum Scannen, erweiterte Ansicht zur Untersuchung.',
        },
        {
          title: 'Konsistente visuelle Kodierung statt flexibler Diagrammgestaltung',
          chose:
            'Eine einheitliche Diagrammsprache, bei der dieselbe visuelle Behandlung — Farbe, Dichte, Achsenskala ' +
            '— über alle fünf Datenquellentypen hinweg dieselbe Bedeutung hat.',
          why:
            'Ingenieure wechseln zwischen Datenquellen. Inkonsistente visuelle Kodierung erzeugt kognitive ' +
            'Mehrbelastung und Fehlinterpretationsrisiken. Eine gemeinsame Grammatik beseitigt diesen Aufwand.',
          tradeoff:
            'Einige Datentypen lassen sich nicht perfekt auf die Standardkodierung abbilden. Wir akzeptierten geringfügige ' +
            'visuelle Präzisionskompromisse, um die systemweite Lesbarkeit zu erhalten.',
        },
      ],
    } satisfies CaseStudyDecisionsSection,


    /* ── (004) Lösungsstruktur ───────────────────────────────── */
    {
      type:    'solution',
      index:   '(004)',
      heading: 'Lösungsstruktur',

      dataSourcesTitle: 'Fünf Datenquellen. Eine Intelligenzschicht.',

      dataSources: [
        {
          name:        'Garantieansprüche',
          description: 'Strukturierte Feldausfallsdaten — das klarste Signal, aber immer verzögert.',
        },
        {
          name:        'Serviceberichte',
          description: 'Beobachtungen von Technikern — unstrukturiert, aber reich an Frühwarninformationen.',
        },
        {
          name:        'Fertigungsprotokolle',
          description: 'Prozessabweichungen und Qualitätsprüfpunkte in der Fertigungsstraße.',
        },
        {
          name:        'Engineering-Feedback',
          description: 'Interne Zuverlässigkeitsbewertungen von Engineering-Teams.',
        },
        {
          name:        'Lieferantendaten',
          description: 'Komponentenqualitätskennzahlen und Prüfberichte.',
        },
      ],

      flowTitle: 'Vom Signal zur Grundursache.\nEnd-to-End-Erfahrung',

      flowSteps: [
        { number: '01', label: 'KI erkennt Anomalie' },
        { number: '02', label: 'Signal erscheint im Zuverlässigkeits-Dashboard' },
        { number: '03', label: 'Ingenieur öffnet Anomalie-Insight-Panel' },
        { number: '04', label: 'Trendvisualisierung zeigt Abweichung' },
        { number: '05', label: 'Ingenieur filtert Hauptdatensatz' },
        { number: '06', label: 'Ursachenanalyse auf Komponentenebene' },
      ],

      dataFlowTitle: 'Datenfluss',

      pipeline: [
        { name: 'Fertigungsdatenquellen' },
        { name: 'KI-Verarbeitungsschicht',          detail: 'Mustererkennung · Anomaliebewertung' },
        { name: 'Insight-Schicht',                  detail: 'Anomaliewarnungen · Signaltrends' },
        { name: 'Ingenieurs-Untersuchungsarbeitsplatz', detail: 'Dashboards · Diagramme · Mastertabellen' },
      ],
    } satisfies CaseStudySolutionSection,


    /* ── (005) Phase 01 — Pre-Seed ───────────────────────────── */
    {
      type:    'phase',
      index:   '(005)',
      chip:    'Phase 01 · Pre-Seed · 2021',
      heading: 'Grundstein legen. Alleiniger Designer. Von null zur Investorenfähigkeit.',

      body:
        'Als ich anfing, hatte das Unternehmen eine These, ein technisches Team und einen dringenden Bedarf: ' +
        'Etwas Reales bauen, das Investoren zeigt, dass diese Idee ein Produkt werden kann. Ich war der alleinige ' +
        'Designer. Kein Designsystem. Keine Komponentenbibliothek. Keine Produktoberfläche zum Erweitern. ' +
        'Ich musste Interfaces gestalten, die das analytische Potenzial der Plattform klar genug demonstrierten, ' +
        'um Investoren zu überzeugen — und dabei strukturell solide genug waren, um tatsächlich gebaut zu werden.',

      keyWork: [
        'Dashboard-Architektur',
        'Diagrammvisualisierungsmuster',
        'Frühe Zuverlässigkeits-Insight-Layouts',
        'Analytische Interface-Struktur',
      ],

      outcome: {
        label:    'Ergebnis der Serie',
        headline: '7,5 Mio. $ Seed-Finanzierung — Februar 2023',
        subline:  'Investoren: Boeing · Amplo · Inspired Capital',
      },

      image:       '/images/works/manufacturing-platform/phase-01.jpg',
      imageAspect: '4096 / 3072',
    } satisfies CaseStudyPhaseSection,


    /* ── (006) Phase 02 — Seed Stage ─────────────────────────── */
    {
      type:    'phase',
      index:   '(006)',
      chip:    'Phase 02 · Seed Stage · 2021 – 2022',
      heading: 'Design für Ingenieure, die nicht vertrauen, was sie nicht prüfen können.',

      featureCards: [
        {
          title: 'KI-Insight-Interface',
          bullets: [
            'Anomaliewarnungen',
            'Signalkonfidenzindikatoren',
            'Abweichungsmarkierungen gegenüber historischen Baselines',
            'Interpretierbare Insight-Zusammenfassungen',
          ],
          description:
            'Ingenieure konnten sehen, was sich verändert hatte, wie ungewöhnlich es war und warum das System es markiert hatte.',
        },
        {
          title: 'Datenvisualisierungssystem',
          bullets: [
            'Trenddiagramme',
            'Anomalie-Score-Grafiken',
            'Vergleichende Komponentenanalyse',
            'Zuverlässigkeitssignal-Überlagerungen',
          ],
          description:
            'Half Ingenieuren, Muster schnell über Millionen von Datensätzen hinweg zu interpretieren.',
        },
        {
          title: 'Enterprise-Datentabellen',
          bullets: [
            'Mehrdimensionale Filterung',
            'Konfigurierbare Spaltenansichten',
            'Sortierung nach Anomalie-Score',
            'Erweiterbare Zeileninspektion',
          ],
          description:
            'Diese Tabellen wurden zum meistgenutzten Arbeitsbereich für Zuverlässigkeitsuntersuchungen.',
        },
      ],

      image:       '/images/works/manufacturing-platform/phase-02.jpg',
      imageAspect: '1329 / 997',
    } satisfies CaseStudyPhaseSection,


    /* ── (007) Finanzierungsmeilenstein ──────────────────────── */
    {
      type:     'funding-milestone',
      index:    '(007)',
      chipIcon: '*',
      chip:     'Meilenstein · U.S. Air Force SBIR-Vertrag',
      heading:  'Zuverlässigkeitsintelligenz in Verteidigungsqualität.',
      body:
        'In der Series-A-Phase sicherte die Plattform einen SBIR-Vertrag der U.S. Air Force. ' +
        'Dies validierte sowohl die KI-Technologie als auch die operative Reife des Produkts. ' +
        'Die Designarbeit trug dazu bei, KI-gestützte Zuverlässigkeits-Insights klar genug zu präsentieren ' +
        'für Bewertungskontexte der Regierung und Verteidigung. Jedes Label, jede Diagrammachse und jeder ' +
        'Konfidenzindikator musste einer genauen Prüfung standhalten.',
      image: '/images/works/manufacturing-platform/milestone-sbir.jpg',
    } satisfies FundingMilestoneSection,


    /* ── (008) Phase 03 — Post Series A ──────────────────────── */
    {
      type:    'phase',
      index:   '(008)',
      chip:    'Phase 03 · Post Series A · 2022',
      heading: 'Vom alleinigen Designer zur Skalierung einer Enterprise-Plattform.',

      body:
        'Nach der Series-A-Finanzierung erweiterte sich das Produktteam. Ich wechselte vom ' +
        'alleinigen Designer zu einem Teil eines dreiköpfigen Designteams neben einem Senior UX ' +
        'Designer und Acting Art Director. Der Design-Fokus verlagerte sich von der Erfindung zur Skalierung.',

      keyWorkItems: [
        {
          title: 'Verfeinerung des Untersuchungsworkflows',
          desc:  'Reduzierung der Reibung zwischen Anomaliewarnungen und Ursachenanalyse.',
        },
        {
          title: 'Skalierung der Daten-Interfaces',
          desc:  'Unterstützung größerer Datensätze und komplexerer Filterszenarien.',
        },
        {
          title: 'Wachstum des Designsystems',
          desc:  'Beitrag neuer Diagramm- und Tabellenkomponenten und Angleichung der UI-Muster der Plattform.',
        },
        {
          title: 'Enterprise-Zusammenarbeit',
          desc:  'Zusammenarbeit mit Produkt und Engineering zur Skalierung von Designsystemen und Untersuchungsworkflows für eine Enterprise-Plattform.',
        },
      ],

      outcome: {
        label:    'Series-A-Ergebnis',
        headline: '17,5 Mio. $ Series A — März 2024, Gesamtfinanzierung: 25 Mio. $',
        subline:  'Geführt von Bessemer Venture Partners, strategische Investition von RTX Ventures (Raytheon)',
      },

      imagesComposite:       '/images/works/manufacturing-platform/phase-03-panels.jpg',
      imagesCompositeAspect: '2662 / 2042',
      image:       '/images/works/manufacturing-platform/phase-03-axion.jpg',
      imageAspect: '2662 / 2374',
    } satisfies CaseStudyPhaseSection,


    /* ── (009) Ergebnis ───────────────────────────────────────── */
    {
      type:    'outcome',
      index:   '(009)',
      heading: 'Ergebnis: Eine Plattform, der Ingenieure vertrauen. Ein Produkt, das Investoren unterstützt haben.',

      metrics: [
        { value: '7,5 Mio. $',  label: 'Seed-Runde' },
        { value: '17,5 Mio. $', label: 'Series A' },
        { value: '25 Mio. $',   label: 'Gesamtfinanzierung' },
        { value: 'SBIR',        label: 'U.S. Air Force Vertrag' },
      ],

      impactStatement:
        'Die Plattform sammelte 25 Mio. $ über drei Phasen ein, unterstützt von strategischen Investoren darunter ' +
        'Boeing, Denso, Baxter und Raytheon — und validierte damit KI-gestützte Zuverlässigkeitsintelligenz für die Fertigung im großen Maßstab.',

      skills: [
        'Enterprise product design',
        'AI interface design',
        'Data visualization systems',
        'Investigative workflow UX',
        'Design systems',
        'Startup product scaling',
      ],

      ndaNote: 'Gezeigte Interfaces sind illustrative Rekonstruktionen.',
    } satisfies OutcomeSection,


    /* ── (010) Rückblick ─────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(010)',
      heading: 'Rückblick auf zwei Jahre. Drei Finanzierungsphasen.',

      insights: [
        {
          number: '01',
          title:  'Domänentiefe verbessert Designentscheidungen.',
          body:
            'Das Verständnis von Zuverlässigkeits-Engineering-Workflows veränderte, wie Interfaces strukturiert wurden.',
        },
        {
          number: '02',
          title:  'KI-Interfaces erfordern Transparenz.',
          body:
            'Konfidenzindikatoren und Interpretierbarkeit sind wesentlich für das Vertrauen der Nutzer.',
        },
        {
          number: '03',
          title:  'Designsysteme sind Infrastruktur.',
          body:
            'Konsistente visuelle Kodierung ist unverzichtbar für komplexe analytische Produkte.',
        },
      ],
    } satisfies ReflectionsSection,


    /* ── Kundenfeedback ───────────────────────────────────────── */
    {
      type:    'client-feedback',
      heading: 'Kundenfeedback',

      quotes: [
        '"It was a true pleasure working with Fazlul. His designs are highly professional, expert, and aesthetically sophisticated."',
        '"Fazlul is the best designer you could ever ask for. Dedicated, respectful, and a creative genius."',
        '"Fazlul is the most talented designer I have ever worked with."',
      ],

      attribution: 'Daniel First, CEO',
    } satisfies CaseStudyClientFeedbackSection,


    /* ── Nächste Fallstudie ───────────────────────────────────── */
    {
      type:     'next-case-study',
      label:    'Nächste Fallstudie',
      index:    '02',
      title:    'Center Health',
      subtitle: 'KI-gestützte Diabetesmanagementplattform',
      href:     '/de/work/center-health',
      image:    '/images/works/center-health/mockup.jpg',
    } satisfies NextCaseStudySection,

  ],
}
