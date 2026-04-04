export interface Job {
  id: string
  title: string
  company: string
  category: string
  type: string
  location: string
  createdAt: string
}

export interface JobsResponse {
  data: Job[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}
