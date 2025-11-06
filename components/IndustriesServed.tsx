import { Package, Car, ShoppingCart, Building2, Wrench, Heart } from 'lucide-react'

export default function IndustriesServed() {
  const industries = [
    {
      icon: Package,
      title: 'Manufacturing',
      description: 'End-to-end logistics solutions for manufacturing companies.',
      services: ['Raw material transportation', 'Finished goods distribution', 'Inventory management', 'Quality control']
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Specialized logistics for the automotive industry.',
      services: ['Parts distribution', 'Just-in-time delivery', 'Assembly line support', 'Aftermarket logistics']
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Fast and reliable delivery solutions for retail businesses.',
      services: ['Last-mile delivery', 'Cross-border shipping', 'Returns processing', 'Inventory optimization']
    },
    {
      icon: Building2,
      title: 'Construction',
      description: 'Heavy-duty logistics for construction and infrastructure projects.',
      services: ['Equipment transportation', 'Material delivery', 'Project logistics', 'Waste management']
    },
    {
      icon: Wrench,
      title: 'Technology',
      description: 'Secure and efficient logistics for tech companies.',
      services: ['Sensitive cargo handling', 'Temperature control', 'Security protocols', 'Global distribution']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Compliant and reliable logistics for healthcare organizations.',
      services: ['Pharmaceutical delivery', 'Medical equipment transport', 'Cold chain logistics', 'Regulatory compliance']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, providing specialized logistics 
            solutions tailored to meet the unique requirements of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-accent-500/20 p-3 rounded-lg mr-4 border border-accent-400/30">
                  <industry.icon className="h-8 w-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <ul className="space-y-2">
                {industry.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-300 text-lg mb-6">
              We work with clients across all industries and can develop customized solutions 
              to meet your specific logistics requirements, no matter how unique.
            </p>
            <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
