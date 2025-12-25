import Link from "next/link"
import Image from "next/image"
import type { CategoryData } from "@/lib/types"

interface CategoriesProps {
  data: CategoryData[]
}

export default function Categories({ data }: CategoriesProps) {
  if (!data || data.length === 0) {
    return null
  }

  return (
    <section className="max-w-6xl mx-auto my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: CategoryData
}

function CategoryCard({ category }: CategoryCardProps) {
  const href = category.slug || "#"
  const isExternal = href.startsWith("http")

  return (
    <div className="relative h-64 group">
      <Link href={href} className="absolute inset-0 rounded-xl z-10" target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        <span className="sr-only">View {category.title}</span>
      </Link>
      <div className="w-full h-full relative">
        <Image
          src={category.image || "/placeholder.svg?height=263&width=350"}
          alt={category.title || "Category"}
          fill
          className="object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#00b5c8] to-transparent text-white text-lg font-semibold p-3 rounded-xl text-center">
          <h3 className="text-white font-medium text-xl">{category.title}</h3>
          {category.description && <p className="text-sm text-gray-200 mt-1">{category.description}</p>}
        </div>
      </div>
    </div>
  )
}
