'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FeatureCard from './FeatureCard'

const features = [
  {
    id: 'presence',
    title: 'Live Presence',
    description: 'See who is active, in class, or available right now. Real-time campus awareness powered by Socket.IO.',
    accent: '#8b5cf6',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M5.636 18.364a9 9 0 1 0 12.728-12.728M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'timetable',
    title: 'Offline Smart Timetable',
    description: 'Your full weekly schedule stored locally. Check your classes instantly even when iCloud EMS is down or network reception is low.',
    accent: '#6366f1',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.8}
          strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.8} strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.8} strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.8} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'circles',
    title: 'Private Crews',
    description: 'Build private crews for class groups, projects, and friend communities. Invite-only, no noise.',
    accent: '#a78bfa',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },
  {
    id: 'attendance',
    title: 'Attendance Analytics',
    description: 'Visual per-course donut charts so you always know your attendance percentage before it is too late.',
    accent: '#ec4899',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9z" />
      </svg>
    ),
  },
  {
    id: 'connections',
    title: 'Direct Connections',
    description: 'One-to-one coordination flows without friction. Add friends, see their context, stay in sync.',
    accent: '#14b8a6',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M10.172 13.828a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656L13.07 5.27" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Secure by Default',
    description: 'JWT authentication, HTTP-only cookies, rate limiting, and credentialed CORS. Built for production.',
    accent: '#f59e0b',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 0 0-.382-3.016z" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24" style={{ background: '#09090b' }}>
      {/* Top divider glow */}
      <div className="w-full h-px mb-24" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.4) 50%, transparent 100%)'
      }} />

      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#8b5cf6' }}>
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            Built for campus life
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#71717a' }}>
            Every feature is designed around one question: how do students actually coordinate?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
              accent={feature.accent}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
