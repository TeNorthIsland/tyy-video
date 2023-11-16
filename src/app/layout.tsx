import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TYY-Video',
  description: '全网海量资源免费看,就来TYY-Video',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="main" className={inter.className}>
        {children}
      </body>
    </html>
  )
}
