import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import StickyDownloadBar from '@/components/StickyDownloadBar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />

      <StatsSection />

      <div>
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
