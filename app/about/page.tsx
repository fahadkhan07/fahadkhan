import type { Metadata } from 'next'
import { GraduationCap, MapPin, BookOpen, Award, Users } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Fahad Khan — criminal justice scholar, incoming PhD student, and drug policy researcher.',
}

const education = [
  {
    degree: 'Ph.D. in Criminal Justice',
    institution: 'Incoming — PhD Program',
    year: '2024–Present',
    notes: 'Dissertation focus: U.S. Drug Policy, Sentencing Structures, and Racial Equity',
    current: true,
  },
  {
    degree: 'M.A. in Criminal Justice',
    institution: 'University of Mississippi',
    year: '2022–2024',
    notes:
      'Thesis research on drug policy and its sociolegal consequences. Graduate Teaching Assistant.',
    current: false,
  },
  {
    degree: 'B.A. in Criminal Justice',
    institution: 'University of Mississippi',
    year: '2018–2022',
    notes: 'Graduated with honors. Focus on criminological theory and justice policy.',
    current: false,
  },
]

const skills = [
  'Quantitative Research Methods',
  'Qualitative & Ethnographic Methods',
  'Policy Analysis',
  'Criminological Theory',
  'Legal Analysis',
  'Statistical Software (STATA, R)',
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
      <PageHeader
        title="About"
        subtitle="Criminal justice scholar committed to understanding and reforming America's approach to drug policy and punishment."
      />

      {/* ── BIO ─────────────────────────────────────────────── */}
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
                    Fahad Khan is a criminal justice scholar whose research sits at the intersection of
                    drug policy, law, and social inequality. He holds a Master of Arts in Criminal
                    Justice from the{' '}
                    <strong className="text-navy-800">University of Mississippi</strong>, where he
                    developed a rigorous research agenda examining how federal and state drug policies
                    reproduce structural disadvantage for marginalized communities.
                  </p>
                  <p>
                    As an incoming PhD student, Fahad&rsquo;s scholarly interests focus on the political
                    economy of drug prohibition, the racialized enforcement of drug laws, and
                    evidence-based alternatives to punitive approaches including decriminalization, harm
                    reduction, and treatment-centered reform.
                  </p>
                  <p>
                    Drawing on both quantitative and qualitative methods, his work interrogates how
                    sentencing guidelines, prosecutorial discretion, and enforcement priorities have
                    produced decades of mass incarceration disproportionately affecting Black and
                    Hispanic communities. He is committed to scholarship that informs policy and
                    centers the experiences of those most affected by the criminal justice system.
                  </p>
                  <p>
                    Beyond research, Fahad has served as a graduate teaching assistant in criminal
                    justice and is passionate about mentoring undergraduates from underrepresented
                    backgrounds. He is an active participant in national criminology conferences and
                    contributes public commentary on drug policy through academic blogs and media
                    engagements.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Side panel */}
            <AnimatedSection direction="right" className="space-y-6">
              {/* Quick facts */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: GraduationCap, text: 'M.A. Criminal Justice, Ole Miss' },
                    { icon: BookOpen, text: 'Incoming PhD Student' },
                    { icon: MapPin, text: 'Mississippi / United States' },
                    { icon: Award, text: 'Graduate Teaching Assistant' },
                    { icon: Users, text: 'ASC & ACJS Member' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-slate-600">
                      <Icon size={15} className="text-gold-500 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research interests */}
              <div className="bg-navy-950 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-4">
                  Research Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Drug Policy', 'War on Drugs', 'Sentencing', 'Mass Incarceration',
                    'Racial Disparities', 'Harm Reduction', 'Decriminalization',
                    'Opioid Crisis', 'Criminal Justice Reform', 'Criminological Theory',
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

              {/* Professional memberships */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-4">
                  Professional Memberships
                </h3>
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

      {/* ── EDUCATION ──────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Education</h2>
          </AnimatedSection>

          <AnimatedStagger className="space-y-6 max-w-3xl">
            {education.map((edu) => (
              <AnimatedItem key={edu.degree}>
                <div
                  className={`relative pl-8 pb-8 border-l-2 ${edu.current ? 'border-gold-400' : 'border-slate-300'}`}
                >
                  <div
                    className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 -translate-x-1/2 ${edu.current ? 'bg-gold-400 border-gold-400' : 'bg-white border-slate-400'}`}
                  />
                  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-semibold text-navy-900">
                        {edu.degree}
                      </h3>
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
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
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
