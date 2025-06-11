"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Target, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Image src="/vyllion-logo.jpg" alt="Vyllion Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              About Vyllion
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the future of luxury technology solutions with innovation, elegance, and limitless
              possibilities
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To empower luxury brands and enterprises with cutting-edge technology solutions that combine
                    sophistication, innovation, and unparalleled user experiences. We believe in creating digital
                    excellence that reflects the premium nature of our clients' brands.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/30">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in luxury technology solutions, setting new standards for digital innovation
                    and elegance. We envision a future where technology seamlessly integrates with luxury, creating
                    experiences that are both powerful and beautiful.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between luxury and technology, Vyllion emerged from the
                understanding that premium brands deserve technology solutions that match their sophistication and
                elegance.
              </p>
              <p>
                Our journey began when we recognized that traditional technology providers often fell short of
                delivering the refined, high-quality solutions that luxury brands required. We set out to change this
                narrative by combining technical excellence with aesthetic sophistication.
              </p>
              <p>
                Today, Vyllion stands as a testament to what's possible when innovation meets elegance. We've helped
                numerous luxury brands and enterprises transform their digital presence while maintaining the premium
                experience their customers expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "We pursue perfection in every project, ensuring that our solutions exceed expectations and set new industry standards.",
                  icon: "⭐",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace cutting-edge technologies and creative approaches to solve complex challenges and drive progress.",
                  icon: "🚀",
                },
                {
                  title: "Elegance",
                  description:
                    "We believe that powerful technology should also be beautiful, creating solutions that are as aesthetically pleasing as they are functional.",
                  icon: "✨",
                },
                {
                  title: "Integrity",
                  description:
                    "We build trust through transparency, honesty, and ethical practices in all our business relationships.",
                  icon: "🤝",
                },
                {
                  title: "Collaboration",
                  description:
                    "We work closely with our clients as partners, ensuring that every solution is tailored to their unique needs and vision.",
                  icon: "🤝",
                },
                {
                  title: "Sustainability",
                  description:
                    "We are committed to creating solutions that are not only effective today but also sustainable for the future.",
                  icon: "🌱",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Chief Technology Officer",
                  description:
                    "Leading our technical vision with 15+ years of experience in luxury brand technology solutions.",
                },
                {
                  name: "Sarah Williams",
                  role: "Head of Design",
                  description:
                    "Crafting beautiful, user-centric designs that embody the essence of luxury and sophistication.",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Lead Developer",
                  description:
                    "Building robust, scalable solutions with expertise in AI, automation, and enterprise systems.",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary that reflects your brand's luxury and sophistication
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg px-8 py-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
