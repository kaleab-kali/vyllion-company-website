import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
})

function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-lg text-[#94A3B8]">
          Last updated: August 2026
        </p>
      </div>

      <div className="prose prose-invert prose-blue max-w-none text-[#94A3B8]">
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. What are Cookies?</h2>
        <p className="mb-4 leading-relaxed">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply analytical information to the site owners.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Cookies</h2>
        <p className="mb-4 leading-relaxed">
          The Vyllion website uses cookies for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> These are strictly necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.</li>
          <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works, for example, by ensuring that users find what they are looking for easily.</li>
          <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website, enabling us to personalize our content for you and remember your preferences (such as language or region).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Third-Party Cookies</h2>
        <p className="mb-4 leading-relaxed">
          We may use third-party services, such as Google Analytics, to help us understand how our website is used. These third parties may place their own cookies on your device. We do not control the use of these third-party cookies, and you should check the privacy policies of these providers for more information on how they use cookies.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Managing Your Cookie Preferences</h2>
        <p className="mb-4 leading-relaxed">
          Most web browsers allow you to control cookies through their settings preferences. You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set. Please note that if you choose to disable essential cookies, some parts of our website may not function properly.
        </p>
        <p className="mb-4 leading-relaxed">
          To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#C8B180] hover:underline">allaboutcookies.org</a>.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Changes to This Policy</h2>
        <p className="mb-4 leading-relaxed">
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4 leading-relaxed">
          If you have any questions about our use of cookies, please contact us at:
        </p>
        <p className="mb-4 leading-relaxed font-mono bg-[#161B22] p-4 rounded-md text-sm border border-[#2C384A]/60">
          Novek ICT Solutions PLC<br />
          Email: privacy@novek.et
        </p>
      </div>
    </div>
  )
}
