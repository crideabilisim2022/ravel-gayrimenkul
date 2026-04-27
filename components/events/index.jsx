'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Users, ArrowRight, X } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'RAVEL Residence Lansmanı',
    type: 'Lansman',
    date: '15 Mart 2024',
    time: '19:00',
    location: 'RAVEL Genel Merkez, Levent',
    attendees: '250+',
    image: '/images/events/event-1.jpg',
    description: 'Yeni projemiz RAVEL Residence\'ın görkemli lansman etkinliği. Özel davetliler için kokteyl ve canlı müzik eşliğinde tanıtım sunumu.',
    details: 'Etkinliğimizde RAVEL Residence projesinin tüm detayları paylaşılacak, örnek daire sanal turları gerçekleştirilecek ve ilk alıcılara özel indirimler sunulacaktır. Ayrıca ünlü iç mimar Zeynep Fadıllıoğlu\'nun özel sunumu ve DJ performansı ile gecenin tadını çıkarabilirsiniz.',
  },
  {
    id: 2,
    title: 'Gayrimenkul Yatırım Zirvesi 2024',
    type: 'Konferans',
    date: '22 Nisan 2024',
    time: '10:00',
    location: 'Hilton İstanbul Bomonti',
    attendees: '500+',
    image: '/images/events/event-2.jpg',
    description: 'Sektörün önde gelen isimleriyle gayrimenkul yatırımının geleceğini tartışıyoruz. Panel oturumları ve networking fırsatları.',
    details: 'Zirve boyunca ekonomistler, gayrimenkul uzmanları ve yatırımcılarla bir araya gelme fırsatı bulacaksınız. Türkiye ve dünya gayrimenkul piyasası analizi, yatırım trendleri ve fırsatları konularında sunumlar yapılacaktır.',
  },
  {
    id: 3,
    title: 'Müşteri Takdir Gecesi',
    type: 'Organizasyon',
    date: '10 Mayıs 2024',
    time: '20:00',
    location: 'Four Seasons Bosphorus',
    attendees: '150+',
    image: '/images/events/event-3.jpg',
    description: 'Değerli müşterilerimize teşekkür etmek için düzenlenen özel gala gecesi. Canlı performans ve gourmet yemek deneyimi.',
    details: 'Bu özel gecede sizlere olan minnettarlığımızı ifade etmek istiyoruz. Boğaz manzaralı terasta kokteyl, ödüllü şefimizin hazırlayacağı 5 servis yemek ve canlı caz müziği eşliğinde unutulmaz bir gece sizi bekliyor.',
  },
  {
    id: 4,
    title: 'Sürdürülebilir Yapı Semineri',
    type: 'Seminer',
    date: '5 Haziran 2024',
    time: '14:00',
    location: 'RAVEL Akademi, Maslak',
    attendees: '100+',
    image: '/images/events/event-4.jpg',
    description: 'Yeşil bina teknolojileri ve sürdürülebilir mimari üzerine uzman konuşmacılarla interaktif seminer.',
    details: 'Seminerimizde LEED ve BREEAM sertifikasyon süreçleri, enerji verimli yapı sistemleri, yenilenebilir enerji entegrasyonu ve akıllı bina teknolojileri konularında detaylı bilgiler paylaşılacaktır.',
  },
  {
    id: 5,
    title: 'RAVEL Park Temel Atma Töreni',
    type: 'Tören',
    date: '20 Haziran 2024',
    time: '11:00',
    location: 'RAVEL Park Şantiyesi, Kadıköy',
    attendees: '300+',
    image: '/images/events/event-5.jpg',
    description: 'Yeni karma kullanım projemiz RAVEL Park\'ın temel atma töreni. Basın mensupları ve davetliler katılımıyla.',
    details: 'Törende proje detayları paylaşılacak, yetkililerden açıklamalar yapılacak ve ilk alıcılar için özel satış ofisi açılışı gerçekleştirilecektir. Tören sonrası kokteyl ikramı yapılacaktır.',
  },
  {
    id: 6,
    title: 'Yıl Sonu Gala & Ödül Töreni',
    type: 'Gala',
    date: '28 Aralık 2024',
    time: '19:30',
    location: 'Çırağan Palace Kempinski',
    attendees: '400+',
    image: '/images/events/event-6.jpg',
    description: 'RAVEL YAPI GYO ailesinin bir araya geldiği görkemli yıl sonu galası ve başarılı çalışanlarımızın ödüllendirilmesi.',
    details: 'Geleneksel yıl sonu galaımızda yılın en başarılı proje ekipleri, satış temsilcileri ve iş ortaklarımız ödüllendirilecektir. Gece boyunca canlı orkestra eşliğinde dans, çekiliş ve sürpriz performanslar sizi bekliyor.',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      <section id="events" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Etkinlikler & Organizasyonlar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Davetler ve
              <span className="text-accent block">Organizasyonlar</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Sektörel etkinlikler, lansmanlar ve özel organizasyonlarımızla bir araya geliyoruz.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={14} className="text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} className="text-accent" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users size={14} className="text-accent" />
                        <span>{event.attendees} Katılımcı</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                      Detayları Gör
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-video">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>

              {/* Event Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3 inline-block">
                  {selectedEvent.type}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-2">{selectedEvent.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Event Details */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Tarih</p>
                    <p className="text-sm font-medium text-foreground">{selectedEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Saat</p>
                    <p className="text-sm font-medium text-foreground">{selectedEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Konum</p>
                    <p className="text-sm font-medium text-foreground">{selectedEvent.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Katılımcı</p>
                    <p className="text-sm font-medium text-foreground">{selectedEvent.attendees}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground mb-3">Etkinlik Hakkında</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {selectedEvent.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.details}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Kayıt Ol
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Takvime Ekle
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
