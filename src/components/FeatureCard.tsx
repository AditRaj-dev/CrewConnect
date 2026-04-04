import { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-16 h-16 mb-4">
        <img
          src={feature.icon}
          alt={`${feature.title} icon`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  )
}
