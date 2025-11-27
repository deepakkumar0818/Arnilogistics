import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import DetailedServices from '@/components/DetailedServices'
import ServiceProcess from '@/components/ServiceProcess'
import TechnologySolutions from '@/components/TechnologySolutions'
import IndustriesServed from '@/components/IndustriesServed'
import StructuredData from '@/components/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'What We Do - Logistics Services | Transportation, Warehousing & Supply Chain Solutions',
  description: 'ARVI Logistics provides comprehensive logistics services including road transportation, warehousing, distribution, supply chain management, and technology solutions. Serving multiple industries with 20+ years of expertise.',
  path: '/what-we-do',
  keywords: ['logistics services', 'transportation services', 'warehousing solutions', 'supply chain management', 'freight services', 'distribution services'],
  type: 'article',
})

export default function WhatWeDo() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Logistics Services',
    provider: {
      '@type': 'Organization',
      name: 'ARVI Logistics',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Road Transportation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Warehousing & Distribution',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Supply Chain Management',
          },
        },
      ],
    },
  }

  return (
    <div>
      <StructuredData data={structuredData} />
      <ServicesHero />
      <DetailedServices />
      <ServiceProcess />
      <TechnologySolutions />
      <IndustriesServed />
    </div>
  )
}

