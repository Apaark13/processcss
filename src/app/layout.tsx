import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.scss'
import Link from 'next/link';


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
      <body className={inter.className}>
      <div className="card nav justify-between">
      <div className="logo flex items-center">
      <img src="/assets/logo.png" alt="" className="w-20 px-2"/>
      <h1 className="text-2xl font-bold">ProcessCSS</h1>
      </div>
      <div className="flex">

        <Link href="/">
        <button className="nb-button default rounded p-1 m-1"> 
        Home
        </button>
        </Link> 
        <Link href="/projects">
        <button className="nb-button orange rounded p-1 m-1" > 
        Projects
         </button>
        </Link>
        <button className="nb-button pale-red rounded p-1 m-1"> About </button>
        <button className="nb-button green rounded p-1 m-1"> Contact </button>
      </div>
    </div>
    {children}</body>
    </html>
  )
}
