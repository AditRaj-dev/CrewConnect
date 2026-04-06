'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { config } from '@/config'

export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      data-testid="sticky-bar"
      initial={false}
      animate={{ y: visible ? 0 : 80, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(9,9,11,0.92)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(124,58,237,0.2)',
        boxShadow: '0 -8px 40px rgba(124,58,237,0.08)',
      }}
    >
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)' }}
          >
            <span className="text-xs font-black" style={{ color: '#a78bfa' }}>CC</span>
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{config.app.name}</p>
            <p className="text-xs truncate" style={{ color: '#52525b' }}>{config.download.android.label}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {config.download?.web?.url && (
            <motion.a
              href={config.download.web.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold py-2.5 px-4 rounded-xl whitespace-nowrap text-sm hidden sm:inline-flex items-center gap-1.5"
              style={{
                border: '1px solid #27272a',
                color: '#a1a1aa',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web App
            </motion.a>
          )}

          <motion.a
            href={config.download.android.url}
            download="CrewConnect.apk"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-bold py-2.5 px-6 rounded-xl whitespace-nowrap text-sm text-white"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
              boxShadow: '0 0 20px rgba(124,58,237,0.35)',
            }}
          >
            {config.download.android.buttonText}
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
