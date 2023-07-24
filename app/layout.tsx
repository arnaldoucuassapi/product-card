import './globals.css'
import type { Metadata } from 'next'
import { Lato, Crimson_Pro as CrimsonPro } from 'next/font/google'

const lato = Lato({ 
  weight: ['300','400'], 
  subsets: ['latin'], 
  variable: '--font-lato' 
});

const crimson_pro = CrimsonPro({ 
  weight: ['600'], 
  subsets: ['latin'],
  variable: '--font-crimson-pro'
})

export const metadata: Metadata = {
  title: 'Card Produto',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-background ${crimson_pro.variable}`}>{children}</body>
    </html>
  )
}
