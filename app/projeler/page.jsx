'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Home, Maximize2, Calendar, Search, SlidersHorizontal } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'residential', name: 'Konut' },
  { id: 'commercial', name: 'Ticari' },
  { id: 'mixed', name: 'Karma Kullanım' },
]

const statuses = [
  { id: 'all', name: 'Tüm Durumlar' },
  { id: 'on-sale', name: 'Satışta' },
  { id: 'completed', name: 'Tamamlandı' },
  { id: 'construction', name: 'İnşaat Aşamasında' },
]

const projects = [
  {
    id: 1,
    slug: 'ravel-residence',
    title: 'RAVEL Residence',
    category: 'residential',
    location: 'Levent, İstanbul',
    status: 'Satışta',
    statusId: 'on-sale',
    units: '120 Daire',
    area: '85-250 m²',
    year: '2024',
    price: '₺2.500.000',
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
    statusId: 'completed',
    units: '45 Ofis',
    area: '100-500 m²',
    year: '2023',
    price: '₺5.000.000',
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
    statusId: 'construction',
    units: '200 Daire + 30 Dükkan',
    area: '65-180 m²',
    year: '2025',
    price: '₺1.800.000',
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
    statusId: 'on-sale',
    units: '85 Daire',
    area: '120-350 m²',
    year: '2024',
    price: '₺6.500.000',
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
    statusId: 'completed',
    units: '60 Ofis',
    area: '80-400 m²',
    year: '2022',
    price: '₺4.000.000',
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
    statusId: 'on-sale',
    units: '250 Villa',
    area: '180-400 m²',
    year: '2024',
    price: '₺8.500.000',
    image: '/images/projects/project-6.jpg',
    featured: true,
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesStatus = activeStatus === 'all' || p.statusId === activeStatus
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesStatus && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div className="container mx-auto px-4 lg:px-6 h-full flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center w-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                Projelerimiz
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Konut, ticari ve karma kullanım projelerimizi keşfedin. 
                Hayalinizdeki yaşam alanını bulun.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border bg-card sticky top-[80px] z-40">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Proje veya konum ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                />
              </div>

              {/* Category Filters - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-primary/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <select
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>{status.name}</option>
                ))}
              </select>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-muted rounded-lg font-medium"
              >
                <SlidersHorizontal size={18} />
                Filtreler
              </button>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pt-4 border-t border-border"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-primary/10'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Results Count */}
            <p className="text-muted-foreground mb-8">
              {filteredProjects.length} proje bulundu
            </p>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">Aramanızla eşleşen proje bulunamadı.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all')
                    setActiveStatus('all')
                    setSearchQuery('')
                  }}
                  className="text-accent font-medium hover:underline"
                >
                  Filtreleri temizle
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link href={`/projeler/${project.slug}`}>
                      <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
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

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div>
                              <p className="text-xs text-muted-foreground">Başlangıç</p>
                              <p className="text-lg font-bold text-accent">{project.price}</p>
                            </div>
                            <div className="flex gap-4">
                              <div className="text-center">
                                <Home size={16} className="mx-auto text-muted-foreground mb-1" />
                                <p className="text-xs text-muted-foreground">{project.units}</p>
                              </div>
                              <div className="text-center">
                                <Maximize2 size={16} className="mx-auto text-muted-foreground mb-1" />
                                <p className="text-xs text-muted-foreground">{project.area}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Aradığınız projeyi bulamadınız mı?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Size özel proje önerileri için bizimle iletişime geçin. Uzman ekibimiz size en uygun seçenekleri sunacaktır.
            </p>
            <Link href="/#contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Bize Ulaşın
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
