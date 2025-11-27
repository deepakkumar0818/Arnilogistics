'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Award } from 'lucide-react'

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, suffix: string = '', decimals: number = 0, startAnimation: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = startValue + (end - startValue) * easeOutQuart
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, startAnimation])

  // Format the number based on suffix
  const formatNumber = (num: number): string => {
    if (suffix === 'K+') {
      return Math.floor(num).toLocaleString() + suffix
    } else if (suffix === '%') {
      return num.toFixed(decimals) + suffix
    } else {
      return Math.floor(num) + suffix
    }
  }

  return formatNumber(count)
}

export default function ImageShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const yearsCount = useCountUp(20, 2000, '+', 0, isVisible)
  const clientsCount = useCountUp(10, 2000, 'K+', 0, isVisible)
  const successCount = useCountUp(99.8, 2000, '%', 1, isVisible)

  return (
    <section className="relative py-24 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-500/30 via-primary-500/30 to-accent-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image container with enhanced effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.4)]">
              {/* Subtle border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-3xl group-hover:border-accent-400/50 transition-colors duration-500 z-10 pointer-events-none"></div>
              
              <Image
                src="/Galley/119482905_4773698565981586_4030977466744911590_n (1) - Copy.jpg"
                alt="ARVI Logistics Operations"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 brightness-100 group-hover:brightness-110"
                priority
                quality={95}
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium border border-accent-400/30 backdrop-blur-sm hover:bg-accent-500/30 transition-all duration-300">
              <Award className="h-4 w-4 mr-2" />
              Industry Leaders Since 2008
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Excellence in Every
              <span className="block text-accent-400 mt-2">Logistics Operation</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 20 years of experience, ARVI Logistics has built a reputation for 
              delivering exceptional transportation and supply chain solutions. Our commitment 
              to quality, reliability, and innovation drives everything we do.
            </p>

            {/* Enhanced Stats */}
            <div ref={statsRef} className="flex flex-nowrap justify-between sm:justify-start sm:gap-8 gap-4 pt-8 border-t border-white/10">
              <div className="group/stat flex-shrink-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-400 group-hover/stat:scale-110 transition-transform duration-300 whitespace-nowrap">
                  {yearsCount}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Years Experience</div>
              </div>
              <div className="group/stat flex-shrink-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-400 group-hover/stat:scale-110 transition-transform duration-300 whitespace-nowrap">
                  {clientsCount}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Happy Clients</div>
              </div>
              <div className="group/stat flex-shrink-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-400 group-hover/stat:scale-110 transition-transform duration-300 whitespace-nowrap">
                  {successCount}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

