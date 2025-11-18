import { PortableTextBlock } from 'sanity'

export interface Player {
  _id: string
  _createdAt: string
  name: string
  slug: { current: string }
  image?: any
  jerseyNumber: number
  position: 'guard' | 'forward' | 'center'
  height?: string
  weight?: number
  birthDate?: string
  age?: number
  nationality?: string
  canadianResident?: boolean
  schoolLevel?: string
  gpa?: number
  email?: string
  phone?: string
  instagram?: string
  highlightVideo?: string
  bio?: string
  stats?: {
    ppg?: number
    rpg?: number
    apg?: number
    spg?: number
    bpg?: number
  }
  isActive: boolean
}

export interface Article {
  _id: string
  _createdAt: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage: any
  category: 'match' | 'training' | 'team' | 'player' | 'event' | 'other'
  publishedAt: string
  content: PortableTextBlock[]
  author: string
  featured: boolean
}

export interface Match {
  _id: string
  _createdAt: string
  opponent: string
  date: string
  location: string
  isHome: boolean
  status: 'upcoming' | 'live' | 'finished' | 'cancelled'
  isPlayoff: boolean
  ourScore?: number
  opponentScore?: number
  period?: 'period1' | 'period2' | 'playoffs'
  opponentLogo?: any
  highlights?: string
  recap?: string
}

export interface Training {
  _id: string
  _createdAt: string
  title: string
  date: string
  location: 'durocher' | 'saint-lambert'
  duration: number
  type?: 'regular' | 'conditioning' | 'tactical' | 'shooting'
  notes?: string
  isCancelled: boolean
}

export interface Gallery {
  _id: string
  _createdAt: string
  title: string
  slug: { current: string }
  description?: string
  date: string
  category: 'match' | 'training' | 'event' | 'team' | 'other'
  coverImage: any
  images?: Array<{
    _key: string
    asset: any
    caption?: string
  }>
  videos?: Array<{
    _key: string
    title: string
    url: string
  }>
}
