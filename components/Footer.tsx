import Link from 'next/link'
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <Truck className="h-10 w-10 text-primary-400 group-hover:text-primary-300 transition-colors" />
                <div className="absolute -inset-1 bg-primary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ARVI Logistics
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Your trusted logistics partner delivering excellence in transportation 
              and supply chain solutions worldwide with cutting-edge technology.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-3 rounded-r-lg transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Road Transportation
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Air Cargo
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-300 hover:text-primary-400 transition-colors text-lg group flex items-center">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Supply Chain Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    123 Logistics Boulevard<br />
                    Transport City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-primary-400" />
                </div>
                <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
                <p className="text-gray-300 text-lg">info@rvlogistics.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg mb-4 md:mb-0">
              © {currentYear} ARVI Logistics. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-gray-400 hover:text-primary-400 text-lg transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 text-lg transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 text-lg transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
