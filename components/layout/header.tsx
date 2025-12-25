import Link from "next/link"
import Image from "next/image"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth-utils"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"

export default async function Header() {
  // Check if user has a valid JWT token
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  let isAdmin = false
  let user = null

  if (token) {
    const payload = verifyToken(token)
    if (payload) {
      isAdmin = payload.role === "admin"
      user = {
        email: payload.email,
        role: payload.role,
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container max-w-7xl flex items-center justify-between px-8 py-4 mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={190} height={60} className="h-[54px] w-auto" />
        </Link>

        <div className="flex items-center space-x-4">
          {isAdmin && (
            <Button asChild variant="outline">
              <Link href="/admin">Admin Panel</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
