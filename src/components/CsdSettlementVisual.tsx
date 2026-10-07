import { useRef } from "react"

export function CsdSettlementVisual({
  className = "",
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl border border-[#2C384A]/60 bg-[#0F141E] p-4 shadow-2xl sm:p-6 ${className}`}
    >
      {/* ── TOP HEADER (Responsive) ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2C384A]/40 pb-4">
        <div className="font-sans text-[11px] font-bold tracking-widest text-white uppercase">
          TRADE <span className="font-medium text-[#64748B]">#VX-10482</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-md border border-[#2C384A]/40 bg-[#161B22] p-1">
            <div className="px-2 py-0.5 font-mono text-[9px] text-[#64748B]">
              T+0
            </div>
            <div className="rounded bg-[#2C384A] px-2 py-0.5 font-mono text-[9px] font-bold text-white shadow-sm">
              T+1
            </div>
            <div className="px-2 py-0.5 font-mono text-[9px] text-[#64748B]">
              T+2
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="font-sans text-[10px] font-medium text-white">
              Settlement Cycle
            </div>
            <div className="font-sans text-[8px] tracking-[0.1em] text-[#64748B] uppercase">
              Configured for ESX Market
            </div>
          </div>
        </div>

        <div className="font-sans text-xs font-semibold tracking-[0.2em] text-[#C8B180]">
          ECSD DvP
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE ADAPTIVE VIEW (< md)
          ═══════════════════════════════════════════════════════════ */}
      <div className="mt-4 space-y-4 md:hidden">
        {/* Central DvP Finality Meter */}
        <div className="rounded-xl border border-surface-3/80 bg-surface-1/90 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              Settlement Status
            </span>
            <span className="rounded-full border border-gain/40 bg-gain/10 px-2.5 py-0.5 font-mono text-[9px] font-bold text-gain">
              FINALITY REACHED ✓
            </span>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <svg className="h-full w-full -rotate-90 transform">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="#161B22"
                  strokeWidth="5"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="#C8B180"
                  strokeWidth="5"
                  strokeDasharray="163"
                  strokeDashoffset="0"
                  className="drop-shadow-[0_0_6px_#C8B180]"
                />
              </svg>
              <span className="absolute font-mono text-[11px] font-bold text-white">
                100%
              </span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">
                Delivery vs Payment (DvP)
              </h4>
              <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                Simultaneous atomic exchange of securities in ECSD against
                central bank cash settlement.
              </p>
            </div>
          </div>
        </div>

        {/* Dual Rails (Securities + Cash) */}
        <div className="space-y-2 font-mono text-[10px]">
          {/* Securities Rail */}
          <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 p-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              <div>
                <span className="block font-semibold text-white">
                  Securities Leg
                </span>
                <span className="text-[9px] text-muted-foreground">
                  ECSD Account #994012
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-gold">+2,500 Shares</span>
              <span className="block text-[9px] text-gain">
                ✓ Debited &amp; Credited
              </span>
            </div>
          </div>

          {/* Cash Rail */}
          <div className="flex items-center justify-between rounded-lg border border-info-blue/30 bg-info-blue/5 p-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-info-blue" />
              <div>
                <span className="block font-semibold text-white">
                  Cash Settlement Leg
                </span>
                <span className="text-[9px] text-muted-foreground">
                  Bank Settlement Sweep
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-info-blue">ETB 321,250.00</span>
              <span className="block text-[9px] text-gain">
                ✓ Finalized via RTGS
              </span>
            </div>
          </div>
        </div>

        {/* Position Recon Snapshot */}
        <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-0/80 p-3.5">
          <div>
            <span className="block font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
              Client Position
            </span>
            <div className="mt-0.5 flex items-baseline gap-2">
              <span className="font-mono text-sm font-bold text-muted-foreground">
                2,500
              </span>
              <span className="text-gold">→</span>
              <span className="font-mono text-base font-bold text-white">
                5,000 ABC
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="block font-mono text-[9px] tracking-widest text-gain uppercase">
              ECSD Mirror
            </span>
            <span className="font-mono text-[10px] font-medium text-white">
              Reconciled 100%
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP DIAGRAM VIEW (md+)
          ═══════════════════════════════════════════════════════════ */}
      <div className="relative mt-6 hidden h-[320px] w-full md:block">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute top-1/2 left-[30%] h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-[#C8B180]/[0.08] blur-[70px]" />
        <div className="pointer-events-none absolute top-[20%] right-[30%] h-[150px] w-[150px] rounded-full bg-[#3B82F6]/[0.08] blur-[50px]" />

        {/* Central Ring Structure */}
        <div className="absolute top-1/2 left-[30%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[12px] border-[#161B22] shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]" />
          {/* Middle Glow Ring */}
          <div className="absolute inset-[16px] rounded-full border-[3px] border-[#C8B180]/30 shadow-[0_0_15px_rgba(200,177,128,0.2)]" />
          {/* Active Arc on Ring */}
          <svg className="absolute inset-[16px] h-[calc(100%-32px)] w-[calc(100%-32px)] -rotate-90 transform">
            <circle
              cx="104"
              cy="104"
              r="104"
              fill="none"
              stroke="#C8B180"
              strokeWidth="3"
              strokeDasharray="653"
              strokeDashoffset="450"
              className="opacity-80 drop-shadow-[0_0_8px_#C8B180]"
            />
          </svg>
          {/* Inner Core */}
          <div className="absolute inset-[30px] rounded-full bg-[#111620] shadow-[0_8px_32px_rgba(0,0,0,0.6)]" />
          {/* Bottom 100% Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold text-[#E2E8F0]">
            100%
          </div>
        </div>

        {/* SVG Path Connections & Particles */}
        <div className="pointer-events-none absolute inset-0">
          <svg
            viewBox="0 0 800 320"
            className="h-full w-full overflow-visible"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="csd-glow-gold">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="csd-glow-blue">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Securities Path (Gold) */}
            <path
              id="path-securities"
              d="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180"
              fill="none"
              stroke="#C8B180"
              strokeWidth="4"
              strokeOpacity="0.6"
              filter="url(#csd-glow-gold)"
            />
            {/* Core Path highlight */}
            <path
              d="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180"
              fill="none"
              stroke="#FFE4A0"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />

            {/* CSD Message Branch (Blue) */}
            <path
              id="path-csd"
              d="M 280,90 C 320,90 350,40 430,40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
              strokeOpacity="0.7"
              filter="url(#csd-glow-blue)"
              strokeDasharray="6 4"
            />

            {/* Cash Path (Grey/Dark) */}
            <path
              id="path-cash"
              d="M 50,210 L 250,210 C 320,210 380,210 450,150 C 470,130 550,130 630,130"
              fill="none"
              stroke="#2C384A"
              strokeWidth="3"
            />

            {/* Animated Particles */}
            <circle r="4" fill="#FFE4A0" filter="url(#csd-glow-gold)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180"
              />
            </circle>
            <circle r="2.5" fill="#FFFFFF">
              <animateMotion
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
                path="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180"
              />
            </circle>

            <circle r="3" fill="#60A5FA" filter="url(#csd-glow-blue)">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 280,90 C 320,90 350,40 430,40"
              />
            </circle>

            <circle r="3" fill="#94A3B8">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M 50,210 L 250,210 C 320,210 380,210 450,150 C 470,130 550,130 630,130"
              />
            </circle>
          </svg>
        </div>

        {/* ── HTML NODES OVERLAY ── */}

        {/* Securities Start Label */}
        <div className="absolute top-[80px] left-[20px] font-sans text-[9px] tracking-wider text-[#94A3B8] uppercase">
          SECURITIES
        </div>

        {/* Securities Node 1 */}
        <div className="absolute top-[100px] left-[20px] flex -translate-y-1/2 items-center gap-2">
          <div className="rounded border border-[#C8B180]/40 bg-[#161B22]/90 px-3 py-1 font-sans text-[9px] font-bold tracking-[0.1em] text-[#E2E8F0] shadow-lg">
            <span className="text-[#C8B180]">EXECUTED</span>{" "}
            <span className="mx-1 font-normal text-[#64748B]">→</span>{" "}
            CONFIRMING
          </div>
        </div>

        {/* CSD Message Node inside Ring */}
        <div className="absolute top-[90px] left-[280px] z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="font-sans text-[10px] font-bold tracking-wider text-[#60A5FA] drop-shadow-md">
            CSD MESSAGE
          </div>
        </div>

        {/* CSD Secure Message Node (Top Right) */}
        <div className="absolute top-[40px] left-[430px] flex -translate-y-1/2 items-center gap-3">
          <div className="flex items-center gap-1.5 font-sans text-[9px] font-bold tracking-widest text-[#60A5FA] uppercase">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3 w-3"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            SECURE MESSAGE
          </div>
          <div className="z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#2C384A] bg-[#111620] shadow-lg">
            <span className="font-sans text-[11px] font-bold tracking-widest text-white">
              CSD
            </span>
          </div>
        </div>

        {/* Pending -> In Transit -> Settled Node (Bottom Right) */}
        <div className="absolute top-[145px] left-[350px] z-10">
          <div className="rounded border border-[#2C384A]/60 bg-[#111620]/90 px-4 py-1.5 font-sans text-[10px] font-bold tracking-[0.15em] whitespace-nowrap text-[#94A3B8] shadow-lg">
            PENDING <span className="mx-1.5 font-normal text-[#64748B]">→</span>{" "}
            IN TRANSIT{" "}
            <span className="mx-1.5 font-normal text-[#64748B]">→</span>{" "}
            <span className="text-[#F1F5F9]">SETTLED</span>
          </div>
        </div>

        {/* Settled Green Pill */}
        <div className="absolute top-[180px] left-[550px] z-20 -translate-y-1/2">
          <div className="rounded-full border border-[#4ADE80]/50 bg-[#064E3B]/60 px-4 py-1 font-sans text-[10px] font-bold tracking-widest text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            SETTLED ✓
          </div>
        </div>

        {/* Cash Start Label & Node */}
        <div className="absolute top-[230px] left-[20px] font-sans text-[9px] tracking-wider text-[#64748B] uppercase">
          CASH
        </div>
        <div className="absolute top-[210px] left-[20px] flex -translate-y-1/2 items-center gap-2">
          <div className="flex items-center gap-2 font-sans text-[10px] font-bold tracking-widest text-[#E2E8F0]">
            CASH{" "}
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8B180] shadow-[0_0_5px_#C8B180]" />
          </div>
        </div>

        {/* Client/Bank Node on Cash Path */}
        <div className="absolute top-[210px] left-[240px] z-10 -translate-y-1/2">
          <div className="font-sans text-[10px] font-bold tracking-wider text-[#E2E8F0] uppercase">
            → CLIENT/BANK
          </div>
        </div>

        {/* ── BOTTOM RIGHT: Client Position Box ── */}
        <div className="absolute right-[20px] bottom-[0px] w-[220px] rounded-lg border border-[#2C384A]/60 bg-[#111620]/95 p-4 shadow-xl">
          <div className="font-sans text-[10px] font-medium text-[#E2E8F0]">
            Client Position
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold tracking-tight text-white">
                2,500
              </span>
              <span className="text-[10px] text-[#64748B]">→</span>
              <span className="font-mono text-lg font-bold tracking-tight text-white">
                5,000
              </span>
            </div>
            <div className="text-right leading-tight">
              <div className="font-sans text-[9px] font-bold tracking-wider text-white uppercase">
                POSITION
              </div>
              <div className="font-sans text-[9px] font-bold tracking-wider text-white uppercase">
                UPDATED
              </div>
            </div>
          </div>

          <div className="mt-1 flex items-center gap-5 font-mono text-[9px] text-[#64748B]">
            <span>2,500</span>
            <span>5,000</span>
          </div>

          <div className="mt-4 border-t border-[#2C384A]/60 pt-3">
            <div className="mb-1.5 font-sans text-[8px] tracking-widest text-[#94A3B8] uppercase">
              SETTLEMENT CALENDAR
            </div>
            <div className="flex h-4 items-end justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="h-0.5 w-5 rounded-full bg-[#475569]" />
                <div className="font-sans text-[7px] font-bold text-[#64748B]">
                  MON
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-0.5 w-5 rounded-full bg-[#C8B180] shadow-[0_0_4px_#C8B180]" />
                <div className="font-sans text-[7px] font-bold text-[#E2E8F0]">
                  TUE
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-0.5 w-5 rounded-full bg-[#475569]" />
                <div className="font-sans text-[7px] font-bold text-[#64748B]">
                  WED
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-0.5 w-5 rounded-full bg-[#475569]" />
                <div className="font-sans text-[7px] font-bold text-[#64748B]">
                  THU
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-0.5 w-5 rounded-full bg-[#475569]" />
                <div className="font-sans text-[7px] font-bold text-[#64748B]">
                  FRI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
