import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, FileText, GraduationCap, Mail, ExternalLink, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
  description:
    'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. His research examines U.S. drug policy, criminal justice systems, marijuana legalization, sentencing disparities, and comparative criminology.',
  alternates: {
    canonical: 'https://fahadkhanresearch.com',
  },
  openGraph: {
    title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
    description:
      'Criminal justice researcher at John Jay College of Criminal Justice, CUNY. Specializes in U.S. drug policy, marijuana legalization, sentencing disparities, and comparative criminology.',
    url: 'https://fahadkhanresearch.com',
  },
}
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
      'Analyzing systemic reform initiatives, from policing to reentry, and evaluating policy interventions that reduce recidivism and address over-incarceration.',
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
      <section className="relative bg-navy-950 overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 z-10" />

        <div className="flex flex-col lg:flex-row lg:min-h-screen">

          {/* ── Mobile: portrait shown above text (56 vh gives face + upper body) ── */}
          <div className="lg:hidden relative w-full h-[56vh] flex-shrink-0">
            <Image
              src="/images/about/criminal-justice-portrait.jpg"
              alt="Fahad Bin Islam Khan, drug policy and criminal justice researcher at John Jay College of Criminal Justice"
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
            {/* Thin bottom fade for smooth visual transition to navy text section */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
          </div>

          {/* ── Left: academic identity and bio ── */}
          <div className="lg:w-[55%] flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-10 lg:py-0">
            <div className="max-w-lg">

              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-7">
                  <div className="gold-rule" />
                  <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
                    John Jay College of Criminal Justice · CUNY
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h1 className="heading-xl text-white mb-4 text-balance">
                  Fahad Bin Islam Khan
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.27}>
                <div className="mb-7 space-y-1.5">
                  <p className="text-xl sm:text-2xl text-gold-400 font-serif font-semibold">
                    Ph.D. Student in Criminal Justice
                  </p>
                  <p className="text-slate-400 text-sm leading-snug">
                    John Jay College of Criminal Justice, City University of New York (CUNY)
                  </p>
                  <p className="text-slate-200 text-sm font-semibold pt-0.5">
                    Drug Policy and Criminal Justice Researcher
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.34}>
                <p className="text-slate-300 text-base leading-relaxed mb-9">
                  His work examines U.S. drug policy, criminal justice systems, marijuana
                  legalization, drug law enforcement, sentencing disparities, and comparative
                  criminology.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.41}>
                <div className="flex flex-wrap gap-3 mb-8">
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
                    <Link href="/contact">
                      Contact
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex flex-wrap gap-2">
                  {['U.S. Drug Policy', 'Sentencing Disparities', 'Comparative Criminology', 'Criminal Justice', 'Marijuana Legalization'].map((tag) => (
                    <span key={tag}
                      className="text-xs text-slate-500 border border-white/10 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

            </div>
          </div>

          {/* ── Right: portrait column (desktop only, stretches to full section height) ── */}
          <div className="hidden lg:block lg:w-[45%] relative flex-shrink-0">
            <Image
              src="/images/about/criminal-justice-portrait.jpg"
              alt="Fahad Bin Islam Khan, drug policy and criminal justice researcher at John Jay College of Criminal Justice"
              fill
              sizes="45vw"
              className="object-cover object-top"
              priority
            />
            {/* Soft left-edge gradient to blend cleanly with navy text panel */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-950 to-transparent" />
          </div>

        </div>
      </section>

      {/* ── ABOUT PREVIEW ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="gold-rule mb-6" />
              <h2 className="heading-lg text-navy-900 mb-6">About</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-navy-800">Fahad Bin Islam Khan</strong> is a criminal
                  justice researcher and Ph.D. student at{' '}
                  <strong className="text-navy-800">John Jay College of Criminal Justice,
                  City University of New York (CUNY)</strong>.
                </p>
                <p>
                  His research examines U.S. drug policy, criminal justice systems, marijuana
                  legalization, sentencing disparities, and comparative criminology, with attention
                  to how law and enforcement shape social inequality across jurisdictions.
                </p>
                <p>
                  He completed his M.S. in Criminal Justice at the{' '}
                  <strong className="text-navy-800">University of Mississippi</strong>, where his
                  thesis analyzed perceived racial discrimination as a predictor of adolescent
                  marijuana use.
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
                  { icon: GraduationCap, label: 'Ph.D. Program',   value: 'Criminal Justice' },
                  { icon: BookOpen,       label: 'Institution',     value: 'John Jay College of Criminal Justice, CUNY' },
                  { icon: FileText,       label: 'M.S. (2026)',     value: 'Criminal Justice, University of Mississippi' },
                  { icon: ArrowRight,     label: 'Research Focus',  value: 'U.S. Drug Policy and Comparative Criminology' },
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

      {/* ── SCHOLARSHIP IN ACTION ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-navy-900 mb-3">Scholarship in Action</h2>
            <p className="text-slate-500 max-w-xl">
              Presenting criminology research at national venues, translating scholarly inquiry
              into active disciplinary exchange.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-6 items-end max-w-4xl">

            {/* Dominant: active research presentation */}
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/conference-presentation.jpg"
                  alt="Fahad Bin Islam Khan presenting criminal justice research"
                  fill
                  sizes="(max-width: 768px) 90vw, 55vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-gold-300 font-medium uppercase tracking-wider mb-1">Research Presentation</p>
                  <p className="text-white text-sm font-serif font-medium leading-snug">Drug Policy & Criminal Justice Reform</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Supporting: conference credibility */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/about/conference.jpg"
                  alt="Fahad Bin Islam Khan at the American Society of Criminology Annual Meeting, Washington D.C."
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-gold-300 font-medium uppercase tracking-wider mb-0.5">ASC Annual Meeting</p>
                  <p className="text-white text-xs font-serif">Washington D.C. · 2025</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                80th Annual Meeting of the American Society of Criminology, one of the most prestigious venues in the discipline.
              </p>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── RECENT BLOG POSTS ─────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="section-padding bg-slate-50">
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
