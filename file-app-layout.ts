import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobilograflar Dashboard',
  description: 'Real-time video production tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}
