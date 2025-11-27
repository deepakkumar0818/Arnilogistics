'use client'

import { useState, useEffect } from 'react'
import { MapPin, Clock, Users, Loader2 } from 'lucide-react'
import JobApplicationForm from './JobApplicationForm'

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

export default function CareerOpportunities() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/jobs?status=active')
      const result = await response.json()

      if (result.success) {
        setJobs(result.data)
      } else {
        setError(result.error || 'Failed to fetch jobs')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section
        id="career-opportunities"
        className="py-16 md:py-20 bg-gradient-to-b from-primary-800 to-primary-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 text-accent-400 animate-spin mr-3" />
            <p className="text-gray-200">Loading career opportunities...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section
        id="career-opportunities"
        className="py-16 md:py-20 bg-gradient-to-b from-primary-800 to-primary-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-red-300 mb-4">Error: {error}</p>
            <button
              onClick={fetchJobs}
              className="px-6 py-3 bg-accent-500 text-primary-900 rounded-xl font-semibold hover:bg-accent-600"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (jobs.length === 0) {
    return (
      <section
        id="career-opportunities"
        className="py-16 md:py-20 bg-gradient-to-b from-primary-800 to-primary-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-gray-200 text-lg">No open positions at the moment.</p>
            <p className="text-gray-300 mt-2">Check back soon for new opportunities!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="career-opportunities"
      className="py-16 md:py-20 bg-gradient-to-b from-primary-800 to-primary-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {jobs.map((job, index) => (
            <div
              key={job._id}
              className="rounded-3xl border border-accent-400/40 bg-primary-900/40 shadow-soft overflow-hidden flex flex-col 
                         transform transition-all duration-500 ease-out
                         hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent-500/20 hover:border-accent-400/60
                         animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative flex flex-col flex-1 group">
                {/* Top content */}
                <div className="px-6 sm:px-8 pt-8 pb-6 bg-gradient-to-br from-primary-800 to-primary-900 
                              relative overflow-hidden transition-all duration-300
                              group-hover:from-primary-700 group-hover:to-primary-800">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 
                                transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2 
                                     transition-all duration-300 group-hover:text-accent-300">
                          {job.title}
                        </h2>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center rounded-full bg-accent-500 text-primary-900 text-xs font-semibold px-3 py-1.5 shadow-glow
                                       transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/50
                                       animate-pulse-slow">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2 
                                transition-colors duration-300 group-hover:text-gray-100">
                      {job.description}
                    </p>
                  </div>

                  {/* Meta row */}
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-200 relative z-10">
                    <div className="inline-flex items-center gap-1.5 
                                  transform transition-all duration-300 hover:scale-105 hover:text-accent-300">
                      <MapPin className="h-3.5 w-3.5 text-accent-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 
                                  transform transition-all duration-300 hover:scale-105 hover:text-accent-300">
                      <Clock className="h-3.5 w-3.5 text-accent-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="truncate">{job.salaryRange}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 
                                  transform transition-all duration-300 hover:scale-105 hover:text-accent-300">
                      <Users className="h-3.5 w-3.5 text-accent-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="truncate">{job.department}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-accent-400/40 transition-all duration-300 group-hover:bg-accent-400/60 group-hover:h-0.5" />

                {/* Content section */}
                <div className="px-6 sm:px-8 py-6 bg-primary-900/60 flex-1 flex flex-col 
                              transition-all duration-300 group-hover:bg-primary-900/80">
                  <div className="grid grid-cols-1 gap-6 flex-1">
                    {/* Responsibilities column */}
                    <div className="transform transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="text-xs font-semibold text-accent-300 tracking-wide mb-2
                                    transition-all duration-300 group-hover:text-accent-200 group-hover:scale-105">
                        Responsibilities
                      </h3>
                      {job.responsibilities && job.responsibilities.length > 0 ? (
                        <ul className="space-y-1.5">
                          {job.responsibilities.slice(0, 3).map((item, index) => (
                            <li 
                              key={index} 
                              className="flex items-start text-xs text-gray-200
                                        transform transition-all duration-300 hover:translate-x-1 hover:text-gray-100"
                              style={{ transitionDelay: `${index * 50}ms` }}
                            >
                              <span className="mt-1.5 mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0
                                             transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300
                                             animate-pulse-slow" />
                              <span className="line-clamp-2">{item}</span>
                            </li>
                          ))}
                          {job.responsibilities.length > 3 && (
                            <li className="text-xs text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300">
                              +{job.responsibilities.length - 3} more
                            </li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-xs text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300">
                          No specific responsibilities listed.
                        </p>
                      )}
                    </div>

                    {/* Requirements column */}
                    <div className="transform transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="text-xs font-semibold text-accent-300 tracking-wide mb-2
                                    transition-all duration-300 group-hover:text-accent-200 group-hover:scale-105">
                        Requirements
                      </h3>
                      {job.requirements && job.requirements.length > 0 ? (
                        <ul className="space-y-1.5">
                          {job.requirements.slice(0, 3).map((item, index) => (
                            <li 
                              key={index} 
                              className="flex items-start text-xs text-gray-200
                                        transform transition-all duration-300 hover:translate-x-1 hover:text-gray-100"
                              style={{ transitionDelay: `${index * 50}ms` }}
                            >
                              <span className="mt-1.5 mr-2 h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0
                                             transition-all duration-300 group-hover:scale-125 group-hover:bg-yellow-300
                                             animate-pulse-slow" />
                              <span className="line-clamp-2">{item}</span>
                            </li>
                          ))}
                          {job.requirements.length > 3 && (
                            <li className="text-xs text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300">
                              +{job.requirements.length - 3} more
                            </li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-xs text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300">
                          No specific requirements listed.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-primary-900/80 px-6 sm:px-8 py-4 mt-auto 
                              transition-all duration-300 group-hover:bg-primary-900/90">
                  <button
                    onClick={() => {
                      setSelectedJob(job)
                      setIsFormOpen(true)
                    }}
                    className="w-full rounded-xl bg-accent-500 text-primary-900 text-center text-sm font-semibold py-2.5 
                             transform transition-all duration-300 
                             hover:bg-accent-400 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50
                             active:scale-95
                             relative overflow-hidden group/button"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   transform -translate-x-full group-hover/button:translate-x-full 
                                   transition-transform duration-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false)
            setSelectedJob(null)
          }}
        />
      )}
    </section>
  )
}
