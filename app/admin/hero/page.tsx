import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { getHero } from "@/lib/server-data"
import { DeleteSlideButton } from "@/components/admin/delete-slide-button"

export default async function AdminHeroPage() {
  const heroes = await getHero()
  // Ensure array
  const slides = Array.isArray(heroes) ? heroes : [heroes]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Hero Slides</h1>
        <Button asChild>
          <Link href="/admin/hero/new">
            <Plus className="w-4 h-4 mr-2" />
            Add Slide
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {slides.map((slide) => (
          <div key={slide._id || "default"} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={slide.image || "/placeholder.svg?height=300&width=600"}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-semibold truncate">{slide.title}</h3>
                <p className="text-sm text-gray-500 truncate">{slide.description}</p>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t">
                {slide._id && (
                  <>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/hero/${slide._id}`}>
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit
                      </Link>
                    </Button>
                    <DeleteSlideButton id={slide._id} />
                  </>
                )}
                {!slide._id && (
                  <span className="text-xs text-gray-400 italic">Default Slide (Create one to override)</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
          <p className="text-gray-500 mb-4">No slides found</p>
          <Button asChild>
            <Link href="/admin/hero/new">Create First Slide</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
