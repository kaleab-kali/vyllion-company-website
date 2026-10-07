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
      timers.push(setTimeout(() => setAnimStage(2), 600)) // Gate 01 Funds
      timers.push(setTimeout(() => setAnimStage(3), 1100)) // Gate 02 Limit
      timers.push(setTimeout(() => setAnimStage(4), 1600)) // Gate 03 Risk
      timers.push(setTimeout(() => setAnimStage(5), 2200)) // Blue 3-way Router
      timers.push(setTimeout(() => setAnimStage(6), 3400)) // Executed

      // Idle pause for 6s then loop
      timers.push(
        setTimeout(() => {
          setAnimStage(0)
          timers.push(setTimeout(runSequence, 1000))
        }, 9500)
      )
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
      timers.forEach((t) => clearTimeout(t))
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* ── TOP BREADCRUMB PROCESS PATH WITH INTEGRATED LINE ── */}
      <div className="relative mb-6 scrollbar-none overflow-x-auto pb-2">
        <div className="flex min-w-[650px] items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground/60 uppercase">
          <span
            className={
              animStage >= 1 ? "font-bold text-gold transition-colors" : ""
            }
          >
            CLIENT
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 1 ? "font-bold text-gold transition-colors" : ""
            }
          >
            ORDER ENTERED
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 2 ? "font-bold text-gold transition-colors" : ""
            }
          >
            VALIDATION
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 4 ? "font-bold text-gold transition-colors" : ""
            }
          >
            RISK CHECK
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 5 ? "font-bold text-info-blue transition-colors" : ""
            }
          >
            ROUTING
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 5 ? "font-bold text-info-blue transition-colors" : ""
            }
          >
            EXCHANGE / ATS
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 6 ? "font-bold text-gain transition-colors" : ""
            }
          >
            EXECUTION
          </span>
          <span className="text-surface-3">→</span>
          <span
            className={
              animStage >= 6 ? "font-bold text-white transition-colors" : ""
            }
          >
            CLIENT POSITION
          </span>
        </div>
      </div>

      {/* ── MAIN COMPOSITION CANVAS (Order Book + Curved Path + Card + 3-Way FIX Router) ── */}
      <div className="relative min-h-[360px] w-full sm:min-h-[380px]">
        {/* 1. Background Order Book Component (Floating Top-Right on Desktop, Inline Top on Mobile) */}
        <div className="pointer-events-none absolute top-0 right-0 z-0 hidden w-[320px] items-center justify-between rounded-xl border border-surface-3/30 bg-surface-1/40 px-6 py-3 font-mono text-xs shadow-lg backdrop-blur-md md:flex">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-loss">SELL</span>
            <span className="font-medium text-loss/90">129.20</span>
            <span className="font-sans text-[11px] text-muted-foreground/50">
              1,200
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-info-blue">BUY</span>
            <span className="font-medium text-info-blue/90">128.50</span>
            <span className="font-sans text-[11px] text-muted-foreground/50">
              1,500
            </span>
          </div>
        </div>

        {/* Mobile Order Book Bar */}
        <div className="mb-3 flex items-center justify-between rounded-xl border border-surface-3/40 bg-surface-1/60 px-4 py-2 font-mono text-[11px] shadow-sm md:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-loss">ASK</span>
            <span className="font-medium text-loss/90">129.20</span>
            <span className="text-[10px] text-muted-foreground/60">
              vol 1.2k
            </span>
          </div>
          <div className="h-3 w-px bg-surface-3" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-info-blue">
              BID
            </span>
            <span className="font-medium text-info-blue/90">128.50</span>
            <span className="text-[10px] text-muted-foreground/60">
              vol 1.5k
            </span>
          </div>
        </div>

        {/* 2. Curved Incoming Gold Path SVG Layer (Desktop Only) */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 hidden md:block">
          <svg
            viewBox="0 0 800 360"
            className="h-full w-full overflow-visible fill-none"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="gold-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter
                id="blue-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
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
            <path
              d="M 520,180 C 560,180 580,75 620,75"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeOpacity={animStage >= 5 ? "0.9" : "0.2"}
              filter="url(#blue-glow)"
            />
            <path
              d="M 520,180 L 620,180"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeOpacity={animStage >= 5 ? "1" : "0.2"}
              filter="url(#blue-glow)"
            />
            <path
              d="M 520,180 C 560,180 580,285 620,285"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeOpacity={animStage >= 5 ? "0.9" : "0.2"}
              filter="url(#blue-glow)"
            />

            {animStage >= 5 && (
              <>
                <circle
                  cx="570"
                  cy="120"
                  r="3"
                  fill="#3B82F6"
                  filter="url(#blue-glow)"
                  className="animate-ping"
                />
                <circle
                  cx="580"
                  cy="180"
                  r="4"
                  fill="#FFFFFF"
                  filter="url(#blue-glow)"
                />
                <circle
                  cx="570"
                  cy="240"
                  r="3"
                  fill="#3B82F6"
                  filter="url(#blue-glow)"
                  className="animate-ping"
                />
              </>
            )}
          </svg>
        </div>

        {/* 3. Main Order Card (`ORDER #VX-10482`) */}
        <div className="relative z-10 mx-auto mt-2 w-full max-w-xl rounded-2xl border border-surface-3/80 bg-surface-1/95 p-4 shadow-2xl shadow-black/80 backdrop-blur-xl sm:p-5 md:mt-8 md:mr-48 md:ml-12">
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-3/60 pb-3 font-mono text-xs">
            <span className="font-semibold tracking-wider text-white">
              ORDER #VX-10482
            </span>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
              <span
                className={
                  animStage >= 1
                    ? "font-semibold text-gold"
                    : "text-muted-foreground/40"
                }
              >
                ● PROCESSING
              </span>
              <span className="text-muted-foreground/30">→</span>
              <span
                className={
                  animStage >= 5
                    ? "font-semibold text-info-blue"
                    : "text-muted-foreground/40"
                }
              >
                ROUTED
              </span>
              <span className="text-muted-foreground/30">→</span>
              <span
                className={
                  animStage >= 6
                    ? "animate-pulse font-bold text-gain"
                    : "text-muted-foreground/40"
                }
              >
                EXECUTED
              </span>
            </div>
          </div>

          {/* Order Details Grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-left sm:gap-4">
            <div>
              <span className="block font-mono text-[9px] font-bold text-gain uppercase">
                BUY
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
                ABC
              </span>
            </div>
            <div>
              <span className="block font-mono text-[9px] text-muted-foreground uppercase">
                SHARES
              </span>
              <span className="font-mono text-sm font-semibold text-foreground sm:text-base">
                2,500
              </span>
            </div>
            <div>
              <span className="block font-mono text-[9px] text-muted-foreground uppercase">
                LIMIT
              </span>
              <span className="font-mono text-sm font-semibold text-gold sm:text-base">
                128.50
              </span>
            </div>
          </div>

          {/* Gate Slider Track inside Card */}
          <div className="mt-6 pt-2">
            <div className="relative h-1.5 w-full rounded-full bg-surface-3/60">
              {/* Active Gold Line */}
              <div
                className="h-full rounded-full bg-gold shadow-[0_0_8px_#E2C889] transition-all duration-500"
                style={{
                  width:
                    animStage >= 4
                      ? "100%"
                      : animStage >= 3
                        ? "66%"
                        : animStage >= 2
                          ? "33%"
                          : "0%",
                }}
              />

              {/* Gate 01 Pin */}
              <div className="absolute top-1/2 left-[15%] flex -translate-y-1/2 flex-col items-center">
                <div
                  className={`h-6 w-1 rounded-full transition-colors duration-300 sm:h-7 ${animStage >= 2 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`}
                />
              </div>
              {/* Gate 02 Pin */}
              <div className="absolute top-1/2 left-[50%] flex -translate-y-1/2 flex-col items-center">
                <div
                  className={`h-6 w-1 rounded-full transition-colors duration-300 sm:h-7 ${animStage >= 3 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`}
                />
              </div>
              {/* Gate 03 Pin */}
              <div className="absolute top-1/2 left-[85%] flex -translate-y-1/2 flex-col items-center">
                <div
                  className={`h-6 w-1 rounded-full transition-colors duration-300 sm:h-7 ${animStage >= 4 ? "bg-gold shadow-[0_0_8px_#E2C889]" : "bg-surface-3"}`}
                />
                {animStage >= 5 && (
                  <div className="h-3.5 w-3.5 animate-pulse rounded-full border-2 border-gold bg-white shadow-[0_0_12px_#FFF] sm:h-4 sm:w-4" />
                )}
              </div>
            </div>

            {/* Gate Labels Below Pins */}
            <div className="mt-4 grid grid-cols-3 font-mono text-[9px] sm:text-[10px]">
              <div>
                <span className="block text-muted-foreground">Gate 01</span>
                <span className="font-semibold text-white">FUNDS →</span>
                <div
                  className={`mt-0.5 transition-colors ${animStage >= 2 ? "font-medium text-gain" : "text-muted-foreground/40"}`}
                >
                  [AVAILABLE ✓]
                </div>
              </div>
              <div>
                <span className="block text-muted-foreground">Gate 02</span>
                <span className="font-semibold text-white">LIMIT →</span>
                <div
                  className={`mt-0.5 transition-colors ${animStage >= 3 ? "font-medium text-gain" : "text-muted-foreground/40"}`}
                >
                  [CLIENT LIMIT ✓]
                </div>
              </div>
              <div>
                <span className="block text-muted-foreground">Gate 03</span>
                <span className="font-semibold text-white">RISK →</span>
                <div
                  className={`mt-0.5 transition-colors ${animStage >= 4 ? "font-medium text-gain" : "text-muted-foreground/40"}`}
                >
                  [RISK CHECK ✓]
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Venue Route Pills (Visible on Mobile) */}
          <div className="mt-5 border-t border-surface-3/50 pt-4 md:hidden">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground/80 uppercase">
              <span>Exchange Routing</span>
              <span
                className={
                  animStage >= 5
                    ? "font-semibold text-info-blue"
                    : "text-muted-foreground/50"
                }
              >
                {animStage >= 5 ? "● Multi-Venue Active" : "Pending Gateway"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div
                className={`rounded-lg border p-2 text-center transition-all ${
                  animStage >= 5
                    ? "border-info-blue/60 bg-surface-2 shadow-sm"
                    : "border-surface-3/50 bg-surface-1/40"
                }`}
              >
                <span className="py-0.2 rounded bg-surface-3 px-1 font-mono text-[8px] font-bold text-info-blue">
                  FIX
                </span>
                <div className="mt-1 text-[10px] font-semibold text-white">
                  VENUE A
                </div>
              </div>
              <div
                className={`rounded-lg border p-2 text-center transition-all ${
                  animStage >= 5
                    ? "border-info-blue/80 bg-surface-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    : "border-surface-3/50 bg-surface-1/40"
                }`}
              >
                <span className="py-0.2 rounded bg-surface-3 px-1 font-mono text-[8px] font-bold text-info-blue">
                  FIX
                </span>
                <div className="mt-1 text-[10px] font-semibold text-white">
                  VENUES A,B
                </div>
              </div>
              <div
                className={`rounded-lg border p-2 text-center transition-all ${
                  animStage >= 5
                    ? "border-gold/60 bg-surface-2 shadow-sm"
                    : "border-surface-3/50 bg-surface-1/40"
                }`}
              >
                <span className="py-0.2 rounded bg-surface-3 px-1 font-mono text-[8px] font-bold text-gold">
                  DMA
                </span>
                <div className="mt-1 text-[10px] font-semibold text-white">
                  VENUE C
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Three Venue Router Boxes (Positioned on the Right on Desktop) */}
        <div className="absolute top-12 right-0 bottom-4 z-10 hidden w-48 flex-col justify-between md:flex">
          {/* Venue A Box */}
          <div
            className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
              animStage >= 5
                ? "border-info-blue/50 bg-surface-1/90 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                : "border-surface-3/50 bg-surface-1/40"
            }`}
          >
            <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-info-blue">
              FIX
            </span>
            <div className="text-right font-mono text-[10px]">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">VENUES A</div>
            </div>
          </div>

          {/* Venue A, B Box (Middle with waveform icon) */}
          <div
            className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
              animStage >= 5
                ? "border-info-blue/70 bg-surface-1/95 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                : "border-surface-3/50 bg-surface-1/40"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-info-blue">
                FIX
              </span>
              <span className="animate-pulse text-xs text-info-blue">〰</span>
            </div>
            <div className="text-right font-mono text-[10px]">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">
                VENUES A, B
              </div>
            </div>
          </div>

          {/* Venue C Box */}
          <div
            className={`flex items-center justify-between rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
              animStage >= 5
                ? "border-info-blue/50 bg-surface-1/90 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                : "border-surface-3/50 bg-surface-1/40"
            }`}
          >
            <span className="rounded bg-surface-3 px-1.5 py-0.5 font-mono text-[9px] font-bold text-gold">
              DMA
            </span>
            <div className="text-right font-mono text-[10px]">
              <div className="font-semibold text-white">ATS / MARKET</div>
              <div className="text-[9px] text-muted-foreground">VENUES C</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM PROCESS FLOW LINE (Mobile-Safe) ── */}
      <div className="mt-8 border-t border-surface-3/60 pt-4">
        {/* Desktop Process line */}
        <div className="hidden items-center justify-between font-mono text-[10px] tracking-widest text-muted-foreground/70 uppercase sm:flex">
          <span className="font-semibold text-white">ORDER</span>
          <span className="text-surface-3">──────→</span>
          <span className="font-semibold text-white">VALIDATE</span>
          <span className="text-surface-3">──────→</span>
          <span className="font-semibold text-white">ROUTE</span>
          <span className="text-surface-3">──────→</span>
          <span className="font-semibold text-white">EXECUTE</span>
          <span className="text-surface-3">──────→</span>
          <span className="font-semibold text-white">RECONCILE</span>
          <span className="text-surface-3">──────→</span>
          <span className="font-semibold text-gain">UPDATE</span>
        </div>
        {/* Mobile Process Stepper */}
        <div className="flex items-center justify-between font-mono text-[9px] font-medium text-muted-foreground/80 uppercase sm:hidden">
          <span className="font-semibold text-white">ORDER</span>
          <span className="text-gold">→</span>
          <span className="font-semibold text-white">VALIDATE</span>
          <span className="text-gold">→</span>
          <span className="font-semibold text-white">ROUTE</span>
          <span className="text-info-blue">→</span>
          <span className="font-semibold text-gain">EXECUTE</span>
        </div>
      </div>

      {/* ── THREE ALIGNED SUPPORTING CAPABILITY COLUMNS BELOW FLOW LINE ── */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <div className="font-mono text-xs font-semibold text-gold">
            01 Validate
          </div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">
            Rules before routing
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Apply configurable limits and account checks before an order reaches
            the market.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold text-gold">
            02 Route
          </div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">
            Connected execution
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Connect trading workflows to market systems through supported
            interfaces including FIX.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold text-gold">
            03 Update
          </div>
          <h4 className="mt-1 font-heading text-sm font-semibold text-white">
            Execution becomes position
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Carry executed trade information through to client positions and
            ledger balances.
          </p>
        </div>
      </div>
    </div>
  )
}
