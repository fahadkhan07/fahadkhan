import type { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description:
    'Full academic curriculum vitae of Fahad Bin Islam Khan, criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. Includes education, publications, research projects, employment, and fellowships.',
  openGraph: {
    title: 'Curriculum Vitae | Fahad Bin Islam Khan',
    description:
      'Academic CV of Fahad Bin Islam Khan, criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY.',
  },
}

export default function CVPage() {
  return (
    <>
      <PageHeader
        title="Curriculum Vitae"
        subtitle="Academic record, research experience, teaching, and professional activities."
      />

      {/* Download bar */}
      <div className="bg-gold-100 border-b border-gold-200">
        <div className="section-container py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium">
            Download a formatted copy of my full CV
          </p>
          <div className="flex gap-3">
            <Button size="sm" asChild>
              <a href="/fahad-khan-cv.pdf" download>
                <Download size={14} />
                Download PDF
              </a>
            </Button>
            <Button size="sm" variant="outline">
              <ExternalLink size={14} />
              Open in Browser
            </Button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl">

            {/* Header */}
            <AnimatedSection className="mb-12 pb-8 border-b border-slate-200">
              <h1 className="font-serif text-3xl font-bold text-navy-950 mb-1">Fahad Bin Islam Khan</h1>
              <p className="text-gold-600 font-medium mb-4">Ph.D. Student in Criminal Justice | Drug Policy and Comparative Criminology Researcher</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
                <span>khan.fbi7@gmail.com</span>
                <span>John Jay College of Criminal Justice, CUNY</span>
                <a href="https://khanfahad.com" className="hover:text-navy-700">
                  khanfahad.com
                </a>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.05} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Ph.D. in Criminal Justice</p>
                  <p className="text-xs text-slate-500 mt-0.5">John Jay College of Criminal Justice, City University of New York (CUNY), New York, NY · Expecting 2031</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Departmental Fellow and Graduate Research Assistant</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Master of Science in Criminal Justice</p>
                  <p className="text-xs text-slate-500 mt-0.5">University of Mississippi, Oxford, MS · 2026</p>
                  <p className="text-xs text-slate-500 mt-1 italic">
                    Thesis: Institutional Strain and Substance Coping: Analyzing Perceived Racial Discrimination As A Predictor Of Adolescent Marijuana Use
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 italic">
                    Committee: Dr. D&apos;Andre Walker, Dr. Francis Boateng, Dr. Katharine Brown · CGPA: 4.0/4.0
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Master of Science in Criminology and Police Science</p>
                  <p className="text-xs text-slate-500 mt-0.5">Mawlana Bhashani Science and Technology University (MBSTU), Bangladesh · 2023–2024</p>
                  <p className="text-xs text-slate-500 mt-1 italic">
                    Internship: Bangladesh Legal Aid and Services Trust (BLAST) · CGPA: 3.72/4.0
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Bachelor of Science in Criminology and Police Science</p>
                  <p className="text-xs text-slate-500 mt-0.5">Mawlana Bhashani Science and Technology University (MBSTU), Bangladesh · 2017–2023</p>
                  <p className="text-xs text-slate-500 mt-1 italic">
                    Monograph: Legal Compliance of Waste Management in Savar BSCIC Tannery Industrial Estate: An Assessment from Environmental Criminological Perspective · CGPA: 3.70/4.0
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Employment */}
            <AnimatedSection delay={0.10} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Employment
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Incoming Graduate Research Assistant</p>
                  <p className="text-xs text-slate-500 mt-0.5">Criminal Justice Ph.D. Program, John Jay College of Criminal Justice and The Graduate Center, CUNY, New York, NY · August 2026 – Present</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Appointed as Graduate Research Assistant within the Criminal Justice doctoral program at John Jay College of Criminal Justice and The Graduate Center, CUNY.</li>
                    <li>Contribute to faculty-led and interdisciplinary research initiatives in criminology and criminal justice.</li>
                    <li>Support research activities involving policy analysis, literature synthesis, data management, and scholarly project development.</li>
                    <li>Participate in collaborative academic research related to criminal justice systems, drug policy, and socio-legal inquiry.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Research Extern</p>
                  <p className="text-xs text-slate-500 mt-0.5">Mississippi Global Coalition on Research (MAGCOR), Oxford, MS · August 2025 – Present</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Conducting research on justice and policy issues; assisting with data analysis, literature review, and report preparation.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Graduate Research Assistant</p>
                  <p className="text-xs text-slate-500 mt-0.5">Department of Criminal Justice and Legal Studies, University of Mississippi · August 2024 – Present</p>
                  <p className="text-xs text-slate-400 mt-0.5 italic">Project: Victimization and Police Brutality: A Comparative Study of Nigeria and Bangladesh</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Supporting faculty-led projects in criminology, data management, and policy evaluation.</li>
                    <li>Assisted in developing the NSF-supported Law and Science Dissertation Grant (SBE#2016661) proposal.</li>
                    <li>Contributed to literature review, data design framework, and methodological drafting for a cross-national study.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Graduate Teaching Assistant</p>
                  <p className="text-xs text-slate-500 mt-0.5">Department of Criminal Justice and Legal Studies, University of Mississippi · August 2024 – Present</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Assisting with course instruction, grading, and classroom facilitation for undergraduate courses.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Research Associate (Team Leader and Primary Author)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Research Cell, Mawlana Bhashani Science and Technology University (MBSTU), Tangail, Bangladesh · June 2022 – July 2023</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Served as team leader and main author for the university-funded project &quot;The Role of Television Media and Deviant Behaviour Among Secondary School-Going Children: An Empirical Study.&quot;</li>
                    <li>Supervised research design, data collection, and quantitative analysis; led manuscript preparation and report writing.</li>
                    <li>Collaborated on additional university-funded projects focusing on crime victimization and social behavior.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Intern Mediator</p>
                  <p className="text-xs text-slate-500 mt-0.5">Bangladesh Legal Aid and Services Trust (BLAST), Dhaka, Bangladesh · January 2023 – March 2024</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Mediated civil disputes and supported legal aid documentation and community outreach.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Project Manager and Part-Time Teacher</p>
                  <p className="text-xs text-slate-500 mt-0.5">Shishuder Jonno Foundation (SJF), Tangail, Bangladesh · July 2013 – February 2022</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 list-disc list-inside">
                    <li>Managed community-based education projects and coordinated youth development initiatives.</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Publications */}
            <AnimatedSection delay={0.15} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Publications
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Peer-Reviewed Journal Articles</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Khan, F.B.I. and Akond, A. (2024). Legal Compliance of Waste Management in Savar BSCIC Tannery Industrial Estate: An Assessment from Environmental Criminological Perspective. <span className="italic">TWIST International Multidisciplinary Journal</span>, 19(1), 306–320. <a href="https://twistjournal.net/twist/article/view/131" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">https://twistjournal.net/twist/article/view/131</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Khan, F.B.I. and Akter, M. (2023). Nature of Crime Victimization among Tourists in Bangladesh: An Analysis. <span className="italic">International Journal of Law Management and Humanities</span>, 6(3), 2711–2726. <a href="https://doij.org/10.10000/IJLMH.115097" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">https://doij.org/10.10000/IJLMH.115097</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Akter, M., Kazi, T. and Khan, F.B.I. (2023). From Victimless Crime to Habitual Victim: An Empirical Study on Food Victimization. <span className="italic">International Journal of Research and Innovation in Social Science (IJRISS)</span>, 7(10), 1729–1750. <a href="https://dx.doi.org/10.47772/IJRISS.2023.701133" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">https://dx.doi.org/10.47772/IJRISS.2023.701133</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Accepted for Publication</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Khan, F.B.I. and Greenspan, R. (2025). Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi. Accepted for publication in <span className="italic">International Journal for Crime, Justice and Social Democracy</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Conference Presentations</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Khan, F.B.I. (2025). Punitive vs. Rehabilitative Drug Policies: A Comparative Analysis across U.S. States. Presented at the American Society of Criminology (ASC) 2025 Annual Meeting, Washington, D.C., USA.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Islam, M.J., Hossain, M.L., Khan, F.B.I. and Tazally, U.A. (2026). Western Paradigm, Epistemic Colonialism and Pedagogical Challenges: Toward a Quest for Decolonizing Criminology in Bangladesh. Paper accepted for presentation at the European Society of Criminology Annual Conference, Warsaw, Poland.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Research Projects */}
            <AnimatedSection delay={0.20} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Research Projects
              </h2>
              <div className="space-y-4">
                {[
                  {
                    citation: 'Akter, M., Khan, F.B.I., Ahmed, P. and Hasan, M. (2023). The Role of Television Media and Deviant Behaviour among Secondary School Going Children: An Empirical Study.',
                    status: 'University funded research project, MBSTU.',
                  },
                  {
                    citation: 'Khan, F.B.I. and Greenspan, R. (2025). Drug Tourism and Youth: Legal Awareness, Attitudes, and Policy Implications for Mississippi.',
                    status: 'Accepted for publication in International Journal for Crime, Justice and Social Democracy.',
                  },
                  {
                    citation: 'Khan, F.B.I. and Miah, A.K. (2023). Nature of Cross-Border Wildlife Crime in Bangladesh: An Analysis on the Current Crisis and Prospect for a Secure Future.',
                    status: 'Under review.',
                  },
                  {
                    citation: 'Khandaker, A.N., Akter, M. and Khan, F.B.I. (2022). The Current Status of Forensic Psychology in Bangladesh: A Review Analysis.',
                    status: 'Academic Seminar Paper, Department of Criminology and Police Science, MBSTU.',
                  },
                  {
                    citation: 'Khan, F.B.I., Akter, M. and Yesmen, N. (2022). Socio-Psychological Condition of Released Female Prisoner: An Exploratory Study on Mymensingh District.',
                    status: 'In processing.',
                  },
                  {
                    citation: 'Khan, F.B.I., Hasan, N. and Aziz, M.B. (2022). Confidence over Judicial Proceedings from the Perception of Plaintiff and Defendant: An Empirical Study on Tangail Court.',
                    status: 'Accepted for publication.',
                  },
                  {
                    citation: 'Hasan, M., Khan, F.B.I. and Talukder, M.I.A (2022). Fear of Sexual Harassment among Adolescent Girls: A Study on the School Going Students of Tangail District.',
                    status: 'In processing.',
                  },
                  {
                    citation: 'Hossain, D., Khan, F.B.I. and Akter, M. (2022). Impact of Occupational Stress among Police Personnel: An Exploratory Study on Tangail Model Thana.',
                    status: 'In processing.',
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.citation} <span className="italic text-slate-400">{item.status}</span>
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Fellowships and Awards */}
            <AnimatedSection delay={0.25} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Fellowships and Awards
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Five-Year Doctoral Fellowship</p>
                  <p className="text-xs text-slate-500 mt-0.5">Criminal Justice Ph.D. Program, John Jay College of Criminal Justice and The Graduate Center, CUNY · 2026–2031</p>
                  <p className="text-xs text-slate-500 mt-1 italic">Awarded a fully funded five-year doctoral fellowship package including stipend support, tuition coverage, and additional first-year research funding.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">University Merit Scholarship for Academic Excellence (Honours Final)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Mawlana Bhashani Science and Technology University (MBSTU)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional Memberships */}
            <AnimatedSection delay={0.30} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Professional Memberships
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-navy-900 text-sm">American Society of Criminology (ASC)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Member · 2022–Present</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Bangladesh Society of Criminology</p>
                  <p className="text-xs text-slate-500 mt-0.5">Member · 2022–Present</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.35} className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-5 pb-2 border-b border-slate-200">
                Skills
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Research Skills</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Project design and experimentation, literature review, quantitative data analysis, qualitative research, mixed-methods research, questionnaire design, data collection, survey research, focus group discussion, observation method, in-depth interview, data analysis and interpretation.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Research Tools</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SPSS, R, Stata, SAS, ATLAS.ti, NVivo, UCINet, ArcGIS, Kobo Toolbox, Twitter API, Zotero, Mendeley, Microsoft Office Suite, Google Workspace, Adobe Illustrator.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="mt-8 pt-6 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-400">
                Last updated: May 2026 · Full CV available upon request
              </p>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  )
}
