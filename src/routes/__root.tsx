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
      { name: "description", content: "The complete Broker Back Office & Order Management System built for ESX member firms. From client onboarding to settlement finality — one platform, every workflow. Built by Novek ICT Solutions." },
      { name: "keywords", content: "Vyllion, Broker Back Office, OMS, ESX, Ethiopian Securities Exchange, Novek ICT Solutions, Capital Market Ethiopia, Trading Platform" },
      { name: "author", content: "Novek ICT Solutions PLC" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#080C12" },
      { property: "og:title", content: "Vyllion — Broker Back Office & OMS" },
      { property: "og:description", content: "Purpose-built BBO/OMS for Ethiopian Securities Exchange member brokerage firms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vyllion.novek.et" },
      { property: "og:site_name", content: "Vyllion" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vyllion — Broker Back Office & OMS" },
      { name: "twitter:description", content: "The complete Broker Back Office & Order Management System built for ESX member firms." },
    ],
    links: [
      { rel: "canonical", href: "https://vyllion.novek.et" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
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
    <html lang="en" className="bg-[#080C12]">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-[#080C12] text-white selection:bg-[#C8B180]/30 antialiased">
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

