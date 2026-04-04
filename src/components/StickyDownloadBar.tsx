import { config } from '@/config'

interface StickyDownloadBarProps {
  onDownloadClick?: () => void
}

export default function StickyDownloadBar({ onDownloadClick }: StickyDownloadBarProps) {
  const handleDownload = () => {
    if (config.download.android.url) {
      window.open(config.download.android.url, '_blank', 'noopener,noreferrer')
    }
    if (onDownloadClick) onDownloadClick()
  }

  return (
    <div
      data-testid="sticky-bar"
      className="sticky bottom-0 bg-slate-950/95 backdrop-blur border-t border-slate-800 z-40"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0">
            <span className="text-emerald-400 text-xs font-bold">CC</span>
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">{config.app.name}</p>
            <p className="text-slate-500 text-xs">{config.download.android.label}</p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="bg-emerald-400 text-slate-950 font-bold py-2.5 px-6 rounded-xl hover:bg-emerald-300 transition-colors whitespace-nowrap text-sm flex-shrink-0"
        >
          {config.download.android.buttonText}
        </button>
      </div>
    </div>
  )
}
