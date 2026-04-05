'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    step: '01',
    title: 'Download & Sign Up',
    description: 'Get the APK, create your account in seconds. No email verification walls, no friction.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Build Your Crew',
    description: 'Create a private crew for your class or friend group. Invite teammates with a single link.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197L15 21z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Stay in Sync',
    description: 'See live presence, check your timetable, track attendance — and coordinate with zero effort.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#8b5cf6' }}>
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#71717a' }}>
            Three steps from zero to fully coordinated campus life.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[3px]" style={{
            background: 'linear-gradient(90deg, transparent 15%, rgba(124,58,237,0.8) 25%, rgba(124,58,237,0.8) 75%, transparent 85%)'
          }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15)), #0a0a0f',
                      border: '1px solid rgba(124,58,237,0.35)',
                      color: '#a78bfa',
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  {/* Step number */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black z-20"
                    style={{ background: '#7c3aed', color: '#fff', fontSize: '9px' }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: '#71717a' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
