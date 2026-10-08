import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources & Documentation — Vyllion Digital Escrow" },
      {
        name: "description",
        content:
          "Escrow fee schedules, tripartite agreement templates, buyer & seller inspection checklists, and commercial bank custody protocols in Ethiopia.",
      },
      { property: "og:title", content: "Escrow Resources & Documentation — Vyllion" },
      {
        property: "og:description",
        content:
          "Escrow fee guidelines, legal templates, inspection checklists, and user guides.",
      },
      { property: "og:url", content: "https://vyllion.com/resources" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/resources" }],
  }),
})

const RESOURCES = [
  {
    title: "Tripartite Escrow Agreement Template",
    category: "LEGAL & CONTRACTS",
    desc: "Standard three-party legal contract governing rights, obligations, inspection windows, and release conditions under Ethiopian law.",
  },
  {
    title: "Buyer & Seller Inspection Guide",
    category: "OPERATIONAL PROTOCOL",
    desc: "How to define objective inspection criteria for automotive mechanical tests, property cadastre searches, and warehouse commodity verification.",
  },
  {
    title: "Dispute Submission & Evidence Framework",
    category: "ARBITRATION",
    desc: "Step-by-step instructions for submitting waybills, diagnostic reports, and documentary evidence in the event of transaction disagreement.",
  },
  {
    title: "Commercial Bank Custody Protocol",
    category: "COMPLIANCE & CUSTODY",
    desc: "Detailed documentation on how escrow funds are segregated, isolated, and audited with partner commercial banks in Ethiopia.",
  },
]

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            DOCUMENTATION &amp; GUIDES
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Escrow resources and documentation.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Practical resources, legal contracts, and operational guidelines to help buyers, sellers, and brokers conduct fraud-proof transactions in Ethiopia.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <div key={r.title} className="rounded-xl border border-surface-3 bg-surface-1 p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-semibold text-gold uppercase tracking-wider">
                  {r.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {r.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-surface-3/60 pt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-foreground">PDF / Guide</span>
                <Link to="/contact">
                  <span className="text-xs font-semibold text-gold hover:underline">
                    Request Document →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="mt-16 rounded-xl border border-surface-3 bg-surface-1 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">Need a custom escrow agreement?</h3>
            <p className="mt-1 text-xs text-muted-foreground">Our transaction officers can draft bespoke milestone clauses for your transaction.</p>
          </div>
          <Link to="/contact" className="mt-4 sm:mt-0 block">
            <Button className="rounded-lg bg-gold px-6 py-2.5 font-sans text-xs font-semibold text-surface-0 uppercase shadow-sm hover:bg-gold-hover">
              Contact Us →
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
