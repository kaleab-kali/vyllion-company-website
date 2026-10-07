import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vyllion | Digital Escrow Platform" },
      {
        name: "description",
        content:
          "Learn how Vyllion Technologies PLC collects, protects, and safeguards personal and transaction data across our digital escrow platform.",
      },
      { property: "og:title", content: "Privacy Policy — Vyllion" },
      {
        property: "og:description",
        content:
          "Privacy practices, escrow data handling, and encryption policies for Vyllion Technologies PLC.",
      },
      { property: "og:url", content: "https://vyllion.com/privacy" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — Vyllion" },
      {
        name: "twitter:description",
        content: "Privacy practices and data handling policies for Vyllion Technologies PLC.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/privacy" }],
  }),
})

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">Last updated: October 2026</p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          1. Overview
        </h2>
        <p className="mb-4 leading-relaxed">
          Vyllion Technologies PLC (&quot;Vyllion&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy
          and is committed to protecting your personal data. This Privacy Policy explains
          how we collect, use, and safeguard information when you visit the Vyllion
          website, initiate digital escrow transactions, or interact with our APIs.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          2. Information We Collect
        </h2>
        <p className="mb-4 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Identity &amp; Contact Information:</strong> Name, phone number,
            email address, and government identification (where required for escrow
            verification and anti-money laundering compliance).
          </li>
          <li>
            <strong>Transaction Details:</strong> Deal amount, milestone specifications,
            delivery verification proofs, and partner bank account numbers.
          </li>
          <li>
            <strong>Usage &amp; Device Data:</strong> IP addresses, browser types, access
            timestamps, and cryptographic request headers.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          3. How We Use Your Information
        </h2>
        <p className="mb-4 leading-relaxed">
          We use the collected data for the following purposes:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            To facilitate conditional escrow deposits, verification milestones, and
            bank settlement payouts.
          </li>
          <li>
            To prevent fraud, verify counterparties, and comply with National Bank of
            Ethiopia (NBE) regulatory directives.
          </li>
          <li>
            To mediate and arbitrate dispute claims using verifiable transaction logs.
          </li>
          <li>
            To maintain cryptographic audit trails of milestone releases.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          4. Data Sharing and Disclosure
        </h2>
        <p className="mb-4 leading-relaxed">
          We do not sell or rent your personal data to third parties. We share
          information strictly under the following conditions:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Partner Commercial Banks:</strong> With licensed partner commercial
            banks holding segregated custodial accounts to authorize settlement sweeps.
          </li>
          <li>
            <strong>Transaction Counterparties:</strong> Limited verification details
            (such as milestone confirmation status) shared between the buyer and seller.
          </li>
          <li>
            <strong>Legal &amp; Regulatory Authorities:</strong> When required by Ethiopian
            law, court orders, or National Bank of Ethiopia financial directives.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          5. Data Security
        </h2>
        <p className="mb-4 leading-relaxed">
          All data in transit is protected using TLS 1.3 encryption, and sensitive
          financial records are encrypted at rest with multi-layer key rotation. Access
          to transaction databases is restricted by strict role-based access control (RBAC).
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          6. Your Rights
        </h2>
        <p className="mb-4 leading-relaxed">
          You have the right to request access to your transaction records, update your
          contact details, and inquire about how your data is held. To exercise these
          rights, please contact our data team.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          7. Contact Us
        </h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4 rounded-md border border-[#2C384A]/60 bg-[#161B22] p-4 font-mono text-sm leading-relaxed">
          Vyllion Technologies PLC
          <br />
          Addis Ababa, Ethiopia
          <br />
          Email: privacy@vyllion.com / contact@vyllion.com
        </p>
      </div>
    </div>
  )
}
