import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, FileText, GraduationCap, Mail, ExternalLink, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
  description:
    'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. His research examines U.S. drug policy, criminal justice systems, marijuana legalization, sentencing disparities, and comparative criminology.',
  alternates: {
    canonical: 'https://khanfahad.com',
  },
  openGraph: {
    title: 'Fahad Bin Islam Khan | Drug Policy and Criminal Justice Researcher',
    description:
      'Criminal justice researcher at John Jay College of Criminal Justice, CUNY. Specializes in U.S. drug policy, marijuana legalization, sentencing disparities, and comparative criminology.',
    url: 'https://khanfahad.com',
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

const mediaItems = [
  {
    source: 'The Daily Campus',
    title: 'যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ পেলেন মাভাবিপ্রবি ক্রিমিনোলজির ৩ শিক্ষার্থী',
    date: 'September 4, 2024',
    context:
      'Reports Fahad Bin Islam Khan receiving a full scholarship and Graduate Research and Teaching Assistantship for the M.S. in Criminal Justice at the University of Mississippi, recognizing his academic achievement in international higher education.',
    href: 'https://thedailycampus.com/scholarship/152048/',
    category: 'Scholarship',
    image: '/images/media/daily-campus-scholarship.jpg',
    imageAlt:
      'The Daily Campus article featuring Fahad Bin Islam Khan receiving a full scholarship for M.S. in Criminal Justice at the University of Mississippi',
  },
  {
    source: 'Ajker Patrika',
    title: 'যুক্তরাষ্ট্রে বাসা ভাড়া নিয়ে জটিলতায় শিক্ষার্থীরা',
    date: null as string | null,
    context:
      'Features Fahad Bin Islam Khan as an international criminal justice researcher, discussing housing challenges encountered by graduate students from Bangladesh pursuing higher education in the United States.',
    href: 'https://www.ajkerpatrika.com/education/ajpmifsfouygm',
    category: 'International Student Life',
    image: '/images/media/ajker-patrika-housing.jpg',
    imageAlt:
      'Ajker Patrika article featuring Fahad Bin Islam Khan on housing challenges faced by Bangladeshi international students in the United States',
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
                      Curriculum Vitae
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

      {/* ── MEDIA & RECOGNITION ──────────────────────────── */}
      <section
        className="section-padding bg-slate-50"
        aria-label="Media coverage of Fahad Bin Islam Khan, criminal justice researcher"
      >
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-navy-900 mb-3">Media &amp; Recognition</h2>
            <p className="text-slate-500 max-w-xl">
              Selected media coverage highlighting academic milestones, international higher
              education, and the professional development of Fahad Bin Islam Khan as a criminal
              justice researcher and drug policy scholar.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-7 max-w-4xl">
            {mediaItems.map((item) => (
              <AnimatedItem key={item.source}>
                <article
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
                  itemScope
                  itemType="https://schema.org/NewsArticle"
                >
                  {/* Featured image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      itemProp="image"
                    />
                    {/* Category badge overlay */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[11px] font-medium text-white bg-navy-950/70 backdrop-blur-sm rounded-full px-3 py-1 tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Gold accent rule + publication name */}
                  <div className="border-t-2 border-gold-400 px-6 pt-4 pb-3 border-b border-slate-100">
                    <span
                      className="text-xs font-semibold text-gold-600 uppercase tracking-widest"
                      itemProp="publisher"
                    >
                      {item.source}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="px-6 py-5 flex flex-col flex-1">
                    <h3
                      className="font-serif text-navy-900 font-semibold text-[1.05rem] leading-snug mb-3"
                      itemProp="headline"
                    >
                      {item.title}
                    </h3>

                    {item.date && (
                      <p
                        className="flex items-center gap-1.5 text-xs text-slate-400 mb-3"
                        itemProp="datePublished"
                      >
                        <Calendar size={11} aria-hidden="true" />
                        {item.date}
                      </p>
                    )}

                    <p
                      className="text-slate-500 text-sm leading-relaxed flex-1 mb-5"
                      itemProp="description"
                    >
                      {item.context}
                    </p>

                    <div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 border border-navy-200 rounded-md px-4 py-2 hover:bg-navy-50 hover:border-navy-400 transition-colors duration-200"
                        aria-label={`Read article: ${item.title} on ${item.source}`}
                        itemProp="url"
                      >
                        Read Article
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── RESEARCH AREAS ────────────────────────────────── */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-10">
            <div className="gold-rule mb-6" />
            <h2 className="heading-lg text-navy-900 mb-3">Scholarship in Action</h2>
            <p className="text-slate-500 max-w-2xl">
              Selected moments from academic conferences and research presentations, reflecting
              my engagement with criminological scholarship, criminal justice policy, and
              professional research communities.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 gap-8 items-stretch">

            <AnimatedItem className="h-full">
              <figure className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/about/conference-presentation.jpg"
                    alt="Fahad Bin Islam Khan presenting criminal justice research at a national conference"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 580px"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="flex-1 flex flex-col px-6 py-5 border-t border-slate-100">
                  <p className="text-xs text-gold-600 font-semibold uppercase tracking-widest mb-2">
                    Research Presentation in Criminal Justice
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Presenting academic work on criminology and criminal justice policy, with emphasis
                    on research communication, policy analysis, and scholarly engagement.
                  </p>
                </figcaption>
              </figure>
            </AnimatedItem>

            <AnimatedItem className="h-full">
              <figure className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/about/conference.jpg"
                    alt="Fahad Bin Islam Khan at the American Society of Criminology Annual Meeting, Washington D.C."
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 580px"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="flex-1 flex flex-col px-6 py-5 border-t border-slate-100">
                  <p className="text-xs text-gold-600 font-semibold uppercase tracking-widest mb-2">
                    American Society of Criminology Annual Meeting
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Participating in the American Society of Criminology Annual Meeting, a major
                    professional forum for criminology, criminal justice research, and
                    policy-focused scholarship.
                  </p>
                </figcaption>
              </figure>
            </AnimatedItem>

          </AnimatedStagger>
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
