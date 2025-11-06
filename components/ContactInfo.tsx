import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main: +1 877-295-0849',
        'Available 24/7 for urgent logistics needs'
      ],
      description: 'Available 24/7 for urgent logistics needs',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: accounts@arvitransport.com'
      ],
      description: 'We respond to all emails within 24 hours',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: [
        '150 Dessen Drive',
        'West Hazleton, PA',
        'United States, Pennsylvania'
      ],
      description: 'Visit our main office during business hours',
      action: 'Get Directions'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you, 
            and we'll be happy to assist with your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <method.icon className="h-8 w-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{method.title}</h3>
              </div>

              <div className="space-y-2 mb-6">
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 font-medium">{detail}</p>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-6">{method.description}</p>

              <button className="w-full bg-accent-500 text-primary-900 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm text-white rounded-lg p-8 text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            For urgent logistics needs, emergencies, or time-critical shipments, 
            our 24/7 emergency hotline is always available to provide immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Call Emergency Line
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Track Your Shipment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
