"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, User, Clock, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts, getFeaturedBlogPosts, getBlogCategories } from "@/lib/data/blog-data"
import type { BlogPost } from "@/types/blog"

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const posts = getBlogPosts()
    const featured = getFeaturedBlogPosts()
    setBlogPosts(posts)
    setFeaturedPost(featured[0] || null)
  }, [])

  const categories = getBlogCategories()

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Vyllion Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Insights, trends, and expertise in luxury technology solutions
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-blue-900/50 focus:border-yellow-400 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Featured Article
                </h2>
              </div>

              <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/80 border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden group">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 flex items-center justify-center">
                      <div className="text-6xl text-yellow-400/60">📰</div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">Featured</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Latest Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 flex items-center justify-center">
                    <div className="text-4xl text-yellow-400/60">📝</div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates
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
      </section>
    </div>
  )
}
