'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import PhoneMockup from './PhoneMockup'

const slides = [
  {
    id: 'home',
    screen: 'home' as const,
    title: 'Live Home Dashboard',
    description: 'See your current class, next-up classes, and a full day snapshot — all in one glance.',
    tag: 'Smart Awareness',
  },
  {
    id: 'timetable',
    screen: 'timetable' as const,
    title: 'Weekly Timetable (Offline Ready)',
    description: 'Navigate your week with a tap. Stored locally so it loads instantly even in low network areas or when the iCloud EMS app is down.',
    tag: 'Reliable Scheduling',
  },
  {
    id: 'crews',
    screen: 'crews' as const,
    title: 'Crews & Connections',
    description: 'Create private crews for your gang, or connect one-on-one. Your social graph, your rules.',
    tag: 'Social Layer',
  },
  {
    id: 'attendance',
    screen: 'attendance' as const,
    title: 'Attendance Tracking',
    description: 'Visual donut charts per subject — know exactly where you stand before you miss another class.',
    tag: 'Analytics',
  },
  {
    id: 'profile',
    screen: 'profile' as const,
    title: 'Your Profile',
    description: 'Personalise your identity, manage your account, and control your campus presence.',
    tag: 'Identity',
  },
  {
    id: 'splash',
    screen: 'splash' as const,
    title: 'Secure Boot',
    description: 'Zero-config startup with end-to-end JWT auth. Your data stays yours.',
    tag: 'Security',
  },
]

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = slides[current]

  return (
    <section
      ref={ref}
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #0e0a1a 50%, #09090b 100%)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#8b5cf6' }}>
            App Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            Every screen, beautifully designed
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#71717a' }}>
            From live class awareness to crew coordination — explore the full CrewConnect experience.
          </p>
        </motion.div>

        {/* Main showcase */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Glow behind phone */}
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-[-20px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(124,58,237,0.22) 0%, transparent 70%)',
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhoneMockup screenContent={slide.screen} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Info + slide list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col max-w-sm w-full"
          >
            {/* Active slide info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.25)' }}
                >
                  {slide.tag}
                </span>
                <h3 className="text-2xl font-black text-white mb-3">{slide.title}</h3>
                <p style={{ color: '#a1a1aa' }} className="text-base leading-relaxed">{slide.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Slide list */}
            <div className="flex flex-col gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setCurrent(i); setPaused(true) }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: i === current ? 'rgba(124,58,237,0.12)' : 'transparent',
                    border: `1px solid ${i === current ? 'rgba(124,58,237,0.35)' : 'transparent'}`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                    style={{
                      background: i === current ? '#8b5cf6' : '#3f3f46',
                      boxShadow: i === current ? '0 0 6px rgba(139,92,246,0.8)' : 'none',
                    }}
                  />
                  <span
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: i === current ? '#e4e4e7' : '#52525b' }}
                  >
                    {s.title}
                  </span>
                  {/* Progress bar for active */}
                  {i === current && !paused && (
                    <div className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: '#27272a' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: '#8b5cf6' }}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                        key={`progress-${current}`}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={prev}
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #27272a', color: '#a1a1aa' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #27272a', color: '#a1a1aa' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
