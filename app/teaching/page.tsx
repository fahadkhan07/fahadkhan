import type { Metadata } from 'next'
import { Users, BookOpen, Star, MessageSquare } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Teaching',
  description: 'Teaching experience and philosophy of Fahad Bin Islam Khan, criminal justice educator.',
}

const courses = [
  {
    code: 'CRJ 101',
    title: 'Introduction to Criminal Justice',
    role: 'Graduate Teaching Assistant',
    institution: 'University of Mississippi',
    semesters: ['2024–Present'],
    level: 'Undergraduate',
    enrollment: '~120 students',
    description:
      'Survey course covering the history, structure, and function of the American criminal justice system, including law enforcement, courts, and corrections. As GTA, I led weekly discussion sections, developed supplementary materials on drug policy, held office hours, and graded examinations and written assignments.',
    topics: [
      'History of American Policing',
      'Courts and Prosecution',
      'Sentencing and Corrections',
      'Drug Policy and the War on Drugs',
      'Juvenile Justice',
      'Criminal Justice Reform',
    ],
  },
  {
    code: 'CRJ 301',
    title: 'Research Methods in Criminal Justice',
    role: 'Graduate Teaching Assistant',
    institution: 'University of Mississippi',
    semesters: ['2024–Present'],
    level: 'Undergraduate',
    enrollment: '~60 students',
    description:
      'Intermediate methods course introducing students to quantitative and qualitative research design in criminal justice. I assisted with lab sections on statistical software (STATA), helped students develop research proposals, and provided feedback on literature reviews and data analysis assignments.',
    topics: [
      'Research Design',
      'Survey and Interview Methods',
      'Quantitative Analysis (STATA)',
      'Qualitative & Content Analysis',
      'Ethics in Research',
      'Policy Evaluation',
    ],
  },
]

const philosophy = [
  {
    icon: Users,
    title: 'Student-Centered Learning',
    description:
      'I believe learning flourishes when students feel seen and supported. I prioritize creating inclusive classroom environments where all perspectives are welcomed and students from underrepresented backgrounds are centered.',
  },
  {
    icon: BookOpen,
    title: 'Connecting Theory to Practice',
    description:
      'Criminal justice education is most powerful when students can see how theoretical concepts illuminate real-world policy debates. I design discussions that bridge criminological theory with current events in drug policy, policing, and reform.',
  },
  {
    icon: Star,
    title: 'Developing Critical Thinkers',
    description:
      'My teaching goal is not to transmit information but to cultivate analytical skills. Students should leave my classroom better equipped to evaluate evidence, question assumptions, and engage critically with criminal justice institutions.',
  },
  {
    icon: MessageSquare,
    title: 'Mentorship and Accessibility',
    description:
      'I maintain generous office hours and am committed to being accessible to students, particularly those navigating first-generation college challenges or considering graduate school in criminal justice.',
  },
]

export default function TeachingPage() {
  return (
    <>
      <PageHeader
        title="Teaching"
        subtitle="Building the next generation of critically minded criminal justice scholars and practitioners."
      />

      {/* ── PHILOSOPHY ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimatedSection className="mb-14">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900 mb-3">Teaching Philosophy</h2>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              I approach teaching as an act of intellectual and civic responsibility. Criminal justice
              education carries high stakes; it shapes how future practitioners, policymakers, and citizens
              understand crime, punishment, and justice.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {philosophy.map((p) => (
              <AnimatedItem key={p.title}>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0">
                    <p.icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-navy-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ── COURSES ─────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-navy-900">Courses Taught</h2>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            {courses.map((course, i) => (
              <AnimatedSection key={course.code} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">{course.code}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                      {course.semesters.map((s) => (
                        <span key={s} className="text-xs text-slate-400 bg-slate-100 rounded-full px-2.5 py-0.5">
                          {s}
                        </span>
                      ))}
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                      <span>{course.role}</span>
                      <span>·</span>
                      <span>{course.institution}</span>
                      <span>·</span>
                      <span>{course.enrollment}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {course.description}
                    </p>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Topics Covered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((t) => (
                          <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE COURSES ──────────────────────────────────── */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="gold-rule mb-6" />
            <h2 className="heading-md text-white mb-4">Courses I Could Teach</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              In addition to courses I have already assisted with, I am well-prepared to develop and
              teach the following courses at the undergraduate or graduate level:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Drug Policy and Society',
                'Race, Crime, and Justice',
                'Punishment and Social Control',
                'Criminal Justice Reform',
                'Criminological Theory',
                'Research Methods (Graduate Level)',
                'Inequality and the Law',
                'Opioid Crisis: Policy Responses',
              ].map((course) => (
                <div key={course} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-gold-400">▸</span>
                  {course}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
