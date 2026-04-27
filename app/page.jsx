'use client'

import { useState } from 'react'
import LoadingScreen from '@/components/loading-screen'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import MissionVision from '@/components/mission-vision'
import Stats from '@/components/stats'
import Projects from '@/components/projects'
import Events from '@/components/events'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <main className="min-h-screen">
          <Header />
          <Hero />
          <About />
          <MissionVision />
          <Stats />
          <Projects />
          {/* <Events /> */}
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}
