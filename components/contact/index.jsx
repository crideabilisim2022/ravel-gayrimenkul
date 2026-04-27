'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building2, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '+90 (212) 123 45 67',
    link: 'tel:+902121234567',
  },
  {
    icon: Mail,
    title: 'E-posta',
    content: 'info@ravelyapi.com',
    link: 'mailto:info@ravelyapi.com',
  },
  {
    icon: MapPin,
    title: 'Adres',
    content: 'Levent Mahallesi, Cevahir Plaza Kat:15, Beşiktaş/İstanbul',
    link: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    content: 'Pazartesi - Cumartesi: 09:00 - 18:00',
    link: null,
  },
]

const departments = [
  { value: 'sales', label: 'Satış Departmanı' },
  { value: 'support', label: 'Müşteri Hizmetleri' },
  { value: 'investment', label: 'Yatırımcı İlişkileri' },
  { value: 'hr', label: 'İnsan Kaynakları' },
  { value: 'press', label: 'Basın & Medya' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: '',
        email: '',
        phone: '',
        department: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(26,54,93,0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Bizimle İletişime
            <span className="text-accent block">Geçin</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Projelerimiz hakkında bilgi almak veya yatırım fırsatlarını değerlendirmek için 
            bize ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {item.link ? (
                  <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    <div className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-border group-hover:border-accent">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                          <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">{item.title}</h4>
                          <p className="text-foreground font-medium group-hover:text-accent transition-colors">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-card rounded-xl p-5 shadow-md border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">{item.title}</h4>
                        <p className="text-foreground font-medium">{item.content}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-card rounded-xl overflow-hidden shadow-md border border-border"
            >
              <div className="aspect-[4/3] bg-muted relative">
                {/* Placeholder for map - you can integrate Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Harita Görünümü</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      Google Maps&apos;te Aç
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Mesaj Gönderin</h3>
                  <p className="text-sm text-muted-foreground">En kısa sürede size dönüş yapacağız</p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Mesajınız Alındı!</h4>
                  <p className="text-muted-foreground">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        placeholder="+90 (5XX) XXX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-foreground mb-2">
                        Departman
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formState.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                      >
                        <option value="">Seçiniz</option>
                        {departments.map(dept => (
                          <option key={dept.value} value={dept.value}>{dept.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Mesaj Gönder
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
