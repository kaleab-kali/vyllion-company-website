export function CryptographicLedgerVisual({
  className = "",
}: {
  className?: string
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* ── MOBILE ADAPTIVE VIEW (< md) ── */}
      <div className="space-y-3 rounded-2xl border border-[#2C384A]/60 bg-[#0B1220] p-4 shadow-2xl sm:p-5 md:hidden">
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 font-semibold tracking-wider text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            HASH-CHAINED AUDIT TRAIL
          </span>
          <span className="rounded bg-gain/10 px-2 py-0.5 font-mono text-[9px] text-gain">
            IMMUTABLE
          </span>
        </div>

        {/* Block 1 */}
        <div className="rounded-xl border border-surface-3 bg-surface-0/90 p-3.5 font-mono text-xs shadow-md">
          <div className="mb-1 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>TX_ID: 9812A</span>
            <span className="text-gold">BLOCK #01</span>
          </div>
          <div className="font-sans text-sm font-bold text-white">
            Modify Risk Limit
          </div>
          <div className="mt-2.5 flex justify-between border-t border-surface-3/50 pt-2 text-[10px]">
            <span className="text-muted-foreground">MAKER: TRADER_04</span>
            <span className="font-semibold text-info-blue">
              CHECKER: RISK_01
            </span>
          </div>
          <div className="mt-2 rounded bg-gold/10 px-2 py-1 text-center font-mono text-[9px] text-gold">
            HASH: 0x4f8b...a1c9
          </div>
        </div>

        {/* Chain Connector */}
        <div className="flex flex-col items-center py-0.5">
          <div className="h-3 w-0.5 bg-gold" />
          <div className="py-0.2 rounded-full border border-gold/40 bg-surface-2 px-2 font-mono text-[8px] text-gold uppercase">
            LINKED HASH
          </div>
          <div className="h-3 w-0.5 bg-gold" />
        </div>

        {/* Block 2 */}
        <div className="rounded-xl border-2 border-gold/50 bg-surface-0/90 p-3.5 font-mono text-xs shadow-[0_0_15px_rgba(200,177,128,0.15)]">
          <div className="mb-1 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>TX_ID: 9812B</span>
            <span className="font-bold text-gold">BLOCK #02 (VERIFIED)</span>
          </div>
          <div className="font-sans text-sm font-bold text-white">
            Trade Execution (ESX ATS)
          </div>
          <div className="mt-2.5 flex justify-between border-t border-surface-3/50 pt-2 text-[10px]">
            <span className="text-muted-foreground">PREV: 0x4f8b...</span>
            <span className="font-semibold text-white">MATCH: ESX_ORD_88</span>
          </div>
          <div className="mt-2 rounded bg-gold/20 px-2 py-1 text-center font-mono text-[9px] font-bold text-gold">
            HASH: 0x9b2e...f7d2
          </div>
        </div>

        {/* Chain Connector */}
        <div className="flex flex-col items-center py-0.5">
          <div className="h-3 w-0.5 bg-gold" />
          <div className="py-0.2 rounded-full border border-gold/40 bg-surface-2 px-2 font-mono text-[8px] text-gold uppercase">
            LINKED HASH
          </div>
          <div className="h-3 w-0.5 bg-gold" />
        </div>

        {/* Block 3 */}
        <div className="rounded-xl border border-surface-3 bg-surface-0/90 p-3.5 font-mono text-xs shadow-md">
          <div className="mb-1 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>TX_ID: 9812C</span>
            <span className="text-gold">BLOCK #03</span>
          </div>
          <div className="font-sans text-sm font-bold text-white">
            Client Settlement Finality
          </div>
          <div className="mt-2.5 flex justify-between border-t border-surface-3/50 pt-2 text-[10px]">
            <span className="text-muted-foreground">PREV: 0x9b2e...</span>
            <span className="font-semibold text-info-blue">CSD: ACC_4021</span>
          </div>
          <div className="mt-2 rounded bg-gold/10 px-2 py-1 text-center font-mono text-[9px] text-gold">
            HASH: 0x1c4a...e8b1
          </div>
        </div>
      </div>

      {/* ── DESKTOP CANVAS VIEW (md+) ── */}
      <div className="relative hidden aspect-[21/9] min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#0B1220] md:flex">
        <svg viewBox="0 0 1200 500" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="hash-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#C8B180" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* Central connecting line */}
          <line
            x1="100"
            y1="250"
            x2="1100"
            y2="250"
            stroke="url(#hash-line)"
            strokeWidth="4"
            strokeDasharray="8 4"
            className="animate-[pulse_3s_linear_infinite]"
          />

          {/* Block 1 */}
          <g transform="translate(150, 150)">
            <rect
              x="0"
              y="0"
              width="220"
              height="200"
              rx="12"
              fill="#080C12"
              stroke="#2C384A"
              strokeWidth="2"
            />
            <text
              x="20"
              y="40"
              fill="#94A3B8"
              fontSize="14"
              fontFamily="monospace"
            >
              TX_ID: 9812A
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Modify Risk Limit
            </text>

            <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
            <text
              x="20"
              y="130"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="monospace"
            >
              MAKER: TRADER_04
            </text>
            <text
              x="20"
              y="150"
              fill="#3B82F6"
              fontSize="12"
              fontFamily="monospace"
            >
              CHECKER: RISK_01
            </text>

            <rect
              x="20"
              y="170"
              width="180"
              height="20"
              rx="4"
              fill="#C8B180"
              fillOpacity="0.1"
            />
            <text
              x="110"
              y="184"
              fill="#C8B180"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
            >
              HASH: 0x4f8b...a1c9
            </text>
          </g>

          {/* Hash link 1 to 2 */}
          <g transform="translate(370, 250)">
            <circle
              cx="20"
              cy="0"
              r="8"
              fill="#C8B180"
              className="animate-ping"
              style={{ animationDuration: "2s" }}
            />
            <circle cx="20" cy="0" r="4" fill="#080C12" />
            <path d="M 40 0 L 130 0" stroke="#C8B180" strokeWidth="2" />
          </g>

          {/* Block 2 */}
          <g transform="translate(500, 150)">
            <rect
              x="0"
              y="0"
              width="220"
              height="200"
              rx="12"
              fill="#080C12"
              stroke="#C8B180"
              strokeWidth="2"
              className="shadow-[0_0_30px_rgba(200,177,128,0.1)]"
            />
            <text
              x="20"
              y="40"
              fill="#94A3B8"
              fontSize="14"
              fontFamily="monospace"
            >
              TX_ID: 9812B
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Trade Execution
            </text>

            <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
            <text
              x="20"
              y="130"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="monospace"
            >
              PREV: 0x4f8b...a1c9
            </text>
            <text
              x="20"
              y="150"
              fill="#F8FAFC"
              fontSize="12"
              fontFamily="monospace"
            >
              MATCH: ESX_ORD_88
            </text>

            <rect
              x="20"
              y="170"
              width="180"
              height="20"
              rx="4"
              fill="#C8B180"
              fillOpacity="0.2"
            />
            <text
              x="110"
              y="184"
              fill="#C8B180"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
            >
              HASH: 0x9b2e...f7d2
            </text>
          </g>

          {/* Hash link 2 to 3 */}
          <g transform="translate(720, 250)">
            <circle
              cx="20"
              cy="0"
              r="8"
              fill="#C8B180"
              className="animate-ping"
              style={{ animationDuration: "2s", animationDelay: "1s" }}
            />
            <circle cx="20" cy="0" r="4" fill="#080C12" />
            <path d="M 40 0 L 130 0" stroke="#C8B180" strokeWidth="2" />
          </g>

          {/* Block 3 */}
          <g transform="translate(850, 150)">
            <rect
              x="0"
              y="0"
              width="220"
              height="200"
              rx="12"
              fill="#080C12"
              stroke="#2C384A"
              strokeWidth="2"
            />
            <text
              x="20"
              y="40"
              fill="#94A3B8"
              fontSize="14"
              fontFamily="monospace"
            >
              TX_ID: 9812C
            </text>
            <text
              x="20"
              y="70"
              fill="#F8FAFC"
              fontSize="16"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Client Settlement
            </text>

            <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
            <text
              x="20"
              y="130"
              fill="#94A3B8"
              fontSize="12"
              fontFamily="monospace"
            >
              PREV: 0x9b2e...f7d2
            </text>
            <text
              x="20"
              y="150"
              fill="#3B82F6"
              fontSize="12"
              fontFamily="monospace"
            >
              CSD: ACC_4021
            </text>

            <rect
              x="20"
              y="170"
              width="180"
              height="20"
              rx="4"
              fill="#C8B180"
              fillOpacity="0.1"
            />
            <text
              x="110"
              y="184"
              fill="#C8B180"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
            >
              HASH: 0x1c4a...e8b1
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
