import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">
          Last updated: August 2026
        </p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Overview</h2>
        <p className="mb-4 leading-relaxed">
          Novek ICT Solutions PLC respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit the Vyllion website or interact with our sales and marketing materials.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
        <p className="mb-4 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you request a demo or contact our sales team.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, pages visited, and time spent on the site.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          <em>Note: This policy applies to our marketing website. The processing of financial and client data within the Vyllion platform itself is governed by our GDPR & Data Protection policy and the respective Data Processing Agreements (DPA) with our enterprise clients.</em>
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4 leading-relaxed">
          We use the collected data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To respond to your inquiries and schedule product demonstrations.</li>
          <li>To send you administrative information, marketing communications, and product updates (where you have opted in).</li>
          <li>To improve the performance, security, and user experience of our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Sharing and Disclosure</h2>
        <p className="mb-4 leading-relaxed">
          We do not sell or rent your personal data to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>With trusted service providers who assist us in operating our website and conducting our business (e.g., hosting providers, email services), under strict confidentiality agreements.</li>
          <li>When required by law, subpoena, or other legal processes, or to protect the rights and safety of Novek ICT Solutions, our users, or the public.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Retention</h2>
        <p className="mb-4 leading-relaxed">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Your Rights</h2>
        <p className="mb-4 leading-relaxed">
          Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us using the information provided below.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4 leading-relaxed font-mono bg-[#161B22] p-4 rounded-md text-sm border border-[#2C384A]/60">
          Novek ICT Solutions PLC<br />
          Addis Ababa, Ethiopia<br />
          Email: privacy@novek.et
        </p>
      </div>
    </div>
  )
}
