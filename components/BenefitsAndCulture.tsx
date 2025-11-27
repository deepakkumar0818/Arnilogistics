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
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefits & Culture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in taking care of our team members and creating an environment where everyone can thrive, 
            grow, and contribute to our shared success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-accent-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500/30 transition-colors border border-accent-400/30">
                <benefit.icon className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white border border-white/20 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">A Team Built on Trust</h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At ARVI Logistics, we keep things simple — we believe in treating people right and doing what we say we’ll do. We’ve built our business by hiring good people, backing them up, and giving them the space to succeed.
              </p>
              <p>
                We don’t run things like a big corporate office. Everyone here knows each other, communicates directly, and works toward the same goal — taking care of our customers and carriers. When someone needs help, we step in. When someone does a great job, we notice.
              </p>
              <p>
                That’s how we’ve operated since day one, and it’s how we plan to keep growing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-accent-500/10 to-primary-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white border border-accent-400/30 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-sm md:text-base tracking-[0.2em] uppercase text-gray-300 mb-4 animate-slogan">
              Our Promise
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-100 leading-relaxed italic font-semibold">
              “We stand behind every load, every partner, and every promise.”
            </p>
            <p className="text-sm md:text-base text-gray-300 mt-5 leading-relaxed italic">
              At ARVI Logistics, our mission is simple: Move freight efficiently, build relationships
              honestly, and grow together as a family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
