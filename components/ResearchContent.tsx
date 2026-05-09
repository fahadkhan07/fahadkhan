'use client'

import { useState, useMemo } from 'react'
import { Search, ExternalLink, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  publications,
  pubCategories,
  categoryLabels,
  categoryDescriptions,
  type PubCategory,
  type Publication,
} from '@/lib/research-data'

const typeColors: Record<PubCategory, 'default' | 'gold' | 'secondary' | 'outline'> = {
  'Peer-Reviewed Publication': 'default',
  'Working Paper': 'gold',
  'Conference Paper': 'secondary',
  'Thesis': 'outline',
}

const statusStyle: Record<string, string> = {
  Published:     'bg-green-100 text-green-700',
  Completed:     'bg-green-100 text-green-700',
  Presented:     'bg-green-100 text-green-700',
  'Under Review': 'bg-amber-100 text-amber-700',
  Preprint:      'bg-blue-100 text-blue-700',
}

const allYears = [...new Set(publications.map((p) => p.year))].sort((a, b) => Number(b) - Number(a))

const allTags = [...new Set(publications.flatMap((p) => p.tags))].sort()

export function ResearchContent() {
  const [search, setSearch]       = useState('')
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const [activeType, setActiveType] = useState<PubCategory | null>(null)
  const [activeTag, setActiveTag]   = useState<string | null>(null)
  const [expandedApa, setExpandedApa] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return publications.filter((pub) => {
      if (q && !pub.title.toLowerCase().includes(q) && !pub.tags.some((t) => t.toLowerCase().includes(q)))
        return false
      if (activeYear && pub.year !== activeYear) return false
      if (activeType && pub.category !== activeType) return false
      if (activeTag && !pub.tags.includes(activeTag)) return false
      return true
    })
  }, [search, activeYear, activeType, activeTag])

  const hasFilters = search || activeYear || activeType || activeTag

  function clearFilters() {
    setSearch('')
    setActiveYear(null)
    setActiveType(null)
    setActiveTag(null)
  }

  return (
    <div>
      {/* ── SEARCH + FILTERS ─────────────────────────────────── */}
      <div className="mb-10 space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        {/* Search */}
        <div className="relative max-w-xl">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title or topic…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400 bg-white transition"
          />
        </div>

        {/* Year filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider w-10">Year</span>
          {allYears.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(activeYear === y ? null : y)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                activeYear === y
                  ? 'bg-navy-900 text-white border-navy-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-navy-400 hover:text-navy-800'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Type filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider w-10">Type</span>
          {pubCategories.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(activeType === t ? null : t)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                activeType === t
                  ? 'bg-gold-500 text-white border-gold-500'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-gold-400 hover:text-gold-700'
              }`}
            >
              {categoryLabels[t]}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider w-10">Area</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                activeTag === tag
                  ? 'bg-slate-700 text-white border-slate-700'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-800 transition-colors"
          >
            <X size={12} />
            Clear all filters
          </button>
        )}
      </div>

      {/* Results summary */}
      {hasFilters && (
        <p className="text-sm text-slate-500 mb-8">
          Showing <span className="font-semibold text-navy-800">{filtered.length}</span> of{' '}
          {publications.length} research works
        </p>
      )}

      {/* ── PUBLICATIONS BY CATEGORY ─────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg mb-3">No results found</p>
          <button
            onClick={clearFilters}
            className="text-sm text-navy-700 underline underline-offset-2"
          >
            Clear filters
          </button>
        </div>
      ) : (
        pubCategories.map((category) => {
          const items = filtered.filter((p) => p.category === category)
          if (items.length === 0) return null

          return (
            <div key={category} className="mb-16">
              <div className="mb-7">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
                  {categoryLabels[category]}
                </h3>
                <p className="text-sm text-slate-500">{categoryDescriptions[category]}</p>
                <div className="w-12 h-0.5 bg-gold-400 rounded mt-3" />
              </div>

              <div className="space-y-6">
                {items.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    pub={pub}
                    expandedApa={expandedApa}
                    setExpandedApa={setExpandedApa}
                  />
                ))}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

function PublicationCard({
  pub,
  expandedApa,
  setExpandedApa,
}: {
  pub: Publication
  expandedApa: string | null
  setExpandedApa: (id: string | null) => void
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 sm:p-7 bg-white hover:border-navy-300 hover:shadow-sm transition-all duration-200 group">
      {/* Header row */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant={typeColors[pub.category]}>{pub.category}</Badge>
        <span className="text-xs text-slate-400 font-medium">{pub.year}</span>
        <span
          className={`ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full ${
            statusStyle[pub.status] ?? 'bg-slate-100 text-slate-600'
          }`}
        >
          {pub.status}
        </span>
      </div>

      {/* Title */}
      <h4 className="font-serif text-lg font-semibold text-navy-900 mb-1 leading-snug group-hover:text-navy-700 transition-colors">
        {pub.title}
      </h4>

      {/* Authors + Venue */}
      <p className="text-sm text-slate-500 mb-0.5">{pub.authors}</p>
      <p className="text-sm text-gold-600 font-medium mb-4">{pub.venue}</p>

      {/* Abstract */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5">{pub.abstract}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {pub.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {/* APA Citation */}
      <div className="mb-4">
        <button
          onClick={() => setExpandedApa(expandedApa === pub.id ? null : pub.id)}
          className="text-xs text-navy-700 underline underline-offset-2 hover:text-navy-900 transition-colors"
        >
          {expandedApa === pub.id ? 'Hide' : 'Show'} APA citation
        </button>
        {expandedApa === pub.id && (
          <p className="mt-2 text-xs text-slate-600 bg-slate-50 rounded-lg p-3 leading-relaxed font-mono border border-slate-100">
            {pub.apa}
          </p>
        )}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {pub.researchGateUrl && (
          <a
            href={pub.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 hover:text-teal-900 border border-teal-200 hover:border-teal-400 rounded-full px-3 py-1.5 bg-teal-50 transition-all"
          >
            <ExternalLink size={11} />
            View on ResearchGate
          </a>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 border border-blue-200 hover:border-blue-400 rounded-full px-3 py-1.5 bg-blue-50 transition-all"
          >
            <ExternalLink size={11} />
            DOI
          </a>
        )}
      </div>
    </div>
  )
}
