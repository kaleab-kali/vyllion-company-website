import { Link } from "@tanstack/react-router"
import { VyllionLogo } from "./VyllionLogo"

export function Footer() {
  return (
    <footer className="border-t border-[#2C384A]/40 bg-[#080C12] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <VyllionLogo className="h-8 w-8 text-[#0EA5E9]" />
              <span className="font-heading text-lg font-bold tracking-wide text-white">
                Vyllion
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#94A3B8]">
              Ethiopia&apos;s digital escrow infrastructure platform. Securing
              transactions across e-commerce, real estate, and high-value
              commerce through bank-segregated custody and programmable
              milestone releases.
            </p>
          </div>

          {/* Escrow Platform */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#E2E8F0] uppercase">
              Escrow Platform
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/"
                hash="how-it-works"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                How It Works
              </Link>
              <Link
                to="/"
                hash="use-cases"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Use Cases
              </Link>
              <Link
                to="/"
                hash="security"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Bank Custody & Security
              </Link>
              <Link
                to="/"
                hash="api"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Developer API
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#E2E8F0] uppercase">
              Company
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/about"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                About Us
              </Link>
              <Link
                to="/about"
                hash="team"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Leadership Team
              </Link>
              <Link
                to="/about"
                hash="banks"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Bank Partnerships
              </Link>
              <a
                href="mailto:contact@vyllion.com"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                contact@vyllion.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#E2E8F0] uppercase">
              Legal & Compliance
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/gdpr"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                GDPR & Data Protection
              </Link>
              <Link
                to="/terms"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-[#2C384A]/30" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] tracking-wider text-[#64748B] uppercase">
            © {new Date().getFullYear()} Vyllion Technologies PLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium tracking-widest text-[#94A3B8] uppercase">
              Addis Ababa, Ethiopia
            </span>
            <span className="ml-1 text-sm">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
