"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function TermsPage() {
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

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 mb-6">Last updated: December 2024</p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Vyllion's services, you accept and agree to be bound by the terms and provision
                  of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Vyllion provides luxury technology solutions including but not limited to website development,
                  AI-based ERP systems, custom software development, and business automation services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content, features, and functionality of our services are owned by Vyllion and are protected by
                  international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed">
                  Users are responsible for maintaining the confidentiality of their account information and for all
                  activities that occur under their account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Vyllion shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                  resulting from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at info@vyllion.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
