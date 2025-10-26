import { Award, Users, Globe, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Over 15 years of experience in logistics with a track record of delivering exceptional results for our clients.',
      stat: '99.8%'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our dedicated professionals bring deep industry knowledge and commitment to every project.',
      stat: '500+'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive worldwide network ensuring seamless logistics solutions across all continents.',
      stat: '50+'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'We help businesses scale efficiently with scalable logistics solutions that grow with your needs.',
      stat: '25%'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose RV Logistics?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with decades of experience to deliver 
            logistics solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <reason.icon className="h-10 w-10 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{reason.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
