'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does ARVI Logistics provide?',
      answer: 'We provide comprehensive logistics services including road transportation, warehousing & distribution, and supply chain management. Our services are designed to meet all your transportation and supply chain needs.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'You can track your shipment through our online tracking system using your tracking number, through our mobile app, or by contacting our customer service team. We provide real-time updates on your shipment\'s location and status.'
    },
    {
      question: 'What are your delivery timeframes?',
      answer: 'Delivery timeframes vary depending on the service and destination. For road transportation, we offer same-day and next-day delivery options. Contact us for specific delivery timelines based on your needs.'
    },
    {
      question: 'Do you provide insurance for shipments?',
      answer: 'Yes, we offer comprehensive cargo insurance coverage for all types of shipments. Our insurance options include basic coverage, full value coverage, and specialized coverage for high-value or sensitive cargo. We can also arrange additional insurance if needed.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including manufacturing, automotive, retail & e-commerce, construction, technology, healthcare, and many others. Our specialized logistics solutions are tailored to meet the unique requirements of each industry.'
    },
    {
      question: 'How do I get a quote for your services?',
      answer: 'You can get a quote by filling out our online quote request form, calling our sales team directly, or emailing us with your requirements. We typically provide quotes within 24 hours and can arrange a consultation to discuss your specific needs.'
    },
    {
      question: 'Do you handle international shipments?',
      answer: 'Yes, we handle international shipments to over 150 countries worldwide. Our global network includes offices and partners in major cities around the world, ensuring seamless international logistics solutions with local expertise.'
    },
    {
      question: 'What makes ARVI Logistics different from other logistics companies?',
      answer: 'Our combination of advanced technology, experienced team, global network, and customer-centric approach sets us apart. We focus on providing personalized solutions, real-time visibility, and exceptional customer service while maintaining competitive pricing.'
    },
    {
      question: 'Do you offer emergency or expedited services?',
      answer: 'Yes, we offer 24/7 emergency logistics services for urgent shipments. Our expedited services include same-day delivery, express air freight, and priority handling. We have dedicated emergency response teams available around the clock.'
    },
    {
      question: 'How do you ensure cargo security and safety?',
      answer: 'We implement comprehensive security measures including GPS tracking, tamper-evident seals, secure facilities, background-checked personnel, and compliance with international security standards. We also provide real-time monitoring and immediate response to any security incidents.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-300 hover:scale-105">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our logistics services. 
            If you don't see your question here, please contact us directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-accent-400/30 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4 transform transition-all duration-300 group-hover:text-accent-300">{faq.question}</h3>
                <div className="flex-shrink-0 transform transition-all duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-accent-400 transform rotate-180 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-accent-400 transform transition-transform duration-300 group-hover:scale-110" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in-up">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
