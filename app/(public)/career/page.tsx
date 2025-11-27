import { Metadata } from 'next'
import JoinUsHero from '@/components/JoinUsHero'
import CareerOpportunities from '@/components/CareerOpportunities'
import BenefitsAndCulture from '@/components/BenefitsAndCulture'
import ApplicationProcess from '@/components/ApplicationProcess'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Careers - Join ARVI Logistics | Logistics Jobs & Career Opportunities',
  description: 'Join ARVI Logistics team! Explore career opportunities in logistics, transportation, and supply chain management. Competitive benefits, growth opportunities, and a supportive work culture.',
  path: '/career',
  keywords: ['logistics jobs', 'transportation careers', 'supply chain jobs', 'ARVI Logistics careers', 'logistics employment'],
  type: 'article',
})

export default function CareerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Logistics Careers at ARVI Logistics',
    description: 'Join our team of logistics professionals',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'ARVI Logistics',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <JoinUsHero />
      <CareerOpportunities />
      {/* <PartnershipPrograms /> temporarily hidden */}
      <BenefitsAndCulture />
      <ApplicationProcess />
    </div>
  )
}



