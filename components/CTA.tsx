import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Logistics?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust RV Logistics for their transportation and supply chain needs. 
          Get started today and experience the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="h-6 w-6 text-yellow-400" />
            <div>
              <div className="text-sm text-gray-200">Call us</div>
              <div className="font-semibold">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="h-6 w-6 text-yellow-400" />
            <div>
              <div className="text-sm text-gray-200">Email us</div>
              <div className="font-semibold">info@rvlogistics.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
