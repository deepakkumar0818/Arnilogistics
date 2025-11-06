'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery images from Galley folder
  const galleryImages = [
    {
      id: 1,
      url: '/Galley/117178984_4578175885533856_5741741798414968638_n.jpg',
      title: 'ARVI Logistics Operations',
      category: 'Operations'
    },
    {
      id: 2,
      url: '/Galley/119473957_4773709732647136_4600854575672152963_n.jpg',
      title: 'Transportation Services',
      category: 'Operations'
    },
    {
      id: 3,
      url: '/Galley/119482905_4773698565981586_4030977466744911590_n (1).jpg',
      title: 'Fleet Management',
      category: 'Fleet'
    },
    {
      id: 4,
      url: '/Galley/471172852_1129863075243760_3662000209154986691_n.jpg',
      title: 'Warehouse Operations',
      category: 'Operations'
    },
    {
      id: 5,
      url: '/Galley/471258898_1129868311909903_4196427507684202051_n.jpg',
      title: 'Logistics Hub',
      category: 'Infrastructure'
    },
    {
      id: 6,
      url: '/Galley/471529000_1129862991910435_2711511266717249596_n.jpg',
      title: 'Delivery Services',
      category: 'Delivery'
    },
  ]

  const categories = ['All', 'Operations', 'Infrastructure', 'Delivery', 'Fleet']

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
      <section className="py-20 bg-gradient-to-b from-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-accent-500 text-primary-900 shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/10'
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
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-4 border border-white/10" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-white">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-300 mt-2">
                {galleryImages.find(img => img.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

