import { notFound } from "next/navigation"
import CategoryForm from "@/components/admin/category-form"
import { getCategoryById } from "@/lib/server-data"

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const category = await getCategoryById(id)

  if (!category) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Category</h1>
      <CategoryForm category={category} />
    </div>
  )
}
