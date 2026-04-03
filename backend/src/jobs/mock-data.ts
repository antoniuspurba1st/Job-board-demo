export interface Job {
  id: string
  title: string
  company: string
  category: string
  type: string
  location: string
  createdAt: Date
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Tech Corp',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    createdAt: new Date(),
  }
]