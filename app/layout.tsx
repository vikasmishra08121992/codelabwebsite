import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/app/globals.css'
import Header from '../components/header'
import { Footer } from '../components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeLab Technologies - Empowering Businesses with IT Solutions',
  description: 'CodeLab Technologies offers cutting-edge IT solutions to empower businesses in the digital era.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

