import type { Metadata } from 'next'
import { ExternalLink, FileText } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Publications | Criminal Justice & Drug Policy Research',
  description:
    'Peer-reviewed publications and conference presentations by Fahad Bin Islam Khan on U.S. drug policy, criminal justice systems, tourist victimization, environmental criminology, and comparative criminology. John Jay College of Criminal Justice, CUNY.',
  keywords: [
    'criminal justice publications',
    'drug policy publications',
    'Fahad Bin Islam Khan publications',
    'criminology peer reviewed',
    'U.S. drug policy academic',
    'environmental criminology Bangladesh',
    'tourist victimization research',
    'criminal justice conference presentations',
    'John Jay College research',
    'CUNY criminal justice',
  ],
  alternates: { canonical: 'https://khanfahad.com/publications' },
  openGraph: {
    title: 'Publications: Criminal Justice & Drug Policy Research — Fahad Bin Islam Khan',
    description:
      'Peer-reviewed publications and conference presentations on U.S. drug policy, criminal justice, and criminology by Fahad Bin Islam Khan, John Jay College of Criminal Justice.',
    url: 'https://khanfahad.com/publications',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

const peerReviewed = [
  {
    apa: 'Khan, F.B.I. and Akond, A. (2024). Legal Compliance of Waste Management in Savar BSCIC Tannery Industrial Estate: An Assessment from Environmental Criminological Perspective.',
    venue: 'TWIST International Multidisciplinary Journal',
    volume: 'Vol. 19, Issue 1, pp. 306–320',
    year: '2024',
    tags: ['Environmental Criminology', 'Waste Management', 'Bangladesh', 'Legal Compliance'],
    abstract:
      'Examines the Savar BSCIC Tannery Industrial Estate, the only tannery industrial estate in Bangladesh, focusing on waste management practices and legal compliance. Findings show that lack of effective waste management regulations, substandard technology, and inadequate treatment facilities are causing significant environmental harm.',
    researchGateUrl: 'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective',
    url: 'https://twistjournal.net/twist/article/view/131',
    doi: 'https://doi.org/10.5281/zenodo.10049652',
    status: 'Published',
  },
  {
    apa: 'Khan, F.B.I. and Akter, M. (2023). Nature of Crime Victimization among Tourists in Bangladesh: An Analysis.',
    venue: 'International Journal of Law Management and Humanities',
    volume: 'Vol. 6, Issue 3, pp. 2711–2726',
    year: '2023',
    tags: ['Tourist Victimization', 'Crime', 'Bangladesh', 'Routine Activity Theory'],
    abstract:
      "Examines how tourism growth in Bangladesh correlates with increased criminal threats targeting visitors. Using opportunity theory, routine activity theory, and Butler's TALC model, the study identifies victimization patterns across tourist destinations including theft, robbery, sexual assault, and terrorism.",
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    url: null,
    doi: 'https://doij.org/10.10000/IJLMH.115097',
    status: 'Published',
  },
  {
    apa: 'Akter, M., Kazi, T. and Khan, F.B.I. (2023). From Victimless Crime to Habitual Victim: An Empirical Study on Food Victimization.',
    venue: 'International Journal of Research and Innovation in Social Science (IJRISS)',
    volume: 'Vol. 7, Issue 10, pp. 1729–1750',
    year: '2023',
    tags: ['Food Victimization', 'Victimology', 'Empirical Study', 'Criminology'],
    abstract: null,
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    url: null,
    doi: 'https://dx.doi.org/10.47772/IJRISS.2023.701133',
    status: 'Published',
  },
  {
    apa: 'Khan, F.B.I. and Greenspan, R. (2025). Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi.',
    venue: 'International Journal for Crime, Justice and Social Democracy',
    volume: null,
    year: '2025',
    tags: ['Drug Tourism', 'Youth', 'Drug Policy', 'Mississippi', 'Legal Awareness'],
    abstract: null,
    researchGateUrl: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan/research',
    url: null,
    doi: null,
    status: 'Accepted',
  },
]

const conferences = [
  {
    apa: 'Khan, F.B.I. (2025). Punitive vs. Rehabilitative Drug Policies: A Comparative Analysis across U.S. States.',
    venue: 'American Society of Criminology (ASC) Annual Meeting',
    location: 'Washington, D.C., USA',
    year: '2025',
    tags: ['Drug Policy', 'Comparative Analysis', 'Punishment', 'Rehabilitation'],
    status: 'Presented',
  },
  {
    apa: 'Islam, M.J., Hossain, M.L., Khan, F.B.I. and Tazally, U.A. (2026). Western Paradigm, Epistemic Colonialism and Pedagogical Challenges: Toward a Quest for Decolonizing Criminology in Bangladesh.',
    venue: 'European Society of Criminology Annual Conference',
    location: 'Warsaw, Poland',
    year: '2026',
    tags: ['Criminology', 'Decolonization', 'Bangladesh', 'Comparative Criminology'],
    status: 'Accepted',
  },
]

const academicProfiles = [
  {
    name: 'Google Scholar',
    description: 'View all publications and citation metrics',
    href: 'https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en',
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
    href: 'https://orcid.org/my-orcid?orcid=0009-0009-0629-9473',
    bg: 'bg-green-50 border-green-200',
    icon: '🆔',
    cta: 'View Profile',
  },
  {
    name: 'SSRN',
    description: 'Working papers and preprints',
    href: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=11548949',
    bg: 'bg-blue-50 border-blue-200',
    icon: '📋',
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

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed articles, accepted manuscripts, and conference presentations."
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

      {/* ── PEER-REVIEWED PUBLICATIONS ──────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Peer-Reviewed Publications</h2>
            <p className="text-slate-500 mt-2 text-sm">Articles published or accepted in peer-reviewed academic journals.</p>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            {peerReviewed.map((pub, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-slate-200 rounded-xl p-7 bg-white hover:border-navy-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        pub.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gold-100 text-gold-700'
                      }`}
                    >
                      {pub.status === 'Accepted' ? 'Accepted for Publication' : pub.status}
                    </span>
                    <span className="text-xs text-slate-400">{pub.year}</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-1">{pub.apa}</p>
                  <p className="text-sm text-gold-600 font-medium">{pub.venue}{pub.volume ? `, ${pub.volume}` : ''}</p>

                  {pub.abstract && (
                    <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-3">{pub.abstract}</p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
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
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 border border-blue-200 hover:border-blue-400 rounded-full px-3 py-1.5 bg-blue-50 transition-all"
                        >
                          <ExternalLink size={11} />
                          Full Text
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
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFERENCE PRESENTATIONS ────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Conference Presentations</h2>
            <p className="text-slate-500 mt-2 text-sm">Papers presented or accepted for presentation at academic conferences.</p>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl">
            {conferences.map((conf, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-slate-200 rounded-xl p-7 bg-white hover:border-navy-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        conf.status === 'Presented'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {conf.status === 'Accepted' ? 'Accepted for Presentation' : conf.status}
                    </span>
                    <span className="text-xs text-slate-400">{conf.year}</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-1">{conf.apa}</p>
                  <p className="text-sm text-gold-600 font-medium">{conf.venue}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{conf.location}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {conf.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-16 p-8 bg-white rounded-2xl border border-slate-200 max-w-4xl">
            <div className="flex items-start gap-4">
              <FileText size={24} className="text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-navy-900 mb-2">
                  Request a Paper
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you are interested in any of my research and would like a copy of a paper, please reach out via the contact page. I am happy to share work-in-progress and completed manuscripts with fellow scholars, students, and policy professionals.
                </p>
                <div className="mt-4">
                  <Button asChild size="sm">
                    <a href="/contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
