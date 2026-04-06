import { useRef } from 'react'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import StickyDownloadBar from '@/components/StickyDownloadBar'
import Footer from '@/components/Footer'

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero />

      <StatsSection />

      <div ref={carouselRef}>
        <ScreenshotCarousel />
      </div>

      <FeaturesSection />

      <HowItWorksSection />

      <CTASection />

      <Footer />

      <StickyDownloadBar />
    </>
  )
}
