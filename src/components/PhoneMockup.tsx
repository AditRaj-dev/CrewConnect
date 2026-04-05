import { ReactNode } from 'react'
import Image from 'next/image'

interface PhoneMockupProps {
  children?: ReactNode
  className?: string
  screenContent?: 'home' | 'timetable' | 'crews' | 'attendance' | 'profile' | 'splash'
}

const screenImageMap: Record<string, string> = {
  home: '/screens/home-screen.jpg',
  timetable: '/screens/timetable-screen.jpg',
  crews: '/screens/crew-screen.jpg',
  attendance: '/screens/attendance-screen.jpg',
  profile: '/screens/profile-screen.jpg',
  splash: '/screens/splash-screen.jpg',
}

export default function PhoneMockup({ className = '', screenContent = 'home', children }: PhoneMockupProps) {
  const imageSrc = screenImageMap[screenContent] || screenImageMap['home']

  return (
    <div className={`relative ${className}`} style={{ width: 220, height: 450 }}>
      {/* Phone outer shell */}
      <div
        className="absolute inset-0 rounded-[2.8rem] phone-glow shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 40%, #111 100%)',
          border: '1.5px solid rgba(255,255,255,0.08)',
        }}
      />
      {/* Side buttons */}
      <div className="absolute right-[-2px] top-[80px] w-[3px] h-[28px] rounded-l-full bg-zinc-700" />
      <div className="absolute left-[-2px] top-[68px] w-[3px] h-[20px] rounded-r-full bg-zinc-700" />
      <div className="absolute left-[-2px] top-[96px] w-[3px] h-[32px] rounded-r-full bg-zinc-700" />
      <div className="absolute left-[-2px] top-[136px] w-[3px] h-[32px] rounded-r-full bg-zinc-700" />
      
      {/* Screen bezel */}
      <div
        className="absolute rounded-[2.5rem] overflow-hidden bg-black"
        style={{ inset: '7px' }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 60,
            height: 16,
            background: '#1a1a1a',
            borderRadius: '0 0 12px 12px',
          }}
        />
        
        {/* Screen content */}
        <div className="absolute inset-0 w-full h-full">
          {children ? (
            children
          ) : (
            <Image
              src={imageSrc}
              alt={`${screenContent} screen`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 220px"
              priority
            />
          )}
        </div>
      </div>
    </div>
  )
}
