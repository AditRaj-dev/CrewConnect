import { features } from '@/data/features'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Why CrewConnect?
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Everything you need to stay in sync with your campus crew — in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
