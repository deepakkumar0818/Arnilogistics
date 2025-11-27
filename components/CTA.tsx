import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Logistics?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who trust ARVI Logistics for their transportation and supply chain needs. 
          Get started today and experience the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://rxo.com/get-a-quote/?service=Truckload" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="tel:+18772950849"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Us Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="h-6 w-6 text-accent-400" />
            <div>
              <div className="text-sm text-gray-300">Call us</div>
              <div className="font-semibold">+1 877-295-0849</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="h-6 w-6 text-accent-400" />
            <div>
              <div className="text-sm text-gray-300">Email us</div>
              <div className="font-semibold">customerservice@arvilogisticsinc.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
