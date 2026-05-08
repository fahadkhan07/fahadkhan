import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPost, getBlogSlugs } from '@/lib/mdx'
import { Badge } from '@/components/ui/badge'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter } = getBlogPost(slug)
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      keywords: frontmatter.tags,
    }
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getBlogPost(slug)
  } catch {
    notFound()
  }

  const { frontmatter, content, readingTime } = post

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy-950 pt-24 pb-16">
        <div className="section-container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {frontmatter.tags?.map((tag) => (
              <Badge key={tag} variant="gold">{tag}</Badge>
            ))}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {frontmatter.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            {frontmatter.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 border-t border-white/10 pt-6">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold text-xs">
                FK
              </div>
              {frontmatter.author ?? 'Fahad Khan'}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {readingTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="section-container max-w-4xl py-16">
        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-navy-900
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-navy-700 prose-a:no-underline hover:prose-a:text-gold-600
          prose-strong:text-navy-800
          prose-blockquote:border-l-gold-400 prose-blockquote:text-slate-600
          prose-code:text-navy-800 prose-code:bg-slate-100
          prose-hr:border-slate-200">
          <MDXRemote source={content} />
        </div>

        {/* Tags footer */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <Tag size={14} className="text-slate-400" />
            {frontmatter.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Author bio */}
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full bg-navy-950 flex items-center justify-center text-gold-400 font-serif font-bold text-xl flex-shrink-0">
            FK
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-1">
              {frontmatter.author ?? 'Fahad Khan'}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Criminal justice scholar and drug policy researcher. M.A. University of Mississippi.
              Incoming PhD student studying U.S. drug policy, sentencing disparities, and criminal
              justice reform.
            </p>
            <Link href="/about" className="mt-2 inline-flex text-sm text-navy-700 hover:text-gold-600 font-medium transition-colors">
              Read more about Fahad →
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-navy-700 hover:text-navy-900 font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </article>
    </div>
  )
}
