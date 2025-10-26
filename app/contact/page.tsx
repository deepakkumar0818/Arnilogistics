import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import OfficeLocations from '@/components/OfficeLocations'
import FAQ from '@/components/FAQ'

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <OfficeLocations />
      <FAQ />
    </div>
  )
}
