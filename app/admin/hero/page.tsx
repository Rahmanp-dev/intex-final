import HeroForm from "@/components/admin/hero-form"
import { getHero } from "@/lib/server-data"

export default async function AdminHeroPage() {
  const hero = await getHero()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hero Section</h1>
      <HeroForm hero={hero} />
    </div>
  )
}
