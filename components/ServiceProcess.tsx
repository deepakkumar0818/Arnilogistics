'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Phone, FileText, Truck, CheckCircle } from 'lucide-react'

export default function ServiceProcess() {
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

  const steps = [
    {
      icon: Search,
      title: 'Consultation',
      description: 'We analyze your logistics needs and requirements to understand your business goals.',
      details: [
        'Needs assessment',
        'Route optimization analysis',
        'Cost-benefit evaluation',
        'Risk assessment'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Quote & Planning',
      description: 'Receive a detailed quote and customized logistics plan tailored to your needs.',
      details: [
        'Custom pricing',
        'Service level agreements',
        'Timeline planning',
        'Resource allocation'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete all necessary documentation and compliance requirements.',
      details: [
        'Contract preparation',
        'Compliance documentation',
        'Insurance setup',
        'Customs paperwork'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Execution',
      description: 'We execute your logistics plan with real-time monitoring and updates.',
      details: [
        'Real-time tracking',
        'Regular updates',
        'Issue resolution',
        'Quality control'
      ],
      gradient: 'from-yellow-500 to-accent-500'
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Follow-up',
      description: 'Successful delivery with post-service follow-up and continuous improvement.',
      details: [
        'Delivery confirmation',
        'Performance review',
        'Feedback collection',
        'Process optimization'
      ],
      gradient: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
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
            Our Process
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
            Our streamlined process ensures seamless logistics solutions from consultation 
            to delivery, with continuous support throughout your journey.
          </p>
        </div>

        <div className="relative">
          {/* Animated connection line */}
          <div 
            className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 opacity-30"
            style={{
              animation: isVisible ? 'drawLine 2s ease-out 0.5s both' : 'none',
              transformOrigin: 'left'
            }}
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const delay = 0.8 + index * 0.2
              
              return (
                <div 
                  key={index} 
                  className="relative"
                  style={{
                    animation: isVisible ? `stepBounceIn 0.8s ease-out ${delay}s both` : 'none'
                  }}
                >
                  {/* Step number circle */}
                  <div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 text-primary-900 rounded-full flex items-center justify-center font-black text-lg z-10 shadow-lg border-4 border-primary-900"
                    style={{
                      animation: isVisible ? `numberPulse 1s ease-out ${delay + 0.3}s both` : 'none'
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl shadow-xl p-6 mt-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-white/30 group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="text-center relative z-10">
                      <div 
                        className={`bg-gradient-to-br ${step.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                      
                      <ul className="space-y-2 text-left">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex} 
                            className="flex items-center text-sm text-gray-300"
                            style={{
                              animation: isVisible ? `fadeInUp 0.4s ease-out ${delay + 0.4 + detailIndex * 0.1}s both` : 'none'
                            }}
                          >
                            <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div 
          className="mt-20 text-center"
          style={{
            animation: isVisible ? 'fadeInUp 1s ease-out 2s both' : 'none'
          }}
        >
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl text-white rounded-3xl p-10 max-w-4xl mx-auto border-2 border-white/30 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Contact us today to begin your logistics transformation journey. 
              Our experts are ready to provide you with a customized solution.
            </p>
            <a 
              href="https://rxo.com/get-a-quote/?service=Truckload" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent-500 text-primary-900 px-10 py-4 rounded-xl font-bold hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Consultation
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
        @keyframes drawLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes stepBounceIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.5);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes numberPulse {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            transform: translate(-50%, 0) scale(1.2);
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
      `}</style>
    </section>
  )
}
