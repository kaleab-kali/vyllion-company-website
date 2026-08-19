import { useEffect, useState, useRef } from "react"

export function OrderFlowVisual({ className = "" }: { className?: string }) {
  // Animation loop stage: 
  // 0 = Idle, 1 = Order Entering along curve, 2 = Gate 1 Funds, 3 = Gate 2 Limit, 4 = Gate 3 Risk, 5 = Blue Router Branching, 6 = Executed State
  const [animStage, setAnimStage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timers: NodeJS.Timeout[] = []

    const runSequence = () => {
      setAnimStage(1) // Order entering along curve
      timers.push(setTimeout(() => setAnimStage(2), 600))  // Gate 01 Funds
      timers.push(setTimeout(() => setAnimStage(3), 1100)) // Gate 02 Limit
      timers.push(setTimeout(() => setAnimStage(4), 1600)) // Gate 03 Risk
      timers.push(setTimeout(() => setAnimStage(5), 2200)) // Blue 3-way Router
      timers.push(setTimeout(() => setAnimStage(6), 3400)) // Executed
      
      // Idle pause for 6s then loop
      timers.push(setTimeout(() => {
        setAnimStage(0)
        timers.push(setTimeout(runSequence, 1000))
      }, 9500))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence()
        }
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      timers.forEach(t => clearTimeout(t))
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      
      {/* ── TOP BREADCRUMB PROCESS PATH WITH INTEGRATED LINE ── */}
      <div className="relative mb-6 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center justify-between min-w-[650px] text-[10px] font-mono tracking-wider text-muted-foreground/60 uppercase">
          <span className={animStage >= 1 ? "text-gold font-bold transition-colors" : ""}>CLIENT</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 1 ? "text-gold font-bold transition-colors" : ""}>ORDER ENTERED</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 2 ? "text-gold font-bold transition-colors" : ""}>VALIDATION</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 4 ? "text-gold font-bold transition-colors" : ""}>RISK CHECK</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 5 ? "text-info-blue font-bold transition-colors" : ""}>ROUTING</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 5 ? "text-info-blue font-bold transition-colors" : ""}>EXCHANGE / ATS</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 6 ? "text-gain font-bold transition-colors" : ""}>EXECUTION</span>
          <span className="text-surface-3">→</span>
          <span className={animStage >= 6 ? "text-white font-bold transition-colors" : ""}>CLIENT POSITION</span>
        </div>
      </div>

      {/* ── MAIN COMPOSITION CANVAS (Order Book + Curved Path + Card + 3-Way FIX Router) ── */}
      <div className="relative min-h-[380px] w-full">

        {/* 1. Background Order Book Component (Floating Top-Right behind card) */}
        <div className="absolute right-0 top-0 z-0 flex items-center justify-between rounded-xl border border-surface-3/30 bg-surface-1/40 px-6 py-3 backdrop-blur-md text-xs font-mono w-[320px] shadow-lg pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="text-loss font-semibold">SELL</span>
            <span className="text-loss/90 font-medium">129.20</span>
            <span className="text-muted-foreground/50 font-sans text-[11px]">1,200</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-info-blue font-semibold">BUY</span>
            <span className="text-info-blue/90 font-medium">128.50</span>
            <span className="text-muted-foreground/50 font-sans text-[11px]">1,500</span>
          </div>
        </div>

        {/* 2. Curved Incoming Gold Path SVG Layer */}
        <div className="absolute left-0 top-0 bottom-0 right-0 z-0 pointer-events-none">
          <svg viewBox="0 0 800 360" className="w-full h-full fill-none overflow-visible" preserveAspectRatio="none">
            <defs>
              <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Loop Path from top left CLIENT curve down into card */}
            <path
              d="M 20,-10 C 20,120 -40,180 80,180 L 140,180"
              stroke="#E2C889"
              strokeWidth="2"
              strokeOpacity={animStage >= 1 ? "0.8" : "0.3"}
              filter="url(#gold-glow)"
            />

            {/* Blue 3-Way Output Branch Curves (exiting card at x=520, y=180) */}
            {/* Top Branch to Venue A */}
            <path
              d="M 520,180 C 560,180 580,75 620,75"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeOpacity={animStage >= 5 ? "0.9" : "0.2"}
              filter="url(#blue-glow)"
            />
            {/* Middle Branch to Venue A,B */}
            <path
              d="M 520,180 L 620,180"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeOpacity={animStage >= 5 ? "1" : "0.2"}
              filter="url(#blue-glow)"
            />
            {/* Bottom Branch to Venue C */}
            <path
              d="M 520,180 C 560,180 580,285 620,285"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeOpacity={animStage >= 5 ? "0.9" : "0.2"}
              filter="url(#blue-glow)"
            />

            {/* Animated Pulse Nodes along blue paths */}
            {animStage >= 5 && (
              <>
                <circle cx="570" cy="120" r="3" fill="#3B82F6" filter="url(#blue-glow)" className="animate-ping" />
                <circle cx="580" cy="180" r="4" fill="#FFFFFF" filter="url(#blue-glow)" />
                <circle cx="570" cy="240" r="3" fill="#3B82F6" filter="url(#blue-glow)" className="animate-ping" />
              </>
            )}
          </svg>
        </div>

        {/* 3. Main Order Card (`ORDER #VX-10482`) */}
        <div className="relative z-10 mx-auto md:ml-12 md:mr-48 mt-8 rounded-2xl border border-surface-3/80 bg-surface-1/95 p-5 shadow-2xl shadow-black/80 backdrop-blur-xl max-w-xl">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-xs">
            <span className="font-semibold text-white tracking-wider">ORDER #VX-10482</span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className={animStage >= 1 ? "text-gold font-semibold" : "text-muted-foreground/40"}>● PROCESSING</span>
              <span className="text-muted-foreground/30">→</span>
              <span className={animStage >= 5 ? "text-info-blue font-semibold" : "text-muted-foreground/40"}>ROUTED</span>
              <span className="text-muted-foreground/30">→</span>
              <span className={animStage >= 6 ? "text-gain font-bold animate-pulse" : "text-muted-foreground/40"}>EXECUTED</span>
            </div>
          </div>

          {/* Order Details Grid */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="text-[9px] font-mono text-gain uppercase font-bold block">BUY</span>
              <span className="font-heading text-xl font-bold text-white tracking-tight">ABC</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-muted-foreground uppercase block">SHARES</span>
              <span className="font-mono text-base font-semibold text-foreground">2,500</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-muted-foreground uppercase block">LIMIT</span>
              <span className="font-mono text-base font-semibold text-gold">128.50</span>
            </div>
          </div>

          {/* Gate Slider Track inside Card */}
          <div className="mt-6 pt-2">
            <div className="relative h-1.5 w-full rounded-full bg-surface-3/60">
              {/* Active Gold Line */}
              <div
                className="h-full bg-gold rounded-full transition-all duration-500 shadow-[0_0_8px_#E2C889]"
                style={{
                  width: animStage >= 4 ? "100%" : animStage >= 3 ? "66%" : animStage >= 2 ? "33%" : "0%"
                }}
              />

              {/* Gate 01 Pin */}
              <div className="absolute top-1/2 left-[15%] -translate-y-1/2 flex flex-col items-center">
                <div className={`h-7 w-1 rounded-full transition-colors duration-300 ${animStage >= 2 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`} />
              </div>
              {/* Gate 02 Pin */}
              <div className="absolute top-1/2 left-[50%] -translate-y-1/2 flex flex-col items-center">
                <div className={`h-7 w-1 rounded-full transition-colors duration-300 ${animStage >= 3 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`} />
              </div>
              {/* Gate 03 Pin */}
              <div className="absolute top-1/2 left-[85%] -translate-y-1/2 flex flex-col items-center">
                <div className={`h-7 w-1 rounded-full transition-colors duration-300 ${animStage >= 4 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`} />
                {animStage >= 5 && (
                  <div className="h-4 w-4 rounded-full bg-white border-2 border-gold shadow-[0_0_12px_#FFF] animate-pulse" />
                )}
              </div>
            </div>

            {/* Gate Labels Below Pins */}
            <div className="mt-4 grid grid-cols-3 text-[10px] font-mono">
              <div>
                <span className="text-muted-foreground block">Gate 01</span>
                <span className="text-white font-semibold">FUNDS →</span>
                <div className={`mt-0.5 transition-colors ${animStage >= 2 ? "text-gain font-medium" : "text-muted-foreground/40"}`}>
                  [AVAILABLE ✓]
                </div>
              </div>
              <div>
                <span className="text-muted-foreground block">Gate 02</span>
                <span className="text-white font-semibold">LIMIT →</span>
                <div className={`mt-0.5 transition-colors ${animStage >= 3 ? "text-gain font-medium" : "text-muted-foreground/40"}`}>
                  [CLIENT LIMIT ✓]
                </div>
              </div>
              <div>
                <span className="text-muted-foreground block">Gate 03</span>
                <span className="text-white font-semibold">RISK →</span>
                <div className={`mt-0.5 transition-colors ${animStage >= 4 ? "text-gain font-medium" : "text-muted-foreground/40"}`}>
                  [RISK CHECK ✓]
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4. Three Venue Router Boxes (Positioned on the Right) */}
        <div className="absolute right-0 top-12 bottom-4 z-10 hidden md:flex flex-col justify-between w-48">
          {/* Venue A Box */}
          <div className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
            animStage >= 5 ? "border-info-blue/50 bg-surface-1/90 shadow-[0_0_15px_rgba(59,130,246,0.25)]" : "border-surface-3/50 bg-surface-1/40"
          }`}>
            <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-info-blue">FIX</span>
            <div className="text-[10px] font-mono text-right">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">VENUES A</div>
            </div>
          </div>

          {/* Venue A, B Box (Middle with waveform icon) */}
          <div className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
            animStage >= 5 ? "border-info-blue/70 bg-surface-1/95 shadow-[0_0_20px_rgba(59,130,246,0.35)]" : "border-surface-3/50 bg-surface-1/40"
          }`}>
            <div className="flex items-center gap-1">
              <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-info-blue">FIX</span>
              <span className="text-info-blue text-xs animate-pulse">〰</span>
            </div>
            <div className="text-[10px] font-mono text-right">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">VENUES A, B</div>
            </div>
          </div>

          {/* Venue C Box */}
          <div className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
            animStage >= 5 ? "border-info-blue/50 bg-surface-1/90 shadow-[0_0_15px_rgba(59,130,246,0.25)]" : "border-surface-3/50 bg-surface-1/40"
          }`}>
            <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-gold">DMA</span>
            <div className="text-[10px] font-mono text-right">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">VENUES C</div>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM PROCESS FLOW LINE ── */}
      <div className="mt-8 border-t border-surface-3/60 pt-4">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-muted-foreground/70 uppercase">
          <span className="text-white font-semibold">ORDER</span>
          <span>───────→</span>
          <span className="text-white font-semibold">VALIDATE</span>
          <span>───────→</span>
          <span className="text-white font-semibold">ROUTE</span>
          <span>───────→</span>
          <span className="text-white font-semibold">EXECUTE</span>
          <span>───────→</span>
          <span className="text-white font-semibold">RECONCILE</span>
          <span>───────→</span>
          <span className="text-gain font-semibold">UPDATE</span>
        </div>
      </div>

      {/* ── THREE ALIGNED SUPPORTING CAPABILITY COLUMNS BELOW FLOW LINE ── */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <div className="font-mono text-xs font-semibold text-gold">01 Validate</div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">Rules before routing</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Apply configurable limits and account checks before an order reaches the market.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold text-gold">02 Route</div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">Connected execution</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Connect trading workflows to market systems through supported interfaces including FIX.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold text-gold">03 Update</div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">Execution becomes position</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Carry executed trade information through to client positions and ledger balances.
          </p>
        </div>
      </div>

    </div>
  )
}
