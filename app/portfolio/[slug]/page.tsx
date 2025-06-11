"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Users,
  Zap,
  CheckCircle,
  ExternalLink,
  Globe,
  Eye,
  Code,
  Wrench,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPortfolioProjectBySlug, getPortfolioProjects } from "@/lib/data/portfolio-data"
import type { PortfolioProject } from "@/types/portfolio"
import { notFound } from "next/navigation"

interface PortfolioProjectPageProps {
  params: {
    slug: string
  }
}

export default function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const [scrollY, setScrollY] = useState(0)
  const [project, setProject] = useState<PortfolioProject | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<PortfolioProject[]>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    const portfolioProject = getPortfolioProjectBySlug(params.slug)
    if (!portfolioProject) {
      notFound()
    }
    setProject(portfolioProject)

    const allProjects = getPortfolioProjects()
    const related = allProjects
      .filter((p) => p.categorySlug === portfolioProject.categorySlug && p.id !== portfolioProject.id)
      .slice(0, 3)
    setRelatedProjects(related)
  }, [params.slug])

  if (!project) {
    return <div>Loading...</div>
  }

  const getCategoryIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case "luxury-website":
        return <Globe className="w-4 h-4" />
      case "ai-erp":
        return <Zap className="w-4 h-4" />
      case "custom-software":
        return <Code className="w-4 h-4" />
      case "automation":
        return <Wrench className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="relative w-10 h-10">
              <Image src="/vyllion-logo.png" alt="Vyllion Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6">
              {getCategoryIcon(project.categorySlug)}
              <span className="text-sm font-medium text-yellow-400 ml-2">{project.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{project.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{project.industry}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{project.results}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 px-6 py-2">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  variant="outline"
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 px-6 py-2"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Project Overview</h2>

                {/* Project Image */}
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/30 mb-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-yellow-400/60">
                      {project.categorySlug === "luxury-website"
                        ? "🎨"
                        : project.categorySlug === "ai-erp"
                          ? "🧠"
                          : project.categorySlug === "custom-software"
                            ? "💼"
                            : project.categorySlug === "automation"
                              ? "⚡"
                              : "🎨"}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="prose prose-invert max-w-none space-y-6">
                  <div
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: project.content
                        .split("\n\n")
                        .map((paragraph) => {
                          // Handle headers with card styling
                          if (paragraph.startsWith("## ")) {
                            const title = paragraph.substring(3)
                            return `
                              <div class="bg-slate-800/50 border border-yellow-400/30 rounded-lg p-6 my-6">
                                <h2 class="text-lg font-medium text-yellow-400 mb-4">${title}</h2>
                              </div>
                            `
                          }

                          // Handle lists with bullet points
                          if (paragraph.includes("• ")) {
                            const listItems = paragraph
                              .split("• ")
                              .filter((item) => item.trim())
                              .map((item) => `<li class="mb-2 text-gray-300">${item.trim()}</li>`)
                              .join("")
                            return `<ul class="list-none space-y-2 ml-4 mb-4">${listItems}</ul>`
                          }

                          // Regular paragraphs
                          return `<p class="mb-4 leading-relaxed text-gray-300">${paragraph}</p>`
                        })
                        .join(""),
                    }}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Project Results */}
                  <Card className="bg-slate-900/50 border border-yellow-400/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Project Results</h3>
                      <div className="space-y-4">
                        {project.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-1">{metric.value}</div>
                            <div className="text-white font-medium text-sm mb-1">{metric.label}</div>
                            <div className="text-gray-400 text-xs">{metric.description}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technologies */}
                  <Card className="bg-slate-900/50 border border-yellow-400/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Details */}
                  <Card className="bg-slate-900/50 border border-yellow-400/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-400 text-sm">Duration:</span>
                          <p className="text-white font-medium">{project.duration}</p>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Industry:</span>
                          <p className="text-white font-medium">{project.industry}</p>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">Category:</span>
                          <p className="text-white font-medium">{project.category}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-12 text-white">Key Features Delivered</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white font-normal text-sm">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-12 text-white">Related Projects</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Card
                    key={relatedProject.id}
                    className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 flex items-center justify-center">
                      <div className="text-4xl text-yellow-400/60">
                        {relatedProject.categorySlug === "luxury-website"
                          ? "🎨"
                          : relatedProject.categorySlug === "ai-erp"
                            ? "🧠"
                            : relatedProject.categorySlug === "custom-software"
                              ? "💼"
                              : relatedProject.categorySlug === "automation"
                                ? "⚡"
                                : "🎨"}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium">
                          {relatedProject.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 font-light">
                        {relatedProject.excerpt}
                      </p>
                      <Link href={`/portfolio/${relatedProject.slug}`}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          View Project
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">Ready for Your Own Success Story?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Let's create something extraordinary for your brand
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg px-8 py-3">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
