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
      className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg z-40"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Ready to join?</p>
          <p className="text-lg font-bold text-gray-900">{config.app.name}</p>
        </div>

        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          {config.download.android.buttonText}
        </button>
      </div>
    </div>
  )
}
