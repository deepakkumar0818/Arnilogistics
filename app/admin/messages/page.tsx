'use client'

import { useState, useEffect } from 'react'
import { Search, Eye, Trash2, Filter, Mail, Phone, Calendar, MessageSquare, Loader2, X, FileSpreadsheet, Building2, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import * as XLSX from 'xlsx'

interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  priority?: 'low' | 'medium' | 'high';
  submittedAt: string;
  readAt?: string;
  repliedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [filterStatus, filterPriority])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMessages()
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams()
      if (filterStatus !== 'all') {
        params.append('status', filterStatus)
      }
      if (filterPriority !== 'all') {
        params.append('priority', filterPriority)
      }
      if (searchTerm) {
        params.append('search', searchTerm)
      }

      const response = await fetch(`/api/messages?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setMessages(result.data)
      } else {
        setError(result.error || 'Failed to fetch messages')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch messages')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setUpdating(id)
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      const result = await response.json()

      if (result.success) {
        setMessages(messages.map(message => 
          message._id === id ? { ...message, status: newStatus as any, ...result.data } : message
        ))
        if (selectedMessage && selectedMessage._id === id) {
          setSelectedMessage({ ...selectedMessage, status: newStatus as any, ...result.data })
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

  const handlePriorityChange = async (id: string, newPriority: string) => {
    try {
      setUpdating(id)
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priority: newPriority }),
      })

      const result = await response.json()

      if (result.success) {
        setMessages(messages.map(message => 
          message._id === id ? { ...message, priority: newPriority as any } : message
        ))
        if (selectedMessage && selectedMessage._id === id) {
          setSelectedMessage({ ...selectedMessage, priority: newPriority as any })
        }
      } else {
        alert(result.error || 'Failed to update priority')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to update priority')
    } finally {
      setUpdating(null)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) {
      return
    }

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        setMessages(messages.filter(message => message._id !== id))
        if (selectedMessage && selectedMessage._id === id) {
          setShowModal(false)
          setSelectedMessage(null)
        }
      } else {
        alert(result.error || 'Failed to delete message')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete message')
    }
  }

  const handleViewDetails = (message: Message) => {
    setSelectedMessage(message)
    setShowModal(true)
    // Mark as read if it's new
    if (message.status === 'new') {
      handleStatusChange(message._id, 'read')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const statusColors: any = {
    new: 'bg-blue-100 text-blue-700',
    read: 'bg-gray-100 text-gray-700',
    replied: 'bg-green-100 text-green-700',
    archived: 'bg-yellow-100 text-yellow-700'
  }

  const priorityColors: any = {
    low: 'bg-gray-100 text-gray-700',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700'
  }

  const exportToExcel = () => {
    const excelData = messages.map((message) => ({
      'Name': message.name,
      'Email': message.email,
      'Phone': message.phone || 'N/A',
      'Company': message.company || 'N/A',
      'Subject': message.subject,
      'Message': message.message.substring(0, 200) + (message.message.length > 200 ? '...' : ''),
      'Service Interest': message.service || 'N/A',
      'Status': message.status.charAt(0).toUpperCase() + message.status.slice(1),
      'Priority': message.priority ? message.priority.charAt(0).toUpperCase() + message.priority.slice(1) : 'Medium',
      'Submitted Date': formatDate(message.submittedAt),
    }))

    const worksheet = XLSX.utils.json_to_sheet(excelData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Messages')

    const columnWidths = [
      { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 25 },
      { wch: 30 }, { wch: 50 }, { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 20 }
    ]
    worksheet['!cols'] = columnWidths

    const fileName = `Messages_Export_${new Date().toISOString().split('T')[0]}.xlsx`
    XLSX.writeFile(workbook, fileName)
  }

  const stats = [
    { label: 'Total', count: messages.length, color: 'from-blue-500 to-blue-600', icon: MessageSquare },
    { label: 'New', count: messages.filter(m => m.status === 'new').length, color: 'from-blue-500 to-blue-600', icon: Clock },
    { label: 'Read', count: messages.filter(m => m.status === 'read').length, color: 'from-gray-500 to-gray-600', icon: Eye },
    { label: 'Replied', count: messages.filter(m => m.status === 'replied').length, color: 'from-green-500 to-green-600', icon: CheckCircle2 },
    { label: 'High Priority', count: messages.filter(m => m.priority === 'high').length, color: 'from-red-500 to-red-600', icon: AlertCircle }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Manage and review all contact form messages</p>
        </div>
        <button
          onClick={exportToExcel}
          disabled={messages.length === 0}
          className="flex items-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          <FileSpreadsheet className="h-5 w-5 mr-2" />
          Export to Excel
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
              <stat.icon className="h-5 w-5 text-white" />
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
              placeholder="Search by name, email, subject, message, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
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
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="relative">
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white text-gray-900 font-medium cursor-pointer hover:border-gray-400 transition-colors min-w-[150px]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="all">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12 bg-white rounded-xl border border-gray-200">
          <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-3" />
          <p className="text-gray-600">Loading messages...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={fetchMessages}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Messages Table */}
      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Submitted</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-sm">
                          {message.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{message.name}</div>
                          <div className="text-sm text-gray-500">{message.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{message.subject}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {message.service ? message.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={message.priority || 'medium'}
                        onChange={(e) => handlePriorityChange(message._id, e.target.value)}
                        disabled={updating === message._id}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border-0 ${priorityColors[message.priority || 'medium']} disabled:opacity-50 min-w-[80px]`}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{formatDate(message.submittedAt)}</td>
                    <td className="px-6 py-4">
                      <select
                        value={message.status}
                        onChange={(e) => handleStatusChange(message._id, e.target.value)}
                        disabled={updating === message._id}
                        className={`px-4 py-2.5 rounded-full text-sm font-semibold border-0 ${statusColors[message.status]} disabled:opacity-50 min-w-[100px]`}
                      >
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleViewDetails(message)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(message._id)}
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

          {messages.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No messages found</p>
            </div>
          )}
        </div>
      )}

      {/* Details Modal */}
      {showModal && selectedMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-6 py-5 flex items-center justify-between rounded-t-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900">Message Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-primary-900 hover:text-primary-800 transition-colors hover:bg-primary-900/10 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                      {selectedMessage.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{selectedMessage.name}</h3>
                      <p className="text-sm text-gray-600">{selectedMessage.subject}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-3 text-primary-500" />
                      <span>{selectedMessage.email}</span>
                    </div>
                    {selectedMessage.phone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-3 text-primary-500" />
                        <span>{selectedMessage.phone}</span>
                      </div>
                    )}
                    {selectedMessage.company && (
                      <div className="flex items-center text-gray-600">
                        <Building2 className="h-5 w-5 mr-3 text-primary-500" />
                        <span>{selectedMessage.company}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-primary-500" />
                      <span>Submitted: {formatDate(selectedMessage.submittedAt)}</span>
                    </div>
                    {selectedMessage.readAt && (
                      <div className="flex items-center text-gray-600">
                        <Eye className="h-5 w-5 mr-3 text-primary-500" />
                        <span>Read: {formatDate(selectedMessage.readAt)}</span>
                      </div>
                    )}
                    {selectedMessage.repliedAt && (
                      <div className="flex items-center text-gray-600">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-primary-500" />
                        <span>Replied: {formatDate(selectedMessage.repliedAt)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Status</h4>
                    <select
                      value={selectedMessage.status}
                      onChange={(e) => {
                        handleStatusChange(selectedMessage._id, e.target.value)
                        setSelectedMessage({ ...selectedMessage, status: e.target.value as any })
                      }}
                      className={`w-full px-4 py-3 rounded-lg font-semibold text-base ${statusColors[selectedMessage.status]}`}
                    >
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Priority</h4>
                    <select
                      value={selectedMessage.priority || 'medium'}
                      onChange={(e) => {
                        handlePriorityChange(selectedMessage._id, e.target.value)
                        setSelectedMessage({ ...selectedMessage, priority: e.target.value as any })
                      }}
                      className={`w-full px-4 py-3 rounded-lg font-semibold text-base ${priorityColors[selectedMessage.priority || 'medium']}`}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              </div>

              {selectedMessage.service && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Interest</h4>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-3">
                    {selectedMessage.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary-500" />
                  Message
                </h4>
                <div className="bg-gray-50 rounded-xl p-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reply via Email
                </a>
                <button
                  onClick={() => {
                    handleDelete(selectedMessage._id)
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

