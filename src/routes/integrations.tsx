import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/integrations")({
  component: IntegrationsPage,
  head: () => ({
    meta: [
      {
        title: "Developer API & Banking Integrations — Vyllion Digital Escrow",
      },
      {
        name: "description",
        content:
          "Integrate Vyllion digital escrow directly into your Ethiopian e-commerce store, marketplace app, or ERP. Commercial bank sweeps, Telebirr, and RESTful webhooks.",
      },
      {
        property: "og:title",
        content: "Developer API & Banking Rails — Vyllion Escrow",
      },
      {
        property: "og:description",
        content:
          "Embed bank-segregated digital escrow with webhooks and RESTful endpoints for Ethiopian platforms.",
      },
      { property: "og:url", content: "https://vyllion.com/integrations" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/integrations" }],
  }),
})

function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            DEVELOPER &amp; BANKING RAILS
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Embed escrow into any transaction flow.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Connect your marketplace, online store, or enterprise software directly to Vyllion's escrow engine via standardized REST APIs and partner commercial bank payment sweeps.
          </p>
        </div>

        {/* Integration Architecture */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left: Rails Description */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
              <span className="font-mono text-xs font-semibold text-gold uppercase">01 • PAYMENT RAILS</span>
              <h3 className="mt-2 text-base font-semibold text-white">Commercial Bank &amp; Mobile Sweeps</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Inbound deposits route directly into segregated accounts with commercial banking partners. Supports direct CBE, Telebirr, and national interbank clearing.
              </p>
            </div>

            <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
              <span className="font-mono text-xs font-semibold text-gold uppercase">02 • WEBHOOK ENGINE</span>
              <h3 className="mt-2 text-base font-semibold text-white">Real-Time State Notifications</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Get alerted the moment a buyer funds escrow, an inspection window opens, a delivery is verified, or funds are released to the merchant.
              </p>
            </div>

            <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
              <span className="font-mono text-xs font-semibold text-gold uppercase">03 • DEVELOPER SANDBOX</span>
              <h3 className="mt-2 text-base font-semibold text-white">Safe Simulation Environment</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Test multi-milestone releases, simulated dispute evidence submissions, and automated refunds with mock test data before going live.
              </p>
            </div>
          </div>

          {/* Right: API Code Preview */}
          <div className="rounded-xl border border-surface-3 bg-surface-1 p-6 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-surface-3 pb-3">
              <span className="font-mono text-xs text-muted-foreground">POST /v1/escrow/transactions</span>
              <span className="font-mono text-[10px] text-gold uppercase">JSON REST API</span>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-lg border border-surface-3 bg-surface-0 p-4 font-mono text-xs text-white leading-relaxed">
{`// 1. Create a conditional escrow deal
const deal = await vyllion.escrow.create({
  buyer: {
    phone: "+251911234567",
    name: "Dawit Tadesse"
  },
  seller: {
    phone: "+251922345678",
    name: "Merkato Wholesale PLC"
  },
  currency: "ETB",
  amount: 250000.00,
  inspection_window_hours: 48,
  milestones: [
    {
      id: "ms_dispatch",
      name: "Waybill Confirmed",
      release_pct: 0 // Funds locked
    },
    {
      id: "ms_delivery_inspect",
      name: "Physical Inspection Approved",
      release_pct: 100 // Final payout
    }
  ]
});

// 2. Listen to automated webhook events
app.post("/webhooks/vyllion", (req, res) => {
  const { event, transaction_id } = req.body;
  if (event === "escrow.funds_locked") {
    merchant.notifyDispatchAuthorized(transaction_id);
  }
  res.sendStatus(200);
});`}
            </pre>

            <div className="mt-6 border-t border-surface-3/60 pt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Ready to integrate your marketplace?</span>
              <Link to="/contact">
                <Button className="h-8 rounded-lg bg-gold px-4 font-sans text-xs font-semibold text-surface-0 hover:bg-gold-hover">
                  Request API Sandbox Access →
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
