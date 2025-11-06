import { Network, TrendingUp, Globe, Shield, Users, Award } from 'lucide-react'

export default function PartnershipPrograms() {
  const programs = [
    {
      icon: Network,
      title: 'Strategic Partnerships',
      description: 'Long-term partnerships with complementary businesses to expand our service offerings.',
      benefits: [
        'Shared resources and expertise',
        'Expanded market reach',
        'Joint marketing opportunities',
        'Revenue sharing programs'
      ],
      requirements: [
        'Established business operations',
        'Complementary service offerings',
        'Strong financial standing',
        'Commitment to quality standards'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Franchise Opportunities',
      description: 'Own and operate your own ARVI Logistics franchise in your local market.',
      benefits: [
        'Proven business model',
        'Comprehensive training and support',
        'Marketing and branding support',
        'Ongoing operational guidance'
      ],
      requirements: [
        'Minimum capital investment',
        'Business management experience',
        'Strong local market knowledge',
        'Commitment to brand standards'
      ]
    },
    {
      icon: Globe,
      title: 'International Agents',
      description: 'Represent ARVI Logistics in international markets and expand our global presence.',
      benefits: [
        'Exclusive territory rights',
        'Commission-based compensation',
        'Marketing support and materials',
        'Training and certification programs'
      ],
      requirements: [
        'Local market expertise',
        'Established business network',
        'Language proficiency',
        'Understanding of local regulations'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partnership Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our network of partners and help us deliver exceptional logistics solutions 
            while growing your own business.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-accent-400/30">
                    <program.icon className="h-8 w-8 text-accent-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>

                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <button className="bg-accent-500 text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                  Learn More About {program.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <Award className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-accent-400 mb-2">150+</div>
            <div className="text-gray-300">Active Partners</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <Globe className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-accent-400 mb-2">50+</div>
            <div className="text-gray-300">Countries Covered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <TrendingUp className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-accent-400 mb-2">25%</div>
            <div className="text-gray-300">Average Growth</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
            <Shield className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-accent-400 mb-2">99%</div>
            <div className="text-gray-300">Partner Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
