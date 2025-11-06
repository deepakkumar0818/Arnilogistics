import { Truck, Package, MapPin, Clock, Users } from 'lucide-react'

export default function DetailedServices() {
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From transportation to warehousing, we provide comprehensive logistics solutions 
            that keep your business moving forward efficiently and cost-effectively.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mr-4 border border-white/10">
                    <service.icon className="h-8 w-8 text-accent-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-80 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <service.icon className="h-24 w-24 text-accent-400 mx-auto mb-4" />
                    <p className="text-gray-300 font-medium">Visual representation of {service.title.toLowerCase()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
