'use client'

import { useEffect, useState } from 'react'

export default function ServicesHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-32 pt-44 overflow-hidden min-h-[70vh] flex items-center">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-500/20"
            style={{
              width: Math.random() * 80 + 20 + 'px',
              height: Math.random() * 80 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float${i % 3} ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
              opacity: Math.random() * 0.4 + 0.2
            }}
          />
        ))}
      </div>

      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          background: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.15) 0%, transparent 70%)'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
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
          What We Do
        </h1>
        <div className="h-1 w-32 bg-accent-500 mx-auto rounded-full animate-pulse mb-8"></div>
        <p 
          className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          style={{
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}
        >
          Comprehensive logistics solutions designed to optimize your supply chain, 
          reduce costs, and accelerate your business growth.
        </p>
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
      `}</style>
    </section>
  )
}
