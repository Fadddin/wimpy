import type { Metadata } from 'next'
import { Patrick_Hand, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { ReducedMotionProvider } from '@/components/reduced-motion-provider'
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${patrickHand.variable} ${caveat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReducedMotionProvider>
            <ThemeToggle />
            {children}
          </ReducedMotionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
