import React from "react"

export default function SupportPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg bg-slate-800/80 border border-yellow-400/20">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">Support</h1>
        <p className="mb-4 text-gray-300">Need help or have questions? Our team is here to assist you with any inquiries about our services, projects, or technical support. Reach out to us and we'll respond as soon as possible.</p>
        <div className="mt-6 border-t border-yellow-400/20 pt-4">
          <h2 className="text-lg font-semibold text-yellow-400 mb-2">Contact</h2>
          <p className="text-gray-300">Email: <a href="mailto:info@vyllion.com" className="text-yellow-400 hover:underline">info@vyllion.com</a></p>
          <p className="text-gray-300">Phone/whatsapp: <a href="tel:+251946625060" className="text-yellow-400 hover:underline">+21946625060</a></p>
        </div>
      </div>
    </div>
  )
} 