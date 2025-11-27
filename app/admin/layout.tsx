'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Briefcase, 
  Menu, 
  X,
  LogOut,
  ChevronRight,
  BriefcaseIcon,
  MessageSquare
} from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Clear any stored authentication data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuth')
      sessionStorage.clear()
    }
    // Redirect to login page
    router.push('/admin/login')
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Job Postings', href: '/admin/jobs', icon: BriefcaseIcon },
    { name: 'Career Applications', href: '/admin/applications', icon: Briefcase },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    // { name: 'Edit Content', href: '/admin/content', icon: FileEdit },
  ]

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white transform transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/admin" className="flex items-center space-x-3 group">
              <Image 
                src="/logos/NEWlogo-removebg-preview.png" 
                alt="ARVI Logistics Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <div>
                <span className="text-lg font-bold block">ARVI Admin</span>
                <span className="text-xs text-gray-400">Management Portal</span>
              </div>
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white/70 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                    active
                      ? 'bg-accent-500 text-primary-900 shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${active ? 'text-primary-900' : 'text-gray-400 group-hover:text-accent-400'}`} />
                  <span className="flex-1">{item.name}</span>
                  {active && <ChevronRight className="h-4 w-4" />}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/5 rounded-xl p-4 mb-3">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">Admin User</p>
                  <p className="text-xs text-gray-400">admin@arvilogistics.com</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Mobile menu button - floating */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-primary-900 text-white hover:bg-primary-800 shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20">
          {children}
        </main>
      </div>
    </div>
  )
}

