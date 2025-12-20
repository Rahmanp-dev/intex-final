import { connectToDatabase } from "@/lib/mongodb"
import { Hero, Category, Product, Promo } from "@/lib/models"
import type { HeroData, CategoryData, ProductData, PromoData, StatsData } from "@/lib/types"

// Get hero section data
export async function getHero(): Promise<HeroData> {
    try {
        await connectToDatabase()
        const hero = await Hero.findOne().sort({ updatedAt: -1 })

        if (!hero) {
            return {
                title: "RELAXATION STARTS HERE",
                description: "YOUR PERSONAL SPA AWAITS!",
                buttonText: "SHOP SPAS NOW",
                buttonLink: "/category/spas",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jODsxMthQKQyVC4LjHPt1NgfLBct61.png",
            }
        }

        return JSON.parse(JSON.stringify(hero))
    } catch (error) {
        console.error("Error fetching hero data:", error)
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
        await connectToDatabase()
        const categories = await Category.find({ isActive: true }).sort({ order: 1 })

        if (!categories || categories.length === 0) {
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

        return JSON.parse(JSON.stringify(categories))
    } catch (error) {
        console.error("Error fetching categories:", error)
        return []
    }
}

// Get category by ID
export async function getCategoryById(id: string): Promise<CategoryData | null> {
    try {
        await connectToDatabase()
        const category = await Category.findById(id)
        if (!category) return null
        return JSON.parse(JSON.stringify(category))
    } catch (error) {
        console.error(`Error fetching category ${id}:`, error)
        return null
    }
}

// Get all products
export async function getProducts(): Promise<ProductData[]> {
    try {
        await connectToDatabase()
        const products = await Product.find({ isActive: true }).sort({ order: 1 })

        if (!products || products.length === 0) {
            return []
        }

        return JSON.parse(JSON.stringify(products))
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}

// Get featured products
export async function getFeaturedProducts(): Promise<ProductData[]> {
    try {
        await connectToDatabase()
        const products = await Product.find({ isActive: true, featured: true }).sort({ order: 1 })

        if (!products || products.length === 0) {
            return []
        }

        return JSON.parse(JSON.stringify(products))
    } catch (error) {
        console.error("Error fetching featured products:", error)
        return []
    }
}

// Get product by ID
export async function getProductById(id: string): Promise<ProductData | null> {
    try {
        await connectToDatabase()
        const product = await Product.findById(id)
        if (!product) return null
        return JSON.parse(JSON.stringify(product))
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error)
        return null
    }
}

// Get promo section data
export async function getPromo(): Promise<PromoData> {
    try {
        await connectToDatabase()
        const promo = await Promo.findOne().sort({ updatedAt: -1 })

        if (!promo) {
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

        return JSON.parse(JSON.stringify(promo))
    } catch (error) {
        console.error("Error fetching promo data:", error)
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
    try {
        await connectToDatabase()

        const totalProducts = await Product.countDocuments()
        const totalCategories = await Category.countDocuments()
        // Mocking other stats for now as they might not have models yet or are complex

        return {
            totalProducts,
            newProducts: 0, // Placeholder
            totalCategories,
            totalImages: 0, // Placeholder
            storageUsed: "0 MB", // Placeholder
            recentActivity: 0, // Placeholder
            recentUpdates: [], // Placeholder
        }
    } catch (error) {
        console.error("Error fetching stats:", error)
        return {
            totalProducts: 0,
            newProducts: 0,
            totalCategories: 0,
            totalImages: 0,
            storageUsed: "0 MB",
            recentActivity: 0,
            recentUpdates: [],
        }
    }
}
