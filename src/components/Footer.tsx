import { config } from '@/config'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                <span className="text-emerald-400 text-xs font-bold">CC</span>
              </div>
              <span className="font-bold text-white">{config.app.name}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{config.app.description}</p>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {config.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Platform</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-slate-400 text-sm">Android — Available now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-600 rounded-full" />
                <span className="text-slate-600 text-sm">iOS — Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">{config.footer.copyright}</p>
          <p className="text-slate-700 text-xs">Built for Galgotias University</p>
        </div>
      </div>
    </footer>
  )
}
