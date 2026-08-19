export function CryptographicLedgerVisual({ className = "" }: { className?: string }) {
  // Hash chain visual representing immutable audit logs
  return (
    <div className={`relative flex items-center justify-center w-full aspect-[21/9] min-h-[400px] overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#0B1220] ${className}`}>
      <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full">
        
        <defs>
          <linearGradient id="hash-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="50%" stopColor="#C8B180" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* Central connecting line */}
        <line x1="100" y1="250" x2="1100" y2="250" stroke="url(#hash-line)" strokeWidth="4" strokeDasharray="8 4" className="animate-[pulse_3s_linear_infinite]" />

        {/* Block 1 */}
        <g transform="translate(150, 150)">
          <rect x="0" y="0" width="220" height="200" rx="12" fill="#080C12" stroke="#2C384A" strokeWidth="2" />
          <text x="20" y="40" fill="#94A3B8" fontSize="14" fontFamily="monospace">TX_ID: 9812A</text>
          <text x="20" y="70" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Modify Risk Limit</text>
          
          <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
          <text x="20" y="130" fill="#94A3B8" fontSize="12" fontFamily="monospace">MAKER: TRADER_04</text>
          <text x="20" y="150" fill="#3B82F6" fontSize="12" fontFamily="monospace">CHECKER: RISK_01</text>
          
          <rect x="20" y="170" width="180" height="20" rx="4" fill="#C8B180" fillOpacity="0.1" />
          <text x="110" y="184" fill="#C8B180" fontSize="10" fontFamily="monospace" textAnchor="middle">HASH: 0x4f8b...a1c9</text>
        </g>

        {/* Hash link 1 to 2 */}
        <g transform="translate(370, 250)">
          <circle cx="20" cy="0" r="8" fill="#C8B180" className="animate-ping" style={{ animationDuration: '2s' }} />
          <circle cx="20" cy="0" r="4" fill="#080C12" />
          <path d="M 40 0 L 130 0" stroke="#C8B180" strokeWidth="2" />
        </g>

        {/* Block 2 */}
        <g transform="translate(500, 150)">
          <rect x="0" y="0" width="220" height="200" rx="12" fill="#080C12" stroke="#C8B180" strokeWidth="2" className="shadow-[0_0_30px_rgba(200,177,128,0.1)]" />
          <text x="20" y="40" fill="#94A3B8" fontSize="14" fontFamily="monospace">TX_ID: 9812B</text>
          <text x="20" y="70" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Trade Execution</text>
          
          <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
          <text x="20" y="130" fill="#94A3B8" fontSize="12" fontFamily="monospace">PREV: 0x4f8b...a1c9</text>
          <text x="20" y="150" fill="#F8FAFC" fontSize="12" fontFamily="monospace">MATCH: ESX_ORD_88</text>
          
          <rect x="20" y="170" width="180" height="20" rx="4" fill="#C8B180" fillOpacity="0.2" />
          <text x="110" y="184" fill="#C8B180" fontSize="10" fontFamily="monospace" textAnchor="middle">HASH: 0x9b2e...f7d2</text>
        </g>

        {/* Hash link 2 to 3 */}
        <g transform="translate(720, 250)">
          <circle cx="20" cy="0" r="8" fill="#C8B180" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          <circle cx="20" cy="0" r="4" fill="#080C12" />
          <path d="M 40 0 L 130 0" stroke="#C8B180" strokeWidth="2" />
        </g>

        {/* Block 3 */}
        <g transform="translate(850, 150)">
          <rect x="0" y="0" width="220" height="200" rx="12" fill="#080C12" stroke="#2C384A" strokeWidth="2" />
          <text x="20" y="40" fill="#94A3B8" fontSize="14" fontFamily="monospace">TX_ID: 9812C</text>
          <text x="20" y="70" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Client Settlement</text>
          
          <rect x="20" y="100" width="180" height="2" fill="#2C384A" />
          <text x="20" y="130" fill="#94A3B8" fontSize="12" fontFamily="monospace">PREV: 0x9b2e...f7d2</text>
          <text x="20" y="150" fill="#3B82F6" fontSize="12" fontFamily="monospace">CSD: ACC_4021</text>
          
          <rect x="20" y="170" width="180" height="20" rx="4" fill="#C8B180" fillOpacity="0.1" />
          <text x="110" y="184" fill="#C8B180" fontSize="10" fontFamily="monospace" textAnchor="middle">HASH: 0x1c4a...e8b1</text>
        </g>

      </svg>
    </div>
  )
}
