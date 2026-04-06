'use client'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import PhoneMockup from './PhoneMockup'
import { config } from '@/config'



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      style={{ background: '#09090b' }}
    >
      {/* Animated background orbs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <motion.div style={{ opacity: heroOpacity }} className="relative w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  color: '#a78bfa',
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0"
                />
                Live on Android — Free Download
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-8"
            >
              <span className="text-white">Know Where</span>
              <br />
              <span className="text-white">Your Crew</span>
              <br />
              <span className="glow-text">Is Right Now</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: '#a1a1aa' }}
            >
              CrewConnect keeps Galgotias University students in sync — live presence, timetables, and crew coordination. All in one campus-first app.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                href={config.download.android.url}
                download="CrewConnect.apk"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 font-bold py-4 px-8 rounded-2xl text-white text-base"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                  boxShadow: '0 0 30px rgba(124,58,237,0.4), 0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zm-9.122 0a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zM17.67 9.745l1.699-2.94a.354.354 0 0 0-.129-.483.354.354 0 0 0-.483.129l-1.72 2.978A10.241 10.241 0 0 0 12 8.54c-1.55 0-3.015.346-4.337.969L5.943 6.451a.354.354 0 0 0-.483-.129.354.354 0 0 0-.129.483l1.699 2.94C4.518 11.113 2.88 13.582 2.88 16.438h18.24c0-2.856-1.638-5.325-3.45-6.693z"/>
                </svg>
                {config.hero.primaryCta}
              </motion.a>

              <motion.a
                href={config.download.web.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 font-semibold py-4 px-8 rounded-2xl text-base transition-colors"
                style={{
                  border: '1px solid #27272a',
                  color: '#a1a1aa',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {config.download.web.label}
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
              {[
                { value: '500+', label: 'Active Students' },
                { value: 'Real-time', label: 'Live Presence' },
                { value: 'Galgotias', label: 'Campus-first' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl px-3 py-3 text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid #27272a' }}
                >
                  <p className="text-white font-bold text-sm">{stat.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#71717a' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0 hidden lg:flex items-center justify-center"
            style={{ width: 480, height: 500 }}
          >
            {/* Background glow behind phones */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 55%, rgba(124,58,237,0.18) 0%, transparent 70%)',
              }}
            />

            {/* Side phone: timetable */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute"
              style={{ right: 20, top: 30 }}
            >
              <div style={{ opacity: 0.55, transform: 'scale(0.72) rotate(8deg)', transformOrigin: 'center' }}>
                <PhoneMockup screenContent="timetable" />
              </div>
            </motion.div>

            {/* Side phone: crews */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute"
              style={{ left: 20, top: 40 }}
            >
              <div style={{ opacity: 0.5, transform: 'scale(0.68) rotate(-7deg)', transformOrigin: 'center' }}>
                <PhoneMockup screenContent="crews" />
              </div>
            </motion.div>

            {/* Center phone: home — main hero */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <PhoneMockup screenContent="home" />
            </motion.div>
          </motion.div>

          {/* Mobile: single phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:hidden"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup screenContent="home" />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-5 h-5" style={{ color: '#52525b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
