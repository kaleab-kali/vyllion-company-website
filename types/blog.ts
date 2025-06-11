export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image?: string
  featured: boolean
  slug: string
  tags?: string[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
}
