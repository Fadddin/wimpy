import type { Metadata } from 'next'
import { Patrick_Hand, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const patrickHand = Patrick_Hand({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-hand'
});

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  title: "Fardin's Dev Diary",
  description: 'A very serious journey of a not-so-serious developer',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${patrickHand.variable} ${caveat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
