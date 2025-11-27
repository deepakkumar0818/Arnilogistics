import { Metadata } from 'next'
import JoinUsHero from '@/components/JoinUsHero'
import CareerOpportunities from '@/components/CareerOpportunities'
import PartnershipPrograms from '@/components/PartnershipPrograms'
import BenefitsAndCulture from '@/components/BenefitsAndCulture'
import ApplicationProcess from '@/components/ApplicationProcess'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Join Us - Careers & Partnerships | ARVI Logistics Opportunities',
  description: 'Join ARVI Logistics as an employee or partner. Explore career opportunities in logistics or become a business partner. Competitive benefits, growth opportunities, and collaborative partnerships.',
  path: '/join-us',
  keywords: ['join ARVI Logistics', 'logistics careers', 'business partnerships', 'logistics jobs', 'partner with ARVI'],
  type: 'article',
})

export default function JoinUs() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Join ARVI Logistics',
    description: 'Career and partnership opportunities at ARVI Logistics',
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <JoinUsHero />
      <CareerOpportunities />
      <PartnershipPrograms />
      <BenefitsAndCulture />
      <ApplicationProcess />
    </div>
  )
}

