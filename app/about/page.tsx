import type { Metadata } from 'next'
import Image from 'next/image'
import { GraduationCap, MapPin, BookOpen, Award, Users, Globe } from 'lucide-react'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fahad Bin Islam Khan — criminal justice scholar, MSc University of Mississippi, ASC member, drug policy and sentencing reform researcher.',
}

const education = [
  {
    degree: 'PhD in Criminal Justice',
    institution: 'Incoming — PhD Program',
    year: '2025–Present',
    notes: 'Research focus: U.S. drug policy, sentencing structures, and racial equity in criminal justice.',
    current: true,
  },
  {
    degree: 'MSc in Criminal Justice',
    institution: 'University of Mississippi',
    year: '2022–2024',
    notes:
      'Thesis: "Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination as a Predictor of Adolescent Marijuana Use." Graduate Teaching Assistant.',
    current: false,
  },
  {
    degree: 'B.A. in Criminal Justice',
    institution: 'Prior undergraduate studies',
    year: 'Completed',
    notes: 'Foundation in criminological theory and criminal justice policy.',
    current: false,
  },
]

const quickFacts = [
  { icon: GraduationCap, text: 'MSc in Criminal Justice, Ole Miss' },
  { icon: BookOpen,      text: 'Incoming PhD Student' },
  { icon: MapPin,        text: 'Mississippi, United States' },
  { icon: Award,         text: 'Graduate Teaching Assistant' },
  { icon: Users,         text: 'ASC · ACJS · SCJA Member' },
  { icon: Globe,         text: 'ASC Annual Meeting 2025, Washington D.C.' },
]

const skills = [
  'Quantitative Research Methods',
  'Qualitative & Ethnographic Methods',
  'Policy Analysis',
  'Criminological Theory',
  'Legal Analysis',
  'Statistical Software (STATA, SPSS, R)',
  'Literature Synthesis',
  'Academic Writing',
  'Data Visualization',
]

const memberships = [
  'American Society of Criminology (ASC)',
  'Academy of Criminal Justice Sciences (ACJS)',
  'Southern Criminal Justice Association (SCJA)',
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy-950 text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500" />
        <div className="section-container py-20 lg:py-28">
          <AnimatedSection className="max-w-3xl">
            <div className="gold-rule mb-6" />
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Fahad Bin Islam Khan
            </h1>
            <p className="text-gold-400 text-xl font-serif mb-2">
              Criminal Justice Scholar
            </p>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              MSc in Criminal Justice · University of Mississippi<br />
              Incoming PhD Student · Drug Policy Researcher
            </p>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl text-lg">
              My research sits at the intersection of drug policy, law, and social inequality —
              with a commitment to scholarship that informs reform and centers the experiences
              of those most affected by the criminal justice system.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Drug Policy', 'Sentencing Reform', 'Racial Equity', 'Harm Reduction', 'Criminological Theory'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-300 border border-white/15 rounded-full px-3 py-1.5 hover:border-gold-400/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BIOGRAPHY ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Main bio */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="gold-rule mb-6" />
                <h2 className="heading-md text-navy-900 mb-6">Biography</h2>
                <div className="prose prose-slate max-w-none space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    Fahad Bin Islam Khan is a criminal justice scholar whose work examines the
                    intersection of drug policy, law, and structural inequality. He holds a{' '}
                    <strong className="text-navy-800">Master of Science in Criminal Justice</strong>{' '}
                    from the <strong className="text-navy-800">University of Mississippi</strong>,
                    where he completed a thesis on perceived racial discrimination as a predictor
                    of adolescent marijuana use — applying institutional strain theory to
                    understand substance coping among youth.
                  </p>
                  <p>
                    As an incoming doctoral student, Fahad&rsquo;s broader scholarly interests
                    encompass drug tourism, capital punishment disparities, environmental
                    criminology, tourist victimization, and comparative criminal justice. His
                    research spans both domestic U.S. contexts and international settings,
                    including Bangladesh, Nigeria, and cross-national comparative frameworks.
                  </p>
                  <p>
                    Drawing on quantitative and qualitative methods, his work interrogates how
                    sentencing structures, prosecutorial discretion, and enforcement priorities
                    produce disparate outcomes across race, class, and geography. He is
                    committed to scholarship that is theoretically rigorous, empirically grounded,
                    and policy-relevant.
                  </p>
                  <p>
                    Fahad has served as a graduate teaching assistant at Ole Miss and presented
                    his research at the 80th Annual Meeting of the American Society of
                    Criminology in Washington D.C. He is an active member of ASC, ACJS, and
                    the Southern Criminal Justice Association.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Side panel */}
            <AnimatedSection direction="right" className="space-y-5">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  {quickFacts.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-slate-600">
                      <Icon size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-950 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-4">Research Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Drug Policy', 'Capital Punishment', 'Tourist Victimization',
                    'Environmental Criminology', 'Sentencing Disparities',
                    'Racial Equity', 'Harm Reduction', 'Adolescent Substance Use',
                    'Comparative Justice', 'Police Brutality',
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="text-xs text-slate-300 border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">Professional Memberships</h3>
                <ul className="space-y-2">
                  {memberships.map((m) => (
                    <li key={m} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-gold-500 mt-0.5">▸</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── EDUCATION WITH GRADUATION PHOTO ───────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Education</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Timeline */}
            <AnimatedStagger className="space-y-6">
              {education.map((edu) => (
                <AnimatedItem key={edu.degree}>
                  <div className={`relative pl-8 pb-8 border-l-2 ${edu.current ? 'border-gold-400' : 'border-slate-300'}`}>
                    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${edu.current ? 'bg-gold-400 border-gold-400' : 'bg-white border-slate-400'}`} />
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-lg font-semibold text-navy-900">{edu.degree}</h3>
                        {edu.current && <Badge variant="gold">Current</Badge>}
                      </div>
                      <p className="text-gold-500 font-medium text-sm mb-1">{edu.institution}</p>
                      <p className="text-xs text-slate-400 mb-3">{edu.year}</p>
                      <p className="text-sm text-slate-600">{edu.notes}</p>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>

            {/* Graduation photo */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/about/graduation-celebration.jpg"
                    alt="Fahad Bin Islam Khan at graduation — MSc in Criminal Justice, University of Mississippi"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white text-sm font-medium font-serif">Fahad Bin Islam Khan</p>
                    <p className="text-gold-300 text-xs mt-0.5">Master of Science in Criminal Justice</p>
                    <p className="text-slate-300 text-xs">University of Mississippi</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TEACHING & PUBLIC SCHOLARSHIP ─────────────────────── */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Workshop photo */}
            <AnimatedSection>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/academic-workshop.jpg"
                  alt="Fahad Bin Islam Khan presenting criminal justice research at an academic workshop"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/70 to-transparent" />
              </div>
              <p className="text-slate-400 text-xs mt-3 text-center leading-relaxed">
                Academic workshop presentation
              </p>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="gold-rule mb-6" />
              <h2 className="heading-md text-white mb-6">Teaching & Public Scholarship</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Fahad brings the same intellectual rigor to the classroom and public forum
                  that drives his research. As a{' '}
                  <span className="text-white font-medium">Graduate Teaching Assistant</span>{' '}
                  at the University of Mississippi, he contributed to undergraduate criminology
                  education while developing his scholarly agenda.
                </p>
                <p>
                  His public-facing work extends to academic workshops and professional settings
                  where he communicates complex questions of drug policy, sentencing equity, and
                  criminal justice reform to diverse audiences — translating scholarship into
                  conversations that matter.
                </p>
                <p className="text-slate-400 text-sm">
                  Presenter — American Society of Criminology Annual Meeting,
                  Washington D.C., November 2025
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── THESIS DEFENSE ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <AnimatedSection className="order-2 lg:order-1">
              <div className="gold-rule mb-6" />
              <h2 className="heading-md text-navy-900 mb-6">Thesis Research</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fahad&rsquo;s master&rsquo;s thesis —{' '}
                  <em className="text-navy-700 font-medium">
                    &ldquo;Institutional Strain and Substance Coping: Analyzing Perceived Racial
                    Discrimination as a Predictor of Adolescent Marijuana Use&rdquo;
                  </em>{' '}
                  — applies institutional anomie and strain theories to examine how perceived
                  racial discrimination shapes substance use behaviors among adolescents.
                </p>
                <p>
                  The research was completed at the University of Mississippi under a committee
                  chaired by Dr. D&rsquo;Andre Walker, with Dr. Katharine Brown and Dr. Francis
                  Boateng serving as committee members.
                </p>
                <p className="text-sm text-slate-400 italic">
                  MSc in Criminal Justice · University of Mississippi · May 2026
                </p>
              </div>
            </AnimatedSection>

            {/* Thesis defense photo */}
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/thesis.jpg"
                    alt="Fahad Bin Islam Khan after thesis defense with committee members — University of Mississippi"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs text-gold-300 uppercase tracking-wider font-medium mb-1">Master's Thesis Defense</p>
                    <p className="text-white text-sm font-serif leading-snug">University of Mississippi · May 2026</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-400/40 rounded-2xl pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-10">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Skills & Methods</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
