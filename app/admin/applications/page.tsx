'use client'

import { useState, useEffect } from 'react'
import { Search, Eye, Trash2, Download, Filter, Mail, Phone, Calendar, Briefcase, FileText, Loader2, X, FileSpreadsheet } from 'lucide-react'
import * as XLSX from 'xlsx'

interface Application {
  _id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume?: {
    filename?: string;
    originalName?: string;
    size?: number;
    mimetype?: string;
  };
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  submittedAt: string;
  createdAt?: string;
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    fetchApplications()
  }, [filterStatus])

  const fetchApplications = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams()
      if (filterStatus !== 'all') {
        params.append('status', filterStatus)
      }

      const response = await fetch(`/api/applications?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setApplications(result.data)
      } else {
        setError(result.error || 'Failed to fetch applications')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch applications')
    } finally {
      setLoading(false)
    }
  }

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setUpdating(id)
      const response = await fetch(`/api/applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      const result = await response.json()

      if (result.success) {
        setApplications(applications.map(app => 
          app._id === id ? { ...app, status: newStatus as any } : app
        ))
        if (selectedApp && selectedApp._id === id) {
          setSelectedApp({ ...selectedApp, status: newStatus as any })
        }
      } else {
        alert(result.error || 'Failed to update status')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to update status')
    } finally {
      setUpdating(null)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application?')) {
      return
    }

    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        setApplications(applications.filter(app => app._id !== id))
        if (selectedApp && selectedApp._id === id) {
          setShowModal(false)
          setSelectedApp(null)
        }
      } else {
        alert(result.error || 'Failed to delete application')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete application')
    }
  }

  const handleViewDetails = (app: Application) => {
    setSelectedApp(app)
    setShowModal(true)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  const exportToExcel = () => {
    // Prepare data for Excel
    const excelData = filteredApplications.map((app) => ({
      'Applicant Name': app.fullName,
      'Email': app.email,
      'Phone': app.phone,
      'Position': app.jobTitle,
      'Department': app.jobTitle, // You can add department field if available
      'Applied Date': formatDate(app.submittedAt),
      'Status': app.status.charAt(0).toUpperCase() + app.status.slice(1),
      'Cover Letter': app.coverLetter.substring(0, 200) + (app.coverLetter.length > 200 ? '...' : ''),
      'Resume': app.resume?.originalName || app.resume?.filename || 'N/A',
    }))

    // Create workbook and worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications')

    // Set column widths
    const columnWidths = [
      { wch: 20 }, // Applicant Name
      { wch: 30 }, // Email
      { wch: 15 }, // Phone
      { wch: 25 }, // Position
      { wch: 15 }, // Department
      { wch: 12 }, // Applied Date
      { wch: 12 }, // Status
      { wch: 50 }, // Cover Letter
      { wch: 30 }, // Resume
    ]
    worksheet['!cols'] = columnWidths

    // Generate Excel file and download
    const fileName = `Applications_Export_${new Date().toISOString().split('T')[0]}.xlsx`
    XLSX.writeFile(workbook, fileName)
  }

  const statusColors: any = {
    pending: 'bg-yellow-100 text-yellow-700',
    reviewed: 'bg-blue-100 text-blue-700',
    shortlisted: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700'
  }

  const stats = [
    { label: 'Total', count: applications.length, color: 'from-blue-500 to-blue-600' },
    { label: 'Pending', count: applications.filter(a => a.status === 'pending').length, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Reviewed', count: applications.filter(a => a.status === 'reviewed').length, color: 'from-blue-500 to-blue-600' },
    { label: 'Shortlisted', count: applications.filter(a => a.status === 'shortlisted').length, color: 'from-green-500 to-green-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Applications</h1>
          <p className="text-gray-600">Manage and review all job applications</p>
        </div>
        <button
          onClick={exportToExcel}
          disabled={filteredApplications.length === 0}
          className="flex items-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          <FileSpreadsheet className="h-5 w-5 mr-2" />
          Export to Excel
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, position, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white text-gray-900 font-medium cursor-pointer hover:border-gray-400 transition-colors min-w-[150px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12 bg-white rounded-xl border border-gray-200">
          <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-3" />
          <p className="text-gray-600">Loading applications...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={fetchApplications}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Applications Table */}
      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Applicant</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredApplications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-sm">
                          {app.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{app.fullName}</div>
                          <div className="text-sm text-gray-500">{app.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{app.jobTitle}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(app.submittedAt)}</td>
                    <td className="px-6 py-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                        disabled={updating === app._id}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border-0 ${statusColors[app.status]} disabled:opacity-50`}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleViewDetails(app)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No applications found</p>
            </div>
          )}
        </div>
      )}

      {/* Details Modal */}
      {showModal && selectedApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-6 py-5 flex items-center justify-between rounded-t-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900">Application Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-primary-900 hover:text-primary-800 transition-colors hover:bg-primary-900/10 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Applicant Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                      {selectedApp.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{selectedApp.fullName}</h3>
                      <p className="text-sm text-gray-600">{selectedApp.jobTitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-3 text-primary-500" />
                      <span>{selectedApp.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-3 text-primary-500" />
                      <span>{selectedApp.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-primary-500" />
                      <span>Applied: {formatDate(selectedApp.submittedAt)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-5 w-5 mr-3 text-primary-500" />
                      <span>Job ID: {selectedApp.jobId}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Application Status</h4>
                  <select
                    value={selectedApp.status}
                    onChange={(e) => {
                      handleStatusChange(selectedApp._id, e.target.value)
                      setSelectedApp({ ...selectedApp, status: e.target.value as any })
                    }}
                    className={`w-full px-4 py-2 rounded-lg font-semibold ${statusColors[selectedApp.status]}`}
                  >
                    <option value="pending">Pending Review</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary-500" />
                  Cover Letter
                </h4>
                <div className="bg-gray-50 rounded-xl p-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedApp.coverLetter}
                </div>
              </div>

              {/* Resume Info */}
              {selectedApp.resume && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary-500" />
                    Resume
                  </h4>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700">
                      <strong>Filename:</strong> {selectedApp.resume.originalName || selectedApp.resume.filename || 'N/A'}
                    </p>
                    {selectedApp.resume.size && (
                      <p className="text-gray-700 mt-2">
                        <strong>Size:</strong> {(selectedApp.resume.size / 1024).toFixed(2)} KB
                      </p>
                    )}
                    {selectedApp.resume.mimetype && (
                      <p className="text-gray-700 mt-2">
                        <strong>Type:</strong> {selectedApp.resume.mimetype}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedApp.resume && (
                  <button className="flex-1 flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </button>
                )}
                <a
                  href={`mailto:${selectedApp.email}?subject=Re: Application for ${selectedApp.jobTitle}`}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
                <button
                  onClick={() => {
                    handleDelete(selectedApp._id)
                    setShowModal(false)
                  }}
                  className="px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-semibold transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

