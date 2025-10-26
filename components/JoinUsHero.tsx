import { Users, Handshake, TrendingUp } from 'lucide-react'

export default function JoinUsHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 pt-44">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Be part of a dynamic team that's shaping the future of logistics. 
            Explore career opportunities and partnership programs that help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
            <p className="text-gray-200 mb-6">
              Join our talented team and advance your career in the logistics industry.
            </p>
            <button className="bg-yellow-400 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              View Jobs
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Partnerships</h3>
            <p className="text-gray-200 mb-6">
              Partner with us to expand your business and reach new markets.
            </p>
            <button className="bg-yellow-400 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Partner With Us
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <p className="text-gray-200 mb-6">
              Grow with us as we continue to expand globally and innovate.
            </p>
            <button className="bg-yellow-400 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
