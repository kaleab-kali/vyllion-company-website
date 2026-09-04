import { useEffect, useState, useRef } from "react"

export function MarketConnectivityVisual({ className = "" }: { className?: string }) {
  // Exact color matches from the design mockup
  const colorGold = "#C8B180" // Muted champagne gold
  const colorBlue = "#3B82F6" // Clean vibrant blue
  const colorMutedBorder = "#2C384A" // Faint borders

  return (
    <div className={`relative w-full ${className}`}>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE ADAPTIVE ARCHITECTURE VIEW (< md)
          ═══════════════════════════════════════════════════════════ */}
      <div className="md:hidden relative w-full rounded-2xl border border-surface-3/80 bg-surface-1/90 p-4 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-surface-3/60 pb-3 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gain animate-pulse" />
            <span className="font-semibold text-white tracking-wider">MARKET GATEWAY</span>
          </div>
          <span className="text-[10px] text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded font-mono">
            FIX 4.4 CERTIFIED
          </span>
        </div>

        {/* Vertical Data Highway */}
        <div className="mt-4 flex flex-col items-center space-y-3">

          {/* Node 1: Brokerage System */}
          <div className="w-full rounded-xl border border-surface-3 bg-surface-0/80 p-3.5 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-mono font-bold text-xs">
                BRK
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Brokerage Operations</h4>
                <p className="text-[10px] text-muted-foreground font-mono">OMS • DMA Orders • FIX Drop</p>
              </div>
            </div>
            <span className="text-[9px] font-mono text-gain bg-gain/10 px-2 py-0.5 rounded">CONNECTED</span>
          </div>

          {/* Connecting Pulse Line */}
          <div className="flex flex-col items-center py-0.5">
            <div className="h-4 w-0.5 bg-gradient-to-b from-gold to-info-blue" />
            <div className="rounded-full border border-surface-3 bg-surface-2 px-2.5 py-0.5 font-mono text-[8px] text-gold uppercase tracking-widest my-0.5 shadow-sm">
              FIX 4.4 STREAM
            </div>
            <div className="h-4 w-0.5 bg-gradient-to-b from-info-blue to-gold" />
          </div>

          {/* Node 2: Central VYLLION Gateway Hub */}
          <div className="w-full rounded-xl border-2 border-gold/40 bg-gradient-to-br from-surface-2 to-surface-1 p-4 shadow-[0_0_25px_rgba(200,177,128,0.12)]">
            <div className="flex items-center justify-between">
              <span className="font-heading text-sm font-bold tracking-widest text-white">
                VYLLION ROUTING CORE
              </span>
              <span className="font-mono text-[9px] text-info-blue">&lt;120μs LATENCY</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
              Deterministic sequence recovery, drop-copy ingest & regulatory heartbeat management.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-surface-3/50 font-mono text-[9px]">
              <div className="flex items-center gap-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                <span>State Engine Synced</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-info-blue" />
                <span>Drop-Copy Active</span>
              </div>
            </div>
          </div>

          {/* Connecting Pulse Line */}
          <div className="flex flex-col items-center py-0.5">
            <div className="h-4 w-0.5 bg-gradient-to-b from-gold to-info-blue" />
            <div className="rounded-full border border-surface-3 bg-surface-2 px-2.5 py-0.5 font-mono text-[8px] text-info-blue uppercase tracking-widest my-0.5 shadow-sm">
              ATS PROTOCOL
            </div>
            <div className="h-4 w-0.5 bg-gradient-to-b from-info-blue to-gold" />
          </div>

          {/* Node 3: Market Venues Grid */}
          <div className="w-full">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Connected Venues</span>
              <span className="text-gain font-semibold">4/4 Online</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-surface-3/80 bg-surface-0/60 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-surface-3 px-1 py-0.2 font-mono text-[8px] font-bold text-info-blue">FIX</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-white">ESX ATS (Main)</div>
                <div className="text-[9px] font-mono text-muted-foreground">Order Books A, B</div>
              </div>

              <div className="rounded-xl border border-surface-3/80 bg-surface-0/60 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-surface-3 px-1 py-0.2 font-mono text-[8px] font-bold text-gold">DMA</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-white">Institutional DMA</div>
                <div className="text-[9px] font-mono text-muted-foreground">Block Trading ATS</div>
              </div>

              <div className="rounded-xl border border-surface-3/80 bg-surface-0/60 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-surface-3 px-1 py-0.2 font-mono text-[8px] font-bold text-emerald">ISO</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-white">ECSD Depository</div>
                <div className="text-[9px] font-mono text-muted-foreground">ISO 20022 Clearing</div>
              </div>

              <div className="rounded-xl border border-surface-3/80 bg-surface-0/60 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-surface-3 px-1 py-0.2 font-mono text-[8px] font-bold text-stale">API</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gain" />
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-white">Bank Sweeps</div>
                <div className="text-[9px] font-mono text-muted-foreground">Telebirr &amp; Banks</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP CANVAS VIEW (md+)
          ═══════════════════════════════════════════════════════════ */}
      <div className="hidden md:block relative w-full h-[520px]">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3B82F6]/[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#C8B180]/[0.05] blur-[70px] rounded-full pointer-events-none" />

        {/* Faint Background Data Matrix */}
        <div className="absolute top-0 left-0 right-0 h-[280px] overflow-hidden pointer-events-none opacity-25" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent)' }}>
          <div className="font-mono text-[8px] text-[#475569] leading-[2] tracking-[0.15em] whitespace-nowrap pl-4 pt-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i}>
                {String(i).padStart(8, '0')}-001 INSTRUMENT ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BID/ASK &nbsp;&nbsp;&nbsp;&nbsp; 2.00 &nbsp;&nbsp;&nbsp;&nbsp; LIVE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {String(i).padStart(8, '0')}-002 INSTRUMENT ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BID/ASK &nbsp;&nbsp;&nbsp;&nbsp; 3.00 &nbsp;&nbsp;&nbsp;&nbsp; LIVE
              </div>
            ))}
          </div>
        </div>

        {/* SVG Layer for Paths and CSS Animated Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg viewBox="0 0 750 520" className="w-full h-full fill-none overflow-visible" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Top Multi-Curve Trunk */}
            <path id="curve-top-1" d="M360,210 C360,160 140,160 140,110" stroke={colorBlue} strokeWidth="1.5" strokeOpacity="0.8" />
            <path id="curve-top-2" d="M363,210 C363,165 150,175 150,110" stroke="#475569" strokeWidth="1" strokeOpacity="0.5" />
            <path id="curve-top-3" d="M368,210 C368,160 290,165 290,110" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.8" />
            <path id="curve-top-4" d="M371,210 C371,165 300,175 300,110" stroke={colorBlue} strokeWidth="1" strokeOpacity="0.5" />
            <path id="curve-top-5" d="M377,210 C377,160 460,165 460,110" stroke={colorBlue} strokeWidth="1.5" strokeOpacity="0.8" />
            <path id="curve-top-6" d="M374,210 C374,165 445,175 445,110" stroke={colorGold} strokeWidth="1" strokeOpacity="0.5" />
            <path id="curve-top-7" d="M385,210 C385,160 610,160 610,110" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.8" />
            <path id="curve-top-8" d="M382,210 C382,165 595,175 595,110" stroke="#475569" strokeWidth="1" strokeOpacity="0.5" />

            {/* Bottom Fan-Out Curves */}
            <g strokeOpacity="0.5">
              <path id="curve-bot-1" d="M360,310 C360,370 200,370 160,480" stroke={colorBlue} strokeWidth="1.5" />
              <path id="curve-bot-2" d="M363,310 C363,380 270,390 260,480" stroke="#475569" strokeWidth="1" />
              <path id="curve-bot-3" d="M370,310 C370,400 360,420 350,480" stroke={colorGold} strokeWidth="1.5" />
              <path id="curve-bot-4" d="M375,310 C375,390 390,410 400,480" stroke={colorBlue} strokeWidth="1.5" />
              <path id="curve-bot-5" d="M382,310 C382,370 560,370 590,480" stroke={colorGold} strokeWidth="1.5" />
            </g>

            {/* Horizontal Lines */}
            <line x1="160" y1="245" x2="330" y2="245" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="160" y1="260" x2="330" y2="260" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="160" y1="275" x2="330" y2="275" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.3" />

            <line x1="420" y1="245" x2="590" y2="245" stroke={colorBlue} strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="420" y1="260" x2="590" y2="260" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="420" y1="275" x2="590" y2="275" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.3" />

            {/* Animated Particles */}
            <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
              <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#curve-top-1" /></animateMotion>
            </circle>
            <circle r="3.5" fill={colorGold} filter="url(#glow-gold)">
              <animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#curve-top-3" /></animateMotion>
            </circle>
            <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
              <animateMotion dur="3.8s" repeatCount="indefinite"><mpath href="#curve-top-5" /></animateMotion>
            </circle>
            <circle r="3.5" fill={colorGold} filter="url(#glow-gold)">
              <animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#curve-top-7" /></animateMotion>
            </circle>

            <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
              <animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#curve-bot-1" /></animateMotion>
            </circle>
            <circle r="4" fill="#FFFFFF" filter="url(#glow-gold)">
              <animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#curve-bot-3" /></animateMotion>
            </circle>
            <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
              <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#curve-bot-4" /></animateMotion>
            </circle>

            <circle r="3.5" fill={colorGold} filter="url(#glow-gold)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M160,245 L330,245" />
            </circle>
            <circle r="3.5" fill="#FFFFFF" filter="url(#glow-gold)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M330,275 L160,275" />
            </circle>

            <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M420,245 L590,245" />
            </circle>
            <circle r="3.5" fill={colorGold} filter="url(#glow-gold)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M590,260 L420,260" />
            </circle>
            <circle r="3.5" fill="#FFFFFF">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M590,275 L420,275" />
            </circle>
          </svg>
        </div>

        {/* ── TOP VENUES ROW (4 Cards) ── */}
        <div className="absolute top-[60px] left-0 right-0 z-10 flex justify-center gap-[30px] px-8">
          {[
            { id: "A", name: "VENUES A" },
            { id: "B", name: "VENUES B" },
            { id: "C", name: "VENUES C" },
            { id: "D", name: "VENUES D" }
          ].map((venue) => (
            <div key={venue.id} className="relative rounded-xl bg-[#111620]/90 px-6 py-4 text-center shadow-2xl backdrop-blur-md w-[130px] border border-[#2C384A]/60">
              <div className="text-[9px] font-sans text-[#64748B] uppercase tracking-[0.1em]">MARKET / ATS</div>
              <div className="text-[12px] font-sans font-semibold text-white tracking-wide mt-1.5">{venue.name}</div>
            </div>
          ))}
        </div>

        {/* ── MIDDLE ROW: Brokerage ↔ VYLLION ↔ Market Venues ── */}
        <div className="absolute top-[260px] left-0 right-0 z-20 flex items-center justify-between px-6 -translate-y-1/2">
          
          {/* Left Node: Brokerage */}
          <div className="relative rounded-xl bg-[#111620]/95 px-6 py-5 text-center shadow-2xl backdrop-blur-md w-[140px] shrink-0 border border-[#2C384A]/60">
            <span className="font-sans text-[13px] font-medium text-[#94A3B8]">Brokerage</span>
          </div>

          {/* Central FIX CONNECTIVITY Pill */}
          <div className="absolute left-[245px] -translate-x-1/2 z-30">
            <div className="rounded-full border border-[#334155] bg-[#0A0E14] px-4 py-1.5 font-sans text-[9px] font-bold text-[#F8FAFC] uppercase tracking-[0.15em] shadow-lg">
              FIX CONNECTIVITY
            </div>
          </div>

          {/* Central Square Hub: VYLLION */}
          <div className="rounded-[14px] border-[1.5px] border-[#C8B180]/30 bg-[#0F141E] shadow-[0_0_25px_rgba(200,177,128,0.1)] h-[100px] w-[100px] flex items-center justify-center shrink-0 z-40">
            <span className="font-sans text-[15px] font-bold tracking-[0.2em] text-white">VYLLION</span>
          </div>

          {/* Right Node: Market Venues */}
          <div className="relative rounded-xl bg-[#111620]/95 px-6 py-5 text-center shadow-2xl backdrop-blur-md w-[140px] shrink-0 border border-[#2C384A]/60">
            <span className="font-sans text-[13px] font-medium text-[#94A3B8]">Market Venues</span>
          </div>

        </div>

      </div>

    </div>
  )
}
