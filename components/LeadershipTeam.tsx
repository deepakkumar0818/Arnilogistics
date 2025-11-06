import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function LeadershipTeam() {
  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: 'With over 20 years in logistics, Sarah leads our strategic vision and global expansion.',
      image: '/profiles/handsome-truck-driver-standing-outside_1158146-22691.avif',
      linkedin: '#',
      email: 'sarah@rvlogistics.com'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      bio: 'Michael ensures operational excellence across all our logistics services worldwide.',
      image: '/profiles/man-stands-front-truck-with-his-arms-crossed_1004054-19551.avif',
      linkedin: '#',
      email: 'michael@rvlogistics.com'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'Emily drives our digital transformation and technology innovation initiatives.',
      image: '/profiles/man-working-as-truck-driver_23-2151489855.avif',
      linkedin: '#',
      email: 'emily@rvlogistics.com'
    },
    {
      name: 'David Thompson',
      position: 'Chief Financial Officer',
      bio: 'David manages our financial strategy and ensures sustainable business growth.',
      image: '/profiles/man-working-as-truck-driver-posing_23-2151489637.avif',
      linkedin: '#',
      email: 'david@rvlogistics.com'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced leaders who drive our success and shape the future of logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg mb-6 overflow-hidden group-hover:shadow-2xl group-hover:shadow-accent-500/20 transition-all duration-500 border border-white/10 group-hover:border-accent-400/50 group-hover:scale-105">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-accent-400 font-medium mb-4">{member.position}</p>
              <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.linkedin} 
                  className="text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-gray-400 hover:text-accent-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
