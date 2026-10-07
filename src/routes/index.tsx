import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState, useCallback } from "react"
import { EscrowFlowVisual } from "@/components/EscrowFlowVisual"

export const Route = createFileRoute("/")({
  component: EscrowHomePage,
  head: () => ({
    meta: [
      {
        title: "Vyllion — Ethiopia's First Digital Escrow Platform",
      },
      {
        name: "description",
        content:
          "Vyllion Escrow eliminates transaction fraud in Ethiopia and Africa. Buyer funds are securely held in segregated partner commercial bank accounts and released only when verified delivery conditions are met.",
      },
      {
        name: "keywords",
        content:
          "Vyllion Escrow, Escrow Ethiopia, Digital Escrow Africa, Secure Transactions Addis Ababa, Fraud Prevention, Bank Escrow, E-Commerce Escrow Ethiopia, Real Estate Escrow",
      },
      {
        property: "og:title",
        content: "Vyllion — Ethiopia's First Digital Escrow Platform",
      },
      {
        property: "og:description",
        content:
          "Eliminate transaction risk with bank-segregated digital escrow. For e-commerce, real estate, B2B trade, and freelance contracts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vyllion — Digital Escrow Platform for Ethiopia & Africa",
      },
      {
        name: "twitter:description",
        content:
          "Bank-segregated digital escrow eliminating fraud across Ethiopian commerce.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://vyllion.com/#service",
              name: "Vyllion Digital Escrow Platform",
              serviceType: "Digital Escrow",
              provider: {
                "@type": "Organization",
                name: "Vyllion Technologies PLC",
                url: "https://vyllion.com",
              },
              areaServed: [
                { "@type": "Country", name: "Ethiopia" },
                { "@type": "Continent", name: "Africa" },
              ],
              description:
                "Institutional digital escrow infrastructure securing transactions in Ethiopia through partner commercial bank segregated custody and programmable milestone payouts.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Escrow Protection Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Commerce & Marketplace Escrow",
                      description:
                        "Eliminates delivery scams on Telegram, TikTok, and online shops.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate & Construction Escrow",
                      description:
                        "Protects property deposits and progressive construction milestones.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Vehicle & Machinery Escrow",
                      description:
                        "Automotive purchases with mechanical inspection windows.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "B2B Agriculture & Wholesale Escrow",
                      description:
                        "Secures bulk coffee, grain, and industrial supply trade.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Freelance & Service Contract Escrow",
                      description:
                        "Milestone-based payouts for software engineering and creative contracts.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diaspora Remittance & Investment Escrow",
                      description:
                        "Enables Ethiopians abroad to fund verified family projects safely.",
                    },
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://vyllion.com/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Vyllion Escrow?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vyllion is Ethiopia's digital escrow platform founded in 2025 in Addis Ababa. It eliminates fraud by holding buyer funds in segregated commercial bank accounts until contractual delivery milestones are verified.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where are escrow funds held?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "All escrow funds are held in segregated custodial accounts with licensed partner commercial banks in Ethiopia. Vyllion never co-mingles client funds with operating capital.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who founded Vyllion and who leads the team?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vyllion Technologies PLC was founded in 2025 in Addis Ababa. The executive leadership team includes CEO Kaleab Girma, CTO Ezana Tegener, and CFO Selam Bruke.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Vyllion's current operational status?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vyllion is currently in active Phase 1 testing and operational integration with partner commercial banks in Ethiopia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the milestone release process work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Both parties agree on terms and inspection conditions. The buyer deposits funds into bank escrow. The seller delivers goods or completes a milestone. The buyer inspects and approves within the inspection window, triggering instant payment release to the seller.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
})

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

const USE_CASES = [
  {
    icon: "🛒",
    title: "E-Commerce & Marketplaces",
    desc: "Online and Telegram/TikTok sellers no longer worry about failed deliveries. Buyer deposits into escrow, verifies items upon arrival, and payment is immediately released to the merchant.",
    accent: "#0EA5E9",
  },
  {
    icon: "🏠",
    title: "Real Estate & Construction",
    desc: "Buyer deposits down payment into bank custody. Funds are released strictly when title deed ownership transfers or certified construction milestones are verified.",
    accent: "#38BDF8",
  },
  {
    icon: "🚗",
    title: "Vehicles & Heavy Equipment",
    desc: "Car buyers lock payment in escrow with an agreed mechanical inspection window. Walk away safe if inspection fails or release payment instantly if clear.",
    accent: "#0284C7",
  },
  {
    icon: "📦",
    title: "B2B Trade & Agriculture",
    desc: "Wholesale coffee, grain, and industrial supply transactions. Importers and domestic buyers inspect quality and weight before funds disburse to suppliers.",
    accent: "#0EA5E9",
  },
  {
    icon: "💼",
    title: "Freelance & Tech Services",
    desc: "Software engineering, branding, and design milestones. Client funds the milestone before work begins; freelancer delivers with guaranteed payment upon acceptance.",
    accent: "#38BDF8",
  },
  {
    icon: "🌍",
    title: "Diaspora Investments",
    desc: "Ethiopians abroad funding home building, land purchases, or business investments back home. Every Birr is tied to verifiable milestone proofs.",
    accent: "#0284C7",
  },
]

const TEAM_PREVIEW = [
  {
    name: "Kaleab Girma",
    role: "Chief Executive Officer (CEO)",
    initials: "KG",
    bio: "Leads strategic execution, banking partner integrations, and regulatory alignment for Vyllion.",
  },
  {
    name: "Ezana Tegener",
    role: "Chief Technology Officer (CTO)",
    initials: "ET",
    bio: "Architect of Vyllion's bank-grade transaction isolation, multi-party condition engine, and APIs.",
  },
  {
    name: "Selam Bruke",
    role: "Chief Financial Officer (CFO)",
    initials: "SB",
    bio: "Directs financial governance, segregated custodial account audits, and bank settlement workflows.",
  },
]

function EscrowHomePage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }

    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-[#080C12]">
      <HeroSection scrollTo={scrollTo} />
      <TrustProblemSection />
      <HowItWorksSection />
      <UseCasesSection />
      <BankPartnershipSection />
      <ApiSection />
      <TeamTeaserSection />
      <EscrowContactSection />
    </div>
  )
}

function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-28 pb-16 sm:min-h-screen"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/8 blur-[180px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#0EA5E9]" />
              ESTABLISHED 2025 • ADDIS ABABA • PHASE 1 BANK TESTING
            </span>
          </div>

          <h1 className="font-heading text-3xl leading-tight font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transact with complete confidence.{" "}
            <span className="text-[#0EA5E9]">Eliminate fraud.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Trust is the biggest hurdle to commerce in Ethiopia. Vyllion Escrow
            holds buyer funds in segregated partner commercial bank accounts and
            releases them strictly when verified contractual milestones and
            delivery conditions are satisfied.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-full bg-[#0EA5E9] px-8 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90"
              onClick={() => scrollTo("contact")}
            >
              Start an Escrow →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[#2C384A] px-8 text-sm text-white hover:bg-[#1E293B]"
              onClick={() => scrollTo("how-it-works")}
            >
              How It Works
            </Button>
            <Link to="/about">
              <Button
                size="lg"
                variant="ghost"
                className="h-12 rounded-full px-6 text-sm text-[#94A3B8] hover:text-white"
              >
                About Our Team
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature pillars bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#2C384A]/40 pt-8 sm:grid-cols-4">
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold tracking-wider text-[#0EA5E9] uppercase">
              CUSTODY
            </div>
            <div className="text-sm font-bold text-white">Bank Segregated</div>
            <p className="text-xs text-[#64748B]">
              Zero commingling of customer funds
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold tracking-wider text-[#0EA5E9] uppercase">
              STATUS
            </div>
            <div className="text-sm font-bold text-white">Phase 1 Testing</div>
            <p className="text-xs text-[#64748B]">
              Active integration with partner banks
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold tracking-wider text-[#0EA5E9] uppercase">
              SETTLEMENT
            </div>
            <div className="text-sm font-bold text-white">
              Milestone Releases
            </div>
            <p className="text-xs text-[#64748B]">
              Automated conditional payouts
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold tracking-wider text-[#0EA5E9] uppercase">
              SECURITY
            </div>
            <div className="text-sm font-bold text-white">
              Dispute Arbitration
            </div>
            <p className="text-xs text-[#64748B]">
              Neutral verification & resolution
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustProblemSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative border-t border-[#2C384A]/30 bg-[#0A0E17] py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            THE TRUST CRISIS IN ETHIOPIA
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why commerce in Ethiopia gets stuck
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            Digital payments made money transfer fast, but introduced a severe
            trust dilemma: who takes the first risk?
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Traditional risk */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-8">
            <div className="mb-4 flex items-center gap-3 text-lg font-bold text-red-400">
              <span>✕</span> The Broken Reality (Without Escrow)
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-[#94A3B8]">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">•</span>
                <span>
                  <strong>Buyers fear paying upfront:</strong> Sending money on
                  Telebirr or CBE Birr leaves zero recourse if goods never
                  arrive or are counterfeit.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">•</span>
                <span>
                  <strong>Sellers fear delivering before payment:</strong>{" "}
                  Dispatching goods on credit leads to unpaid invoices,
                  ghosting, and cash-flow collapse.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-red-400">•</span>
                <span>
                  <strong>Disputes take years:</strong> Ethiopian commercial
                  courts require significant legal expense and 2-3+ years to
                  resolve minor contract breaches.
                </span>
              </li>
            </ul>
          </div>

          {/* Vyllion Escrow */}
          <div className="rounded-2xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/5 p-8">
            <div className="mb-4 flex items-center gap-3 text-lg font-bold text-[#0EA5E9]">
              <span>✓</span> The Vyllion Guarantee (With Digital Escrow)
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-[#94A3B8]">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#0EA5E9]">•</span>
                <span>
                  <strong>Funds ring-fenced in bank custody:</strong> Buyer
                  money is safely held in a segregated partner bank account
                  before the seller dispatches.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#0EA5E9]">•</span>
                <span>
                  <strong>Guaranteed payment to seller:</strong> Once milestones
                  or delivery proofs are confirmed, payment disburses
                  automatically without delays.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#0EA5E9]">•</span>
                <span>
                  <strong>Fair neutral arbitration:</strong> Any dispute is
                  reviewed by neutral terms and objective documentation within
                  days, not years.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative border-t border-[#2C384A]/30 py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            5 steps to fraud-proof transactions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            A transparent and verifiable escrow process engineered for
            high-value commerce and digital trade.
          </p>
        </div>

        <EscrowFlowVisual />
      </div>
    </section>
  )
}

function UseCasesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="use-cases"
      ref={ref}
      className="relative border-t border-[#2C384A]/30 bg-[#0A0E17] py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            HIGH-IMPACT APPLICATIONS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for every high-value deal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            From Telegram marketplaces to multi-million Birr property deposits,
            Vyllion provides the neutral safeguard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-[#2C384A]/50 bg-[#0F141E] p-8 transition-all hover:border-[#0EA5E9]/50 hover:bg-[#111827]"
            >
              <div className="mb-4 text-3xl">{uc.icon}</div>
              <h3 className="font-heading text-lg font-bold text-white">
                {uc.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BankPartnershipSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="security"
      ref={ref}
      className="relative border-t border-[#2C384A]/30 py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            COMMERCIAL BANK CUSTODY
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Working closely with partner banks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            Vyllion never holds client funds on unregulated operational
            balances. All escrow funds sit in segregated custodial accounts with
            licensed commercial banks in Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#2C384A]/50 bg-[#0F141E] p-8 text-center">
            <div className="mb-4 text-3xl">🏛️</div>
            <h3 className="font-heading text-lg font-bold text-white">
              Segregated Custody
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Every escrow transaction is isolated in an individual or
              segregated custodial account with commercial banks.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2C384A]/50 bg-[#0F141E] p-8 text-center">
            <div className="mb-4 text-3xl">🧪</div>
            <h3 className="font-heading text-lg font-bold text-white">
              Active Phase 1 Testing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Currently testing operational bank sweep mechanisms, automated
              multi-sign releases, and real-time reconciliation.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2C384A]/50 bg-[#0F141E] p-8 text-center">
            <div className="mb-4 text-3xl">🛡️</div>
            <h3 className="font-heading text-lg font-bold text-white">
              NBE Compliance
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              Architected to conform strictly with National Bank of Ethiopia
              financial directives and AML transaction monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApiSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="api"
      ref={ref}
      className="relative border-t border-[#2C384A]/30 bg-[#080C12] py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            DEVELOPER API &amp; INTEGRATIONS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Embed escrow directly into your application
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            RESTful endpoints and webhooks designed for Ethiopian e-commerce
            apps, marketplace platforms, and enterprise ERP systems.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-[#2C384A]/60 bg-[#0B1220] p-6 shadow-2xl sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-[#2C384A]/40 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-[#64748B]">
                POST /v1/escrow/transactions
              </span>
            </div>
            <span className="rounded-full border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 px-3 py-1 font-mono text-[11px] text-[#0EA5E9]">
              API Sandbox Ready
            </span>
          </div>

          <pre className="overflow-x-auto rounded-xl bg-[#080C12] p-5 font-mono text-xs leading-relaxed text-[#E2E8F0] sm:text-sm">
            {`curl -X POST https://api.vyllion.com/v1/escrow/transactions \\
  -H "Authorization: Bearer sec_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "buyer": { "phone": "+251911234567", "name": "Abebe Bikila" },
    "seller": { "phone": "+251922345678", "name": "Addis Market PLC" },
    "currency": "ETB",
    "amount": 150000.00,
    "milestones": [
      { "id": "ms_01", "name": "Warehouse Inspection", "release_pct": 50 },
      { "id": "ms_02", "name": "Final Dispatch Delivery", "release_pct": 50 }
    ],
    "dispute_window_hours": 72
  }'`}
          </pre>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#2C384A]/40 pt-4 text-left sm:grid-cols-3">
            <div>
              <div className="font-mono text-xs text-[#0EA5E9] uppercase">
                Webhooks
              </div>
              <p className="mt-1 text-xs text-[#94A3B8]">
                Instant webhook alerts on payment funded, inspected, and
                released.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#0EA5E9] uppercase">
                SDK Libraries
              </div>
              <p className="mt-1 text-xs text-[#94A3B8]">
                TypeScript, Python, and Go client libraries for rapid checkout
                integration.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs text-[#0EA5E9] uppercase">
                Telebirr &amp; Banks
              </div>
              <p className="mt-1 text-xs text-[#94A3B8]">
                Native settlement routing into commercial bank accounts and
                mobile wallets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamTeaserSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative border-t border-[#2C384A]/30 bg-[#0A0E17] py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            LEADERSHIP &amp; FOUNDING TEAM
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Founded in 2025 in Addis Ababa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            Built by engineers and financial operators committed to solving the
            trust crisis in African commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TEAM_PREVIEW.map((m) => (
            <div
              key={m.name}
              className="flex flex-col justify-between rounded-2xl border border-[#2C384A]/60 bg-[#0F141E] p-8"
            >
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-base font-bold text-white">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {m.name}
                    </h3>
                    <p className="font-mono text-xs text-[#0EA5E9]">{m.role}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#0EA5E9]/40 text-white hover:bg-[#0EA5E9]/10"
            >
              Read More About Vyllion &amp; Our Story →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function EscrowContactSection() {
  const { ref, isVisible } = useScrollReveal()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    useCase: "E-Commerce",
    notes: "",
  })
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const mailtoFallbackUrl = `mailto:contact@vyllion.com?subject=${encodeURIComponent("Escrow Service Request")}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nUse Case: ${formData.useCase}\nNotes: ${formData.notes}`
  )}`

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
          subject: `Vyllion Escrow Request — ${formData.company || formData.name}`,
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
        "Could not submit form online. Please email us directly at contact@vyllion.com"
      )
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative border-t border-[#2C384A]/30 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/5 blur-[180px]" />

      <div
        className={`relative mx-auto max-w-3xl px-4 text-center transition-all duration-700 sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
          REQUEST AN ESCROW
        </span>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Start your secure transaction today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#94A3B8]">
          Tell us about your transaction. Whether you are an individual,
          business, or marketplace platform, we will structure the right escrow
          protection for you.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-[#0EA5E9]/40 bg-[#0EA5E9]/10 p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0EA5E9]/20 text-2xl font-bold text-[#0EA5E9]">
              ✓
            </div>
            <h3 className="text-lg font-bold text-white">
              Escrow Request Received
            </h3>
            <p className="mt-2 text-sm text-[#94A3B8]">
              Thank you, {formData.name || "partner"}. The Vyllion Escrow team
              will contact you within 24 business hours.
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
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dawit Tadesse"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#0EA5E9] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Company / Entity
                </label>
                <input
                  type="text"
                  placeholder="e.g. Red Sea Trading"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#0EA5E9] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="dawit@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#0EA5E9] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Phone / Telegram
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+251 91 123 4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#0EA5E9] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                Escrow Use Case
              </label>
              <select
                value={formData.useCase}
                onChange={(e) =>
                  setFormData({ ...formData, useCase: e.target.value })
                }
                className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white focus:border-[#0EA5E9] focus:outline-none"
              >
                <option value="E-Commerce">E-Commerce &amp; Marketplace</option>
                <option value="Real Estate">
                  Real Estate &amp; Construction
                </option>
                <option value="Vehicle">
                  Vehicle &amp; Machinery Purchase
                </option>
                <option value="B2B Trade">B2B Trade &amp; Wholesale</option>
                <option value="Freelance">
                  Freelance &amp; Professional Contract
                </option>
                <option value="Diaspora">
                  Diaspora Investment / Remittance
                </option>
                <option value="Other">Other High-Value Deal</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase">
                Transaction Details
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe the transaction amount, parties involved, and milestones..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="mt-1.5 w-full rounded-xl border border-[#2C384A] bg-[#0F141E] px-4 py-3 text-sm text-white placeholder-[#64748B] focus:border-[#0EA5E9] focus:outline-none"
              />
            </div>

            {status === "error" && (
              <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-xs text-red-400">
                {errorMessage}
                <div className="mt-2">
                  <a
                    href={mailtoFallbackUrl}
                    className="font-semibold text-white underline"
                  >
                    Click here to open email draft directly →
                  </a>
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              size="lg"
              className="w-full rounded-full bg-[#0EA5E9] py-6 font-bold tracking-wider text-white uppercase shadow-lg shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90"
            >
              {status === "submitting"
                ? "Submitting..."
                : "Submit Escrow Request →"}
            </Button>

            <p className="text-center font-mono text-[11px] text-[#64748B]">
              Strict confidentiality assured. Vyllion Technologies PLC • Addis
              Ababa, Ethiopia
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
