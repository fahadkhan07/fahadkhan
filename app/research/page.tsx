import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research agenda of Fahad Bin Islam Khan — examining U.S. drug policy, sentencing disparities, and criminal justice reform.',
}

const researchProjects = [
  {
    title: 'The Racial Architecture of Drug Sentencing',
    status: 'In Progress',
    type: 'Dissertation',
    description:
      'This project examines how federal and state drug sentencing guidelines — particularly mandatory minimum statutes — have functioned as mechanisms of racial control. Drawing on sentencing commission data, court records, and legislative history, I analyze how ostensibly race-neutral policies produce racially disparate outcomes.',
    methods: ['Quantitative Analysis', 'Legal Archival Research', 'Policy Analysis'],
    keywords: ['Sentencing', 'Race', 'Drug Policy', 'Mandatory Minimums'],
  },
  {
    title: 'Harm Reduction as Criminal Justice Reform',
    status: 'Working Paper',
    type: 'Journal Article',
    description:
      'This paper evaluates the evidence base for harm reduction approaches — including needle exchange programs, overdose prevention sites, and supervised consumption facilities — as complements to, or substitutes for, punitive drug enforcement regimes.',
    methods: ['Systematic Review', 'Comparative Policy Analysis', 'Case Studies'],
    keywords: ['Harm Reduction', 'Overdose Prevention', 'Drug Policy', 'Public Health'],
  },
  {
    title: 'Prosecutorial Discretion and the War on Drugs',
    status: 'Conceptual Stage',
    type: 'Research Project',
    description:
      'An investigation of how prosecutorial charging decisions shape racial and socioeconomic disparities in drug case outcomes. This project examines variation in plea bargaining practices and charging patterns across jurisdictions with different drug policy regimes.',
    methods: ['Comparative Case Analysis', 'Prosecutorial Data', 'Interview Research'],
    keywords: ['Prosecution', 'Discretion', 'Plea Bargaining', 'Drug Courts'],
  },
  {
    title: 'The Political Economy of Drug Prohibition',
    status: 'Exploratory',
    type: 'Theoretical Paper',
    description:
      'A theoretical examination of how economic interests, political coalitions, and moral panics have sustained drug prohibition despite evidence of its failures. Engaging with criminological theory and political science, this work situates drug policy within broader structures of governance and social control.',
    methods: ['Historical Analysis', 'Political Economy Framework', 'Theoretical Synthesis'],
    keywords: ['Prohibition', 'Political Economy', 'Social Control', 'History'],
  },
]

const researchAreas = [
  {
    area: 'Drug Policy',
    icon: '⚖️',
    description:
      'The historical development, implementation, and consequences of U.S. drug prohibition — from the Harrison Act to the Controlled Substances Act and beyond.',
  },
  {
    area: 'Sentencing & Punishment',
    icon: '🏛️',
    description:
      'Examination of sentencing structures, mandatory minimums, truth-in-sentencing laws, and their cumulative effects on incarceration rates and racial equity.',
  },
  {
    area: 'Race & Criminal Justice',
    icon: '📊',
    description:
      'Investigation of how race intersects with law enforcement, prosecution, adjudication, and incarceration — with specific attention to drug offenses.',
  },
  {
    area: 'Harm Reduction',
    icon: '🏥',
    description:
      'Evaluation of evidence-based, public health-oriented approaches to drug use including naloxone access, supervised consumption, and decriminalization.',
  },
  {
    area: 'Criminal Justice Reform',
    icon: '🔄',
    description:
      'Analysis of legislative, administrative, and community-based reform efforts aimed at reducing incarceration and addressing systemic inequities.',
  },
  {
    area: 'Criminological Theory',
    icon: '📚',
    description:
      'Application of strain theory, labeling theory, conflict theory, and critical criminology to understanding drug-related crime and social control.',
  },
]

const statusColors: Record<string, string> = {
  'In Progress':       'default',
  'Working Paper':     'gold',
  'Conceptual Stage':  'secondary',
  'Exploratory':       'secondary',
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        subtitle="Investigating the causes, mechanisms, and consequences of U.S. drug policy — with a commitment to scholarship that matters."
      />

      {/* ── RESEARCH AREAS ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-14">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900 mb-3">Areas of Interest</h2>
            <p className="text-slate-500 max-w-2xl">
              My research agenda spans several interconnected domains within criminal justice and
              criminology.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((item) => (
              <AnimatedItem key={item.area}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-navy-300 transition-colors h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-semibold text-navy-900 mb-2">{item.area}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── CURRENT PROJECTS ────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-14">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900 mb-3">Research Projects</h2>
            <p className="text-slate-500 max-w-2xl">
              Ongoing and planned projects that form my scholarly agenda.
            </p>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            {researchProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <Badge variant={statusColors[project.status] as 'default' | 'gold' | 'secondary' | 'outline'}>
                        {project.status}
                      </Badge>
                      <span className="text-xs text-slate-400 bg-slate-100 rounded-full px-3 py-1">
                        {project.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed text-sm mb-5">
                      {project.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Methods
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.methods.map((m) => (
                            <Badge key={m} variant="secondary">{m}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Keywords
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.keywords.map((k) => (
                            <Badge key={k} variant="outline">{k}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── THEORETICAL APPROACH ────────────────────────────── */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-md text-white mb-6">Theoretical Approach</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              My work is grounded in critical criminology, with particular attention to conflict theory,
              labeling theory, and the sociology of punishment. I approach drug policy not as a
              neutral response to social harm, but as a politically constructed system that reflects and
              reinforces existing power relations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I am committed to interdisciplinary scholarship — drawing on sociology, law, public health,
              and political science — to produce research that is theoretically rich, empirically rigorous,
              and practically relevant to ongoing reform debates.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
