"use server"

import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/lib/models"
import bcrypt from "bcryptjs"

export async function seedAdminUser() {
  try {
    console.log("Starting admin user seeding...")
    await connectToDatabase()

    // Check if admin user already exists
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com"
    const adminPassword = process.env.ADMIN_PASSWORD || "password123"

    const existingAdmin = await User.findOne({ email: adminEmail })

    if (existingAdmin) {
      console.log("Admin user already exists")
      return { success: true, message: "Admin user already exists", user: existingAdmin }
    }

    // Create admin user
    console.log("Creating new admin user...")
    const hashedPassword = await bcrypt.hash(adminPassword, 12)

    const adminUser = await User.create({
      name: "Admin User",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    })

    console.log("Admin user created successfully:", adminUser.email)
    return { success: true, message: "Admin user created successfully", user: adminUser }
  } catch (error) {
    console.error("Error seeding admin user:", error)
    return { success: false, message: "Failed to seed admin user", error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function checkDatabaseConnection() {
  try {
    await connectToDatabase()

    // Test the connection by counting users
    const userCount = await User.countDocuments()

    return {
      success: true,
      message: "Database connection successful",
      userCount,
    }
  } catch (error) {
    console.error("Database connection test failed:", error)
    return {
      success: false,
      message: "Database connection failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
