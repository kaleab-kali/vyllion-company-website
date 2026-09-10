import { createStart, createMiddleware } from "@tanstack/react-start"

const seoRedirectMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url)

  // 1. Force HTTPS
  if (url.protocol === "http:") {
    url.protocol = "https:"
    return Response.redirect(url.toString(), 301)
  }

  // 2. Normalize www to apex domain
  if (url.hostname === "www.vyllion.com") {
    url.hostname = "vyllion.com"
    return Response.redirect(url.toString(), 301)
  }

  // 3. Clean trailing slashes to eliminate duplicate URLs (except root)
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1)
    return Response.redirect(url.toString(), 301)
  }

  return await next()
})

export const startInstance = createStart(() => ({
  requestMiddleware: [seoRedirectMiddleware],
}))
