import { FileText, Phone, Users, CheckCircle } from 'lucide-react'

export default function ApplicationProcess() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our online application form and upload your resume.',
      details: [
        'Fill out the application form',
        'Upload your resume and cover letter',
        'Provide relevant work samples',
        'Complete skills assessment'
      ]
    },
    {
      icon: Phone,
      title: 'Initial Screening',
      description: 'Phone or video interview with our HR team to discuss your background.',
      details: [
        '30-minute initial conversation',
        'Review of qualifications and experience',
        'Discussion of role expectations',
        'Answer any questions you may have'
      ]
    },
    {
      icon: Users,
      title: 'Team Interview',
      description: 'Meet with the hiring manager and team members for a comprehensive interview.',
      details: [
        'Technical skills assessment',
        'Cultural fit evaluation',
        'Role-specific scenarios',
        'Meet potential colleagues'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Final Decision',
      description: 'Receive our decision and next steps for joining the team.',
      details: [
        'Reference checks',
        'Background verification',
        'Job offer and negotiation',
        'Onboarding preparation'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined application process is designed to be transparent, efficient, 
            and respectful of your time while ensuring we find the right fit.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-primary-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 mt-4 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Look For</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Strong work ethic and dedication
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Relevant experience and skills
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Cultural fit and alignment with values
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Growth mindset and willingness to learn
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Team collaboration skills
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Problem-solving abilities
              </li>
            </ul>
          </div>

          <div className="bg-primary-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Ready to Apply?</h3>
            <p className="text-gray-200 mb-6">
              Take the first step towards joining our team. We're excited to learn about your 
              background and how you can contribute to our success.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-yellow-400 text-primary-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Start Your Application
              </button>
              <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
