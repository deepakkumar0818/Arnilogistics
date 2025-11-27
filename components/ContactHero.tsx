export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-12 md:py-16 pt-32 md:pt-36 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/20 text-accent-300 text-sm font-semibold border border-accent-400/30 backdrop-blur-sm">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team to discuss your logistics needs. 
            We're here to help you find the perfect solution for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
