// Data fetching functions for the application
import type { HeroData, CategoryData, ProductData, PromoData, StatsData } from "@/lib/types"

// Helper function to get the base URL
function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Browser should use relative URL
    return ""
  }
  if (process.env.VERCEL_URL) {
    // SSR should use vercel url
    return `https://${process.env.VERCEL_URL}`
  }
  // Development fallback
  return `http://localhost:${process.env.PORT ?? 3000}`
}

// Get hero section data
export async function getHero(): Promise<HeroData> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/hero`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch hero data:", res.status, res.statusText)
      throw new Error("Failed to fetch hero data")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching hero data:", error)
    // Return fallback data
    return {
      title: "RELAXATION STARTS HERE",
      description: "YOUR PERSONAL SPA AWAITS!",
      buttonText: "SHOP SPAS NOW",
      buttonLink: "/category/spas",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jODsxMthQKQyVC4LjHPt1NgfLBct61.png",
    }
  }
}

// Get categories
export async function getCategories(): Promise<CategoryData[]> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/categories`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch categories:", res.status, res.statusText)
      throw new Error("Failed to fetch categories")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching categories:", error)
    // Return fallback data
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
    ]
  }
}

// Get category by ID
export async function getCategoryById(id: string): Promise<CategoryData | null> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/categories/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      if (res.status === 404) return null
      throw new Error("Failed to fetch category")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error)
    return null
  }
}

// Get all products
export async function getProducts(): Promise<ProductData[]> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText)
      throw new Error("Failed to fetch products")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching products:", error)
    // Return fallback data
    return [
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
    ]
  }
}

// Get featured products
export async function getFeaturedProducts(): Promise<ProductData[]> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/products?featured=true`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch featured products:", res.status, res.statusText)
      throw new Error("Failed to fetch featured products")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching featured products:", error)
    // Return fallback data
    return [
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
    ]
  }
}

// Get product by ID
export async function getProductById(id: string): Promise<ProductData | null> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      if (res.status === 404) return null
      throw new Error("Failed to fetch product")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error)
    return null
  }
}

// Get promo section data
export async function getPromo(): Promise<PromoData> {
  try {
    const baseUrl = getBaseUrl()
    const res = await fetch(`${baseUrl}/api/promo`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch promo data:", res.status, res.statusText)
      throw new Error("Failed to fetch promo data")
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching promo data:", error)
    // Return fallback data
    return {
      title: "WAKE UP TO A WHOLE NEW YOU",
      description: "Dura-Beam® air mattresses with Fiber-Tech® Construction.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4cxew3WgrtCFGjQnpQ3Bj1Wv6iNwmh.png",
      buttonText: "SHOP NOW",
      buttonLink: "/category/air-mattresses",
      backgroundColor: "#00b5c8",
      backgroundOpacity: 0.7,
      position: "right",
      isActive: true,
    }
  }
}

// Get admin dashboard stats
export async function getStats(): Promise<StatsData> {
  // In a real application, this would fetch from an API
  return {
    totalProducts: 42,
    newProducts: 5,
    totalCategories: 8,
    totalImages: 87,
    storageUsed: "256 MB",
    recentActivity: 12,
    recentUpdates: [
      {
        content: "New product added: Portable Spa",
        time: "2 hours ago",
      },
      {
        content: "Hero section updated",
        time: "5 hours ago",
      },
      {
        content: "Category 'Pools' updated",
        time: "1 day ago",
      },
      {
        content: "Promo section updated",
        time: "2 days ago",
      },
    ],
  }
}
