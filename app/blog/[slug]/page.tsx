"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Twitter, Linkedin, Facebook, Copy, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/data/blog-data"
import type { BlogPost } from "@/types/blog"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [scrollY, setScrollY] = useState(0)
  const [copied, setCopied] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    const blogPost = getBlogPostBySlug(params.slug)
    if (!blogPost) {
      notFound()
    }
    setPost(blogPost)

    const allPosts = getBlogPosts()
    const related = allPosts.filter((p) => p.category === blogPost.category && p.id !== blogPost.id).slice(0, 3)
    setRelatedPosts(related)
  }, [params.slug])

  const handleShare = async (platform: string) => {
    const url = window.location.href
    const title = post?.title || ""

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "copy":
        try {
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error("Failed to copy URL:", err)
        }
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-900/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
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
              <span className="text-sm font-medium text-yellow-400">{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-gray-400 text-sm">Share:</span>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleShare("twitter")}
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleShare("linkedin")}
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleShare("facebook")}
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleShare("copy")}
                  className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Featured Image */}
                {post.image && (
                  <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-lg mb-8 flex items-center justify-center">
                    <div className="text-6xl text-yellow-400/60">📰</div>
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-invert max-w-none space-y-6">
                  <div
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content
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

                          // Handle lists with styled bullet points
                          if (paragraph.includes("• ")) {
                            const listItems = paragraph
                              .split("• ")
                              .filter((item) => item.trim())
                              .map((item) => `<li class="mb-2 text-gray-300 pl-2">${item.trim()}</li>`)
                              .join("")
                            return `
                              <div class="bg-slate-800/30 border-l-4 border-yellow-400/50 pl-6 py-4 my-4">
                                <ul class="list-none space-y-2">${listItems}</ul>
                              </div>
                            `
                          }

                          // Regular paragraphs
                          return `<p class="mb-4 leading-relaxed text-gray-300">${paragraph}</p>`
                        })
                        .join(""),
                    }}
                  />
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-blue-900/20">
                    <h3 className="text-lg font-medium text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-6">
                  {/* Author Info */}
                  <Card className="bg-slate-900/50 border border-yellow-400/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-white mb-3">About the Author</h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{post.author}</p>
                          <p className="text-sm text-gray-400">Content Creator</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm font-light">
                        Expert in luxury technology solutions and digital innovation.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Table of Contents */}
                  <Card className="bg-slate-900/50 border border-yellow-400/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-white mb-4">Table of Contents</h3>
                      <nav className="space-y-2">
                        {post.content
                          .split("\n")
                          .filter((line) => line.startsWith("#"))
                          .slice(0, 5)
                          .map((heading, index) => {
                            const level = heading.match(/^#+/)?.[0].length || 1
                            const text = heading.replace(/^#+\s/, "")
                            return (
                              <a
                                key={index}
                                href={`#${text.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`block text-sm hover:text-yellow-400 transition-colors duration-300 font-light ${
                                  level === 1
                                    ? "text-white font-normal"
                                    : level === 2
                                      ? "text-gray-300 ml-3"
                                      : "text-gray-400 ml-6"
                                }`}
                              >
                                {text}
                              </a>
                            )
                          })}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-12 text-white">Related Articles</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="bg-slate-900/50 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-800/50 flex items-center justify-center">
                      <div className="text-4xl text-yellow-400/60">📝</div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <span className="text-gray-400 text-xs">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 font-light">
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          Read More
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 text-lg px-8 py-3">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
