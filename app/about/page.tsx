import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, MapPin, BookOpen, Award, Users, Globe } from 'lucide-react'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. His research focuses on U.S. drug policy, criminal justice systems, comparative criminology, sentencing disparities, and environmental criminology.',
  keywords: [
    'Fahad Bin Islam Khan',
    'criminal justice researcher',
    'drug policy researcher',
    'U.S. drug policy',
    'criminal justice systems',
    'comparative criminology',
    'sentencing disparities',
    'marijuana legalization',
    'John Jay College of Criminal Justice',
    'CUNY',
    'environmental criminology',
    'race and crime',
    'drug law enforcement',
  ],
  openGraph: {
    title: 'About Fahad Bin Islam Khan | Criminal Justice Researcher',
    description:
      'Fahad Bin Islam Khan is a criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. Research focuses on U.S. drug policy, criminal justice systems, and comparative criminology.',
  },
  alternates: {
    canonical: 'https://fahadkhanresearch.com/about',
  },
}

const education = [
  {
    degree: 'Ph.D. in Criminal Justice',
    institution: 'John Jay College of Criminal Justice, City University of New York (CUNY)',
    year: 'Expecting 2031',
    notes: 'Departmental Fellow and Graduate Research Assistant. Doctoral research in criminology: drug policy, institutional inequality, race, law enforcement, and comparative criminal justice systems.',
    current: true,
  },
  {
    degree: 'Master of Science in Criminal Justice',
    institution: 'University of Mississippi, Oxford, MS',
    year: '2026',
    notes:
      'Thesis: "Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination As A Predictor Of Adolescent Marijuana Use." Committee: Dr. D\'Andre Walker, Dr. Francis Boateng, Dr. Katharine Brown. CGPA: 4.0/4.0',
    current: false,
  },
  {
    degree: 'Master of Science in Criminology and Police Science',
    institution: 'Mawlana Bhashani Science and Technology University (MBSTU), Bangladesh',
    year: '2023–2024',
    notes: 'Internship: Bangladesh Legal Aid and Services Trust (BLAST). CGPA: 3.72/4.0',
    current: false,
  },
  {
    degree: 'Bachelor of Science in Criminology and Police Science',
    institution: 'Mawlana Bhashani Science and Technology University (MBSTU), Bangladesh',
    year: '2017–2023',
    notes: 'Monograph: Legal Compliance of Waste Management in Savar BSCIC Tannery Industrial Estate. CGPA: 3.70/4.0',
    current: false,
  },
]

const quickFacts = [
  { icon: GraduationCap, text: 'Ph.D. Student, John Jay College of Criminal Justice (CUNY)' },
  { icon: BookOpen,      text: 'M.S. in Criminal Justice, University of Mississippi (2026)' },
  { icon: BookOpen,      text: 'M.S. in Criminology and Police Science, MBSTU Bangladesh' },
  { icon: MapPin,        text: 'New York City, New York' },
  { icon: Award,         text: 'Five-Year Doctoral Fellow, John Jay College / CUNY' },
  { icon: Users,         text: 'ASC · Bangladesh Society of Criminology' },
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
  'Bangladesh Society of Criminology',
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Fahad Bin Islam Khan',
            givenName: 'Fahad Bin Islam',
            familyName: 'Khan',
            jobTitle: 'Criminal Justice Researcher',
            description: 'Criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, City University of New York (CUNY), specializing in U.S. drug policy, criminal justice systems, and comparative criminology.',
            affiliation: {
              '@type': 'CollegeOrUniversity',
              name: 'John Jay College of Criminal Justice, City University of New York (CUNY)',
              url: 'https://www.jjay.cuny.edu',
            },
            alumniOf: [
              {
                '@type': 'CollegeOrUniversity',
                name: 'University of Mississippi',
                url: 'https://www.olemiss.edu',
              },
              {
                '@type': 'CollegeOrUniversity',
                name: 'Mawlana Bhashani Science and Technology University',
              },
            ],
            url: 'https://fahadkhanresearch.com/about',
            email: 'khan.fbi7@gmail.com',
            sameAs: [
              'https://www.linkedin.com/in/fahad-bin-islam-khan-b64282211/',
              'https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en',
              'https://orcid.org/my-orcid?orcid=0009-0009-0629-9473',
              'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan',
            ],
            knowsAbout: [
              'U.S. Drug Policy',
              'Criminal Justice Systems',
              'Comparative Criminology',
              'Drug Law Enforcement',
              'Sentencing Disparities',
              'Marijuana Legalization',
              'Environmental Criminology',
              'Race and Crime',
              'Policing and Prison',
            ],
          }),
        }}
      />

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
              Ph.D. Student in Criminal Justice
            </p>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              John Jay College of Criminal Justice · City University of New York<br />
              M.S. in Criminal Justice · University of Mississippi, 2026
            </p>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl text-lg">
              My research sits at the intersection of drug policy, law, and social inequality,
              with a commitment to scholarship that informs reform and centers the experiences
              of those most affected by the criminal justice system.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Drug Policy', 'Comparative Criminology', 'Criminal Justice', 'Race and Crime', 'Environmental Criminology'].map((tag) => (
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
                <h2 className="heading-md text-navy-900 mb-8">Biography</h2>

                {/* Opening: entity-based SEO positioning statement */}
                <p className="text-slate-700 text-base leading-relaxed mb-10">
                  Fahad Bin Islam Khan is an incoming{' '}
                  <strong className="text-navy-900 font-semibold">Ph.D. student in Criminal Justice</strong>{' '}
                  at{' '}
                  <strong className="text-navy-900 font-semibold">John Jay College of Criminal Justice,
                  City University of New York (CUNY)</strong>{' '}
                  whose research focuses on{' '}
                  <strong className="text-navy-900 font-semibold">U.S. drug policy</strong>,{' '}
                  <strong className="text-navy-900 font-semibold">criminal justice systems</strong>,
                  and{' '}
                  <strong className="text-navy-900 font-semibold">comparative criminology</strong>.
                  His work examines how legal structures, law enforcement practices, and policy
                  implementation produce and perpetuate unequal outcomes across communities,
                  institutions, and jurisdictions.
                </p>

                {/* Research Focus */}
                <div className="mb-10">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">Research Focus</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded mb-5" />
                  <p className="text-slate-600 leading-relaxed">
                    His primary research examines{' '}
                    <span className="text-navy-800 font-medium">U.S. drug policy</span>{' '}
                    as a site of institutional inequality, analyzing how{' '}
                    <span className="text-navy-800 font-medium">drug law enforcement</span>,{' '}
                    <span className="text-navy-800 font-medium">sentencing disparities</span>,
                    and prosecutorial discretion reproduce structural disadvantages along
                    lines of race, class, and geography. He approaches criminal justice
                    systems not as neutral institutions, but as politically constructed
                    mechanisms that reflect and reinforce existing power relations. His
                    analysis draws from{' '}
                    <span className="text-navy-800 font-medium">criminological theory</span>{' '}
                    and{' '}
                    <span className="text-navy-800 font-medium">socio-legal research</span>{' '}
                    to interrogate how policy decisions translate into institutional practice.
                  </p>
                </div>

                {/* Academic Background */}
                <div className="mb-10">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">Academic Background</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded mb-5" />
                  <p className="text-slate-600 leading-relaxed">
                    He completed his{' '}
                    <strong className="text-navy-800">M.Sc. in Criminal Justice</strong> at the{' '}
                    <strong className="text-navy-800">University of Mississippi</strong>, where
                    his graduate research applied institutional strain theory to examine how
                    perceived racial discrimination shapes adolescent marijuana use. That work
                    established his analytical framework for connecting{' '}
                    <span className="text-navy-800 font-medium">race and justice</span>,{' '}
                    <span className="text-navy-800 font-medium">institutional inequality</span>,
                    and drug-related behavior within the broader context of{' '}
                    <span className="text-navy-800 font-medium">criminal justice policy</span>.
                    He continues this trajectory at John Jay, an institution internationally
                    recognized for scholarship in criminology, law, and public policy.
                  </p>
                </div>

                {/* Current Research Agenda */}
                <div className="mb-10">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">Current Research Agenda</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded mb-5" />
                  <p className="text-slate-600 leading-relaxed">
                    His research agenda encompasses{' '}
                    <span className="text-navy-800 font-medium">marijuana legalization</span>{' '}
                    and its institutional consequences, drug tourism as a criminological
                    phenomenon, capital punishment disparities,{' '}
                    <span className="text-navy-800 font-medium">policing and punishment</span>{' '}
                    under prohibition regimes, and{' '}
                    <span className="text-navy-800 font-medium">criminal justice reform</span>{' '}
                    as both policy and practice. He is particularly interested in the
                    disjuncture between formal reform and persistent structural inequality:
                    why drug policy changes frequently fail to disrupt entrenched patterns
                    of{' '}
                    <span className="text-navy-800 font-medium">race and justice</span>{' '}
                    across U.S. institutions. View the full{' '}
                    <Link
                      href="/research"
                      className="text-navy-700 underline underline-offset-2 hover:text-gold-600 transition-colors"
                    >
                      research agenda
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/publications"
                      className="text-navy-700 underline underline-offset-2 hover:text-gold-600 transition-colors"
                    >
                      publications
                    </Link>.
                  </p>
                </div>

                {/* Comparative & Global Perspective */}
                <div className="mb-10">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">Comparative &amp; Global Perspective</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded mb-5" />
                  <p className="text-slate-600 leading-relaxed">
                    Beyond the U.S. context, his work engages{' '}
                    <span className="text-navy-800 font-medium">comparative criminology</span>{' '}
                    and{' '}
                    <span className="text-navy-800 font-medium">environmental criminology</span>,
                    with research spanning Bangladesh, Nigeria, and cross-national comparative
                    frameworks. This dimension situates American drug policy and criminal
                    justice systems within a broader global landscape, identifying both the
                    particularity of U.S. prohibition regimes and the structural parallels
                    that connect criminal justice systems across different national and
                    political contexts.
                  </p>
                </div>

                {/* Future Research Direction */}
                <div className="mb-10">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-2">Future Research Direction</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded mb-5" />
                  <p className="text-slate-600 leading-relaxed">
                    His doctoral work at John Jay will deepen his engagement with{' '}
                    <span className="text-navy-800 font-medium">socio-legal systems</span>,
                    comparative criminal justice policy, and the political sociology of
                    punishment. He intends to produce scholarship that is theoretically
                    rigorous, empirically grounded, and directly relevant to ongoing debates
                    in{' '}
                    <span className="text-navy-800 font-medium">criminal justice reform</span>{' '}
                    and drug policy analysis. This website serves as a platform for research,
                    academic writing, and ongoing scholarly development in criminology and
                    criminal justice.
                  </p>
                </div>

                {/* Research Areas chips */}
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Research Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'U.S. Drug Policy',
                      'Criminal Justice Systems',
                      'Comparative Criminology',
                      'Drug Law Enforcement',
                      'Marijuana Legalization',
                      'Race and Justice',
                      'Institutional Inequality',
                      'Policing and Punishment',
                      'Socio-Legal Research',
                      'Criminal Justice Reform',
                      'Environmental Criminology',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-navy-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Side panel */}
            <AnimatedSection direction="right" className="space-y-5">
              <div className="bg-navy-950 rounded-2xl p-6">
                <h3 className="font-serif text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">Academic Affiliation</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Current</p>
                    <p className="text-white text-sm font-medium leading-snug">Ph.D. in Criminal Justice</p>
                    <p className="text-slate-300 text-xs mt-0.5">John Jay College of Criminal Justice</p>
                    <p className="text-gold-400 text-xs">City University of New York (CUNY)</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Previous</p>
                    <p className="text-white text-sm font-medium leading-snug">M.Sc. in Criminal Justice</p>
                    <p className="text-slate-300 text-xs mt-0.5">University of Mississippi</p>
                  </div>
                </div>
              </div>

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
                    'U.S. Drug Policy', 'Criminal Justice Systems', 'Comparative Criminology',
                    'Drug Law Enforcement', 'Sentencing Disparities', 'Race and Justice',
                    'Institutional Inequality', 'Policing and Punishment',
                    'Socio-Legal Research', 'Environmental Criminology',
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
                    alt="Fahad Bin Islam Khan at graduation, MSc in Criminal Justice, University of Mississippi"
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
                  criminal justice reform to diverse audiences, translating scholarship into
                  conversations that matter.
                </p>
                <p className="text-slate-400 text-sm">
                  Presenter, American Society of Criminology Annual Meeting,
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
                  Fahad&rsquo;s master&rsquo;s thesis,{' '}
                  <em className="text-navy-700 font-medium">
                    &ldquo;Institutional Strain and Substance Coping: Analyzing Perceived Racial
                    Discrimination as a Predictor of Adolescent Marijuana Use,&rdquo;
                  </em>{' '}
                  applies institutional anomie and strain theories to examine how perceived
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
                    alt="Fahad Bin Islam Khan after thesis defense with committee members, University of Mississippi"
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
