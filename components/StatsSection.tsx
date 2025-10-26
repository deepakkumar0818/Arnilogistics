import { Truck, Globe, Award, Users } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: Truck,
      number: '10,000+',
      label: 'Successful Deliveries',
      description: 'Monthly shipments completed with excellence'
    },
    {
      icon: Globe,
      number: '150+',
      label: 'Countries Served',
      description: 'Global reach across all continents'
    },
    {
      icon: Award,
      number: '99.8%',
      label: 'On-Time Delivery',
      description: 'Industry-leading delivery performance'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Expert Team',
      description: 'Dedicated logistics professionals'
    }
  ]

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to excellence and reliability in logistics services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-primary-900" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-200 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
