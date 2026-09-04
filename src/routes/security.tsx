import { createFileRoute } from "@tanstack/react-router"
import { CryptographicLedgerVisual } from "@/components/CryptographicLedgerVisual"

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security & Compliance — Vyllion | Cryptographic Audit Trails" },
      { name: "description", content: "Explore Vyllion's financial-grade security architecture: hash-chained audit stores, cryptographic maker-checker approvals, and strict single-tenant database isolation." },
      { property: "og:title", content: "Security & Compliance Architecture — Vyllion" },
      { property: "og:description", content: "Mathematical certainty over every trade and ledger adjustment through tamper-evident cryptographic hash chains." },
      { property: "og:url", content: "https://vyllion.com/security" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Security & Compliance — Vyllion" },
      { name: "twitter:description", content: "Cryptographic audit stores, single-tenant isolation, and maker-checker workflows for capital markets." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/security" },
    ],
  }),
})

function SecurityPage() {
  return (
    <div className="bg-[#080C12] min-h-screen pt-32 pb-32">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl animate-fade-up">
          <span className="mb-4 inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8B180] uppercase">
            Security & Compliance
          </span>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Trust through <br />
            <span className="text-[#C8B180]">cryptography.</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-[#94A3B8] max-w-3xl">
            In capital markets, security cannot be an afterthought. Vyllion enforces mathematical certainty over every action through hash-chained logs, strict role-based access controls, and true data isolation. 
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-32 animate-fade-up delay-200">
        <CryptographicLedgerVisual />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">1. Cryptographic Audit Trails</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Vyllion utilizes tamper-evident, hash-chained audit logs. Every critical system action—whether a trade execution or a configuration change—generates a cryptographic hash that incorporates the signature of the previous action.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Any attempt to manually alter the database state breaks the cryptographic chain, instantly alerting compliance officers. Your regulatory evidence submitted to the Capital Market Authority (CMA) is mathematically undeniable.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">2. Maker-Checker Workflows</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Financial risk demands human oversight. Every sensitive configuration—from altering fee schedules to adjusting client risk limits and margin rates—is protected by a strict 4-eyes principle. 
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              The "Maker" proposes the change, and an authorized "Checker" must explicitly cryptographically sign and approve it before it takes effect on the platform. No single rogue employee can bypass systemic controls.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">3. Single-Tenant Isolation</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              We do not pool your firm's sensitive trading data with competitors in a shared database schema. Vyllion employs strict single-tenant isolation guarantees at the infrastructure level.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Your client information, algorithmic trading strategies, and proprietary order flow are completely logically separated, eliminating any possibility of cross-contamination or unauthorized data leakage.
            </p>
          </div>

          <div className="animate-fade-up delay-100">
            <h2 className="text-3xl font-bold text-white mb-6">4. Role-Based Access Control</h2>
            <p className="text-[16px] leading-relaxed text-[#94A3B8] mb-6">
              Vyllion provides granular, effectively-dated Role-Based Access Control (RBAC). This ensures that traders, risk managers, and compliance officers only see and act upon what their specific role and department permits.
            </p>
            <p className="text-[16px] leading-relaxed text-[#94A3B8]">
              Access can be instantly revoked across all active sessions system-wide, immediately freezing accounts in the event of compromised credentials or termination.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
