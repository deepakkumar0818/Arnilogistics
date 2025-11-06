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
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a global logistics leader, our journey is defined 
            by innovation, reliability, and unwavering commitment to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Building Excellence Since 2008</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                ARVI Logistics was founded with a simple yet powerful mission: to provide reliable, 
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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">500+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">150+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">10K+</div>
                <div className="text-gray-300">Monthly Shipments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-400/30"></div>
            {/* Timeline line for mobile - left side */}
            <div className="lg:hidden absolute left-4 w-1 h-full bg-accent-400/30"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 lg:mb-12 ${index % 2 === 0 ? 'lg:flex-row flex-row' : 'lg:flex-row-reverse flex-row'}`}>
                {/* Mobile: full width, Desktop: half width */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right text-left pl-12' : 'lg:pl-8 lg:text-left text-left pl-12'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 border border-white/10">
                    <div className={`flex items-center mb-3 sm:mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="bg-accent-500/20 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4 border border-accent-400/30 flex-shrink-0">
                        <milestone.icon className="h-4 w-4 sm:h-6 sm:w-6 text-accent-400" />
                      </div>
                      <span className="text-accent-400 font-bold text-base sm:text-lg">{milestone.year}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                    <p className="text-sm sm:text-base text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                {/* Timeline dot - positioned for mobile and desktop */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent-500 rounded-full border-2 sm:border-4 border-primary-900 shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
