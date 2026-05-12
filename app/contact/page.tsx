import type { Metadata } from 'next'
import { Mail, Linkedin, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Fahad Bin Islam Khan, criminal justice researcher and Ph.D. student at John Jay College of Criminal Justice, CUNY. Available for academic collaboration, research communication, and conference engagement.',
  openGraph: {
    title: 'Contact Fahad Bin Islam Khan | Criminal Justice Researcher',
    description:
      'Contact Fahad Bin Islam Khan for academic collaboration, research communication, and professional correspondence.',
  },
  alternates: {
    canonical: 'https://khanfahad.com/contact',
  },
}

const directContact = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'khan.fbi7@gmail.com',
    href: 'mailto:khan.fbi7@gmail.com',
    note: 'Academic inquiries, collaboration proposals, and media requests',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Fahad Bin Islam Khan',
    href: 'https://www.linkedin.com/in/fahad-bin-islam-khan-b64282211/',
    note: 'Professional network and academic background',
  },
]

const academicProfiles = [
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en',
    icon: '🎓',
    note: 'Publications and citation metrics',
  },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan',
    icon: '🔬',
    note: 'Research papers and project updates',
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/my-orcid?orcid=0009-0009-0629-9473',
    icon: '🆔',
    note: 'Persistent researcher identifier',
  },
  {
    name: 'SSRN',
    href: 'https://hq.ssrn.com/UserHome.cfm',
    icon: '📋',
    note: 'Working papers and preprints',
  },
  {
    name: 'Website',
    href: 'https://khanfahad.com',
    icon: '🌐',
    note: 'Academic portfolio and research overview',
  },
]

const correspondenceTypes = [
  'Academic collaboration on drug policy or criminal justice research',
  'Peer review of manuscripts in relevant subject areas',
  'Media commentary on drug policy and criminal justice reform',
  'Conference presentations and speaking invitations',
  'Research partnerships and joint project inquiries',
  'Graduate study inquiries in criminal justice',
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Academic and Research Contact"
        subtitle="Available for academic collaboration, research communication, conference engagement, and professional correspondence."
      />

      {/* ── MAIN CONTACT SECTION ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-start">

            {/* Left: Direct contact + correspondence types */}
            <AnimatedSection direction="left">
              <div className="gold-rule mb-6" />
              <h2 className="heading-md text-navy-900 mb-3">Direct Contact</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
                Correspondence is welcome on academic research, collaboration proposals, conference
                invitations, and professional inquiries. Responses are typically sent within a few
                business days.
              </p>

              <div className="space-y-3">
                {directContact.map(({ Icon, label, value, href, note }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 border border-slate-200 rounded-xl hover:border-navy-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="font-medium text-navy-900 text-sm break-all">{value}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">{note}</p>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-slate-300 group-hover:text-navy-500 flex-shrink-0 transition-colors"
                    />
                  </a>
                ))}
              </div>

              {/* Correspondence types */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                  Research Communication
                </p>
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                  {correspondenceTypes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="text-gold-500 text-xs mt-1 flex-shrink-0">▸</span>
                      <p className="text-sm text-slate-600 leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Academic identity card + profiles */}
            <AnimatedSection direction="right" className="space-y-5">

              {/* Identity card */}
              <div className="bg-navy-950 rounded-2xl p-7">
                <p className="text-xs text-gold-400 uppercase tracking-widest font-medium mb-5">
                  Academic Affiliation
                </p>
                <p className="font-serif text-xl font-bold text-white mb-1">
                  Fahad Bin Islam Khan
                </p>
                <p className="text-slate-300 text-sm font-medium mb-1">
                  Ph.D. Student in Criminal Justice
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  John Jay College of Criminal Justice<br />
                  City University of New York (CUNY)<br />
                  New York, New York
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-4">Research Areas</p>
                  <div className="space-y-2.5">
                    {[
                      'U.S. Drug Policy',
                      'Criminal Justice Systems',
                      'Comparative Criminology',
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2.5">
                        <span className="text-gold-400 text-xs">▸</span>
                        <span className="text-slate-300 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Academic profiles */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    Academic Profiles
                  </p>
                </div>
                <div className="divide-y divide-slate-100">
                  {academicProfiles.map(({ name, href, icon, note }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 px-5 py-4 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-lg w-7 text-center flex-shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-navy-900 text-sm">{name}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{note}</p>
                      </div>
                      <ExternalLink
                        size={13}
                        className="text-slate-300 group-hover:text-navy-500 flex-shrink-0 transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
