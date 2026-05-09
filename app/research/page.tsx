import type { Metadata } from 'next'
import { ExternalLink, BookOpen, Wrench } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ResearchContent } from '@/components/ResearchContent'
import {
  researchProjects,
  researchAreas,
  methodsExpertise,
  softwareTools,
  publications,
} from '@/lib/research-data'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research agenda and publications of Fahad Bin Islam Khan — criminology, drug policy, environmental crime, capital punishment, and criminal justice reform.',
}

const statusColors: Record<string, 'default' | 'gold' | 'secondary' | 'outline'> = {
  'In Progress':      'default',
  'Working Paper':    'gold',
  'Conceptual Stage': 'secondary',
  'Exploratory':      'secondary',
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        subtitle="Investigating the causes, mechanisms, and consequences of U.S. drug policy and global criminal justice — with a commitment to scholarship that matters."
      />

      {/* ── RESEARCH METRICS ──────────────────────────────────── */}
      <section className="py-12 bg-navy-950 border-b border-white/10">
        <div className="section-container">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-gold-400 mb-1">{publications.length}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Research Works</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-gold-400 mb-1">{researchAreas.length}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Research Areas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-gold-400 mb-1">{methodsExpertise.length}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Methods Expertise</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-gold-400 mb-1">{softwareTools.length}+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Software & Tools</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-gold-400" />
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Methods</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {methodsExpertise.map((m) => (
                    <span key={m} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10 sm:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench size={14} className="text-gold-400" />
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Software & Tools</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {softwareTools.map((t) => (
                    <span key={t} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
              >
                <ExternalLink size={14} />
                View ResearchGate Profile
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PUBLICATIONS ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900 mb-3">Publications & Research Works</h2>
            <p className="text-slate-500 max-w-2xl">
              All verified research works organized by publication type. Use the search and filters
              to explore by year, category, or topic.
            </p>
          </AnimatedSection>

          <ResearchContent />
        </div>
      </section>

      {/* ── RESEARCH PROJECTS ─────────────────────────────────── */}
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
                      <Badge variant={statusColors[project.status]}>{project.status}</Badge>
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

      {/* ── RESEARCH AREAS ────────────────────────────────────── */}
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

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {researchAreas.map((item) => (
              <AnimatedItem key={item.area}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-navy-300 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-semibold text-navy-900 mb-2 text-sm leading-snug">
                    {item.area}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── THEORETICAL APPROACH ──────────────────────────────── */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-md text-white mb-6">Theoretical Approach</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              My work is grounded in critical criminology, with particular attention to conflict
              theory, labeling theory, and the sociology of punishment. I approach drug policy not
              as a neutral response to social harm, but as a politically constructed system that
              reflects and reinforces existing power relations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I am committed to interdisciplinary scholarship — drawing on sociology, law, public
              health, and political science — to produce research that is theoretically rich,
              empirically rigorous, and practically relevant to ongoing reform debates.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
