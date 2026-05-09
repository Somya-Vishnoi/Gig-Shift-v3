import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GigShift — Dispatch Intelligence',
  description: 'India\'s gig rider dispatch platform. Connect platforms with riders instantly.',
  manifest: '/manifest.json',
  themeColor: '#059669',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'GigShift — Dispatch Intelligence',
    description: 'Hire riders instantly. Earn more per delivery.',
    url: 'https://gigshift.in',
    siteName: 'GigShift',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-[#0C0C0C] text-[#111827] dark:text-[#F9FAFB]`}>
        {children}
      </body>
    </html>
  )
}
