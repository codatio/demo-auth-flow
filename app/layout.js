import { Inter } from 'next/font/google'

import { Nav } from './components/nav'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo app',
  description: 'Example of auth flow in action',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>

        {children}
      </body>
    </html>
  )
}
