import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { HeroData } from "@/lib/types"

interface HeroProps {
  data: HeroData
}

export default function Hero({ data }: HeroProps) {
  if (!data || !data.title) {
    return null
  }

  return (
    <section className="relative w-full h-[500px] md:h-[757px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={data.image || "/placeholder.svg?height=500&width=1200"}
          alt={data.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">{data.title}</h1>
          {data.description && <p className="text-xl md:text-2xl mb-8">{data.description}</p>}
          {data.buttonText && data.buttonLink && (
            <Button
              asChild
              className="bg-[#00b5c8] hover:bg-[#00a0b0] text-white px-8 py-6 text-lg font-semibold rounded-none"
            >
              <a href={data.buttonLink}>{data.buttonText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
