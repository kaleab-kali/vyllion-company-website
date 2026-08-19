import { useEffect, useState, useRef } from "react"

export function MarketConnectivityVisual({ className = "" }: { className?: string }) {
  // Exact color matches from the design mockup
  const colorGold = "#C8B180" // Muted champagne gold
  const colorBlue = "#3B82F6" // Clean vibrant blue
  const colorMutedBorder = "#2C384A" // Faint borders

  return (
    <div className={`relative w-full h-[520px] ${className}`}>
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3B82F6]/[0.05] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#C8B180]/[0.05] blur-[70px] rounded-full pointer-events-none" />

      {/* Faint Background Data Matrix (Exact Match to Mockup) */}
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
        {/* We use specific coordinates. SVG is responsive within its container */}
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

          {/* ----- PATHS ----- */}
          {/* VYLLION center is (375, 260) */}
          
          {/* Top Multi-Curve Trunk (Fans out to Venues) */}
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
          {/* Left Brokerage <-> Vyllion */}
          <line x1="160" y1="245" x2="330" y2="245" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="160" y1="260" x2="330" y2="260" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="160" y1="275" x2="330" y2="275" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.3" />

          {/* Right Vyllion <-> Venues */}
          <line x1="420" y1="245" x2="590" y2="245" stroke={colorBlue} strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="260" x2="590" y2="260" stroke={colorGold} strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="275" x2="590" y2="275" stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.3" />

          {/* ----- SVG NATIVE ANIMATION FOR PERFECT CONTINUOUS MOTION ----- */}
          {/* Top Particles */}
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

          {/* Bottom Particles */}
          <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
            <animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#curve-bot-1" /></animateMotion>
          </circle>
          <circle r="4" fill="#FFFFFF" filter="url(#glow-gold)">
            <animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#curve-bot-3" /></animateMotion>
          </circle>
          <circle r="3.5" fill={colorBlue} filter="url(#glow-blue)">
            <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#curve-bot-4" /></animateMotion>
          </circle>

          {/* Horizontal Particles (Left) */}
          <circle r="3.5" fill={colorGold} filter="url(#glow-gold)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M160,245 L330,245" />
          </circle>
          <circle r="3.5" fill="#FFFFFF" filter="url(#glow-gold)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M330,275 L160,275" />
          </circle>

          {/* Horizontal Particles (Right) */}
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

        {/* Central FIX CONNECTIVITY Pill (Positioned perfectly on the middle line) */}
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
  )
}
