import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Vyllion | Digital Escrow Platform" },
      {
        name: "description",
        content:
          "Terms of Service governing the use of Vyllion Technologies PLC's institutional digital escrow platform, milestone releases, and dispute resolution in Ethiopia.",
      },
      { property: "og:title", content: "Terms of Service — Vyllion Digital Escrow" },
      {
        property: "og:description",
        content:
          "Terms of Service governing digital escrow transactions, bank custody protocols, and milestone settlements with Vyllion Technologies PLC.",
      },
      { property: "og:url", content: "https://vyllion.com/terms" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms of Service — Vyllion Digital Escrow" },
      {
        name: "twitter:description",
        content:
          "Terms of Service for Vyllion digital escrow transactions and bank custody in Ethiopia.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/terms" }],
  }),
})

function TermsPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            LEGAL AGREEMENT
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: October 2026 • Addis Ababa, Ethiopia</p>
        </div>

        <div className="prose prose-invert max-w-none text-xs leading-relaxed text-muted-foreground">
        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          the digital escrow platform provided by Vyllion Technologies PLC
          (&quot;Vyllion&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a private limited company registered
          in Addis Ababa, Ethiopia. By initiating an escrow transaction, connecting
          via API, or using our web interface (&quot;User&quot;, &quot;Buyer&quot;, &quot;Seller&quot;, &quot;you&quot;, or
          &quot;your&quot;), you agree to be bound by these Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          2. Description of Escrow Service
        </h2>
        <p className="mb-4 leading-relaxed">
          Vyllion operates a technology infrastructure platform facilitating
          conditional digital escrow settlements. For each transaction:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            Buyer deposits transaction funds into a segregated custodial account
            maintained with licensed partner commercial banks in Ethiopia.
          </li>
          <li>
            Funds remain ring-fenced and locked until agreed delivery milestones
            or inspection conditions are verified.
          </li>
          <li>
            Upon verified fulfillment or buyer acceptance, funds are disbursed
            directly to the seller.
          </li>
          <li>
            In the event of unfulfilled terms or cancellation within agreed terms,
            funds are refunded to the buyer in accordance with transaction rules.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          3. Bank Custody &amp; Financial Regulation
        </h2>
        <p className="mb-4 leading-relaxed">
          Vyllion Technologies PLC is a financial technology software provider.
          All escrow funds are held strictly within segregated custodial accounts
          at licensed commercial banks operating under the directives of the
          National Bank of Ethiopia (NBE). Vyllion does not co-mingle customer
          escrow deposits with corporate operational capital.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          4. Inspection Windows &amp; Milestone Releases
        </h2>
        <p className="mb-4 leading-relaxed">
          Buyers and sellers agree upon a designated inspection window (standard
          24 to 72 hours, or custom agreed timeline) upon delivery of goods or
          completion of milestones. If the buyer does not submit a dispute or
          rejection before the expiration of the inspection window, acceptance is
          deemed confirmed, and milestone payout is initiated.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          5. Neutral Dispute Resolution &amp; Arbitration
        </h2>
        <p className="mb-4 leading-relaxed">
          In case of dispute, Vyllion acts as a neutral technology arbiter. Both
          parties may submit verifiable documentation, tracking receipts, and
          contractual evidence. Escrow funds remain locked in bank custody until
          mutual settlement is reached or an objective arbitration ruling is issued.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          6. Fees &amp; Billing
        </h2>
        <p className="mb-4 leading-relaxed">
          Escrow transaction fees are clearly disclosed prior to transaction
          creation and may be borne by the buyer, seller, or split equally, as
          specified during deal initialization.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          7. Governing Law
        </h2>
        <p className="mb-4 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the
          laws of the Federal Democratic Republic of Ethiopia. Any disputes
          arising out of or in connection with these Terms shall be subject to
          the exclusive jurisdiction of the competent courts in Addis Ababa.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          8. Contact Information
        </h2>
        <p className="mb-4 rounded-md border border-surface-3 bg-surface-1 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
          Vyllion Technologies PLC
          <br />
          Addis Ababa, Ethiopia
          <br />
          Email: legal@vyllion.com / contact@vyllion.com
        </p>
      </div>
    </div>
  </div>
  )
}

