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

// Published articles only — matches ResearchGate profile/research (4 articles)
const publications = [
  {
    type: 'Journal Article',
    title:
      'Bordered Justice: A Conflict Theory Analysis of Drug Tourism, Law Enforcement, and Sentencing Disparities in the United States',
    authors: 'Khan, F. B. I.',
    venue: null,
    year: '2025',
    monthYear: 'May 2025',
    abstract: null,
    tags: ['Drug Tourism', 'Conflict Theory', 'Law Enforcement', 'Sentencing Disparities'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
  },
  {
    type: 'Journal Article',
    title:
      'Legal Compliance of Waste Management in Tannery Industrial Estate in Bangladesh: An Assessment from Environmental Criminological Perspective',
    authors: 'Khan, F. B. I., & Akond, M. A.',
    venue: 'TWIST',
    year: '2024',
    monthYear: 'February 2024',
    abstract:
      'Examines the Savar BSCIC Tannery Industrial Estate — the only tannery industrial estate in Bangladesh — focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, substandard technology, and inadequate treatment facilities are causing significant environmental harm.',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    doi: 'https://doi.org/10.5281/zenodo.10049652',
  },
  {
    type: 'Journal Article',
    title:
      'From Victimless Crime to Habitual Victim: An Empirical Study on Food Victimization',
    authors: 'Khan, F. B. I., & Tauhid, K.',
    venue: 'International Journal of Research and Innovation in Social Science',
    year: '2023',
    monthYear: 'November 2023',
    abstract: null,
    tags: ['Food Victimization', 'Victimology', 'Empirical Study', 'Social Science'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: null,
  },
  {
    type: 'Journal Article',
    title:
      'Nature of Crime Victimization Among Tourists in Bangladesh: An Analysis',
    authors: 'Khan, F. B. I., & Akter, M.',
    venue: 'International Journal of Law Management & Humanities',
    year: '2023',
    monthYear: 'July 2023',
    abstract:
      "Examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler's TALC model, the study identifies victimization patterns across tourist destinations including theft, robbery, sexual assault, and terrorism.",
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Tourism', 'Routine Activity Theory'],
    status: 'Published',
    available: true,
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    doi: 'https://doij.org/10.10000/IJLMH.115097',
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
                    <span className="text-xs text-slate-400">{pub.monthYear ?? pub.year}</span>
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
                  <p className="text-sm text-slate-500 mb-0.5">{pub.authors}</p>
                  {pub.venue && (
                    <p className="text-sm text-gold-600 font-medium mb-4">{pub.venue}</p>
                  )}

                  {pub.abstract ? (
                    <p className="text-sm text-slate-600 leading-relaxed mb-5 mt-3">{pub.abstract}</p>
                  ) : (
                    <p className="text-sm text-slate-400 italic mb-5 mt-3">Full text available on ResearchGate.</p>
                  )}

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
