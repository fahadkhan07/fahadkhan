import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import { getBlogPost, getBlogSlugs } from '@/lib/mdx'
import { ReadingProgress } from '@/components/ReadingProgress'

const SITE_URL = 'https://khanfahad.com'
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
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        type: 'article',
        url,
        siteName: 'Fahad Bin Islam Khan | Criminal Justice Research',
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.date,
        authors: [author],
        tags: frontmatter.tags,
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: frontmatter.title }],
        locale: 'en_US',
        section: frontmatter.tags?.[0] ?? 'Criminal Justice',
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: [OG_IMAGE],
        creator: '@FahadBIKhan',
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

  const { frontmatter, content, readingTime, wordCount } = post
  const author = frontmatter.author ?? 'Fahad Bin Islam Khan'
  const url = `${SITE_URL}/blog/${slug}`
  const sectionLabel = frontmatter.tags?.[0]?.toUpperCase() ?? 'RESEARCH'

  const personEntity = {
    '@type': 'Person',
    name: author,
    url: SITE_URL,
    jobTitle: 'Ph.D. Student in Criminal Justice',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'John Jay College of Criminal Justice, CUNY',
    },
    sameAs: [
      'https://scholar.google.com/citations?user=wRjP_1wAAAAJ&hl=en',
      'https://orcid.org/0009-0009-0629-9473',
      'https://www.researchgate.net/profile/Fahad-Bin-Islam-Khan',
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    wordCount,
    articleSection: frontmatter.tags?.[0] ?? 'Criminal Justice',
    keywords: frontmatter.tags?.join(', '),
    inLanguage: 'en-US',
    author: personEntity,
    creator: personEntity,
    publisher: {
      '@type': 'Organization',
      name: 'Fahad Bin Islam Khan | Criminal Justice Research',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: frontmatter.title, item: url },
      ],
    },
    about: frontmatter.tags?.map((tag) => ({ '@type': 'Thing', name: tag })),
  }

  return (
    <div className="blog-editorial min-h-screen">
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Header ── */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 pt-28 pb-10">
        <nav className="editorial-breadcrumb">
          <Link href="/blog">Research Blog</Link>
          {' / '}
          {sectionLabel}
        </nav>

        <h1 className="editorial-title">{frontmatter.title}</h1>

        <p className="editorial-deck">{frontmatter.excerpt}</p>

        <div className="editorial-byline">
          <span className="editorial-byline-author">{author}</span>
          <span>
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>{readingTime}</span>
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className="editorial-layout max-w-[900px] mx-auto px-4 sm:px-6 pb-20">

        {/* Article */}
        <article
          className="prose-editorial"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="headline" content={frontmatter.title} />
          <meta itemProp="datePublished" content={frontmatter.date} />
          <meta itemProp="author" content={author} />
          <MDXRemote
            source={content}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />
        </article>

        {/* Sidebar */}
        <aside className="editorial-sidebar">
          {frontmatter.toc && frontmatter.toc.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-label">Contents</div>
              <ol className="toc-list">
                {frontmatter.toc.map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.anchor}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-label">Topics</div>
              <div className="sidebar-tags">
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className="sidebar-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {frontmatter.citation && (
            <div className="sidebar-section">
              <div className="sidebar-label">Citing this article</div>
              <p className="sidebar-citation">{frontmatter.citation}</p>
            </div>
          )}
        </aside>
      </div>

      {/* ── Author bio ── */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 pb-20">
        <div className="editorial-author-bio">
          <div className="editorial-author-avatar">FK</div>
          <div>
            <p className="editorial-author-name" itemProp="author">{author}</p>
            <p className="editorial-author-desc">
              Ph.D. student in Criminal Justice at John Jay College of Criminal Justice,
              City University of New York (CUNY). Research focuses on U.S. drug policy,
              criminal justice systems, comparative criminology, and institutional
              inequality within policing and criminal justice institutions.
            </p>
            <Link href="/about" className="editorial-author-link">
              Read more about Fahad
            </Link>
          </div>
        </div>

        <div className="editorial-back-link">
          <Link href="/blog" className="editorial-back">
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
