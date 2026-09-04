import { createFileRoute } from "@tanstack/react-router"
import { ApiGatewayVisual } from "@/components/ApiGatewayVisual"

export const Route = createFileRoute("/integrations")({
  component: IntegrationsPage,
  head: () => ({
    meta: [
      { title: "Integrations & API Gateway — Vyllion | ESX FIX 4.4 & CSD" },
      { name: "description", content: "Connect your brokerage to the Ethiopian Securities Exchange via certified FIX 4.4, Central Securities Depository (ISO 20022), and Ethiopian commercial banking APIs." },
      { property: "og:title", content: "Market Connectivity & Integrations — Vyllion" },
      { property: "og:description", content: "Low-latency FIX 4.4 engine, Fayda eKYC, CSD ISO 20022 settlement rails, and commercial bank sweeps." },
      { property: "og:url", content: "https://vyllion.com/integrations" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Integrations & API — Vyllion" },
      { name: "twitter:description", content: "Native connectivity to ESX ATS, Fayda ID, and CSD clearing." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/integrations" },
    ],
  }),
})

function IntegrationsPage() {
  return (
    <div className="bg-[#080C12] min-h-screen pt-32 pb-32">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl animate-fade-up">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#3B82F6] uppercase">
            Market Connectivity
          </span>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Connected to the <br />
            <span className="text-[#C8B180]">entire ecosystem.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-[#94A3B8] max-w-3xl">
            A broker back office does not operate in a vacuum. It must communicate rapidly and securely with exchanges, depositories, banks, and regulators. Vyllion is engineered with a native, highly secure API gateway that abstracts the complexity of external integrations.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-32 animate-fade-up delay-200">
        <ApiGatewayVisual />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">1. ESX FIX Gateway</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Our integration with the Ethiopian Securities Exchange Automated Trading System (ATS) relies on a certified FIX 4.4 engine. This is not a bolt-on solution; it is a core component built specifically for ultra-low latency execution.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              The gateway handles automated session recovery, deterministic heartbeat management to prevent session drops during high volatility, and drop-copy ingestion for continuous trade reconciliation.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">2. CSD & Settlement Rails</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Interfacing with the Central Securities Depository requires absolute precision. Vyllion supports ISO 20022 messaging standards to push settlement instructions and pull finalized position balances.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              This enables true T+0 position shadowing, ensuring your risk engine always calculates limits based on actual, cryptographically verified depository holdings rather than estimated internal balances.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">3. Commercial Banking APIs</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Liquidity management is fully automated. Vyllion connects to the APIs of major Ethiopian commercial banks to handle client deposits, dividend payouts, and automated end-of-day sweeps.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Cash reconciliations that previously took accounting teams hours are completed in seconds through straight-through processing (STP) rules, instantly updating client purchasing power.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">4. Extensible Client APIs</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Your technology team has full access to the same REST and GraphQL endpoints that power the Vyllion frontend. 
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Build bespoke mobile trading apps, connect proprietary algorithmic trading systems, or push reporting data directly into your existing Enterprise Resource Planning (ERP) software using secure, token-based authentication.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
