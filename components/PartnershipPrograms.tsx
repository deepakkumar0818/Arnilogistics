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
      description: 'Own and operate your own RV Logistics franchise in your local market.',
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
      description: 'Represent RV Logistics in international markets and expand our global presence.',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of partners and help us deliver exceptional logistics solutions 
            while growing your own business.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <program.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>

                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Learn More About {program.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600">Active Partners</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Globe className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Countries Covered</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">25%</div>
            <div className="text-gray-600">Average Growth</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Partner Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
