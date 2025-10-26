import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <CTA />
    </div>
  )
}
