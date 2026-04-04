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
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'Cloud Labs',
    category: 'Engineering',
    type: 'Contract',
    location: 'Jakarta',
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'Pixel Studio',
    category: 'Design',
    type: 'Full-time',
    location: 'Bandung',
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'UI Designer',
    company: 'Creative House',
    category: 'Design',
    type: 'Contract',
    location: 'Remote',
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'Growth Hub',
    category: 'Marketing',
    type: 'Full-time',
    location: 'Surabaya',
    createdAt: new Date(),
  },
  {
    id: '6',
    title: 'Content Strategist',
    company: 'Brand Works',
    category: 'Marketing',
    type: 'Part-time',
    location: 'Remote',
    createdAt: new Date(),
  },
  {
    id: '7',
    title: 'Data Analyst',
    company: 'Insight Pro',
    category: 'Data',
    type: 'Full-time',
    location: 'Jakarta',
    createdAt: new Date(),
  },
  {
    id: '8',
    title: 'Business Analyst',
    company: 'Ops Corner',
    category: 'Data',
    type: 'Contract',
    location: 'Yogyakarta',
    createdAt: new Date(),
  },
  {
    id: '9',
    title: 'QA Engineer',
    company: 'ShipFast',
    category: 'Engineering',
    type: 'Part-time',
    location: 'Remote',
    createdAt: new Date(),
  },
  {
    id: '10',
    title: 'Recruiter',
    company: 'Talent Loop',
    category: 'Operations',
    type: 'Full-time',
    location: 'Jakarta',
    createdAt: new Date(),
  },
  {
    id: '11',
    title: 'Operations Associate',
    company: 'Scale Team',
    category: 'Operations',
    type: 'Contract',
    location: 'Remote',
    createdAt: new Date(),
  },
  {
    id: '12',
    title: 'DevOps Engineer',
    company: 'Infra One',
    category: 'Engineering',
    type: 'Full-time',
    location: 'Singapore',
    createdAt: new Date(),
  },
]
