import { Injectable } from '@nestjs/common'
import { GetJobsQueryDto } from './dto/get-jobs-query.dto'
import { jobs } from './mock-data'

@Injectable()
export class JobsService {
  findAll(query: GetJobsQueryDto) {
    return {
      data: jobs,
      meta: {
        total: jobs.length,
        page: query.page,
        limit: query.limit,
        totalPages: 1,
      },
    }
  }
}
