import { Link } from "@tanstack/react-router"
import { VyllionLogo } from "./VyllionLogo"

export function Footer() {
  return (
    <footer className="border-t border-surface-3 bg-surface-0 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-3 bg-surface-1">
                <VyllionLogo className="h-4.5 w-4.5 text-gold" />
              </div>
              <span className="font-heading text-lg font-bold tracking-wide text-white">
                Vyllion
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Ethiopia&apos;s digital escrow platform. Securing high-value
              commercial trade, real estate deposits, vehicles, and marketplace
              transactions through segregated commercial bank custody.
            </p>
          </div>

          {/* Escrow Platform */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-white uppercase">
              Escrow Platform
            </h4>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                to="/platform"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Platform Architecture
              </Link>
              <Link
                to="/solutions"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Ethiopian Solutions
              </Link>
              <Link
                to="/capabilities"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Capabilities Matrix
              </Link>
              <Link
                to="/security"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Security & Bank Custody
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-white uppercase">
              Company
            </h4>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                to="/about"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/resources"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Resources & Legal Guides
              </Link>
              <Link
                to="/contact"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Contact & Early Access
              </Link>
              <a
                href="mailto:contact@vyllion.com"
                className="text-xs text-muted-foreground transition-colors hover:text-gold"
              >
                contact@vyllion.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-white uppercase">
              Legal
            </h4>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                to="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
              <Link
                to="/gdpr"
                className="text-xs text-muted-foreground transition-colors hover:text-white"
              >
                Data Protection
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-surface-3/50" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            © {new Date().getFullYear()} Vyllion Technologies PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              Addis Ababa, Ethiopia
            </span>
            <span className="text-xs">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

