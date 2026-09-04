import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "Vyllion — Broker Back Office & OMS for Ethiopia's Capital Market" },
      { name: "description", content: "The complete Broker Back Office & Order Management System built for Ethiopian Securities Exchange (ESX) member firms. From client onboarding to settlement finality — one platform, every workflow. Built by Novek ICT Solutions." },
      { name: "keywords", content: "Vyllion, Broker Back Office, OMS, ESX, Ethiopian Securities Exchange, Novek ICT Solutions, Capital Market Ethiopia, Trading Platform, CSD Settlement, FIX 4.4" },
      { name: "author", content: "Novek ICT Solutions PLC" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#080C12" },
      { property: "og:title", content: "Vyllion — Broker Back Office & OMS for Ethiopia's Capital Market" },
      { property: "og:description", content: "Purpose-built BBO/OMS for Ethiopian Securities Exchange member brokerage firms. From client onboarding to settlement finality." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:site_name", content: "Vyllion" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Vyllion — Broker Back Office & OMS for Ethiopia's Capital Market" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@noveket" },
      { name: "twitter:creator", content: "@noveket" },
      { name: "twitter:title", content: "Vyllion — Broker Back Office & OMS" },
      { name: "twitter:description", content: "The complete Broker Back Office & Order Management System built for ESX member firms." },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.com" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://vyllion.com/#organization",
              "name": "Vyllion Technologies",
              "url": "https://vyllion.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://vyllion.com/favicon.svg"
              },
              "description": "Vyllion is an institutional financial technology provider engineered exclusively for member firms of the Ethiopian Securities Exchange (ESX).",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "sameAs": [
                "https://x.com/VyllionHQ",
                "https://linkedin.com/company/vyllion"
              ]
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://vyllion.com/#software",
              "name": "Vyllion Capital Markets Platform",
              "applicationCategory": "FinancialApplication",
              "operatingSystem": "Web, Cloud, FIX Engine",
              "offers": {
                "@type": "Offer",
                "price": "Contact Sales"
              },
              "provider": {
                "@id": "https://vyllion.com/#organization"
              },
              "description": "Sub-millisecond order routing, CSD clearing allocation, automated compliance checks, and institutional trading terminals."
            },
            {
              "@type": "WebSite",
              "@id": "https://vyllion.com/#website",
              "url": "https://vyllion.com",
              "name": "Vyllion — Institutional Capital Markets Infrastructure for Ethiopia",
              "publisher": {
                "@id": "https://vyllion.com/#organization"
              }
            }
          ]
        })
      }
    ]
  }),
  notFoundComponent: () => (
    <main className="flex min-h-svh items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald">404</h1>
        <p className="mt-4 text-muted-foreground">The requested page could not be found.</p>
      </div>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#080C12] overflow-x-hidden">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-[#080C12] text-white selection:bg-[#C8B180]/30 antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

