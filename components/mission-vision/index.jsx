'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Compass, Shield, Leaf, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Her projemizde kalite ve güvenilirliği ön planda tutuyoruz.',
  },
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu yaklaşımlarla gelecek nesillere yaşanabilir alanlar bırakıyoruz.',
  },
  {
    icon: Lightbulb,
    title: 'İnovasyon',
    description: 'Teknoloji ve yenilikçi çözümlerle sektöre öncülük ediyoruz.',
  },
]

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="mission" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a365d' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            Kurumsal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Misyon & Vizyon
          </h2>
          <p className="text-muted-foreground text-lg">
            Gayrimenkul sektöründe öncü olmak ve insanların hayallerindeki yaşam alanlarını 
            gerçeğe dönüştürmek için çalışıyoruz.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Misyonumuz
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  İnsanların yaşam kalitesini artıran, çevreye duyarlı ve estetik açıdan 
                  üstün gayrimenkul projeleri geliştirerek topluma değer katmak. Her 
                  projemizde kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutarak 
                  sektörde fark yaratmak.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Kaliteli yaşam alanları oluşturmak
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Müşteri memnuniyetini en üst düzeyde tutmak
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Çevreye duyarlı projeler geliştirmek
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Türkiye&apos;nin ve bölgenin en saygın ve güvenilir gayrimenkul yatırım 
                  ortaklığı olmak. Sürdürülebilir kalkınma ilkeleri doğrultusunda, teknoloji 
                  ve inovasyonu kullanarak geleceğin şehirlerini inşa etmek ve uluslararası 
                  arenada Türk yapı sektörünü temsil etmek.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Sektörde lider konuma gelmek
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Uluslararası pazarlarda yer almak
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Teknoloji odaklı büyümek
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Değerlerimiz
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tüm projelerimizde rehberimiz olan temel değerlerimiz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Compass className="absolute top-4 left-4 w-32 h-32 text-accent" />
            <Compass className="absolute bottom-4 right-4 w-24 h-24 text-accent rotate-45" />
          </div>
          <div className="relative z-10">
            <p className="text-primary-foreground text-xl md:text-2xl font-serif italic mb-4">
              &ldquo;Her tuğla bir hayalin parçası, her proje bir geleceğin başlangıcıdır.&rdquo;
            </p>
            <p className="text-accent font-medium">
              RAVEL YAPI GYO Yönetim Kurulu
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
