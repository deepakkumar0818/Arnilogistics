'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Edit, Trash2, Eye, MapPin, DollarSign, Clock, Briefcase, X, Loader2 } from 'lucide-react'

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salaryRange: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: 'active' | 'closed';
  postedDate: string;
  applications: number;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    salaryRange: '',
    description: '',
    requirements: [''],
    responsibilities: [''],
    status: 'active' as 'active' | 'closed'
  })

  // Fetch jobs from API
  useEffect(() => {
    fetchJobs()
  }, [filterStatus])

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs()
    }, 500) // Wait 500ms after user stops typing

    return () => clearTimeout(timer)
  }, [searchTerm])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams()
      if (filterStatus !== 'all') {
        params.append('status', filterStatus)
      }
      if (searchTerm) {
        params.append('search', searchTerm)
      }

      const response = await fetch(`/api/jobs?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        // Format postedDate for display
        const formattedJobs = result.data.map((job: any) => ({
          ...job,
          postedDate: job.postedDate ? new Date(job.postedDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        }))
        setJobs(formattedJobs)
      } else {
        setError(result.error || 'Failed to fetch jobs')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  // Client-side filtering is now handled by the API, but we keep this for display
  const filteredJobs = jobs

  const handleAddNew = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      salaryRange: '',
      description: '',
      requirements: [''],
      responsibilities: [''],
      status: 'active'
    })
    setIsEditing(false)
    setSelectedJob(null)
    setShowModal(true)
  }

  const handleEdit = (job: Job) => {
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      salaryRange: job.salaryRange,
      description: job.description,
      requirements: job.requirements.length > 0 ? job.requirements : [''],
      responsibilities: job.responsibilities.length > 0 ? job.responsibilities : [''],
      status: job.status
    })
    setSelectedJob(job)
    setIsEditing(true)
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job posting?')) {
      return
    }

    try {
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        setJobs(jobs.filter(job => job._id !== id))
      } else {
        alert(result.error || 'Failed to delete job')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete job')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Filter out empty requirements and responsibilities
      const cleanRequirements = formData.requirements.filter(req => req.trim() !== '')
      const cleanResponsibilities = formData.responsibilities.filter(resp => resp.trim() !== '')

      const payload = {
        ...formData,
        requirements: cleanRequirements,
        responsibilities: cleanResponsibilities,
      }

      let response
      if (isEditing && selectedJob) {
        // Update existing job
        response = await fetch(`/api/jobs/${selectedJob._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
      } else {
        // Create new job
        response = await fetch('/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
      }

      const result = await response.json()

      if (result.success) {
        setShowModal(false)
        fetchJobs() // Refresh the list
      } else {
        alert(result.error || 'Failed to save job')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to save job')
    } finally {
      setSubmitting(false)
    }
  }

  const addArrayField = (field: 'requirements' | 'responsibilities') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    })
  }

  const updateArrayField = (field: 'requirements' | 'responsibilities', index: number, value: string) => {
    const newArray = [...formData[field]]
    newArray[index] = value
    setFormData({ ...formData, [field]: newArray })
  }

  const removeArrayField = (field: 'requirements' | 'responsibilities', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index)
    setFormData({ ...formData, [field]: newArray })
  }

  const stats = [
    { label: 'Total Jobs', count: jobs.length, color: 'from-blue-500 to-blue-600' },
    { label: 'Active', count: jobs.filter(j => j.status === 'active').length, color: 'from-green-500 to-green-600' },
    { label: 'Closed', count: jobs.filter(j => j.status === 'closed').length, color: 'from-gray-500 to-gray-600' },
    { label: 'Total Applications', count: jobs.reduce((sum, j) => sum + j.applications, 0), color: 'from-purple-500 to-purple-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Postings</h1>
          <p className="text-gray-600">Manage career opportunities on your website</p>
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Job
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
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, department, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white text-gray-900 font-medium cursor-pointer hover:border-gray-400 transition-colors min-w-[150px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12 bg-white rounded-xl border border-gray-200">
          <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-3" />
          <p className="text-gray-600">Loading jobs...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={fetchJobs}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Jobs Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div key={job._id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    job.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {job.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {job.applications} applications
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600 text-sm">
                <Briefcase className="h-4 w-4 mr-2 text-primary-500" />
                {job.department}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <DollarSign className="h-4 w-4 mr-2 text-primary-500" />
                {job.salaryRange}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-2 text-primary-500" />
                Posted: {job.postedDate}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => handleEdit(job)}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="flex items-center justify-center px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        </div>
      )}

      {!loading && !error && filteredJobs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No jobs found</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-gray-900 px-6 py-5 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">{isEditing ? 'Edit Job Posting' : 'Add New Job Posting'}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="e.g., Truck Driver - Long Haul"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="e.g., Operations"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="e.g., West Hazleton, PA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range *</label>
                  <input
                    type="text"
                    value={formData.salaryRange}
                    onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="e.g., $50,000 - $70,000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="Job description..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                  {formData.requirements.map((req, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => updateArrayField('requirements', index, e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                        placeholder="Requirement..."
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayField('requirements', index)}
                        className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('requirements')}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    + Add Requirement
                  </button>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
                  {formData.responsibilities.map((resp, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={resp}
                        onChange={(e) => updateArrayField('responsibilities', index, e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                        placeholder="Responsibility..."
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayField('responsibilities', index)}
                        className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('responsibilities')}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    + Add Responsibility
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'closed' })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  >
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      {isEditing ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    isEditing ? 'Update Job' : 'Create Job'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

