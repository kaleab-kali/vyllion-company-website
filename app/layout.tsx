import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vyllion - Luxury Technology Solutions',
  description: 'Vyllion delivers premium technology solutions including luxury websites, AI-based ERP systems, custom software, and business automation for elite brands worldwide.',
  generator: 'Vyllion',
  keywords: ['luxury technology', 'AI solutions', 'custom software', 'business automation', 'ERP systems', 'premium websites', 'digital excellence'],
  authors: [{ name: 'Vyllion' }],
  creator: 'Vyllion',
  publisher: 'Vyllion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vyllion.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyllion - Luxury Technology Solutions',
    description: 'Premium technology solutions for elite brands. Specializing in luxury websites, AI-based ERP systems, custom software, and business automation.',
    creator: '@vyllion',
    site: '@vyllion',
    images: ['/vyllion-logo.jpg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vyllion.com',
    title: 'Vyllion - Luxury Technology Solutions',
    description: 'Premium technology solutions for elite brands. Specializing in luxury websites, AI-based ERP systems, custom software, and business automation.',
    siteName: 'Vyllion',
    images: [
      {
        url: '/vyllion-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vyllion - Luxury Technology Solutions',
      },
    ],
  },
  icons: {
    icon: '/vyllion-logo.jpg',
    shortcut: '/vyllion-logo.jpg',
    apple: '/vyllion-logo.jpg',
  },
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
