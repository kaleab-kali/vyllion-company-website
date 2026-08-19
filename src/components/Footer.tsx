import { Link } from "@tanstack/react-router"
import { VyllionLogo } from "./VyllionLogo"

export function Footer() {
  return (
    <footer className="border-t border-[#2C384A]/40 bg-[#080C12] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <VyllionLogo className="h-8 w-8 text-[#C8B180]" />
              <span className="font-heading text-lg font-bold text-white tracking-wide">Vyllion</span>
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-[#94A3B8]">
              The complete Broker Back Office & Order Management System for Ethiopia's capital market.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-[#E2E8F0] uppercase">Legal & Compliance</h4>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/gdpr" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">GDPR & Data Protection</Link>
              <Link to="/terms" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">Terms of Service</Link>
              <Link to="/privacy" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">Privacy Policy</Link>
              <Link to="/cookies" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">Cookie Policy</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-[#E2E8F0] uppercase">Resources</h4>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://novek.et" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">Novek ICT Solutions</a>
              <a href="mailto:info@novek.et" className="text-[13px] text-[#64748B] transition-colors hover:text-[#C8B180]">Contact Sales</a>
              <span className="text-[13px] text-[#64748B] cursor-not-allowed">System Status</span>
            </div>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-[#E2E8F0] uppercase">Headquarters</h4>
            <div className="mt-6 flex flex-col gap-2 text-[13px] leading-relaxed text-[#64748B]">
              <p>Addis Ababa, Ethiopia</p>
              <p>Built for the Ethiopian Securities Exchange (ESX).</p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-[#2C384A]/30" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] text-[#64748B] uppercase tracking-wider">
            © {new Date().getFullYear()} Novek ICT Solutions PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-[#94A3B8] tracking-widest uppercase">Powered by</span>
            <a href="https://novek.et" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-[#C8B180] tracking-widest uppercase hover:text-white transition-colors">
              Novek ICT Solutions
            </a>
            <span className="ml-2 text-sm">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
