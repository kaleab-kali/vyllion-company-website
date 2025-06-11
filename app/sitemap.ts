import { MetadataRoute } from 'next'

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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add dynamic portfolio routes
  const portfolioProjects = [
    '/portfolio/luxury-website',
    '/portfolio/ai-erp',
    '/portfolio/custom-software',
    '/portfolio/automation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...portfolioProjects]
} 