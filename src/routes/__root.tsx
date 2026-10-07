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
      { title: "Vyllion — Digital Escrow Platform for Ethiopia & Africa" },
      {
        name: "description",
        content:
          "Vyllion is Ethiopia's dedicated digital escrow platform. Protect high-value transactions with bank-segregated custody, automated milestone payouts, and complete fraud protection.",
      },
      {
        name: "keywords",
        content:
          "Vyllion, Escrow Ethiopia, Digital Escrow Africa, Secure Transactions Ethiopia, Bank Custody Escrow, Fraud Prevention Addis Ababa, Escrow API, Safe Trade Ethiopia",
      },
      { name: "author", content: "Vyllion Technologies PLC" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#080C12" },
      {
        property: "og:title",
        content: "Vyllion — Digital Escrow Platform for Ethiopia & Africa",
      },
      {
        property: "og:description",
        content:
          "Eliminate fraud and build complete transactional trust. Bank-segregated custody, AI verification, and milestone releases.",
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
        content: "Vyllion — Digital Escrow Platform for Ethiopia & Africa",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@VyllionHQ" },
      { name: "twitter:creator", content: "@VyllionHQ" },
      {
        name: "twitter:title",
        content: "Vyllion — Digital Escrow Platform for Ethiopia & Africa",
      },
      {
        name: "twitter:description",
        content:
          "Eliminate transaction fraud with bank-segregated digital escrow in Ethiopia and Africa.",
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
              name: "Vyllion Technologies PLC",
              legalName: "Vyllion Technologies PLC",
              foundingDate: "2025",
              url: "https://vyllion.com",
              logo: {
                "@type": "ImageObject",
                url: "https://vyllion.com/og-image.png",
              },
              description:
                "Vyllion Technologies builds institutional digital escrow infrastructure for Ethiopia and Africa, securing transactions through bank-segregated custody and programmable release conditions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              founders: [
                {
                  "@type": "Person",
                  name: "Kaleab Girma",
                  jobTitle: "Chief Executive Officer (CEO)",
                },
                {
                  "@type": "Person",
                  name: "Ezana Tegener",
                  jobTitle: "Chief Technology Officer (CTO)",
                },
                {
                  "@type": "Person",
                  name: "Selam Bruke",
                  jobTitle: "Chief Financial Officer (CFO)",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "contact@vyllion.com",
                  contactType: "customer support",
                  areaServed: ["ET", "Africa"],
                  availableLanguage: ["English", "Amharic"],
                },
              ],
              sameAs: [
                "https://x.com/VyllionHQ",
                "https://linkedin.com/company/vyllion",
              ],
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://vyllion.com/#escrow",
              name: "Vyllion Escrow Service",
              applicationCategory: "FinancialApplication",
              operatingSystem: "Web, API, Cloud",
              offers: {
                "@type": "Offer",
                price: "Contact",
              },
              provider: {
                "@id": "https://vyllion.com/#organization",
              },
              description:
                "Programmable escrow service for secure transactions in Ethiopia and Africa — e-commerce, real estate, B2B trade, and freelance contracts.",
            },
            {
              "@type": "WebSite",
              "@id": "https://vyllion.com/#website",
              url: "https://vyllion.com",
              name: "Vyllion — Digital Escrow Platform for Ethiopia & Africa",
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
