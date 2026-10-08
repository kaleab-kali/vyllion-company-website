import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title: "Contact & Early Access — Vyllion Digital Escrow Ethiopia",
      },
      {
        name: "description",
        content:
          "Connect with Vyllion Technologies PLC in Addis Ababa. Inquire about institutional banking partnerships, enterprise merchant pilot programs, and pre-launch early access.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/contact" }],
  }),
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "pilot",
    volume: "1M - 10M ETB",
    notes: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: (import.meta as any).env?.VITE_WEB3FORMS_KEY || "",
          subject: `Vyllion Institutional Inquiry — ${formData.name} (${formData.inquiryType})`,
          ...formData,
        }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        throw new Error("Submission failed")
      }
    } catch {
      setStatus("error")
    }
  }

  const directContacts = [
    {
      name: "Kaleab Girma",
      role: "Chief Executive Officer (CEO)",
      focus: "Institutional & Commercial Bank Partnerships",
      email: "kaleab@vyllion.com",
    },
    {
      name: "Ezana Tegener",
      role: "Chief Technology Officer (CTO)",
      focus: "Technical Architecture, APIs & Sandbox Access",
      email: "ezana@vyllion.com",
    },
    {
      name: "Selam Bruke",
      role: "Chief Financial Officer (CFO)",
      focus: "Segregated Bank Custody & Compliance",
      email: "selam@vyllion.com",
    },
  ]

  return (
    <div className="min-h-svh w-full bg-surface-0 pt-28 pb-24 text-foreground sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[11px] font-mono font-medium text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            PRE-LAUNCH ENGAGEMENT DESK • ADDIS ABABA
          </div>

          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Contact Vyllion & Request Early Access.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vyllion Technologies PLC is preparing for institutional rollout across Ethiopia. We are onboarding licensed commercial banks, high-volume automotive dealerships, real estate developers, and commodity traders for private pilot integrations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Direct Leadership & Office Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Headquarters Card */}
            <div className="rounded-xl border border-surface-3 bg-surface-1 p-6">
              <span className="font-mono text-[10px] font-semibold tracking-widest text-gold uppercase">
                CORPORATE HEADQUARTERS
              </span>
              <h2 className="mt-2 font-heading text-lg font-semibold text-white">
                Vyllion Technologies PLC
              </h2>
              <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">Location:</span> Bole Sub-City, Addis Ababa, Ethiopia
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">General Inquiries:</span>
                  <a href="mailto:contact@vyllion.com" className="text-gold hover:underline">
                    contact@vyllion.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">Jurisdiction:</span> Federal Democratic Republic of Ethiopia
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">Response SLA:</span> Within 1 Business Day
                </div>
              </div>
            </div>

            {/* Direct Leadership Team Cards */}
            <div>
              <h3 className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                EXECUTIVE CONTACTS
              </h3>
              <div className="mt-4 space-y-3">
                {directContacts.map((contact) => (
                  <div
                    key={contact.name}
                    className="rounded-lg border border-surface-3 bg-surface-1 p-4 transition-colors hover:border-surface-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-sans text-sm font-semibold text-white">
                          {contact.name}
                        </div>
                        <div className="font-mono text-[11px] text-gold">
                          {contact.role}
                        </div>
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-mono text-[11px] text-muted-foreground hover:text-white"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {contact.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-launch Note */}
            <div className="rounded-xl border border-surface-3 bg-surface-0/60 p-5">
              <span className="font-mono text-[10px] font-semibold text-gold uppercase">
                PILOT STATUS NOTICE
              </span>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                All client funds are structured for segregated custody in licensed commercial banking partner vaults. We do not provide consumer lending or open-market speculative trading.
              </p>
            </div>

          </div>

          {/* Right Column: Institutional Inquiry & Early Access Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-surface-3 bg-surface-1 p-8 shadow-xl">
              
              <div className="border-b border-surface-3 pb-5">
                <span className="font-mono text-[10px] font-semibold tracking-widest text-gold uppercase">
                  PILOT REGISTRATION & INQUIRY FORM
                </span>
                <h2 className="mt-1 font-heading text-xl font-semibold text-white">
                  Join the Pre-Launch Cohort
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Complete the parameters below. Our founding team will schedule a private consultation.
                </p>
              </div>

              {status === "success" ? (
                <div className="mt-8 rounded-lg border border-emerald/40 bg-emerald/10 p-8 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald/20 text-emerald text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    Inquiry Received
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Thank you, {formData.name}. An executive officer from Vyllion will review your details and reach out within 24 hours.
                  </p>
                  <div className="mt-6 border-t border-emerald/20 pt-4 font-mono text-xs text-emerald">
                    Direct confirmation sent to our team at contact@vyllion.com
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  
                  {/* Inquiry Type */}
                  <div>
                    <label className="mb-2 block font-mono text-xs text-muted-foreground uppercase">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        { id: "pilot", label: "Merchant Pilot" },
                        { id: "bank", label: "Bank Integration" },
                        { id: "dealership", label: "Auto / Real Estate" },
                        { id: "general", label: "General Access" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: item.id })}
                          className={`rounded-lg py-2 text-center text-xs font-medium transition-all ${
                            formData.inquiryType === item.id
                              ? "border border-gold bg-gold/10 text-gold font-semibold"
                              : "border border-surface-3 bg-surface-0/60 text-muted-foreground hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Organization */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dawit Bekele"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bole Motors / FinTech PLC"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="dawit@company.et"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                        Phone / Telegram *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+251 9..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Volume expectation */}
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                      Expected Monthly Transaction Volume (ETB)
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white focus:border-gold focus:outline-none"
                    >
                      <option value="Under 1M ETB">Under 1,000,000 ETB</option>
                      <option value="1M - 10M ETB">1,000,000 – 10,000,000 ETB</option>
                      <option value="10M - 50M ETB">10,000,000 – 50,000,000 ETB</option>
                      <option value="50M+ ETB">50,000,000+ ETB (Enterprise Institutional)</option>
                    </select>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase">
                      Use Case / Pilot Scope
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Outline your transaction structure, inspection requirements, or technical integration questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-surface-3 bg-surface-0 px-4 py-2.5 text-xs text-white placeholder-muted-foreground/50 focus:border-gold focus:outline-none resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg border border-loss/40 bg-loss/10 p-3 text-xs text-loss">
                      Submission error. Please email directly to{" "}
                      <a href="mailto:contact@vyllion.com" className="underline font-semibold">
                        contact@vyllion.com
                      </a>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-lg bg-gold py-5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover transition-all"
                  >
                    {status === "submitting" ? "Submitting Inquiry..." : "Submit Institutional Inquiry →"}
                  </Button>

                  <p className="text-center font-mono text-[10px] text-muted-foreground">
                    Confidential business consultation • Addis Ababa, Ethiopia • contact@vyllion.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
