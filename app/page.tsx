import { Suspense } from "react"
import Hero from "@/components/sections/hero"
import Categories from "@/components/sections/categories"
import PromoSection from "@/components/sections/promo-section"
import FeaturedProducts from "@/components/sections/featured-products"
import Footer from "@/components/sections/footer"
import { getHero, getCategories, getPromo, getFeaturedProducts } from "@/lib/server-data"
import Loading from "@/components/ui/loading"

export default async function HomePage() {
  // Fetch data for each section
  const heroData = await getHero()
  const categoriesData = await getCategories()
  const promoData = await getPromo()
  const featuredProductsData = await getFeaturedProducts()

  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <Hero data={heroData} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Categories data={categoriesData} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PromoSection data={promoData} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <FeaturedProducts data={featuredProductsData} />
      </Suspense>

      <Footer />
    </main>
  )
}
