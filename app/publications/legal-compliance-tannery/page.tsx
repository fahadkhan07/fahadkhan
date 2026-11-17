import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'

const title = 'Legal Compliance of Waste Management in Tannery Industrial Estate in Bangladesh'
const authors = 'Fahad Bin Islam Khan and Md. Aurongajeb Akond'
const publisherUrl = 'https://twistjournal.net/twist/article/view/131'
const researchGateUrl = 'https://www.researchgate.net/publication/378207417_Legal_Compliance_of_Waste_Management_in_Tannery_Industrial_Estate_in_Bangladesh_An_Assessment_from_Environmental_Criminological_Perspective'
const citation = 'Khan, F. B. I., & Akond, M. A. (2024). Legal compliance of waste management in tannery industrial estate in Bangladesh: An assessment from environmental criminological perspective. TWIST, 19(1), 306–320. https://twistjournal.net/twist/article/view/131'

export const metadata: Metadata = {
  title: `${title} | Fahad Bin Islam Khan`,
  description: 'Research spotlight on a qualitative study of waste-management practices, legal compliance, and environmental harm at the Savar BSCIC Tannery Industrial Estate.',
  alternates: { canonical: 'https://khanfahad.com/publications/legal-compliance-tannery' },
  openGraph: {
    title,
    description: 'Research question, methodology, findings, and citation for the TWIST publication by Fahad Bin Islam Khan and Md. Aurongajeb Akond.',
    url: 'https://khanfahad.com/publications/legal-compliance-tannery',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const citationMeta = [
  ['citation_title', title],
  ['citation_author', 'Fahad Bin Islam Khan'],
  ['citation_author', 'Md. Aurongajeb Akond'],
  ['citation_publication_date', '2024-02-14'],
  ['citation_journal_title', 'TWIST'],
  ['citation_volume', '19'],
  ['citation_issue', '1'],
  ['citation_firstpage', '306'],
  ['citation_lastpage', '320'],
]

export default function TanneryPublicationPage() {
  return (
    <>
      <head>
        {citationMeta.map(([name, content], index) => <meta key={`${name}-${index}`} name={name} content={content} />)}
      </head>
      <PageHeader title="Research Spotlight" subtitle="Featured publication in environmental criminology and industrial compliance." />
      <main className="section-padding bg-white">
        <article className="section-container max-w-4xl">
          <Link href="/publications" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-800 mb-8"><ArrowLeft size={15} /> Back to Publications</Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">TWIST · 19(1) · 2024</p>
          <h1 className="heading-lg text-navy-900 mb-4">{title}</h1>
          <p className="text-slate-600 mb-8">{authors}</p>

          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10">
            <h2 className="heading-md text-navy-900 mb-4">Research question</h2>
            <p className="text-slate-600 leading-relaxed">How are waste-management practices operating at the Savar BSCIC Tannery Industrial Estate, and where do those practices fall short of applicable environmental and legal standards?</p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="heading-md text-navy-900 mb-3">Methodology</h2>
              <p className="text-slate-600 leading-relaxed">The study uses a qualitative design combining direct observation, four focus-group discussions, ten in-depth interviews, and two telephone interviews. The authors used thematic analysis alongside legal and documentary review.</p>
            </section>
            <section>
              <h2 className="heading-md text-navy-900 mb-3">Key findings</h2>
              <p className="text-slate-600 leading-relaxed">The paper identifies weaknesses in the management of liquid, solid, and gaseous waste, inadequate implementation of environmental requirements, and consequences for environmental quality, health, and human-rights protection. It offers recommendations for stronger compliance and waste governance.</p>
            </section>
          </div>

          <section className="border-l-4 border-gold-400 pl-5 mb-10">
            <h2 className="heading-md text-navy-900 mb-3">Scholarly significance</h2>
            <p className="text-slate-600 leading-relaxed">The article connects environmental criminology with industrial regulation and environmental justice. Its case-based approach makes waste governance legible as a question of law, institutional implementation, and harm—not only as a technical pollution problem.</p>
          </section>

          <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 mb-10">
            <h2 className="heading-md mb-4">Cite This Paper</h2>
            <textarea aria-label="APA 7 citation" readOnly value={citation} className="w-full min-h-28 rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-slate-200 resize-y" />
          </section>

          <div className="flex flex-wrap gap-3">
            <a href={publisherUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700">Official publisher record <ExternalLink size={14} /></a>
            <a href={researchGateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-teal-300 text-teal-800 px-4 py-2 text-sm font-medium hover:bg-teal-50">ResearchGate record <ExternalLink size={14} /></a>
            <a href="https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-blue-300 text-blue-800 px-4 py-2 text-sm font-medium hover:bg-blue-50">Google Scholar profile <ExternalLink size={14} /></a>
          </div>
        </article>
      </main>
    </>
  )
}
