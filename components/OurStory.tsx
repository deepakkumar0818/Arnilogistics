'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Target, TrendingUp, Users } from 'lucide-react'

export default function OurStory() {
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

  const milestones = [
    {
      year: '2003',
      title: 'Company Founded',
      description: 'Started as a small family-owned freight brokerage with a commitment to integrity and personal service.',
      icon: Calendar,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2008',
      title: 'Growing Reputation',
      description: 'Built trusted relationships with shippers and carriers, establishing our name in the freight industry.',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      year: '2015',
      title: 'Expanding Network',
      description: 'Expanded operations across the country, connecting more shippers and carriers nationwide.',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      title: '20 Years Strong',
      description: 'Celebrated 20 years of service, continuing to deliver dependable logistics solutions with family values.',
      icon: Users,
      gradient: 'from-accent-500 to-yellow-400'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 179, 8, 0.1) 10px, rgba(234, 179, 8, 0.1) 20px)',
            animation: 'waveMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-500/10 blur-3xl"
            style={{
              width: 200 + Math.random() * 200 + 'px',
              height: 200 + Math.random() * 200 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `orbFloat${i % 3} ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{
              animation: isVisible ? 'textReveal 1s ease-out' : 'none',
              background: 'linear-gradient(135deg, #ffffff 0%, #eab308 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Story
          </h2>
          <div 
            className="h-1.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full mx-auto max-w-md"
            style={{
              animation: isVisible ? 'expandWidth 1s ease-out 0.3s both' : 'none'
            }}
          ></div>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-8"
            style={{
              animation: isVisible ? 'fadeIn 1s ease-out 0.5s both' : 'none'
            }}
          >
            Two decades of connecting shippers and carriers with integrity, reliability, and the personal touch that only a family business can provide.
          </p>
        </div>

        {/* Main story content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div 
            className={`space-y-6 text-gray-200 text-lg leading-relaxed ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
          >
            <p>
              Since <span className="text-accent-400 font-bold text-2xl relative inline-block">
                <span className="relative z-10">2003</span>
                <span className="absolute bottom-0 left-0 right-0 h-3 bg-accent-400/30 -rotate-1 animate-pulse"></span>
              </span>, we've seen the logistics world change dramatically — new technologies, tighter markets, and rising customer expectations. Through it all, one thing has never changed:{' '}
              <span className="text-accent-400 font-semibold text-xl">our commitment to people first.</span>
            </p>
            <p>
              We take pride in being <span className="text-white font-semibold">large enough to compete</span> — yet <span className="text-white font-semibold">small enough to care</span>. Our customers trust us because we do what we say we'll do. Our carriers value us because we treat them like partners, not numbers.
            </p>
            <p>
              With deep roots in trucking and freight management, we understand every challenge on the road — and we use that knowledge to deliver smarter, more dependable solutions every day.
            </p>
          </div>

          {/* Stats card with flip animation */}
          <div 
            className={`relative ${isVisible ? 'animate-flipIn' : 'opacity-0'}`}
          >
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/30 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '20+', label: 'Years of Experience', icon: '📅' },
                  { value: '2003', label: 'Founded', icon: '🏢' },
                  { value: 'Family', label: 'Owned & Operated', icon: '👨‍👩‍👧‍👦' },
                  { value: 'Trust', label: 'Built on Integrity', icon: '🤝' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group"
                    style={{
                      animation: isVisible ? `scaleIn 0.5s ease-out ${0.2 + index * 0.1}s both` : 'none'
                    }}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-black text-accent-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline with cascade animation */}
        <div className="space-y-12">
          <h3 
            className="text-3xl md:text-4xl font-black text-white text-center mb-16"
            style={{
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.5s both' : 'none'
            }}
          >
            Our Journey
          </h3>
          <div className="relative">
            {/* Animated timeline line */}
            <div 
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500 opacity-30"
              style={{
                animation: isVisible ? 'drawLine 1s ease-out 0.8s both' : 'none',
                transformOrigin: 'top'
              }}
            ></div>
            <div 
              className="lg:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500 opacity-30"
              style={{
                animation: isVisible ? 'drawLine 1s ease-out 0.8s both' : 'none',
                transformOrigin: 'top'
              }}
            ></div>

            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              const delay = 1 + index * 0.2
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 lg:mb-20 ${isEven ? 'lg:flex-row flex-row' : 'lg:flex-row-reverse flex-row'}`}
                  style={{
                    animation: isVisible ? `cascadeIn${isEven ? 'Left' : 'Right'} 0.8s ease-out ${delay}s both` : 'none'
                  }}
                >
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right text-left pl-16' : 'lg:pl-12 lg:text-left text-left pl-16'}`}>
                    <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border-2 border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
                          <div className={`bg-gradient-to-br ${milestone.gradient} p-3 rounded-xl mr-4 border-2 border-white/30 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                            <milestone.icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-2xl font-black text-accent-400">{milestone.year}</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{milestone.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot with pulse */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="w-6 h-6 bg-accent-500 rounded-full border-4 border-primary-900 shadow-lg"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-accent-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        @keyframes orbFloat0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.2); }
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(0.8); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, 30px) scale(1.1); }
          66% { transform: translate(-30px, -30px) scale(0.9); }
        }
        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes flipIn {
          from {
            opacity: 0;
            transform: rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: rotateY(0deg);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        @keyframes drawLine {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
        @keyframes cascadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) rotateY(-20deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        @keyframes cascadeInRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotateY(20deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
      `}</style>
    </section>
  )
}
