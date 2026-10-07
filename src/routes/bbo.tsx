import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState, useCallback } from "react"
import { NetworkGraphic } from "@/components/NetworkGraphic"
import { TransactionPathGraphic } from "@/components/TransactionPathGraphic"
import { ClientProfileVisual } from "@/components/ClientProfileVisual"
import { OrderFlowVisual } from "@/components/OrderFlowVisual"
import { MarketConnectivityVisual } from "@/components/MarketConnectivityVisual"
import { CsdSettlementVisual } from "@/components/CsdSettlementVisual"

export const Route = createFileRoute("/bbo")({
  component: LandingPage,
  head: () => ({
    meta: [
      {
        title:
          "Vyllion — Broker Back Office & Escrow Service for Ethiopia's Capital Market",
      },
      {
        name: "description",
        content:
          "Two products for Ethiopia's capital market: Broker Back Office & OMS for ESX member firms, plus Escrow Service for secure transactions across e-commerce, real estate, B2B trade, and more.",
      },
      {
        name: "keywords",
        content:
          "Vyllion, Broker Back Office, OMS, ESX, Ethiopian Securities Exchange, Capital Market Ethiopia, Trading Platform, CSD Settlement, FIX 4.4",
      },
      {
        property: "og:title",
        content: "Vyllion — BBO & Escrow for Ethiopia's Capital Market",
      },
      {
        property: "og:description",
        content:
          "Two products: Broker Back Office for ESX member brokers + Escrow Service for secure transactions. One platform, complete trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Vyllion Platform Architecture & Trading Solutions",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Vyllion — Institutional Capital Markets Platform for Ethiopia",
      },
      {
        name: "twitter:description",
        content:
          "Sub-millisecond FIX 4.4 routing, automated CSD settlement allocation, and risk controls for ESX brokers.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com" }],
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
   BBO MODULE DATA — from BBO-DEV-001
   ═══════════════════════════════════════════════════════════════ */
const MODULE_CLUSTERS = [
  {
    name: "Trading",
    color: "text-info-blue",
    modules: [
      {
        id: "B",
        name: "Order Management",
        desc: "Order ticket, market/limit/GTC/IOC, fills, partial fills, amend/cancel lifecycle, blotter, allocations",
      },
      {
        id: "C",
        name: "Risk & Limits",
        desc: "Pre-trade decision engine, hard/soft limits, utilization tracking, kill switch, credit checks",
      },
      {
        id: "D",
        name: "Market Connectivity",
        desc: "FIX gateway to ESX ATS, drop-copy ingest, sequence recovery, instrument reference data, trading calendar",
      },
      {
        id: "L",
        name: "Dealing / Front Office",
        desc: "Dealer-assisted order capture, best-execution evidence, manual trade entry with approval gates",
      },
    ],
  },
  {
    name: "Post-Trade",
    color: "text-emerald",
    modules: [
      {
        id: "E",
        name: "Ledger & Accounting",
        desc: "Double-entry journals, client-money segregation (Resource ≥ Requirement), fee/commission/tax sweep, trial balance",
      },
      {
        id: "F",
        name: "Holdings & Custody",
        desc: "CSD positions, reserve-before-admit for sells, reconciliation to CSD as authority, encumbrances",
      },
      {
        id: "G",
        name: "Settlement",
        desc: "T+n obligations, DvP-atomic settlement, CSD instruction lifecycle, finality recording, breaks",
      },
      {
        id: "H",
        name: "Corporate Actions",
        desc: "Dividends, bonus, rights, splits — entitlement calculation off record-date positions, distributions via ledger",
      },
      {
        id: "I",
        name: "IPO & Primary Market",
        desc: "Offering setup, client applications, escrow funding, pro-rata allotment, refunds, listing handover",
      },
      {
        id: "J",
        name: "Payments & Bank",
        desc: "Deposits, withdrawals with maker-checker, bank statement ingest, cash reconciliation, Telebirr/PSP hooks",
      },
    ],
  },
  {
    name: "Clients & Compliance",
    color: "text-gold",
    modules: [
      {
        id: "A",
        name: "Client & Account Mgmt",
        desc: "KYC lifecycle with Fayda eKYC, sanctions/PEP screening, client categorization, account opening, mandates",
      },
      {
        id: "M",
        name: "Compliance / AML",
        desc: "Screening-hit case management, restricted/watch lists, surveillance rules, STR/SAR support, regulatory holds",
      },
      {
        id: "K",
        name: "Investor Channels",
        desc: "API surface for future investor app — order submission, statements, balances. No UI in BBO",
      },
    ],
  },
  {
    name: "Operations & Platform",
    color: "text-stale",
    modules: [
      {
        id: "N",
        name: "Reporting & Analytics",
        desc: "Contract notes, client statements, daily trading summaries, regulatory reports, management dashboards",
      },
      {
        id: "O",
        name: "Users / RBAC / Workflow",
        desc: "Argon2id+TOTP login, revocable sessions, roles & permissions, maker-checker approval workflow, break-glass",
      },
      {
        id: "P",
        name: "Audit & Evidence",
        desc: "Tamper-evident hash-chained audit store, entity timelines, evidence bundling for regulators",
      },
      {
        id: "Q",
        name: "Notifications",
        desc: "In-app notification center, SMS/email dispatch, delivery-state tracking, alert routing",
      },
      {
        id: "R",
        name: "Admin & Config",
        desc: "Effective-dated configuration — fee schedules, tax rates, calendars, thresholds — all under maker-checker",
      },
      {
        id: "S",
        name: "Platform / Resilience",
        desc: "Idempotency store, transactional outbox, health/readiness, single-tenant isolation guarantees",
      },
      {
        id: "T",
        name: "Localization",
        desc: "Ethiopian calendar (13 months), Amharic labels, Ge'ez numerals, locale formatting",
      },
    ],
  },
]

const ESX_COMPLIANCE = [
  { section: "§1.4", name: "Client Management", status: "covered" },
  { section: "§1.5", name: "Order Management", status: "covered" },
  { section: "§1.6", name: "CSD Related Functions", status: "covered" },
  { section: "§1.7", name: "Dealing Functions", status: "covered" },
  { section: "§1.8", name: "Internet & Remote Trading", status: "covered" },
  { section: "§1.9", name: "Accounting Functions", status: "covered" },
  { section: "§1.10", name: "IPO Functions", status: "covered" },
  { section: "§1.11", name: "Reports", status: "covered" },
  { section: "§1.12", name: "User Management & Workflows", status: "covered" },
  { section: "§2.2", name: "Security", status: "covered" },
  { section: "§2.3", name: "Integration", status: "covered" },
] as const

/* ═══════════════════════════════════════════════════════════════
   MAIN LANDING PAGE
   ═══════════════════════════════════════════════════════════════ */
function LandingPage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-svh w-full overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────── */}
      <HeroSection scrollTo={scrollTo} />

      {/* ── TWO PRODUCTS ──────────────────────────────────── */}
      <TwoProductsSection />

      {/* ── OPERATING LAYER ───────────────────────────────── */}
      <OperatingLayerSection />

      {/* ── CLIENT MANAGEMENT ────────────────────────────── */}
      <ClientManagementSection />

      {/* ── ORDER MANAGEMENT ─────────────────────────────── */}
      <OrderManagementSection />

      {/* ── MARKET CONNECTIVITY ──────────────────────────── */}
      <MarketConnectivitySection />

      {/* ── CSD & SETTLEMENT ─────────────────────────────── */}
      <CsdSettlementSection />

      {/* ── MODULE ARCHITECTURE (id="modules") ────────────── */}
      <ModulesSection />

      {/* ── ESCROW SUMMARY ────────────────────────────────── */}
      <EscrowSummarySection />

      {/* ── REQUEST A DEMO CTA (id="cta") ────────────────── */}
      <CtaSection />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-24 pb-8 sm:min-h-screen"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-[#0EA5E9]/5 blur-[160px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Text Column */}
          <div className="animate-fade-up max-w-xl">
            <h1 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The operations engine &amp;{" "}
              <span className="text-[#0EA5E9]">trust guarantee</span> for
              Ethiopia.
            </h1>

            <p className="mt-5 max-w-[95%] text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vyllion powers Ethiopia's financial ecosystem with two core
              products: an institutional{" "}
              <strong className="font-medium text-white">
                Broker Back Office (BBO)
              </strong>{" "}
              for ESX capital market operations, and a programmable{" "}
              <strong className="font-medium text-[#0EA5E9]">
                Escrow Service
              </strong>{" "}
              to secure transactions and eliminate fraud.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-12 rounded-full bg-gold px-7 text-sm font-semibold text-surface-0 shadow-lg shadow-gold/10 hover:bg-gold-hover"
                onClick={() => scrollTo("cta")}
              >
                Request a Demo →
              </Button>
              <Link to="/escrow">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-[#0EA5E9]/40 px-7 text-sm text-[#0EA5E9] hover:bg-[#0EA5E9]/10 hover:text-white sm:w-auto"
                >
                  Explore Escrow Service →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Graphic Column */}
          <div className="animate-fade-up relative flex h-[300px] w-full items-center justify-center delay-300 sm:h-[350px] lg:h-[450px]">
            <NetworkGraphic className="h-full w-full max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Bar */}
      <div className="animate-fade-up relative mx-auto mt-12 w-full max-w-7xl px-4 delay-500 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center border-t border-surface-3 pt-6 pb-2">
          <span className="text-center text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            TWO FLAGSHIP PRODUCTS: BROKER BACK OFFICE &bull; ESCROW SERVICE
          </span>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   TWO PRODUCTS SECTION
   ═══════════════════════════════════════════════════════════════ */
function TwoProductsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-14 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
            TWO PRODUCTS, ONE PLATFORM
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The engine and the guarantee.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Vyllion builds two products for Ethiopia's financial market. BBO
            runs the broker. Escrow guarantees the transaction. Together or
            independently — they solve trust.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* BBO Card */}
          <div
            className="group rounded-2xl border border-gold/30 bg-gold/[0.04] p-8 transition-all duration-500 hover:border-gold/50 hover:bg-gold/[0.07]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "300ms",
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-lg font-bold text-gold">
                B
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold">
                  Broker Back Office
                </h3>
                <span className="text-[10px] tracking-wider text-[#94A3B8] uppercase">
                  ORDER MANAGEMENT & OPERATIONS
                </span>
              </div>
            </div>
            <p className="mb-5 text-[14px] leading-relaxed text-[#94A3B8]">
              The complete operating system for ESX member brokers. Client
              onboarding, order routing, risk controls, CSD settlement,
              accounting, and compliance — every workflow under one roof.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Trading & OMS",
                "CSD Settlement",
                "Risk & Compliance",
                "Accounting",
                "FIX 4.4",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gold/10 px-3 py-1 font-mono text-[10px] text-gold/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("modules")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm font-semibold text-gold transition-colors hover:text-white"
            >
              Explore BBO modules ↓
            </button>
          </div>

          {/* Escrow Card */}
          <Link to="/escrow" className="block">
            <div
              className="group h-full rounded-2xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/[0.04] p-8 transition-all duration-500 hover:border-[#0EA5E9]/50 hover:bg-[#0EA5E9]/[0.07]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "450ms",
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0EA5E9]/20 text-lg font-bold text-[#0EA5E9]">
                  E
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0EA5E9]">
                    Escrow Service
                  </h3>
                  <span className="text-[10px] tracking-wider text-[#94A3B8] uppercase">
                    SECURE TRANSACTION GUARANTEE
                  </span>
                </div>
              </div>
              <p className="mb-5 text-[14px] leading-relaxed text-[#94A3B8]">
                The trust layer for transactions in Ethiopia and Africa. Holds
                funds safely, verifies conditions are met, then releases payment
                — or refunds the buyer. For e-commerce, real estate, B2B trade,
                IPOs, freelance, and diaspora investment.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  "E-Commerce",
                  "Real Estate",
                  "B2B Trade",
                  "IPO",
                  "Diaspora",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#0EA5E9]/10 px-3 py-1 font-mono text-[10px] text-[#0EA5E9]/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#0EA5E9] transition-colors group-hover:text-white">
                Learn about Escrow →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ESCROW SUMMARY SECTION (before CTA)
   ═══════════════════════════════════════════════════════════════ */
function EscrowSummarySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0EA5E9]/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-center gap-12 transition-all duration-700 lg:grid-cols-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div>
            <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
              ESCROW SERVICE
            </span>
            <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
              Trust is the missing{" "}
              <span className="text-[#0EA5E9]">infrastructure.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
              In Ethiopia, there are no chargebacks, no buyer protection, and
              courts take years. Vyllion Escrow sits between buyer and seller —
              holding funds until both sides deliver. For marketplaces, brokers,
              and any business where fraud kills growth.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "For Marketplaces & E-Commerce",
                  desc: "Integrate escrow via API. Buyer pays, receives goods, confirms — then funds release to seller.",
                },
                {
                  title: "For Capital Markets",
                  desc: "IPO subscription escrow, OTC trade protection, and settlement guarantees — plugs into Vyllion BBO.",
                },
                {
                  title: "For Any High-Value Transaction",
                  desc: "Real estate, B2B supply chain, freelance contracts, diaspora investment — escrow adapts to any deal.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0EA5E9]" />
                  <div>
                    <span className="text-sm font-bold text-white">
                      {item.title}
                    </span>
                    <p className="mt-0.5 text-[13px] text-[#94A3B8]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/escrow">
                <Button
                  size="lg"
                  className="h-11 rounded-full bg-[#0EA5E9] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/15 hover:bg-[#0EA5E9]/90"
                >
                  Learn About Escrow →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: simple flow visual */}
          <div className="relative">
            <div className="space-y-4 rounded-2xl border border-[#2C384A]/50 bg-surface-1 p-8">
              {[
                { step: "01", label: "Agree on terms", color: "#0EA5E9" },
                { step: "02", label: "Buyer deposits funds", color: "#0EA5E9" },
                { step: "03", label: "Seller delivers", color: "#0EA5E9" },
                {
                  step: "04",
                  label: "Vyllion verifies conditions",
                  color: "#0EA5E9",
                },
                {
                  step: "05",
                  label: "Funds released (or refunded)",
                  color: "#10B981",
                },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold"
                    style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  >
                    {s.step}
                  </span>
                  <span className="text-sm font-medium text-[#94A3B8]">
                    {s.label}
                  </span>
                  {i < 4 && (
                    <div className="ml-2 h-px flex-1 bg-[#2C384A]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OperatingLayerSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="operating-layer"
      className="relative overflow-hidden border-t border-border bg-surface-0 py-24"
    >
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div
          className={`mx-auto max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            THE BROKERAGE OPERATING LAYER
          </span>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            One platform. Every critical operation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vyllion connects the operational lifecycle of a securities
            brokerage—from client management and order processing to execution,
            settlement, accounting, risk and reporting.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/70">
            Designed around the controls, workflows and connectivity required to
            operate a modern brokerage.
          </p>
        </div>

        {/* The Graphic */}
        <div
          className={`mt-20 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}
        >
          <TransactionPathGraphic />
        </div>
      </div>
    </section>
  )
}

function ClientManagementSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="client-management"
      className="relative overflow-hidden border-t border-border bg-[#080C12] py-24"
    >
      {/* Background Subtle Warm Radial Glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Editorial Copy (5 cols) */}
          <div
            className={`lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              CLIENT MANAGEMENT
            </span>

            <h2 className="font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-white sm:text-5xl">
              Know every client. <br />
              <span className="text-gradient">Control every relationship.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Vyllion gives your brokerage a unified view of every client—from
              onboarding and KYC to accounts, risk profiles, funding and ongoing
              servicing.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-gold"
              >
                <span>Explore client management</span>
                <span className="text-gold transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Product Interface Visual Showcase (7 cols) */}
          <div
            className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}
          >
            <ClientProfileVisual />
          </div>
        </div>

        {/* Three Focused Supporting Capabilities */}
        <div
          className={`mt-24 grid grid-cols-1 gap-8 border-t border-surface-3/60 pt-12 md:grid-cols-3 ${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}
        >
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">
              01
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">
              Frictionless onboarding
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Create client records, perform identity verification and establish
              accounts through a controlled onboarding workflow.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">
              02
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">
              Connected client records
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Keep client information aligned across brokerage operations and
              connected depository systems.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">
              03
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">
              Continuous client visibility
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Give authorized users access to client profiles, account
              information, statements and relevant investment data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function OrderManagementSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="order-management"
      className="relative overflow-hidden border-t border-border bg-[#080C12] py-24"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[550px] w-[550px] rounded-full bg-blue/5 blur-[150px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Layout matching the mockup */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Editorial Copy (5 cols) */}
          <div
            className={`pt-4 lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <span className="mb-4 inline-block font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              ORDER MANAGEMENT
            </span>

            <h2 className="font-heading text-4xl leading-[1.15] font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every order. <br />
              Controlled from entry to execution.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Capture, validate, and route orders through a connected workflow
              with configurable trading limits, risk controls, and
              straight-through processing.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-white"
              >
                <span>Explore order management</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Product Interface & Flow Diagram Visual (7 cols) */}
          <div
            className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}
          >
            <OrderFlowVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function MarketConnectivitySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="market-connectivity"
      className="relative overflow-hidden border-t border-border bg-[#080C12] py-20"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-[550px] w-[550px] rounded-full bg-blue/5 blur-[150px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reversed Two-Column Editorial Layout matching Section 05 mockup */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Visual Diagram Showcase & Capabilities (7 cols) */}
          <div
            className={`flex h-full flex-col justify-between lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}
          >
            <MarketConnectivityVisual />

            {/* THREE CAPABILITY COLUMNS BELOW GRAPHIC */}
            <div className="mt-4 grid grid-cols-1 gap-6 pr-4 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M8 9l-4 4 4 4" />
                      <path d="M16 17l4-4-4-4" />
                      <line x1="4" y1="13" x2="20" y2="13" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">
                    FIX Connectivity
                  </h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Connect supported trading systems through standardized market
                  messaging.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <line x1="17" y1="7" x2="21" y2="7" />
                      <polyline points="19 5 21 7 19 9" />
                      <line x1="13" y1="12" x2="21" y2="12" />
                      <polyline points="19 10 21 12 19 14" />
                      <line x1="17" y1="17" x2="21" y2="17" />
                      <polyline points="19 15 21 17 19 19" />
                      <line x1="3" y1="12" x2="9" y2="12" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">
                    Direct Market Access
                  </h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Controlled access to exchange ATS environments through
                  approved workflows.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">
                    Real-Time Processing
                  </h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Process trading activity in real time across supported
                  instruments and currencies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (5 cols) */}
          <div
            className={`lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <span className="mb-4 inline-block font-mono text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              MARKET CONNECTIVITY.
            </span>

            <h2 className="max-w-lg font-sans text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Connect every order to the market.
            </h2>

            <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-muted-foreground">
              Vyllion provides the connectivity layer between brokerage
              operations and supported trading venues, with real-tivil-time
              processing and standardized interfaces including FIX.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="group inline-flex items-center gap-2 font-sans text-sm tracking-wide text-gold transition-colors hover:text-white"
              >
                <span>Explore connectivity</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CsdSettlementSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="csd-settlement"
      className="relative overflow-hidden border-t border-border bg-[#080C12] py-24"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Two-Column Layout (Left Visual, Right Text) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Visual Diagram Showcase (7 cols) */}
          <div
            className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}
          >
            <CsdSettlementVisual />
          </div>

          {/* Right Editorial Copy (5 cols) */}
          <div
            className={`pl-4 lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <span className="mb-4 inline-block font-sans text-[11px] font-medium tracking-[0.15em] text-[#94A3B8] uppercase">
              CSD & SETTLEMENT
            </span>

            <h2 className="mb-6 max-w-lg font-sans text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-[48px]">
              From execution to
              <br />
              final settlement
            </h2>

            <p className="max-w-[420px] text-[15px] leading-relaxed text-[#94A3B8]">
              Keep securities, cash, client positions and settlement workflows
              aligned from trade confirmation through final settlement.
            </p>
          </div>
        </div>

        {/* Bottom Three Capability Pillars (Full Width) */}
        <div
          className={`mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 ${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>01</span>
            </div>
            <div>
              <h4 className="mb-2 font-sans text-[15px] font-semibold text-white">
                CSD Integration
              </h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Exchange settlement and transfer information with connected
                depository systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              <span>02</span>
            </div>
            <div>
              <h4 className="mb-2 font-sans text-[15px] font-semibold text-white">
                Flexible Settlement Cycles
              </h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Support market-specific settlement periods including T+0, T+1
                and T+2.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="9" cy="9" r="4"></circle>
                <path d="M16 11l5-5"></path>
                <path d="M21 11v-5h-5"></path>
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M8 13l-5 5"></path>
                <path d="M3 13v5h5"></path>
              </svg>
              <span>03</span>
            </div>
            <div>
              <h4 className="mb-2 font-sans text-[15px] font-semibold text-white">
                Position Reconciliation
              </h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Keep client accounts and positions updated as trades progress
                through settlement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ModulesSection() {
  const { ref, isVisible } = useScrollReveal()
  const [activeCluster, setActiveCluster] = useState(0)

  return (
    <section
      id="modules"
      className="relative overflow-hidden border-t border-border bg-surface-0 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-gold/5 blur-[160px]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="mb-3 inline-block text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
            BBO &amp; OMS PLATFORM ARCHITECTURE
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            20 core modules. Built for ESX.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every module maps directly to the operational specifications
            required by the Ethiopian Securities Exchange. Explore the modules
            below.
          </p>
        </div>

        {/* Cluster Tabs (Mobile Horizontal Scroll) */}
        <div className="mt-10 flex scrollbar-none items-center justify-start gap-2 overflow-x-auto pb-2 whitespace-nowrap sm:justify-center">
          {MODULE_CLUSTERS.map((cluster, i) => (
            <button
              key={cluster.name}
              onClick={() => setActiveCluster(i)}
              className={`shrink-0 cursor-pointer rounded-full px-5 py-2 font-mono text-xs tracking-wider transition-all ${
                activeCluster === i
                  ? "bg-gold font-bold text-surface-0 shadow-lg shadow-gold/20"
                  : "border border-surface-3/60 bg-surface-2/80 text-muted-foreground hover:text-white"
              }`}
            >
              {cluster.name} ({cluster.modules.length})
            </button>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {MODULE_CLUSTERS[activeCluster].modules.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-surface-3/80 bg-surface-1/70 p-5 shadow-md backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-surface-1"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded border border-gold/20 bg-gold/10 px-2 py-0.5 font-mono text-xs font-bold text-gold">
                  MOD-{m.id}
                </span>
                <span className="font-mono text-[10px] text-gain">
                  ESX SPEC COMPLIANT
                </span>
              </div>
              <h3 className="mt-2 font-sans text-base font-semibold text-white">
                {m.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ESX Vendor Eligibility Guidelines Checklist */}
        <div className="mt-16 rounded-2xl border border-surface-3/60 bg-surface-1/50 p-6 backdrop-blur-md sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-2 border-b border-surface-3/60 pb-4 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-gold uppercase">
                REGULATORY COMPLIANCE
              </span>
              <h3 className="mt-0.5 font-heading text-lg font-bold text-white sm:text-xl">
                ESX BBO/OMS Vendor Eligibility Guidelines Coverage
              </h3>
            </div>
            <span className="shrink-0 rounded-full border border-gain/30 bg-gain/10 px-3 py-1 font-mono text-xs font-semibold text-gain">
              100% SPECIFICATION COVERED
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {ESX_COMPLIANCE.map((item) => (
              <div
                key={item.section}
                className="flex items-center gap-2 rounded-xl border border-surface-3/40 bg-surface-2/40 p-2.5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gain" />
                <div className="overflow-hidden">
                  <span className="block font-mono text-[10px] font-bold text-gold">
                    {item.section}
                  </span>
                  <span className="block truncate text-xs font-medium text-white">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const { ref, isVisible } = useScrollReveal()
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    type: "Retail Brokerage",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const web3FormsKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      "612bb746-2297-448c-95f3-ed5e4be2bc75"
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID

    try {
      if (web3FormsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Vyllion Demo Request - ${formData.firm} (${formData.name})`,
            from_name: "Vyllion Demo Request Portal",
            name: formData.name,
            firm: formData.firm,
            email: formData.email,
            phone: formData.phone,
            category: formData.type,
            notes: formData.notes || "None provided",
            message: `New Demonstration Request:\n\n• Name: ${formData.name}\n• Firm: ${formData.firm}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Category: ${formData.type}\n• Notes: ${formData.notes || "None provided"}`,
            botcheck: "",
          }),
        })

        const data = await response.json()
        if (data.success) {
          setStatus("success")
        } else {
          setErrorMessage(
            data.message ||
              "Unable to send request. Please try again or reach out directly."
          )
          setStatus("error")
        }
      } else if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setStatus("success")
        } else {
          setErrorMessage("Failed to send submission. Please try again.")
          setStatus("error")
        }
      }
    } catch {
      setErrorMessage(
        "Network error occurred while sending your request. Please email us directly at contact@vyllion.com."
      )
      setStatus("error")
    }
  }

  const mailtoFallbackUrl = `mailto:contact@vyllion.com?subject=${encodeURIComponent(`Vyllion Demo Request - ${formData.firm || "Firm"}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nFirm: ${formData.firm}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.type}\nNotes: ${formData.notes}`
  )}`

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-border bg-[#080C12] py-24"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-gold/10 blur-[180px]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`rounded-3xl border border-surface-3/80 bg-surface-1/80 p-6 shadow-2xl backdrop-blur-2xl sm:p-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
              ENTERPRISE DEMO &amp; ONBOARDING
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Deploy Vyllion for your brokerage firm.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Engineered exclusively for member firms of the Ethiopian
              Securities Exchange. Request a private system demonstration with
              our capital markets solutions team.
            </p>
          </div>

          {status === "success" ? (
            <div className="animate-fade-in mx-auto mt-10 max-w-lg rounded-2xl border border-gain/40 bg-gain/10 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gain bg-gain/20 text-xl text-gain">
                ✓
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                Demonstration Request Received
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Thank you, {formData.name || "partner"}. Our capital markets
                engineering team in Addis Ababa has received your request and
                will follow up within 24 business hours.
              </p>
              <div className="mt-6 border-t border-gain/20 pt-4 font-mono text-xs text-gold">
                Direct Inquiries:{" "}
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
              className="mx-auto mt-10 max-w-xl space-y-4"
            >
              {/* Anti-spam honeypot */}
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
                      className="inline-flex items-center gap-1.5 font-mono text-gold underline hover:text-white"
                    >
                      Click here to email us directly via your mail app →
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
                    placeholder="Ato Abebe Tadesse"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                    Firm Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    placeholder="e.g. Apex Securities PLC"
                    value={formData.firm}
                    onChange={(e) =>
                      setFormData({ ...formData, firm: e.target.value })
                    }
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none disabled:opacity-60"
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
                    placeholder="name@firm.et"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none disabled:opacity-60"
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
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Firm Category
                </label>
                <select
                  disabled={status === "submitting"}
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors focus:border-gold focus:outline-none disabled:opacity-60"
                >
                  <option value="Retail Brokerage">
                    Retail Brokerage Firm
                  </option>
                  <option value="Institutional Desk">
                    Institutional Trading Desk / Asset Manager
                  </option>
                  <option value="Custodian Bank">
                    Commercial Bank / Custodian
                  </option>
                  <option value="Investment Bank">
                    Investment Bank / Underwriter
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Project Notes / Target Timeline{" "}
                  <span className="text-muted-foreground/50">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  disabled={status === "submitting"}
                  placeholder="e.g. Planning Q3 ESX membership go-live, need OMS + mobile trading app..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white transition-colors placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none disabled:opacity-60"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gold py-6 text-sm font-bold tracking-wider text-surface-0 uppercase shadow-lg shadow-gold/15 hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin text-surface-0"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Sending Demonstration Request...
                    </>
                  ) : (
                    "Request Private Platform Demonstration →"
                  )}
                </Button>
              </div>

              <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground/70">
                Strict confidentiality assured. Built by Vyllion Technologies
                PLC.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
