import { Linkedin, Mail } from 'lucide-react'

export default function LeadershipTeam() {
  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: 'With over 20 years in logistics, Sarah leads our strategic vision and global expansion.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'sarah@rvlogistics.com'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      bio: 'Michael ensures operational excellence across all our logistics services worldwide.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'michael@rvlogistics.com'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'Emily drives our digital transformation and technology innovation initiatives.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'emily@rvlogistics.com'
    },
    {
      name: 'David Thompson',
      position: 'Chief Financial Officer',
      bio: 'David manages our financial strategy and ensures sustainable business growth.',
      image: '/api/placeholder/300/300',
      linkedin: '#',
      email: 'david@rvlogistics.com'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced leaders who drive our success and shape the future of logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-200 rounded-lg mb-6 overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-6xl text-primary-400">👤</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary-600 transition-colors">
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
