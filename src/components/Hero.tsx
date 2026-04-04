import { config } from '@/config'

interface HeroProps {
  onDownloadClick?: () => void
  onScrollClick?: () => void
}

export default function Hero({ onDownloadClick, onScrollClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow accent behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Now available on Android
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          {config.hero.headline}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
          {config.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onDownloadClick}
            className="bg-emerald-400 text-slate-950 font-bold py-4 px-10 rounded-xl hover:bg-emerald-300 transition-colors text-base"
          >
            {config.hero.primaryCta}
          </button>
          <button
            onClick={onScrollClick}
            className="border border-slate-600 text-slate-300 font-semibold py-4 px-10 rounded-xl hover:border-slate-400 hover:text-white transition-colors text-base"
          >
            {config.hero.secondaryCta}
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-slate-800 pt-12">
          {[
            { value: 'Android 8+', label: 'Compatible' },
            { value: 'Free', label: 'No subscription' },
            { value: 'Campus', label: 'Built for Galgotias' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-5 h-5 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
