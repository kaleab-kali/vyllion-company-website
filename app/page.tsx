"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Star,
  Code,
  Globe,
  Brain,
  Wrench,
  Sparkles,
  ExternalLink,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Youtube,
  Palette,
  Dribbble,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sendContactEmail } from "./actions"
import { getPortfolioProjects } from "@/lib/data/portfolio-data"

export default function VyllionLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [state, setState] = useState<any>(null)
const [isPending, setIsPending] = useState(false)

const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsPending(true);
  const formData = new FormData(event.currentTarget);
  const res = await sendContactEmail(formData);
  setState(res);
  setIsPending(false);
};
  const [isLoaded, setIsLoaded] = useState(false)
  const [portfolioProjects, setPortfolioProjects] = useState<any[]>([])

  useEffect(() => {
    setPortfolioProjects(getPortfolioProjects())
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // 4D Galaxy Dust Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animationId: number

    const scene = {
      dust: [] as Array<{
        x: number
        y: number
        z: number
        vx: number
        vy: number
        vz: number
        size: number
        baseSize: number
        opacity: number
        baseOpacity: number
        color: string
        twinkle: number
        twinkleSpeed: number
      }>,
      stars: [] as Array<{
        x: number
        y: number
        z: number
        size: number
        opacity: number
        twinkle: number
      }>,
      swirls: [] as Array<{
        x: number
        y: number
        radius: number
        angle: number
        speed: number
        opacity: number
        color: string
      }>,
      camera: {
        x: 0,
        y: 0,
        z: 0,
        vx: 0.05,
        vy: 0.03,
        vz: 0.1,
      },
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * 2 * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight * 2}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const generateDustColor = () => {
      const hue = Math.random() > 0.7 ? 45 + Math.random() * 15 : 30 + Math.random() * 15
      const saturation = 70 + Math.random() * 30
      const lightness = 50 + Math.random() * 20
      return `hsla(${hue}, ${saturation}%, ${lightness}%, `
    }

    const generateSwirLColor = () => {
      const hue = Math.random() > 0.7 ? 45 + Math.random() * 15 : 30 + Math.random() * 15
      const saturation = 70 + Math.random() * 30
      const lightness = 50 + Math.random() * 20
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }

    for (let i = 0; i < 150; i++) {
      const z = Math.random() * 1000
      const size = Math.random() * 2 + 0.5
      scene.dust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: -Math.random() * 0.5 - 0.5,
        size: size,
        baseSize: size,
        opacity: Math.random() * 0.5 + 0.1,
        baseOpacity: Math.random() * 0.5 + 0.1,
        color: generateDustColor(),
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.005 + Math.random() * 0.01,
      })
    }

    for (let i = 0; i < 100; i++) {
      scene.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000 + 500,
        size: Math.random() * 1 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      })
    }

    for (let i = 0; i < 3; i++) {
      scene.swirls.push({
        x: canvas.width * (0.3 + Math.random() * 0.4),
        y: canvas.height * (0.3 + Math.random() * 0.4),
        radius: 100 + Math.random() * 200,
        angle: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
        opacity: 0.02 + Math.random() * 0.03,
        color: generateSwirLColor(),
      })
    }

    let time = 0
    const cameraMovement = () => {
      time += 0.005
      scene.camera.x = Math.sin(time * 0.5) * 50
      scene.camera.y = Math.cos(time * 0.3) * 30
      scene.camera.z = Math.sin(time * 0.2) * 100
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      cameraMovement()

      scene.swirls.forEach((swirl) => {
        swirl.angle += swirl.speed
        const gradient = ctx.createRadialGradient(
          swirl.x + scene.camera.x * 0.1,
          swirl.y + scene.camera.y * 0.1,
          0,
          swirl.x + scene.camera.x * 0.1,
          swirl.y + scene.camera.y * 0.1,
          swirl.radius,
        )
        const baseColor = swirl.color.replace("hsl(", "hsla(").replace(")", "")
        gradient.addColorStop(0, `${baseColor}, ${swirl.opacity * 2})`)
        gradient.addColorStop(0.5, `${baseColor}, ${swirl.opacity})`)
        gradient.addColorStop(1, `${baseColor}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(swirl.x + scene.camera.x * 0.1, swirl.y + scene.camera.y * 0.1, swirl.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      scene.stars.forEach((star) => {
        star.twinkle += 0.01
        const twinkleFactor = 0.5 + Math.sin(star.twinkle) * 0.5
        const perspective = 1000
        const scale = perspective / (perspective + star.z - scene.camera.z)
        const x = (star.x - canvas.width / 2) * scale + canvas.width / 2 + scene.camera.x * 0.05
        const y = (star.y - canvas.height / 2) * scale + canvas.height / 2 + scene.camera.y * 0.05

        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkleFactor})`
          ctx.beginPath()
          ctx.arc(x, y, star.size * scale, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      scene.dust.forEach((particle) => {
        particle.x += particle.vx + (mousePosition.x - 0.5) * 0.3
        particle.y += particle.vy + (mousePosition.y - 0.5) * 0.3
        particle.z += particle.vz

        if (particle.z < 1) {
          particle.z = 1000
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }

        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        const perspective = 800
        const scale = perspective / (perspective + particle.z - scene.camera.z)
        const x = (particle.x - canvas.width / 2) * scale + canvas.width / 2 + scene.camera.x * scale * 0.01
        const y = (particle.y - canvas.height / 2) * scale + canvas.height / 2 + scene.camera.y * scale * 0.01

        particle.twinkle += particle.twinkleSpeed
        const twinkleFactor = 0.7 + Math.sin(particle.twinkle) * 0.3
        const size = particle.baseSize * scale * twinkleFactor
        const opacity = particle.baseOpacity * scale * twinkleFactor

        if (x > -size && x < canvas.width + size && y > -size && y < canvas.height + size && opacity > 0.01) {
          ctx.save()
          ctx.globalAlpha = opacity

          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
          glowGradient.addColorStop(0, `${particle.color}${opacity * 0.8})`)
          glowGradient.addColorStop(1, `${particle.color}0)`)

          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(x, y, size * 3, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = `${particle.color}${opacity * 1.5})`
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          ctx.restore()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const scrollToContact = () => {
    scrollToSection("contact")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center z-10">
              <div className="relative w-24 h-24 cursor-pointer group">
                <Image
                  src="/vyllion-logo.png"
                  alt="Vyllion Logo"
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                />
              </div>
            </div>

            <div className="hidden md:block relative">
              <div
                className="bg-slate-900/90 backdrop-blur-md border border-blue-900/30 px-12 py-4 relative"
                style={{
                  clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                  minWidth: "500px",
                }}
              >
                <nav className="flex items-center justify-center space-x-8">
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </div>

            <div className="hidden md:block z-10">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 font-semibold"
              >
                Get Started
              </Button>
            </div>

            <button className="md:hidden text-white z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-blue-900/20 bg-slate-900/90 backdrop-blur-md rounded-lg">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 w-fit"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
      >
        {/* Current background logic - commented out for testing
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-[200vh] pointer-events-none transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 1 }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900/5 to-blue-950/10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            zIndex: 2,
          }}
        />
        */}

        {/* New image background logic - uncomment to test */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/hero-banner.jpg")', // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/20 to-blue-950/30"
          style={{
            zIndex: 2,
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up">
                <Sparkles className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-base font-medium text-white/90">Limitless Tech</span>
              </div>

              <div className="space-y-4">
                <h1
                  className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                >
                  <span className="block text-white drop-shadow-2xl letter-animate">
                    {"VYLLION".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-letter-drop"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: "both",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>
              </div>

              <div className="space-y-3 animate-fade-in-up animation-delay-300">
                <p className="text-lg md:text-xl font-light text-white/90 tracking-wide">
                  {"Redefining Digital Excellence".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-glow"
                      style={{
                        animationDelay: `${1.2 + index * 0.02}s`,
                        animationFillMode: "both",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </p>
                <p className="text-base md:text-lg font-light text-blue-200/80 tracking-wider">
                  {"Through Innovation & Sophistication".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-glow"
                      style={{
                        animationDelay: `${1.8 + index * 0.02}s`,
                        animationFillMode: "both",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </p>
              </div>

              <div className="pt-6 animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-base md:text-lg px-8 md:px-12 py-3 md:py-4 shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 font-semibold rounded-full w-full sm:w-auto"
                  style={{
                    transform: `translateY(${scrollY * 0.03}px) scale(${1 + mousePosition.y * 0.02})`,
                  }}
                >
                  Discover Excellence
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent scroll-reveal"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 300) * 0.05)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 200) / 150)),
              }}
            >
              Our Expertise
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 350) * 0.03)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 250) / 150)),
              }}
            >
              Delivering premium solutions that redefine excellence in technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Luxury Websites",
                description: "Elegant designs for elite brands, delivering unparalleled digital experiences.",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Based ERP",
                description: "Intelligent, scalable solutions to streamline operations with sophistication.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom Software",
                description: "Tailored solutions crafted with precision for unique business needs.",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Business Automation",
                description: "Advanced automation to optimize processes, boost efficiency, and drive growth.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-2 border-blue-900/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-yellow-400/10 group backdrop-blur-sm"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 400 - index * 30) * 0.05)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 300 - index * 20) / 150)),
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 800) * 0.05)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 700) / 150)),
              }}
            >
              Our Portfolio
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 850) * 0.03)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 750) / 150)),
              }}
            >
              Showcasing excellence through innovative solutions for premium brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-yellow-400/20 group backdrop-blur-sm"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 900 - index * 30) * 0.05)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 800 - index * 20) / 150)),
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-400 group-hover:bg-yellow-400/30 transition-colors duration-300">
                        {project.categorySlug === "luxury-website" && <Globe className="w-6 h-6" />}
                        {project.categorySlug === "ai-erp" && <Brain className="w-6 h-6" />}
                        {project.categorySlug === "custom-software" && <Code className="w-6 h-6" />}
                        {project.categorySlug === "automation" && <Wrench className="w-6 h-6" />}
                      </div>
                      <span className="text-sm text-yellow-400 font-medium">{project.category}</span>
                    </div>
                  </div>
                  <div className="h-36 rounded-lg mb-6 overflow-hidden relative">
  {project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
      style={{ zIndex: 1 }}
    />
  )}
  {/* Optional: Overlay for readability */}
  <div className="absolute inset-0 bg-black/30 z-10" />
</div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.excerpt}</p>

                  <div className="flex justify-end">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group/link"
                    >
                      <Globe className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          {/* Add responsive top margin for mobile spacing */}
          <div className="text-center md:mb-16 mt-12 md:mt-0">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              style={typeof window !== "undefined" && window.innerWidth < 768 ? {} : {
                transform: `translateY(${Math.max(0, (scrollY - 1400) * 0.05)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 1300) / 150)),
              }}
            >
              Client Testimonials
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              style={typeof window !== "undefined" && window.innerWidth < 768 ? {} : {
                transform: `translateY(${Math.max(0, (scrollY - 1450) * 0.03)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 1350) / 150)),
              }}
            >
              Trusted by industry leaders who demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                quote: "Vyllion transformed our brand with a stunning, luxurious website that captivates our audience.",
                author: "Elite Fashion Co.",
              },
              {
                quote: "Their AI-based ERP solution revolutionized our operations—efficient and elegant!",
                author: "Luxe Enterprises",
              },
              {
                quote: "Custom software and automation from Vyllion elevated our business to new heights.",
                author: "Premier Tech Group",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-2 border-blue-900/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-yellow-400/10 group backdrop-blur-sm"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1500 - index * 30) * 0.05)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 1400 - index * 20) / 150)),
                }}
              >
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                  <p className="text-yellow-400 font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/30 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your brand with luxury technology solutions?
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-900/50 border-2 border-yellow-400/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <Input
                        name="name"
                        required
                        className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <Input
                        name="company"
                        className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                      <Select name="projectType">
                        <SelectTrigger className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-blue-900/50">
                          <SelectItem value="luxury-website">Luxury Website</SelectItem>
                          <SelectItem value="ai-erp">AI-Based ERP</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="automation">Automation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      required
                      className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {state?.error && (
                    <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                      {state.error}
                    </div>
                  )}

                  {state?.success && (
                    <div className="text-green-400 text-sm bg-green-900/20 p-3 rounded-lg border border-green-900/50">
                      {state.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg py-3 animate-pulse-glow disabled:opacity-50"
                  >
                    {isPending ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Unlock Limitless Tech with Vyllion
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with us to elevate your brand with luxury, elegance, and cutting-edge technology
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-xl px-12 py-4 animate-pulse-glow shadow-2xl hover:shadow-yellow-400/25"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900/80 to-slate-950 border-t border-blue-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 gap-y-12 items-start mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4">
                  <Image src="/vyllion-logo.png" alt="Vyllion Logo" fill className="object-contain" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Vyllion
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Crafting limitless technology solutions with luxury, elegance, and cutting-edge innovation for premium
                brands worldwide.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/vyllion", label: "Twitter" },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: "https://linkedin.com/company/vyllion",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    href: "https://instagram.com/vyllion_tech",
                    label: "Instagram",
                  },
                  { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/vyllion", label: "Facebook" },
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/vyllion", label: "GitHub" },
                  { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@vyllion", label: "YouTube" },
                ].map((social, index) => (
                  <Link key={social.label} href={social.href} className="group relative" aria-label={social.label}  target="_blank">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl flex items-center justify-center text-yellow-400 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-yellow-400/20">
                      {social.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-left w-full">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <nav className="space-y-4">
                {[
                  { label: "Testimonials", action: () => scrollToSection("testimonials") },
                  { label: "Contact", action: () => scrollToSection("contact") },
                  { label: "Blog", href: "/blog" },
                  { label: "About", href: "/about" },
                ].map((link) => (
                  <div key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="text-left w-full">
              <h3 className="text-xl font-bold text-white mb-6">Legal</h3>
              <nav className="space-y-4">
                {[
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Cookie Policy", href: "/cookies" },
                  { label: "Support", href: "/support" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="border-t border-blue-900/20 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest insights on luxury technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vyllion. All rights reserved. Crafting limitless technology solutions with luxury and elegance.
            </p>
          </div>
        </div>
      </footer>
    </div>

  )
}
