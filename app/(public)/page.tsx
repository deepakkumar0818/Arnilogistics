import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ImageShowcase from '@/components/ImageShowcase'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'
import CustomerPortal from '@/components/CustomerPortal'
import CTA from '@/components/CTA'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'ARVI Logistics - Your Trusted Logistics Partner | Transportation & Supply Chain Solutions',
  description: 'ARVI Logistics offers 20+ years of experience in transportation, warehousing, and supply chain management. Professional logistics services with modern solutions for businesses worldwide.',
  path: '/',
  keywords: ['logistics services', 'transportation', 'supply chain', 'warehousing', 'freight services'],
})

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ARVI Logistics',
    url: 'https://arvilogistics.com',
    logo: 'https://arvilogistics.com/logos/NEWlogo-removebg-preview.png',
    description: 'Professional logistics services with 20+ years of experience',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-877-295-0849',
      contactType: 'Customer Service',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <Hero />
      <ImageShowcase />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <CustomerPortal />
      <CTA />
    </div>
  )
}

