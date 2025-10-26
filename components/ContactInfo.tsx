import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main: +1 (555) 123-4567',
        'Emergency: +1 (555) 123-4568',
        'International: +1 (555) 123-4569'
      ],
      description: 'Available 24/7 for urgent logistics needs',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: info@rvlogistics.com',
        'Sales: sales@rvlogistics.com',
        'Support: support@rvlogistics.com'
      ],
      description: 'We respond to all emails within 24 hours',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: [
        '123 Logistics Boulevard',
        'Transport City, TC 12345',
        'United States'
      ],
      description: 'Visit our main office during business hours',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      description: 'Emergency services available 24/7',
      action: 'View Hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: [
        'Available on our website',
        'Response time: < 2 minutes',
        'Monday - Friday: 9:00 AM - 5:00 PM'
      ],
      description: 'Get instant answers to your questions',
      action: 'Start Chat'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you, 
            and we'll be happy to assist with your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <method.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
              </div>

              <div className="space-y-2 mb-6">
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 font-medium">{detail}</p>
                ))}
              </div>

              <p className="text-gray-500 text-sm mb-6">{method.description}</p>

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-200 text-lg mb-6 max-w-3xl mx-auto">
            For urgent logistics needs, emergencies, or time-critical shipments, 
            our 24/7 emergency hotline is always available to provide immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Call Emergency Line
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors">
              Track Your Shipment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
