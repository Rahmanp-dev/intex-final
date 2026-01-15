import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/lib/models"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { generateToken } from "@/lib/auth-utils"

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key"

export const authOptions: NextAuthOptions = {
  secret: JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const auth = await authenticateUser(credentials.email, credentials.password)

        if (!auth.success || !auth.user) {
          throw new Error(auth.error || "Authentication failed")
        }

        return {
          id: auth.user.id,
          name: auth.user.name,
          email: auth.user.email,
          role: auth.user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
      }
      return session
    },
  },
}

// Authenticate user with email and password
export async function authenticateUser(email: string, password: string) {
  try {
    // Check environment variables first (Priority for Admin)
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    if (adminEmail && email === adminEmail) {
      if (password === adminPassword) {
        // Generate a token for the admin
        const token = generateToken({
          userId: "admin-env-user",
          email: adminEmail,
          role: "admin",
        })

        return {
          success: true,
          token,
          user: {
            id: "admin-env-user",
            name: "Admin User",
            email: adminEmail,
            role: "admin",
          },
        }
      } else {
        return { success: false, error: "Invalid password" }
      }
    }

    // Fallback to Database for other users (if any)
    await connectToDatabase()

    const user = await User.findOne({ email })
    if (!user) {
      return { success: false, error: "User not found" }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return { success: false, error: "Invalid password" }
    }

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    return {
      success: true,
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }
  } catch (error) {
    console.error("Authentication error:", error)
    return { success: false, error: "Authentication failed" }
  }
}
