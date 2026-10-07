export function CoreArchitectureEngine({
  className = "",
}: {
  className?: string
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* ── MOBILE ADAPTIVE ARCHITECTURE VIEW (< md) ── */}
      <div className="space-y-4 overflow-hidden rounded-2xl border border-[#2C384A]/60 bg-[#080C12] p-4 shadow-2xl sm:p-5 md:hidden">
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 font-semibold tracking-wider text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            CORE ENGINE ARCHITECTURE
          </span>
          <span className="rounded bg-gain/10 px-2 py-0.5 font-mono text-[9px] text-gain">
            DETERMINISTIC
          </span>
        </div>

        {/* Ingestion Channels */}
        <div>
          <span className="mb-2 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            01 / Input Ingestion Rails
          </span>
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] text-muted-foreground">
                INGEST
              </span>
              <span className="font-medium text-white">Order API</span>
            </div>
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] text-muted-foreground">
                FEED
              </span>
              <span className="font-medium text-white">Market Data</span>
            </div>
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] text-muted-foreground">
                CONTROL
              </span>
              <span className="font-medium text-white">Admin Ops</span>
            </div>
          </div>
        </div>

        {/* Central Core Engine */}
        <div className="rounded-xl border-2 border-gold/40 bg-gradient-to-b from-surface-2 to-surface-1 p-4 shadow-[0_0_20px_rgba(200,177,128,0.1)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-heading text-sm font-bold tracking-wider text-white">
              VYLLION ENGINE CORE
            </span>
            <span className="font-mono text-[9px] text-info-blue">
              ZERO-DRIFT GUARANTEE
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 p-2.5">
              <div>
                <span className="block font-mono text-[10px] font-bold text-gold uppercase">
                  STATE ENGINE
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Deterministic State Transitions
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold text-gold">
                100% Reprod.
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-info-blue/30 bg-info-blue/5 p-2.5">
              <div>
                <span className="block font-mono text-[10px] font-bold text-info-blue uppercase">
                  MATCHING &amp; LIMITS
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Microsecond Pre-Trade Validation
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold text-info-blue">
                &lt;150μs
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-surface-3 bg-surface-0/90 p-2.5">
              <div>
                <span className="block font-mono text-[10px] font-bold text-white uppercase">
                  APPEND-ONLY EVENT STORE
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Immutable Financial Ledger Journal
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold text-gain">
                SHA-256
              </span>
            </div>
          </div>
        </div>

        {/* Destination Rails */}
        <div>
          <span className="mb-2 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            02 / External Gateways &amp; Finality
          </span>
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] font-bold text-gold">
                EXCHANGE
              </span>
              <span className="font-medium text-white">ESX Gateway</span>
            </div>
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] font-bold text-info-blue">
                DEPOSITORY
              </span>
              <span className="font-medium text-white">CSD Clearing</span>
            </div>
            <div className="rounded-lg border border-surface-3 bg-surface-1 p-2">
              <span className="block text-[8px] font-bold text-gain">
                LIQUIDITY
              </span>
              <span className="font-medium text-white">Bank Sweep</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP CANVAS VIEW (md+) ── */}
      <div className="relative hidden aspect-video max-h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#080C12] md:flex">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B1800a_1px,transparent_1px),linear-gradient(to_bottom,#C8B1800a_1px,transparent_1px)] bg-[size:40px_40px]" />

        <svg
          viewBox="0 0 1000 600"
          className="absolute inset-0 h-full w-full drop-shadow-2xl"
        >
          <defs>
            <linearGradient
              id="engine-glow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#C8B180" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <filter id="blur-core">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* Central Engine Block */}
          <g
            transform="translate(300, 150)"
            className="animate-pulse"
            style={{ animationDuration: "4s" }}
          >
            <rect
              x="0"
              y="0"
              width="400"
              height="300"
              rx="16"
              fill="url(#engine-glow)"
              stroke="#2C384A"
              strokeWidth="2"
            />

            {/* Internal nodes */}
            <rect
              x="40"
              y="40"
              width="140"
              height="100"
              rx="8"
              fill="#0B1220"
              stroke="#C8B180"
              strokeWidth="1"
            />
            <text
              x="110"
              y="90"
              fill="#C8B180"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
              fontWeight="bold"
            >
              STATE ENGINE
            </text>
            <text
              x="110"
              y="110"
              fill="#94A3B8"
              fontSize="10"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Deterministic State
            </text>

            <rect
              x="220"
              y="40"
              width="140"
              height="100"
              rx="8"
              fill="#0B1220"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <text
              x="290"
              y="90"
              fill="#3B82F6"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
              fontWeight="bold"
            >
              MATCHING LOGIC
            </text>
            <text
              x="290"
              y="110"
              fill="#94A3B8"
              fontSize="10"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              High-Throughput
            </text>

            <rect
              x="40"
              y="160"
              width="320"
              height="100"
              rx="8"
              fill="#0B1220"
              stroke="#475569"
              strokeWidth="1"
            />
            <text
              x="200"
              y="200"
              fill="#F8FAFC"
              fontSize="12"
              fontFamily="monospace"
              textAnchor="middle"
              fontWeight="bold"
            >
              APPEND-ONLY EVENT STORE
            </text>
            <text
              x="200"
              y="220"
              fill="#94A3B8"
              fontSize="10"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Immutable Financial Ledger
            </text>

            {/* Internal Connections */}
            <path
              d="M 110 140 L 110 160"
              stroke="#C8B180"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 290 140 L 290 160"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </g>

          {/* Input Nodes (Left) */}
          <g transform="translate(100, 200)">
            <rect
              x="0"
              y="0"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#94A3B8"
            />
            <text
              x="60"
              y="24"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Order Ingest API
            </text>
            <path
              d="M 120 20 L 300 180"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />

            <rect
              x="0"
              y="60"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#94A3B8"
            />
            <text
              x="60"
              y="84"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Market Data
            </text>
            <path
              d="M 120 80 L 300 220"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />

            <rect
              x="0"
              y="120"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#94A3B8"
            />
            <text
              x="60"
              y="144"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Admin Actions
            </text>
            <path
              d="M 120 140 L 300 260"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </g>

          {/* Output Nodes (Right) */}
          <g transform="translate(780, 200)">
            <path
              d="M -80 180 L 0 20"
              stroke="#C8B180"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <rect
              x="0"
              y="0"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#C8B180"
            />
            <text
              x="60"
              y="24"
              fill="#C8B180"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              ESX Gateway
            </text>

            <path
              d="M -80 260 L 0 80"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
              style={{ animationDelay: "0.7s" }}
            />
            <rect
              x="0"
              y="60"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#3B82F6"
            />
            <text
              x="60"
              y="84"
              fill="#3B82F6"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              CSD Clearing
            </text>

            <path
              d="M -80 340 L 0 140"
              stroke="#F8FAFC"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />
            <rect
              x="0"
              y="120"
              width="120"
              height="40"
              rx="4"
              fill="#0B1220"
              stroke="#475569"
            />
            <text
              x="60"
              y="144"
              fill="#F8FAFC"
              fontSize="11"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              Bank Sweep
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
