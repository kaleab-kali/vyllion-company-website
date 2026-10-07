import { useEffect, useRef, useState } from "react"

export function EscrowFlowVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      num: "01",
      title: "Agreement",
      desc: "Both parties agree on deal terms, price, and release conditions.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 16h12M10 12h12M10 20h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Deposit",
      desc: "Buyer deposits funds into Vyllion's secure escrow account. Money is locked.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
          <rect
            x="4"
            y="10"
            width="24"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M4 15h24" stroke="currentColor" strokeWidth="1.5" />
          <circle
            cx="16"
            cy="22"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 10V8a6 6 0 0 1 12 0v2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Fulfillment",
      desc: "Seller delivers goods, transfers property, or completes the agreed work.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
          <path
            d="M6 18l4-8h12l4 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect
            x="6"
            y="18"
            width="20"
            height="8"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="11" cy="22" r="1.5" fill="currentColor" />
          <circle cx="21" cy="22" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Verification",
      desc: "Vyllion confirms the conditions have been met before any funds move.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
          <circle
            cx="16"
            cy="16"
            r="11"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M11 16l3 3 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Release",
      desc: "Funds released to seller. If conditions fail, buyer gets a full refund.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
          <path
            d="M16 4v20M10 18l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 28h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <div ref={ref} className="relative">
      {/* Connection line (desktop) */}
      <div className="absolute top-[52px] right-[10%] left-[10%] hidden h-[2px] lg:block">
        <div
          className="h-full bg-gradient-to-r from-[#0EA5E9]/0 via-[#0EA5E9]/40 to-[#0EA5E9]/0 transition-all duration-1500"
          style={{
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 1.2s ease-out 0.3s",
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="relative flex flex-col items-center text-center transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 150 + 200}ms`,
            }}
          >
            {/* Step circle */}
            <div className="relative mb-4">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] transition-all hover:scale-105 hover:border-[#0EA5E9]/60 hover:bg-[#0EA5E9]/20">
                {step.icon}
              </div>
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0EA5E9] text-[10px] font-bold text-white">
                {step.num}
              </span>
            </div>

            <h3 className="mb-2 text-sm font-bold tracking-wide text-white uppercase">
              {step.title}
            </h3>
            <p className="max-w-[200px] text-[13px] leading-relaxed text-[#94A3B8]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
