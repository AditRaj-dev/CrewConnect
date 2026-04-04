import { config } from '@/config'

interface HeroProps {
  onDownloadClick?: () => void
  onScrollClick?: () => void
}

export default function Hero({ onDownloadClick, onScrollClick }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {config.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12">
          {config.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={onDownloadClick}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {config.hero.primaryCta}
          </button>
          <button
            onClick={onScrollClick}
            className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            {config.hero.secondaryCta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
