import { Smartphone, Monitor, BarChart3, Shield, Globe, Zap } from 'lucide-react'

export default function TechnologySolutions() {
  const technologies = [
    {
      icon: Smartphone,
      title: 'Mobile Tracking',
      description: 'Real-time shipment tracking through our mobile app and web portal.',
      features: ['GPS tracking', 'Push notifications', 'Photo updates', 'Delivery confirmations']
    },
    {
      icon: Monitor,
      title: 'Dashboard Analytics',
      description: 'Comprehensive analytics and reporting tools for better decision making.',
      features: ['Performance metrics', 'Cost analysis', 'Route optimization', 'Custom reports']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to optimize your supply chain operations.',
      features: ['Demand forecasting', 'Risk prediction', 'Performance optimization', 'Trend analysis']
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: 'Advanced security protocols to protect your valuable cargo.',
      features: ['Tamper detection', 'Access control', 'Video monitoring', 'Alarm systems']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connected systems across our worldwide network of partners.',
      features: ['International tracking', 'Multi-language support', 'Currency conversion', 'Local expertise']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamlined processes through intelligent automation solutions.',
      features: ['Automated routing', 'Smart scheduling', 'Inventory management', 'Process optimization']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technology to provide intelligent, efficient, 
            and transparent logistics solutions for the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg transition-shadow border border-white/10">
              <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-accent-400/30">
                <tech.icon className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-300 mb-4">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Our technology platform integrates seamlessly with your existing systems, 
            providing real-time visibility and control over your entire supply chain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-gray-300">Data Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
