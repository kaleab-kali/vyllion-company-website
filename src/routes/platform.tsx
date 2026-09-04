import { createFileRoute } from "@tanstack/react-router"
import { CoreArchitectureEngine } from "@/components/CoreArchitectureEngine"

export const Route = createFileRoute("/platform")({
  component: PlatformPage,
  head: () => ({
    meta: [
      { title: "Platform Architecture — Vyllion | Broker Operating System" },
      { name: "description", content: "Explore the core platform architecture of Vyllion. A highly resilient, deterministic broker operating system built for the Ethiopian Securities Exchange." },
      { property: "og:title", content: "Platform Architecture — Vyllion" },
      { property: "og:description", content: "Deterministic state machine, high-throughput matching logic, and immutable ledger built for ESX member firms." },
      { property: "og:url", content: "https://vyllion.com/platform" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Platform Architecture — Vyllion" },
      { name: "twitter:description", content: "Deterministic state engine and high-throughput order routing for ESX." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/platform" },
    ],
  }),
})

function PlatformPage() {
  return (
    <div className="bg-[#080C12] min-h-screen pt-32 pb-32">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl animate-fade-up">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8B180] uppercase">
            Platform Architecture
          </span>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engineered for <br />
            <span className="text-[#C8B180]">absolute precision.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-[#94A3B8] max-w-3xl">
            Vyllion provides the foundational infrastructure required to operate a secure, high-throughput brokerage on the Ethiopian Securities Exchange. Our architecture prioritizes deterministic execution, ensuring that every financial action, state transition, and limit check is mathematically verifiable and immutably recorded.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-32 animate-fade-up delay-200">
        <CoreArchitectureEngine />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">Deterministic State Management</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              In financial systems, ambiguity introduces catastrophic risk. Vyllion operates on a strictly deterministic state engine. This means that given the exact same sequence of market data, client orders, and administrative overrides, the system will reliably reproduce the exact same financial state. 
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              By enforcing append-only event sourcing for all ledger modifications, we eliminate data drift between your internal balances and the CSD’s official records. Your books are always mathematically sound and instantly auditable.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">High-Throughput Matching Logic</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Processing thousands of concurrent client orders requires an architecture that does not succumb to memory bloat or garbage collection pauses. Vyllion’s routing core is engineered to handle massive order ingestion spikes during market open, validating pre-trade risk and margin thresholds in microseconds.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Our order management system interfaces natively with the ESX ATS, guaranteeing that your institutional algorithms and retail volume flows seamlessly to the exchange without bottlenecking your internal infrastructure.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
