import ServicesHero from '@/components/ServicesHero'
import DetailedServices from '@/components/DetailedServices'
import ServiceProcess from '@/components/ServiceProcess'
import TechnologySolutions from '@/components/TechnologySolutions'
import IndustriesServed from '@/components/IndustriesServed'

export default function WhatWeDo() {
  return (
    <div>
      <ServicesHero />
      <DetailedServices />
      <ServiceProcess />
      <TechnologySolutions />
      <IndustriesServed />
    </div>
  )
}
