'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Truck, Globe, Shield } from 'lucide-react'

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

export default function Hero() {
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
      { threshold: 0.2 }
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

  const deliveryCount = useCountUp(99.8, 2000, '%', 1, isVisible)
  const countriesCount = useCountUp(150, 2000, '+', 0, isVisible)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-slate-800 pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-800/50 text-white text-sm font-medium border border-primary-500/30">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                Trusted by 10,000+ Companies Worldwide
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-300">Your Trusted</span>
                <span className="block text-accent-400">
                  Logistics Partner
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Delivering excellence in transportation and supply chain solutions. 
              We connect businesses with reliable, efficient, and innovative logistics services worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-8 py-4 rounded-2xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">{deliveryCount}</div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">{countriesCount}</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Transportation</h3>
                  <p className="text-sm text-gray-300">Reliable delivery solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Secure</h3>
                  <p className="text-sm text-gray-300">Protected cargo handling</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Global Reach</h3>
                  <p className="text-sm text-gray-300">Worldwide network</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white font-bold text-lg">AI</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">Smart Tech</h3>
                  <p className="text-sm text-gray-300">AI-powered solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
