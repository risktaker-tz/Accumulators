import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/custom/providers'
import { I18nProvider } from '@/lib/i18n/provider'
import { ViewportScaler } from '@/components/custom/ViewportScaler'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Accumulators Trading Platform',
  description: 'Trade accumulators with real-time charts and positions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <I18nProvider>
            <ViewportScaler>
              {children}
            </ViewportScaler>
          </I18nProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}