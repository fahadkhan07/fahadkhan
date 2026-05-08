import type { Metadata } from 'next'
import { Mail, Twitter, Linkedin, ExternalLink, MessageSquare } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Fahad Khan — academic inquiries, collaboration, and media.',
}

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fbkhan137@gmail.com',
    href: 'mailto:fbkhan137@gmail.com',
    description: 'Best for academic inquiries, collaboration proposals, and media requests.',
    cta: 'Send Email',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    value: '@FahadKhanCJ',
    href: 'https://twitter.com',
    description: 'Follow for commentary on drug policy, criminal justice news, and research updates.',
    cta: 'Follow on X',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Fahad Khan',
    href: 'https://linkedin.com',
    description: 'Professional network and academic background.',
    cta: 'Connect',
  },
]

const academicLinks = [
  { name: 'Google Scholar', href: 'https://scholar.google.com', icon: '🎓' },
  { name: 'ResearchGate',   href: 'https://researchgate.net',  icon: '🔬' },
  { name: 'ORCID',          href: 'https://orcid.org',          icon: '🆔' },
  { name: 'Academia.edu',   href: 'https://academia.edu',       icon: '📄' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="I welcome inquiries from fellow researchers, students, journalists, and policy advocates."
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — contact info */}
            <AnimatedSection direction="left">
              <div className="gold-rule mb-6" />
              <h2 className="heading-md text-navy-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                I am happy to correspond about my research, potential collaborations, speaking
                invitations, media commentary, or questions from students considering graduate
                school in criminal justice. I aim to respond to all messages within a few
                business days.
              </p>

              <div className="space-y-4">
                {contactMethods.map(({ icon: Icon, label, value, href, description, cta }) => (
                  <div
                    key={label}
                    className="flex gap-4 p-5 border border-slate-200 rounded-xl bg-slate-50 hover:border-navy-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="font-medium text-navy-900 text-sm mb-1">{value}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{description}</p>
                      <Button asChild size="sm" variant="outline">
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {cta}
                          <ExternalLink size={12} />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — context + academic links */}
            <AnimatedSection direction="right" className="space-y-8">
              {/* What I can help with */}
              <div className="bg-navy-950 text-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <MessageSquare size={20} className="text-gold-400" />
                  <h3 className="font-serif font-semibold text-lg">What I Can Help With</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    'Academic collaboration on drug policy or criminal justice research',
                    'Peer review of manuscripts in my areas of expertise',
                    'Media commentary on drug policy news and reform debates',
                    'Speaking at conferences, seminars, or public events',
                    'Advising students considering graduate study in criminal justice',
                    'Connecting with advocacy organizations on reform initiatives',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-gold-400 mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic profiles */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-serif font-semibold text-navy-900 mb-4">
                  Find My Work Online
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {academicLinks.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 bg-white border border-slate-200 rounded-lg hover:border-navy-300 hover:shadow-sm transition-all text-sm font-medium text-navy-800"
                    >
                      <span className="text-lg">{icon}</span>
                      {name}
                      <ExternalLink size={11} className="ml-auto text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Institution */}
              <div className="text-sm text-slate-500 text-center">
                <p className="font-medium text-slate-700">Fahad Khan</p>
                <p>University of Mississippi</p>
                <p>Department of Criminal Justice</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
