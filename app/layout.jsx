import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'RAVEL YAPI GYO | Gayrimenkul Yatırım Ortaklığı',
  description: 'RAVEL YAPI GYO Gayrimenkul Yatırım Ortaklığı - Türkiye\'nin önde gelen gayrimenkul geliştirme şirketi. Kaliteli yaşam alanları, prestijli projeler ve güvenilir yatırım fırsatları.',
  keywords: 'gayrimenkul, yatırım ortaklığı, GYO, inşaat, proje, konut, ticari gayrimenkul, RAVEL YAPI',
  authors: [{ name: 'RAVEL YAPI GYO' }],
  creator: 'RAVEL YAPI GYO',
  openGraph: {
    title: 'RAVEL YAPI GYO | Gayrimenkul Yatırım Ortaklığı',
    description: 'Türkiye\'nin önde gelen gayrimenkul geliştirme şirketi',
    type: 'website',
    locale: 'tr_TR',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a365d',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
