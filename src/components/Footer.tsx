'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { config } from '@/config'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer
      ref={ref}
      style={{ background: '#09090b', borderTop: '1px solid #18181b' }}
      className="py-16 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" style={{ color: '#a78bfa' }}>
                  {[0,1,2,3,4].map((i) => {
                    const a = (i * 72 - 90) * Math.PI / 180
                    return <circle key={i} cx={12 + 8 * Math.cos(a)} cy={12 + 8 * Math.sin(a)} r="1.5" fill="currentColor" />
                  })}
                  {[0,1,2,3,4].map((i) => {
                    const a1 = (i * 72 - 90) * Math.PI / 180
                    const a2 = ((i + 2) * 72 - 90) * Math.PI / 180
                    return (
                      <line key={i}
                        x1={12 + 8 * Math.cos(a1)} y1={12 + 8 * Math.sin(a1)}
                        x2={12 + 8 * Math.cos(a2)} y2={12 + 8 * Math.sin(a2)}
                        stroke="currentColor" strokeWidth="1.2" opacity="0.6"
                      />
                    )
                  })}
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-white">{config.app.name}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#52525b' }}>{config.app.description}</p>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#a1a1aa' }}>Legal</h4>
            <ul className="space-y-3">
              {config.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: '#52525b' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a1a1aa')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#52525b')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: '#a1a1aa' }}>Platform</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#8b5cf6', boxShadow: '0 0 6px rgba(139,92,246,0.8)' }}
                />
                <span className="text-sm" style={{ color: '#a1a1aa' }}>Android — Available now</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full" style={{ background: '#3f3f46' }} />
                <span className="text-sm" style={{ color: '#3f3f46' }}>iOS — Coming soon</span>
              </div>
              <a
                href={config.download.web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#6366f1', boxShadow: '0 0 6px rgba(99,102,241,0.8)' }}
                />
                <span className="text-sm transition-colors duration-150 group-hover:text-indigo-400" style={{ color: '#a1a1aa' }}>Web — Live now ↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid #18181b' }}
        >
          <p className="text-sm" style={{ color: '#3f3f46' }}>{config.footer.copyright}</p>
          <p className="text-xs" style={{ color: '#27272a' }}>
            Built with ♥ for Galgotias University · Unified Synergy
          </p>
        </div>
      </div>
    </footer>
  )
}
