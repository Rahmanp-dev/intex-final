import type React from "react"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // If user is already authenticated, redirect to home page
  const session = await getServerSession(authOptions)

  if (session) {
    // If user is admin, redirect to admin dashboard
    if (session.user?.role === "admin") {
      redirect("/admin")
    }
    // Otherwise redirect to home page
    redirect("/")
  }

  return <div className="min-h-screen bg-gray-50">{children}</div>
}
