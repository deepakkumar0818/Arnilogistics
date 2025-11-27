'use client'

import { useEffect, useRef, useState } from 'react'

export default function CompanyHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-32 pt-44 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-500/20"
            style={{
              width: Math.random() * 100 + 20 + 'px',
              height: Math.random() * 100 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float${i % 3} ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 70%)'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main heading with typewriter effect */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #eab308 50%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite',
              filter: 'drop-shadow(0 0 30px rgba(234, 179, 8, 0.5))'
            }}
          >
            Who We Are
          </h1>
          <div className="h-1 w-32 bg-accent-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Main content card with slide-in animation */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-16 border-2 border-white/30 shadow-2xl"
            style={{
              animation: 'slideInFromBottom 1s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(234, 179, 8, 0.2)'
            }}
          >
            {/* Animated border gradient */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(234, 179, 8, 0.3), transparent)',
                backgroundSize: '200% 200%',
                animation: 'borderFlow 3s linear infinite',
                zIndex: -1
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <p 
                className="text-2xl md:text-3xl text-white font-bold text-center leading-tight"
                style={{
                  animation: 'fadeInUp 1s ease-out 0.2s both'
                }}
              >
                ARVI Logistics is a family-owned freight brokerage company proudly serving the transportation industry since 2003.
              </p>

              <div 
                className="space-y-6 text-gray-200 text-lg md:text-xl leading-relaxed"
                style={{
                  animation: 'fadeInUp 1s ease-out 0.4s both'
                }}
              >
                <p>
                  For over <span className="text-accent-400 font-bold text-2xl relative inline-block">
                    <span className="relative z-10">20 years</span>
                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-accent-400/30 -rotate-1 animate-pulse"></span>
                  </span>, we've been connecting shippers and carriers across the country with one simple goal — to deliver dependable logistics solutions backed by integrity and personal service.
                </p>
                <p>
                  What started as a small family operation has grown into a trusted name in the freight world, known for our <span className="text-accent-400 font-semibold relative">
                    reliability, transparency, and long-term relationships
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent-400/20 -rotate-1"></span>
                  </span>. Our success is built on strong values — hard work, honesty, and respect — the same principles that have guided our family for generations.
                </p>
              </div>

              <div 
                className="pt-8 border-t border-white/20"
                style={{
                  animation: 'fadeInUp 1s ease-out 0.6s both'
                }}
              >
                <p className="text-2xl md:text-3xl text-accent-400 font-bold text-center italic relative">
                  <span className="absolute -left-4 text-4xl opacity-50">"</span>
                  At ARVI Logistics, we don't just move freight — we move relationships forward.
                  <span className="absolute -right-4 text-4xl opacity-50">"</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats with bounce animation */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: '20+', label: 'Years Experience', delay: '0s' },
            { number: '2003', label: 'Founded', delay: '0.1s' },
            { number: 'Family', label: 'Owned', delay: '0.2s' },
            { number: 'Trust', label: 'Built', delay: '0.3s' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:border-accent-400/60 transition-all duration-500 hover:scale-110"
              style={{
                animation: `bounceIn 0.8s ease-out ${stat.delay} both`
              }}
            >
              <div className="text-center">
                <div 
                  className="text-3xl md:text-4xl font-black text-accent-400 mb-2"
                  style={{
                    textShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/20 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, -40px) rotate(180deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          75% { transform: translate(-30px, 30px) rotate(270deg); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
