import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/gdpr")({
  component: GDPRPage,
  head: () => ({
    meta: [
      { title: "GDPR & Data Protection Policy — Vyllion | Capital Markets Compliance" },
      { name: "description", content: "Learn about Vyllion's GDPR compliance, data protection standards, and client data processing commitments for Ethiopian Securities Exchange (ESX) member firms." },
      { property: "og:title", content: "GDPR & Data Protection Policy — Vyllion" },
      { property: "og:description", content: "Data processing commitments and regulatory data protection standards for ESX member brokerages." },
      { property: "og:url", content: "https://vyllion.com/gdpr" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GDPR & Data Protection Policy — Vyllion" },
      { name: "twitter:description", content: "Data processing commitments and regulatory data protection standards for ESX brokers." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com/gdpr" },
    ],
  }),
})

function GDPRPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          GDPR & Data Protection
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">
          Last updated: August 2026
        </p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4 leading-relaxed">
          At Novek ICT Solutions PLC ("we", "our", or "us"), we are committed to protecting the privacy and security of personal data. This policy outlines how Vyllion, our Broker Back Office and Order Management System, processes personal data in compliance with the General Data Protection Regulation (GDPR) and the Ethiopian data protection framework.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Role of Novek ICT Solutions</h2>
        <p className="mb-4 leading-relaxed">
          In the context of the Vyllion platform, Novek ICT Solutions acts primarily as a <strong>Data Processor</strong>. The brokerage firms utilizing Vyllion (our clients) are the <strong>Data Controllers</strong>. We process personal data solely on behalf of our clients and in accordance with their documented instructions.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Collection and Processing</h2>
        <p className="mb-4 leading-relaxed">
          Vyllion processes various categories of personal data to facilitate brokerage operations, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Identity Information (Names, national IDs, passports, addresses) required for KYC compliance.</li>
          <li>Financial Information (Bank accounts, transaction history, portfolio holdings).</li>
          <li>System Data (IP addresses, login timestamps, audit trail actions).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Subject Rights</h2>
        <p className="mb-4 leading-relaxed">
          Individuals have the following rights concerning their personal data:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Right to access personal data held within the system.</li>
          <li>Right to rectification of inaccurate or incomplete data.</li>
          <li>Right to erasure ("Right to be forgotten"), subject to financial regulatory retention requirements.</li>
          <li>Right to data portability.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Since Novek ICT Solutions is a Data Processor, data subjects should direct their requests to exercise these rights to the respective brokerage firm (the Data Controller).
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Security Measures</h2>
        <p className="mb-4 leading-relaxed">
          Vyllion employs state-of-the-art security measures to ensure data protection by design and by default:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>End-to-end encryption for data in transit and at rest.</li>
          <li>Strict role-based access controls (RBAC) and Maker-Checker authorization workflows.</li>
          <li>Immutable, hash-chained audit trails recording all data mutations.</li>
          <li>Isolated, single-tenant infrastructure for each brokerage firm.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Data Transfer and Sovereignty</h2>
        <p className="mb-4 leading-relaxed">
          All personal data processed by Vyllion is hosted on infrastructure located within the Federal Democratic Republic of Ethiopia. We guarantee data sovereignty and do not transfer client financial data across borders, ensuring full compliance with national directives and the Ethiopian Securities Exchange (ESX) regulations.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Information</h2>
        <p className="mb-4 leading-relaxed">
          For inquiries regarding our data protection practices, please contact our Data Protection Officer at:
        </p>
        <p className="mb-4 leading-relaxed font-mono bg-[#161B22] p-4 rounded-md text-sm border border-[#2C384A]/60">
          Novek ICT Solutions PLC<br />
          Addis Ababa, Ethiopia<br />
          Email: compliance@novek.et
        </p>
      </div>
    </div>
  )
}
