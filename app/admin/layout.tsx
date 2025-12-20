import type React from "react"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth-utils"
import AdminSidebar from "@/components/admin/sidebar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user has a valid JWT token
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    redirect("/auth/signin")
  }

  // Verify the token
  const payload = verifyToken(token)
  if (!payload || payload.role !== "admin") {
    redirect("/auth/signin")
  }


  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}
