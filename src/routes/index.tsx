import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useEffect, useRef, useState, useCallback } from "react"
import { VyllionLogo } from "@/components/VyllionLogo"
import { NetworkGraphic } from "@/components/NetworkGraphic"
import { TransactionPathGraphic } from "@/components/TransactionPathGraphic"
import { ClientProfileVisual } from "@/components/ClientProfileVisual"
import { OrderFlowVisual } from "@/components/OrderFlowVisual"
import { MarketConnectivityVisual } from "@/components/MarketConnectivityVisual"
import { CsdSettlementVisual } from "@/components/CsdSettlementVisual"

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Vyllion — Broker Back Office & OMS for Ethiopia's Capital Market" },
      { name: "description", content: "The complete Broker Back Office & Order Management System built for Ethiopian Securities Exchange (ESX) member firms. From client onboarding to settlement finality — one platform, every workflow." },
      { name: "keywords", content: "Vyllion, Broker Back Office, OMS, ESX, Ethiopian Securities Exchange, Capital Market Ethiopia, Trading Platform, Novek ICT Solutions, CSD Settlement, FIX 4.4" },
      { property: "og:title", content: "Vyllion — Institutional Capital Markets Platform for Ethiopia" },
      { property: "og:description", content: "Sub-millisecond FIX 4.4 routing, automated CSD settlement allocation, risk controls, and client onboarding built for ESX member brokers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Vyllion Platform Architecture & Trading Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vyllion — Institutional Capital Markets Platform for Ethiopia" },
      { name: "twitter:description", content: "Sub-millisecond FIX 4.4 routing, automated CSD settlement allocation, and risk controls for ESX brokers." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com" },
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
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el) } },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════════════════ */
function useCounter(end: number, duration = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return count
}

/* ═══════════════════════════════════════════════════════════════
   BBO MODULE DATA — from BBO-DEV-001
   ═══════════════════════════════════════════════════════════════ */
const MODULE_CLUSTERS = [
  {
    name: "Trading",
    color: "text-info-blue",
    modules: [
      { id: "B", name: "Order Management", desc: "Order ticket, market/limit/GTC/IOC, fills, partial fills, amend/cancel lifecycle, blotter, allocations" },
      { id: "C", name: "Risk & Limits", desc: "Pre-trade decision engine, hard/soft limits, utilization tracking, kill switch, credit checks" },
      { id: "D", name: "Market Connectivity", desc: "FIX gateway to ESX ATS, drop-copy ingest, sequence recovery, instrument reference data, trading calendar" },
      { id: "L", name: "Dealing / Front Office", desc: "Dealer-assisted order capture, best-execution evidence, manual trade entry with approval gates" },
    ],
  },
  {
    name: "Post-Trade",
    color: "text-emerald",
    modules: [
      { id: "E", name: "Ledger & Accounting", desc: "Double-entry journals, client-money segregation (Resource ≥ Requirement), fee/commission/tax sweep, trial balance" },
      { id: "F", name: "Holdings & Custody", desc: "CSD positions, reserve-before-admit for sells, reconciliation to CSD as authority, encumbrances" },
      { id: "G", name: "Settlement", desc: "T+n obligations, DvP-atomic settlement, CSD instruction lifecycle, finality recording, breaks" },
      { id: "H", name: "Corporate Actions", desc: "Dividends, bonus, rights, splits — entitlement calculation off record-date positions, distributions via ledger" },
      { id: "I", name: "IPO & Primary Market", desc: "Offering setup, client applications, escrow funding, pro-rata allotment, refunds, listing handover" },
      { id: "J", name: "Payments & Bank", desc: "Deposits, withdrawals with maker-checker, bank statement ingest, cash reconciliation, Telebirr/PSP hooks" },
    ],
  },
  {
    name: "Clients & Compliance",
    color: "text-gold",
    modules: [
      { id: "A", name: "Client & Account Mgmt", desc: "KYC lifecycle with Fayda eKYC, sanctions/PEP screening, client categorization, account opening, mandates" },
      { id: "M", name: "Compliance / AML", desc: "Screening-hit case management, restricted/watch lists, surveillance rules, STR/SAR support, regulatory holds" },
      { id: "K", name: "Investor Channels", desc: "API surface for future investor app — order submission, statements, balances. No UI in BBO" },
    ],
  },
  {
    name: "Operations & Platform",
    color: "text-stale",
    modules: [
      { id: "N", name: "Reporting & Analytics", desc: "Contract notes, client statements, daily trading summaries, regulatory reports, management dashboards" },
      { id: "O", name: "Users / RBAC / Workflow", desc: "Argon2id+TOTP login, revocable sessions, roles & permissions, maker-checker approval workflow, break-glass" },
      { id: "P", name: "Audit & Evidence", desc: "Tamper-evident hash-chained audit store, entity timelines, evidence bundling for regulators" },
      { id: "Q", name: "Notifications", desc: "In-app notification center, SMS/email dispatch, delivery-state tracking, alert routing" },
      { id: "R", name: "Admin & Config", desc: "Effective-dated configuration — fee schedules, tax rates, calendars, thresholds — all under maker-checker" },
      { id: "S", name: "Platform / Resilience", desc: "Idempotency store, transactional outbox, health/readiness, single-tenant isolation guarantees" },
      { id: "T", name: "Localization", desc: "Ethiopian calendar (13 months), Amharic labels, Ge'ez numerals, locale formatting" },
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
    <section id="hero" className="relative flex min-h-[85vh] sm:min-h-screen flex-col justify-center overflow-hidden pt-24 pb-8">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/5 blur-[150px] pointer-events-none" />
      
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          
          {/* Left Text Column */}
          <div className="max-w-xl animate-fade-up">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gold uppercase">
                CAPITAL MARKETS INFRASTRUCTURE
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground">
              The operating system behind modern securities brokers.
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-[95%]">
              Vyllion brings client management, order management, trading operations, settlement, accounting, risk, compliance and reporting into one secure broker platform.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button size="lg" className="bg-gold text-surface-0 hover:bg-gold-hover font-semibold rounded-full px-6 h-11 text-sm shadow-lg shadow-gold/10" onClick={() => scrollTo("cta")}>
                Request a Demo →
              </Button>
              <Button size="lg" variant="outline" className="border-surface-4 text-foreground hover:bg-surface-2 hover:text-white rounded-full px-6 h-11 text-sm" onClick={() => scrollTo("modules")}>
                Explore the Platform
              </Button>
            </div>
          </div>

          {/* Right Graphic Column */}
          <div className="relative flex h-[300px] sm:h-[350px] w-full items-center justify-center animate-fade-up delay-300 lg:h-[450px]">
            <NetworkGraphic className="w-full h-full max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Bar */}
      <div className="relative mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up delay-500">
        <div className="flex flex-col items-center justify-center border-t border-surface-3 pt-6 pb-2">
          <span className="mb-3 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase text-center">
            BUILT FOR THE OPERATIONAL REALITIES OF CAPITAL MARKETS
          </span>
          <div className="flex w-full flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2.5 text-[9px] sm:text-[10px] font-medium tracking-widest text-foreground/70 uppercase text-center">
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">👥</span> CLIENT MANAGEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🔄</span> ORDER MANAGEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🗄️</span> CSD &amp; SETTLEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">📒</span> ACCOUNTING</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🛡️</span> RISK &amp; COMPLIANCE</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">📊</span> REPORTING</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🔌</span> API &amp; FIX</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function OperatingLayerSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="operating-layer" className="relative border-t border-border bg-surface-0 py-24 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className={`mx-auto max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="mb-4 inline-block text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            THE BROKERAGE OPERATING LAYER
          </span>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            One platform. Every critical operation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vyllion connects the operational lifecycle of a securities brokerage—from client management 
            and order processing to execution, settlement, accounting, risk and reporting.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/70">
            Designed around the controls, workflows and connectivity required to operate a modern brokerage.
          </p>
        </div>

        {/* The Graphic */}
        <div className={`mt-20 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <TransactionPathGraphic />
        </div>

      </div>
    </section>
  )
}

function ClientManagementSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="client-management" className="relative border-t border-border bg-[#080C12] py-24 overflow-hidden">
      {/* Background Subtle Warm Radial Glow */}
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Editorial Copy (5 cols) */}
          <div className={`lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              CLIENT MANAGEMENT
            </span>
            
            <h2 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Know every client. <br />
              <span className="text-gradient">Control every relationship.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Vyllion gives your brokerage a unified view of every client—from onboarding and KYC to accounts, risk profiles, funding and ongoing servicing.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-gold group"
              >
                <span>Explore client management</span>
                <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Product Interface Visual Showcase (7 cols) */}
          <div className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            <ClientProfileVisual />
          </div>

        </div>

        {/* Three Focused Supporting Capabilities */}
        <div className={`mt-24 grid grid-cols-1 gap-8 border-t border-surface-3/60 pt-12 md:grid-cols-3 ${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">01</span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">Frictionless onboarding</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Create client records, perform identity verification and establish accounts through a controlled onboarding workflow.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">02</span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">Connected client records</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Keep client information aligned across brokerage operations and connected depository systems.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-gold">03</span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-white">Continuous client visibility</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Give authorized users access to client profiles, account information, statements and relevant investment data.
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
    <section id="order-management" className="relative border-t border-border bg-[#080C12] py-24 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 h-[550px] w-[550px] rounded-full bg-blue/5 blur-[150px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Layout matching the mockup */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          
          {/* Left Editorial Copy (5 cols) */}
          <div className={`lg:col-span-5 pt-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="mb-4 inline-block text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
              ORDER MANAGEMENT
            </span>
            
            <h2 className="font-heading text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every order. <br />
              Controlled from entry to execution.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
              Capture, validate, and route orders through a connected workflow with configurable trading limits, risk controls, and straight-through processing.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-muted-foreground transition-colors hover:text-white group"
              >
                <span>Explore order management</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Product Interface & Flow Diagram Visual (7 cols) */}
          <div className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
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
    <section id="market-connectivity" className="relative border-t border-border bg-[#080C12] py-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 h-[550px] w-[550px] rounded-full bg-blue/5 blur-[150px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Reversed Two-Column Editorial Layout matching Section 05 mockup */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mt-12">
          
          {/* Left Visual Diagram Showcase & Capabilities (7 cols) */}
          <div className={`lg:col-span-7 flex flex-col justify-between h-full ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            <MarketConnectivityVisual />

            {/* THREE CAPABILITY COLUMNS BELOW GRAPHIC */}
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 pr-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M8 9l-4 4 4 4" />
                      <path d="M16 17l4-4-4-4" />
                      <line x1="4" y1="13" x2="20" y2="13" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">FIX Connectivity</h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Connect supported trading systems through standardized market messaging.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="17" y1="7" x2="21" y2="7" />
                      <polyline points="19 5 21 7 19 9" />
                      <line x1="13" y1="12" x2="21" y2="12" />
                      <polyline points="19 10 21 12 19 14" />
                      <line x1="17" y1="17" x2="21" y2="17" />
                      <polyline points="19 15 21 17 19 19" />
                      <line x1="3" y1="12" x2="9" y2="12" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">Direct Market Access</h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Controlled access to exchange ATS environments through approved workflows.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-white/70">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h4 className="font-sans text-[13px] font-semibold text-white">Real-Time Processing</h4>
                </div>
                <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                  Process trading activity in real time across supported instruments and currencies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (5 cols) */}
          <div className={`lg:col-span-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="mb-4 inline-block text-xs font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase">
              MARKET CONNECTIVITY.
            </span>
            
            <h2 className="font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px] max-w-lg">
              Connect every order to the market.
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground max-w-[420px]">
              Vyllion provides the connectivity layer between brokerage operations and supported trading venues, with real-tivil-time processing and standardized interfaces including FIX.
            </p>

            <div className="mt-8">
              <a
                href="#modules"
                className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-gold transition-colors hover:text-white group"
              >
                <span>Explore connectivity</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
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
    <section id="csd-settlement" className="relative border-t border-border bg-[#080C12] py-24 overflow-hidden">
      
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Two-Column Layout (Left Visual, Right Text) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Visual Diagram Showcase (7 cols) */}
          <div className={`lg:col-span-7 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
            <CsdSettlementVisual />
          </div>

          {/* Right Editorial Copy (5 cols) */}
          <div className={`lg:col-span-5 pl-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="mb-4 inline-block text-[11px] font-sans font-medium tracking-[0.15em] text-[#94A3B8] uppercase">
              CSD & SETTLEMENT
            </span>
            
            <h2 className="font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[48px] max-w-lg mb-6">
              From execution to<br />final settlement
            </h2>

            <p className="text-[15px] leading-relaxed text-[#94A3B8] max-w-[420px]">
              Keep securities, cash, client positions and settlement workflows aligned from trade confirmation through final settlement.
            </p>
          </div>

        </div>

        {/* Bottom Three Capability Pillars (Full Width) */}
        <div className={`mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 ${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>01</span>
            </div>
            <div>
              <h4 className="font-sans text-[15px] font-semibold text-white mb-2">CSD Integration</h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Exchange settlement and transfer information with connected depository systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              <span>02</span>
            </div>
            <div>
              <h4 className="font-sans text-[15px] font-semibold text-white mb-2">Flexible Settlement Cycles</h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Support market-specific settlement periods including T+0, T+1 and T+2.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 font-sans text-lg font-light text-[#C8B180]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
              <h4 className="font-sans text-[15px] font-semibold text-white mb-2">Position Reconciliation</h4>
              <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                Keep client accounts and positions updated as trades progress through settlement.
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
    <section id="modules" className="relative border-t border-border bg-surface-0 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[160px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`mx-auto max-w-3xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="mb-3 inline-block text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
            BBO &amp; OMS PLATFORM ARCHITECTURE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            20 core modules. Built for ESX.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every module maps directly to the operational specifications required by the Ethiopian Securities Exchange. Explore the modules below.
          </p>
        </div>

        {/* Cluster Tabs (Mobile Horizontal Scroll) */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none pb-2">
          {MODULE_CLUSTERS.map((cluster, i) => (
            <button
              key={cluster.name}
              onClick={() => setActiveCluster(i)}
              className={`rounded-full px-5 py-2 text-xs font-mono tracking-wider transition-all shrink-0 cursor-pointer ${
                activeCluster === i
                  ? "bg-gold text-surface-0 font-bold shadow-lg shadow-gold/20"
                  : "bg-surface-2/80 text-muted-foreground hover:text-white border border-surface-3/60"
              }`}
            >
              {cluster.name} ({cluster.modules.length})
            </button>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULE_CLUSTERS[activeCluster].modules.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-surface-3/80 bg-surface-1/70 p-5 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-surface-1 shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded">
                  MOD-{m.id}
                </span>
                <span className="text-[10px] font-mono text-gain">ESX SPEC COMPLIANT</span>
              </div>
              <h3 className="font-sans text-base font-semibold text-white mt-2">{m.name}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* ESX Vendor Eligibility Guidelines Checklist */}
        <div className="mt-16 rounded-2xl border border-surface-3/60 bg-surface-1/50 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-3/60 pb-4 mb-6">
            <div>
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase">REGULATORY COMPLIANCE</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-0.5">
                ESX BBO/OMS Vendor Eligibility Guidelines Coverage
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-gain bg-gain/10 border border-gain/30 px-3 py-1 rounded-full shrink-0">
              100% SPECIFICATION COVERED
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ESX_COMPLIANCE.map((item) => (
              <div key={item.section} className="flex items-center gap-2 rounded-xl border border-surface-3/40 bg-surface-2/40 p-2.5">
                <span className="h-2 w-2 rounded-full bg-gain shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-gold font-bold block">{item.section}</span>
                  <span className="text-xs font-medium text-white truncate block">{item.name}</span>
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
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

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "612bb746-2297-448c-95f3-ed5e4be2bc75"
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
          setErrorMessage(data.message || "Unable to send request. Please try again or reach out directly.")
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
      setErrorMessage("Network error occurred while sending your request. Please email us directly at vyllion@novek.et.")
      setStatus("error")
    }
  }

  const mailtoFallbackUrl = `mailto:vyllion@novek.et?subject=${encodeURIComponent(`Vyllion Demo Request - ${formData.firm || "Firm"}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nFirm: ${formData.firm}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.type}\nNotes: ${formData.notes}`
  )}`

  return (
    <section id="cta" className="relative border-t border-border bg-[#080C12] py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 blur-[180px] pointer-events-none" />

      <div ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className={`rounded-3xl border border-surface-3/80 bg-surface-1/80 p-6 sm:p-12 backdrop-blur-2xl shadow-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              ENTERPRISE DEMO &amp; ONBOARDING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Deploy Vyllion for your brokerage firm.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Engineered exclusively for member firms of the Ethiopian Securities Exchange. Request a private system demonstration with our capital markets solutions team.
            </p>
          </div>

          {status === "success" ? (
            <div className="mt-10 rounded-2xl border border-gain/40 bg-gain/10 p-8 text-center max-w-lg mx-auto animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-gain/20 border border-gain text-gain flex items-center justify-center mx-auto text-xl">
                ✓
              </div>
              <h3 className="text-lg font-bold text-white mt-4">Demonstration Request Received</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Thank you, {formData.name || "partner"}. Our capital markets engineering team in Addis Ababa has received your request and will follow up within 24 business hours.
              </p>
              <div className="mt-6 pt-4 border-t border-gain/20 font-mono text-xs text-gold">
                Direct Inquiries: <a href="mailto:vyllion@novek.et" className="underline hover:text-white">vyllion@novek.et</a> • Addis Ababa, Ethiopia
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto space-y-4">
              {/* Anti-spam honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {status === "error" && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-xs text-red-200">
                  <p className="font-semibold mb-1">Notice:</p>
                  <p>{errorMessage}</p>
                  <div className="mt-3">
                    <a
                      href={mailtoFallbackUrl}
                      className="inline-flex items-center gap-1.5 text-gold underline hover:text-white font-mono"
                    >
                      Click here to email us directly via your mail app →
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    placeholder="Ato Abebe Tadesse"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">Firm Name</label>
                  <input
                    type="text"
                    required
                    disabled={status === "submitting"}
                    placeholder="e.g. Apex Securities PLC"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">Work Email</label>
                  <input
                    type="email"
                    required
                    disabled={status === "submitting"}
                    placeholder="name@firm.et"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">Phone / Telegram</label>
                  <input
                    type="tel"
                    required
                    disabled={status === "submitting"}
                    placeholder="+251 9..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">Firm Category</label>
                <select
                  disabled={status === "submitting"}
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none transition-colors disabled:opacity-60"
                >
                  <option value="Retail Brokerage">Retail Brokerage Firm</option>
                  <option value="Institutional Desk">Institutional Trading Desk / Asset Manager</option>
                  <option value="Custodian Bank">Commercial Bank / Custodian</option>
                  <option value="Investment Bank">Investment Bank / Underwriter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">
                  Project Notes / Target Timeline <span className="text-muted-foreground/50">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  disabled={status === "submitting"}
                  placeholder="e.g. Planning Q3 ESX membership go-live, need OMS + mobile trading app..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-surface-3 bg-surface-0 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none transition-colors resize-none disabled:opacity-60"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full bg-gold text-surface-0 hover:bg-gold-hover font-bold rounded-xl py-6 text-sm uppercase tracking-wider shadow-lg shadow-gold/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-surface-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Sending Demonstration Request...
                    </>
                  ) : (
                    "Request Private Platform Demonstration →"
                  )}
                </Button>
              </div>

              <p className="text-center text-[11px] text-muted-foreground/70 font-mono mt-3">
                Strict confidentiality assured. Built by Novek ICT Solutions PLC.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}
