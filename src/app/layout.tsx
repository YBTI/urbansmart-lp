import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UrbanSmart | On & Off',
  description: 'Seamlessly connected. On & Off.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans text-text-primary bg-background antialiased overflow-x-hidden selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  )
}
