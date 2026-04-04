import { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="group flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all duration-200">
      <div className="w-12 h-12 mb-5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
        <img
          src={feature.icon}
          alt={`${feature.title} icon`}
          className="w-6 h-6 object-contain"
        />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
    </div>
  )
}
