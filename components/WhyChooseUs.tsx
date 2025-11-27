import { Award, Users, Globe, TrendingUp } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Over 20 years of experience in logistics with a track record of delivering exceptional results for our clients.',
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
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose ARVI Logistics?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with decades of experience to deliver 
            logistics solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors border border-white/10">
                <reason.icon className="h-10 w-10 text-accent-400" />
              </div>
              <div className="text-4xl font-bold text-accent-400 mb-2">{reason.stat}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
