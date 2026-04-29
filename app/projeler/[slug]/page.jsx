'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  ArrowLeft, 
  MapPin, 
  Home, 
  Maximize2, 
  Calendar, 
  Building2,
  Car,
  Trees,
  Shield,
  Wifi,
  Dumbbell,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  Mail,
  Download
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

// Project data - in a real app, this would come from an API or database
const projectsData = {
  'ravel-residence': {
    id: 1,
    title: 'RAVEL Residence',
    category: 'Konut',
    location: 'Levent, İstanbul',
    status: 'Satışta',
    units: '120 Daire',
    area: '85-250 m²',
    year: '2024',
   
    description: 'İstanbul\'un en prestijli lokasyonlarından Levent\'te yükselen RAVEL Residence, modern mimari anlayışı ve üstün yaşam standartlarıyla fark yaratıyor. 120 daireden oluşan proje, 1+1\'den 4+1\'e kadar farklı daire seçenekleri sunuyor.',
    longDescription: 'RAVEL Residence, şehrin kalbinde doğayla iç içe bir yaşam sunuyor. Proje, A+ enerji sınıfı belgesi, depreme dayanıklı yapı teknolojisi ve akıllı ev sistemleriyle donatılmış. Sosyal tesisleri arasında açık ve kapalı yüzme havuzu, fitness merkezi, spa, çocuk oyun alanları ve yeşil yaşam alanları bulunuyor.',
    features: [
      { icon: Car, text: '2 Katlı Otopark' },
      { icon: Trees, text: '5.000 m² Yeşil Alan' },
      { icon: Shield, text: '7/24 Güvenlik' },
      { icon: Wifi, text: 'Akıllı Ev Sistemi' },
      { icon: Dumbbell, text: 'Fitness Merkezi' },
      { icon: Building2, text: 'A+ Enerji Sınıfı' },
    ],
    floorPlans: [
      { type: '1+1', area: '85 m²', },
      { type: '2+1', area: '120 m²',  },
      { type: '3+1', area: '180 m²',  },
      { type: '4+1', area: '250 m²',  },
    ],
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/1.png',
  },
  'ravel-plaza': {
    id: 2,
    title: 'RAVEL Plaza',
    category: 'Ticari',
    location: 'Maslak, İstanbul',
    status: 'Tamamlandı',
    units: '45 Ofis',
    area: '100-500 m²',
    year: '2023',
    
    description: 'Maslak\'ın yükselen iş merkezi RAVEL Plaza, modern ofis alanları ve premium hizmetleriyle işletmelere üstün bir çalışma ortamı sunuyor.',
    longDescription: 'RAVEL Plaza, Türkiye\'nin finans ve iş merkezi Maslak\'ta konumlanmış A sınıfı ofis projesidir. Sürdürülebilir tasarımı, LEED Gold sertifikası ve akıllı bina teknolojileriyle öne çıkan proje, işletmelere prestijli bir adres sunuyor.',
    features: [
      { icon: Car, text: '3 Katlı Otopark' },
      { icon: Shield, text: '7/24 Güvenlik' },
      { icon: Wifi, text: 'Fiber Altyapı' },
      { icon: Building2, text: 'LEED Gold' },
    ],
    floorPlans: [
      { type: 'Küçük Ofis', area: '100 m²',},
      { type: 'Orta Ofis', area: '250 m²',  },
      { type: 'Büyük Ofis', area: '500 m²', },
    ],
     gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/2.png',
  },
  'ravel-park': {
    id: 3,
    title: 'RAVEL Park',
    category: 'Karma Kullanım',
    location: 'Kadıköy, İstanbul',
    status: 'İnşaat Aşamasında',
    units: '200 Daire + 30 Dükkan',
    area: '65-180 m²',
    year: '2025',
   
    description: 'Kadıköy\'ün kalbinde yükselen RAVEL Park, karma kullanım konseptiyle yaşam ve ticaretin kesişim noktasında yer alıyor.',
    longDescription: 'RAVEL Park, 200 konut ve 30 ticari üniteden oluşan karma kullanımlı projedir. Proje, bölgenin dönüşümüne öncülük ederek modern bir yaşam alanı sunmaktadır.',
    features: [
      { icon: Car, text: '2 Katlı Otopark' },
      { icon: Trees, text: '3.000 m² Yeşil Alan' },
      { icon: Shield, text: '7/24 Güvenlik' },
      { icon: Building2, text: 'A Enerji Sınıfı' },
    ],
    floorPlans: [
      { type: '1+1', area: '65 m²', },
      { type: '2+1', area: '100 m²',  },
      { type: '3+1', area: '140 m²',  },
      { type: '4+1', area: '180 m²',  },
    ],
     gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/3.png',
  },
  'ravel-tower': {
    id: 4,
    title: 'RAVEL Tower',
    category: 'Konut',
    location: 'Beşiktaş, İstanbul',
    status: 'Satışta',
    units: '85 Daire',
    area: '120-350 m²',
    year: '2024',
   
    description: 'Boğaz manzaralı lüks yaşamın adresi RAVEL Tower, Beşiktaş\'ın en prestijli noktasında yükseliyor.',
    longDescription: 'RAVEL Tower, 35 katlık yapısıyla Boğaz manzarasını ayaklarınızın altına seriyor. Her dairede panoramik manzara, özel asansör ve concierge hizmeti sunuluyor.',
    features: [
      { icon: Car, text: '3 Katlı Otopark' },
      { icon: Shield, text: 'Concierge Hizmeti' },
      { icon: Wifi, text: 'Akıllı Ev' },
      { icon: Dumbbell, text: 'Spa & Fitness' },
    ],
    floorPlans: [
      { type: '2+1', area: '120 m²',  },
      { type: '3+1', area: '200 m²',  },
      { type: '4+1', area: '280 m²',  },
      { type: 'Penthouse', area: '350 m²',  },
    ],
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/1.png',
  },
  'ravel-business-center': {
    id: 5,
    title: 'RAVEL Business Center',
    category: 'Ticari',
    location: 'Ataşehir, İstanbul',
    status: 'Tamamlandı',
    units: '60 Ofis',
    area: '80-400 m²',
    year: '2022',
   
    description: 'Ataşehir Finans Merkezi\'nde konumlanan RAVEL Business Center, işletmelere A sınıfı ofis deneyimi sunuyor.',
    longDescription: 'RAVEL Business Center, İstanbul\'un yeni finans merkezi Ataşehir\'de yer alan prestijli ofis projesidir. Metro bağlantısı ve merkezi konumuyla dikkat çeken proje, BREEAM sertifikalıdır.',
    features: [
      { icon: Car, text: '4 Katlı Otopark' },
      { icon: Shield, text: '7/24 Güvenlik' },
      { icon: Wifi, text: 'Fiber Altyapı' },
      { icon: Building2, text: 'BREEAM Sertifikalı' },
    ],
    floorPlans: [
      { type: 'Küçük Ofis', area: '80 m²', },
      { type: 'Orta Ofis', area: '200 m²', },
      { type: 'Büyük Ofis', area: '400 m²', },
    ],
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/2.png',
  },
  'ravel-garden': {
    id: 6,
    title: 'RAVEL Garden',
    category: 'Konut',
    location: 'Bahçeşehir, İstanbul',
    status: 'Satışta',
    units: '250 Villa',
    area: '180-400 m²',
    year: '2024',
 
    description: 'Bahçeşehir\'de doğayla iç içe villa yaşamı sunan RAVEL Garden, ailelere geniş ve ferah yaşam alanları sunuyor.',
    longDescription: 'RAVEL Garden, 250 villadan oluşan site konseptiyle Bahçeşehir\'de benzersiz bir yaşam alanı yaratıyor. Her villa özel bahçe, otopark ve akıllı ev sistemiyle donatılmıştır.',
    features: [
      { icon: Trees, text: 'Özel Bahçe' },
      { icon: Car, text: '2 Araçlık Garaj' },
      { icon: Shield, text: '7/24 Güvenlik' },
      { icon: Wifi, text: 'Akıllı Ev' },
      { icon: Dumbbell, text: 'Spor Tesisleri' },
    ],
    floorPlans: [
      { type: '3+1 Villa', area: '180 m²', },
      { type: '4+1 Villa', area: '250 m²', },
      { type: '5+1 Villa', area: '320 m²', },
      { type: '6+1 Villa', area: '400 m²', },
    ],
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ],
    heroImage: '/img/projects/3.png',
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug
  const project = projectsData[slug]
  const [activeImage, setActiveImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Proje Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">Aradığınız proje mevcut değil.</p>
          <Link href="/projeler" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
            Tüm Projelere Dön
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          
          {/* Back Button */}
          <Link 
            href="/projeler"
            className="absolute top-24 left-6 z-10 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Tüm Projeler</span>
          </Link>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                  project.status === 'Satışta' 
                    ? 'bg-green-500 text-white' 
                    : project.status === 'Tamamlandı'
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-accent text-accent-foreground'
                }`}>
                  {project.status}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={18} />
                    <span>{project.units}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 size={18} />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-border">
                  {['overview', 'gallery', 'plans'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 font-medium transition-colors relative ${
                        activeTab === tab 
                          ? 'text-accent' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab === 'overview' && 'Genel Bakış'}
                      {tab === 'gallery' && 'Galeri'}
                      {tab === 'plans' && 'Kat Planları'}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Proje Hakkında</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4">Özellikler</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={feature.text}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                        >
                          <feature.icon className="w-6 h-6 text-accent" />
                          <span className="text-foreground font-medium">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'gallery' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Main Gallery Image */}
                    <div 
                      className="relative aspect-video rounded-xl overflow-hidden mb-4 cursor-pointer"
                      onClick={() => setIsGalleryOpen(true)}
                    >
                      <Image
                        src={project.gallery[activeImage]}
                        alt={`${project.title} - Görsel ${activeImage + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-colors flex items-center justify-center">
                        <span className="text-primary-foreground opacity-0 hover:opacity-100 font-medium">
                          Büyütmek için tıklayın
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-5 gap-2">
                      {project.gallery.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`relative aspect-video rounded-lg overflow-hidden ${
                            activeImage === index ? 'ring-2 ring-accent' : ''
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'plans' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Kat Planları</h2>
                    <div className="space-y-4">
                      {project.floorPlans.map((plan, index) => (
                        <motion.div
                          key={plan.type}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Home className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-foreground">{plan.type}</h4>
                              <p className="text-muted-foreground">{plan.area}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                           
                             
                            </div>
                            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                              İncele
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Price Card */}
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                   
                   
                    
                    <div className="space-y-3 mb-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone size={18} />
                        Hemen Ara
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border-2 border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail size={18} />
                        Bilgi İste
                      </motion.button>
                    </div>

                    <button className="w-full text-accent font-medium flex items-center justify-center gap-2 hover:underline">
                      <Download size={18} />
                      Katalog İndir
                    </button>
                  </div>

                  {/* Quick Info */}
                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-bold text-foreground mb-4">Hızlı Bilgi</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kategori</span>
                        <span className="font-medium text-foreground">{project.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Konum</span>
                        <span className="font-medium text-foreground">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Birim Sayısı</span>
                        <span className="font-medium text-foreground">{project.units}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Metrekare</span>
                        <span className="font-medium text-foreground">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Teslim Tarihi</span>
                        <span className="font-medium text-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscreen Gallery Modal */}
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center"
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full max-w-5xl aspect-video mx-16">
              <Image
                src={project.gallery[activeImage]}
                alt={`${project.title} - Görsel ${activeImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 text-background">
              {activeImage + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  )
}
