"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingBag, FolderTree, ImageIcon, MessageSquare, Settings, LogOut } from "lucide-react"

export default function AdminSidebar() {
  const router = useRouter()


  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      <nav className="space-y-1">
        <NavItem href="/admin/products" icon={<ShoppingBag className="h-5 w-5" />} text="Products" />
        <NavItem href="/admin/categories" icon={<FolderTree className="h-5 w-5" />} text="Categories" />
        <NavItem href="/admin/hero" icon={<ImageIcon className="h-5 w-5" />} text="Hero Section" />
        <NavItem href="/admin/promo" icon={<MessageSquare className="h-5 w-5" />} text="Promo Section" />
      </nav>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  text: string
}

function NavItem({ href, icon, text }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
    >
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  )
}
