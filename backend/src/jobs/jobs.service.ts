import { Injectable } from '@nestjs/common'
import { GetJobsQueryDto } from './dto/get-jobs-query.dto'
import { Job, jobs } from './mock-data'

@Injectable()
export class JobsService {
  findAll(query: GetJobsQueryDto) {
    const filteredJobs = jobs
      .filter((job) => this.matchesFilters(job, query))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    const total = filteredJobs.length
    const totalPages = total === 0 ? 0 : Math.ceil(total / query.limit)
    const offset = (query.page - 1) * query.limit
    const paginatedJobs =
      total === 0 || query.page > totalPages
        ? []
        : filteredJobs.slice(offset, offset + query.limit)

    return {
      data: paginatedJobs,
      meta: {
        total,
        page: query.page,
        limit: query.limit,
        totalPages,
      },
    }
  }

  private matchesFilters(job: Job, query: GetJobsQueryDto): boolean {
    if (query.category && job.category !== query.category) {
      return false
    }

    if (query.type && job.type !== query.type) {
      return false
    }

    return true
  }
}
