import { Calendar, Target, TrendingUp, Users } from 'lucide-react'

export default function OurStory() {
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as a small local transportation company with a vision to revolutionize logistics.',
      icon: Calendar
    },
    {
      year: '2012',
      title: 'Regional Expansion',
      description: 'Expanded operations across multiple states, establishing our regional presence.',
      icon: Target
    },
    {
      year: '2016',
      title: 'Technology Integration',
      description: 'Implemented cutting-edge logistics technology and real-time tracking systems.',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Achieved international expansion, serving clients across 50+ countries.',
      icon: Users
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a global logistics leader, our journey is defined 
            by innovation, reliability, and unwavering commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Building Excellence Since 2008</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                RV Logistics was founded with a simple yet powerful mission: to provide reliable, 
                efficient, and innovative logistics solutions that help businesses thrive in an 
                increasingly connected world.
              </p>
              <p>
                What started as a small local transportation company has grown into a comprehensive 
                logistics provider serving clients across the globe. Our success is built on the 
                foundation of trust, innovation, and an unwavering commitment to excellence.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in logistics, leveraging 
                cutting-edge technology and industry expertise to deliver solutions that exceed 
                expectations and drive our clients' success.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-gray-600">Monthly Shipments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-2 rounded-lg mr-4">
                        <milestone.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="text-primary-600 font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
