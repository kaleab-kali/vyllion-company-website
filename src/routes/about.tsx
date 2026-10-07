import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About Vyllion — Building the Trust Layer for Ethiopia & Africa",
      },
      {
        name: "description",
        content:
          "Founded in 2025 in Addis Ababa, Vyllion builds programmable escrow infrastructure to eliminate fraud and guarantee transactions across Ethiopia and Africa. Working closely with partner banks.",
      },
      {
        name: "keywords",
        content:
          "About Vyllion, Vyllion Escrow, Kaleab Girma, Ezana Tegener, Selam Bruke, Escrow Ethiopia, Fintech Ethiopia, Bank Escrow Africa",
      },
      {
        property: "og:title",
        content:
          "About Vyllion — Building the Trust Layer for Ethiopia & Africa",
      },
      {
        property: "og:description",
        content:
          "Founded in 2025. Meet the leadership team behind Ethiopia's first programmable escrow platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com/about" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Vyllion Technologies" },
      {
        name: "twitter:description",
        content:
          "Founded in 2025 in Addis Ababa. Working closely with partner banks to secure transactions across Africa.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vyllion.com/about" }],
  }),
})

function useScrollReveal() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

const TEAM_MEMBERS = [
  {
    name: "Kaleab Girma",
    role: "Chief Executive Officer (CEO)",
    initials: "KG",
    bio: "Leads company vision, banking partnerships, and strategic execution. Focused on building regulatory-compliant trust infrastructure that unlocks commercial potential across Ethiopia and East Africa.",
    focus: "Strategy & Banking Partnerships",
    accent: "#0EA5E9",
  },
  {
    name: "Ezana Tegener",
    role: "Chief Technology Officer (CTO)",
    initials: "ET",
    bio: "Directs technical architecture, escrow smart logic, and API platform. Built bank-grade transaction isolation, automated condition verification pipelines, and cryptographic audit trails.",
    focus: "Core Architecture & Security",
    accent: "#38BDF8",
  },
  {
    name: "Selam Bruke",
    role: "Chief Financial Officer (CFO)",
    initials: "SB",
    bio: "Oversees financial governance, segregated custodial account compliance, and settlement reconciliation with commercial banking partners. Ensures every Birr in escrow is ring-fenced and auditable.",
    focus: "Financial Operations & Custody",
    accent: "#0284C7",
  },
]

const CORE_VALUES = [
  {
    title: "Neutrality First",
    desc: "We never take sides. Vyllion operates purely on predefined, verifiable transaction conditions agreed by both parties.",
    icon: "⚖️",
  },
  {
    title: "Bank-Grade Custody",
    desc: "Funds are held in segregated partner bank accounts. We never co-mingle escrow funds with company operational capital.",
    icon: "🏛️",
  },
  {
    title: "Auditability by Default",
    desc: "Every deposit, verification milestone, dispute evidence, and payout is immutably logged with cryptographic timestamps.",
    icon: "📜",
  },
  {
    title: "Locally Engineered",
    desc: "Built in Addis Ababa for Ethiopian business reality — supporting local banking sweeps, Telebirr, and legal contracts.",
    icon: "🇪🇹",
  },
]

function AboutPage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }

    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-[#080C12] pt-24">
      <AboutHeroSection />
      <StorySection />
      <BankPartnershipSection />
      <TeamSection />
      <ValuesSection />
      <AboutCtaSection />
    </div>
  )
}

function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0EA5E9]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#0EA5E9] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
              ESTABLISHED 2025 • ADDIS ABABA
            </span>
          </div>

          <h1 className="font-heading text-3xl leading-tight font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            We are building the{" "}
            <span className="text-[#0EA5E9]">trust layer</span> for African
            commerce.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Founded in 2025 in Addis Ababa, Vyllion Technologies was created to
            solve a fundamental problem that holds back Ethiopian and African
            trade: the complete absence of transactional trust between parties
            who don't know each other.
          </p>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-[#2C384A]/30 py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-center gap-12 transition-all duration-700 lg:grid-cols-2 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
              OUR ORIGIN STORY
            </span>
            <h2 className="mt-3 font-heading text-2xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
              Why we started Vyllion in 2025
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              <p>
                In Ethiopia, electronic bank transfers (EFT) and mobile money
                made moving money fast — but they solved only half the problem.
                If you send money to someone for goods, construction materials,
                real estate, or remote contracts, you have zero recourse if they
                don't deliver.
              </p>
              <p>
                There is no chargeback mechanism. Traditional court litigation
                takes years. As a result, businesses restrict themselves to
                small, cautious deals, and individuals get scammed daily on
                social media marketplaces.
              </p>
              <p>
                Our founders came together in 2025 to create a neutral digital
                escrow institution: funds are safely deposited into a
                ring-fenced account, conditions are systematically verified, and
                payment only releases when both sides honor their word.
              </p>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-[#2C384A]/50 bg-[#0F141E] p-8 shadow-2xl">
            <div className="border-b border-[#2C384A]/30 pb-4">
              <span className="font-mono text-xs tracking-wider text-[#0EA5E9] uppercase">
                FOUNDED
              </span>
              <div className="mt-1 text-2xl font-bold text-white">2025</div>
              <div className="text-xs text-[#64748B]">
                Addis Ababa, Ethiopia
              </div>
            </div>

            <div className="border-b border-[#2C384A]/30 pb-4">
              <span className="font-mono text-xs tracking-wider text-[#0EA5E9] uppercase">
                CURRENT MILESTONE
              </span>
              <div className="mt-1 text-lg font-bold text-white">
                Phase 1 Bank Pilot & Testing
              </div>
              <div className="text-xs text-[#64748B]">
                Close operational integration with licensed commercial banks
              </div>
            </div>

            <div>
              <span className="font-mono text-xs tracking-wider text-[#0EA5E9] uppercase">
                CORE MISSION
              </span>
              <div className="mt-1 text-base font-semibold text-white">
                Zero Scam Commerce
              </div>
              <div className="text-xs text-[#64748B]">
                Making remote, cross-border, and marketplace trade 100%
                fraud-proof
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BankPartnershipSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="banks"
      ref={ref}
      className="relative overflow-hidden border-t border-[#2C384A]/30 bg-[#0A0E17] py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            REGULATORY INTEGRITY & BANKING RAILS
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Working closely with partner banks
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            Escrow is only as reliable as its banking foundation. From day one
            in 2025, Vyllion has been actively collaborating with licensed
            commercial banks in Ethiopia to establish segregated custody
            protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#2C384A]/50 bg-[#0F141E] p-6">
            <div className="mb-3 text-2xl">🏦</div>
            <h3 className="text-base font-bold text-white">
              Segregated Custodial Accounts
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
              Every escrow transaction is backed by segregated bank accounts at
              partner financial institutions. Funds are never held on
              unregulated balance sheets.
            </p>
          </div>

          <div className="rounded-xl border border-[#2C384A]/50 bg-[#0F141E] p-6">
            <div className="mb-3 text-2xl">🧪</div>
            <h3 className="text-base font-bold text-white">
              Active Testing Phase
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
              We are currently running our Phase 1 operational testing program
              with banking partners, validating instant sweep reconciliations
              and multi-sign releases.
            </p>
          </div>

          <div className="rounded-xl border border-[#2C384A]/50 bg-[#0F141E] p-6">
            <div className="mb-3 text-2xl">🛡️</div>
            <h3 className="text-base font-bold text-white">
              Compliance & AML Monitoring
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
              Rigorous transaction pattern analysis, fraud detection, and
              regulatory reporting aligned with the National Bank of Ethiopia
              (NBE) standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="team"
      className="relative overflow-hidden border-t border-[#2C384A]/30 py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            LEADERSHIP
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the team building Vyllion
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            Our leadership brings together deep engineering, banking operations,
            and financial governance to redefine transactional trust in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-2xl border border-[#2C384A]/60 bg-[#0F141E] p-8 shadow-xl transition-all duration-300 hover:border-[#0EA5E9]/50 hover:bg-[#111827]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl font-heading text-lg font-bold text-white shadow-inner"
                    style={{
                      backgroundColor: `${member.accent}20`,
                      border: `1.5px solid ${member.accent}50`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs font-medium text-[#0EA5E9]">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-[13px] leading-relaxed text-[#94A3B8]">
                  {member.bio}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#2C384A]/40 pt-4 text-xs text-[#64748B]">
                <span className="font-mono text-[11px] tracking-wider uppercase">
                  Primary Focus
                </span>
                <span className="font-medium text-white">{member.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-[#2C384A]/30 bg-[#0A0E17] py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0EA5E9] uppercase">
            OPERATING PRINCIPLES
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-4xl">
            How we protect every transaction
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="rounded-xl border border-[#2C384A]/40 bg-[#0F141E] p-6"
            >
              <span className="text-2xl">{val.icon}</span>
              <h3 className="mt-4 text-base font-bold text-white">
                {val.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCtaSection() {
  return (
    <section className="relative border-t border-[#2C384A]/30 py-20">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to transact with absolute confidence?
          </h2>
          <p className="text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            Whether you run an e-commerce platform, facilitate property
            transactions, or conduct high-value B2B trade, Vyllion Escrow
            removes fraud from the equation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link to="/">
              <Button
                size="lg"
                className="h-12 rounded-full bg-[#0EA5E9] px-8 text-sm font-semibold text-white shadow-lg shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90"
              >
                Explore Escrow Service →
              </Button>
            </Link>
            <a href="mailto:contact@vyllion.com">
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[#2C384A] px-8 text-sm text-white hover:bg-[#1E293B]"
              >
                Contact Leadership
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
