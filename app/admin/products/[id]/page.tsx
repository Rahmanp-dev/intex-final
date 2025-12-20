import { notFound } from "next/navigation"
import ProductForm from "@/components/admin/product-form"
import { getProductById, getCategories } from "@/lib/server-data"

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [product, categories] = await Promise.all([getProductById(id), getCategories()])

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <ProductForm product={product} categories={categories} />
    </div>
  )
}
