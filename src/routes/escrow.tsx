import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/escrow")({
  beforeLoad: () => {
    throw redirect({ to: "/" })
  },
})
