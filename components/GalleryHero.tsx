'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react'

export default function GalleryHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24 pt-44">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Camera className="h-12 w-12 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Explore our state-of-the-art facilities, cutting-edge operations, and the dynamic world of logistics excellence at RV Logistics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <ImageIcon className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Operations</h3>
            <p className="text-gray-200 mb-6">
              See our warehouses, distribution centers, and logistics operations in action.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <Camera className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Infrastructure</h3>
            <p className="text-gray-200 mb-6">
              Discover our modern facilities and advanced technology solutions.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
            <ImageIcon className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">Team & Culture</h3>
            <p className="text-gray-200 mb-6">
              Meet our dedicated team and experience our vibrant company culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

