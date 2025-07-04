"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Brain, Calendar, Users, Zap, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LuxeERPSystem() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add this useEffect after the existing useEffect for scroll handling
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

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
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30 mb-6">
              <Brain className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-yellow-400">AI-Based ERP</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Luxe ERP System
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-driven ERP with intuitive dashboards for a premium retailer, revolutionizing operations with
              intelligent automation and sophisticated analytics.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>8 Months</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-4 h-4 text-yellow-400" />
                <span>Retail Enterprise</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>400% Efficiency Gain</span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg px-8 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Luxe Enterprises required a comprehensive ERP solution that could handle their complex retail
                  operations while providing AI-powered insights for strategic decision-making. We developed a
                  sophisticated system with machine learning capabilities.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The implementation resulted in a 400% increase in operational efficiency, 60% reduction in manual
                  processes, and real-time business intelligence that transformed their decision-making capabilities.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm border border-yellow-400/30">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-yellow-400/60">🧠</div>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              AI-Powered Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Predictive Analytics",
                "Inventory Optimization",
                "Smart Reporting",
                "Real-time Dashboards",
                "Automated Workflows",
                "Machine Learning Insights",
                "Multi-location Management",
                "Advanced Security",
                "API Integrations",
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Technologies Used
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"].map(
                (tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 border border-blue-900/30 rounded-lg p-4 hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <span className="text-white font-medium">{tech}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Results Achieved
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">400%</div>
                  <div className="text-white font-medium">Efficiency Increase</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
                  <div className="text-white font-medium">Process Reduction</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-white font-medium">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Transform Your Business Operations
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven enterprise solutions
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg px-8 py-3">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
