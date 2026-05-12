import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export interface TocItem {
  label: string
  anchor: string
}

export interface BlogFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  author?: string
  toc?: TocItem[]
  citation?: string
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
  readingTime: string
  wordCount: number
}

export type BlogMeta = BlogFrontmatter & { slug: string; readingTime: string }

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return []
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))
}

export function getBlogPost(slug: string): BlogPost {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: stats.text,
    wordCount: stats.words,
  }
}

export function getAllBlogPosts(): BlogMeta[] {
  const slugs = getBlogSlugs()
  return slugs
    .map((slug) => {
      const { frontmatter, readingTime } = getBlogPost(slug)
      return { slug, ...frontmatter, readingTime }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
