import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — Vyllion | Digital Escrow Platform" },
      {
        name: "description",
        content:
          "Understand how Vyllion Technologies PLC uses essential and analytical cookies to ensure escrow security, operational performance, and compliance.",
      },
      { property: "og:title", content: "Cookie Policy — Vyllion" },
      {
        property: "og:description",
        content:
          "Information regarding cookie usage and privacy safeguards on Vyllion Digital Escrow Platform.",
      },
      { property: "og:url", content: "https://vyllion.com/cookies" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cookie Policy — Vyllion" },
      {
        name: "twitter:description",
        content:
          "Information regarding cookie usage and privacy safeguards on Vyllion.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/cookies" }],
  }),
})

function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">Last updated: October 2026</p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          1. What are Cookies?
        </h2>
        <p className="mb-4 leading-relaxed">
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work efficiently, authenticate secure user sessions, and provide
          technical diagnostics.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          2. How We Use Cookies
        </h2>
        <p className="mb-4 leading-relaxed">
          The Vyllion website uses cookies for the following purposes:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          <li>
            <strong>Essential Cookies:</strong> Strictly necessary for the platform to
            operate safely, authenticate sessions, and prevent cross-site request forgery
            (CSRF). The website cannot function properly without these cookies.
          </li>
          <li>
            <strong>Security &amp; Performance Cookies:</strong> Help identify suspicious
            traffic patterns, protect against automated denial-of-service (DDoS) attempts,
            and monitor edge latency.
          </li>
          <li>
            <strong>Preferences Cookies:</strong> Remember your selected display
            preferences, language, or theme choices.
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          3. Managing Your Cookie Preferences
        </h2>
        <p className="mb-4 leading-relaxed">
          Most web browsers allow you to control cookies through their browser settings.
          You can configure your browser to accept all cookies, reject non-essential cookies,
          or notify you when a cookie is placed.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
          4. Contact Us
        </h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about our use of cookies, please contact us at:
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
