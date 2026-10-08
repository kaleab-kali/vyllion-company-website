import { createFileRoute } from "@tanstack/react-router"
import { CryptographicLedgerVisual } from "@/components/CryptographicLedgerVisual"

export const Route = createFileRoute("/security")({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Security & Bank Custody — Vyllion Digital Escrow" },
      {
        name: "description",
        content:
          "Explore Vyllion's financial security framework: segregated commercial bank custodial accounts, hash-chained audit trails, and strict multi-party contract isolation.",
      },
      {
        property: "og:title",
        content: "Security & Bank Custody Architecture — Vyllion",
      },
      {
        property: "og:description",
        content:
          "Certainty over every Birr held in escrow through segregated commercial bank custody and cryptographic audit logs.",
      },
      { property: "og:url", content: "https://vyllion.com/security" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/security" }],
  }),
})

function SecurityPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="relative mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            SECURITY &amp; CUSTODY ARCHITECTURE
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bank custody and cryptographic certainty.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            In escrow, security is legal, financial, and architectural. Vyllion isolates client funds in segregated commercial bank accounts and records every deposit, inspection, and release in tamper-evident logs.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-28 max-w-7xl px-4 sm:px-6 lg:px-8">
        <CryptographicLedgerVisual />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8">
            <span className="font-mono text-xs font-semibold text-gold">01</span>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Segregated Bank Account Custody
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              All transaction funds are held strictly within segregated custodial accounts at licensed partner commercial banks in Ethiopia. Vyllion never co-mingles client deposits with corporate operating capital, ensuring complete asset safety even in insolvency scenarios.
            </p>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8">
            <span className="font-mono text-xs font-semibold text-gold">02</span>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Cryptographic Audit Trails
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Every critical action—deal agreement, bank deposit sweep, inspection notice, dispute evidence submission, and release—generates a cryptographic hash chained to preceding events, making historical records unalterable.
            </p>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8">
            <span className="font-mono text-xs font-semibold text-gold">03</span>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Tripartite Contract Isolation
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Each escrow deal is governed by an independent tripartite legal agreement between the Buyer, Seller, and Vyllion as neutral escrow agent. Release conditions cannot be altered unilaterally by any single party.
            </p>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8">
            <span className="font-mono text-xs font-semibold text-gold">04</span>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Maker-Checker Release Verification
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              High-value settlements require dual internal verification before triggering bank sweep disbursals. No single individual can initiate and release funds without multi-party digital authorization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
