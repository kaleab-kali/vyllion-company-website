import { VyllionLogo } from "./VyllionLogo"

export function NetworkGraphic({ className = "" }: { className?: string }) {
  // Nodes layout mapped roughly to the provided mockup
  const nodes = [
    { id: "client", label: "CLIENT", x: 10, y: 50 },
    { id: "order_flow", label: "ORDER FLOW", x: 30, y: 25 },
    { id: "trading_1", label: "TRADING", x: 30, y: 75 },
    { id: "risk", label: "RISK", x: 55, y: 25 },
    { id: "settlement", label: "SETTLEMENT", x: 55, y: 75 },
    { id: "market", label: "MARKET", x: 90, y: 15 },
    { id: "trading_2", label: "TRADING", x: 80, y: 50 },
    { id: "csd", label: "CSD", x: 90, y: 85 },
  ]

  // Edges definition (source, target, color)
  const edges = [
    { source: "client", target: "order_flow", color: "gold" },
    { source: "client", target: "trading_1", color: "blue" },
    { source: "client", target: "risk", color: "blue" },
    { source: "order_flow", target: "risk", color: "gold" },
    { source: "order_flow", target: "trading_1", color: "gold" },
    { source: "trading_1", target: "settlement", color: "blue" },
    { source: "risk", target: "market", color: "blue" },
    { source: "risk", target: "trading_2", color: "gold" },
    { source: "settlement", target: "trading_2", color: "gold" },
    { source: "settlement", target: "csd", color: "blue" },
    { source: "market", target: "trading_2", color: "blue" },
    { source: "trading_2", target: "csd", color: "gold" },
    // Cross connections
    { source: "order_flow", target: "trading_2", color: "blue" },
    { source: "trading_1", target: "risk", color: "blue" },
    { source: "client", target: "settlement", color: "blue" },
    { source: "market", target: "settlement", color: "blue" },
    { source: "risk", target: "settlement", color: "blue" },
    { source: "order_flow", target: "market", color: "blue" },
  ]

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="-6 0 114 100"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Edges */}
        {edges.map((edge, i) => {
          const s = nodes.find((n) => n.id === edge.source)!
          const t = nodes.find((n) => n.id === edge.target)!
          return (
            <line
              key={`edge-${i}`}
              x1={s.x}
              y1={s.y}
              x2={t.x}
              y2={t.y}
              stroke={edge.color === "gold" ? "#E2C889" : "#3B82F6"}
              strokeWidth="0.3"
              strokeOpacity={edge.color === "gold" ? "0.6" : "0.4"}
              className="transition-all duration-1000"
            />
          )
        })}

        {/* Central glowing ring and logo */}
        <circle
          cx="45"
          cy="50"
          r="15"
          fill="none"
          stroke="#232c45"
          strokeWidth="0.5"
        />
        <circle
          cx="45"
          cy="50"
          r="12"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.2"
          strokeOpacity="0.5"
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id} className="transition-transform hover:scale-110">
            {/* The dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="1"
              fill={
                node.id === "market" || node.id === "csd"
                  ? "#3B82F6"
                  : "#E2C889"
              }
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="none"
              stroke={
                node.id === "market" || node.id === "csd"
                  ? "#3B82F6"
                  : "#E2C889"
              }
              strokeOpacity="0.3"
              strokeWidth="0.5"
            />
            {/* The label */}
            <text
              x={node.x + (node.x > 50 ? 2.5 : -2.5)}
              y={node.y + 1}
              fontSize="2.5"
              fill="#A9B7C6"
              textAnchor={node.x > 50 ? "start" : "end"}
              className="font-sans font-medium tracking-widest uppercase"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Floating labels - Desktop Layout */}
      <div className="absolute top-8 right-6 hidden items-center gap-2 rounded-full border border-surface-3 bg-surface-1/80 px-3 py-1 backdrop-blur-sm sm:flex">
        <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
          Order Routing
        </span>
        <span className="h-1 w-1 rounded-full bg-gain shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
          Active
        </span>
      </div>

      <div className="absolute bottom-8 left-6 hidden items-center gap-2 rounded-full border border-surface-3 bg-surface-1/80 px-3 py-1 backdrop-blur-sm sm:flex">
        <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
          Risk Engine
        </span>
        <span className="h-1 w-1 rounded-full bg-gain shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
          Monitoring
        </span>
      </div>

      {/* Floating labels - Mobile Compact */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full border border-surface-3 bg-surface-1/90 px-2 py-0.5 text-[8px] tracking-wider text-muted-foreground uppercase backdrop-blur-sm sm:hidden">
        <span>Routing</span>
        <span className="h-1 w-1 rounded-full bg-gain shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
      </div>

      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full border border-surface-3 bg-surface-1/90 px-2 py-0.5 text-[8px] tracking-wider text-muted-foreground uppercase backdrop-blur-sm sm:hidden">
        <span>Risk Engine</span>
        <span className="h-1 w-1 rounded-full bg-gain shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
      </div>

      {/* Central Logo Overlay */}
      <div className="pointer-events-none absolute top-1/2 left-[45%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-gold sm:h-12 sm:w-12">
        <VyllionLogo />
      </div>
    </div>
  )
}
