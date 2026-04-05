'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StatProps {
  value: number
  suffix: string
  label: string
  description: string
  delay: number
}

function AnimatedCounter({ value, suffix, label, description, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      motionValue.set(value)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, value, motionValue, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center p-6 rounded-2xl relative"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #27272a' }}
    >
      {/* Glow dot */}
      <div
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{ background: '#7c3aed', boxShadow: '0 0 8px rgba(124,58,237,0.8)' }}
      />
      <div className="flex items-end gap-1 mb-2">
        <motion.span
          className="text-4xl md:text-5xl font-black text-white tabular-nums"
        >
          {isInView ? display : '0'}
        </motion.span>
        <span className="text-2xl md:text-3xl font-black pb-1" style={{ color: '#8b5cf6' }}>
          {suffix}
        </span>
      </div>
      <p className="text-sm font-semibold text-white mb-1">{label}</p>
      <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>{description}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20" style={{ background: '#09090b' }}>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#8b5cf6' }}>
            By the numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Campus life, quantified
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatedCounter value={500} suffix="+" label="Active Students" description="Students coordinating their campus life daily" delay={0} />
          <AnimatedCounter value={12} suffix="+" label="Crew Features" description="Tools designed for real campus coordination" delay={0.1} />
          <AnimatedCounter value={5} suffix=" tabs" label="App Screens" description="Home, Timetable, Crews, Attendance & Profile" delay={0.2} />
          <AnimatedCounter value={99} suffix="%" label="Uptime" description="Always-on realtime sync via Socket.IO" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
