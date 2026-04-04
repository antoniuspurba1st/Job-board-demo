import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiltersSidebar } from '../components/FiltersSidebar'
import { JobsList } from '../components/JobsList'
import { Pagination } from '../components/Pagination'
import type { JobsResponse } from '../types/jobs'

const defaultResponse: JobsResponse = {
  data: [],
  meta: {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  },
}

export function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>(defaultResponse)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const category = searchParams.get('category') ?? ''
  const type = searchParams.get('type') ?? ''
  const currentPage = Number(searchParams.get('page') ?? '1')
  const page = Number.isInteger(currentPage) && currentPage > 0 ? currentPage : 1

  useEffect(() => {
    const controller = new AbortController()

    const fetchJobs = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const queryString = searchParams.toString()
        const url = queryString
          ? `http://localhost:3000/jobs?${queryString}`
          : 'http://localhost:3000/jobs'

        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data: JobsResponse = await response.json()
        setJobsResponse(data)
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return
        }

        setError('Failed to load jobs')
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void fetchJobs()

    return () => controller.abort()
  }, [searchParams])

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const nextSearchParams = new URLSearchParams(searchParams)

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        nextSearchParams.set(key, value)
      } else {
        nextSearchParams.delete(key)
      }
    })

    setSearchParams(nextSearchParams)
  }

  const handleCategoryChange = (value: string) => {
    updateSearchParams({
      category: value || null,
      page: null,
    })
  }

  const handleTypeChange = (value: string) => {
    updateSearchParams({
      type: value || null,
      page: null,
    })
  }

  const handleReset = () => {
    setSearchParams(new URLSearchParams())
  }

  const handlePageChange = (nextPage: number) => {
    updateSearchParams({
      page: String(nextPage),
    })
  }

  return (
    <main className="jobs-page">
      <section className="hero-panel">
        <p className="eyebrow">Job Board Demo</p>
        <h1>Browse roles with clean server-side filters and pagination.</h1>
        <p className="hero-copy">
          The URL stays in sync with the current view, so every filtered result can be
          shared directly.
        </p>
      </section>

      <section className="content-layout">
        <FiltersSidebar
          category={category}
          type={type}
          onCategoryChange={handleCategoryChange}
          onTypeChange={handleTypeChange}
          onReset={handleReset}
        />

        <section className="results-panel">
          <div className="results-header">
            <div>
              <p className="eyebrow">Available Jobs</p>
              <h2>{jobsResponse.meta.total} roles found</h2>
            </div>
            <p className="results-meta">
              Page {page}
              {jobsResponse.meta.totalPages > 0 ? ` of ${jobsResponse.meta.totalPages}` : ''}
            </p>
          </div>

          {isLoading ? <p className="status-card">Loading...</p> : null}
          {!isLoading && error ? <p className="status-card error">{error}</p> : null}
          {!isLoading && !error && jobsResponse.data.length === 0 ? (
            <p className="status-card">No jobs found</p>
          ) : null}
          {!isLoading && !error && jobsResponse.data.length > 0 ? (
            <>
              <JobsList jobs={jobsResponse.data} />
              <Pagination
                page={jobsResponse.meta.page}
                totalPages={jobsResponse.meta.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : null}
        </section>
      </section>
    </main>
  )
}
