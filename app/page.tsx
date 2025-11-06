import Hero from '@/components/Hero'
import ImageShowcase from '@/components/ImageShowcase'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageShowcase />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <CTA />
    </div>
  )
}
