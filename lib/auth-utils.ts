import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key"

export interface JWTPayload {
    userId: string
    email: string
    role: string
    iat?: number
    exp?: number
}

// Generate JWT token
export function generateToken(payload: Omit<JWTPayload, "iat" | "exp">): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JWTPayload
    } catch (error) {
        console.error("Token verification failed:", error)
        return null
    }
}

// Middleware to verify authentication from request headers
export function getAuthFromRequest(request: Request): JWTPayload | null {
    const authHeader = request.headers.get("Authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix
    return verifyToken(token)
}

// Check if user is admin
export function isAdmin(auth: JWTPayload | null): boolean {
    return auth?.role === "admin"
}
