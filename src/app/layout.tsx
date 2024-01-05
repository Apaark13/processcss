import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProcessCSS',
  description: 'CSS snipetts, scss-tailwind-js hands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/neobrutalismcss@latest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
