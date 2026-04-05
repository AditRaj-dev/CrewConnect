'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
  accent?: string
}

export default function FeatureCard({ icon, title, description, index, accent = '#8b5cf6' }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col p-6 rounded-2xl cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid #27272a',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}18 0%, transparent 70%)`,
          border: `1px solid ${accent}30`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
      >
        <div style={{ color: accent }}>{icon}</div>
      </div>

      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#71717a' }}>{description}</p>
    </motion.div>
  )
}
