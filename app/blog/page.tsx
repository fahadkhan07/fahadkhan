import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/AnimatedSection'
import { Badge } from '@/components/ui/badge'
import { getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Criminal Justice Blog | Drug Policy, Policing & Sentencing Research',
  description:
    'Academic commentary and original analysis on U.S. drug policy, criminal justice reform, policing, sentencing disparities, and criminological research by Fahad Bin Islam Khan, Ph.D. student at John Jay College of Criminal Justice.',
  keywords: [
    'criminal justice blog',
    'drug policy research',
    'U.S. drug policy',
    'policing research',
    'sentencing disparities',
    'criminal justice reform',
    'criminology blog',
    'drug enforcement policy',
    'institutional theory policing',
    'women in policing',
    'marijuana legalization',
    'Fahad Bin Islam Khan',
    'John Jay College of Criminal Justice',
  ],
  alternates: { canonical: 'https://fahadkhanresearch.com/blog' },
  openGraph: {
    title: 'Criminal Justice Blog | Drug Policy & Policing Research — Fahad Bin Islam Khan',
    description:
      'Academic commentary on U.S. drug policy, criminal justice reform, policing, and sentencing disparities by a Ph.D. researcher at John Jay College of Criminal Justice, CUNY.',
    url: 'https://fahadkhanresearch.com/blog',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Policy analysis, scholarly commentary, and critical perspectives on U.S. drug policy and criminal justice."
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          {posts.length === 0 ? (
            <AnimatedSection className="text-center py-20">
              <p className="text-slate-400 text-lg">Posts coming soon.</p>
            </AnimatedSection>
          ) : (
            <>
              <AnimatedSection className="mb-12">
                <div className="gold-rule mb-6" />
                <h2 className="heading-md text-navy-900">All Posts</h2>
                <p className="text-slate-500 mt-2">{posts.length} articles</p>
              </AnimatedSection>

              <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <AnimatedItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="h-full border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-navy-400 hover:shadow-md transition-all duration-300">
                        {/* Color bar */}
                        <div className="h-1 bg-gradient-to-r from-navy-800 to-gold-400" />
                        <div className="p-7">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags?.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="gold">{tag}</Badge>
                            ))}
                          </div>

                          {/* Title */}
                          <h2 className="font-serif text-lg font-semibold text-navy-900 mb-3 leading-snug group-hover:text-navy-700 transition-colors">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta + CTA */}
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Calendar size={11} />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} />
                                {post.readingTime}
                              </span>
                            </div>
                            <span className="flex items-center gap-1 text-navy-700 font-medium group-hover:gap-2 transition-all">
                              Read
                              <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </AnimatedItem>
                ))}
              </AnimatedStagger>
            </>
          )}
        </div>
      </section>
    </>
  )
}
