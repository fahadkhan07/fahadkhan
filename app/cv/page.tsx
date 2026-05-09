import type { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Full academic CV of Fahad Bin Islam Khan — criminal justice scholar and drug policy researcher.',
}

const cvSections = [
  {
    title: 'Education',
    items: [
      {
        primary: 'Ph.D. in Criminal Justice (Incoming)',
        secondary: 'PhD Program · 2024–Present',
        detail: 'Dissertation focus: U.S. Drug Policy, Sentencing, and Racial Equity',
      },
      {
        primary: 'MSc in Criminal Justice',
        secondary: 'University of Mississippi · 2022–2024',
        detail:
          'Thesis: "Punishing Poverty: Drug Sentencing Disparities and the Reproduction of Inequality"',
      },
      {
        primary: 'B.A. in Criminal Justice',
        secondary: 'University of Mississippi · 2018–2022',
        detail: 'Graduated with honors · Concentration: Criminal Justice Policy',
      },
    ],
  },
  {
    title: 'Research Experience',
    items: [
      {
        primary: 'Graduate Research Assistant',
        secondary: 'University of Mississippi · 2022–2024',
        detail:
          'Assisted faculty with data collection, literature reviews, and analysis on criminal justice policy projects.',
      },
      {
        primary: 'Independent Research',
        secondary: '2023–Present',
        detail:
          'Ongoing projects examining drug sentencing, harm reduction policy, and the racial politics of prohibition.',
      },
    ],
  },
  {
    title: 'Teaching Experience',
    items: [
      {
        primary: 'Graduate Teaching Assistant — Introduction to Criminal Justice',
        secondary: 'University of Mississippi · Fall 2022, Fall 2023',
        detail:
          'Led discussion sections, graded assignments, held office hours, and developed course materials.',
      },
      {
        primary: 'Graduate Teaching Assistant — Research Methods in Criminal Justice',
        secondary: 'University of Mississippi · Spring 2023, Spring 2024',
        detail:
          'Assisted with lab sections on quantitative and qualitative research methods.',
      },
    ],
  },
  {
    title: 'Publications & Presentations',
    items: [
      {
        primary: 'Thesis: "Punishing Poverty"',
        secondary: 'University of Mississippi · 2024',
        detail: 'Master\'s thesis examining drug sentencing disparities and systemic inequality.',
      },
      {
        primary: '"The Racial Politics of the War on Drugs: From Nixon to the Present"',
        secondary: 'American Society of Criminology Annual Meeting · 2023',
        detail: 'Conference paper presented at ASC, San Francisco.',
      },
      {
        primary: '"Harm Reduction or Harm Displacement?"',
        secondary: 'Working Paper · Under Review',
        detail: 'Evaluating evidence for public health approaches to drug policy.',
      },
    ],
  },
  {
    title: 'Professional Memberships',
    items: [
      {
        primary: 'American Society of Criminology (ASC)',
        secondary: 'Member · 2022–Present',
        detail: '',
      },
      {
        primary: 'Academy of Criminal Justice Sciences (ACJS)',
        secondary: 'Member · 2022–Present',
        detail: '',
      },
      {
        primary: 'Southern Criminal Justice Association (SCJA)',
        secondary: 'Member · 2022–Present',
        detail: '',
      },
    ],
  },
  {
    title: 'Awards & Honors',
    items: [
      {
        primary: 'Graduate Research Fellowship',
        secondary: 'University of Mississippi · 2022–2024',
        detail: 'Merit-based fellowship supporting graduate research in criminal justice.',
      },
      {
        primary: 'Dean\'s List',
        secondary: 'University of Mississippi · 2018–2022',
        detail: 'Recognized for academic excellence throughout undergraduate career.',
      },
    ],
  },
  {
    title: 'Skills',
    items: [
      {
        primary: 'Quantitative Methods',
        secondary: 'STATA, R, SPSS · Regression, Survival Analysis, Descriptive Statistics',
        detail: '',
      },
      {
        primary: 'Qualitative Methods',
        secondary: 'Interview Research, Content Analysis, Historical Archival Methods',
        detail: '',
      },
      {
        primary: 'Academic Writing & Communication',
        secondary: 'Peer-reviewed writing, policy briefs, public commentary',
        detail: '',
      },
    ],
  },
]

export default function CVPage() {
  return (
    <>
      <PageHeader
        title="Curriculum Vitae"
        subtitle="Academic record, research experience, teaching, and professional activities."
      />

      {/* Download bar */}
      <div className="bg-gold-100 border-b border-gold-200">
        <div className="section-container py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium">
            Download a formatted copy of my full CV
          </p>
          <div className="flex gap-3">
            <Button size="sm" asChild>
              <a href="/fahad-khan-cv.pdf" download>
                <Download size={14} />
                Download PDF
              </a>
            </Button>
            <Button size="sm" variant="outline">
              <ExternalLink size={14} />
              Open in Browser
            </Button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl">
            {/* Header */}
            <AnimatedSection className="mb-12 pb-8 border-b border-slate-200">
              <h1 className="font-serif text-3xl font-bold text-navy-950 mb-1">Fahad Bin Islam Khan</h1>
              <p className="text-gold-600 font-medium mb-4">Criminal Justice Scholar | Drug Policy Researcher</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
                <span>fbkhan137@gmail.com</span>
                <span>University of Mississippi</span>
                <a href="https://fahadkhanresearch.com" className="hover:text-navy-700">
                  fahadkhanresearch.com
                </a>
              </div>
            </AnimatedSection>

            {/* Sections */}
            {cvSections.map((section, si) => (
              <AnimatedSection key={section.title} delay={si * 0.08} className="mb-10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="grid sm:grid-cols-[1fr_auto] gap-1">
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">{item.primary}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.secondary}</p>
                        {item.detail && (
                          <p className="text-xs text-slate-500 mt-1 italic">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection className="mt-8 pt-6 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-400">
                Last updated: May 2026 · Full CV available upon request
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
