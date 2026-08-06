import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Intellispark Technologies',
  description: 'Helping global companies build thoughtful, high-performing teams in Kochi, India.',
  openGraph: {
    title: 'Intellispark Technologies',
    description: 'Helping global companies build thoughtful, high-performing teams in Kochi, India.',
    siteName: 'Intellispark Technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-white text-gray-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
