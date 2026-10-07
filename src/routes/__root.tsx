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
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5",
      },
      { title: "Vyllion — Broker Back Office & Escrow Service for Ethiopia" },
      {
        name: "description",
        content:
          "Two institutional products powering trust in Ethiopia: Broker Back Office & OMS for ESX member firms, and Escrow Service for secure transactions across capital markets, e-commerce, real estate, and B2B trade.",
      },
      {
        name: "keywords",
        content:
          "Vyllion, Broker Back Office, OMS, Escrow Ethiopia, Escrow Africa, ESX, Ethiopian Securities Exchange, Capital Market Ethiopia, Secure Transactions, Fraud Prevention, CSD Settlement, FIX 4.4",
      },
      { name: "author", content: "Novek ICT Solutions PLC" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#080C12" },
      {
        property: "og:title",
        content: "Vyllion — Broker Back Office & Escrow Service for Ethiopia",
      },
      {
        property: "og:description",
        content:
          "Two products: Broker Back Office for ESX member brokers + Escrow Service for secure transactions. One platform, complete trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.com" },
      { property: "og:site_name", content: "Vyllion" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://vyllion.com/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Vyllion — Broker Back Office & Escrow Service for Ethiopia",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@noveket" },
      { name: "twitter:creator", content: "@noveket" },
      {
        name: "twitter:title",
        content: "Vyllion — Broker Back Office & Escrow Service",
      },
      {
        name: "twitter:description",
        content:
          "Two products: Broker Back Office for ESX member firms + Escrow Service for secure transactions in Ethiopia and Africa.",
      },
      { name: "twitter:image", content: "https://vyllion.com/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
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
              name: "Vyllion Technologies",
              url: "https://vyllion.com",
              logo: {
                "@type": "ImageObject",
                url: "https://vyllion.com/og-image.png",
              },
              description:
                "Vyllion provides institutional financial technology for Ethiopia: Broker Back Office for ESX brokers and Escrow Service for secure transactions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              sameAs: [
                "https://x.com/VyllionHQ",
                "https://linkedin.com/company/vyllion",
              ],
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://vyllion.com/#software",
              name: "Vyllion Broker Back Office (BBO)",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web, Cloud, FIX Engine",
              offers: {
                "@type": "Offer",
                price: "Contact Sales",
              },
              provider: {
                "@id": "https://vyllion.com/#organization",
              },
              description:
                "Sub-millisecond order routing, CSD clearing allocation, automated compliance checks, and institutional trading terminals for ESX member firms.",
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://vyllion.com/#escrow",
              name: "Vyllion Escrow Service",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web, API, Cloud",
              offers: {
                "@type": "Offer",
                price: "Contact Sales",
              },
              provider: {
                "@id": "https://vyllion.com/#organization",
              },
              description:
                "Programmable escrow service for secure transactions in Ethiopia and Africa — IPO subscriptions, real estate, e-commerce, B2B trade, and freelance contracts.",
            },
            {
              "@type": "WebSite",
              "@id": "https://vyllion.com/#website",
              url: "https://vyllion.com",
              name: "Vyllion — Broker Back Office & Escrow Service for Ethiopia",
              publisher: {
                "@id": "https://vyllion.com/#organization",
              },
            },
          ],
        }),
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="flex min-h-svh items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald">404</h1>
        <p className="mt-4 text-muted-foreground">
          The requested page could not be found.
        </p>
      </div>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden bg-[#080C12]">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[#080C12] text-white antialiased selection:bg-[#C8B180]/30">
        <Navbar />
        <main className="flex-1">{children}</main>
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
