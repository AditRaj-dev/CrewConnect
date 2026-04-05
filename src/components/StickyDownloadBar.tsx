'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { config } from '@/config'

interface StickyDownloadBarProps {
  onDownloadClick?: () => void
}

export default function StickyDownloadBar({ onDownloadClick }: StickyDownloadBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDownload = () => {
    if (config.download.android.url) {
      window.open(config.download.android.url, '_blank', 'noopener,noreferrer')
    }
    onDownloadClick?.()
  }

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

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="font-bold py-2.5 px-6 rounded-xl whitespace-nowrap text-sm flex-shrink-0 text-white"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
            boxShadow: '0 0 20px rgba(124,58,237,0.35)',
          }}
        >
          {config.download.android.buttonText}
        </motion.button>
      </div>
    </motion.div>
  )
}
