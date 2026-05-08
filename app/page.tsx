import Link from 'next/link'
import { ArrowRight, BookOpen, FileText, GraduationCap, Mail, ExternalLink, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { getAllBlogPosts } from '@/lib/mdx'

const researchAreas = [
  {
    icon: '⚖️',
    title: 'Drug Policy Reform',
    description:
      'Examining the historical development and contemporary effectiveness of U.S. drug prohibition policies, with a focus on harm reduction frameworks and evidence-based alternatives.',
    tags: ['Drug Policy', 'Prohibition', 'Harm Reduction'],
  },
  {
    icon: '📊',
    title: 'Sentencing Disparities',
    description:
      'Investigating racial and socioeconomic inequities embedded in federal and state drug sentencing guidelines, with attention to mandatory minimums and prosecutorial discretion.',
    tags: ['Sentencing', 'Racial Equity', 'Criminal Law'],
  },
  {
    icon: '🏛️',
    title: 'Criminal Justice Reform',
    description:
      'Analyzing systemic reform initiatives — from policing to reentry — and evaluating policy interventions that reduce recidivism and address over-incarceration.',
    tags: ['Justice Reform', 'Reentry', 'Policing'],
  },
]

const academicProfiles = [
  {
    name: 'Google Scholar',
    description: 'Publications & citations',
    href: 'https://scholar.google.com',
    icon: '🎓',
    color: 'from-blue-50 to-blue-100 border-blue-200',
    textColor: 'text-blue-800',
  },
  {
    name: 'ResearchGate',
    description: 'Research network',
    href: 'https://researchgate.net',
    icon: '🔬',
    color: 'from-teal-50 to-teal-100 border-teal-200',
    textColor: 'text-teal-800',
  },
  {
    name: 'ORCID',
    description: 'Researcher identifier',
    href: 'https://orcid.org',
    icon: '🆔',
    color: 'from-green-50 to-green-100 border-green-200',
    textColor: 'text-green-800',
  },
  {
    name: 'Academia.edu',
    description: 'Working papers',
    href: 'https://academia.edu',
    icon: '📄',
    color: 'from-orange-50 to-orange-100 border-orange-200',
    textColor: 'text-orange-800',
  },
]

export default async function HomePage() {
  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-navy-950 flex items-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500" />

        <div className="section-container relative z-10 py-32 pt-40">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="gold-rule" />
                <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                  Academic Portfolio
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="heading-xl text-white mb-6 text-balance">
                Fahad Khan
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-xl sm:text-2xl text-gold-400 font-serif mb-4">
                Criminal Justice Scholar & Drug Policy Researcher
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
                M.A. Criminal Justice · University of Mississippi<br />
                <span className="text-slate-300">
                  Incoming PhD Student · Researching U.S. drug policy, sentencing reform,
                  and the social consequences of drug prohibition.
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="gold">
                  <Link href="/research">
                    <BookOpen size={18} />
                    View Research
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-navy-950">
                  <Link href="/cv">
                    <FileText size={18} />
                    Download CV
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-white/10">
                  <Link href="/publications">
                    Publications
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.55}>
              <div className="mt-16 flex flex-wrap gap-3">
                {['Drug Policy', 'Sentencing Reform', 'Criminal Justice', 'Racial Equity', 'Harm Reduction'].map((tag) => (
                  <span key={tag}
                    className="text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── ABOUT PREVIEW ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-navy-900 mb-6">About</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I am a criminal justice scholar with a master&rsquo;s degree from the{' '}
                  <strong className="text-navy-800">University of Mississippi</strong>, where my
                  research examined the structural and policy dimensions of America&rsquo;s approach
                  to drug control.
                </p>
                <p>
                  As an incoming PhD student, my work centers on the intersection of drug policy,
                  race, and punishment — interrogating how prohibition regimes have produced
                  systematic inequalities in American society.
                </p>
                <p>
                  My research draws on criminological theory, legal analysis, and policy evaluation
                  to understand and propose alternatives to punitive drug enforcement.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/about">
                    Full Biography
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-6">
                {[
                  { icon: GraduationCap, label: 'Degree', value: 'M.A. Criminal Justice' },
                  { icon: BookOpen,       label: 'Institution', value: 'University of Mississippi' },
                  { icon: FileText,       label: 'Status', value: 'Incoming PhD Student' },
                  { icon: ArrowRight,     label: 'Focus', value: 'U.S. Drug Policy' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-navy-900 font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-navy-900 mb-4">Research Interests</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              My scholarship examines how drug policy shapes individuals, communities, and institutions
              across the American criminal justice landscape.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area) => (
              <AnimatedItem key={area.title}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {area.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            ))}
          </AnimatedStagger>

          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/research">
                Full Research Agenda
                <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── RECENT BLOG POSTS ─────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <AnimatedSection className="flex items-end justify-between mb-12">
              <div>
                <div className="gold-rule mb-6" />
                <h2 className="heading-lg text-navy-900">Recent Writings</h2>
                <p className="text-slate-500 mt-2">Policy analysis and scholarly commentary</p>
              </div>
              <Button asChild variant="ghost" className="hidden sm:flex text-navy-800">
                <Link href="/blog">
                  All Posts
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedStagger className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <AnimatedItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <Card className="h-full group-hover:border-navy-700 transition-colors">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags?.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="gold">{tag}</Badge>
                          ))}
                        </div>
                        <CardTitle className="group-hover:text-navy-700 transition-colors leading-snug">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric', month: 'short', day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {post.readingTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>
      )}

      {/* ── ACADEMIC PROFILES ─────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-white mb-4">Academic Profiles</h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Find my work, citations, and academic network across major scholarly platforms.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {academicProfiles.map((profile) => (
              <AnimatedItem key={profile.name}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-5 rounded-xl border bg-gradient-to-br ${profile.color} hover:scale-105 transition-all duration-200`}
                >
                  <span className="text-3xl">{profile.icon}</span>
                  <div>
                    <p className={`font-semibold text-sm ${profile.textColor}`}>{profile.name}</p>
                    <p className="text-xs text-slate-500">{profile.description}</p>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-slate-400 group-hover:text-slate-600 transition-colors" />
                </a>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="gold-rule mx-auto mb-6" />
            <h2 className="heading-lg text-navy-900 mb-4">Get in Touch</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              I welcome correspondence from scholars, students, journalists, and policy advocates
              interested in drug policy, criminal justice reform, or potential collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail size={18} />
                  Contact Me
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cv">
                  <FileText size={18} />
                  View CV
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
