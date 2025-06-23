import React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, ArrowRight } from "lucide-react"
import { getPortfolioProjectsByCategory } from "@/lib/data/portfolio-data"

export const metadata = {
  title: "Business Automation Solutions | Vyllion",
  description: "Discover Vyllion's advanced business automation solutions for luxury brands. Explore our automation projects and see how we drive efficiency and innovation.",
  alternates: { canonical: "https://vyllion.com/portfolio/automation" },
}

export default function AutomationPortfolioPage() {
  const projects = getPortfolioProjectsByCategory("automation")
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6">
            <Wrench className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-yellow-400">Business Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Business Automation Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Vyllion delivers advanced automation solutions for luxury brands and enterprises, optimizing workflows, boosting efficiency, and enabling innovation through intelligent technology.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-2 text-center text-gray-400">No automation projects found.</div>
          ) : (
            projects.map((project) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  )
} 