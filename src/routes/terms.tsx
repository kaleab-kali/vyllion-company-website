import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Vyllion | Capital Market Solutions" },
      { name: "description", content: "Review the Terms of Service for Vyllion, the institutional Broker Back Office and Order Management System provided by Novek ICT Solutions PLC." },
      { property: "og:title", content: "Terms of Service — Vyllion" },
      { property: "og:description", content: "Licensing and usage terms for Vyllion Broker Back Office & OMS platform." },
      { property: "og:url", content: "https://vyllion.com/terms" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms of Service — Vyllion" },
      { name: "twitter:description", content: "Licensing and usage terms for Vyllion Broker Back Office & OMS platform." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/terms" },
    ],
  }),
})

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">
          Last updated: August 2026
        </p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4 leading-relaxed">
          These Terms of Service ("Terms") govern your access to and use of Vyllion, a Broker Back Office and Order Management System provided by Novek ICT Solutions PLC ("Novek", "we", "us", or "our"). By executing a licensing agreement or accessing the platform, the brokerage firm and its authorized users ("Client", "you", or "your") agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
        <p className="mb-4 leading-relaxed">
          Vyllion is an institutional software platform designed for members of the Ethiopian Securities Exchange (ESX). It provides modules for client onboarding, order management, execution routing via FIX protocol, settlement reconciliation, and regulatory reporting. The software is provided under a Software-as-a-Service (SaaS) or dedicated cloud deployment model as specified in your Master Service Agreement (MSA).
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Licensing and Access</h2>
        <p className="mb-4 leading-relaxed">
          Subject to your compliance with these Terms and payment of applicable fees, Novek grants you a non-exclusive, non-transferable, revocable license to access and use Vyllion solely for your internal business operations. You may not:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Reverse engineer, decompile, or disassemble any part of the platform.</li>
          <li>Resell, sublicense, or offer Vyllion as a service bureau to unaffiliated third parties.</li>
          <li>Attempt to circumvent the isolation, security, or audit mechanisms built into the platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Security and Account Responsibility</h2>
        <p className="mb-4 leading-relaxed">
          Clients are responsible for maintaining the confidentiality of their user credentials and for all activities that occur under their accounts. You must implement robust internal access controls and immediately notify Novek of any unauthorized access. Vyllion's Maker-Checker workflows and cryptographic audit trails are provided as structural safeguards, but organizational security remains the Client's responsibility.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Financial Transactions and Liability</h2>
        <p className="mb-4 leading-relaxed">
          Vyllion acts as an instructional routing and ledger system; it does not hold or custody funds. You acknowledge that:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Novek ICT Solutions is not a broker-dealer, clearinghouse, or financial institution.</li>
          <li>We are not responsible for the execution, clearance, or settlement of trades on the ESX or any other venue.</li>
          <li>You assume all financial risk associated with trading errors, limits misconfiguration, or market volatility.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Service Level Agreement (SLA)</h2>
        <p className="mb-4 leading-relaxed">
          System availability, maintenance windows, and support response times are governed by the specific SLA executed alongside your licensing agreement. Novek commits to providing highly available, localized infrastructure within Ethiopia to meet regulatory mandates.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Termination</h2>
        <p className="mb-4 leading-relaxed">
          Novek reserves the right to suspend or terminate access to Vyllion in the event of a material breach of these Terms, failure to pay licensing fees, or regulatory mandates requiring disconnection. Upon termination, Novek will assist in the extraction of your proprietary data in a standard format, subject to the terms of your MSA.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Governing Law</h2>
        <p className="mb-4 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Addis Ababa.
        </p>
      </div>
    </div>
  )
}
