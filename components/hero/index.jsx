'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, Building2, Award, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Building2, value: '150+', label: 'Tamamlanan Proje' },
  { icon: Users, value: '10.000+', label: 'Mutlu Aile' },
  { icon: Award, value: '25+', label: 'Yıllık Deneyim' },
  { icon: TrendingUp, value: '₺5B+', label: 'Yatırım Değeri' },
]

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 z-10" />
        {/* Image placeholder - replace src with your image */}
        <div className="absolute inset-0 bg-primary">
          <Image
            src="/images/hero-bg.jpg"
            alt="RAVEL YAPI modern mimari projesi"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-10 w-96 h-96 border border-accent/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-accent/20 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-20 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6 border border-accent/30">
                Gayrimenkul Yatırım Ortaklığı
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
            >
              Geleceğin
              <span className="block text-accent">Yaşam Alanlarını</span>
              İnşa Ediyoruz
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              RAVEL YAPI GYO olarak, 25 yılı aşkın deneyimimizle Türkiye&apos;nin en prestijli 
              gayrimenkul projelerini hayata geçiriyoruz. Kalite, güven ve inovasyon bizim imzamız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium text-base hover:bg-accent/90 transition-colors"
              >
                Projelerimizi Keşfedin
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-lg font-medium text-base hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                <Play size={20} className="fill-current" />
                Tanıtım Filmi
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Featured Project Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  {/* Image placeholder */}
                  <Image
                    src="/images/featured-project.jpg"
                    alt="Öne çıkan proje"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      Yeni Proje
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
                  RAVEL Residence
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  İstanbul&apos;un kalbinde, lüks yaşamın yeni adresi. Modern mimari ve 
                  üstün yaşam standartları.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-accent text-sm">Başlangıç Fiyatı</p>
                    <p className="text-primary-foreground font-bold">₺2.500.000</p>
                  </div>
                  <motion.a
                    href="/projeler/ravel-residence"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg"
                  >
                    Detaylar
                  </motion.a>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold">A+ Kalite</p>
                    <p className="text-muted-foreground text-sm">Sertifikalı Yapı</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/60 hover:text-accent transition-colors"
        aria-label="Aşağı kaydır"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
