import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vyllion',
  description: 'Vyllion - The Future of Technology',
  generator: 'Vyllion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
