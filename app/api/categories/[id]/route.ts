import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { categorySchema } from "@/lib/validations/category"
import { Category } from "@/lib/models"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    await connectToDatabase()
    const category = await Category.findById(id)

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(category)
  } catch (error) {
    console.error("Category GET error:", error)
    return NextResponse.json({ error: "Failed to fetch category" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    const body = await request.json()

    // Validate request body
    const validatedData = categorySchema.parse(body)

    await connectToDatabase()

    // Update category
    const category = await Category.findByIdAndUpdate(id, validatedData, { new: true })

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json(category)
  } catch (error: any) {
    console.error("Category PUT error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation error", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to update category" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    await connectToDatabase()

    // Delete category
    const category = await Category.findByIdAndDelete(id)

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Category DELETE error:", error)
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 })
  }
}
