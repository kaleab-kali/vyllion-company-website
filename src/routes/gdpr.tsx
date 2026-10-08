import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/gdpr")({
  component: GDPRPage,
  head: () => ({
    meta: [
      {
        title:
          "GDPR & Data Protection Policy — Vyllion | Digital Escrow Compliance",
      },
      {
        name: "description",
        content:
          "Learn about Vyllion Technologies PLC's GDPR compliance, financial data protection standards, and client privacy commitments in Ethiopia and Africa.",
      },
      {
        property: "og:title",
        content: "GDPR & Data Protection Policy — Vyllion",
      },
      {
        property: "og:description",
        content:
          "Data protection, bank-grade encryption, and regulatory compliance standards for Vyllion Digital Escrow Platform.",
      },
      { property: "og:url", content: "https://vyllion.com/gdpr" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "GDPR & Data Protection Policy — Vyllion",
      },
      {
        name: "twitter:description",
        content:
          "Data protection and institutional escrow security standards for Vyllion Technologies PLC.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/gdpr" }],
  }),
})

function GDPRPage() {
  return (
    <div className="min-h-screen bg-surface-0 pt-28 pb-32 text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
            COMPLIANCE &amp; SECURITY
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Data Protection &amp; Compliance
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: October 2026 • Addis Ababa, Ethiopia</p>
        </div>

        <div className="prose prose-invert max-w-none text-xs leading-relaxed text-muted-foreground">
        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          1. Introduction
        </h2>
        <p className="mb-4 leading-relaxed">
          At Vyllion Technologies PLC (&quot;Vyllion&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to
          protecting the privacy and security of personal and transaction data. This
          policy outlines how our digital escrow platform processes data in
          compliance with the General Data Protection Regulation (GDPR) and the
          Ethiopian financial data protection framework.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          2. Escrow Data Architecture
        </h2>
        <p className="mb-4 leading-relaxed">
          In the context of the Vyllion digital escrow platform, we process transaction
          and identity verification data strictly to authenticate transacting parties,
          verify milestone delivery conditions, and execute secure commercial bank payouts.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          3. Categories of Data Processed
        </h2>
        <p className="mb-4 leading-relaxed">
          Vyllion processes only the minimum data necessary to guarantee escrow execution:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Identity &amp; KYC Records:</strong> Verified party names, phone
            numbers, business credentials, and KYC tokens required under National Bank of
            Ethiopia anti-fraud directives.
          </li>
          <li>
            <strong>Custody &amp; Settlement Data:</strong> Segregated commercial bank account
            identifiers, milestone amounts, and transaction release triggers.
          </li>
          <li>
            <strong>Verification Logs:</strong> Cryptographic timestamps of deal creation,
            fund deposit, inspection approvals, and dispute submissions.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          4. Data Subject Rights
        </h2>
        <p className="mb-4 leading-relaxed">
          Under GDPR principles and applicable local regulations, users maintain the right to:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>Request access to personal data and escrow transaction histories.</li>
          <li>Request rectification of inaccurate account details.</li>
          <li>
            Request erasure of non-financial records, subject to mandatory banking and
            anti-money laundering retention laws.
          </li>
          <li>Request data portability for transaction logs.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          5. Institutional Security Measures
        </h2>
        <p className="mb-4 leading-relaxed">
          Vyllion employs rigorous security controls to ensure data protection by design:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>End-to-end encryption for all web and API data in transit (TLS 1.3).</li>
          <li>AES-256 encryption at rest for sensitive transaction data.</li>
          <li>Immutable cryptographic audit trails tracking every escrow status transition.</li>
          <li>Multi-signature release authorization for high-value deal disbursements.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          6. Contact Information
        </h2>
        <p className="mb-4 leading-relaxed">
          For inquiries regarding data protection and regulatory compliance, please
          contact our Compliance Team at:
        </p>
        <p className="mb-4 rounded-md border border-surface-3 bg-surface-1 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
          Vyllion Technologies PLC
          <br />
          Addis Ababa, Ethiopia
          <br />
          Email: compliance@vyllion.com / contact@vyllion.com
        </p>
      </div>
    </div>
  </div>
  )
}

