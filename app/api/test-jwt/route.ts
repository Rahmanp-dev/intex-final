import { NextResponse } from "next/server"
import { authenticateUser } from "@/lib/auth"
import { verifyToken, generateToken } from "@/lib/auth-utils"

export async function POST(request: Request) {
  try {
    const { action, email, password, token } = await request.json()

    switch (action) {
      case "login":
        if (!email || !password) {
          return NextResponse.json({ error: "Email and password required" }, { status: 400 })
        }

        const loginResult = await authenticateUser(email, password)
        return NextResponse.json(loginResult)

      case "verify":
        if (!token) {
          return NextResponse.json({ error: "Token required" }, { status: 400 })
        }

        const payload = verifyToken(token)
        if (!payload) {
          return NextResponse.json({ error: "Invalid token" }, { status: 401 })
        }

        return NextResponse.json({
          success: true,
          payload,
          message: "Token is valid",
        })

      case "generate":
        // For testing - generate a token with test data
        const testToken = generateToken({
          userId: "test-user-id",
          email: "test@example.com",
          role: "admin",
        })

        return NextResponse.json({
          success: true,
          token: testToken,
          message: "Test token generated",
        })

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("JWT test error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "JWT Authentication Test Endpoint",
    usage: {
      login: 'POST with { "action": "login", "email": "admin@example.com", "password": "password123" }',
      verify: 'POST with { "action": "verify", "token": "your-jwt-token" }',
      generate: 'POST with { "action": "generate" }',
    },
  })
}
