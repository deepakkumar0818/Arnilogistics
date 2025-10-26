'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Sample images - You can replace these with your actual images
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      title: 'Warehouse Operations',
      category: 'Operations'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      title: 'Logistics Hub',
      category: 'Infrastructure'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1621947081727-77d53b1b7ea7?w=800',
      title: 'Cargo Delivery',
      category: 'Delivery'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=800',
      title: 'Shipping Container',
      category: 'Operations'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
      title: 'Transportation Fleet',
      category: 'Fleet'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=800',
      title: 'Global Shipping',
      category: 'International'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      title: 'Modern Warehouse',
      category: 'Infrastructure'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1561912774-79769a0a0a7f?w=800',
      title: 'Truck Loading',
      category: 'Operations'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1586528116172-29726b3c8f03?w=800',
      title: 'Distribution Center',
      category: 'Operations'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      title: 'Port Operations',
      category: 'International'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800',
      title: 'Cargo Handling',
      category: 'Operations'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      title: 'Supply Chain',
      category: 'Operations'
    },
  ]

  const categories = ['All', 'Operations', 'Infrastructure', 'Delivery', 'Fleet', 'International']

  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (id: number) => setSelectedImage(id)
  const closeLightbox = () => setSelectedImage(null)

  const currentIndex = selectedImage !== null 
    ? galleryImages.findIndex(img => img.id === selectedImage) 
    : -1

  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image.id)}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-8 w-8" />
            </button>
            
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="h-10 w-10" />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="h-10 w-10" />
              </button>
            )}

            <div className="relative aspect-video" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.url || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.title || ''}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            
            <div className="bg-white rounded-lg p-6 mt-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-gray-900">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {galleryImages.find(img => img.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

