'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Shield, Lightbulb, Users, Award, Globe } from 'lucide-react'

export default function OurValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our priority.',
      gradient: 'from-red-500 to-pink-500',
      color: 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent, dependable service that our clients can count on, every single time.',
      gradient: 'from-blue-500 to-cyan-500',
      color: 'text-blue-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our solutions to meet the changing needs of modern logistics.',
      gradient: 'from-yellow-500 to-accent-500',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative spirit that brings together diverse talents to achieve common goals.',
      gradient: 'from-green-500 to-emerald-500',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising commitment to delivering the highest quality services and solutions.',
      gradient: 'from-purple-500 to-indigo-500',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding and adapting to diverse markets and cultures worldwide.',
      gradient: 'from-indigo-500 to-blue-500',
      color: 'text-indigo-400'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Simple subtle background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Our Values
          </h2>
          <div className="h-1.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full mx-auto max-w-md"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-8">
            These core values guide every decision we make and every service we provide. 
            They are the foundation of our company culture and our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {/* Simple card with minimal animation */}
                <div
                  className="relative h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-xl transition-all duration-300"
                  style={{
                    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(234, 179, 8, 0.2)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Subtle gradient on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                  ></div>

                  {/* Icon with simple scale */}
                  <div className="relative z-10 mb-6">
                    <div 
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg transition-transform duration-300`}
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-2xl font-bold text-white mb-4 transition-colors duration-300"
                      style={{
                        color: isHovered ? '#eab308' : '#ffffff'
                      }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
