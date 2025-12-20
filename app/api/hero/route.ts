import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { heroSchema } from "@/lib/validations/hero"
import { Hero } from "@/lib/models"

export async function GET() {
  try {
    console.log("Hero GET: Starting request")
    await connectToDatabase()
    console.log("Hero GET: Database connected")

    const hero = await Hero.findOne().sort({ updatedAt: -1 }).limit(1)
    console.log("Hero GET: Found hero data:", hero ? "Yes" : "No")

    // Return default data if no hero found
    if (!hero) {
      const defaultHero = {
        title: "RELAXATION STARTS HERE",
        description: "YOUR PERSONAL SPA AWAITS!",
        buttonText: "SHOP SPAS NOW",
        buttonLink: "/category/spas",
        image: "",
      }
      console.log("Hero GET: Returning default data")
      return NextResponse.json(defaultHero)
    }

    return NextResponse.json(hero)
  } catch (error) {
    console.error("Hero GET error:", error)

    // Return default data on error
    const defaultHero = {
      title: "RELAXATION STARTS HERE",
      description: "YOUR PERSONAL SPA AWAITS!",
      buttonText: "SHOP SPAS NOW",
      buttonLink: "/category/spas",
      image: "",
    }

    return NextResponse.json(defaultHero)
  }
}

export async function POST(request: Request) {
  try {
    console.log("Hero POST: Starting request")

    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      console.log("Hero POST: Unauthorized")
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    const body = await request.json()
    console.log("Hero POST: Request body received")

    // Validate request body
    const validatedData = heroSchema.parse(body)
    console.log("Hero POST: Data validated")

    await connectToDatabase()
    console.log("Hero POST: Database connected")

    // Update or create hero section
    const hero = await Hero.findOneAndUpdate(
      {}, // Find first document
      validatedData,
      { upsert: true, new: true },
    )

    console.log("Hero POST: Hero updated/created")
    return NextResponse.json(hero)
  } catch (error: any) {
    console.error("Hero POST error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Validation error", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to update hero data" }, { status: 500 })
  }
}
