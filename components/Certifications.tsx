import { Award, Shield, CheckCircle, Star } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      icon: Award,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System',
      icon: Shield,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'C-TPAT',
      description: 'Customs-Trade Partnership Against Terrorism',
      icon: CheckCircle,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'TAPA',
      description: 'Transported Asset Protection Association',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications & Standards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to quality and security is validated by industry-leading certifications 
            and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-white/10">
              <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-400/30">
                <cert.icon className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              These certifications demonstrate our unwavering commitment to maintaining the highest standards 
              of quality, security, and environmental responsibility. We continuously invest in compliance, 
              training, and process improvement to ensure we meet and exceed industry standards while 
              protecting our clients' interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
