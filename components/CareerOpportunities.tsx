import { MapPin, Clock, Users, GraduationCap } from 'lucide-react'

export default function CareerOpportunities() {
  const positions = [
    {
      title: 'Senior Logistics Coordinator',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Operations',
      experience: '5+ years',
      description: 'Lead logistics operations and coordinate with international teams.',
      requirements: [
        'Bachelor\'s degree in Supply Chain or related field',
        '5+ years of logistics experience',
        'Strong communication skills',
        'Proficiency in logistics software'
      ]
    },
    {
      title: 'Transportation Manager',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      department: 'Transportation',
      experience: '7+ years',
      description: 'Manage transportation operations and optimize delivery routes.',
      requirements: [
        'Bachelor\'s degree in Logistics or related field',
        '7+ years of transportation management',
        'CDL license preferred',
        'Experience with route optimization software'
      ]
    },
    {
      title: 'Warehouse Operations Specialist',
      location: 'Chicago, IL',
      type: 'Full-time',
      department: 'Warehousing',
      experience: '3+ years',
      description: 'Oversee warehouse operations and inventory management.',
      requirements: [
        'High school diploma or equivalent',
        '3+ years of warehouse experience',
        'Forklift certification',
        'Strong attention to detail'
      ]
    },
    {
      title: 'Customer Success Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Customer Service',
      experience: '4+ years',
      description: 'Build and maintain relationships with key clients.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years of customer service experience',
        'Excellent communication skills',
        'Experience with CRM systems'
      ]
    },
    {
      title: 'Data Analyst',
      location: 'Austin, TX',
      type: 'Full-time',
      department: 'Analytics',
      experience: '2+ years',
      description: 'Analyze logistics data to improve operations and efficiency.',
      requirements: [
        'Bachelor\'s degree in Data Science or related field',
        '2+ years of data analysis experience',
        'Proficiency in SQL and Python',
        'Experience with data visualization tools'
      ]
    },
    {
      title: 'Software Developer',
      location: 'Seattle, WA',
      type: 'Full-time',
      department: 'Technology',
      experience: '3+ years',
      description: 'Develop and maintain logistics software applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of software development experience',
        'Proficiency in JavaScript, React, Node.js',
        'Experience with cloud platforms'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of dedicated professionals and help us deliver exceptional logistics solutions 
            to clients around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {position.type}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {position.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {position.experience}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {position.department}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{position.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-900 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-gray-200 text-lg mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you can contribute to our success.
            </p>
            <button className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
