export function ApiGatewayVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* ── MOBILE ADAPTIVE VIEW (< md) ── */}
      <div className="space-y-3.5 rounded-2xl border border-[#2C384A]/60 bg-[#080C12] p-4 shadow-2xl sm:p-5 md:hidden">
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 font-semibold tracking-wider text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-info-blue" />
            API GATEWAY &amp; INTEGRATIONS
          </span>
          <span className="rounded bg-info-blue/10 px-2 py-0.5 font-mono text-[9px] text-info-blue">
            UNIFIED MESH
          </span>
        </div>

        {/* Center Hub */}
        <div className="rounded-xl border-2 border-gold/40 bg-surface-1/90 p-3.5 text-center shadow-[0_0_20px_rgba(200,177,128,0.1)]">
          <span className="block font-heading text-sm font-bold tracking-widest text-white">
            VYLLION GATEWAY
          </span>
          <span className="font-mono text-[10px] tracking-wider text-gold uppercase">
            REST • GraphQL • FIX 4.4 Engine
          </span>
        </div>

        {/* 4 Integration Cards */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {/* Node 1: ESX ATS */}
          <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1/80 p-3">
            <div>
              <span className="block text-xs font-bold text-white">
                ESX ATS
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                Market Order Routing
              </span>
            </div>
            <span className="rounded bg-gold/10 px-2 py-0.5 font-mono text-[9px] font-bold text-gold">
              FIX 4.4
            </span>
          </div>

          {/* Node 2: KYC Registry */}
          <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1/80 p-3">
            <div>
              <span className="block text-xs font-bold text-white">
                Fayda National ID
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                KYC Verification Registry
              </span>
            </div>
            <span className="rounded bg-surface-3 px-2 py-0.5 font-mono text-[9px] font-bold text-muted-foreground">
              REST / JSON
            </span>
          </div>

          {/* Node 3: CSD */}
          <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1/80 p-3">
            <div>
              <span className="block text-xs font-bold text-white">
                Central Depository
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                Settlement &amp; Holdings
              </span>
            </div>
            <span className="rounded bg-info-blue/10 px-2 py-0.5 font-mono text-[9px] font-bold text-info-blue">
              ISO 20022
            </span>
          </div>

          {/* Node 4: Commercial Banks */}
          <div className="flex items-center justify-between rounded-xl border border-surface-3 bg-surface-1/80 p-3">
            <div>
              <span className="block text-xs font-bold text-white">
                Commercial Banks
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                Deposits, RTGS &amp; Sweeps
              </span>
            </div>
            <span className="rounded bg-gain/10 px-2 py-0.5 font-mono text-[9px] font-bold text-gain">
              API / SWIFT
            </span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP CANVAS VIEW (md+) ── */}
      <div className="relative hidden aspect-[2/1] min-h-[450px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#080C12] md:flex">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[100px]" />

        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 h-full w-full drop-shadow-xl"
        >
          <defs>
            <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8B180" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C8B180" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Center Vyllion Core Node */}
          <g transform="translate(500, 250)">
            <circle
              cx="0"
              cy="0"
              r="60"
              fill="#0B1220"
              stroke="#C8B180"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDuration: "4s" }}
            />
            <circle
              cx="0"
              cy="0"
              r="45"
              fill="none"
              stroke="#C8B180"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-[spin_10s_linear_infinite]"
            />
            <text
              x="0"
              y="5"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              VYLLION
            </text>
            <text
              x="0"
              y="20"
              fill="#94A3B8"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
            >
              API GATEWAY
            </text>
          </g>

          {/* Connecting Lines */}
          <path
            d="M 500 250 L 200 150"
            stroke="url(#line-glow)"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <path
            d="M 500 250 L 200 350"
            stroke="url(#line-glow)"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <path
            d="M 500 250 L 800 150"
            stroke="url(#line-glow)"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <path
            d="M 500 250 L 800 350"
            stroke="url(#line-glow)"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />

          {/* Node 1: ESX ATS */}
          <g transform="translate(200, 150)">
            <rect
              x="-80"
              y="-30"
              width="160"
              height="60"
              rx="8"
              fill="#0B1220"
              stroke="#C8B180"
              strokeWidth="1"
            />
            <text
              x="0"
              y="-5"
              fill="#F8FAFC"
              fontSize="14"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              ESX ATS
            </text>
            <text
              x="0"
              y="15"
              fill="#C8B180"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              FIX 4.4 PROTOCOL
            </text>
          </g>

          {/* Node 2: National ID */}
          <g transform="translate(200, 350)">
            <rect
              x="-80"
              y="-30"
              width="160"
              height="60"
              rx="8"
              fill="#0B1220"
              stroke="#94A3B8"
              strokeWidth="1"
            />
            <text
              x="0"
              y="-5"
              fill="#F8FAFC"
              fontSize="14"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              KYC Registry
            </text>
            <text
              x="0"
              y="15"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              REST / JSON
            </text>
          </g>

          {/* Node 3: CSD */}
          <g transform="translate(800, 150)">
            <rect
              x="-80"
              y="-30"
              width="160"
              height="60"
              rx="8"
              fill="#0B1220"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <text
              x="0"
              y="-5"
              fill="#F8FAFC"
              fontSize="14"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              Central Depository
            </text>
            <text
              x="0"
              y="15"
              fill="#3B82F6"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              ISO 20022
            </text>
          </g>

          {/* Node 4: Commercial Banks */}
          <g transform="translate(800, 350)">
            <rect
              x="-80"
              y="-30"
              width="160"
              height="60"
              rx="8"
              fill="#0B1220"
              stroke="#475569"
              strokeWidth="1"
            />
            <text
              x="0"
              y="-5"
              fill="#F8FAFC"
              fontSize="14"
              fontFamily="sans-serif"
              textAnchor="middle"
              fontWeight="bold"
            >
              Banking Networks
            </text>
            <text
              x="0"
              y="15"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="monospace"
              textAnchor="middle"
            >
              API / SWIFT
            </text>
          </g>

          {/* Floating Data Packets */}
          <circle
            cx="350"
            cy="200"
            r="3"
            fill="#C8B180"
            className="animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <circle
            cx="650"
            cy="300"
            r="3"
            fill="#3B82F6"
            className="animate-ping"
            style={{ animationDuration: "2.5s", animationDelay: "1s" }}
          />
          <circle
            cx="650"
            cy="200"
            r="3"
            fill="#F8FAFC"
            className="animate-ping"
            style={{ animationDuration: "1.8s", animationDelay: "0.5s" }}
          />
        </svg>
      </div>
    </div>
  )
}
