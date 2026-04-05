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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
