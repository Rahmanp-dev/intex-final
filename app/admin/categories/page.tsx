import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import CategoriesTable from "@/components/admin/categories-table"
import { getCategories } from "@/lib/server-data"
import Loading from "@/components/ui/loading"

export default async function AdminCategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button asChild>
          <Link href="/admin/categories/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Category
          </Link>
        </Button>
      </div>

      <Suspense fallback={<Loading />}>
        <CategoriesTable categories={categories} />
      </Suspense>
    </div>
  )
}
