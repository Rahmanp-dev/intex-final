import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { productSchema } from "@/lib/validations/product"
import { Product } from "@/lib/models"
import { ZodError } from "zod"

export async function GET(request: Request) {
  try {
    console.log("Products GET: Starting request")

    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured") === "true"
    console.log("Products GET: Featured filter:", featured)

    await connectToDatabase()
    console.log("Products GET: Database connected")

    let query = {}
    if (featured) {
      query = { featured: true }
    }

    const products = await Product.find(query).sort({ order: 1 })
    console.log("Products GET: Found products:", products.length)

    // Return default data if no products found
    if (!products || products.length === 0) {
      const defaultProducts = [
        {
          _id: "default-1",
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
          _id: "default-2",
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
      ]

      const filteredDefaults = featured ? defaultProducts.filter((p) => p.featured) : defaultProducts
      console.log("Products GET: Returning default data")
      return NextResponse.json(filteredDefaults)
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("Products GET error:", error)

    // Return default data on error
    const defaultProducts = [
      {
        _id: "default-1",
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

    return NextResponse.json(defaultProducts)
  }
}

export async function POST(request: Request) {
  try {
    console.log("Products POST: Starting request")

    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      console.log("Products POST: Unauthorized")
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    const body = await request.json()
    console.log("Products POST: Request body received:", JSON.stringify(body, null, 2))

    // Validate request body
    try {
      const validatedData = productSchema.parse(body)
      console.log("Products POST: Data validated successfully")

      await connectToDatabase()
      console.log("Products POST: Database connected")

      // Create new product
      const product = await Product.create(validatedData)
      console.log("Products POST: Product created successfully:", product._id)

      return NextResponse.json(product)
    } catch (validationError) {
      console.error("Products POST: Validation error:", validationError)
      if (validationError instanceof ZodError) {
        return NextResponse.json({ error: "Validation error", details: (validationError as any).errors }, { status: 400 })
      }
      throw validationError
    }
  } catch (error: any) {
    console.error("Products POST error:", error)
    console.error("Error stack:", error.stack)

    return NextResponse.json(
      {
        error: "Failed to create product",
        details: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
