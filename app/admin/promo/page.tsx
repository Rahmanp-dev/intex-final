import PromoForm from "@/components/admin/promo-form"
import { getPromo } from "@/lib/server-data"

export default async function AdminPromoPage() {
  const promo = await getPromo()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Promo Section</h1>
      <PromoForm promo={promo} />
    </div>
  )
}
