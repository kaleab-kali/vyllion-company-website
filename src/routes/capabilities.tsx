import { createFileRoute } from "@tanstack/react-router"
import { CapabilitiesMatrix } from "@/components/CapabilitiesMatrix"

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
  head: () => ({
    meta: [
      { title: "Core Capabilities — Vyllion | 249 Brokerage Features" },
      {
        name: "description",
        content:
          "Explore Vyllion's 249 discrete brokerage capabilities across 20 modules: from Client Onboarding and Pre-Trade Risk to DvP Settlement Finality on the ESX.",
      },
      { property: "og:title", content: "Core Capabilities Matrix — Vyllion" },
      {
        property: "og:description",
        content:
          "249 discrete capabilities mapping directly to ESX BBO/OMS Vendor Eligibility Guidelines.",
      },
      { property: "og:url", content: "https://vyllion.com/capabilities" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Core Capabilities — Vyllion" },
      {
        name: "twitter:description",
        content:
          "Complete coverage of ESX broker back office and order management specifications.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/capabilities" }],
  }),
})

function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#080C12] pt-32 pb-32">
      <div className="relative mx-auto mb-24 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-4xl">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8B180] uppercase">
            Platform Capabilities
          </span>
          <h1 className="font-heading text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Everything required to <br />
            <span className="text-[#3B82F6]">operate efficiently.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#94A3B8]">
            A modern brokerage cannot rely on fragmented systems. Vyllion
            provides 249 discrete capabilities across 20 tightly coupled
            modules. Every capability maps directly to the functional
            requirements outlined in the ESX BBO/OMS Vendor Eligibility
            Guidelines.
          </p>
        </div>
      </div>

      <div className="animate-fade-up mx-auto mb-32 max-w-[1200px] px-4 delay-200 sm:px-6 lg:px-8">
        <CapabilitiesMatrix />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 md:grid-cols-2">
          <div className="animate-fade-up border-b border-[#2C384A]/30 pb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              1. Client Lifecycle Management
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Vyllion transforms client onboarding from a manual, paper-based
              burden into a fully digital, straight-through process. Our native
              anti-money laundering (AML) and Know Your Customer (KYC) engines
              automatically cross-reference applicants against designated
              watchlists.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              We elegantly handle the complexities of the Ethiopian market,
              effortlessly mapping deeply nested corporate hierarchies, joint
              account ownerships, and delegated trading authorities while
              maintaining distinct risk profiles for every entity.
            </p>
          </div>

          <div className="animate-fade-up border-b border-[#2C384A]/30 pb-12 delay-100">
            <h2 className="mb-6 text-3xl font-bold text-white">
              2. Order Management & Routing
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Our Order Management System (OMS) is the high-performance heart of
              the platform. Orders originating from the mobile app,
              institutional FIX drops, or the dealer terminal are instantly
              evaluated against 18 distinct pre-trade risk vectors.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              If an order passes margin, concentration, and compliance checks,
              it is routed to the ESX ATS via our ultra-low latency FIX gateway.
              The entire cycle—from client click to exchange acknowledgment—is
              measured in microseconds.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="mb-6 text-3xl font-bold text-white">
              3. Settlement & CSD Recon
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Execution is only half the battle; settlement finality is where
              true risk lies. Vyllion's clearing module tracks the precise
              lifecycle of every trade from T+0 execution through to T+2 final
              settlement.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              By integrating directly with the Central Securities Depository
              (CSD), Vyllion continuously reconciles your internal ledgers
              against the official depository records, instantly flagging
              exceptions before they escalate into settlement failures.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="mb-6 text-3xl font-bold text-white">
              4. Financial Accounting
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Forget manual EOD batch processing. Vyllion maintains a
              continuous, real-time double-entry general ledger. Every trade
              execution, corporate action, and cash deposit immediately updates
              both client balances and firm-level asset/liability accounts.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              This architecture ensures absolute synchronization between your
              trading desk and your finance department, allowing you to generate
              precise trial balances and regulatory capital adequacy reports on
              demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
