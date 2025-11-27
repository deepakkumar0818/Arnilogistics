'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          service: ''
        })
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      } else {
        setError(result.error || 'Failed to submit form')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to submit form')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-2 h-2 rounded-full bg-accent-400 mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-accent-300 uppercase tracking-wider">Quick Response</span>
            <div className="w-2 h-2 rounded-full bg-accent-400 ml-3 animate-pulse"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Send Us a Message
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours. 
            For urgent matters, please call us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl transform transition-all duration-300 hover:shadow-accent-500/20 hover:border-accent-400/30 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                  Full Name *
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-accent-400 group-focus-within:scale-110" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                  Email Address *
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-accent-400 group-focus-within:scale-110" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                  Phone Number
                </label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-accent-400 group-focus-within:scale-110" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15"
                    placeholder="+1 877-295-0849"
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="mb-6 transform transition-all duration-300 hover:scale-[1.01]">
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                Service Interest
              </label>
              <div className="relative group">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23fbbf24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1.25em 1.25em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" className="bg-primary-900">Select a service</option>
                  <option value="road-transportation" className="bg-primary-900">Road Transportation</option>
                  <option value="warehousing" className="bg-primary-900">Warehousing & Distribution</option>
                  <option value="supply-chain" className="bg-primary-900">Supply Chain Management</option>
                  <option value="consultation" className="bg-primary-900">Consultation</option>
                  <option value="other" className="bg-primary-900">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6 transform transition-all duration-300 hover:scale-[1.01]">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15"
                placeholder="Brief description of your inquiry"
              />
            </div>

            <div className="mb-6 transform transition-all duration-300 hover:scale-[1.01]">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300">
                Message *
              </label>
              <div className="relative group">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-accent-400 group-focus-within:scale-110" />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30 focus:bg-white/15 resize-none"
                  placeholder="Please provide details about your logistics needs..."
                />
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg animate-fade-in-up transform transition-all duration-300">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center animate-fade-in-up transform transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2 animate-pulse" />
                <p className="text-green-300 text-sm">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className="group relative bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-accent-400 transition-all duration-300 flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center">
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
