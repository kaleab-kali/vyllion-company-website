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
              <VyllionLogo className="h-8 w-8 text-[#C8B180]" />
              <span className="font-heading text-lg font-bold tracking-wide text-white">
                Vyllion
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#94A3B8]">
              Two institutional products powering trust in Ethiopia and Africa:
              Broker Back Office (BBO) for capital markets and Escrow Service
              for secure transactions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#E2E8F0] uppercase">
              Products
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/platform"
                className="flex items-center gap-1.5 text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8B180]" />
                Broker Back Office
              </Link>
              <Link
                to="/escrow"
                className="flex items-center gap-1.5 text-[13px] text-[#64748B] transition-colors hover:text-[#0EA5E9]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                Escrow Service
              </Link>
              <Link
                to="/solutions"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Solutions
              </Link>
              <Link
                to="/capabilities"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Capabilities
              </Link>
              <Link
                to="/integrations"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Integrations
              </Link>
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
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                GDPR & Data Protection
              </Link>
              <Link
                to="/terms"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#E2E8F0] uppercase">
              Resources
            </h4>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://novek.et"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Novek ICT Solutions
              </a>
              <a
                href="mailto:info@novek.et"
                className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]"
              >
                Contact Sales
              </a>
              <span className="cursor-not-allowed text-[13px] text-[#64748B]">
                System Status
              </span>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-[#2C384A]/30" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] tracking-wider text-[#64748B] uppercase">
            © {new Date().getFullYear()} Novek ICT Solutions PLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium tracking-widest text-[#94A3B8] uppercase">
              Powered by
            </span>
            <a
              href="https://novek.et"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold tracking-widest text-[#C8B180] uppercase transition-colors hover:text-white"
            >
              Novek ICT Solutions
            </a>
            <span className="ml-2 text-sm">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
