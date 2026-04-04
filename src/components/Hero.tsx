import { config } from '@/config'

interface HeroProps {
  onDownloadClick?: () => void
  onScrollClick?: () => void
}

export default function Hero({ onDownloadClick, onScrollClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500 opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

      {/* Side glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto text-center">

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-10">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Now live on Android
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
          Stay Connected
          <br />
          <span className="text-emerald-400">in Real Time</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
          {config.hero.subheadline}
        </p>

        {/* CTA buttons — large and prominent */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-400 text-slate-950 font-bold py-5 px-12 rounded-2xl hover:bg-emerald-300 active:scale-95 transition-all text-lg shadow-lg shadow-emerald-500/20"
          >
            {/* Android icon */}
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zm-9.122 0a.963.963 0 0 1-.962.962.963.963 0 0 1-.962-.962.963.963 0 0 1 .962-.962.963.963 0 0 1 .962.962zM17.67 9.745l1.699-2.94a.354.354 0 0 0-.129-.483.354.354 0 0 0-.483.129l-1.72 2.978A10.241 10.241 0 0 0 12 8.54c-1.55 0-3.015.346-4.337.969L5.943 6.451a.354.354 0 0 0-.483-.129.354.354 0 0 0-.129.483l1.699 2.94C4.518 11.113 2.88 13.582 2.88 16.438h18.24c0-2.856-1.638-5.325-3.45-6.693z"/>
            </svg>
            {config.hero.primaryCta}
          </button>

          <button
            onClick={onScrollClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-300 font-semibold py-5 px-12 rounded-2xl hover:border-slate-500 hover:text-white hover:bg-slate-900 active:scale-95 transition-all text-lg"
          >
            {config.hero.secondaryCta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Feature highlights row */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: '⚡', label: 'Instant setup', sub: 'Join in 30 seconds' },
            { icon: '🔒', label: 'Invite-only', sub: 'Your circle, your rules' },
            { icon: '🏫', label: 'Galgotias', sub: 'Built for campus life' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl px-4 py-5 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white text-sm font-semibold">{item.label}</p>
              <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
