import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { categorySchema } from "@/lib/validations/category"
import { Category } from "@/lib/models"

export async function GET() {
  try {
    console.log("Categories GET: Starting request")
    await connectToDatabase()
    console.log("Categories GET: Database connected")

    const categories = await Category.find().sort({ order: 1 })
    console.log("Categories GET: Found categories:", categories.length)

    // Return default data if no categories found
    if (!categories || categories.length === 0) {
      const defaultCategories = [
        {
          _id: "default-1",
          title: "Above Ground Pools",
          image: "/placeholder.svg?height=263&width=350",
          isActive: true,
          order: 1,
        },
        {
          _id: "default-2",
          title: "Air Mattresses",
          image: "/placeholder.svg?height=263&width=350",
          isActive: true,
          order: 2,
        },
        {
          _id: "default-3",
          title: "PureSpa",
          image: "/placeholder.svg?height=263&width=350",
          isActive: true,
          order: 3,
        },
      ]
      console.log("Categories GET: Returning default data")
      return NextResponse.json(defaultCategories)
    }

    return NextResponse.json(categories)
  } catch (error) {
    console.error("Categories GET error:", error)

    // Return default data on error
    const defaultCategories = [
      {
        _id: "default-1",
        title: "Above Ground Pools",
        image: "/placeholder.svg?height=263&width=350",
        isActive: true,
        order: 1,
      },
      {
        _id: "default-2",
        title: "Air Mattresses",
        image: "/placeholder.svg?height=263&width=350",
        isActive: true,
        order: 2,
      },
      {
        _id: "default-3",
        title: "PureSpa",
        image: "/placeholder.svg?height=263&width=350",
        isActive: true,
        order: 3,
      },
    ]

    return NextResponse.json(defaultCategories)
  }
}

export async function POST(request: Request) {
  try {
    console.log("Categories POST: Starting request")

    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      console.log("Categories POST: Unauthorized")
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    const body = await request.json()
    console.log("Categories POST: Request body received")

    // Validate request body
    const validatedData = categorySchema.parse(body)
    console.log("Categories POST: Data validated")

    await connectToDatabase()
    console.log("Categories POST: Database connected")

    // Create new category
    const category = await Category.create(validatedData)

    console.log("Categories POST: Category created")
    return NextResponse.json(category)
  } catch (error: any) {
    console.error("Categories POST error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation error", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
  }
}
