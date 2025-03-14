import type { Metadata } from 'next'
import { Azeret_Mono as GeistMono } from 'next/font/google'
import './globals.css'

const geistMono = GeistMono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gurram Siddarth Reddy',
  description: 'AI Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="__next" className={geistMono.className}>{children}</body>
    </html>
  )
}