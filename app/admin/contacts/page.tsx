'use client'

import { useState, useEffect } from 'react'
import { Search, Eye, Trash2, Filter, Mail, Phone, Calendar, MessageSquare, Loader2, X, FileSpreadsheet, Building2 } from 'lucide-react'
import * as XLSX from 'xlsx'

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  submittedAt: string;
  createdAt?: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [filterStatus])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchContacts()
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const fetchContacts = async () => {
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

      const response = await fetch(`/api/contacts?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setContacts(result.data)
      } else {
        setError(result.error || 'Failed to fetch contacts')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch contacts')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setUpdating(id)
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      const result = await response.json()

      if (result.success) {
        setContacts(contacts.map(contact => 
          contact._id === id ? { ...contact, status: newStatus as any } : contact
        ))
        if (selectedContact && selectedContact._id === id) {
          setSelectedContact({ ...selectedContact, status: newStatus as any })
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
    if (!confirm('Are you sure you want to delete this contact submission?')) {
      return
    }

    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        setContacts(contacts.filter(contact => contact._id !== id))
        if (selectedContact && selectedContact._id === id) {
          setShowModal(false)
          setSelectedContact(null)
        }
      } else {
        alert(result.error || 'Failed to delete contact')
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete contact')
    }
  }

  const handleViewDetails = (contact: Contact) => {
    setSelectedContact(contact)
    setShowModal(true)
    // Mark as read if it's new
    if (contact.status === 'new') {
      handleStatusChange(contact._id, 'read')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }

  const statusColors: any = {
    new: 'bg-blue-100 text-blue-700',
    read: 'bg-gray-100 text-gray-700',
    replied: 'bg-green-100 text-green-700',
    archived: 'bg-yellow-100 text-yellow-700'
  }

  const exportToExcel = () => {
    const excelData = contacts.map((contact) => ({
      'Name': contact.name,
      'Email': contact.email,
      'Phone': contact.phone || 'N/A',
      'Company': contact.company || 'N/A',
      'Subject': contact.subject,
      'Message': contact.message.substring(0, 200) + (contact.message.length > 200 ? '...' : ''),
      'Service Interest': contact.service || 'N/A',
      'Status': contact.status.charAt(0).toUpperCase() + contact.status.slice(1),
      'Submitted Date': formatDate(contact.submittedAt),
    }))

    const worksheet = XLSX.utils.json_to_sheet(excelData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts')

    const columnWidths = [
      { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 25 },
      { wch: 30 }, { wch: 50 }, { wch: 20 }, { wch: 12 }, { wch: 12 }
    ]
    worksheet['!cols'] = columnWidths

    const fileName = `Contacts_Export_${new Date().toISOString().split('T')[0]}.xlsx`
    XLSX.writeFile(workbook, fileName)
  }

  const stats = [
    { label: 'Total', count: contacts.length, color: 'from-blue-500 to-blue-600' },
    { label: 'New', count: contacts.filter(c => c.status === 'new').length, color: 'from-blue-500 to-blue-600' },
    { label: 'Read', count: contacts.filter(c => c.status === 'read').length, color: 'from-gray-500 to-gray-600' },
    { label: 'Replied', count: contacts.filter(c => c.status === 'replied').length, color: 'from-green-500 to-green-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
          <p className="text-gray-600">Manage and review all contact form submissions</p>
        </div>
        <button
          onClick={exportToExcel}
          disabled={contacts.length === 0}
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
              <MessageSquare className="h-5 w-5 text-white" />
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
              placeholder="Search by name, email, subject, or company..."
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
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12 bg-white rounded-xl border border-gray-200">
          <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-3" />
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={fetchContacts}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Contacts Table */}
      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Submitted Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 shadow-sm">
                          {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{contact.name}</div>
                          <div className="text-sm text-gray-500">{contact.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{contact.subject}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {contact.service ? contact.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(contact.submittedAt)}</td>
                    <td className="px-6 py-4">
                      <select
                        value={contact.status}
                        onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                        disabled={updating === contact._id}
                        className={`px-4 py-2.5 rounded-full text-sm font-semibold border-0 ${statusColors[contact.status]} disabled:opacity-50 min-w-[100px]`}
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
                          onClick={() => handleViewDetails(contact)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
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

          {contacts.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No contact submissions found</p>
            </div>
          )}
        </div>
      )}

      {/* Details Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 px-6 py-5 flex items-center justify-between rounded-t-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900">Contact Details</h2>
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
                      {selectedContact.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{selectedContact.name}</h3>
                      <p className="text-sm text-gray-600">{selectedContact.subject}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-3 text-primary-500" />
                      <span>{selectedContact.email}</span>
                    </div>
                    {selectedContact.phone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-3 text-primary-500" />
                        <span>{selectedContact.phone}</span>
                      </div>
                    )}
                    {selectedContact.company && (
                      <div className="flex items-center text-gray-600">
                        <Building2 className="h-5 w-5 mr-3 text-primary-500" />
                        <span>{selectedContact.company}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-primary-500" />
                      <span>Submitted: {formatDate(selectedContact.submittedAt)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Status</h4>
                  <select
                    value={selectedContact.status}
                    onChange={(e) => {
                      handleStatusChange(selectedContact._id, e.target.value)
                      setSelectedContact({ ...selectedContact, status: e.target.value as any })
                    }}
                    className={`w-full px-4 py-3 rounded-lg font-semibold text-base ${statusColors[selectedContact.status]}`}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {selectedContact.service && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Interest</h4>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-3">
                    {selectedContact.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary-500" />
                  Message
                </h4>
                <div className="bg-gray-50 rounded-xl p-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-accent-500 hover:bg-accent-600 text-primary-900 rounded-lg font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reply via Email
                </a>
                <button
                  onClick={() => {
                    handleDelete(selectedContact._id)
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

