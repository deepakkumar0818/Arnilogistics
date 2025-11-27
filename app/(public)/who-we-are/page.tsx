import { Metadata } from 'next'
import CompanyHero from '@/components/CompanyHero'
import OurStory from '@/components/OurStory'
import OurValues from '@/components/OurValues'
import LeadershipTeam from '@/components/LeadershipTeam'
import Certifications from '@/components/Certifications'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Who We Are - About ARVI Logistics | Our Story, Values & Leadership',
  description: 'Learn about ARVI Logistics - a family-owned logistics company with 20+ years of experience. Discover our story, values, leadership team, and commitment to excellence in transportation and supply chain solutions.',
  path: '/who-we-are',
  keywords: ['about ARVI Logistics', 'logistics company history', 'transportation company', 'supply chain experts', 'logistics leadership'],
  type: 'article',
})

export default function WhoWeAre() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ARVI Logistics',
    description: 'Learn about ARVI Logistics - a family-owned logistics company with 20+ years of experience',
    mainEntity: {
      '@type': 'Organization',
      name: 'ARVI Logistics',
      foundingDate: '2003',
      numberOfEmployees: '500+',
    },
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <CompanyHero />
      <OurStory />
      <OurValues />
      <LeadershipTeam />
      <Certifications />
    </div>
  )
}

