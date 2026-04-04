import type { Job } from '../types/jobs'

interface JobsListProps {
  jobs: Job[]
}

export function JobsList({ jobs }: JobsListProps) {
  return (
    <section className="jobs-section">
      <div className="jobs-grid">
        {jobs.map((job) => (
          <article key={job.id} className="job-card">
            <div className="job-card-top">
              <div>
                <p className="job-company">{job.company}</p>
                <h3>{job.title}</h3>
              </div>
              <span className="job-type">{job.type}</span>
            </div>

            <div className="job-meta">
              <span>{job.category}</span>
              <span>{job.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
