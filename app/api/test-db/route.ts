import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Product, Category, Hero, Promo } from "@/lib/models"

export async function GET() {
  try {
    console.log("Testing database connection...")

    await connectToDatabase()
    console.log("Database connected successfully")

    // Test creating a simple product
    const testProduct = {
      title: "Test Product",
      price: 99.99,
      image: "/placeholder.svg",
      sku: "TEST-001",
      featured: true,
      isActive: true,
    }

    console.log("Creating test product...")
    const product = await Product.create(testProduct)
    console.log("Test product created:", product._id)

    // Clean up - delete the test product
    await Product.findByIdAndDelete(product._id)
    console.log("Test product deleted")

    // Get counts
    const productCount = await Product.countDocuments()
    const categoryCount = await Category.countDocuments()
    const heroCount = await Hero.countDocuments()
    const promoCount = await Promo.countDocuments()

    return NextResponse.json({
      success: true,
      message: "Database test completed successfully",
      counts: {
        products: productCount,
        categories: categoryCount,
        heroes: heroCount,
        promos: promoCount,
      },
      testProduct: {
        created: true,
        id: product._id,
        deleted: true,
      },
    })
  } catch (error) {
    console.error("Database test failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
