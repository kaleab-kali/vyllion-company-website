export function BrokerageScaleVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center w-full aspect-[21/9] min-h-[400px] overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#0B1220] ${className}`}>
      
      <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full drop-shadow-2xl">
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
        <line x1="100" y1="400" x2="1100" y2="400" stroke="#2C384A" strokeWidth="2" />
        
        {/* Retail Brokerage Profile */}
        <g transform="translate(150, 0)">
          {/* Animated Bars */}
          <rect x="20" y="200" width="40" height="200" rx="4" fill="url(#bar-gold)" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <rect x="70" y="300" width="40" height="100" rx="4" fill="url(#bar-blue)" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <rect x="120" y="250" width="40" height="150" rx="4" fill="#475569" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          
          <text x="90" y="440" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Retail Brokerage</text>
          <text x="90" y="465" fill="#94A3B8" fontSize="12" fontFamily="sans-serif" textAnchor="middle">High Concurrency / Volume</text>

          {/* Metrics Tooltip */}
          <g transform="translate(10, 100)">
            <rect x="0" y="0" width="160" height="60" rx="6" fill="#080C12" stroke="#2C384A" />
            <text x="15" y="25" fill="#94A3B8" fontSize="10" fontFamily="monospace">Avg. Daily Volume</text>
            <text x="15" y="45" fill="#C8B180" fontSize="16" fontFamily="sans-serif" fontWeight="bold">1.2M Orders</text>
            <path d="M 80 60 L 80 90" stroke="#2C384A" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </g>

        {/* Institutional Desk Profile */}
        <g transform="translate(500, 0)">
          <rect x="20" y="280" width="40" height="120" rx="4" fill="url(#bar-gold)" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }} />
          <rect x="70" y="150" width="40" height="250" rx="4" fill="url(#bar-blue)" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.7s' }} />
          <rect x="120" y="220" width="40" height="180" rx="4" fill="#475569" className="animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
          
          <text x="90" y="440" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Institutional Desk</text>
          <text x="90" y="465" fill="#94A3B8" fontSize="12" fontFamily="sans-serif" textAnchor="middle">Block Trading / High AUM</text>

          <g transform="translate(10, 50)">
            <rect x="0" y="0" width="160" height="60" rx="6" fill="#080C12" stroke="#2C384A" />
            <text x="15" y="25" fill="#94A3B8" fontSize="10" fontFamily="monospace">Block Execution Size</text>
            <text x="15" y="45" fill="#3B82F6" fontSize="16" fontFamily="sans-serif" fontWeight="bold">ETB 500M+</text>
            <path d="M 80 60 L 80 90" stroke="#2C384A" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </g>

        {/* Custodian Bank Profile */}
        <g transform="translate(850, 0)">
          <rect x="20" y="320" width="40" height="80" rx="4" fill="url(#bar-gold)" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.4s' }} />
          <rect x="70" y="300" width="40" height="100" rx="4" fill="url(#bar-blue)" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.9s' }} />
          <rect x="120" y="120" width="40" height="280" rx="4" fill="#475569" className="animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '1.4s' }} />
          
          <text x="90" y="440" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Custodian Bank</text>
          <text x="90" y="465" fill="#94A3B8" fontSize="12" fontFamily="sans-serif" textAnchor="middle">Asset Safety / CSD Recon</text>

          <g transform="translate(10, 20)">
            <rect x="0" y="0" width="160" height="60" rx="6" fill="#080C12" stroke="#2C384A" />
            <text x="15" y="25" fill="#94A3B8" fontSize="10" fontFamily="monospace">Asset Reconciliation</text>
            <text x="15" y="45" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" fontWeight="bold">100% Accuracy</text>
            <path d="M 80 60 L 80 90" stroke="#2C384A" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </g>
      </svg>
    </div>
  )
}
