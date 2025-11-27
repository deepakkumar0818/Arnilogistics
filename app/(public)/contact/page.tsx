import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import FAQ from '@/components/FAQ'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta, siteConfig } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Contact Us - Get in Touch | ARVI Logistics Customer Service',
  description: 'Contact ARVI Logistics for all your logistics needs. Reach out via phone, email, or contact form. We respond within 24 hours. Call +1 877-295-0849 for urgent matters.',
  path: '/contact',
  keywords: ['contact ARVI Logistics', 'logistics contact', 'customer service', 'get quote', 'logistics inquiry'],
})

export default function Contact() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ARVI Logistics',
    description: 'Contact ARVI Logistics for logistics services and inquiries',
    mainEntity: {
      '@type': 'Organization',
      name: 'ARVI Logistics',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-877-295-0849',
        contactType: 'Customer Service',
        email: 'info@arvilogistics.com',
        availableLanguage: 'English',
      },
    },
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
    </div>
  )
}

