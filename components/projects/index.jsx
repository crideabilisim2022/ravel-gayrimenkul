'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Home, Maximize2, Calendar } from 'lucide-react'

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'residential', name: 'Konut' },
  { id: 'commercial', name: 'Ticari' },
  { id: 'mixed', name: 'Karma Kullanım' },
]

const projects = [
  {
    id: 1,
    slug: 'ravel-residence',
    title: 'RAVEL Residence',
    category: 'residential',
    location: 'Levent, İstanbul',
    status: 'Satışta',
    units: '120 Daire',
    area: '85-250 m²',
    year: '2024',
    image: '/images/projects/project-1.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'ravel-plaza',
    title: 'RAVEL Plaza',
    category: 'commercial',
    location: 'Maslak, İstanbul',
    status: 'Tamamlandı',
    units: '45 Ofis',
    area: '100-500 m²',
    year: '2023',
    image: '/images/projects/project-2.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'ravel-park',
    title: 'RAVEL Park',
    category: 'mixed',
    location: 'Kadıköy, İstanbul',
    status: 'İnşaat Aşamasında',
    units: '200 Daire + 30 Dükkan',
    area: '65-180 m²',
    year: '2025',
    image: '/images/projects/project-3.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'ravel-tower',
    title: 'RAVEL Tower',
    category: 'residential',
    location: 'Beşiktaş, İstanbul',
    status: 'Satışta',
    units: '85 Daire',
    area: '120-350 m²',
    year: '2024',
    image: '/images/projects/project-4.jpg',
    featured: true,
  },
  {
    id: 5,
    slug: 'ravel-business-center',
    title: 'RAVEL Business Center',
    category: 'commercial',
    location: 'Ataşehir, İstanbul',
    status: 'Tamamlandı',
    units: '60 Ofis',
    area: '80-400 m²',
    year: '2022',
    image: '/images/projects/project-5.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'ravel-garden',
    title: 'RAVEL Garden',
    category: 'residential',
    location: 'Bahçeşehir, İstanbul',
    status: 'Satışta',
    units: '250 Villa',
    area: '180-400 m²',
    year: '2024',
    image: '/images/projects/project-6.jpg',
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(26,54,93,0.1) 1px, transparent 1px), linear-gradient(rgba(26,54,93,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Projelerimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Hayallerinizi Gerçeğe
            <span className="text-accent block">Dönüştürüyoruz</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Konut, ticari ve karma kullanım projelerimizle yaşam alanlarını yeniden tanımlıyoruz.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/projeler/${project.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Satışta' 
                          ? 'bg-green-500 text-white' 
                          : project.status === 'Tamamlandı'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-accent text-accent-foreground'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          Öne Çıkan
                        </span>
                      </div>
                    )}

                    {/* Hover Content */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 text-primary-foreground text-sm font-medium">
                        Detayları Gör
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <Home size={16} className="mx-auto text-accent mb-1" />
                        <p className="text-xs text-muted-foreground">{project.units}</p>
                      </div>
                      <div className="text-center">
                        <Maximize2 size={16} className="mx-auto text-accent mb-1" />
                        <p className="text-xs text-muted-foreground">{project.area}</p>
                      </div>
                      <div className="text-center">
                        <Calendar size={16} className="mx-auto text-accent mb-1" />
                        <p className="text-xs text-muted-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/projeler">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
