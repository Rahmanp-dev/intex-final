"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth-utils"
import type { z } from "zod"
import type { productSchema } from "@/lib/validations/product"
import type { categorySchema } from "@/lib/validations/category"
import type { heroSchema } from "@/lib/validations/hero"
import type { promoSchema } from "@/lib/validations/promo"

// Helper function to check authentication
async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    throw new Error("Unauthorized: No authentication token")
  }

  const payload = verifyToken(token)
  if (!payload || payload.role !== "admin") {
    throw new Error("Unauthorized: Admin access required")
  }

  return payload
}

// Helper function to get the base URL
function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${process.env.PORT ?? 3000}`
}

// Helper function to make authenticated requests
async function makeAuthenticatedRequest(url: string, options: RequestInit = {}) {
  const auth = await checkAuth()

  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`Request failed: ${response.status} ${response.statusText}`, errorText)
    throw new Error(`Request failed: ${response.status} ${response.statusText}`)
  }

  return response
}

// Product actions
export async function createProduct(data: z.infer<typeof productSchema>) {
  try {
    console.log("Creating product with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/products`, {
      method: "POST",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Product created successfully:", result)

    revalidatePath("/admin/products")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error("Error creating product:", error)
    throw error
  }
}

export async function updateProduct(id: string, data: z.infer<typeof productSchema>) {
  try {
    console.log("Updating product:", id, "with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Product updated successfully:", result)

    revalidatePath("/admin/products")
    revalidatePath(`/admin/products/${id}`)
    revalidatePath("/")
    return result
  } catch (error) {
    console.error(`Error updating product ${id}:`, error)
    throw error
  }
}

export async function deleteProduct(id: string) {
  try {
    console.log("Deleting product:", id)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/products/${id}`, {
      method: "DELETE",
    })

    const result = await response.json()
    console.log("Product deleted successfully:", result)

    revalidatePath("/admin/products")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error)
    throw error
  }
}

// Category actions
export async function createCategory(data: z.infer<typeof categorySchema>) {
  try {
    console.log("Creating category with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/categories`, {
      method: "POST",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Category created successfully:", result)

    revalidatePath("/admin/categories")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error("Error creating category:", error)
    throw error
  }
}

export async function updateCategory(id: string, data: z.infer<typeof categorySchema>) {
  try {
    console.log("Updating category:", id, "with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/categories/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Category updated successfully:", result)

    revalidatePath("/admin/categories")
    revalidatePath(`/admin/categories/${id}`)
    revalidatePath("/")
    return result
  } catch (error) {
    console.error(`Error updating category ${id}:`, error)
    throw error
  }
}

export async function deleteCategory(id: string) {
  try {
    console.log("Deleting category:", id)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/categories/${id}`, {
      method: "DELETE",
    })

    const result = await response.json()
    console.log("Category deleted successfully:", result)

    revalidatePath("/admin/categories")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error(`Error deleting category ${id}:`, error)
    throw error
  }
}

// Hero section actions
export async function updateHero(data: z.infer<typeof heroSchema>) {
  try {
    console.log("Updating hero with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/hero`, {
      method: "POST",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Hero updated successfully:", result)

    revalidatePath("/admin/hero")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error("Error updating hero section:", error)
    throw error
  }
}

// Promo section actions
export async function updatePromo(data: z.infer<typeof promoSchema>) {
  try {
    console.log("Updating promo with data:", data)

    const baseUrl = getBaseUrl()
    const response = await makeAuthenticatedRequest(`${baseUrl}/api/promo`, {
      method: "POST",
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log("Promo updated successfully:", result)

    revalidatePath("/admin/promo")
    revalidatePath("/")
    return result
  } catch (error) {
    console.error("Error updating promo section:", error)
    throw error
  }
}

// Direct database operations (alternative approach)
export async function createProductDirect(data: z.infer<typeof productSchema>) {
  try {
    console.log("Creating product directly in database:", data)

    // Check authentication
    await checkAuth()

    // Import here to avoid issues with server-only code
    const { connectToDatabase } = await import("@/lib/mongodb")
    const { Product } = await import("@/lib/models")
    const { productSchema } = await import("@/lib/validations/product")

    // Validate data
    const validatedData = productSchema.parse(data)

    // Connect to database
    await connectToDatabase()

    // Create product
    const product = await Product.create(validatedData)
    console.log("Product created directly:", product)

    revalidatePath("/admin/products")
    revalidatePath("/")

    return JSON.parse(JSON.stringify(product))
  } catch (error) {
    console.error("Error creating product directly:", error)
    throw error
  }
}

export async function updateProductDirect(id: string, data: z.infer<typeof productSchema>) {
  try {
    console.log("Updating product directly in database:", id, data)

    // Check authentication
    await checkAuth()

    // Import here to avoid issues with server-only code
    const { connectToDatabase } = await import("@/lib/mongodb")
    const { Product } = await import("@/lib/models")
    const { productSchema } = await import("@/lib/validations/product")

    // Validate data
    const validatedData = productSchema.parse(data)

    // Connect to database
    await connectToDatabase()

    // Update product
    const product = await Product.findByIdAndUpdate(id, validatedData, { new: true })

    if (!product) {
      throw new Error("Product not found")
    }

    console.log("Product updated directly:", product)

    revalidatePath("/admin/products")
    revalidatePath(`/admin/products/${id}`)
    revalidatePath("/")

    return JSON.parse(JSON.stringify(product))
  } catch (error) {
    console.error("Error updating product directly:", error)
    throw error
  }
}
