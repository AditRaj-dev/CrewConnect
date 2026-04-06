'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { config } from '@/config'
import PhoneMockup from './PhoneMockup'

interface CTASectionProps {
  onDownloadClick?: () => void
}

export default function CTASection({ onDownloadClick }: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleClick = () => {
    if (config.download.android.url) {
      window.open(config.download.android.url, '_blank', 'noopener,noreferrer')
    }
    onDownloadClick?.()
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: '#09090b' }}>
      {/* Glowing lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.5) 50%, transparent 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 50%, transparent 100%)' }}
        />
        {/* Big center glow */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' }}
            >
              🎓 Free for all Galgotias students
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
            >
              Your campus crew<br />
              <span className="glow-text">is waiting for you</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base mb-10 leading-relaxed"
              style={{ color: '#a1a1aa' }}
            >
              Join hundreds of Galgotias students already staying in sync. Download CrewConnect now — Android, free, instant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 font-bold py-4 px-10 rounded-2xl text-white text-lg"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.5), 0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zm-9.122 0a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zM17.67 9.745l1.699-2.94a.354.354 0 0 0-.129-.483.354.354 0 0 0-.483.129l-1.72 2.978A10.241 10.241 0 0 0 12 8.54c-1.55 0-3.015.346-4.337.969L5.943 6.451a.354.354 0 0 0-.483-.129.354.354 0 0 0-.129.483l1.699 2.94C4.518 11.113 2.88 13.582 2.88 16.438h18.24c0-2.856-1.638-5.325-3.45-6.693z"/>
                </svg>
                Download for Android
              </motion.button>

              {config.download?.web?.url && (
                <motion.a
                  href={config.download.web.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 font-semibold py-4 px-10 rounded-2xl text-base"
                  style={{
                    border: '1px solid #27272a',
                    color: '#a1a1aa',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {config.download.web.buttonText}
                </motion.a>
              )}
            </motion.div>

            {/* Social proof dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {['#ef4444','#f59e0b','#10b981','#6366f1','#8b5cf6'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs"
                    style={{ background: c, borderColor: '#09090b' }}>
                    <span className="text-white font-bold" style={{ fontSize: '8px' }}>
                      {['A','R','S','K','P'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: '#71717a' }}>
                <span className="text-white font-semibold">500+</span> students already connected
              </p>
            </motion.div>
          </motion.div>

          {/* Phone side */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup screenContent="splash" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
