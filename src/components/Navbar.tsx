import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { VyllionLogo } from "@/components/VyllionLogo"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        navScrolled ? "bg-[#080C12]/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="flex h-[72px] items-stretch">
        {/* Logo Section (Left) */}
        <div className="flex items-center pl-4 sm:pl-8">
          <Link to="/" className="flex items-center gap-3 group">
            <VyllionLogo className="h-8 w-8 text-[#C8B180] transition-transform group-hover:scale-105" />
            <div className="flex flex-col items-start">
              <span className="font-heading text-xl font-bold tracking-widest text-white leading-none">
                VYLLION
              </span>
              <span className="text-[8px] font-medium tracking-[0.2em] text-[#94A3B8] uppercase leading-tight">
                Capital Markets Technology
              </span>
            </div>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Trapezoid Links Container (Right) */}
        <div className="hidden items-stretch md:flex">
          {/* Extremely sharp trapezoid cut */}
          <div className="relative flex h-full items-center bg-[#0B1220]/90 backdrop-blur-md border-l-2 border-[#C8B180]/80 pl-16 pr-8 shadow-[inset_1px_0_0_0_rgba(255,255,255,0.05)] [clip-path:polygon(32px_0,100%_0,100%_100%,0_100%)]">
            <div className="flex items-center gap-8 mr-8">
              {[
                { name: "Platform", path: "/platform" },
                { name: "Solutions", path: "/solutions" },
                { name: "Capabilities", path: "/capabilities" },
                { name: "Integrations", path: "/integrations" },
                { name: "Security", path: "/security" },
                { name: "Resources", path: "/resources" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-[13px] font-bold tracking-[0.1em] text-[#94A3B8] transition-all hover:text-[#C8B180] uppercase"
                  activeProps={{ className: "text-[#C8B180]" }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link to="/" hash="cta">
              <Button size="sm" className="bg-[#C8B180] text-[#080C12] hover:bg-[#C8B180]/90 font-bold rounded-none px-8 py-5 tracking-wide uppercase text-[11px] border border-[#C8B180]">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="ml-auto flex items-center pr-4 md:hidden">
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-[#0B1220]/95 backdrop-blur-xl border-t border-[#2C384A]/40 md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {[
              { name: "Platform", path: "/platform" },
              { name: "Solutions", path: "/solutions" },
              { name: "Capabilities", path: "/capabilities" },
              { name: "Integrations", path: "/integrations" },
              { name: "Security", path: "/security" },
              { name: "Resources", path: "/resources" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold tracking-wide text-[#94A3B8] transition-colors hover:bg-[#111620] hover:text-white uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/" hash="cta" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="mt-4 w-full bg-[#C8B180] text-[#080C12] hover:bg-[#C8B180]/90 font-bold rounded-none uppercase tracking-widest py-6">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
