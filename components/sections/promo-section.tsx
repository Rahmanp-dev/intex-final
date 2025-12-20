import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { PromoData } from "@/lib/types"

interface PromoSectionProps {
  data: PromoData
}

export default function PromoSection({ data }: PromoSectionProps) {
  if (!data || !data.title) {
    return null
  }

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.image || "/placeholder.svg?height=500&width=1200"}
          alt={data.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-left from-black/50 to-transparent" />
      <div className="relative h-full flex items-center justify-end">
        <div className="max-w-lg mr-8 md:mr-16 lg:mr-24 text-right">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-white text-sm md:text-base lg:text-lg mb-6 opacity-90">{data.description}</p>
          )}
          {data.buttonText && data.buttonLink && (
            <Button
              asChild
              className="bg-[#00b5c8] hover:bg-[#00a0b0] text-white px-8 py-3 text-sm md:text-base font-semibold tracking-wider"
            >
              <Link href={data.buttonLink}>{data.buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
