import { Phone, Mail, MapPin, Send, Building2, Users, Headphones, FileText, CreditCard, Truck } from 'lucide-react'

interface EmailDepartment {
  label: string
  email: string
  icon: React.ComponentType<{ className?: string }>
}

export default function ContactInfo() {
  // Helper function to generate Gmail compose URL
  const getGmailComposeUrl = (email: string) => {
    return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`
  }

  const emailDepartments: EmailDepartment[] = [
    { label: 'Sales', email: 'Sales@arvilogisticsinc.com', icon: Building2 },
    { label: 'Carriers', email: 'carriers@arvilogisticsinc.com', icon: Truck },
    { label: 'HR', email: 'hr@arvilogisticsinc.com', icon: Users },
    { label: 'Customer Service', email: 'customerservice@arvilogisticsinc.com', icon: Headphones },
    { label: 'POD', email: 'pod@arvilogisticsinc.com', icon: FileText },
    { label: 'Billing', email: 'billing@arvilogisticsinc.com', icon: CreditCard },
  ]

  const headquartersAddress = {
    street: '150 Dessen Drive',
    city: 'West Hazleton, PA',
    country: 'United States, Pennsylvania',
    fullAddress: '150 Dessen Drive, West Hazleton, PA',
    googleMapsUrl: 'https://maps.google.com/?q=150+Dessen+Drive+West+Hazleton+PA',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d-75.9!3d40.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzAwLjAiTiA3NcKwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  }


  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-300 hover:scale-105">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you, 
            and we'll be happy to assist with your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card - Professional Design */}
            <div 
            className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-accent-400/30 relative overflow-hidden transform hover:scale-[1.02] animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center mb-8 pb-6 border-b border-white/10">
                  <div className="bg-gradient-to-br from-accent-500/20 to-accent-500/10 p-4 rounded-xl mr-4 border border-accent-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-500/30">
                  <Mail className="h-7 w-7 text-accent-400 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                <div>
                  <h3 className="text-2xl font-bold text-white transform transition-all duration-300 group-hover:text-accent-300">Email</h3>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Department Contacts</p>
                </div>
                </div>

              {/* Email List */}
              <div className="space-y-2.5 mb-6">
                {emailDepartments.map((dept, index) => {
                  const IconComponent = dept.icon
                  return (
                    <a
                      key={index}
                      href={getGmailComposeUrl(dept.email)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/email flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-accent-400/20 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center border border-accent-400/20 group-hover/email:bg-accent-500/20 group-hover/email:border-accent-400/30 transition-all duration-200">
                        <IconComponent className="h-4 w-4 text-accent-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{dept.label}</div>
                        <div className="text-sm text-white font-medium truncate group-hover/email:text-accent-300 transition-colors duration-200">{dept.email}</div>
                      </div>
                      <Send className="h-4 w-4 text-gray-500 group-hover/email:text-accent-400 flex-shrink-0 opacity-0 group-hover/email:opacity-100 transition-all duration-200" />
                    </a>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-4 leading-relaxed flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse-slow"></span>
                  <span>We respond to all emails within 24 hours</span>
                </p>
                <a 
                  href={getGmailComposeUrl('customerservice@arvilogisticsinc.com')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 py-3.5 rounded-xl font-semibold hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-center relative overflow-hidden group/button"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Email
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Headquarters Card with Map */}
          <div 
            className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-accent-400/30 relative overflow-hidden transform hover:scale-[1.02] animate-fade-in-up flex flex-col"
            style={{ animationDelay: '300ms' }}
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center mb-4 pb-4 border-b border-white/10">
                <div className="bg-gradient-to-br from-accent-500/20 to-accent-500/10 p-4 rounded-xl mr-4 border border-accent-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-500/30">
                  <MapPin className="h-7 w-7 text-accent-400 transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                <div>
                  <h3 className="text-2xl font-bold text-white transform transition-all duration-300 group-hover:text-accent-300">Headquarters</h3>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Our Main Office</p>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mb-4 rounded-xl overflow-hidden border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(headquartersAddress.fullAddress)}&output=embed&hl=en&z=15`}
                  width="100%"
                  height="328"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[328px]"
                  title="Arvi Logistics Headquarters Location"
                />
              </div>

              {/* Address Details */}
              <div className="mb-4">
                <div className="flex items-start gap-4 p-5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
                  <MapPin className="h-6 w-6 text-accent-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-base text-white font-semibold leading-relaxed">{headquartersAddress.street}</p>
                    <p className="text-base text-gray-300 mt-2 font-medium">{headquartersAddress.city}</p>
                    <p className="text-sm text-gray-400 mt-2">{headquartersAddress.country}</p>
                  </div>
                </div>
              </div>

              {/* Footer - Pushed to bottom */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-3 leading-relaxed flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse-slow"></span>
                  <span>Visit our main office during business hours</span>
                </p>
                <a 
                  href={headquartersAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 py-3.5 rounded-xl font-semibold hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-center relative overflow-hidden group/button"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Card - Separate Section */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <div className="group bg-gradient-to-r from-accent-500/20 via-accent-500/15 to-accent-500/20 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-accent-400/30 hover:border-accent-400/50 relative overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-accent-500/30 to-accent-500/20 p-6 rounded-2xl border-2 border-accent-400/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-500/40">
                  <Phone className="h-10 w-10 text-accent-300 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-3 transform transition-all duration-300 group-hover:text-accent-300">
                  24/7 Phone Support
                </h3>
                <div className="mb-4">
                  <a 
                    href="tel:+18772950849"
                    className="text-2xl md:text-3xl font-bold text-accent-300 hover:text-accent-200 transition-colors duration-300 inline-block"
                  >
                    +1 877-295-0849
                  </a>
                </div>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  Available 24/7 for urgent logistics needs. Our team is always ready to assist you.
                </p>
                <a 
                  href="tel:+18772950849"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-8 py-4 rounded-xl font-semibold hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group/button"
                >
                  <Phone className="h-5 w-5" />
                  <span className="relative z-10">Call Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md text-white rounded-2xl p-10 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-3xl font-bold mb-4 transform transition-all duration-300 hover:scale-105">Need Immediate Assistance?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            For urgent logistics needs, emergencies, or time-critical shipments, 
            our 24/7 emergency hotline is always available to provide immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18772950849"
              className="group/btn bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-8 py-4 rounded-xl font-semibold hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Call Emergency Line</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
            </a>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
              Track Your Shipment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
