import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta, siteConfig } from '@/lib/seo'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = genMeta({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        {children}
      </body>
    </html>
  )
}
