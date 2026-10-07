export function BrokerageScaleVisual({
  className = "",
}: {
  className?: string
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* ── MOBILE ADAPTIVE VIEW (< md) ── */}
      <div className="space-y-3.5 rounded-2xl border border-[#2C384A]/60 bg-[#0B1220] p-4 shadow-2xl sm:p-5 md:hidden">
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 font-semibold tracking-wider text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            OPERATIONAL SCALE BY FIRM TYPE
          </span>
          <span className="rounded bg-gold/10 px-2 py-0.5 font-mono text-[9px] text-gold">
            ESX PROFILES
          </span>
        </div>

        {/* Profile 1: Retail Brokerage */}
        <div className="rounded-xl border border-surface-3 bg-surface-1/80 p-3.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-xs font-bold text-white">
                Retail Brokerage
              </span>
              <span className="text-[10px] text-muted-foreground">
                High Concurrency &amp; Volume
              </span>
            </div>
            <span className="rounded bg-gold/10 px-2.5 py-1 font-mono text-xs font-bold text-gold">
              1.2M Orders/day
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-3">
              <div className="h-full w-[85%] rounded-full bg-gold" />
            </div>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground">
              85% Throughput
            </span>
          </div>
        </div>

        {/* Profile 2: Institutional Desk */}
        <div className="rounded-xl border border-surface-3 bg-surface-1/80 p-3.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-xs font-bold text-white">
                Institutional Desk
              </span>
              <span className="text-[10px] text-muted-foreground">
                Block Trading &amp; High AUM
              </span>
            </div>
            <span className="rounded bg-info-blue/10 px-2.5 py-1 font-mono text-xs font-bold text-info-blue">
              ETB 500M+ Block
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-3">
              <div className="h-full w-[95%] rounded-full bg-info-blue" />
            </div>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground">
              95% Capital Utilization
            </span>
          </div>
        </div>

        {/* Profile 3: Custodian Bank */}
        <div className="rounded-xl border border-surface-3 bg-surface-1/80 p-3.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-xs font-bold text-white">
                Custodian Bank
              </span>
              <span className="text-[10px] text-muted-foreground">
                Asset Safety &amp; CSD Recon
              </span>
            </div>
            <span className="rounded bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-white">
              100% Recon
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-3">
              <div className="h-full w-[100%] rounded-full bg-emerald" />
            </div>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground">
              Zero Settlement Breaks
            </span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP CANVAS VIEW (md+) ── */}
      <div className="relative hidden aspect-[21/9] min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#0B1220] md:flex">
        <svg
          viewBox="0 0 1200 500"
          className="absolute inset-0 h-full w-full drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="bar-gold" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8B180" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#C8B180" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="bar-blue" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Axis Base */}
          <line
            x1="100"
            y1="400"
            x2="1100"
            y2="400"
            stroke="#2C384A"
            strokeWidth="2"
          />

          {/* Retail Brokerage Profile */}
          <g transform="translate(150, 0)">
            <rect
              x="20"
              y="200"
              width="40"
              height="200"
              rx="4"
              fill="url(#bar-gold)"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <rect
              x="70"
              y="300"
              width="40"
              height="100"
              rx="4"
              fill="url(#bar-blue)"
              className="animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "0.5s" }}
            />
            <rect
              x="120"
              y="250"
              width="40"
              height="150"
              rx="4"
              fill="#475569"
              className="animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />

            <text
              x="90"
              y="440"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              Retail Brokerage
            </text>
            <text
              x="90"
              y="465"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              High Concurrency / Volume
            </text>

            <g transform="translate(10, 100)">
              <rect
                x="0"
                y="0"
                width="160"
                height="60"
                rx="6"
                fill="#080C12"
                stroke="#2C384A"
              />
              <text
                x="15"
                y="25"
                fill="#94A3B8"
                fontSize="10"
                fontFamily="monospace"
              >
                Avg. Daily Volume
              </text>
              <text
                x="15"
                y="45"
                fill="#C8B180"
                fontSize="16"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                1.2M Orders
              </text>
              <path
                d="M 80 60 L 80 90"
                stroke="#2C384A"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </g>
          </g>

          {/* Institutional Desk Profile */}
          <g transform="translate(500, 0)">
            <rect
              x="20"
              y="280"
              width="40"
              height="120"
              rx="4"
              fill="url(#bar-gold)"
              className="animate-pulse"
              style={{ animationDuration: "3.5s", animationDelay: "0.2s" }}
            />
            <rect
              x="70"
              y="150"
              width="40"
              height="250"
              rx="4"
              fill="url(#bar-blue)"
              className="animate-pulse"
              style={{ animationDuration: "2.5s", animationDelay: "0.7s" }}
            />
            <rect
              x="120"
              y="220"
              width="40"
              height="180"
              rx="4"
              fill="#475569"
              className="animate-pulse"
              style={{ animationDuration: "3.2s", animationDelay: "1.2s" }}
            />

            <text
              x="90"
              y="440"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              Institutional Desk
            </text>
            <text
              x="90"
              y="465"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Block Trading / High AUM
            </text>

            <g transform="translate(10, 50)">
              <rect
                x="0"
                y="0"
                width="160"
                height="60"
                rx="6"
                fill="#080C12"
                stroke="#2C384A"
              />
              <text
                x="15"
                y="25"
                fill="#94A3B8"
                fontSize="10"
                fontFamily="monospace"
              >
                Block Execution Size
              </text>
              <text
                x="15"
                y="45"
                fill="#3B82F6"
                fontSize="16"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                ETB 500M+
              </text>
              <path
                d="M 80 60 L 80 90"
                stroke="#2C384A"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </g>
          </g>

          {/* Custodian Bank Profile */}
          <g transform="translate(850, 0)">
            <rect
              x="20"
              y="320"
              width="40"
              height="80"
              rx="4"
              fill="url(#bar-gold)"
              className="animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "0.4s" }}
            />
            <rect
              x="70"
              y="300"
              width="40"
              height="100"
              rx="4"
              fill="url(#bar-blue)"
              className="animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "0.9s" }}
            />
            <rect
              x="120"
              y="120"
              width="40"
              height="280"
              rx="4"
              fill="#475569"
              className="animate-pulse"
              style={{ animationDuration: "2.8s", animationDelay: "1.4s" }}
            />

            <text
              x="90"
              y="440"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              Custodian Bank
            </text>
            <text
              x="90"
              y="465"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Asset Safety / CSD Recon
            </text>

            <g transform="translate(10, 20)">
              <rect
                x="0"
                y="0"
                width="160"
                height="60"
                rx="6"
                fill="#080C12"
                stroke="#2C384A"
              />
              <text
                x="15"
                y="25"
                fill="#94A3B8"
                fontSize="10"
                fontFamily="monospace"
              >
                Asset Reconciliation
              </text>
              <text
                x="15"
                y="45"
                fill="#F8FAFC"
                fontSize="16"
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                100% Accuracy
              </text>
              <path
                d="M 80 60 L 80 90"
                stroke="#2C384A"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
