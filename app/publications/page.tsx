import type { Metadata } from 'next'
import { ExternalLink, FileText, Download } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Academic publications, working papers, and research by Fahad Bin Islam Khan on U.S. drug policy and criminal justice.',
}

const publications = [
  {
    type: 'Thesis',
    title:
      'Punishing Poverty: Drug Sentencing Disparities and the Reproduction of Inequality in the American Criminal Justice System',
    authors: 'Khan, F.',
    venue: 'Master\'s Thesis, University of Mississippi',
    year: '2024',
    abstract:
      'This thesis examines how drug sentencing laws — particularly mandatory minimum statutes — operate to reproduce socioeconomic and racial inequality. Through analysis of federal sentencing commission data and legislative history, I argue that drug sentencing is not a neutral response to criminal conduct but a mechanism of social stratification.',
    tags: ['Drug Sentencing', 'Inequality', 'Criminal Justice', 'Mandatory Minimums'],
    status: 'Completed',
    available: true,
  },
  {
    type: 'Working Paper',
    title:
      'Harm Reduction or Harm Displacement? Evaluating the Efficacy of Public Health Approaches to Drug Policy',
    authors: 'Khan, F.',
    venue: 'Working Paper',
    year: '2024',
    abstract:
      'This paper evaluates the empirical evidence for harm reduction interventions — including naloxone distribution, supervised consumption facilities, and needle exchange programs — as alternatives to enforcement-centered drug policy.',
    tags: ['Harm Reduction', 'Drug Policy', 'Public Health', 'Evidence-Based Policy'],
    status: 'Under Review',
    available: false,
  },
  {
    type: 'Conference Paper',
    title:
      'The Racial Politics of the War on Drugs: From Nixon to the Present',
    authors: 'Khan, F.',
    venue: 'American Society of Criminology Annual Meeting',
    year: '2023',
    abstract:
      'This paper traces the racialized origins and execution of the War on Drugs from the Nixon administration\'s explicit targeting of Black communities to contemporary patterns of disparate enforcement.',
    tags: ['War on Drugs', 'Race', 'History', 'Criminal Justice'],
    status: 'Presented',
    available: true,
  },
]

const academicProfiles = [
  {
    name: 'Google Scholar',
    description: 'View all publications and citation metrics',
    href: 'https://scholar.google.com',
    bg: 'bg-blue-50 border-blue-200',
    icon: '🎓',
    cta: 'View Profile',
  },
  {
    name: 'ResearchGate',
    description: 'Download papers and follow my research',
    href: 'https://researchgate.net',
    bg: 'bg-teal-50 border-teal-200',
    icon: '🔬',
    cta: 'View Profile',
  },
  {
    name: 'ORCID',
    description: 'Persistent researcher identifier',
    href: 'https://orcid.org',
    bg: 'bg-green-50 border-green-200',
    icon: '🆔',
    cta: 'View Profile',
  },
  {
    name: 'Academia.edu',
    description: 'Working papers and preprints',
    href: 'https://academia.edu',
    bg: 'bg-orange-50 border-orange-200',
    icon: '📄',
    cta: 'View Profile',
  },
]

const typeColors: Record<string, 'default' | 'gold' | 'secondary' | 'outline'> = {
  Thesis:           'default',
  'Working Paper':  'gold',
  'Conference Paper': 'secondary',
  'Journal Article': 'outline',
}

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed articles, working papers, conference presentations, and thesis research."
      />

      {/* ── ACADEMIC PROFILES ─────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="section-container">
          <AnimatedSection className="mb-8 text-center">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">
              Find My Work Online
            </p>
          </AnimatedSection>
          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {academicProfiles.map((p) => (
              <AnimatedItem key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3 p-4 rounded-xl border ${p.bg} hover:shadow-md transition-all duration-200 group`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy-900 text-sm">{p.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.description}</p>
                  </div>
                  <ExternalLink size={13} className="text-slate-400 group-hover:text-navy-700 mt-0.5 flex-shrink-0" />
                </a>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── PUBLICATIONS LIST ──────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Research Output</h2>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            {publications.map((pub, i) => (
              <AnimatedSection key={pub.title} delay={i * 0.1}>
                <div className="border border-slate-200 rounded-xl p-7 bg-white hover:border-navy-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant={typeColors[pub.type] ?? 'secondary'}>{pub.type}</Badge>
                    <span className="text-xs text-slate-400">{pub.year}</span>
                    <span
                      className={`ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        pub.status === 'Completed' || pub.status === 'Presented'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-1 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-1">{pub.authors}</p>
                  <p className="text-sm text-gold-600 font-medium mb-4">
                    {pub.venue}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    {pub.available && (
                      <Button size="sm" variant="outline">
                        <Download size={13} />
                        Request PDF
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 max-w-4xl">
            <div className="flex items-start gap-4">
              <FileText size={24} className="text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-navy-900 mb-2">
                  Request a Paper
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you are interested in any of my research and would like a copy of a paper,
                  please reach out via the contact page. I am happy to share work-in-progress
                  and completed manuscripts with fellow scholars, students, and policy professionals.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
