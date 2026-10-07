import { useEffect, useState, useRef } from "react"

export function ClientProfileVisual({
  className = "",
}: {
  className?: string
}) {
  const [step, setStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Trigger sequential animation sequence when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered loading sequence
          setTimeout(() => setStep(1), 300) // Profile frame & Identity
          setTimeout(() => setStep(2), 600) // KYC Verified
          setTimeout(() => setStep(3), 900) // CSD Particle & Connection
          setTimeout(() => setStep(4), 1200) // Risk Profile
          setTimeout(() => setStep(5), 1500) // Full Active Status
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Background Subtle Gold Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      {/* Surrounding Subtle Lifecycle Flow (Scrollable on Mobile) */}
      <div className="mb-4 flex scrollbar-none items-center gap-2 overflow-x-auto px-1 pb-1 font-mono text-[10px] tracking-wider whitespace-nowrap text-muted-foreground/60 uppercase sm:justify-between">
        <span
          className={
            step >= 1
              ? "shrink-0 font-medium text-gold transition-colors"
              : "shrink-0"
          }
        >
          01 Onboarding
        </span>
        <span className="shrink-0 text-surface-3">→</span>
        <span
          className={
            step >= 2
              ? "shrink-0 font-medium text-gold transition-colors"
              : "shrink-0"
          }
        >
          02 Identity (Fayda)
        </span>
        <span className="shrink-0 text-surface-3">→</span>
        <span
          className={
            step >= 2
              ? "shrink-0 font-medium text-gold transition-colors"
              : "shrink-0"
          }
        >
          03 KYC Verified
        </span>
        <span className="shrink-0 text-surface-3">→</span>
        <span
          className={
            step >= 3
              ? "shrink-0 font-medium text-gold transition-colors"
              : "shrink-0"
          }
        >
          04 CSD Account
        </span>
        <span className="shrink-0 text-surface-3">→</span>
        <span
          className={
            step >= 4
              ? "shrink-0 font-medium text-gold transition-colors"
              : "shrink-0"
          }
        >
          05 Risk Profile
        </span>
        <span className="shrink-0 text-surface-3">→</span>
        <span
          className={
            step >= 5
              ? "shrink-0 font-semibold text-gain text-gold transition-colors"
              : "shrink-0"
          }
        >
          06 Active Client
        </span>
      </div>

      {/* Main Enterprise Application Interface Window */}
      <div
        className={`relative rounded-2xl border border-surface-3/80 bg-surface-1/90 p-4 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-700 sm:p-6 ${
          step >= 1 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 sm:pb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-surface-3 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-surface-3 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-surface-3 sm:h-2.5 sm:w-2.5" />
            </div>
            <span className="pl-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:pl-2 sm:text-xs">
              CLIENT RECORD // SINGLE SOURCE OF TRUTH
            </span>
          </div>

          {/* Verification Badge */}
          <div
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] transition-all duration-500 sm:gap-2 sm:px-3 sm:py-1 sm:text-xs ${
              step >= 2
                ? "border-gain/30 bg-gain/10 text-gain opacity-100"
                : "border-surface-3 bg-surface-2 text-muted-foreground opacity-40"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full bg-gain ${step >= 2 ? "animate-pulse" : ""}`}
            />
            <span>VERIFIED</span>
          </div>
        </div>

        {/* Client Identity & Avatar Card Header */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-surface-3/40 bg-surface-2/40 p-3.5 sm:mt-5 sm:p-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-heading text-base font-bold text-gold sm:h-12 sm:w-12 sm:text-lg">
              AT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-sm font-semibold text-white sm:text-base">
                  Abebe Tadesse
                </h3>
                <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground sm:text-[10px]">
                  INDIVIDUAL
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[10px] text-muted-foreground sm:text-xs">
                Client ID: <span className="text-foreground">VX-849201</span> •
                Fayda ID: <span className="text-gold">FIN-9920-ET</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gain" />
            <span>
              Account: <strong className="text-white">Active</strong>
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Scrollable on Mobile) */}
        <div className="mt-4 flex scrollbar-none overflow-x-auto border-b border-surface-3/50 pb-0.5 text-xs font-medium tracking-wider whitespace-nowrap text-muted-foreground sm:mt-5">
          <span className="shrink-0 border-b-2 border-gold px-3 py-2 font-semibold text-gold sm:px-4">
            PROFILE
          </span>
          <span className="shrink-0 cursor-pointer px-3 py-2 hover:text-foreground sm:px-4">
            ACCOUNTS
          </span>
          <span className="shrink-0 cursor-pointer px-3 py-2 hover:text-foreground sm:px-4">
            ORDERS
          </span>
          <span className="shrink-0 cursor-pointer px-3 py-2 hover:text-foreground sm:px-4">
            KYC &amp; AML
          </span>
          <span className="shrink-0 cursor-pointer px-3 py-2 hover:text-foreground sm:px-4">
            DOCUMENTS
          </span>
        </div>

        {/* Detailed Client Record Data Fields */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          <div className="rounded-lg border border-surface-3/40 bg-surface-2/20 p-2.5 sm:p-3">
            <span className="font-mono text-[9px] text-muted-foreground uppercase sm:text-[10px]">
              Investment Obj.
            </span>
            <p className="mt-1 text-xs font-medium text-foreground">
              Moderate Growth
            </p>
          </div>
          <div
            className={`rounded-lg border p-2.5 transition-all duration-500 sm:p-3 ${
              step >= 4
                ? "border-gold/30 bg-gold/5"
                : "border-surface-3/40 bg-surface-2/20"
            }`}
          >
            <span className="font-mono text-[9px] text-muted-foreground uppercase sm:text-[10px]">
              Risk Profile
            </span>
            <p className="mt-1 text-xs font-medium text-gold">
              Balanced (Level 3)
            </p>
          </div>
          <div
            className={`rounded-lg border p-2.5 transition-all duration-500 sm:p-3 ${
              step >= 5
                ? "border-gain/30 bg-gain/5"
                : "border-surface-3/40 bg-surface-2/20"
            }`}
          >
            <span className="font-mono text-[9px] text-muted-foreground uppercase sm:text-[10px]">
              Account Status
            </span>
            <p className="mt-1 text-xs font-medium text-gain">
              Active &amp; Funded
            </p>
          </div>
          <div
            className={`rounded-lg border p-2.5 transition-all duration-500 sm:p-3 ${
              step >= 3
                ? "border-info-blue/30 bg-info-blue/5"
                : "border-surface-3/40 bg-surface-2/20"
            }`}
          >
            <span className="font-mono text-[9px] text-muted-foreground uppercase sm:text-[10px]">
              CSD Status
            </span>
            <p className="mt-1 text-xs font-medium text-info-blue">
              ECSD Linked
            </p>
          </div>
        </div>

        {/* CSD & Depository Connection Animation Bar */}
        <div className="mt-4 rounded-xl border border-surface-3/50 bg-surface-0/60 p-3.5 sm:mt-5 sm:p-4">
          <div className="mb-3 flex flex-col justify-between gap-1.5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
              VYLLION BROKER ENGINE
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-info-blue" />
              ECSD DEPOSITORY
            </span>
          </div>

          {/* Particle Traveling Path */}
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-surface-3/60 sm:h-2">
            {/* Base line */}
            <div
              className={`h-full bg-gradient-to-r from-gold to-info-blue transition-all duration-1000 ${
                step >= 3 ? "w-full opacity-60" : "w-0 opacity-20"
              }`}
            />

            {/* Particle animation */}
            {step >= 3 && (
              <div
                className="absolute top-0 bottom-0 w-12 rounded-full bg-gradient-to-r from-transparent via-white to-gold blur-[1px]"
                style={{
                  animation:
                    "csd-pulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                }}
              />
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-1 font-mono text-[9px] text-muted-foreground sm:text-[10px]">
            <span>Ledger #849201-01</span>
            <span
              className={
                step >= 3 ? "font-medium text-gain" : "text-muted-foreground"
              }
            >
              {step >= 3 ? "✓ Synchronized" : "Connecting..."}
            </span>
            <span>ECSD #994012</span>
          </div>
        </div>

        {/* Status Indicators Footer */}
        <div className="mt-4 grid grid-cols-2 items-center justify-between gap-2.5 border-t border-surface-3/40 pt-4 font-mono text-[11px] text-muted-foreground sm:flex sm:flex-wrap sm:text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${step >= 2 ? "bg-gain" : "bg-surface-3"}`}
            />
            <span>
              KYC:{" "}
              <strong className={step >= 2 ? "text-foreground" : ""}>
                Fayda Verified
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${step >= 3 ? "bg-info-blue" : "bg-surface-3"}`}
            />
            <span>
              CSD:{" "}
              <strong className={step >= 3 ? "text-foreground" : ""}>
                Linked
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${step >= 4 ? "bg-gold" : "bg-surface-3"}`}
            />
            <span>
              Risk:{" "}
              <strong className={step >= 4 ? "text-foreground" : ""}>
                Balanced
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${step >= 5 ? "bg-gain" : "bg-surface-3"}`}
            />
            <span>
              Servicing:{" "}
              <strong className={step >= 5 ? "text-foreground" : ""}>
                Active
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
