'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2, Clock, Users2, Building, Trophy, Star } from 'lucide-react'

const achievements = [
  { icon: Building, value: '150+', label: 'Tamamlanan Proje' },
  { icon: Users2, value: '500+', label: 'Uzman Kadro' },
  { icon: Trophy, value: '35+', label: 'Ödül' },
  { icon: Star, value: '98%', label: 'Müşteri Memnuniyeti' },
]

const features = [
  'ISO 9001 Kalite Yönetim Sistemi Sertifikası',
  'Çevre dostu ve sürdürülebilir yapı teknolojileri',
  'Depreme dayanıklı yalıtımlı yapı sistemleri',
  'Anahtar teslim proje yönetimi',
  'Satış sonrası teknik destek hizmeti',
  'Şeffaf ve güvenilir iş ilişkileri',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-main.jpg"
                  alt="RAVEL YAPI ofis binası"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                  <Image
                    src="/images/about-team.jpg"
                    alt="RAVEL YAPI ekibi"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-8 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-3xl font-bold">25+</p>
                    <p className="text-sm text-primary-foreground/80">Yıllık Tecrübe</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Türkiye&apos;nin Öncü
              <span className="text-accent block">Gayrimenkul Şirketi</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              1999 yılında kurulan RAVEL YAPI GYO, gayrimenkul sektöründe kalite ve 
              güvenin simgesi haline gelmiştir. İstanbul başta olmak üzere Türkiye&apos;nin 
              dört bir yanında prestijli konut ve ticari projeler geliştiriyoruz.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Müşteri memnuniyetini ön planda tutan yaklaşımımız, yenilikçi tasarımlarımız 
              ve sürdürülebilir yapı teknolojilerimizle sektörde fark yaratmaya devam ediyoruz. 
              Her projemiz, yaşam alanlarını yeniden tanımlama vizyonumuzun bir yansımasıdır.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Projelerimizi İnceleyin
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                İletişime Geçin
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all border border-border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
