import Link from 'next/link'
import { Mail, ExternalLink } from 'lucide-react'

const footerLinks = {
  Pages: [
    { href: '/about',        label: 'About' },
    { href: '/research',     label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/blog',         label: 'Blog' },
    { href: '/teaching',     label: 'Teaching' },
    { href: '/cv',           label: 'CV' },
    { href: '/contact',      label: 'Contact' },
  ],
  Academic: [
    { href: 'https://scholar.google.com',  label: 'Google Scholar',  external: true },
    { href: 'https://researchgate.net',    label: 'ResearchGate',    external: true },
    { href: 'https://orcid.org',           label: 'ORCID',           external: true },
    { href: 'https://academia.edu',        label: 'Academia.edu',    external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-bold mb-3">Fahad Bin Islam Khan</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              MSc in Criminal Justice, University of Mississippi. Incoming PhD student researching
              U.S. drug policy, sentencing reform, and criminal justice equity.
            </p>
            <a
              href="mailto:fbkhan137@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm transition-colors"
            >
              <Mail size={14} />
              fbkhan137@gmail.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              {footerLinks.Pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Academic Profiles
            </h4>
            <ul className="space-y-2">
              {footerLinks.Academic.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {label}
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Fahad Bin Islam Khan. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Criminal Justice Scholar · Drug Policy Researcher
          </p>
        </div>
      </div>
    </footer>
  )
}
