'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Package, Search, FileText, UserPlus, ExternalLink } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPortalDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const portalLinks = [
    {
      name: 'Available Loads',
      url: 'https://customers.xpresstrax.com/Availloads.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <Package className="h-4 w-4" />
    },
    {
      name: 'Customer Dashboard',
      url: 'https://customers.xpresstrax.com/Default.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <FileText className="h-4 w-4" />
    },
    {
      name: 'Track Shipment',
      url: 'https://customers.xpresstrax.com/PGCommon/Tracing.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <Search className="h-4 w-4" />
    },
    {
      name: 'Register',
      url: 'https://customers.xpresstrax.com/PGCommon/Registration.aspx?id=Db8smWS1tpU%3d&ltr=gmAvyXXkjAI%3d',
      icon: <UserPlus className="h-4 w-4" />
    }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary-900/95 backdrop-blur-md shadow-lg border-b border-primary-700' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image 
                  src="/logos/NEWlogo-removebg-preview.png" 
                  alt="ARVI Logistics Logo" 
                  width={50} 
                  height={50}
                  className="object-contain transition-opacity group-hover:opacity-80"
                  priority
                />
              </div>
              <span className={`text-2xl font-bold transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
                ARVI Logistics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-200 group ${
                  scrolled 
                    ? 'text-gray-300 hover:text-accent-400' 
                    : 'text-white hover:text-accent-400'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  scrolled ? 'bg-white/10' : 'bg-white/20'
                }`}></div>
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-200 ${
                  scrolled ? 'bg-accent-400' : 'bg-accent-400'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Customer Portal Button - Replaces Get Started */}
          <div className="hidden lg:flex items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center ${
                  scrolled 
                    ? 'bg-accent-500 text-primary-900 hover:bg-accent-600'
                    : 'bg-white text-primary-900 hover:bg-gray-100'
                }`}
              >
                <span>Customer Portal</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${portalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {portalDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-primary-900/98 backdrop-blur-md rounded-xl shadow-2xl border border-primary-700 overflow-hidden z-50">
                  <div className="p-2">
                    {portalLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                        onClick={() => setPortalDropdownOpen(false)}
                      >
                        <div className="mr-3 text-accent-400 group-hover:scale-110 transition-transform">
                          {link.icon}
                        </div>
                        <span className="flex-1 font-medium">{link.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                scrolled 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {isOpen ? (
                <X className={`h-5 w-5 ${scrolled ? 'text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`h-5 w-5 ${scrolled ? 'text-white' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-primary-900/95 backdrop-blur-md border-t border-primary-700 shadow-lg">
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-accent-400 hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Customer Portal Links */}
            <div className="pt-4 border-t border-primary-700">
              <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Customer Portal
              </div>
              {portalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-accent-400 hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3 text-accent-400">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
