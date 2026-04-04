import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { screenshotSlides } from '@/data/screenshots'

export default function ScreenshotCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshotSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + screenshotSlides.length) % screenshotSlides.length
    )
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            App Preview
          </p>
          <h2 className="text-4xl font-bold text-white">
            See What&apos;s Inside
          </h2>
        </div>

        <div
          data-testid="carousel"
          className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden"
        >
          {/* Slides */}
          <div className="relative w-full aspect-video">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={screenshotSlides[currentSlide].image}
                  alt={screenshotSlides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption */}
          <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-300 text-sm font-medium">
              {screenshotSlides[currentSlide].caption}
            </p>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/80 border border-slate-700 text-white rounded-full p-2.5 hover:border-emerald-500 hover:text-emerald-400 transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/80 border border-slate-700 text-white rounded-full p-2.5 hover:border-emerald-500 hover:text-emerald-400 transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshotSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-emerald-400 w-8'
                  : 'bg-slate-700 w-3 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
