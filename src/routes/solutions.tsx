import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      {
        title: "Escrow Solutions — Vyllion | Tailored for Ethiopian Commerce",
      },
      {
        name: "description",
        content:
          "Purpose-built escrow protection for Real Estate, Automotive, B2B Commodity Wholesale, Social Commerce, and Diaspora Investments in Ethiopia.",
      },
      {
        property: "og:title",
        content: "Escrow Solutions by Industry — Vyllion",
      },
      {
        property: "og:description",
        content:
          "Bank-segregated digital escrow solutions tailored for vehicles, property advances, wholesale trade, and online marketplaces in Ethiopia.",
      },
      { property: "og:url", content: "https://vyllion.com/solutions" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/solutions" }],
  }),
})

const SOLUTIONS = [
  {
    title: "Vehicles & Heavy Equipment",
    tag: "AUTOMOTIVE",
    subtitle: "Second-hand cars, commercial trucks, and construction machinery",
    problem: "Buyers fear paying 1.5M+ ETB upfront before mechanical verification; sellers fear road tests without guaranteed funds.",
    escrowModel: "Buyer deposits purchase price into bank custody. Parties agree on a 48-hour mechanical diagnostic window at a trusted garage. Title transfers and funds disburse only upon road test clearance.",
    clauses: ["48-Hour Mechanical Diagnostic Window", "Customs & Tax Clearance Verification", "Automated Title Deed Release"],
  },
  {
    title: "Real Estate & Construction",
    tag: "PROPERTY",
    subtitle: "Land deposits, residential home sales, and contractor milestones",
    problem: "Advance cash deposits to private sellers or developers carry high fraud risks, dual-deed scams, and delayed project construction.",
    escrowModel: "Funds are locked in segregated bank accounts and released milestone-by-milestone: 20% on foundation, 40% on structural framing, and final settlement upon municipal cadastre title transfer.",
    clauses: ["Municipal Cadastre Verification", "Architect/Engineer Milestone Sign-Off", "Deposit Return Guarantee on Title Failure"],
  },
  {
    title: "B2B Agriculture & Commodities",
    tag: "WHOLESALE",
    subtitle: "Coffee, sesame, grain, teff, and industrial raw materials",
    problem: "Suppliers in regional zones (Jimma, Sidama, Gondar) demand full payment before transport; Addis buyers cannot verify moisture and grade until arrival.",
    escrowModel: "Buyer locks payment before shipping begins. When trucks arrive at the Addis warehouse, certified scale weight and moisture tests are conducted within 24 hours before funds disburse to cooperatives.",
    clauses: ["Certified Weight & Grade Inspection", "24-Hour Warehouse Arrival Verification", "Pro-Rata Adjustment on Grade Variance"],
  },
  {
    title: "Social Commerce & Telegram Shops",
    tag: "RETAIL & E-COMMERCE",
    subtitle: "Cross-city retail between Addis Ababa and regional cities",
    problem: "Merchants on Telegram and TikTok lose sales because regional buyers refuse advance CBE transfers out of scam fear.",
    escrowModel: "Buyer locks payment via bank transfer or mobile money. Merchant ships via courier. Buyer receives and inspects goods within 24 hours; payment is instantly disbursed to the seller.",
    clauses: ["Courier Waybill Tracking", "24-Hour Consumer Inspection Window", "Instant Disbursal upon Delivery Approval"],
  },
  {
    title: "Diaspora Remittance & Investments",
    tag: "DIASPORA",
    subtitle: "Overseas Ethiopians funding local business, land, or family projects",
    problem: "Sending remittances to third parties for home construction or business deals frequently results in misappropriation.",
    escrowModel: "Diaspora investors fund verified milestones directly into Ethiopian commercial bank custody. Funds only disburse to contractors upon photographic and engineer-verified proof of progress.",
    clauses: ["Milestone Photographic & Physical Proof", "Direct Contractor Disbursal", "Complete Transparent Audit Ledger"],
  },
]

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            COMMERCIAL SOLUTIONS
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Escrow structured for every high-value deal.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every industry in Ethiopia has unique commercial risks. Vyllion provides specialized escrow frameworks with custom inspection rules, milestone tranches, and legal arbitration.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 space-y-8">
          {SOLUTIONS.map((sol, i) => (
            <div
              key={sol.title}
              className="rounded-xl border border-surface-3 bg-surface-1 p-8 sm:p-10 transition-colors hover:border-surface-4"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-surface-3/60 pb-6 sm:flex-row sm:items-center">
                <div>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-gold uppercase">
                    {sol.tag} • SOLUTION 0{i + 1}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {sol.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">{sol.subtitle}</p>
                </div>

                <Link to="/contact">
                  <Button className="h-9 rounded-lg bg-gold px-5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover">
                    Inquire For Solution →
                  </Button>
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs font-semibold text-loss uppercase">The Current Risk</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {sol.problem}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="font-mono text-xs font-semibold text-emerald uppercase">The Vyllion Escrow Model</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {sol.escrowModel}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {sol.clauses.map((clause) => (
                      <span
                        key={clause}
                        className="rounded-md border border-surface-3 bg-surface-0/60 px-2.5 py-1 font-mono text-[11px] text-white"
                      >
                        ✓ {clause}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
