'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'Misyon & Vizyon', href: '#mission' },
  { name: 'Projelerimiz', href: '#projects' },
  { name: 'Etkinlikler', href: '#events' },
  { name: 'İletişim', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block bg-primary text-primary-foreground py-2"
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+902121234567" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+90 (212) 123 45 67</span>
            </a>
            <a href="mailto:info@ravelyapi.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>info@ravelyapi.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Levent, İstanbul</span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-card/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="text-primary-foreground"
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
                <div className="hidden sm:block">
                  <h1 className={`text-lg font-serif font-bold tracking-wide ${isScrolled ? 'text-foreground' : 'text-primary'}`}>
                    RAVEL YAPI
                  </h1>
                  <p className={`text-[10px] tracking-[0.2em] ${isScrolled ? 'text-muted-foreground' : 'text-primary/70'}`}>
                    GYO
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent'
                      : isScrolled 
                        ? 'text-foreground hover:text-accent' 
                        : 'text-primary hover:text-accent'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                Bize Ulaşın
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-primary'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="mt-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg font-medium text-sm text-center"
                >
                  Bize Ulaşın
                </motion.a>

                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-border space-y-3">
                  <a href="tel:+902121234567" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Phone size={16} />
                    <span>+90 (212) 123 45 67</span>
                  </a>
                  <a href="mailto:info@ravelyapi.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Mail size={16} />
                    <span>info@ravelyapi.com</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
