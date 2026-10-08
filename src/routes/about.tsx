import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About Vyllion — Building Institutional Trust for Ethiopian Commerce",
      },
      {
        name: "description",
        content:
          "Vyllion Technologies builds independent digital escrow infrastructure in Addis Ababa, enabling secure, fraud-free transactions across Ethiopia through commercial bank custody.",
      },
      {
        name: "keywords",
        content:
          "About Vyllion, Vyllion Escrow, Kaleab Girma, Ezana Tegener, Selam Bruke, Escrow Ethiopia, Fintech Addis Ababa",
      },
      {
        property: "og:title",
        content: "About Vyllion Technologies — Digital Escrow Platform",
      },
      {
        property: "og:description",
        content:
          "Meet the leadership team and mission behind Ethiopia's dedicated digital escrow infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com/about" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/about" }],
  }),
})

/* ═══════════════════════════════════════════════════════════════
   LEADERSHIP PROFILES
   ═══════════════════════════════════════════════════════════════ */
const TEAM_MEMBERS = [
  {
    name: "Kaleab Girma",
    role: "Chief Executive Officer (CEO)",
    initials: "KG",
    bio: "Leads company vision, banking partnerships, and strategic execution. Focused on building regulatory-compliant trust infrastructure that unlocks commercial potential across Ethiopia and East Africa.",
    focus: "Strategy & Banking Partnerships",
  },
  {
    name: "Ezana Tegener",
    role: "Chief Technology Officer (CTO)",
    initials: "ET",
    bio: "Directs technical architecture, multi-party condition verification, and security protocols. Engineered transaction isolation, automated condition verification pipelines, and cryptographic audit trails.",
    focus: "Core Architecture & Security",
  },
  {
    name: "Selam Bruke",
    role: "Chief Financial Officer (CFO)",
    initials: "SB",
    bio: "Oversees financial governance, segregated custodial account compliance, and settlement reconciliation with commercial banking partners. Ensures every Birr in escrow is ring-fenced and auditable.",
    focus: "Financial Operations & Custody",
  },
]

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE COMPONENT (4 CLEAN, NON-REPETITIVE SECTIONS)
   ═══════════════════════════════════════════════════════════════ */
function AboutPage() {
  return (
    <div className="min-h-svh w-full bg-surface-0 text-foreground pt-20">
      {/* 1. Mission & Hero Section */}
      <AboutHeroSection />

      {/* 2. The Ethiopian Trust Gap & Origin Story */}
      <OriginStorySection />

      {/* 3. Executive Leadership Team */}
      <LeadershipSection />

      {/* 4. Corporate Governance & Neutrality */}
      <GovernanceSection />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   1. MISSION HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function AboutHeroSection() {
  return (
    <section className="border-b border-surface-3/40 bg-surface-0 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            INSTITUTIONAL TRUST INFRASTRUCTURE
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building the trust layer for Ethiopian commerce.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vyllion Technologies was founded in Addis Ababa to resolve the central obstacle in Ethiopian trade: the absence of a neutral, bank-backed mechanism to protect buyers and sellers during high-value transactions.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   2. THE ETHIOPIAN TRUST GAP & ORIGIN
   ═══════════════════════════════════════════════════════════════ */
function OriginStorySection() {
  return (
    <section className="border-b border-surface-3/40 bg-surface-0/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              THE COMMERCIAL DILEMMA
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white">
              Why fast money alone wasn't enough.
            </h2>
            <div className="mt-6 space-y-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <p>
                In Ethiopia, electronic bank transfers and mobile wallets revolutionized transaction speed. However, they only solved half of the equation.
              </p>
              <p>
                Moving money became instant, but ensuring that goods, titles, or services were actually delivered remained entirely unprotected. Once funds are transferred via P2P mobile money or direct bank wire, the buyer has zero recourse if the seller ghosts or delivers counterfeit items.
              </p>
              <p>
                Conversely, sellers cannot risk dispatching valuable merchandise or transferring vehicle titles on credit because unpaid invoices and delayed settlements frequently collapse operating cash flow.
              </p>
              <p>
                As a result, high-value trade in Ethiopia remained artificially restricted to people who already knew each other or to physical, cash-based handovers in Addis Ababa. Vyllion was engineered to bridge this divide through conditional, bank-segregated digital escrow.
              </p>
            </div>
          </div>

          <div className="space-y-6 rounded-xl border border-surface-3 bg-surface-1 p-8 lg:col-span-6">
            <h3 className="font-heading text-lg font-semibold text-white">
              The Vyllion Principle
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Commerce flourishes when neither side has to take uncalculated blind risk.
            </p>

            <div className="space-y-4 border-t border-surface-3/60 pt-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-gold">01</span>
                <div>
                  <h4 className="font-semibold text-white">Guaranteed Payout to Sellers</h4>
                  <p className="text-muted-foreground">Funds are verified in partner bank custody before dispatch, eliminating bad debt and phantom orders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-gold">02</span>
                <div>
                  <h4 className="font-semibold text-white">Guaranteed Recourse for Buyers</h4>
                  <p className="text-muted-foreground">Funds are released strictly upon inspection approval, giving buyers the certainty to trade across regional borders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-mono font-bold text-gold">03</span>
                <div>
                  <h4 className="font-semibold text-white">Objective Dispute Adjudication</h4>
                  <p className="text-muted-foreground">Clear contractual terms and fast neutral review eliminate multi-year commercial court deadlocks.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   3. EXECUTIVE LEADERSHIP SECTION
   ═══════════════════════════════════════════════════════════════ */
function LeadershipSection() {
  return (
    <section id="team" className="border-b border-surface-3/40 bg-surface-0 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            LEADERSHIP & GOVERNANCE
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Executive Accountability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Led by experienced software engineers and financial operators based in Addis Ababa, dedicated to financial integrity and security.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-xl border border-surface-3 bg-surface-1 p-7"
            >
              <div>
                <div className="flex items-center gap-3.5 border-b border-surface-3/60 pb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-surface-3 bg-surface-0 font-mono text-sm font-bold text-gold">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-white">
                      {member.name}
                    </h3>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 border-t border-surface-3/60 pt-3">
                <span className="font-mono text-[10px] tracking-wider text-gold uppercase">
                  {member.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   4. CORPORATE GOVERNANCE & NEUTRALITY
   ═══════════════════════════════════════════════════════════════ */
function GovernanceSection() {
  return (
    <section id="governance" className="bg-surface-0/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              INSTITUTIONAL INTEGRITY
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Strict neutrality by charter.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Vyllion does not act as a merchant, broker, or financial speculator. Our charter requires strict neutrality: we hold funds exclusively on behalf of transaction participants in segregated accounts at licensed commercial banks in Ethiopia.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-lg border border-surface-3 bg-surface-1 p-4">
                <div className="font-mono font-bold text-white">Zero Co-Mingling</div>
                <p className="mt-1 text-muted-foreground">Client escrow funds are segregated from corporate operational accounts.</p>
              </div>
              <div className="rounded-lg border border-surface-3 bg-surface-1 p-4">
                <div className="font-mono font-bold text-white">Audit Trails</div>
                <p className="mt-1 text-muted-foreground">Cryptographic timestamp logs for every deposit, inspection, and release.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1 p-8 text-center sm:text-left">
            <h3 className="font-heading text-lg font-semibold text-white">
              Institutional & Banking Inquiries
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              We welcome engagement from commercial banks, institutional platforms, commodity exchanges, and enterprise traders seeking structured escrow integration.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:contact@vyllion.com" className="w-full sm:w-auto">
                <Button className="w-full rounded-lg bg-gold px-6 py-2.5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover">
                  Contact Leadership Team →
                </Button>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full rounded-lg border-surface-3 bg-surface-0 px-6 py-2.5 font-sans text-xs font-semibold tracking-wider text-white uppercase hover:bg-surface-2">
                  Request Early Access
                </Button>
              </Link>
            </div>

            <div className="mt-6 border-t border-surface-3/60 pt-4 font-mono text-[11px] text-muted-foreground">
              Direct: contact@vyllion.com • Addis Ababa, Ethiopia
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
