import { Heart, Shield, Lightbulb, Users, Award, Globe } from 'lucide-react'

export default function OurValues() {
  const values = [
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our priority.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent, dependable service that our clients can count on, every single time.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our solutions to meet the changing needs of modern logistics.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative spirit that brings together diverse talents to achieve common goals.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising commitment to delivering the highest quality services and solutions.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding and adapting to diverse markets and cultures worldwide.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide every decision we make and every service we provide. 
            They are the foundation of our company culture and our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
