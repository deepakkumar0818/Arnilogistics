import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function OfficeLocations() {
  const offices = [
    {
      city: 'West Hazleton',
      country: 'United States',
      address: '150 Dessen Drive, West Hazleton, PA, United States, Pennsylvania',
      phone: '+1 877-295-0849',
      email: 'customerservice@arvilogisticsinc.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      type: 'Headquarters',
      services: ['Full Services', '24/7 Support']
    },
    {
      city: 'Los Angeles',
      country: 'United States',
      address: '456 Transportation Way, Los Angeles, CA 90210',
      phone: '+1 (555) 123-4568',
      email: 'la@rvlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      type: 'Regional Office',
      services: ['Full Services', 'West Coast Operations']
    },
    {
      city: 'Chicago',
      country: 'United States',
      address: '789 Freight Street, Chicago, IL 60601',
      phone: '+1 (555) 123-4569',
      email: 'chicago@rvlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      type: 'Regional Office',
      services: ['Full Services', 'Midwest Operations']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-300 hover:scale-105">
            Our Global Offices
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With offices around the world, we provide local expertise and global reach 
            to serve your logistics needs wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-accent-400/30 hover:bg-white/15 transform hover:scale-105 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white transform transition-all duration-300 group-hover:text-accent-300">{office.city}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{office.country}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 group-hover:scale-110 ${
                    office.type === 'Headquarters' 
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-400/30 group-hover:bg-accent-500/30' 
                      : office.type === 'Regional Office'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30 group-hover:bg-blue-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-400/30 group-hover:bg-green-500/30'
                  }`}>
                    {office.type}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <MapPin className="h-5 w-5 text-accent-400 mr-3 mt-0.5 transform transition-all duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{office.address}</p>
                  </div>
                  <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                    <Phone className="h-5 w-5 text-accent-400 mr-3 transform transition-all duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{office.phone}</p>
                  </div>
                  <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                    <Mail className="h-5 w-5 text-accent-400 mr-3 transform transition-all duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{office.email}</p>
                  </div>
                  <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                    <Clock className="h-5 w-5 text-accent-400 mr-3 transform transition-all duration-300 group-hover:scale-110" />
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{office.hours}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex} 
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs border border-white/10 transform transition-all duration-300 hover:bg-accent-500/20 hover:border-accent-400/30 hover:text-accent-300 hover:scale-105"
                        style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group/btn w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 py-3 rounded-lg font-semibold hover:from-accent-400 hover:to-accent-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50 relative overflow-hidden">
                  <span className="relative z-10">Contact This Office</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
