import { NextResponse } from "next/server"
import { getAuthFromRequest } from "@/lib/auth-utils"

export async function GET(request: Request) {
  try {
    const auth = getAuthFromRequest(request)

    if (!auth) {
      return NextResponse.json({ error: "Invalid or missing token" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: auth.userId,
        email: auth.email,
        role: auth.role,
      },
    })
  } catch (error) {
    console.error("Token verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
