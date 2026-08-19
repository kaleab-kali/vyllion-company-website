import { useEffect, useState, useRef } from "react"

export function CsdSettlementVisual({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`relative w-full min-h-[440px] rounded-xl border border-[#2C384A]/60 bg-[#0F141E] p-6 shadow-2xl overflow-hidden ${className}`}>
      
      {/* ── TOP HEADER ── */}
      <div className="flex items-center justify-between border-b border-[#2C384A]/40 pb-4">
        <div className="font-sans text-[11px] font-bold text-white tracking-widest uppercase">
          TRADE <span className="text-[#64748B] font-medium">#VX-10482</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 rounded-md bg-[#161B22] p-1 border border-[#2C384A]/40">
            <div className="px-2 py-0.5 text-[9px] font-mono text-[#64748B]">T+0</div>
            <div className="px-2 py-0.5 text-[9px] font-mono font-bold text-white bg-[#2C384A] rounded">T+1</div>
            <div className="px-2 py-0.5 text-[9px] font-mono text-[#64748B]">T+2</div>
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] font-sans text-white font-medium">Settlement Cycle Selector</div>
            <div className="text-[8px] font-sans text-[#64748B] uppercase tracking-[0.1em]">Settlement workflow configured for the market</div>
          </div>
        </div>

        <div className="font-sans text-xs font-semibold tracking-[0.2em] text-[#94A3B8]">
          Vyllion
        </div>
      </div>

      {/* ── CENTRAL DIAGRAM CANVAS ── */}
      <div className="relative h-[320px] w-full mt-6">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[250px] h-[250px] bg-[#C8B180]/[0.08] blur-[70px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[30%] w-[150px] h-[150px] bg-[#3B82F6]/[0.08] blur-[50px] rounded-full pointer-events-none" />

        {/* Central Ring Structure */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[240px] h-[240px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[12px] border-[#161B22] shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]" />
          {/* Middle Glow Ring */}
          <div className="absolute inset-[16px] rounded-full border-[3px] border-[#C8B180]/30 shadow-[0_0_15px_rgba(200,177,128,0.2)]" />
          {/* Active Arc on Ring */}
          <svg className="absolute inset-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] transform -rotate-90">
            <circle cx="104" cy="104" r="104" fill="none" stroke="#C8B180" strokeWidth="3" strokeDasharray="653" strokeDashoffset="450" className="opacity-80 drop-shadow-[0_0_8px_#C8B180]" />
          </svg>
          {/* Inner Core */}
          <div className="absolute inset-[30px] rounded-full bg-[#111620] shadow-[0_8px_32px_rgba(0,0,0,0.6)]" />
          {/* Bottom 100% Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-[#E2E8F0]">100%</div>
        </div>

        {/* SVG Path Connections & Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 800 320" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="csd-glow-gold">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="csd-glow-blue">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Securities Path (Gold) */}
            <path id="path-securities" d="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180" fill="none" stroke="#C8B180" strokeWidth="4" strokeOpacity="0.6" filter="url(#csd-glow-gold)" />
            {/* Core Path highlight */}
            <path d="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180" fill="none" stroke="#FFE4A0" strokeWidth="1.5" strokeOpacity="0.8" />

            {/* CSD Message Branch (Blue) */}
            <path id="path-csd" d="M 280,90 C 320,90 350,40 430,40" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeOpacity="0.7" filter="url(#csd-glow-blue)" strokeDasharray="6 4" />

            {/* Cash Path (Grey/Dark) */}
            <path id="path-cash" d="M 50,210 L 250,210 C 320,210 380,210 450,150 C 470,130 550,130 630,130" fill="none" stroke="#2C384A" strokeWidth="3" />

            {/* Animated Particles */}
            <circle r="4" fill="#FFE4A0" filter="url(#csd-glow-gold)">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180" />
            </circle>
            <circle r="2.5" fill="#FFFFFF">
              <animateMotion dur="6s" begin="2s" repeatCount="indefinite" path="M 50,110 C 150,110 200,90 280,90 C 350,90 400,180 500,180 L 630,180" />
            </circle>

            <circle r="3" fill="#60A5FA" filter="url(#csd-glow-blue)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 280,90 C 320,90 350,40 430,40" />
            </circle>

            <circle r="3" fill="#94A3B8">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 50,210 L 250,210 C 320,210 380,210 450,150 C 470,130 550,130 630,130" />
            </circle>
          </svg>
        </div>

        {/* ── HTML NODES OVERLAY ── */}
        
        {/* Securities Start Label */}
        <div className="absolute top-[80px] left-[20px] text-[9px] font-sans text-[#94A3B8] uppercase tracking-wider">
          SECURITIES
        </div>
        
        {/* Securities Node 1 */}
        <div className="absolute top-[100px] left-[20px] -translate-y-1/2 flex items-center gap-2">
          <div className="rounded border border-[#C8B180]/40 bg-[#161B22]/90 px-3 py-1 font-sans text-[9px] font-bold text-[#E2E8F0] tracking-[0.1em] shadow-lg">
            <span className="text-[#C8B180]">EXECUTED</span> <span className="text-[#64748B] font-normal mx-1">→</span> CONFIRMING
          </div>
        </div>

        {/* CSD Message Node inside Ring */}
        <div className="absolute top-[90px] left-[280px] -translate-y-1/2 -translate-x-1/2 z-10">
          <div className="text-[10px] font-sans font-bold text-[#60A5FA] tracking-wider drop-shadow-md">
            CSD MESSAGE
          </div>
        </div>

        {/* CSD Secure Message Node (Top Right) */}
        <div className="absolute top-[40px] left-[430px] -translate-y-1/2 flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[9px] font-sans font-bold text-[#60A5FA] tracking-widest uppercase">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            SECURE MESSAGE
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2C384A] bg-[#111620] shadow-lg z-20">
            <span className="font-sans text-[11px] font-bold text-white tracking-widest">CSD</span>
          </div>
        </div>

        {/* Pending -> In Transit -> Settled Node (Bottom Right) */}
        <div className="absolute top-[145px] left-[350px] z-10">
          <div className="rounded border border-[#2C384A]/60 bg-[#111620]/90 px-4 py-1.5 font-sans text-[10px] font-bold text-[#94A3B8] tracking-[0.15em] shadow-lg whitespace-nowrap">
            PENDING <span className="text-[#64748B] font-normal mx-1.5">→</span> IN TRANSIT <span className="text-[#64748B] font-normal mx-1.5">→</span> <span className="text-[#F1F5F9]">SETTLED</span>
          </div>
        </div>

        {/* Settled Green Pill */}
        <div className="absolute top-[180px] left-[550px] -translate-y-1/2 z-20">
          <div className="rounded-full border border-[#4ADE80]/50 bg-[#064E3B]/60 px-4 py-1 font-sans text-[10px] font-bold text-[#4ADE80] tracking-widest shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            SETTLED ✓
          </div>
        </div>

        {/* Cash Start Label & Node */}
        <div className="absolute top-[230px] left-[20px] text-[9px] font-sans text-[#64748B] uppercase tracking-wider">
          CASH
        </div>
        <div className="absolute top-[210px] left-[20px] -translate-y-1/2 flex items-center gap-2">
          <div className="font-sans text-[10px] font-bold text-[#E2E8F0] tracking-widest flex items-center gap-2">
            CASH <div className="h-1.5 w-1.5 rounded-full bg-[#C8B180] shadow-[0_0_5px_#C8B180]" />
          </div>
        </div>

        {/* Client/Bank Node on Cash Path */}
        <div className="absolute top-[210px] left-[240px] -translate-y-1/2 z-10">
          <div className="font-sans text-[10px] font-bold text-[#E2E8F0] tracking-wider uppercase">
            → CLIENT/BANK
          </div>
        </div>

        {/* ── BOTTOM RIGHT: Client Position Box ── */}
        <div className="absolute bottom-[0px] right-[20px] rounded-lg border border-[#2C384A]/60 bg-[#111620]/95 p-4 shadow-xl w-[220px]">
          <div className="text-[10px] font-sans font-medium text-[#E2E8F0]">Client Position</div>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold text-white tracking-tight">2,500</span>
              <span className="text-[#64748B] text-[10px]">→</span>
              <span className="font-mono text-lg font-bold text-white tracking-tight">5,000</span>
            </div>
            <div className="text-right leading-tight">
              <div className="text-[9px] font-sans font-bold text-white uppercase tracking-wider">POSITION</div>
              <div className="text-[9px] font-sans font-bold text-white uppercase tracking-wider">UPDATED</div>
            </div>
          </div>
          
          <div className="mt-1 flex items-center gap-5 text-[9px] font-mono text-[#64748B]">
            <span>2,500</span>
            <span>5,000</span>
          </div>

          <div className="mt-4 border-t border-[#2C384A]/60 pt-3">
            <div className="text-[8px] font-sans text-[#94A3B8] uppercase tracking-widest mb-1.5">SETTLEMENT CALENDAR</div>
            <div className="flex items-end justify-between h-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-0.5 bg-[#475569] rounded-full" />
                <div className="text-[7px] font-sans font-bold text-[#64748B]">MON</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-0.5 bg-[#C8B180] rounded-full shadow-[0_0_4px_#C8B180]" />
                <div className="text-[7px] font-sans font-bold text-[#E2E8F0]">TUE</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-0.5 bg-[#475569] rounded-full" />
                <div className="text-[7px] font-sans font-bold text-[#64748B]">WED</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-0.5 bg-[#475569] rounded-full" />
                <div className="text-[7px] font-sans font-bold text-[#64748B]">THU</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-0.5 bg-[#475569] rounded-full" />
                <div className="text-[7px] font-sans font-bold text-[#64748B]">FRI</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
