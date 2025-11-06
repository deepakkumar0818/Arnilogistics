import { Search, Phone, FileText, Truck, CheckCircle } from 'lucide-react'

export default function ServiceProcess() {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures seamless logistics solutions from consultation 
            to delivery, with continuous support throughout your journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-accent-400/30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 mt-4 hover:shadow-xl transition-shadow border border-white/10">
                  <div className="text-center">
                    <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-400/30">
                      <step.icon className="h-8 w-8 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm text-white rounded-lg p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Contact us today to begin your logistics transformation journey. 
              Our experts are ready to provide you with a customized solution.
            </p>
            <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Start Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
