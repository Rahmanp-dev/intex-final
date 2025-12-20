import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export interface PromoSection {
  _id: string
  title: string
  description?: string
  image: string
  buttonText?: string
  buttonLink?: string
  backgroundColor?: string
  backgroundOpacity?: number
  position?: string
  isActive?: boolean
}

interface PromoSectionProps {
  promo: PromoSection
}

export default function PromoSection({ promo }: PromoSectionProps) {
  if (!promo) return null

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={promo.image || "/placeholder.svg?height=500&width=1200"}
          alt={promo.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-left from-black/50 to-transparent" />
      <div className="relative h-full flex items-center justify-end">
        <div className="max-w-lg mr-8 md:mr-16 lg:mr-24 text-right">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
            {promo.title}
          </h2>
          {promo.description && (
            <p className="text-white text-sm md:text-base lg:text-lg mb-6 opacity-90">{promo.description}</p>
          )}
          {promo.buttonText && promo.buttonLink && (
            <Button
              asChild
              className="bg-[#00b5c8] hover:bg-[#00a0b0] text-white px-8 py-3 text-sm md:text-base font-semibold tracking-wider"
            >
              <Link href={promo.buttonLink}>{promo.buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
