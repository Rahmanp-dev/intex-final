// Type definitions for the application

export interface HeroData {
  _id?: string
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
  image: string
}

export interface CategoryData {
  _id: string
  title: string
  slug?: string
  description?: string
  image: string
  isActive?: boolean
  order?: number
}

export interface ProductData {
  _id: string
  title: string
  description?: string
  price: number
  image: string
  sku: string
  rating?: number
  reviews?: number
  freeShipping?: boolean
  featured?: boolean
  isActive?: boolean
  order?: number
  date?: string
  color?: string
  category?: string
}

export interface PromoData {
  _id?: string
  title: string
  description?: string
  image: string
  buttonText?: string
  buttonLink?: string
  backgroundColor?: string
  backgroundOpacity?: number
  position?: string
  isActive?: boolean
}

export interface StatsData {
  totalProducts: number
  newProducts: number
  totalCategories: number
  totalImages: number
  storageUsed: string
  recentActivity: number
  recentUpdates: {
    content: string
    time: string
  }[]
}
