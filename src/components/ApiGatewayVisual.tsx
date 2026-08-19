export function ApiGatewayVisual({ className = "" }: { className?: string }) {
  // A glowing network node visual representing external integrations
  return (
    <div className={`relative flex items-center justify-center w-full aspect-[2/1] min-h-[450px] overflow-hidden rounded-2xl border border-[#2C384A]/30 bg-[#080C12] ${className}`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[100px]" />

      <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8B180" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C8B180" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Center Vyllion Core Node */}
        <g transform="translate(500, 250)">
          <circle cx="0" cy="0" r="60" fill="#0B1220" stroke="#C8B180" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '4s' }} />
          <circle cx="0" cy="0" r="45" fill="none" stroke="#C8B180" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
          <text x="0" y="5" fill="#F8FAFC" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">VYLLION</text>
          <text x="0" y="20" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">API GATEWAY</text>
        </g>

        {/* Connecting Lines */}
        <path d="M 500 250 L 200 150" stroke="url(#line-glow)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <path d="M 500 250 L 200 350" stroke="url(#line-glow)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <path d="M 500 250 L 800 150" stroke="url(#line-glow)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <path d="M 500 250 L 800 350" stroke="url(#line-glow)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.8s' }} />

        {/* Node 1: ESX ATS */}
        <g transform="translate(200, 150)">
          <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#0B1220" stroke="#C8B180" strokeWidth="1" />
          <text x="0" y="-5" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ESX ATS</text>
          <text x="0" y="15" fill="#C8B180" fontSize="11" fontFamily="monospace" textAnchor="middle">FIX 4.4 PROTOCOL</text>
        </g>

        {/* Node 2: National ID */}
        <g transform="translate(200, 350)">
          <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#0B1220" stroke="#94A3B8" strokeWidth="1" />
          <text x="0" y="-5" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">KYC Registry</text>
          <text x="0" y="15" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">REST / JSON</text>
        </g>

        {/* Node 3: CSD */}
        <g transform="translate(800, 150)">
          <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#0B1220" stroke="#3B82F6" strokeWidth="1" />
          <text x="0" y="-5" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Central Depository</text>
          <text x="0" y="15" fill="#3B82F6" fontSize="11" fontFamily="monospace" textAnchor="middle">ISO 20022</text>
        </g>

        {/* Node 4: Commercial Banks */}
        <g transform="translate(800, 350)">
          <rect x="-80" y="-30" width="160" height="60" rx="8" fill="#0B1220" stroke="#475569" strokeWidth="1" />
          <text x="0" y="-5" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Banking Networks</text>
          <text x="0" y="15" fill="#94A3B8" fontSize="11" fontFamily="monospace" textAnchor="middle">API / SWIFT</text>
        </g>
        
        {/* Floating Data Packets */}
        <circle cx="350" cy="200" r="3" fill="#C8B180" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="650" cy="300" r="3" fill="#3B82F6" className="animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
        <circle cx="650" cy="200" r="3" fill="#F8FAFC" className="animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.5s' }} />

      </svg>
    </div>
  )
}
