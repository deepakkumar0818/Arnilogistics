'use client'

import { ExternalLink, Package, Search, FileText, UserPlus, ArrowRight } from 'lucide-react'

interface PortalLink {
  title: string
  description: string
  url: string
  icon: React.ReactNode
  color: string
}

export default function CustomerPortal() {
  const portalLinks: PortalLink[] = [
    {
      title: 'Available Loads',
      description: 'Browse and book available freight loads',
      url: 'https://customers.xpresstrax.com/Availloads.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <Package className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Customer Dashboard',
      description: 'Access your account and manage shipments',
      url: 'https://customers.xpresstrax.com/Default.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Track Shipment',
      description: 'Real-time tracking for your shipments',
      url: 'https://customers.xpresstrax.com/PGCommon/Tracing.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <Search className="h-6 w-6" />,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Register',
      description: 'Create a new customer account',
      url: 'https://customers.xpresstrax.com/PGCommon/Registration.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <UserPlus className="h-6 w-6" />,
      color: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-primary-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            Customer Portal Access
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-300">Manage Your</span>
            <span className="block text-accent-400">Logistics Online</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our customer portal to track shipments, view available loads, manage your account, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {link.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {link.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {link.description}
                </p>
                
                <div className="flex items-center text-accent-400 font-semibold text-sm group-hover:text-accent-300 transition-colors">
                  <span>Access Portal</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
          <p className="text-gray-300 text-lg mb-4">
            Need help accessing your account?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-accent-400 font-semibold hover:text-accent-300 transition-colors group"
          >
            Contact Support
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

