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

export const Route = createFileRoute("/")({ component: LandingPage })

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeCluster, setActiveCluster] = useState(0)
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-svh">
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

    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-8">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/5 blur-[150px]" />
      
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          
          {/* Left Text Column */}
          <div className="max-w-xl animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gold uppercase">
                CAPITAL MARKETS INFRASTRUCTURE
              </span>
            </div>

            <h1 className="font-sans text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              The operating system behind modern securities brokers.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-[90%]">
              Vyllion brings client management, order management, trading operations, settlement, accounting, risk, compliance and reporting into one secure broker platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-gold text-surface-0 hover:bg-gold-hover font-semibold rounded-full px-6 h-10 text-sm" onClick={() => scrollTo("cta")}>
                Request a Demo →
              </Button>
              <Button size="lg" variant="outline" className="border-surface-4 text-foreground hover:bg-surface-2 hover:text-white rounded-full px-6 h-10 text-sm" onClick={() => scrollTo("modules")}>
                Explore the Platform
              </Button>
            </div>
          </div>

          {/* Right Graphic Column */}
          <div className="relative flex h-[350px] w-full items-center justify-center animate-fade-up delay-300 lg:h-[450px]">
            <NetworkGraphic className="w-full h-full max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Bar */}
      <div className="relative mx-auto mt-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up delay-500">
        <div className="flex flex-col items-center justify-center border-t border-surface-3 pt-6 pb-2">
          <span className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            BUILT FOR THE OPERATIONAL REALITIES OF CAPITAL MARKETS
          </span>
          <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-medium tracking-widest text-foreground/70 uppercase">
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">👥</span> CLIENT MANAGEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🔄</span> ORDER MANAGEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🗄️</span> CSD & SETTLEMENT</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">📒</span> ACCOUNTING</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🛡️</span> RISK & COMPLIANCE</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">📊</span> REPORTING</span>
            <span className="flex items-center gap-1.5 hover:text-gold transition-colors"><span className="text-gold opacity-80">🔌</span> API & FIX</span>
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
