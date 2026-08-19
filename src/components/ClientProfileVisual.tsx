import { useEffect, useState, useRef } from "react"

export function ClientProfileVisual({ className = "" }: { className?: string }) {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Surrounding Subtle Lifecycle Flow (Desktop) */}
      <div className="hidden lg:flex items-center justify-between text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase mb-4 px-2">
        <span className={step >= 1 ? "text-gold font-medium transition-colors" : ""}>01 Onboarding</span>
        <span className="text-surface-3">→</span>
        <span className={step >= 2 ? "text-gold font-medium transition-colors" : ""}>02 Identity (Fayda)</span>
        <span className="text-surface-3">→</span>
        <span className={step >= 2 ? "text-gold font-medium transition-colors" : ""}>03 KYC Verified</span>
        <span className="text-surface-3">→</span>
        <span className={step >= 3 ? "text-gold font-medium transition-colors" : ""}>04 CSD Account</span>
        <span className="text-surface-3">→</span>
        <span className={step >= 4 ? "text-gold font-medium transition-colors" : ""}>05 Risk Profile</span>
        <span className="text-surface-3">→</span>
        <span className={step >= 5 ? "text-gold font-semibold text-gain transition-colors" : ""}>06 Active Client</span>
      </div>

      {/* Main Enterprise Application Interface Window */}
      <div className={`relative rounded-2xl border border-surface-3/80 bg-surface-1/90 p-6 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all duration-700 ${
        step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-3" />
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest pl-2">
              CLIENT RECORD // SINGLE SOURCE OF TRUTH
            </span>
          </div>

          {/* Verification Badge with subtle 4-second pulse */}
          <div className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono transition-all duration-500 ${
            step >= 2 
              ? "border-gain/30 bg-gain/10 text-gain opacity-100" 
              : "border-surface-3 bg-surface-2 text-muted-foreground opacity-40"
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full bg-gain ${step >= 2 ? "animate-pulse" : ""}`} />
            <span>VERIFIED</span>
          </div>
        </div>

        {/* Client Identity & Avatar Card Header */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-surface-3/40 bg-surface-2/40 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/30 font-heading text-lg font-bold text-gold">
              AT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-base font-semibold text-white">Abebe Tadesse</h3>
                <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">INDIVIDUAL</span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                Client ID: <span className="text-foreground">VX-849201</span> • Fayda ID: <span className="text-gold">FIN-9920-ET</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-gain" />
            <span>Account Status: <strong className="text-white">Active</strong></span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-5 flex border-b border-surface-3/50 text-xs font-medium tracking-wider text-muted-foreground">
          <span className="border-b-2 border-gold px-4 py-2 text-gold font-semibold">PROFILE</span>
          <span className="px-4 py-2 hover:text-foreground cursor-pointer">ACCOUNTS</span>
          <span className="px-4 py-2 hover:text-foreground cursor-pointer">ORDERS</span>
          <span className="px-4 py-2 hover:text-foreground cursor-pointer">KYC & AML</span>
          <span className="px-4 py-2 hover:text-foreground cursor-pointer">DOCUMENTS</span>
        </div>

        {/* Detailed Client Record Data Fields */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-surface-3/40 bg-surface-2/20 p-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Investment Obj.</span>
            <p className="mt-1 text-xs font-medium text-foreground">Moderate Growth</p>
          </div>
          <div className={`rounded-lg border p-3 transition-all duration-500 ${
            step >= 4 ? "border-gold/30 bg-gold/5" : "border-surface-3/40 bg-surface-2/20"
          }`}>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Risk Profile</span>
            <p className="mt-1 text-xs font-medium text-gold">Balanced (Level 3)</p>
          </div>
          <div className={`rounded-lg border p-3 transition-all duration-500 ${
            step >= 5 ? "border-gain/30 bg-gain/5" : "border-surface-3/40 bg-surface-2/20"
          }`}>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Account Status</span>
            <p className="mt-1 text-xs font-medium text-gain">Active & Funded</p>
          </div>
          <div className={`rounded-lg border p-3 transition-all duration-500 ${
            step >= 3 ? "border-info-blue/30 bg-info-blue/5" : "border-surface-3/40 bg-surface-2/20"
          }`}>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">CSD Status</span>
            <p className="mt-1 text-xs font-medium text-info-blue">ECSD Linked</p>
          </div>
        </div>

        {/* CSD & Depository Connection Animation Bar */}
        <div className="mt-5 rounded-xl border border-surface-3/50 bg-surface-0/60 p-4">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              VYLLION BROKER ENGINE
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-info-blue" />
              ESX CENTRAL SECURITIES DEPOSITORY (ECSD)
            </span>
          </div>

          {/* Particle Traveling Path */}
          <div className="relative h-2 w-full rounded-full bg-surface-3/60 overflow-hidden">
            {/* Base line */}
            <div className={`h-full bg-gradient-to-r from-gold to-info-blue transition-all duration-1000 ${
              step >= 3 ? "w-full opacity-60" : "w-0 opacity-20"
            }`} />
            
            {/* Particle animation */}
            {step >= 3 && (
              <div 
                className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-white to-gold rounded-full blur-[1px]"
                style={{
                  animation: "csd-pulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
                }}
              />
            )}
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>Client Ledger #849201-01</span>
            <span className={step >= 3 ? "text-gain font-medium" : "text-muted-foreground"}>
              {step >= 3 ? "✓ Synchronized (Real-time)" : "Connecting..."}
            </span>
            <span>CSD Account #ECSD-994012</span>
          </div>
        </div>

        {/* Status Indicators Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-surface-3/40 pt-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-gain" : "bg-surface-3"}`} />
            <span>KYC: <strong className={step >= 2 ? "text-foreground" : ""}>Fayda Verified</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-info-blue" : "bg-surface-3"}`} />
            <span>CSD: <strong className={step >= 3 ? "text-foreground" : ""}>Linked</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${step >= 4 ? "bg-gold" : "bg-surface-3"}`} />
            <span>Risk: <strong className={step >= 4 ? "text-foreground" : ""}>Balanced</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${step >= 5 ? "bg-gain" : "bg-surface-3"}`} />
            <span>Servicing: <strong className={step >= 5 ? "text-foreground" : ""}>Active</strong></span>
          </div>
        </div>
      </div>
    </div>
  )
}
