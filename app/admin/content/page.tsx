'use client'

import { useState } from 'react'
import { Save, RotateCcw, FileEdit, Hash, Type } from 'lucide-react'

// Mock content data - will be stored in MongoDB later
const initialContent = {
  whoWeAre: {
    stats: [
      { label: 'Years in Business', value: 15 },
      { label: 'Happy Clients', value: 5000 },
      { label: 'Countries Served', value: 150 },
      { label: 'Team Members', value: 500 }
    ],
    story: {
      title: 'Our Story',
      description: 'Founded in 2008, ARVI Logistics has grown from a small regional carrier to a global logistics powerhouse.',
      fullText: 'What started as a vision to revolutionize freight transportation has evolved into a comprehensive logistics solution serving clients across six continents. Our commitment to excellence and innovation has made us a trusted partner for businesses of all sizes.'
    },
    values: [
      { title: 'Reliability', description: 'We deliver on our promises, every single time.' },
      { title: 'Innovation', description: 'Constantly improving our services with cutting-edge technology.' },
      { title: 'Sustainability', description: 'Committed to reducing our environmental impact.' },
      { title: 'Customer Focus', description: 'Your success is our top priority.' }
    ]
  },
  whatWeDo: {
    services: [
      {
        title: 'Full Truckload (FTL)',
        description: 'Dedicated truck space for your large shipments',
        features: ['Direct delivery', 'Faster transit times', 'Enhanced security']
      },
      {
        title: 'Less Than Truckload (LTL)',
        description: 'Cost-effective solution for smaller freight',
        features: ['Flexible scheduling', 'Shared transport costs', 'Regional & national coverage']
      },
      {
        title: 'Warehousing & Distribution',
        description: 'Secure storage and efficient distribution',
        features: ['Climate-controlled facilities', 'Real-time inventory', 'Pick & pack services']
      }
    ],
    stats: [
      { label: 'Daily Shipments', value: 10000 },
      { label: 'Warehouse Sq Ft', value: 2000000 },
      { label: 'Fleet Size', value: 1500 },
      { label: 'On-Time Delivery', value: 99.8 }
    ]
  }
}

export default function ContentPage() {
  const [content, setContent] = useState(initialContent)
  const [activeTab, setActiveTab] = useState<'whoWeAre' | 'whatWeDo'>('whoWeAre')
  const [hasChanges, setHasChanges] = useState(false)
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    // Simulate API call - will connect to MongoDB later
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
    setHasChanges(false)
    alert('Content saved successfully!')
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all changes?')) {
      setContent(initialContent)
      setHasChanges(false)
    }
  }

  const updateWhoWeAreStat = (index: number, field: 'label' | 'value', newValue: string | number) => {
    const newContent = { ...content }
    newContent.whoWeAre.stats[index] = {
      ...newContent.whoWeAre.stats[index],
      [field]: field === 'value' ? Number(newValue) : newValue
    }
    setContent(newContent)
    setHasChanges(true)
  }

  const updateWhoWeAreStory = (field: string, value: string) => {
    const newContent = { ...content }
    newContent.whoWeAre.story = { ...newContent.whoWeAre.story, [field]: value }
    setContent(newContent)
    setHasChanges(true)
  }

  const updateWhoWeAreValue = (index: number, field: 'title' | 'description', value: string) => {
    const newContent = { ...content }
    newContent.whoWeAre.values[index] = {
      ...newContent.whoWeAre.values[index],
      [field]: value
    }
    setContent(newContent)
    setHasChanges(true)
  }

  const updateWhatWeDoStat = (index: number, field: 'label' | 'value', newValue: string | number) => {
    const newContent = { ...content }
    newContent.whatWeDo.stats[index] = {
      ...newContent.whatWeDo.stats[index],
      [field]: field === 'value' ? Number(newValue) : newValue
    }
    setContent(newContent)
    setHasChanges(true)
  }

  const updateWhatWeDoService = (index: number, field: string, value: string) => {
    const newContent = { ...content }
    newContent.whatWeDo.services[index] = {
      ...newContent.whatWeDo.services[index],
      [field]: value
    }
    setContent(newContent)
    setHasChanges(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Website Content</h1>
          <p className="text-gray-600">Update text, numbers, and stats displayed on your website</p>
        </div>
        <div className="flex items-center space-x-3">
          {hasChanges && (
            <button
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className={`px-6 py-2 rounded-lg font-semibold flex items-center transition-colors ${
              hasChanges && !saving
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1 inline-flex">
        <button
          onClick={() => setActiveTab('whoWeAre')}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
            activeTab === 'whoWeAre'
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          Who We Are
        </button>
        <button
          onClick={() => setActiveTab('whatWeDo')}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
            activeTab === 'whatWeDo'
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          What We Do
        </button>
      </div>

      {/* Who We Are Content */}
      {activeTab === 'whoWeAre' && (
        <div className="space-y-6">
          {/* Stats Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Hash className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Statistics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.whoWeAre.stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => updateWhoWeAreStat(index, 'label', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => updateWhoWeAreStat(index, 'value', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Type className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={content.whoWeAre.story.title}
                  onChange={(e) => updateWhoWeAreStory('title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                <textarea
                  value={content.whoWeAre.story.description}
                  onChange={(e) => updateWhoWeAreStory('description', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Text</label>
                <textarea
                  value={content.whoWeAre.story.fullText}
                  onChange={(e) => updateWhoWeAreStory('fullText', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <FileEdit className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.whoWeAre.values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={value.title}
                      onChange={(e) => updateWhoWeAreValue(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={value.description}
                      onChange={(e) => updateWhoWeAreValue(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* What We Do Content */}
      {activeTab === 'whatWeDo' && (
        <div className="space-y-6">
          {/* Stats Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <Hash className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Service Statistics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.whatWeDo.stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => updateWhatWeDoStat(index, 'label', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
                    <input
                      type="number"
                      step="0.1"
                      value={stat.value}
                      onChange={(e) => updateWhatWeDoStat(index, 'value', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <FileEdit className="h-5 w-5 text-primary-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Services</h2>
            </div>
            <div className="space-y-6">
              {content.whatWeDo.services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => updateWhatWeDoService(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={service.description}
                      onChange={(e) => updateWhatWeDoService(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features (comma-separated)</label>
                    <input
                      type="text"
                      value={service.features.join(', ')}
                      onChange={(e) => {
                        const newContent = { ...content }
                        newContent.whatWeDo.services[index].features = e.target.value.split(',').map(f => f.trim())
                        setContent(newContent)
                        setHasChanges(true)
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Feature 1, Feature 2, Feature 3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

