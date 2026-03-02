import { MetadataRoute } from 'next'
import { connectToDatabase } from '@/lib/mongodb'
import { Product, Category } from '@/lib/models'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://intex-qatar.com'

    // Fetch dynamic routes
    let products: any[] = []
    let categories: any[] = []

    try {
        await connectToDatabase()
        products = await Product.find({}).lean()
        categories = await Category.find({}).lean()
    } catch (error) {
        console.error('Error fetching data for sitemap:', error)
    }

    const productUrls = products.map((product) => ({
        url: `${baseUrl}/products/${product._id}`, // Assuming _id is used for product routing based on typical Next.js setups, or slug if available
        lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    const categoryUrls = categories.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: category.updatedAt ? new Date(category.updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const staticUrls = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/warranty`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/return-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/safety-information`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/payment-options`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/terms-of-use`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/accessibility-statement`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ]

    return [...staticUrls, ...categoryUrls, ...productUrls]
}
