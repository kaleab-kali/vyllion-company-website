import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useCallback } from "react"

export const Route = createFileRoute("/")({
  component: EscrowHomePage,
  head: () => ({
    meta: [
      {
        title: "Vyllion — Digital Escrow Platform for Ethiopia",
      },
      {
        name: "description",
        content:
          "Vyllion provides secure digital escrow for Ethiopian commerce. Buyer funds are held in segregated commercial bank custody and released only after verified delivery and inspection.",
      },
      {
        name: "keywords",
        content:
          "Escrow Ethiopia, Digital Escrow Addis Ababa, Secure Trade Ethiopia, Car Purchase Escrow, Real Estate Escrow Ethiopia, Telebirr Escrow, CBE Escrow, Fraud Prevention Ethiopia",
      },
      {
        property: "og:title",
        content: "Vyllion — Digital Escrow Platform for Ethiopia",
      },
      {
        property: "og:description",
        content:
          "The safe way to buy and sell in Ethiopia. Funds held in segregated commercial bank custody until verified inspection.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Vyllion — Digital Escrow Platform for Ethiopia",
      },
      {
        name: "twitter:description",
        content:
          "Bank-segregated digital escrow securing commercial transactions across Ethiopia.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://vyllion.com/#service",
          name: "Vyllion Digital Escrow Platform",
          serviceType: "Digital Escrow",
          provider: {
            "@type": "Organization",
            name: "Vyllion Technologies PLC",
            url: "https://vyllion.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Addis Ababa",
              addressCountry: "ET",
            },
          },
          areaServed: {
            "@type": "Country",
            name: "Ethiopia",
          },
          description:
            "Institutional digital escrow infrastructure securing transactions in Ethiopia through commercial bank segregated custody and verified milestone releases.",
        }),
      },
    ],
  }),
})

/* ═══════════════════════════════════════════════════════════════
   SIMULATOR DEALS DATA (NATIVE ETHIOPIAN EXAMPLES)
   ═══════════════════════════════════════════════════════════════ */
const SIMULATOR_DEALS = [
  {
    id: "vehicle",
    label: "Vehicle Sale",
    title: "2022 Toyota Vitz (Clean Title)",
    amount: "ETB 1,850,000",
    buyer: "Dawit M. (Buyer)",
    seller: "Bole Auto Dealership (Seller)",
    inspectionWindow: "48 Hours Garage Inspection",
    inspectionDetail: "Mechanical road test & mechanical diagnostics at approved garage before release.",
    releaseCondition: "Buyer digitally signs off on mechanical report & title deed.",
    disputeProtection: "Full ETB refund if chassis, engine, or customs tax papers fail validation.",
  },
  {
    id: "realestate",
    label: "Property Advance",
    title: "Residential Land Title Deposit",
    amount: "ETB 3,500,000",
    buyer: "Tigist A. (Buyer)",
    seller: "Property Owner (Seller)",
    inspectionWindow: "7 Days Cadastre Verification",
    inspectionDetail: "Verification of title registry, master plan alignment, and municipal debts.",
    releaseCondition: "Official cadastre ownership transfer confirmed by Land Management Bureau.",
    disputeProtection: "Funds locked in bank custody. 100% protected against dual-sale or title disputes.",
  },
  {
    id: "wholesale",
    label: "B2B Commodity",
    title: "50 Quintals Jimma Grade-1 Coffee",
    amount: "ETB 680,000",
    buyer: "Addis Roasters PLC (Buyer)",
    seller: "Jimma Farmers Cooperative (Seller)",
    inspectionWindow: "24 Hours Warehouse Inspection",
    inspectionDetail: "Moisture content, bean grade verification, and certified weight check upon arrival.",
    releaseCondition: "Buyer confirms warehouse waybill and quality standard sign-off.",
    disputeProtection: "Pro-rata price adjustment or full return authorization if grade specs fail.",
  },
  {
    id: "ecommerce",
    label: "Telegram Commerce",
    title: "Bulk Electronics Package (10 Units)",
    amount: "ETB 95,000",
    buyer: "Retail Merchant (Hawassa)",
    seller: "Addis Importer (Merkato)",
    inspectionWindow: "24 Hours Delivery Inspection",
    inspectionDetail: "Courier delivery tracking, seal verification, and device power-on testing.",
    releaseCondition: "Buyer confirms parcel receipt in Hawassa via mobile confirmation.",
    disputeProtection: "Zero screenshot fraud. Seller is guaranteed payment; buyer is protected against fake delivery.",
  },
]

/* ═══════════════════════════════════════════════════════════════
   MAIN ESCROW HOME PAGE (6 CLEAN, NON-REPETITIVE SECTIONS)
   ═══════════════════════════════════════════════════════════════ */
function EscrowHomePage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-svh w-full bg-surface-0 text-foreground">
      {/* 1. Hero Section with Live Ethiopian Simulator */}
      <HeroSection scrollTo={scrollTo} />

      {/* 2. Native Ethiopian Comparison Section */}
      <EthiopianComparisonSection />

      {/* 3. The 4-Step Escrow Protection Flow */}
      <HowItWorksSection />

      {/* 4. High-Impact Deal Verticals in Ethiopia */}
      <DealCategoriesSection />

      {/* 5. Dispute Arbitration & Legal Guarantee */}
      <DisputeArbitrationSection />

      {/* 6. Pre-Launch Pilot Onboarding */}
      <PreLaunchPilotSection />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [activeDeal, setActiveDeal] = useState(SIMULATOR_DEALS[0])

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center border-b border-surface-3/40 pt-28 pb-20 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column (55%): Clear, Authoritative Positioning */}
          <div className="lg:col-span-7">
            {/* Pre-Launch Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[11px] font-mono font-medium text-gold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              PRE-LAUNCH • PILOT INTEGRATION & EARLY ACCESS
            </div>

            <h1 className="font-heading text-4xl leading-[1.12] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The safe way to buy and sell in Ethiopia.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you are buying a vehicle in Addis Ababa, paying a property deposit, or shipping goods from regional markets, Vyllion holds funds in segregated commercial bank custody until both sides inspect and agree.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-12 rounded-lg bg-gold px-8 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-md transition-all hover:bg-gold-hover hover:shadow-gold/10"
                >
                  Request Early Access
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-lg border-surface-3 bg-surface-1 px-7 font-sans text-xs font-semibold tracking-wider text-white uppercase transition-all hover:border-surface-4 hover:bg-surface-2"
                onClick={() => scrollTo("comparison")}
              >
                Compare Payment Methods
              </Button>
            </div>

            {/* Core Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-surface-3/50 pt-8">
              <div>
                <div className="font-mono text-xs font-semibold text-gold">100% SEGREGATED</div>
                <div className="mt-1 text-xs text-muted-foreground">Partner Bank Custody</div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-gold">VERIFIED INSPECTION</div>
                <div className="mt-1 text-xs text-muted-foreground">Agreed Review Windows</div>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-gold">ZERO CO-MINGLING</div>
                <div className="mt-1 text-xs text-muted-foreground">Isolated Deal Accounts</div>
              </div>
            </div>
          </div>

          {/* Right Column (45%): Interactive Ethiopian Deal Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-surface-3 bg-surface-1 p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-surface-3 pb-4">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  TRANSACTION SIMULATION PREVIEW
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald">
                  <span className="h-2 w-2 rounded-full bg-emerald" />
                  BANK CUSTODY LOGIC
                </span>
              </div>

              {/* Deal Type Switcher Tabs */}
              <div className="mt-4 grid grid-cols-4 gap-1.5 rounded-lg border border-surface-3 bg-surface-0/60 p-1">
                {SIMULATOR_DEALS.map((deal) => (
                  <button
                    key={deal.id}
                    onClick={() => setActiveDeal(deal)}
                    className={`rounded-md py-1.5 text-center font-sans text-[11px] font-medium transition-all ${
                      activeDeal.id === deal.id
                        ? "bg-surface-2 text-gold shadow-sm font-semibold"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {deal.label}
                  </button>
                ))}
              </div>

              {/* Deal Details Box */}
              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground">{activeDeal.title}</div>
                  <div className="mt-1 font-mono text-2xl font-bold tracking-tight text-white">
                    {activeDeal.amount}
                  </div>
                </div>

                <div className="space-y-2.5 rounded-lg border border-surface-3/70 bg-surface-0/40 p-4 text-xs">
                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">Buyer:</span>
                    <span className="font-medium text-white">{activeDeal.buyer}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">Seller:</span>
                    <span className="font-medium text-white">{activeDeal.seller}</span>
                  </div>
                  <div className="flex items-start justify-between border-t border-surface-3/50 pt-2">
                    <span className="text-muted-foreground">Inspection Clause:</span>
                    <span className="font-mono font-semibold text-gold">{activeDeal.inspectionWindow}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-gold">✓</span>
                    <span><strong>Inspection Rule:</strong> {activeDeal.inspectionDetail}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald">✓</span>
                    <span><strong>Release Trigger:</strong> {activeDeal.releaseCondition}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-muted-foreground">🛡</span>
                    <span><strong>Buyer Guarantee:</strong> {activeDeal.disputeProtection}</span>
                  </div>
                </div>

                <Link to="/contact">
                  <Button
                    className="w-full rounded-lg bg-surface-2 border border-surface-3 text-xs font-semibold text-white hover:border-gold/40 hover:bg-surface-3"
                  >
                    Inquire for Early Access →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. NATIVE ETHIOPIAN COMPARISON SECTION
   ═══════════════════════════════════════════════════════════════ */
function EthiopianComparisonSection() {
  return (
    <section id="comparison" className="border-b border-surface-3/40 bg-surface-0 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            ETHIOPIAN COMMERCIAL REALITY
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why traditional payment methods fail high-value trade.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Digital transfers made moving money fast in Ethiopia, but they introduced a severe trust dilemma: whoever sends or delivers first takes 100% of the risk.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 overflow-x-auto rounded-xl border border-surface-3 bg-surface-1">
          <table className="w-full min-w-[700px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-surface-3 bg-surface-2/60 font-sans uppercase tracking-wider text-muted-foreground">
                <th className="py-4 px-5 font-semibold">Payment Method</th>
                <th className="py-4 px-5 font-semibold">Buyer Protection</th>
                <th className="py-4 px-5 font-semibold">Seller Risk</th>
                <th className="py-4 px-5 font-semibold">Inspection Window</th>
                <th className="py-4 px-5 font-semibold">Dispute Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-3/50 text-muted-foreground">
              <tr>
                <td className="py-4 px-5 font-semibold text-white">
                  Direct Telebirr / CBE Transfer
                  <span className="block font-normal text-[11px] text-muted-foreground">"Send screenshot before dispatch"</span>
                </td>
                <td className="py-4 px-5 text-loss font-medium">Zero. Reversals require formal court order.</td>
                <td className="py-4 px-5">High fake-screenshot scam risk.</td>
                <td className="py-4 px-5">None. Money is gone upon transfer.</td>
                <td className="py-4 px-5 font-mono">2–3+ Years in Court</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-white">
                  Cash on Delivery (COD)
                  <span className="block font-normal text-[11px] text-muted-foreground">Physical handover in Addis</span>
                </td>
                <td className="py-4 px-5">Limited to street or shop inspection.</td>
                <td className="py-4 px-5 text-loss font-medium">Riders rejected; transport costs lost.</td>
                <td className="py-4 px-5">Only immediate physical spot check.</td>
                <td className="py-4 px-5 font-mono">Immediate / Unenforceable</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-white">
                  Bank CPO (Cheque)
                  <span className="block font-normal text-[11px] text-muted-foreground">Standard for vehicles & land</span>
                </td>
                <td className="py-4 px-5">Funds guaranteed, but locked inflexibly.</td>
                <td className="py-4 px-5">Safe funds, but branch clearing delays.</td>
                <td className="py-4 px-5">Zero programmatic milestones.</td>
                <td className="py-4 px-5 font-mono">Bank Branch Arbitration</td>
              </tr>
              <tr className="bg-gold/5 text-white">
                <td className="py-4 px-5 font-bold text-gold">
                  Vyllion Digital Escrow
                  <span className="block font-normal text-[11px] text-gold/80">Bank-segregated custodial escrow</span>
                </td>
                <td className="py-4 px-5 text-emerald font-semibold">100% Protected. Funds return if terms fail.</td>
                <td className="py-4 px-5 text-emerald font-semibold">100% Guaranteed. Funds locked before dispatch.</td>
                <td className="py-4 px-5 font-medium text-white">24h to 7 days agreed inspection period.</td>
                <td className="py-4 px-5 font-mono font-bold text-gold">48 to 72 Hours Neutral Review</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3 Concrete Ethiopian Trade Scenarios */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
            <div className="font-mono text-xs font-semibold text-gold">SCENARIO 01</div>
            <h3 className="mt-2 text-base font-semibold text-white">Telegram & Social Shops</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Buyers in regional cities (Hawassa, Adama, Bahir Dar) fear sending upfront money to Addis Telegram merchants. Vyllion locks the deposit in bank custody: the merchant ships knowing money is real, and the buyer inspects before payment releases.
            </p>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
            <div className="font-mono text-xs font-semibold text-gold">SCENARIO 02</div>
            <h3 className="mt-2 text-base font-semibold text-white">Automotive Sales (Bole / Gotera)</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Paying 1.5M+ Birr upfront leaves car buyers vulnerable to undisclosed engine defects or customs tax issues. With Vyllion, funds are placed in escrow with an agreed 48-hour mechanical diagnostic window at a trusted garage.
            </p>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
            <div className="font-mono text-xs font-semibold text-gold">SCENARIO 03</div>
            <h3 className="mt-2 text-base font-semibold text-white">Property & Construction Advances</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Cash advances to contractors or land sellers often lead to stalled works or contested title deeds. Vyllion releases money strictly upon verified municipal cadastre transfer or architect-certified milestones.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3. THE 4-STEP ESCROW PROTECTION FLOW
   ═══════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Agreement & Terms",
      desc: "Buyer and seller define deal price, inspection duration, and release conditions through a standardized digital agreement.",
    },
    {
      num: "02",
      title: "Bank Custody Lock",
      desc: "Buyer deposits funds into Vyllion's segregated partner commercial bank account. Funds are verified and locked.",
    },
    {
      num: "03",
      title: "Dispatch & Inspection",
      desc: "Seller delivers goods, transfers title, or completes work. Buyer conducts physical or technical inspection within the agreed window.",
    },
    {
      num: "04",
      title: "Automated Release",
      desc: "Buyer approves release and funds disburse immediately to the seller. If conditions are not satisfied, buyer receives a full refund.",
    },
  ]

  return (
    <section id="how-it-works" className="border-b border-surface-3/40 bg-surface-0/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            TRANSACTION LIFECYCLE
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Four steps to complete transaction certainty.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A simple, legally enforceable workflow engineered for high-value commercial trade.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex flex-col justify-between rounded-xl border border-surface-3 bg-surface-1 p-6"
            >
              <div>
                <div className="font-mono text-xl font-bold text-gold">
                  {step.num}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-surface-3/50 pt-3">
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  STEP {step.num} GUARANTEE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. HIGH-IMPACT DEAL CATEGORIES IN ETHIOPIA
   ═══════════════════════════════════════════════════════════════ */
function DealCategoriesSection() {
  const categories = [
    {
      title: "Vehicles & Heavy Equipment",
      tag: "AUTOMOTIVE",
      desc: "Commercial trucks, passenger cars, and construction machinery. Eliminates payment disputes with defined garage inspection windows before title transfer.",
      terms: "24h to 72h mechanical diagnostic clauses",
    },
    {
      title: "Real Estate & Construction",
      tag: "PROPERTY",
      desc: "Secures residential property deposits, commercial leases, and stage-by-stage construction milestones (foundation, structure, finishes).",
      terms: "Verified cadastre title & engineer milestone signs",
    },
    {
      title: "B2B Wholesale & Agricultural Trade",
      tag: "COMMODITIES",
      desc: "Wholesale coffee, sesame, grain, and manufacturing inputs. Buyers verify quality grade and certified weight upon arrival before payout.",
      terms: "Warehouse waybill & quality inspection clearance",
    },
    {
      title: "E-Commerce & Digital Commerce",
      tag: "ONLINE SHOPS",
      desc: "Enables Telegram, TikTok, and marketplace sellers to ship confidently to customers across Ethiopia with guaranteed settlement upon package delivery.",
      terms: "Courier tracking & customer delivery verification",
    },
  ]

  return (
    <section id="use-cases" className="border-b border-surface-3/40 bg-surface-0 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            MARKET VERTICALS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engineered for high-stakes commerce.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Any transaction where quality, delivery, or ownership transfer must be verified before payment releases.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-surface-3 bg-surface-1 p-7 transition-colors hover:border-surface-4"
            >
              <div>
                <span className="font-mono text-[10px] font-semibold tracking-wider text-gold uppercase">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-surface-3/60 pt-3">
                <span className="font-mono text-[11px] text-muted-foreground">
                  Standard Clause: <span className="text-white font-medium">{item.terms}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   5. DISPUTE ARBITRATION & LEGAL GUARANTEE
   ═══════════════════════════════════════════════════════════════ */
function DisputeArbitrationSection() {
  return (
    <section className="border-b border-surface-3/40 bg-surface-0/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              LEGAL RESOLUTION FRAMEWORK
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Neutral arbitration. Resolved in days, not years.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Commercial court disputes in Ethiopia can take 2 to 4 years and significant legal expenses. Vyllion operates as an objective contractual escrow agent: disputes are evaluated against documented evidence within 48 to 72 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Tripartite Escrow Agreements</h4>
                  <p className="text-xs text-muted-foreground">Legally binding three-party agreement defining precise release triggers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Objective Evidence Examination</h4>
                  <p className="text-xs text-muted-foreground">Waybills, courier receipt logs, cadastre reports, and certified garage diagnostics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Guaranteed Fund Security</h4>
                  <p className="text-xs text-muted-foreground">Disputed funds remain securely frozen in bank custody until mutually resolved.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8">
            <h3 className="font-heading text-lg font-semibold text-white">
              The Vyllion Escrow Charter
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Vyllion Technologies PLC acts strictly as an impartial custodial intermediary. We do not take title to goods, do not trade on our own account, and maintain zero co-mingling of client funds with operational finances.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-surface-3 pt-6 text-xs">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">ARBITRATION WINDOW</span>
                <div className="mt-1 font-mono font-bold text-gold">48 to 72 Hours</div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">CUSTODY STRUCTURE</span>
                <div className="mt-1 font-mono font-bold text-white">Bank Segregated</div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-surface-3 bg-surface-0/60 p-4">
              <span className="font-mono text-[10px] text-gold uppercase font-semibold">LEGAL COMPLIANCE</span>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                Structured in compliance with Ethiopian commercial law and National Bank of Ethiopia financial guidelines.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   6. PRE-LAUNCH PILOT ONBOARDING
   ═══════════════════════════════════════════════════════════════ */
function PreLaunchPilotSection() {
  const [formData, setFormData] = useState({
    role: "buyer",
    dealType: "Vehicle Sale",
    amount: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: (import.meta as any).env?.VITE_WEB3FORMS_KEY || "",
          subject: `Vyllion Pilot Access Request — ${formData.name} (${formData.dealType})`,
          ...formData,
        }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        throw new Error("Failed")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="pilot" className="bg-surface-0 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            PRE-LAUNCH PILOT ONBOARDING
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join our private beta & pilot rollout.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We are onboarding high-volume automotive dealerships, property developers, commodity traders, and commercial partners across Addis Ababa ahead of public launch. Register your interest below or connect directly with our founding team.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-12 rounded-xl border border-emerald/40 bg-emerald/10 p-8 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald/20 text-emerald text-xl font-bold">
              ✓
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">Pilot Request Received</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Thank you, {formData.name}. A Vyllion executive officer will review your parameters and contact you regarding private beta onboarding.
            </p>
            <div className="mt-6 border-t border-emerald/20 pt-4 font-mono text-xs text-emerald">
              Direct: contact@vyllion.com • Addis Ababa, Ethiopia
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 rounded-xl border border-surface-3 bg-surface-1 p-8 shadow-xl">
            
            {/* Role Toggle */}
            <div className="mb-6">
              <label className="mb-2 block font-mono text-xs text-muted-foreground uppercase">
                Your Role / Organization Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "buyer", label: "Buyer / Client" },
                  { id: "seller", label: "Merchant / Dealer" },
                  { id: "broker", label: "Platform / Bank" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: item.id })}
                    className={`rounded-lg py-2.5 text-center text-xs font-medium transition-all ${
                      formData.role === item.id
                        ? "border border-gold bg-gold/10 text-gold font-semibold"
                        : "border border-surface-3 bg-surface-0/60 text-muted-foreground hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Deal Type and Amount */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Transaction Vertical
                </label>
                <select
                  value={formData.dealType}
                  onChange={(e) => setFormData({ ...formData, dealType: e.target.value })}
                  className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white focus:border-gold focus:outline-none"
                >
                  <option value="Vehicle Sale">Vehicle Sale (Car / Equipment)</option>
                  <option value="Real Estate">Real Estate / Land Advance</option>
                  <option value="B2B Wholesale">B2B Wholesale / Commodity</option>
                  <option value="E-Commerce">E-Commerce / Social Commerce</option>
                  <option value="Service Contract">Service / Construction Contract</option>
                  <option value="Other">Other Deal Structure</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Estimated Transaction Size (ETB)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1,500,000"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Phone / Telegram
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+251 9..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mt-5">
              <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                Expected Volume or Integration Scope (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Describe your typical deals, inspection requirements, or timeline..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none resize-none"
              />
            </div>

            {status === "error" && (
              <div className="mt-4 rounded-lg border border-loss/40 bg-loss/10 p-3 text-xs text-loss">
                Unable to submit automatically. Please reach us directly at{" "}
                <a href="mailto:contact@vyllion.com" className="underline font-semibold">
                  contact@vyllion.com
                </a>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-lg bg-gold py-5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover transition-all"
            >
              {status === "submitting" ? "Registering Interest..." : "Register for Early Access & Pilot →"}
            </Button>

            <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-surface-3/50 pt-3 sm:flex-row text-xs">
              <span className="font-mono text-[10px] text-muted-foreground">
                Bole Sub-City, Addis Ababa • contact@vyllion.com
              </span>
              <Link to="/contact" className="text-gold hover:underline font-medium text-[11px]">
                Direct Executive Contact Desk →
              </Link>
            </div>
          </form>
        )}

      </div>
    </section>
  )
}
