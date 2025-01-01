import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/base/navbar'
import BackgroundGradient from '@/components/base/background-gradient'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'meshUI - Modern Component Library',
  description: 'Craft beautiful interfaces with our modern, customizable, and accessible component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-gradient-to-b from-background to-background/80 min-h-screen`}>
        <Navbar />
        <NextTopLoader showSpinner={false} />
        <BackgroundGradient />
        {children}
      </body>
    </html>
  )
}