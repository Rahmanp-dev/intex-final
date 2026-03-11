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
    <section className="max-w-[1200px] mx-auto my-6 sm:my-8 md:my-10 px-3 sm:px-4">
      <div className="bg-white rounded-md p-3 sm:p-4 md:p-5 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-[8px] md:gap-[10px]">
          {data.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
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
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block overflow-hidden rounded relative"
    >
      {/* Image fills entire card */}
      <div className="relative w-full" style={{ paddingBottom: "70%" }}>
        <Image
          src={category.image || "/placeholder.svg?height=220&width=400"}
          alt={category.title || "Category"}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
        />
        {/* Exact intexcorp.com gradient overlay: blue fading up from bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgb(42, 172, 209) 0px, rgba(11, 204, 244, 0) 46%)",
          }}
        />
        {/* Title — exact: PT Sans 21px/700/white/centered, positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-center pb-3 sm:pb-4 px-2">
          <h3
            style={{
              fontFamily: "'PT Sans', sans-serif",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: "1.3",
            }}
            className="text-[14px] sm:text-[17px] md:text-[21px]"
          >
            {category.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
