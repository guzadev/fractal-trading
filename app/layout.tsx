import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fractal Trading',
  description: 'Created with v0.dev',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
