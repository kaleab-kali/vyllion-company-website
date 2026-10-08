import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
  head: () => ({
    meta: [
      { title: "Escrow Capabilities — Vyllion Digital Escrow Platform" },
      {
        name: "description",
        content:
          "Explore Vyllion's complete suite of digital escrow capabilities: multi-party deals, conditional milestone tranches, commercial bank sweeps, and dispute arbitration in Ethiopia.",
      },
      { property: "og:title", content: "Escrow Capabilities Matrix — Vyllion" },
      {
        property: "og:description",
        content:
          "Multi-party deals, custom inspection windows, segregated custody, and neutral arbitration.",
      },
      { property: "og:url", content: "https://vyllion.com/capabilities" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/capabilities" }],
  }),
})

const CAPABILITIES = [
  {
    category: "CUSTODY & BANKING",
    items: [
      { name: "Commercial Bank Account Segregation", desc: "100% of client escrow deposits are isolated in dedicated custodial accounts with partner commercial banks in Ethiopia." },
      { name: "Automated Bank Sweeps", desc: "Direct settlement sweeps between buyer accounts, custodial vaults, and seller destination accounts." },
      { name: "Multi-Currency Settlement", desc: "Native settlement in Ethiopian Birr (ETB) with support for approved foreign currency inflows for diaspora deals." },
    ],
  },
  {
    category: "DEAL STRUCTURE & MILESTONES",
    items: [
      { name: "Multi-Party Contracts", desc: "Supports buyers, sellers, brokers, and independent inspection agents on a single transaction ledger." },
      { name: "Programmable Milestone Tranches", desc: "Release funds incrementally based on verified delivery percentages or construction stages." },
      { name: "Configurable Inspection Windows", desc: "Set inspection durations from 24 hours to 14 days based on deal type (garage test, cadastre search, lab test)." },
    ],
  },
  {
    category: "SECURITY & COMPLIANCE",
    items: [
      { name: "Cryptographic Tamper-Evidence", desc: "Every action, deposit, and verification is recorded with hash-chained cryptographic timestamps." },
      { name: "National Bank Directive Compliance", desc: "Architected strictly within National Bank of Ethiopia financial directives and AML transaction monitoring." },
      { name: "Neutral Arbitration Protocols", desc: "Formal 48–72 hour dispute adjudication backed by objective documentary evidence." },
    ],
  },
]

function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            PLATFORM CAPABILITIES
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Complete institutional escrow feature suite.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From single-item retail purchases to multi-million Birr commercial construction tranches, Vyllion provides the full capability matrix for fraud-proof commerce.
          </p>
        </div>

        {/* Matrix */}
        <div className="mt-16 space-y-12">
          {CAPABILITIES.map((group) => (
            <div key={group.category} className="rounded-xl border border-surface-3 bg-surface-1 p-8">
              <span className="font-mono text-xs font-semibold tracking-wider text-gold uppercase">
                {group.category}
              </span>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-lg border border-surface-3/70 bg-surface-0/50 p-5">
                    <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button className="rounded-lg bg-gold px-8 py-3 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover">
              Inquire for Early Access & Pilot →
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
