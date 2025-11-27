'use client'

import { useEffect, useRef, useState } from 'react'
import { Truck, Package, MapPin, Clock, Users } from 'lucide-react'

export default function DetailedServices() {
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

  const services = [
    {
      icon: Truck,
      title: 'Road Transportation',
      description: 'Comprehensive road freight services for all your transportation needs.',
      features: [
        'Same-day and next-day delivery',
        'Express shipping services',
        'Temperature-controlled transportation',
        'Dangerous goods handling',
        'White-glove delivery services',
        'Cross-border logistics'
      ],
      benefits: [
        'Cost-effective solutions',
        'Real-time tracking',
        'Flexible scheduling',
        'Nationwide coverage'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art storage and distribution facilities.',
      features: [
        'Climate-controlled storage',
        'Inventory management systems',
        'Pick and pack services',
        'Cross-docking facilities',
        'Quality control inspections',
        'Returns processing'
      ],
      benefits: [
        'Strategic locations',
        'Advanced technology',
        'Scalable solutions',
        'Cost optimization'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management.',
      features: [
        'Demand planning and forecasting',
        'Vendor management',
        'Procurement optimization',
        'Risk assessment',
        'Performance analytics',
        'Continuous improvement'
      ],
      benefits: [
        'Reduced costs',
        'Improved efficiency',
        'Better visibility',
        'Risk mitigation'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
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
            Our Services
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
            From transportation to warehousing, we provide comprehensive logistics solutions 
            that keep your business moving forward efficiently and cost-effectively.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const delay = index * 0.3
            
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                style={{
                  animation: isVisible ? `slideIn${isEven ? 'Left' : 'Right'} 0.8s ease-out ${delay}s both` : 'none'
                }}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/30 shadow-2xl">
                    <div className="flex items-center mb-4">
                      <div 
                        className={`bg-gradient-to-br ${service.gradient} p-3 rounded-2xl mr-4 shadow-lg`}
                        style={{
                          animation: isVisible ? `iconBounce 0.6s ease-out ${delay + 0.2}s both` : 'none'
                        }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3 text-base">What We Offer:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="flex items-center text-gray-300 text-sm"
                              style={{
                                animation: isVisible ? `fadeInUp 0.5s ease-out ${delay + 0.4 + featureIndex * 0.1}s both` : 'none'
                              }}
                            >
                              <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3 text-base">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li 
                              key={benefitIndex} 
                              className="flex items-center text-gray-300 text-sm"
                              style={{
                                animation: isVisible ? `fadeInUp 0.5s ease-out ${delay + 0.4 + benefitIndex * 0.1}s both` : 'none'
                              }}
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div 
                    className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 h-72 md:h-80 flex items-center justify-center border-2 border-white/30 shadow-2xl group hover:scale-105 transition-transform duration-500"
                    style={{
                      animation: isVisible ? `scaleIn 0.8s ease-out ${delay + 0.2}s both` : 'none'
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${service.gradient} rounded-3xl shadow-2xl mb-4 group-hover:rotate-12 transition-transform duration-500`}
                      >
                        <service.icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                      </div>
                      <p className="text-gray-300 font-medium text-sm md:text-base">Visual representation of {service.title.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
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
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes iconBounce {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
