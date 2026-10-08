import { Link } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { VyllionLogo } from "@/components/VyllionLogo"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 15)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "Platform", path: "/platform" },
    { name: "Security", path: "/security" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/about" },
  ]

  return (
    <nav
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        navScrolled
          ? "border-b border-surface-3/80 bg-surface-0/95 shadow-xl shadow-black/50 backdrop-blur-md"
          : "border-b border-surface-3/30 bg-surface-0/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-3 bg-surface-1 transition-all group-hover:border-gold/50">
            <VyllionLogo className="h-5 w-5 text-gold transition-transform group-hover:scale-105" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-widest text-white">
              VYLLION
            </span>
            <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Digital Escrow
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className="font-sans text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:text-white"
                activeProps={{ className: "text-gold font-semibold" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={handleNavClick}
          >
            <Button
              size="sm"
              className="h-9 rounded-lg bg-gold px-5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm transition-all hover:bg-gold-hover hover:shadow-gold/10"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-surface-3 bg-surface-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-surface-3 bg-surface-1/98 px-4 py-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-lg px-3 py-2.5 font-sans text-xs font-medium tracking-wider text-muted-foreground uppercase transition-colors hover:bg-surface-2 hover:text-white"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="mt-3"
            >
              <Button
                size="sm"
                className="w-full rounded-lg bg-gold py-5 font-sans text-xs font-semibold tracking-wider text-surface-0 uppercase shadow-sm hover:bg-gold-hover"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

