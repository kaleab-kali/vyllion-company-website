import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState, useCallback } from "react"
import { EscrowFlowVisual } from "@/components/EscrowFlowVisual"

export const Route = createFileRoute("/escrow")({
  component: EscrowPage,
  head: () => ({
    meta: [
      {
        title:
          "Vyllion Escrow — Secure Transaction Guarantee for Ethiopia & Africa",
      },
      {
        name: "description",
        content:
          "Escrow service for Ethiopia and Africa. Hold funds securely, verify conditions, release only when both sides deliver. For e-commerce, real estate, B2B trade, IPO subscriptions, freelance contracts, and diaspora investment.",
      },
      {
        name: "keywords",
        content:
          "escrow Ethiopia, escrow Africa, secure transactions, fraud prevention, marketplace escrow, real estate escrow, payment protection, Vyllion Technologies, Addis Ababa escrow",
      },
      {
        property: "og:title",
        content:
          "Vyllion Escrow — Secure Transaction Guarantee for Ethiopia & Africa",
      },
      {
        property: "og:description",
        content:
          "Hold funds securely. Verify conditions. Release only when both sides deliver. Escrow for e-commerce, real estate, B2B, IPOs, and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com/escrow" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vyllion Escrow — Secure Transactions for Ethiopia & Africa",
      },
      {
        name: "twitter:description",
        content:
          "Escrow that holds funds until conditions are met. For marketplaces, real estate, B2B trade, IPOs, and freelance.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/escrow" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://vyllion.com/escrow#service",
          name: "Vyllion Escrow",
          description:
            "Escrow service for secure transactions in Ethiopia and Africa. Funds are held until deal conditions are verified, then released to the seller or refunded to the buyer.",
          provider: {
            "@type": "Organization",
            name: "Vyllion Technologies",
            url: "https://vyllion.com",
          },
          areaServed: [
            { "@type": "Country", name: "Ethiopia" },
            { "@type": "Continent", name: "Africa" },
          ],
          serviceType: "Financial Escrow",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Escrow Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "E-Commerce Escrow" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Real Estate Escrow" },
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "B2B Trade Escrow" },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IPO Subscription Escrow",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Freelance Contract Escrow",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Diaspora Investment Escrow",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
})

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATION HOOK
   ═══════════════════════════════════════════════════════════════ */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

/* ═══════════════════════════════════════════════════════════════
   USE CASE DATA
   ═══════════════════════════════════════════════════════════════ */
const USE_CASES = [
  {
    icon: "🏢",
    title: "IPO & Primary Market",
    desc: "Investor subscription funds held in escrow until allotment is finalized. Oversubscribed? Automatic pro-rata refunds. Works directly with Vyllion BBO.",
    accent: "#0EA5E9",
  },
  {
    icon: "🏠",
    title: "Real Estate & Property",
    desc: "Buyer deposits purchase price into escrow. Funds release only after the title deed transfer is confirmed by the land authority. No more paying and hoping.",
    accent: "#10B981",
  },
  {
    icon: "🛒",
    title: "E-Commerce & Marketplaces",
    desc: "Integrate Vyllion Escrow into your platform via API. Buyer pays into escrow, receives goods, confirms delivery, funds release to seller. Fraud drops to near zero.",
    accent: "#F59E0B",
  },
  {
    icon: "📦",
    title: "B2B Trade & Supply Chain",
    desc: "Importers and exporters deposit payment into escrow. Goods arrive, quality is verified, then payment releases. Protects both sides of cross-border and domestic trade.",
    accent: "#8B5CF6",
  },
  {
    icon: "💼",
    title: "Freelance & Service Contracts",
    desc: "Client funds the escrow when the contract starts. Freelancer delivers milestones. Each milestone triggers a partial release. No more chasing invoices.",
    accent: "#EC4899",
  },
  {
    icon: "🌍",
    title: "Diaspora Investment",
    desc: "Ethiopians abroad send money home for property, shares, or business deals. Escrow guarantees the asset transfer happens before funds reach the seller.",
    accent: "#14B8A6",
  },
]

const FEATURES = [
  {
    title: "Multi-Party Escrow",
    desc: "Supports two-party and multi-party deals. Multiple buyers, sellers, or intermediaries — each with defined roles and release conditions.",
  },
  {
    title: "Milestone-Based Release",
    desc: "Break large deals into milestones. Release funds incrementally as each phase is completed and verified. Reduces risk for everyone.",
  },
  {
    title: "Dispute Resolution",
    desc: "When buyer and seller disagree, Vyllion provides structured dispute resolution with evidence review, mediation, and fair outcomes.",
  },
  {
    title: "Full Audit Trail",
    desc: "Every action — deposit, claim, evidence submission, release, refund — is recorded with timestamps and hash-chained for tamper-evidence.",
  },
  {
    title: "Bank-Grade Security",
    desc: "Funds held in segregated accounts with licensed banking partners. Your money is never co-mingled. Regulated and auditable.",
  },
  {
    title: "API-First",
    desc: "RESTful API for marketplaces, e-commerce platforms, and fintech apps. Embed escrow into any transaction flow with a few API calls.",
  },
  {
    title: "Ethiopian Calendar & Amharic",
    desc: "Full support for the Ethiopian calendar (13 months), Amharic language, and local payment methods including Telebirr and bank transfers.",
  },
  {
    title: "Multi-Currency & Digital Payments",
    desc: "Seamless settlement in Ethiopian Birr (ETB) and foreign currencies, integrating with commercial bank sweeps, Telebirr, and mobile money.",
  },
]

/* ═══════════════════════════════════════════════════════════════
   MAIN ESCROW PAGE
   ═══════════════════════════════════════════════════════════════ */
function EscrowPage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-svh w-full overflow-x-hidden">
      <HeroSection scrollTo={scrollTo} />
      <TrustProblemSection />
      <HowItWorksSection />
      <UseCasesSection />
      <FeaturesSection />
      <BboSynergySection />
      <EscrowCtaSection />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="escrow-hero"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-24 pb-8 sm:min-h-screen"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/5 blur-[180px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[#0EA5E9]/3 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase">
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"
                  fill="currentColor"
                  opacity="0.3"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              ESCROW SERVICE
            </span>
          </div>

          <h1 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Secure every transaction.{" "}
            <span className="text-[#0EA5E9]">Eliminate fraud.</span>
          </h1>

          <p className="mt-5 max-w-[90%] text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            In Ethiopia and across Africa, trust between buyers and sellers is
            the biggest barrier to commerce. Vyllion Escrow holds funds safely
            and releases them only when both sides deliver on their agreement.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              size="lg"
              className="h-11 rounded-full bg-[#0EA5E9] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/15 hover:bg-[#0EA5E9]/90"
              onClick={() => scrollTo("escrow-cta")}
            >
              Start an Escrow →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-surface-4 px-6 text-sm text-foreground hover:bg-surface-2 hover:text-white"
              onClick={() => scrollTo("how-it-works")}
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="animate-fade-up relative mx-auto mt-6 w-full max-w-7xl px-4 delay-500 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center border-t border-surface-3 pt-6 pb-2">
          <span className="mb-3 text-center text-[9px] font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-[10px]">
            TRUSTED FOR TRANSACTIONS ACROSS
          </span>
          <div className="flex w-full flex-wrap justify-center gap-x-4 gap-y-2.5 text-center text-[9px] font-medium tracking-widest text-foreground/70 uppercase sm:gap-x-6 sm:text-[10px]">
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">🏢</span> IPO &
              SECURITIES
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">🏠</span> REAL ESTATE
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">🛒</span> E-COMMERCE
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">📦</span> B2B TRADE
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">💼</span> FREELANCE
            </span>
            <span className="flex items-center gap-1.5 transition-colors hover:text-[#0EA5E9]">
              <span className="text-[#0EA5E9] opacity-80">🌍</span> DIASPORA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   THE TRUST PROBLEM
   ═══════════════════════════════════════════════════════════════ */
function TrustProblemSection() {
  const { ref, isVisible } = useScrollReveal()

  const problems = [
    {
      stat: "3+ yrs",
      label:
        "Average time to resolve a commercial dispute through Ethiopian courts",
    },
    {
      stat: "Zero",
      label:
        "Chargeback or buyer protection systems available in Ethiopian payments",
    },
    {
      stat: "No",
      label:
        "Institutional escrow infrastructure exists for everyday transactions",
    },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0EA5E9]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            THE PROBLEM
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trust is the missing infrastructure.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            In markets without buyer protection, every transaction is a gamble.
            You pay and hope. You deliver and hope. There is no neutral third
            party, no chargeback, no enforcement. This is the reality for
            millions of transactions across Ethiopia and Africa every day.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-[#2C384A]/50 bg-surface-1 p-8 text-center transition-all duration-700 hover:border-[#0EA5E9]/30`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 150 + 300}ms`,
              }}
            >
              <div className="font-heading text-3xl font-bold text-[#0EA5E9] sm:text-4xl">
                {item.stat}
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#94A3B8]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Five steps. Complete protection.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Every escrow follows the same simple flow. No complexity, no
            ambiguity — just a clear guarantee that both sides are protected.
          </p>
        </div>

        <EscrowFlowVisual />
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   USE CASES
   ═══════════════════════════════════════════════════════════════ */
function UseCasesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            USE CASES
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Escrow for every transaction that matters.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            From IPO subscriptions on the Ethiopian Securities Exchange to a
            freelancer getting paid for their work — Vyllion Escrow adapts to
            any deal structure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((uc, i) => (
            <div
              key={uc.title}
              className="group rounded-2xl border border-[#2C384A]/50 bg-surface-1 p-7 transition-all duration-500 hover:border-[#0EA5E9]/30 hover:bg-surface-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 100 + 200}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 text-2xl">{uc.icon}</span>
                <div>
                  <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-[#0EA5E9]">
                    {uc.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════════════════════════ */
function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for real transactions, not demos.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="rounded-2xl border border-[#2C384A]/40 bg-surface-1/60 p-6 transition-all duration-500 hover:border-[#0EA5E9]/20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80 + 200}ms`,
              }}
            >
              <h3 className="mb-2 text-sm font-bold text-white">
                {feat.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   BBO SYNERGY
   ═══════════════════════════════════════════════════════════════ */
function BboSynergySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-1/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-center gap-16 transition-all duration-700 lg:grid-cols-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {/* Left: text */}
          <div>
            <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
              TWO PRODUCTS, ONE PLATFORM
            </span>
            <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
              Escrow + BBO.{" "}
              <span className="text-gold">Stronger together.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#94A3B8]">
              Vyllion's Broker Back Office manages client onboarding, order
              routing, settlement, and accounting for securities brokers. Escrow
              adds the trust guarantee layer — particularly for IPO
              subscriptions and OTC share transfers where buyer and seller need
              protection before settlement finalizes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  label: "IPO Subscriptions",
                  desc: "Investor funds held in escrow until allotment is complete. Auto-refund on oversubscription.",
                },
                {
                  label: "OTC Share Transfers",
                  desc: "Off-exchange trades between parties use escrow for delivery-versus-payment safety.",
                },
                {
                  label: "Settlement Guarantees",
                  desc: "Pre-fund settlement obligations in escrow to eliminate counterparty default risk.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                  <div>
                    <span className="text-sm font-bold text-white">
                      {item.label}
                    </span>
                    <p className="mt-0.5 text-[13px] text-[#94A3B8]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/">
                <Button
                  variant="outline"
                  className="h-10 rounded-full border-gold/40 px-6 text-sm font-semibold text-gold hover:bg-gold/10"
                >
                  Explore Vyllion BBO →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="rounded-2xl border border-[#2C384A]/50 bg-surface-1 p-8">
              {/* BBO block */}
              <div className="mb-4 rounded-xl border border-gold/30 bg-gold/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/20 text-sm font-bold text-gold">
                    B
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gold">
                      Vyllion BBO
                    </div>
                    <div className="text-[10px] tracking-wider text-[#94A3B8] uppercase">
                      Broker Back Office
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Client KYC",
                    "Order Mgmt",
                    "Risk Limits",
                    "FIX 4.4",
                    "Settlement",
                    "Accounting",
                  ].map((m) => (
                    <span
                      key={m}
                      className="rounded bg-gold/10 px-2 py-0.5 font-mono text-[10px] text-gold/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connection arrows */}
              <div className="flex items-center justify-center gap-2 py-2 text-[#94A3B8]">
                <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-[#0EA5E9]/30" />
                <span className="font-mono text-[10px] tracking-wider">
                  INTEGRATED
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#0EA5E9]/30 to-gold/30" />
              </div>

              {/* Escrow block */}
              <div className="rounded-xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0EA5E9]/20 text-sm font-bold text-[#0EA5E9]">
                    E
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0EA5E9]">
                      Vyllion Escrow
                    </div>
                    <div className="text-[10px] tracking-wider text-[#94A3B8] uppercase">
                      Escrow Service
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Deal Terms",
                    "Fund Hold",
                    "Verification",
                    "Release",
                    "Disputes",
                    "Audit",
                  ].map((m) => (
                    <span
                      key={m}
                      className="rounded bg-[#0EA5E9]/10 px-2 py-0.5 font-mono text-[10px] text-[#0EA5E9]/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════════════ */
function EscrowCtaSection() {
  const { ref, isVisible } = useScrollReveal()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    useCase: "E-Commerce / Marketplace",
    notes: "",
  })
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const mailtoFallbackUrl = `mailto:contact@vyllion.com?subject=${encodeURIComponent("Escrow Service Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nUse Case: ${formData.useCase}\nNotes: ${formData.notes}`)}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const honeypot = form.querySelector<HTMLInputElement>(
      'input[name="botcheck"]'
    )
    if (honeypot?.checked) return

    setStatus("submitting")
    setErrorMessage("")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: (import.meta as any).env?.VITE_WEB3FORMS_KEY || "",
          subject: `Vyllion Escrow Inquiry — ${formData.company || formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        throw new Error("Submission failed")
      }
    } catch {
      setStatus("error")
      setErrorMessage(
        "Could not submit the form. Please try the email link below or contact us directly at contact@vyllion.com"
      )
    }
  }

  return (
    <section id="escrow-cta" ref={ref} className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/5 blur-[180px]" />

      <div
        className={`relative mx-auto max-w-3xl px-4 text-center transition-all duration-700 sm:px-6 lg:px-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
          GET STARTED
        </span>
        <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Secure your transactions with Vyllion Escrow.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#94A3B8]">
          Tell us about your use case. Whether you're a marketplace, broker, or
          business — we'll show you how escrow eliminates fraud from your
          transaction flow.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-[#0EA5E9]/40 bg-[#0EA5E9]/10 p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0EA5E9]/20 text-2xl font-bold text-[#0EA5E9]">
              ✓
            </div>
            <h3 className="text-lg font-bold text-white">Request Received</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thank you, {formData.name || "partner"}. Our team will follow up
              within 24 business hours.
            </p>
            <div className="mt-6 border-t border-[#0EA5E9]/20 pt-4 font-mono text-xs text-[#0EA5E9]">
              Direct:{" "}
              <a
                href="mailto:contact@vyllion.com"
                className="underline hover:text-white"
              >
                contact@vyllion.com
              </a>{" "}
              • Addis Ababa, Ethiopia
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-xl space-y-4 text-left"
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {status === "error" && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-xs text-red-200">
                <p className="mb-1 font-semibold">Notice:</p>
                <p>{errorMessage}</p>
                <div className="mt-3">
                  <a
                    href={mailtoFallbackUrl}
                    className="inline-flex items-center gap-1.5 font-mono text-[#0EA5E9] underline hover:text-white"
                  >
                    Click here to email us directly →
                  </a>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  disabled={status === "submitting"}
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Company / Platform
                </label>
                <input
                  type="text"
                  required
                  disabled={status === "submitting"}
                  placeholder="e.g. Your marketplace or business"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  disabled={status === "submitting"}
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Phone / Telegram
                </label>
                <input
                  type="tel"
                  required
                  disabled={status === "submitting"}
                  placeholder="+251 9..."
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                Use Case
              </label>
              <select
                disabled={status === "submitting"}
                value={formData.useCase}
                onChange={(e) =>
                  setFormData({ ...formData, useCase: e.target.value })
                }
                className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
              >
                <option value="E-Commerce / Marketplace">
                  E-Commerce / Marketplace
                </option>
                <option value="Real Estate / Property">
                  Real Estate / Property
                </option>
                <option value="B2B Trade / Supply Chain">
                  B2B Trade / Supply Chain
                </option>
                <option value="IPO / Securities">IPO / Securities</option>
                <option value="Freelance / Service Contracts">
                  Freelance / Service Contracts
                </option>
                <option value="Diaspora Investment">Diaspora Investment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                Notes{" "}
                <span className="text-muted-foreground/50">(Optional)</span>
              </label>
              <textarea
                rows={2}
                disabled={status === "submitting"}
                placeholder="Tell us about your transaction flow..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-[#0EA5E9] focus:outline-none disabled:opacity-60"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] py-6 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-[#0EA5E9]/15 hover:bg-[#0EA5E9]/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending Request...
                  </>
                ) : (
                  "Request Escrow Consultation →"
                )}
              </Button>
            </div>

            <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground/70">
              Confidential. We respond within 24 hours. Addis Ababa, Ethiopia.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
