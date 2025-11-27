'use client'

import { useEffect, useRef, useState } from 'react'
import { Package, Car, ShoppingCart, Building2, Wrench, Heart } from 'lucide-react'

export default function IndustriesServed() {
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

  const industries = [
    {
      icon: Package,
      title: 'Manufacturing',
      description: 'End-to-end logistics solutions for manufacturing companies.',
      services: ['Raw material transportation', 'Finished goods distribution', 'Inventory management', 'Quality control'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Specialized logistics for the automotive industry.',
      services: ['Parts distribution', 'Just-in-time delivery', 'Assembly line support', 'Aftermarket logistics'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Fast and reliable delivery solutions for retail businesses.',
      services: ['Last-mile delivery', 'Cross-border shipping', 'Returns processing', 'Inventory optimization'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Heavy-duty logistics for construction and infrastructure projects.',
      services: ['Equipment transportation', 'Material delivery', 'Project logistics', 'Waste management'],
      gradient: 'from-yellow-500 to-accent-500'
    },
    {
      icon: Wrench,
      title: 'Technology',
      description: 'Secure and efficient logistics for tech companies.',
      services: ['Sensitive cargo handling', 'Temperature control', 'Security protocols', 'Global distribution'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Compliant and reliable logistics for healthcare organizations.',
      services: ['Pharmaceutical delivery', 'Medical equipment transport', 'Cold chain logistics', 'Regulatory compliance'],
      gradient: 'from-pink-500 to-red-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            style={{
              animation: isVisible ? 'textReveal 1s ease-out' : 'none',
              textShadow: '0 0 30px rgba(234, 179, 8, 0.2)'
            }}
          >
            Industries We Serve
          </h2>
          <div 
            className="h-1.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full mx-auto max-w-md"
            style={{
              animation: isVisible ? 'expandWidth 1s ease-out 0.3s both' : 'none'
            }}
          ></div>
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mt-8"
            style={{
              animation: isVisible ? 'fadeIn 1s ease-out 0.5s both' : 'none'
            }}
          >
            Our expertise spans across diverse industries, providing specialized logistics 
            solutions tailored to meet the unique requirements of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl shadow-xl p-8 border-2 border-white/30 hover:border-accent-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` : 'none'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div 
                    className={`bg-gradient-to-br ${industry.gradient} p-3 rounded-xl mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <li 
                      key={serviceIndex} 
                      className="flex items-center text-sm text-gray-300"
                      style={{
                        animation: isVisible ? `fadeInUp 0.4s ease-out ${0.4 + index * 0.1 + serviceIndex * 0.05}s both` : 'none'
                      }}
                    >
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-20 text-center"
          style={{
            animation: isVisible ? 'fadeInUp 1s ease-out 1.2s both' : 'none'
          }}
        >
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto border-2 border-white/30">
            <h3 className="text-3xl font-bold text-white mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We work with clients across all industries and can develop customized solutions 
              to meet your specific logistics requirements, no matter how unique.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-accent-500 text-primary-900 px-10 py-4 rounded-xl font-bold hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
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
