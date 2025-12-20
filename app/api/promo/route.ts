import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { promoSchema } from "@/lib/validations/promo"
import { Promo } from "@/lib/models"

export async function GET() {
  try {
    console.log("Promo GET: Starting request")
    await connectToDatabase()
    console.log("Promo GET: Database connected")

    const promo = await Promo.findOne().sort({ updatedAt: -1 }).limit(1)
    console.log("Promo GET: Found promo data:", promo ? "Yes" : "No")

    // Return default data if no promo found
    if (!promo) {
      const defaultPromo = {
        title: "WAKE UP TO A WHOLE NEW YOU",
        description: "Dura-Beam® air mattresses with Fiber-Tech® Construction.",
        image: "",
        buttonText: "SHOP NOW",
        buttonLink: "/category/air-mattresses",
        backgroundColor: "#00b5c8",
        backgroundOpacity: 0.7,
        position: "right",
        isActive: true,
      }
      console.log("Promo GET: Returning default data")
      return NextResponse.json(defaultPromo)
    }

    return NextResponse.json(promo)
  } catch (error) {
    console.error("Promo GET error:", error)

    // Return default data on error
    const defaultPromo = {
      title: "WAKE UP TO A WHOLE NEW YOU",
      description: "Dura-Beam® air mattresses with Fiber-Tech® Construction.",
      image: "",
      buttonText: "SHOP NOW",
      buttonLink: "/category/air-mattresses",
      backgroundColor: "#00b5c8",
      backgroundOpacity: 0.7,
      position: "right",
      isActive: true,
    }

    return NextResponse.json(defaultPromo)
  }
}

export async function POST(request: Request) {
  try {
    console.log("Promo POST: Starting request")

    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      console.log("Promo POST: Unauthorized")
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    const body = await request.json()
    console.log("Promo POST: Request body received")

    // Validate request body
    const validatedData = promoSchema.parse(body)
    console.log("Promo POST: Data validated")

    await connectToDatabase()
    console.log("Promo POST: Database connected")

    // Update or create promo section
    const promo = await Promo.findOneAndUpdate(
      {}, // Find first document
      validatedData,
      { upsert: true, new: true },
    )

    console.log("Promo POST: Promo updated/created")
    return NextResponse.json(promo)
  } catch (error: any) {
    console.error("Promo POST error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation error", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to update promo data" }, { status: 500 })
  }
}
