import { Heart, DollarSign, GraduationCap, Home, Users, Trophy, Coffee, Clock } from 'lucide-react'

export default function BenefitsAndCulture() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based bonuses and profit sharing.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development opportunities, training programs, and tuition reimbursement.'
    },
    {
      icon: Home,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, remote work options, and generous time off policies.'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative culture with supportive colleagues and strong team dynamics.'
    },
    {
      icon: Trophy,
      title: 'Recognition Programs',
      description: 'Employee recognition programs, awards, and career advancement opportunities.'
    },
    {
      icon: Coffee,
      title: 'Company Culture',
      description: 'Inclusive, diverse, and innovative culture that values every team member.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Flexible working hours and the ability to manage your own schedule.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits & Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in taking care of our team members and creating an environment where everyone can thrive, 
            grow, and contribute to our shared success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Values in Action</h3>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Our company culture is built on respect, integrity, innovation, and collaboration. 
              We celebrate diversity, encourage creativity, and support each other's growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Inclusive Environment</h4>
              <p className="text-gray-200 text-sm">
                We foster an inclusive workplace where everyone feels valued and respected.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Excellence</h4>
              <p className="text-gray-200 text-sm">
                We strive for excellence in everything we do and continuously improve our processes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Community Impact</h4>
              <p className="text-gray-200 text-sm">
                We're committed to making a positive impact in the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
