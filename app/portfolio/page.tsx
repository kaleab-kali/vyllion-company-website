import React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getPortfolioProjects } from "@/lib/data/portfolio-data"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Portfolio | Vyllion",
  description: "Explore Vyllion's portfolio of luxury technology solutions, including websites, AI-based ERP, custom software, and automation projects for elite brands.",
  alternates: { canonical: "https://vyllion.com/portfolio" },
}

export default function PortfolioPage() {
  const projects = getPortfolioProjects()
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover our work for luxury brands: websites, AI-based ERP, custom software, and automation solutions.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-slate-900/60 border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.excerpt}</p>
                <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium">
                  View Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 