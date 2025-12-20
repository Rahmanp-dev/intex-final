import ProductForm from "@/components/admin/product-form"
import { getCategories } from "@/lib/server-data"

export default async function NewProductPage() {
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Add New Product</h1>
      <ProductForm categories={categories} />
    </div>
  )
}
