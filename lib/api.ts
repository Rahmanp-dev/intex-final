// This is a mock API service that would be replaced with real API calls in a production app

export interface HeroSlide {
  id: string
  image: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  colorScheme?: string
  isActive?: boolean
  order?: number
}

export interface Category {
  _id: string
  title: string
  slug?: string
  description?: string
  image: string
  isActive?: boolean
  order?: number
}

export interface Product {
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

export interface PromoSection {
  _id: string
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

// Mock data for hero slides
export async function getHeroSlides(): Promise<HeroSlide[]> {
  return [
    {
      id: "1",
      image: "/placeholder.svg?height=600&width=1200",
      title: "RELAXATION STARTS HERE",
      subtitle: "YOUR PERSONAL SPA AWAITS!",
      buttonText: "SHOP SPAS NOW",
      buttonLink: "/category/spas",
      isActive: true,
      order: 1,
    },
    {
      id: "2",
      image: "/placeholder.svg?height=500&width=1200",
      title: "SUMMER FUN",
      subtitle: "EXPLORE OUR POOL COLLECTION",
      buttonText: "SHOP NOW",
      buttonLink: "/category/pools",
      isActive: true,
      order: 2,
    },
  ]
}

// Mock data for categories
export async function getCategories(): Promise<Category[]> {
  return [
    {
      _id: "1",
      title: "Above Ground Pools",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 1,
    },
    {
      _id: "2",
      title: "Air Mattresses",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 2,
    },
    {
      _id: "3",
      title: "PureSpa",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 3,
    },
    {
      _id: "4",
      title: "Sporting Goods",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 4,
    },
    {
      _id: "5",
      title: "Pool Floats",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 5,
    },
    {
      _id: "6",
      title: "Parts & Accessories",
      image: "/placeholder.svg?height=263&width=350",
      isActive: true,
      order: 6,
    },
  ]
}

// Mock data for products
export async function getProducts(featuredOnly = false): Promise<Product[]> {
  const products = [
    {
      _id: "1",
      title: 'Portable Foldable Pet Swimming Pool - 60" x 12" [DxH]',
      description: "Portable pool for pets",
      price: 51.99,
      image: "/placeholder.svg?height=300&width=300",
      sku: "48400EP",
      rating: 4.7,
      reviews: 23,
      freeShipping: true,
      featured: true,
      isActive: true,
      order: 1,
      date: "2023-05-15",
    },
    {
      _id: "2",
      title: "Square Frame Pet Pool Set with Filter",
      description: "Square pool for pets with filter",
      price: 179.99,
      image: "/placeholder.svg?height=300&width=300",
      sku: "48401EP",
      rating: 4.8,
      reviews: 22,
      freeShipping: true,
      featured: true,
      isActive: true,
      order: 2,
      date: "2023-06-20",
    },
    {
      _id: "3",
      title: "Inflatable Pet Bed With Hand Pump - Small",
      description: "Comfortable bed for pets",
      price: 94.99,
      image: "/placeholder.svg?height=300&width=300",
      sku: "48701EP",
      rating: 4.7,
      reviews: 29,
      freeShipping: true,
      featured: true,
      isActive: true,
      order: 3,
      date: "2023-07-10",
    },
    {
      _id: "4",
      title: "Rectangular Frame Pet Pool Set with Filter",
      description: "Rectangular pool for pets with filter",
      price: 299.99,
      image: "/placeholder.svg?height=300&width=300",
      sku: "48403EP",
      rating: 0,
      reviews: 0,
      freeShipping: true,
      featured: true,
      isActive: true,
      order: 4,
      date: "2023-08-05",
    },
  ]

  if (featuredOnly) {
    return products.filter((product) => product.featured)
  }

  return products
}

// Mock data for promo section
export async function getPromoSection(): Promise<PromoSection> {
  return {
    _id: "1",
    title: "WAKE UP TO A WHOLE NEW YOU",
    description: "Dura-Beam® air mattresses with Fiber-Tech® Construction.",
    image: "/placeholder.svg?height=600&width=1200",
    buttonText: "SHOP NOW",
    buttonLink: "/category/air-mattresses",
    backgroundColor: "#00b5c8",
    backgroundOpacity: 0.7,
    isActive: true,
  }
}
