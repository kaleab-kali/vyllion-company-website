import { useEffect, useState, useRef } from "react"

interface Node {
  id: string
  label: string
  x: number
  state: string
  desc: string
  code: string
}

export function TransactionPathGraphic({ className = "" }: { className?: string }) {
  const nodes: Node[] = [
    { id: "client", label: "CLIENT", x: 100, state: "CONNECTED", desc: "Onboarding, profiles, KYC information, accounts", code: "MOD-A" },
    { id: "order", label: "ORDER", x: 233, state: "REAL-TIME", desc: "Capture, validate, manage orders, trade matching.", code: "MOD-B" },
    { id: "execution", label: "EXECUTION", x: 366, state: "SYNCHRONIZED", desc: "Connect trading activity, multiple trading systems.", code: "MOD-D" },
    { id: "settlement", label: "SETTLEMENT", x: 500, state: "SYNCHRONIZED", desc: "Positions, transfers, message exchange, CSD", code: "MOD-G" },
    { id: "accounting", label: "ACCOUNTING", x: 633, state: "CONNECTED", desc: "Client ledgers, funds, reconciliation, bank-pool", code: "MOD-E" },
    { id: "risk", label: "RISK & COMPLIANCE", x: 766, state: "MONITORED", desc: "KYC, validation, suspicious activity alerts", code: "MOD-C" },
    { id: "reporting", label: "REPORTING", x: 900, state: "TRACEABLE", desc: "Liquidity, financial status, complaints, analysis", code: "MOD-N" },
  ]

  const [progress, setProgress] = useState(0)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const animRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  // Smooth 60FPS animation loop for data packets
  useEffect(() => {
    const DURATION = 7000 // 7 seconds full cycle

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = (timestamp - startTimeRef.current) % DURATION
      const currentX = (elapsed / DURATION) * 1000
      setProgress(currentX)
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  // Calculate active pulse intensity for each node (0 to 1) based on main wave distance
  const getNodeIntensity = (index: number) => {
    if (hoveredNode !== null) {
      return hoveredNode === index ? 1 : 0.25
    }
    const nodeX = nodes[index].x
    // Main packet pulse
    const d1 = Math.abs(progress - nodeX)
    // Second trailing packet pulse offset by 50%
    const d2 = Math.abs(((progress + 500) % 1000) - nodeX)
    const dist = Math.min(d1, d2)
    
    if (dist < 75) {
      return Math.pow(1 - dist / 75, 2)
    }
    return 0
  }

  // Find nearest active node if any is currently receiving the pulse
  const activePulseNodeIndex = hoveredNode !== null 
    ? hoveredNode 
    : nodes.findIndex((_, idx) => getNodeIntensity(idx) > 0.6)

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Graphic */}
      <div className="hidden md:block relative w-full">
        <div className="relative w-full rounded-2xl border border-surface-3/60 bg-surface-1/40 p-6 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
          
          {/* Subtle Ambient Background Grid & Radial Glow */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gold/5 blur-[100px] pointer-events-none" />

          <svg viewBox="0 0 1000 240" className="w-full h-auto overflow-visible" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Premium Glow Filters */}
              <filter id="glow-gold-intense" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="2" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-blue-soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Comet Tail Gradient */}
              <linearGradient id="comet-tail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E2C889" stopOpacity="0" />
                <stop offset="70%" stopColor="#E2C889" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* BACKGROUND ARCHITECTURE LINES (Muted blue/gray institutional circuit) */}
            <g stroke="#232C45" strokeWidth="1.5" fill="none" opacity="0.8">
              {/* Top architectural highway */}
              <path d="M 0,90 L 80,90 L 120,50 L 260,50 L 300,90 L 330,90 L 370,50 L 720,50 L 780,90 L 1000,90" />
              <path d="M 120,50 L 200,50 L 240,20 L 700,20 L 740,50" strokeDasharray="4 4" opacity="0.5" />
              
              {/* Bottom architectural highway */}
              <path d="M 0,150 L 90,150 L 130,190 L 250,190 L 290,150 L 320,150 L 360,190 L 410,190 L 450,150 L 520,150 L 560,190 L 750,190 L 790,150 L 1000,150" />
              <path d="M 410,190 L 450,220 L 720,220 L 760,190" strokeDasharray="6 6" opacity="0.4" />
              
              {/* Connecting Diagonals */}
              <path d="M 150,120 L 175,90" strokeOpacity="0.5" />
              <path d="M 330,120 L 355,150" strokeOpacity="0.5" />
              <path d="M 500,120 L 525,90" strokeOpacity="0.5" />
              <path d="M 800,120 L 825,150" strokeOpacity="0.5" />
            </g>

            {/* BASE TRANSACTION ARTERY */}
            <line x1="0" y1="120" x2="1000" y2="120" stroke="#1C2438" strokeWidth="3" />
            <line x1="0" y1="120" x2="1000" y2="120" stroke="#E2C889" strokeWidth="1.5" strokeOpacity="0.4" />

            {/* SUB-PULSE CIRCUITS (Animated SVG dashoffset) */}
            <path 
              d="M 0,90 L 80,90 L 120,50 L 260,50 L 300,90 L 330,90 L 370,50 L 720,50 L 780,90 L 1000,90" 
              stroke="#3B82F6" 
              strokeWidth="1.5" 
              fill="none" 
              strokeDasharray="20 180" 
              strokeDashoffset={-progress * 1.5}
              opacity="0.7"
            />
            <path 
              d="M 0,150 L 90,150 L 130,190 L 250,190 L 290,150 L 320,150 L 360,190 L 410,190 L 450,150 L 520,150 L 560,190 L 750,190 L 790,150 L 1000,150" 
              stroke="#E2C889" 
              strokeWidth="1.5" 
              fill="none" 
              strokeDasharray="30 220" 
              strokeDashoffset={-progress * 1.2}
              opacity="0.6"
            />

            {/* PRIMARY DATA COMETS (Flowing along main gold artery) */}
            {/* Packet 1 */}
            <g transform={`translate(${progress}, 120)`}>
              <line x1="-50" y1="0" x2="0" y2="0" stroke="url(#comet-tail)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="0" r="4" fill="#FFF" filter="url(#glow-gold-intense)" />
              <circle cx="0" cy="0" r="2" fill="#E2C889" />
            </g>
            {/* Packet 2 (Trailing 50% offset) */}
            <g transform={`translate(${(progress + 500) % 1000}, 120)`}>
              <line x1="-40" y1="0" x2="0" y2="0" stroke="url(#comet-tail)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
              <circle cx="0" cy="0" r="3.5" fill="#FFF" filter="url(#glow-gold-intense)" />
            </g>

            {/* NODES */}
            {nodes.map((node, i) => {
              const intensity = getNodeIntensity(i)
              const isHovered = hoveredNode === i
              const isActive = intensity > 0.4 || isHovered

              return (
                <g 
                  key={node.id} 
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Dynamic Outer Ripple Ring */}
                  {intensity > 0.2 && (
                    <circle
                      cx={node.x}
                      cy="120"
                      r={14 + intensity * 8}
                      fill="none"
                      stroke="#E2C889"
                      strokeWidth="1"
                      strokeOpacity={intensity * 0.5}
                      className="transition-all duration-150"
                    />
                  )}

                  {/* Outer Blue/Gold Halo */}
                  <circle
                    cx={node.x}
                    cy="120"
                    r="14"
                    fill="#0A0E14"
                    stroke={isActive ? "#E2C889" : "#3B82F6"}
                    strokeWidth={isActive ? "2" : "1"}
                    strokeOpacity={isActive ? "1" : "0.4"}
                    filter={isActive ? "url(#glow-gold-intense)" : "url(#glow-blue-soft)"}
                    className="transition-all duration-300"
                  />

                  {/* Inner Core Dot */}
                  <circle
                    cx={node.x}
                    cy="120"
                    r={isActive ? "5" : "3.5"}
                    fill={isActive ? "#E2C889" : "#7A8AA0"}
                    className="transition-all duration-300"
                  />

                  {/* Node Label */}
                  <text
                    x={node.x}
                    y="160"
                    fill={isActive ? "#FFFFFF" : "#7A8AA0"}
                    fontSize="11"
                    fontWeight={isActive ? "600" : "500"}
                    textAnchor="middle"
                    className="font-sans tracking-widest transition-colors duration-300 select-none"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {node.label}
                  </text>

                  {/* Module Code Badge */}
                  <text
                    x={node.x}
                    y="75"
                    fill={isActive ? "#E2C889" : "#3D4E66"}
                    fontSize="9"
                    fontWeight="600"
                    textAnchor="middle"
                    className="font-mono tracking-wider transition-colors duration-300 select-none"
                  >
                    {node.code}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* SYSTEM STATE LAYER (Interactive 7-Column Grid) */}
          <div className="grid grid-cols-7 gap-3 mt-6 pt-6 border-t border-surface-3/50">
            {nodes.map((node, i) => {
              const intensity = getNodeIntensity(i)
              const isActive = intensity > 0.4 || hoveredNode === i

              return (
                <div
                  key={`${node.id}-state`}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`flex flex-col items-center text-center p-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-surface-2/80 border border-gold/30 shadow-lg shadow-gold/5 scale-[1.03]" 
                      : "hover:bg-surface-2/40 border border-transparent"
                  }`}
                >
                  <span className={`text-[10px] uppercase tracking-widest mb-1.5 font-mono font-semibold transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-muted-foreground/70"
                  }`}>
                    {node.state}
                  </span>
                  <p className={`text-[11px] leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-foreground font-medium" : "text-muted-foreground/80"
                  }`}>
                    {node.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Mobile Vertical Fallback */}
      <div className="md:hidden flex flex-col items-center py-6">
        <div className="relative border-l-2 border-gold/40 ml-4 py-2 space-y-8 w-full max-w-sm">
          {nodes.map((node, i) => (
            <div key={`mobile-${node.id}`} className="relative pl-6">
              {/* Node Marker */}
              <div className="absolute -left-[9px] top-0.5 h-4 w-4 rounded-full bg-surface-0 border-2 border-gold flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              </div>
              
              {/* Content Card */}
              <div className="rounded-xl border border-surface-3/80 bg-surface-1/60 p-3.5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-widest text-white uppercase">{node.label}</h4>
                  <span className="text-[9px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded">{node.code}</span>
                </div>
                <div className="mt-2 flex flex-col gap-0.5">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-mono font-medium">
                    {node.state}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {node.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
