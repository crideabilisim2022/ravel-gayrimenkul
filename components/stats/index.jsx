'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Building2, Users, MapPin, Award } from 'lucide-react'

const stats = [
  {
    icon: Building2,
    value: 150,
    suffix: '+',
    label: 'Tamamlanan Proje',
    description: 'Konut ve ticari proje',
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Mutlu Aile',
    description: 'Güvenle yaşayan',
  },
  {
    icon: MapPin,
    value: 15,
    suffix: '',
    label: 'Şehir',
    description: 'Türkiye genelinde',
  },
  {
    icon: Award,
    value: 35,
    suffix: '+',
    label: 'Ödül',
    description: 'Ulusal ve uluslararası',
  },
]

function Counter({ value, suffix }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return Math.round(latest / 1000) + '.000' + suffix
    }
    return Math.round(latest) + suffix
  })
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView, value, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-lg font-medium text-primary-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
