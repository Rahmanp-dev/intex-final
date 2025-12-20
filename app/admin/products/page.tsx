import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import ProductsTable from "@/components/admin/products-table"
import { getProducts } from "@/lib/server-data"
import Loading from "@/components/ui/loading"

export default async function AdminProductsPage() {
  const products = await getProducts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <Suspense fallback={<Loading />}>
        <ProductsTable products={products} />
      </Suspense>
    </div>
  )
}
