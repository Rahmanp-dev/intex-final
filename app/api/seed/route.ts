import { NextResponse } from "next/server"
import { seedAdminUser, checkDatabaseConnection } from "@/lib/seed"

export async function GET() {
  try {
    // First check database connection
    const connectionTest = await checkDatabaseConnection()

    if (!connectionTest.success) {
      return NextResponse.json(
        {
          error: "Database connection failed",
          details: connectionTest,
        },
        { status: 500 },
      )
    }

    // Then seed the admin user
    const result = await seedAdminUser()

    return NextResponse.json({
      ...result,
      connectionTest,
    })
  } catch (error) {
    console.error("Seed error:", error)
    return NextResponse.json(
      {
        error: "Failed to seed database",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
