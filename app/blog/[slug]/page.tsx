import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import { getBlogPost, getBlogSlugs } from '@/lib/mdx'
import { Badge } from '@/components/ui/badge'
import { ReadingProgress } from '@/components/ReadingProgress'

const SITE_URL = 'https://fahadkhanresearch.com'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

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
    const url = `${SITE_URL}/blog/${slug}`
    const author = frontmatter.author ?? 'Fahad Bin Islam Khan'
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      keywords: frontmatter.tags,
      authors: [{ name: author }],
      alternates: { canonical: url },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        type: 'article',
        url,
        siteName: 'Fahad Bin Islam Khan | Criminal Justice Research',
        publishedTime: frontmatter.date,
        authors: [author],
        tags: frontmatter.tags,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: frontmatter.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: [OG_IMAGE],
      },
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
  const author = frontmatter.author ?? 'Fahad Bin Islam Khan'
  const url = `${SITE_URL}/blog/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_URL,
      jobTitle: 'Ph.D. Student in Criminal Justice',
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'John Jay College of Criminal Justice, CUNY',
      },
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: OG_IMAGE,
    keywords: frontmatter.tags?.join(', '),
  }

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              {author}
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
      <article className="section-container max-w-4xl py-16" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={frontmatter.title} />
        <meta itemProp="datePublished" content={frontmatter.date} />
        <meta itemProp="author" content={author} />

        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-navy-900
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-navy-700 prose-a:no-underline hover:prose-a:text-gold-600
          prose-strong:text-navy-800
          prose-blockquote:border-l-4 prose-blockquote:border-gold-400 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:text-slate-700 prose-blockquote:not-italic
          prose-ul:text-slate-600
          prose-li:marker:text-gold-500
          prose-code:text-navy-800 prose-code:bg-slate-100
          prose-hr:border-slate-200">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />
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
            <p className="font-semibold text-navy-900 mb-1" itemProp="author">
              {author}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Ph.D. student in Criminal Justice at John Jay College of Criminal Justice,
              City University of New York (CUNY). Research focuses on U.S. drug policy,
              criminal justice systems, comparative criminology, and institutional
              inequality within policing and criminal justice institutions.
            </p>
            <Link href="/about" className="mt-2 inline-flex text-sm text-navy-700 hover:text-gold-600 font-medium transition-colors">
              Read more about Fahad
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
