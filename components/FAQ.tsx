'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does RV Logistics provide?',
      answer: 'We provide comprehensive logistics services including road transportation, ocean freight, air cargo, warehousing & distribution, supply chain management, and risk management. Our services are designed to meet all your transportation and supply chain needs.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'You can track your shipment through our online tracking system using your tracking number, through our mobile app, or by contacting our customer service team. We provide real-time updates on your shipment\'s location and status.'
    },
    {
      question: 'What are your delivery timeframes?',
      answer: 'Delivery timeframes vary depending on the service and destination. For road transportation, we offer same-day and next-day delivery options. Ocean freight typically takes 7-21 days, while air cargo can be delivered within 1-5 days depending on the destination.'
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
      question: 'What makes RV Logistics different from other logistics companies?',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our logistics services. 
            If you don't see your question here, please contact us directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-200 text-lg mb-6">
              Our customer service team is here to help. Contact us directly for personalized assistance 
              with your logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Contact Customer Service
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
