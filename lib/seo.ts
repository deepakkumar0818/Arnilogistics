import { Metadata } from 'next'

export const siteConfig = {
  name: 'ARVI Logistics',
  title: 'ARVI Logistics - Your Trusted Logistics Partner | Transportation & Supply Chain Solutions',
  description: 'ARVI Logistics offers 20+ years of experience in transportation, warehousing, and supply chain management. Professional logistics services with modern solutions for businesses worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arvilogistics.com',
  ogImage: '/logos/NEWlogo-removebg-preview.png',
  logo: '/logos/NEWlogo-removebg-preview.png',
  keywords: [
    'logistics',
    'transportation',
    'supply chain management',
    'warehousing',
    'freight services',
    'logistics solutions',
    'shipping',
    'distribution',
    'ARVI Logistics',
    'trucking services',
    'logistics company',
    'transportation services',
    'warehouse management',
    'freight forwarding',
    'logistics consulting'
  ],
  author: 'ARVI Logistics',
  twitterHandle: '@arvilogistics',
  contact: {
    phone: '+1 877-295-0849',
    email: 'info@arvilogistics.com',
  },
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'US',
  },
}

export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
  type = 'website',
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const pageDescription = description || siteConfig.description
  const pageUrl = `${siteConfig.url}${path}`
  const pageImage = image || `${siteConfig.url}${siteConfig.ogImage}`
  const allKeywords = [...siteConfig.keywords, ...keywords].join(', ')

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type,
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: pageUrl,
    },
    metadataBase: new URL(siteConfig.url),
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  }
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'LocalBusiness' = 'Organization') {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'Customer Service',
      email: siteConfig.contact.email,
    },
    sameAs: [
      // Add social media links when available
      // 'https://www.facebook.com/arvilogistics',
      // 'https://www.linkedin.com/company/arvilogistics',
      // 'https://twitter.com/arvilogistics',
    ],
  }

  if (type === 'LocalBusiness') {
    return {
      ...baseData,
      '@type': 'LocalBusiness',
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      priceRange: '$$',
      openingHours: 'Mo-Fr 08:00-18:00',
    }
  }

  if (type === 'WebSite') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return baseData
}

