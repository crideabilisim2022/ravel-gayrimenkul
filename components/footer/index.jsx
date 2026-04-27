'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const footerLinks = {
  company: {
    title: 'Kurumsal',
    links: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Misyon & Vizyon', href: '#mission' },
      { name: 'Yönetim Kurulu', href: '/yonetim' },
      { name: 'Kariyer', href: '/kariyer' },
      { name: 'Basın Odası', href: '/basin' },
    ],
  },
  projects: {
    title: 'Projeler',
    links: [
      { name: 'Tüm Projeler', href: '/projeler' },
      { name: 'Konut Projeleri', href: '/projeler?kategori=konut' },
      { name: 'Ticari Projeler', href: '/projeler?kategori=ticari' },
      { name: 'Tamamlanan Projeler', href: '/projeler?durum=tamamlandi' },
      { name: 'Devam Eden Projeler', href: '/projeler?durum=devam-ediyor' },
    ],
  },
  investor: {
    title: 'Yatırımcı',
    links: [
      { name: 'Yatırımcı İlişkileri', href: '/yatirimci' },
      { name: 'Finansal Raporlar', href: '/yatirimci/raporlar' },
      { name: 'Hisse Bilgileri', href: '/yatirimci/hisse' },
      { name: 'Kurumsal Yönetim', href: '/yatirimci/kurumsal-yonetim' },
      { name: 'Genel Kurul', href: '/yatirimci/genel-kurul' },
    ],
  },
  support: {
    title: 'Destek',
    links: [
      { name: 'İletişim', href: '#contact' },
      { name: 'SSS', href: '/sss' },
      { name: 'Satış Sonrası Hizmet', href: '/destek' },
      { name: 'Şikayet & Öneri', href: '/sikayet' },
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
    ],
  },
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="text-accent-foreground"
                >
                  <path
                    d="M14 2L26 9V26H2V9L14 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <rect x="6" y="12" width="5" height="14" fill="currentColor" opacity="0.4" />
                  <rect x="17" y="12" width="5" height="14" fill="currentColor" opacity="0.4" />
                  <rect x="11" y="17" width="6" height="9" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold tracking-wide">RAVEL YAPI</h2>
                <p className="text-[10px] tracking-[0.2em] text-primary-foreground/70">GYO GAYRIMENKUL YATIRIM ORTAKLIĞI</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              25 yılı aşkın tecrübemizle Türkiye&apos;nin en prestijli gayrimenkul projelerini 
              hayata geçiriyoruz. Kalite, güven ve inovasyon bizim imzamız.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+905523833494" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone size={16} />
                +90 (552) 383 3494
              </a>
              <a href="mailto:info@ravelyapi.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail size={16} />
                info@ravelyapi.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Kavaklı, Bağlar Cad. No:18, 34520 Beylikdüzü/İstanbul</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">E-Bültenimize Abone Olun</h3>
              <p className="text-sm text-primary-foreground/70">
                Yeni projeler ve kampanyalardan haberdar olmak için bültenimize kaydolun.
              </p>
            </div>
            <div>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Abone Ol
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} RAVEL YAPI GYO. Tüm hakları saklıdır.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/gizlilik" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-accent/90 transition-colors"
        aria-label="Yukarı çık"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
