import { useRef } from 'react'
import Hero from '@/components/Hero'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FeaturesSection from '@/components/FeaturesSection'
import StickyDownloadBar from '@/components/StickyDownloadBar'
import Footer from '@/components/Footer'

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadClick = () => {
    // Analytics tracking can be added here
  }

  return (
    <>
      <Hero
        onScrollClick={scrollToCarousel}
        onDownloadClick={handleDownloadClick}
      />

      <div ref={carouselRef}>
        <ScreenshotCarousel />
      </div>

      <FeaturesSection />

      <StickyDownloadBar onDownloadClick={handleDownloadClick} />

      <Footer />
    </>
  )
}
