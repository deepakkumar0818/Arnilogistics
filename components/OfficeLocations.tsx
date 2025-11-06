import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function OfficeLocations() {
  const offices = [
    {
      city: 'West Hazleton',
      country: 'United States',
      address: '150 Dessen Drive, West Hazleton, PA, United States, Pennsylvania',
      phone: '+1 877-295-0849',
      email: 'accounts@arvitransport.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      type: 'Headquarters',
      services: ['Full Services', '24/7 Support', ]
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
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Global Offices
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With offices around the world, we provide local expertise and global reach 
            to serve your logistics needs wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg transition-shadow border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{office.city}</h3>
                  <p className="text-gray-300">{office.country}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  office.type === 'Headquarters' 
                    ? 'bg-accent-500/20 text-accent-400 border border-accent-400/30' 
                    : office.type === 'Regional Office'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    : 'bg-green-500/20 text-green-400 border border-green-400/30'
                }`}>
                  {office.type}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent-400 mr-3 mt-0.5" />
                  <p className="text-gray-300 text-sm">{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-400 mr-3" />
                  <p className="text-gray-300 text-sm">{office.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-400 mr-3" />
                  <p className="text-gray-300 text-sm">{office.email}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent-400 mr-3" />
                  <p className="text-gray-300 text-sm">{office.hours}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {office.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs border border-white/10">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-accent-500 text-primary-900 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                Contact This Office
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Need a Local Partner?</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Don't see your location listed? We have an extensive network of trusted partners 
            worldwide who can provide local support and expertise.
          </p>
          <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
            Find Local Partners
          </button>
        </div>
      </div>
    </section>
  )
}
