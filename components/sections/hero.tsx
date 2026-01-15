import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { HeroData } from "@/lib/types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface HeroProps {
  data: HeroData[] | HeroData // Handle both single object (legacy) and array
}

export default function Hero({ data }: HeroProps) {
  // Normalize data to array
  const slides = Array.isArray(data) ? data : [data]

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide._id || index}>
              <div className="relative w-full h-[500px] md:h-[757px]">
                <Image
                  src={slide.image || "/placeholder.svg?height=757&width=1920"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* No dark overlay as requested */}

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                  {/* pointer-events-none allows clicking through if needed, but buttons need pointer-events-auto */}
                  {slide.title && (
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide pointer-events-auto drop-shadow-md">
                      {slide.title}
                    </h1>
                  )}
                  {slide.description && (
                    <p className="text-xl md:text-2xl mb-8 pointer-events-auto drop-shadow-md">
                      {slide.description}
                    </p>
                  )}
                  {slide.buttonText && slide.buttonLink && (
                    <div className="pointer-events-auto">
                      <Button
                        asChild
                        className="bg-[#00b5c8] hover:bg-[#00a0b0] text-white px-8 py-6 text-lg font-semibold rounded-none shadow-lg"
                      >
                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Only show navigation arrows if there's more than one slide */}
        {slides.length > 1 && (
          <>
            <CarouselPrevious className="left-4 bg-white/50 hover:bg-white text-black border-none h-12 w-12" />
            <CarouselNext className="right-4 bg-white/50 hover:bg-white text-black border-none h-12 w-12" />
          </>
        )}
      </Carousel>
    </section>
  )
}
