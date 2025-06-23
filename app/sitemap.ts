import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/data/portfolio-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vyllion.com'
  
  // Define your static routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/portfolio',
    '/privacy',
    '/terms',
    '/contact',
    '/cookies',
    '/support',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add dynamic portfolio project routes
  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...portfolioRoutes]
} 