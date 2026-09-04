import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources & ESX Documentation — Vyllion" },
      { name: "description", content: "Access official ESX compliance matrices, BBO-DEV architecture documentation, vendor eligibility guidelines, and regulatory guides for Ethiopian securities brokers." },
      { property: "og:title", content: "Resources & Regulatory Documentation — Vyllion" },
      { property: "og:description", content: "Compliance matrices, architecture whitepapers, and operational guides for Ethiopian securities brokers." },
      { property: "og:url", content: "https://vyllion.com/resources" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resources & Compliance — Vyllion" },
      { name: "twitter:description", content: "Technical documentation and regulatory matrices for ESX member firms." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/resources" },
    ],
  }),
})

function ResourcesPage() {
  return (
    <div className="bg-[#080C12] min-h-screen pt-32 pb-32">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8B180]/5 blur-[120px] pointer-events-none" />
        
        <div className="animate-fade-up">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8B180] uppercase">
            RESOURCES & ROADMAP
          </span>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl mx-auto max-w-4xl">
            Knowledge is <span className="text-[#3B82F6]">leverage.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-[#94A3B8] max-w-2xl mx-auto">
            Access our exhaustive regulatory mapping against the ESX Vendor Eligibility Guidelines, API documentation, and our upcoming feature roadmap for the Ethiopian capital market.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        
        {/* Documents Section */}
        <div className="border-t border-[#2C384A]/30 pt-24 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">ESX Compliance Matrix</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-8">
              Download the complete, line-by-line mapping of how Vyllion satisfies the ESX BBO/OMS functional, technical, and security requirements (ESXCOOBBO02).
            </p>
            <button className="inline-flex items-center justify-center bg-transparent border border-[#C8B180] text-[#C8B180] hover:bg-[#C8B180] hover:text-[#080C12] font-bold px-8 py-4 tracking-widest uppercase text-[12px] transition-colors">
              Download PDF Report
            </button>
          </div>
          
          <div className="animate-fade-up delay-100">
            <h2 className="text-4xl font-bold text-white mb-6">API Documentation</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-8">
              Comprehensive technical documentation for our REST and GraphQL interfaces, including strict authentication flows, WebSocket subscriptions, and webhook signatures.
            </p>
            <button className="inline-flex items-center justify-center bg-transparent border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#080C12] font-bold px-8 py-4 tracking-widest uppercase text-[12px] transition-colors">
              View Developer Hub
            </button>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="border-t border-[#2C384A]/30 pt-24 animate-fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white">Future Roadmap</h2>
            <p className="mt-6 text-[16px] text-[#94A3B8] max-w-2xl mx-auto">
              Our engineering team is continuously extending the platform to support new asset classes and complex institutional workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            
            <div className="relative pt-6">
              <div className="absolute top-0 left-0 w-12 h-1 bg-[#C8B180]"></div>
              <span className="text-[12px] font-bold text-[#C8B180] uppercase tracking-wider mb-2 block">Q4 2026</span>
              <h3 className="text-2xl font-bold text-white mb-4">Escrow-as-a-Service</h3>
              <p className="text-[16px] leading-relaxed text-[#94A3B8]">
                A fully automated escrow facility allowing institutional brokers to lock client funds cryptographically prior to order placement. This reduces clearing bank counterparty risk and drastically streamlines IPO subscription allocations during high-demand public offerings.
              </p>
            </div>

            <div className="relative pt-6">
              <div className="absolute top-0 left-0 w-12 h-1 bg-[#3B82F6]"></div>
              <span className="text-[12px] font-bold text-[#3B82F6] uppercase tracking-wider mb-2 block">Q1 2027</span>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Risk Analytics</h3>
              <p className="text-[16px] leading-relaxed text-[#94A3B8]">
                Real-time Value at Risk (VaR) calculations and multi-asset margin simulation engines. These tools will empower brokerage risk officers to anticipate capital requirements dynamically before market open, based on live volatility metrics.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
