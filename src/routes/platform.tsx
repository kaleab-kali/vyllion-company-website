import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/platform")({
  component: PlatformPage,
  head: () => ({
    meta: [
      { title: "Platform Architecture — Vyllion Digital Escrow Engine" },
      {
        name: "description",
        content:
          "Deterministic state engine, multi-party custody isolation, and automated release mechanics powering Vyllion's Ethiopian digital escrow platform.",
      },
      { property: "og:title", content: "Escrow Platform Architecture — Vyllion" },
      {
        property: "og:description",
        content:
          "Multi-party state machine, segregated bank account custody, and programmable inspection triggers in Ethiopia.",
      },
      { property: "og:url", content: "https://vyllion.com/platform" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/platform" }],
  }),
})

function PlatformPage() {
  const pillars = [
    {
      num: "01",
      title: "Deterministic State Engine",
      desc: "Every transaction progresses through strictly defined state transitions: DRAFT → FUNDED → DISPATCHED → INSPECTION_ACTIVE → RELEASED (or DISPUTE_PENDING → REFUNDED). Unilateral state changes are impossible.",
    },
    {
      num: "02",
      title: "Segregated Bank Custodial Vaults",
      desc: "Funds do not sit in omnibus company balances. Each deal maps to an isolated sub-account with licensed commercial banking partners, audited against National Bank of Ethiopia directives.",
    },
    {
      num: "03",
      title: "Multi-Signature Milestone Triggers",
      desc: "Complex contracts support multi-party authorizations: buyer inspection sign-off, third-party engineer verification, or digital municipal cadastre proofs before funds release.",
    },
    {
      num: "04",
      title: "Automated Reversal & Refund Fail-safes",
      desc: "If seller dispatch fails within the agreed window, or if physical inspection conditions fail verification, the system executes automated bank sweep refunds back to the buyer.",
    },
  ]

  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            CORE ARCHITECTURE
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineered for deterministic settlement.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            In escrow, software must guarantee that funds cannot move until objective contractual triggers are verified. Here is how Vyllion's transaction isolation architecture works.
          </p>
        </div>

        {/* State Machine Overview */}
        <div className="mt-16 rounded-xl border border-surface-3 bg-surface-1 p-8 sm:p-10">
          <div className="border-b border-surface-3/60 pb-6">
            <span className="font-mono text-xs font-semibold text-gold uppercase">
              TRANSACTION LIFECYCLE STATE MACHINE
            </span>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Immutable Escrow State Progression
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5">
            {[
              { step: "01", name: "Agreement Draft", status: "Terms Defined" },
              { step: "02", name: "Bank Sweep Lock", status: "Custody Active" },
              { step: "03", name: "Fulfillment", status: "Waybill / Transfer" },
              { step: "04", name: "Inspection Timer", status: "Active Window" },
              { step: "05", name: "Settlement Release", status: "Disbursed / Refund" },
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-surface-3 bg-surface-0/60 p-4">
                <span className="font-mono text-xs font-bold text-gold">{s.step}</span>
                <div className="mt-1 text-sm font-semibold text-white">{s.name}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{s.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.num} className="rounded-xl border border-surface-3 bg-surface-1 p-8">
              <span className="font-mono text-xs font-semibold text-gold">{p.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1 p-8">
          <div>
            <h3 className="text-base font-semibold text-white">Exploring platform integration?</h3>
            <p className="text-xs text-muted-foreground">Learn how our state machine and bank rails fit your marketplace or corporate flow.</p>
          </div>
          <Link to="/contact">
            <Button className="rounded-lg bg-gold px-6 py-2.5 font-sans text-xs font-semibold text-surface-0 uppercase shadow-sm hover:bg-gold-hover">
              Request Platform Access →
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
