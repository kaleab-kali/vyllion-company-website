export interface PortfolioProject {
  id: string
  title: string
  description: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  slug: string
  duration: string
  industry: string
  results: string
  image?: string
  gallery?: string[]
  technologies: string[]
  features: string[]
  metrics: ProjectMetric[]
  liveUrl?: string
  demoUrl?: string
  caseStudyUrl?: string
  featured: boolean
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface ProjectMetric {
  label: string
  value: string
  description: string
}

export interface PortfolioCategory {
  id: string
  name: string
  slug: string
  icon: string
  description?: string
}
