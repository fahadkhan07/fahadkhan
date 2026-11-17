import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'

const title = 'Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination as a Predictor of Adolescent Marijuana Use'
const repositoryUrl = 'https://egrove.olemiss.edu/etd/8839'
const researchGateUrl = 'https://www.researchgate.net/publication/413720361_Institutional_Strain_and_Substance_Coping_Analyzing_Perceived_Racial_Discrimination_as_A_Predictor_of_Adolescent_Marijuana_Use'
const citation = "Khan, F. B. I. (2026). Institutional strain and substance coping: Analyzing perceived racial discrimination as a predictor of adolescent marijuana use (Master's thesis, University of Mississippi). https://egrove.olemiss.edu/etd/8839"
const bibtex = `@mastersthesis{Khan2026InstitutionalStrain,
  author  = {Khan, Fahad Bin Islam},
  title   = {Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination as a Predictor of Adolescent Marijuana Use},
  school  = {University of Mississippi},
  year    = {2026},
  month   = may,
  url     = {https://egrove.olemiss.edu/etd/8839}
}`

export const metadata: Metadata = {
  title: `${title} | Fahad Bin Islam Khan`,
  description: 'Master’s thesis examining perceived racial discrimination, psychological distress, and adolescent marijuana use through General Strain Theory using the 2023 Youth Risk Behavior Survey.',
  alternates: { canonical: 'https://khanfahad.com/publications/institutional-strain' },
  keywords: ['institutional strain', 'General Strain Theory', 'racial discrimination', 'adolescent marijuana use', 'youth substance use', 'Youth Risk Behavior Survey'],
  openGraph: { title, description: 'Research question, methods, findings, and citation for Fahad Bin Islam Khan’s University of Mississippi thesis.', url: 'https://khanfahad.com/publications/institutional-strain', type: 'article' },
  robots: { index: true, follow: true },
}

const citationMeta = [
  ['citation_title', title],
  ['citation_author', 'Fahad Bin Islam Khan'],
  ['citation_publication_date', '2026-05-01'],
  ['citation_dissertation_institution', 'University of Mississippi'],
]

export default function InstitutionalStrainPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    name: title,
    author: { '@type': 'Person', name: 'Fahad Bin Islam Khan' },
    datePublished: '2026-05-01',
    isPartOf: { '@type': 'CollegeOrUniversity', name: 'University of Mississippi' },
    url: 'https://khanfahad.com/publications/institutional-strain',
    sameAs: [repositoryUrl, researchGateUrl],
    keywords: 'institutional strain, General Strain Theory, racial discrimination, adolescent marijuana use, youth substance use',
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <head>{citationMeta.map(([name, content], index) => <meta key={`${name}-${index}`} name={name} content={content} />)}</head>
      <PageHeader title="Research Spotlight" subtitle="Thesis in criminology, institutional strain, and adolescent substance use." />
      <main className="section-padding bg-white">
        <article className="section-container max-w-4xl">
          <Link href="/publications" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy-800 mb-8"><ArrowLeft size={15} /> Back to Publications</Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">University of Mississippi · May 2026 · Master&apos;s thesis</p>
          <h1 className="heading-lg text-navy-900 mb-4">{title}</h1>
          <p className="text-slate-600 mb-8">Fahad Bin Islam Khan</p>

          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10">
            <h2 className="heading-md text-navy-900 mb-4">Research question</h2>
            <p className="text-slate-600 leading-relaxed">Does perceived racial or ethnic discrimination operate as an institutional strain associated with psychological distress and marijuana use among U.S. high school students?</p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="heading-md text-navy-900 mb-3">Data and methods</h2>
              <p className="text-slate-600 leading-relaxed">The study uses the complete-case sample from the 2023 Youth Risk Behavior Survey, comprising 17,268 high school students. Logistic regression and sex-stratified analyses examine perceived discrimination, psychological distress, and marijuana use.</p>
            </section>
            <section>
              <h2 className="heading-md text-navy-900 mb-3">Findings</h2>
              <p className="text-slate-600 leading-relaxed">Perceived discrimination is positively associated with psychological distress and marijuana use. The study also examines differences by sex. Because the design is cross-sectional, the findings identify associations rather than causal effects.</p>
            </section>
          </div>

          <section className="border-l-4 border-gold-400 pl-5 mb-10">
            <h2 className="heading-md text-navy-900 mb-3">Keywords</h2>
            <p className="text-slate-600 leading-relaxed">Institutional strain, General Strain Theory, racial discrimination, psychological distress, adolescent marijuana use, Youth Risk Behavior Survey, youth substance use, criminology.</p>
          </section>

          <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 mb-10">
            <h2 className="heading-md mb-4">Cite This Thesis</h2>
            <textarea aria-label="APA 7 citation" readOnly value={citation} className="w-full min-h-28 rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-slate-200 resize-y" />
            <p className="text-xs uppercase tracking-widest text-gold-400 mt-6 mb-2">BibTeX</p>
            <textarea aria-label="BibTeX citation" readOnly value={bibtex} className="w-full min-h-40 rounded-lg border border-white/20 bg-white/10 p-4 text-xs leading-relaxed text-slate-200 resize-y" />
          </section>

          <section className="mb-10">
            <h2 className="heading-md text-navy-900 mb-3">Related research</h2>
            <p className="text-slate-600 leading-relaxed">For related discussions of institutional trust, drug policy, and harm reduction, see the <Link className="text-teal-700 underline" href="/blog/fentanyl-test-strips-harm-reduction-evidence">fentanyl test-strips evidence review</Link> and the <Link className="text-teal-700 underline" href="/blog/institutional-myths-drug-policy-enforcement">institutional myths of American policing essay</Link>.</p>
          </section>

          <div className="flex flex-wrap gap-3">
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700">University repository <ExternalLink size={14} /></a>
            <a href={researchGateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-teal-300 text-teal-800 px-4 py-2 text-sm font-medium hover:bg-teal-50">ResearchGate record <ExternalLink size={14} /></a>
            <a href="/citations/institutional-strain.bib" download className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50">Download BibTeX</a>
            <a href="https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-blue-300 text-blue-800 px-4 py-2 text-sm font-medium hover:bg-blue-50">Google Scholar profile <ExternalLink size={14} /></a>
          </div>
        </article>
      </main>
    </>
  )
}
