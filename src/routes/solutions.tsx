import { createFileRoute } from "@tanstack/react-router"
import { BrokerageScaleVisual } from "@/components/BrokerageScaleVisual"

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      {
        title:
          "Brokerage Solutions — Vyllion | Retail, Institutional & Custodian",
      },
      {
        name: "description",
        content:
          "Tailored brokerage solutions for Retail Brokerages, Institutional Trading Desks, and Custodian Banks operating on the Ethiopian Securities Exchange (ESX).",
      },
      {
        property: "og:title",
        content: "Brokerage Solutions by Firm Type — Vyllion",
      },
      {
        property: "og:description",
        content:
          "Purpose-built workflows for mass retail concurrency, block trading DMA, and custodian reconciliation on the ESX.",
      },
      { property: "og:url", content: "https://vyllion.com/solutions" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brokerage Solutions — Vyllion" },
      {
        name: "twitter:description",
        content:
          "Tailored solutions for retail brokers, institutional desks, and custodians on the ESX.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/solutions" }],
  }),
})

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#080C12] pt-32 pb-32">
      <div className="relative mx-auto mb-24 max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-up mx-auto max-w-4xl">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8B180] uppercase">
            SOLUTIONS BY FIRM TYPE
          </span>
          <h1 className="font-heading text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tailored for the <span className="text-[#3B82F6]">Ethiopian</span>{" "}
            Securities Exchange.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#94A3B8]">
            Brokers on the ESX have vastly different operational profiles.
            Whether you are launching a mass-market retail brokerage, managing
            an institutional asset management desk, or operating as a custodian
            bank, Vyllion configures precisely to your risk and compliance
            parameters.
          </p>
        </div>
      </div>

      <div className="animate-fade-up mx-auto mb-32 max-w-[1200px] px-4 delay-200 sm:px-6 lg:px-8">
        <BrokerageScaleVisual />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="animate-fade-up">
            <h2 className="mb-6 border-b border-[#2C384A]/30 pb-4 text-3xl font-bold text-white">
              Retail Brokerage
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Retail brokerages face the challenge of massive concurrency.
              Handling thousands of simultaneous low-value orders requires a
              highly responsive infrastructure. Vyllion automates the heavy
              lifting of retail operations, allowing you to focus on client
              acquisition.
            </p>
            <ul className="space-y-4 text-[15px] font-medium text-[#94A3B8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#C8B180]">01</span> Fully
                automated digital KYC and national ID verification pipelines.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#C8B180]">02</span> Instant
                account provisioning and margin limit assignment.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#C8B180]">03</span> GraphQL API
                endpoints designed for rapid mobile app integration.
              </li>
            </ul>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="mb-6 border-b border-[#2C384A]/30 pb-4 text-3xl font-bold text-white">
              Institutional Desk
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Institutional trading prioritizes stringent pre-trade risk
              controls, algorithmic execution, and complex corporate action
              processing. Vyllion provides the sophisticated tooling required by
              major asset managers and pension funds.
            </p>
            <ul className="space-y-4 text-[15px] font-medium text-[#94A3B8]">
              <li className="flex gap-3">
                <span className="font-bold text-[#3B82F6]">01</span> Complex
                algorithmic routing and Direct Market Access (DMA) controls.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#3B82F6]">02</span> Omnibus
                account management and automated sub-account allocations.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#3B82F6]">03</span> Granular
                Maker-Checker compliance workflows for block trades.
              </li>
            </ul>
          </div>

          <div className="animate-fade-up delay-200">
            <h2 className="mb-6 border-b border-[#2C384A]/30 pb-4 text-3xl font-bold text-white">
              Custodian Bank
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#94A3B8]">
              Custodians serve as the ultimate safeguard for client assets. Your
              infrastructure must provide undeniable reconciliation accuracy and
              immutable audit capabilities across both securities and cash
              accounts.
            </p>
            <ul className="space-y-4 text-[15px] font-medium text-[#94A3B8]">
              <li className="flex gap-3">
                <span className="font-bold text-white/60">01</span> Direct CSD
                integration for real-time asset position mirroring.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white/60">02</span> Automated
                overnight sweeping and stringent client fund segregation.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white/60">03</span> Exhaustive
                regulatory evidence bundling and daily SWIFT reporting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
