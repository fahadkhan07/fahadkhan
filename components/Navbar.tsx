'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/research',     label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/blog',         label: 'Blog' },
  { href: '/teaching',     label: 'Teaching' },
  { href: '/cv',           label: 'CV' },
  { href: '/contact',      label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const pathname                   = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
          : 'bg-navy-950/90 backdrop-blur-sm'
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className={cn(
              'font-serif font-bold text-lg tracking-tight transition-colors',
              scrolled ? 'text-navy-900' : 'text-white'
            )}
          >
            Fahad Khan
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  pathname === href
                    ? scrolled
                      ? 'text-navy-800 bg-slate-100'
                      : 'text-gold-400 bg-white/10'
                    : scrolled
                    ? 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors',
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-white/10 bg-navy-950">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'block px-4 py-2.5 text-sm font-medium transition-colors',
                  pathname === href
                    ? 'text-gold-400 bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
