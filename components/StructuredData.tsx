import { generateStructuredData } from '@/lib/seo'

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'LocalBusiness'
  data?: Record<string, any>
}

export default function StructuredData({ type = 'Organization', data }: StructuredDataProps) {
  const structuredData = data || generateStructuredData(type)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

