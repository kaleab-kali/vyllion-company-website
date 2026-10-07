export function CapabilitiesMatrix({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* ── MOBILE ADAPTIVE VIEW (< md) ── */}
      <div className="space-y-3 rounded-2xl border border-[#2C384A]/60 bg-[#0B1220] p-4 shadow-2xl sm:p-5 md:hidden">
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 font-semibold tracking-wider text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            249 ESX CAPABILITIES MATRIX
          </span>
          <span className="rounded bg-gain/10 px-2 py-0.5 font-mono text-[9px] text-gain">
            20 MODULES
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-gold/30 bg-surface-1/90 p-3.5 shadow-sm">
            <span className="block font-mono text-[10px] font-bold text-gold uppercase">
              MODULE: KYC_01
            </span>
            <h4 className="mt-0.5 text-sm font-bold text-white">
              Digital Onboarding
            </h4>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Fayda eKYC, PEP screening, corporate mandates, tiered retail
              verification.
            </p>
            <span className="mt-2 inline-block rounded bg-gold/10 px-2 py-0.5 font-mono text-[9px] text-gold/80">
              24 Sub-capabilities active
            </span>
          </div>

          <div className="rounded-xl border border-info-blue/30 bg-surface-1/90 p-3.5 shadow-sm">
            <span className="block font-mono text-[10px] font-bold text-info-blue uppercase">
              MODULE: ORD_04
            </span>
            <h4 className="mt-0.5 text-sm font-bold text-white">
              Pre-Trade Risk Engine
            </h4>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Single-order caps, client margins, circuit breakers, hard/soft
              warning gates.
            </p>
            <span className="mt-2 inline-block rounded bg-info-blue/10 px-2 py-0.5 font-mono text-[9px] text-info-blue/80">
              18 Limit thresholds
            </span>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1/90 p-3.5 shadow-sm">
            <span className="block font-mono text-[10px] font-bold text-white uppercase">
              MODULE: STL_09
            </span>
            <h4 className="mt-0.5 text-sm font-bold text-white">
              Position Reconciliation
            </h4>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Continuous matching with ECSD authority records, break detection
              &amp; resolution.
            </p>
            <span className="mt-2 inline-block rounded bg-gain/10 px-2 py-0.5 font-mono text-[9px] text-gain">
              Continuous 100% matching
            </span>
          </div>

          <div className="rounded-xl border border-surface-3 bg-surface-1/90 p-3.5 shadow-sm">
            <span className="block font-mono text-[10px] font-bold text-stale uppercase">
              MODULE: ACC_02
            </span>
            <h4 className="mt-0.5 text-sm font-bold text-white">
              Double-Entry Accounting
            </h4>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Client money segregation (Resource ≥ Requirement), fee &amp; tax
              automated sweeps.
            </p>
            <span className="mt-2 inline-block rounded bg-stale/10 px-2 py-0.5 font-mono text-[9px] text-stale">
              Full trial balance
            </span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP CANVAS VIEW (md+) ── */}
      <div className="relative hidden aspect-video min-h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#0B1220] md:flex">
        <svg viewBox="0 0 1200 600" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="matrix-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8B180" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0B1220" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="url(#matrix-glow)"
          />

          {/* Generate a grid of nodes representing capabilities */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 16 }).map((_, col) => {
              const x = 80 + col * 65
              const y = 80 + row * 65
              const isActiveGold = (row + col) % 7 === 0
              const isActiveBlue = (row + col) % 11 === 0

              let color = "#1e293b" // base muted
              let opacity = 0.5
              let animDelay = row * 0.1 + col * 0.05 + "s"

              if (isActiveGold) {
                color = "#C8B180"
                opacity = 1
              } else if (isActiveBlue) {
                color = "#3B82F6"
                opacity = 0.8
              }

              return (
                <g
                  key={`${row}-${col}`}
                  className="animate-pulse"
                  style={{ animationDuration: "4s", animationDelay: animDelay }}
                >
                  {col < 15 && (
                    <line
                      x1={x + 10}
                      y1={y}
                      x2={x + 55}
                      y2={y}
                      stroke="#1e293b"
                      strokeWidth="1"
                    />
                  )}
                  {row < 7 && (
                    <line
                      x1={x}
                      y1={y + 10}
                      x2={x}
                      y2={y + 55}
                      stroke="#1e293b"
                      strokeWidth="1"
                    />
                  )}
                  <rect
                    x={x - 8}
                    y={y - 8}
                    width="16"
                    height="16"
                    rx="4"
                    fill={color}
                    fillOpacity={opacity}
                  />
                </g>
              )
            })
          )}

          {/* Overlay overlays for specific high-level modules */}
          <g transform="translate(150, 150)">
            <rect
              x="0"
              y="0"
              width="220"
              height="120"
              rx="8"
              fill="#080C12"
              fillOpacity="0.8"
              stroke="#C8B180"
              strokeWidth="1"
              className="backdrop-blur-sm"
            />
            <text
              x="20"
              y="40"
              fill="#C8B180"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              MODULE: KYC_01
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="18"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Digital Onboarding
            </text>
            <text
              x="20"
              y="95"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
            >
              24 Sub-capabilities active
            </text>
          </g>

          <g transform="translate(450, 300)">
            <rect
              x="0"
              y="0"
              width="220"
              height="120"
              rx="8"
              fill="#080C12"
              fillOpacity="0.8"
              stroke="#3B82F6"
              strokeWidth="1"
              className="backdrop-blur-sm"
            />
            <text
              x="20"
              y="40"
              fill="#3B82F6"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              MODULE: ORD_04
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="18"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Pre-Trade Risk
            </text>
            <text
              x="20"
              y="95"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
            >
              18 Limit thresholds
            </text>
          </g>

          <g transform="translate(800, 100)">
            <rect
              x="0"
              y="0"
              width="220"
              height="120"
              rx="8"
              fill="#080C12"
              fillOpacity="0.8"
              stroke="#F8FAFC"
              strokeWidth="1"
              className="backdrop-blur-sm"
            />
            <text
              x="20"
              y="40"
              fill="#94A3B8"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              MODULE: STL_09
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="18"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Position Recon
            </text>
            <text
              x="20"
              y="95"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
            >
              Continuous matching
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
