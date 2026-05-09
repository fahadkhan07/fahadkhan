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
    type: 'Journal Article',
    title:
      'Nature of Crime Victimization among Tourists in Bangladesh: An Analysis',
    authors: 'Khan, F. B. I., & Akter, M.',
    venue: 'International Journal of Law Management & Humanities (IJLMH), 6(3), 2711–2726',
    year: '2023',
    abstract:
      "This study examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler's TALC model, the study identifies victimization patterns across tourist destinations. Key crimes include theft, robbery, sexual assault, and terrorism. Contributing factors include economic disadvantage, tourist vulnerability, underreported incidents, security gaps, and inadequate governance.",
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Tourism', 'Routine Activity Theory'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/publication/340055853_Tourism_and_Crime_The_Case_of_Bangladesh',
    doi: 'https://doij.org/10.10000/IJLMH.115097',
  },
  {
    type: 'Journal Article',
    title:
      'Legal Compliance of Waste Management in Tannery Industrial Estate in Bangladesh: An Assessment from Environmental Criminological Perspective',
    authors: 'Khan, F. B. I., & Akond, M. A.',
    venue: 'TWIST, 19(1), 306–320',
    year: '2024',
    abstract:
      'This study examines the Savar BSCIC Tannery Industrial Estate — the only tannery industrial estate in Bangladesh — focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, substandard technology, and inadequate treatment facilities are causing significant environmental harm. Data were collected through qualitative methods including focus group discussions, in-depth interviews, and direct observation.',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance', 'Human Rights'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    doi: 'https://doi.org/10.5281/zenodo.10049652',
  },
  {
    type: 'Working Paper',
    title:
      'Examining Disparities in Capital Punishment: An Evaluation of Sentencing Outcomes and Policy Responses in the United States',
    authors: 'Khan, F. B. I., & Brown, K. L.',
    venue: 'ResearchGate Preprint',
    year: '2024',
    abstract:
      'This paper critically examines racial, socioeconomic, and geographic disparities in capital punishment sentencing in the United States. Findings indicate that around 35% of all capital punishment cases after 1976 were declared in Texas alone, that defendants whose victims were White faced persistent structural bias despite state-level reforms, and that the Supreme Court has confirmed such structural bias in death sentencing.',
    tags: ['Capital Punishment', 'Sentencing Disparities', 'Racial Bias', 'Death Penalty', 'Policy Reform'],
    status: 'Preprint',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/publication/396973193_Examining_Disparities_in_Capital_Punishment_An_Evaluation_of_Sentencing_Outcomes_and_Policy_Responses_in_the_United_States',
    doi: 'https://doi.org/10.13140/RG.2.2.13556.62080',
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
    href: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan',
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
  'Journal Article':  'default',
  Thesis:             'outline',
  'Working Paper':    'gold',
  'Conference Paper': 'secondary',
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
                        pub.status === 'Completed' || pub.status === 'Presented' || pub.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : pub.status === 'Preprint'
                          ? 'bg-blue-100 text-blue-700'
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
                    <div className="flex flex-wrap gap-2">
                      {pub.researchGateUrl && (
                        <a
                          href={pub.researchGateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 hover:text-teal-900 border border-teal-200 hover:border-teal-400 rounded-full px-3 py-1.5 bg-teal-50 transition-all"
                        >
                          <ExternalLink size={11} />
                          ResearchGate
                        </a>
                      )}
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 border border-blue-200 hover:border-blue-400 rounded-full px-3 py-1.5 bg-blue-50 transition-all"
                        >
                          <ExternalLink size={11} />
                          DOI
                        </a>
                      )}
                      {pub.available && (
                        <Button size="sm" variant="outline">
                          <Download size={13} />
                          Request PDF
                        </Button>
                      )}
                    </div>
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
