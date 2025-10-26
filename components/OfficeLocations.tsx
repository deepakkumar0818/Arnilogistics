import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function OfficeLocations() {
  const offices = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Logistics Boulevard, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@rvlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      type: 'Headquarters',
      services: ['Full Services', '24/7 Support', 'Emergency Services']
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
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '10 Logistics Lane, London, EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@rvlogistics.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT',
      type: 'International Office',
      services: ['European Operations', 'Customs Services']
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '15 Marina Bay, Singapore 018982',
      phone: '+65 6123 4567',
      email: 'singapore@rvlogistics.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
      type: 'International Office',
      services: ['Asia-Pacific Operations', 'Port Services']
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: '20 Business Bay, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@rvlogistics.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
      type: 'International Office',
      services: ['Middle East Operations', 'Air Cargo Hub']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Offices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices around the world, we provide local expertise and global reach 
            to serve your logistics needs wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                  <p className="text-gray-600">{office.country}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  office.type === 'Headquarters' 
                    ? 'bg-primary-100 text-primary-600' 
                    : office.type === 'Regional Office'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {office.type}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <p className="text-gray-600 text-sm">{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <p className="text-gray-600 text-sm">{office.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <p className="text-gray-600 text-sm">{office.email}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <p className="text-gray-600 text-sm">{office.hours}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {office.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Contact This Office
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Local Partner?</h3>
          <p className="text-gray-200 text-lg mb-6 max-w-3xl mx-auto">
            Don't see your location listed? We have an extensive network of trusted partners 
            worldwide who can provide local support and expertise.
          </p>
          <button className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Find Local Partners
          </button>
        </div>
      </div>
    </section>
  )
}
