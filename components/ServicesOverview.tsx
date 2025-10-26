import { Package, Truck, Ship, Plane, Clock, Shield } from 'lucide-react'

export default function ServicesOverview() {
  const services = [
    {
      icon: Truck,
      title: 'Road Transportation',
      description: 'Efficient and reliable road freight services across all distances.',
      features: ['Same-day delivery', 'Express shipping', 'Temperature-controlled'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Global shipping solutions for international trade and commerce.',
      features: ['FCL & LCL services', 'Port-to-port delivery', 'Customs clearance'],
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Plane,
      title: 'Air Cargo',
      description: 'Fast and secure air freight services for time-sensitive shipments.',
      features: ['Express air freight', 'Charter services', 'Priority handling'],
      gradient: 'from-sky-500 to-sky-600'
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'State-of-the-art storage and distribution facilities.',
      features: ['Climate control', 'Inventory management', 'Pick & pack services'],
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: 'Supply Chain',
      description: 'End-to-end supply chain optimization and management.',
      features: ['Demand planning', 'Vendor management', 'Real-time tracking'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive insurance and security solutions.',
      features: ['Cargo insurance', 'Security protocols', 'Compliance monitoring'],
      gradient: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Logistics Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From transportation to warehousing, we provide end-to-end logistics services 
            that keep your business moving forward with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group-hover:-translate-y-2">
                <div className="flex items-start mb-6">
                  <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors flex items-center group">
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
            </div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Logistics?</h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Get a customized quote and discover how our solutions can optimize your supply chain.
              </p>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Your Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}