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

  const handleNavClick = (hash?: string) => {
    if (hash && window.location.pathname === "/") {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        navScrolled
          ? "bg-[#080C12]/95 shadow-lg shadow-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-[72px] items-stretch">
        {/* Logo Section (Left) */}
        <div className="flex items-center pl-4 sm:pl-8">
          <Link to="/" className="group flex items-center gap-3">
            <VyllionLogo className="h-8 w-8 text-[#0EA5E9] transition-transform group-hover:scale-105" />
            <div className="flex flex-col items-start">
              <span className="font-heading text-xl leading-none font-bold tracking-widest text-white">
                VYLLION
              </span>
              <span className="text-[8px] leading-tight font-medium tracking-[0.2em] text-[#0EA5E9] uppercase">
                Digital Escrow Platform
              </span>
            </div>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Trapezoid Links Container (Right) */}
        <div className="hidden items-stretch md:flex">
          <div className="relative flex h-full items-center border-l-2 border-[#0EA5E9]/50 bg-[#0B1220]/90 pr-8 pl-14 shadow-[inset_1px_0_0_0_rgba(255,255,255,0.05)] backdrop-blur-md [clip-path:polygon(32px_0,100%_0,100%_100%,0_100%)]">
            <div className="mr-8 flex items-center gap-7">
              {[
                { name: "How It Works", path: "/", hash: "how-it-works" },
                { name: "Use Cases", path: "/", hash: "use-cases" },
                { name: "Bank Custody", path: "/", hash: "security" },
                { name: "API", path: "/", hash: "api" },
                { name: "About", path: "/about", hash: undefined },
                { name: "Contact", path: "/", hash: "contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  hash={item.hash}
                  onClick={() => handleNavClick(item.hash)}
                  className="text-[12px] font-bold tracking-[0.1em] text-[#94A3B8] uppercase transition-all hover:text-[#0EA5E9]"
                  activeProps={{ className: "text-[#0EA5E9]" }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              to="/"
              hash="contact"
              onClick={() => handleNavClick("contact")}
            >
              <Button
                size="sm"
                className="rounded-full bg-[#0EA5E9] px-6 py-4 text-[11px] font-bold tracking-wide text-white uppercase shadow-md shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90"
              >
                Start an Escrow
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
            <span
              className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#2C384A]/40 bg-[#0B1220]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 px-4 py-4">
            {[
              { name: "How It Works", path: "/", hash: "how-it-works" },
              { name: "Use Cases", path: "/", hash: "use-cases" },
              { name: "Bank Custody", path: "/", hash: "security" },
              { name: "API", path: "/", hash: "api" },
              { name: "About Us", path: "/about", hash: undefined },
              { name: "Contact", path: "/", hash: "contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                hash={item.hash}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold tracking-wide text-[#94A3B8] uppercase transition-colors hover:bg-[#111620] hover:text-white"
                onClick={() => handleNavClick(item.hash)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              onClick={() => handleNavClick("contact")}
            >
              <Button
                size="sm"
                className="mt-4 w-full rounded-full bg-[#0EA5E9] py-5 font-bold tracking-widest text-white uppercase shadow-md shadow-[#0EA5E9]/20 hover:bg-[#0EA5E9]/90"
              >
                Start an Escrow
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
