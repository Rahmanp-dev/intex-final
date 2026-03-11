"use client"

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
  data: HeroData[] | HeroData
}

export default function Hero({ data }: HeroProps) {
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
              {/* Desktop image */}
              <div className="relative w-full aspect-[1920/757] hidden sm:block">
                <Image
                  src={slide.image || "/placeholder.svg?height=757&width=1920"}
                  alt={slide.title || "Hero image"}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Desktop Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                  {slide.title && (
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 tracking-wide pointer-events-auto drop-shadow-lg">
                      {slide.title}
                    </h1>
                  )}
                  {slide.description && (
                    <p className="text-sm md:text-lg lg:text-2xl mb-4 md:mb-8 pointer-events-auto drop-shadow-lg max-w-[85%] md:max-w-[70%]">
                      {slide.description}
                    </p>
                  )}
                  {slide.buttonText && slide.buttonLink && (
                    <div className="pointer-events-auto">
                      <Button
                        asChild
                        className="bg-[#F5A623] hover:bg-[#e09510] text-white px-6 py-3 md:px-8 md:py-6 text-sm md:text-lg font-semibold rounded-none shadow-lg uppercase tracking-wider"
                      >
                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile image — shown only on small screens */}
              <div className="relative w-full aspect-[428/642] sm:hidden">
                <Image
                  src={slide.mobileImage || slide.image || "/placeholder.svg?height=642&width=428"}
                  alt={slide.title || "Hero image"}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Mobile Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
                  {slide.title && (
                    <h1 className="text-xl font-bold mb-2 tracking-wide pointer-events-auto drop-shadow-lg">
                      {slide.title}
                    </h1>
                  )}
                  {slide.description && (
                    <p className="text-xs mb-3 pointer-events-auto drop-shadow-lg max-w-[95%]">
                      {slide.description}
                    </p>
                  )}
                  {slide.buttonText && slide.buttonLink && (
                    <div className="pointer-events-auto">
                      <Button
                        asChild
                        className="bg-[#F5A623] hover:bg-[#e09510] text-white px-4 py-2 text-xs font-semibold rounded-none shadow-lg uppercase tracking-wider"
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

        {slides.length > 1 && (
          <>
            <CarouselPrevious className="left-1 sm:left-2 md:left-4 bg-white/50 hover:bg-white text-black border-none h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12" />
            <CarouselNext className="right-1 sm:right-2 md:right-4 bg-white/50 hover:bg-white text-black border-none h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12" />
          </>
        )}
      </Carousel>
    </section>
  )
}
