'use client'

import { useState, useEffect } from 'react'
import { Briefcase, FileEdit, TrendingUp, Users, Loader2, BriefcaseIcon } from 'lucide-react'
import Link from 'next/link'

interface Application {
  _id: string;
  fullName: string;
  jobTitle: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
}

interface Job {
  _id: string;
  status: 'active' | 'closed';
  applications: number;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingApplications: 0,
    totalJobs: 0,
    activeJobs: 0,
    thisMonthApplications: 0,
    lastMonthApplications: 0,
  })
  const [recentApplications, setRecentApplications] = useState<Application[]>([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Fetch applications
      const applicationsResponse = await fetch('/api/applications')
      const applicationsResult = await applicationsResponse.json()
      
      // Fetch jobs
      const jobsResponse = await fetch('/api/jobs')
      const jobsResult = await jobsResponse.json()

      if (applicationsResult.success && jobsResult.success) {
        const applications = applicationsResult.data || []
        const jobs = jobsResult.data || []

        // Calculate statistics
        const totalApplications = applications.length
        const pendingApplications = applications.filter((app: Application) => app.status === 'pending').length
        const totalJobs = jobs.length
        const activeJobs = jobs.filter((job: Job) => job.status === 'active').length

        // Calculate this month and last month applications
        const now = new Date()
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)

        const thisMonthApps = applications.filter((app: Application) => {
          const appDate = new Date(app.submittedAt)
          return appDate >= thisMonthStart
        })

        const lastMonthApps = applications.filter((app: Application) => {
          const appDate = new Date(app.submittedAt)
          return appDate >= lastMonthStart && appDate <= lastMonthEnd
        })

        const thisMonthCount = thisMonthApps.length
        const lastMonthCount = lastMonthApps.length
        const monthChange = lastMonthCount > 0 
          ? ((thisMonthCount - lastMonthCount) / lastMonthCount * 100).toFixed(0)
          : thisMonthCount > 0 ? '100' : '0'

        setStats({
          totalApplications,
          pendingApplications,
          totalJobs,
          activeJobs,
          thisMonthApplications: thisMonthCount,
          lastMonthApplications: lastMonthCount,
        })

        // Get recent applications (last 5)
        const recent = applications
          .sort((a: Application, b: Application) => 
            new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
          )
          .slice(0, 5)
        setRecentApplications(recent)
      }
    } catch (error: any) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'reviewed':
        return 'bg-blue-100 text-blue-700'
      case 'shortlisted':
        return 'bg-green-100 text-green-700'
      case 'rejected':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const dashboardStats = [
    {
      name: 'Total Applications',
      value: stats.totalApplications.toString(),
      change: stats.lastMonthApplications > 0 
        ? `${parseFloat(((stats.thisMonthApplications - stats.lastMonthApplications) / stats.lastMonthApplications * 100).toFixed(0)) >= 0 ? '+' : ''}${((stats.thisMonthApplications - stats.lastMonthApplications) / stats.lastMonthApplications * 100).toFixed(0)}%`
        : stats.thisMonthApplications > 0 ? '+100%' : '0%',
      changeType: stats.thisMonthApplications >= stats.lastMonthApplications ? 'positive' : 'negative',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Pending Review',
      value: stats.pendingApplications.toString(),
      change: stats.pendingApplications > 0 ? `${stats.pendingApplications}` : '0',
      changeType: stats.pendingApplications > 0 ? 'positive' : 'neutral',
      icon: Users,
      color: 'from-accent-500 to-accent-600'
    },
    {
      name: 'Active Jobs',
      value: stats.activeJobs.toString(),
      change: `${stats.totalJobs} Total`,
      changeType: 'neutral',
      icon: FileEdit,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'This Month',
      value: stats.thisMonthApplications.toString(),
      change: stats.lastMonthApplications > 0 
        ? `${parseFloat(((stats.thisMonthApplications - stats.lastMonthApplications) / stats.lastMonthApplications * 100).toFixed(0)) >= 0 ? '+' : ''}${((stats.thisMonthApplications - stats.lastMonthApplications) / stats.lastMonthApplications * 100).toFixed(0)}%`
        : stats.thisMonthApplications > 0 ? '+100%' : '0%',
      changeType: stats.thisMonthApplications >= stats.lastMonthApplications ? 'positive' : 'negative',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-3" />
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your logistics platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 text-green-700' 
                  : stat.changeType === 'negative'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/applications"
          className="group bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <Briefcase className="h-10 w-10 mb-4 text-accent-400" />
          <h3 className="text-2xl font-bold mb-2">Career Applications</h3>
          <p className="text-gray-300 mb-4">Review and manage job applications from candidates.</p>
          <div className="flex items-center text-accent-400 font-semibold group-hover:translate-x-2 transition-transform">
            Manage Applications →
          </div>
        </Link>

        <Link
          href="/admin/jobs"
          className="group bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <BriefcaseIcon className="h-10 w-10 mb-4 text-primary-900" />
          <h3 className="text-2xl font-bold mb-2 text-primary-900">Job Postings</h3>
          <p className="text-primary-800 mb-4">Create and manage job postings for your career page.</p>
          <div className="flex items-center text-primary-900 font-semibold group-hover:translate-x-2 transition-transform">
            Manage Jobs →
          </div>
        </Link>
      </div>

      {/* Recent Applications Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
            <p className="text-sm text-gray-600 mt-1">Latest career applications submitted</p>
          </div>
          <Link
            href="/admin/applications"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors text-sm"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentApplications.length > 0 ? (
                recentApplications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold text-sm mr-3">
                          {app.fullName.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium text-gray-900">{app.fullName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{app.jobTitle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{formatDate(app.submittedAt)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No applications yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

