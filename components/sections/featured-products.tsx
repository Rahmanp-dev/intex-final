"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { ProductData } from "@/lib/types"

interface FeaturedProductsProps {
  data: ProductData[]
}

export default function FeaturedProducts({ data }: FeaturedProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Responsive items per slide: 1 on mobile, 2 on tablet, 4 on desktop
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 768) return 2
      return 4
    }
    return 4
  }

  const itemsPerSlide = 4 // for pagination dots calculation
  const totalSlides = Math.ceil(data.length / itemsPerSlide)

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }

  const visibleProducts = data.slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)

  if (!data || data.length === 0) {
    return null
  }

  return (
    <section className="py-8 sm:py-10 md:py-[55px] bg-white relative">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-[15px]">
        <h2
          className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#4a4a4a] text-center mb-6 sm:mb-8 md:mb-[40px]"
          style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif" }}
        >
          FEATURED PRODUCTS
        </h2>

        {/* Product Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-[25px] transition-all duration-500 ease-in-out">
          {visibleProducts.map((product) => (
            <div
              key={product._id}
              className="relative group rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 bg-white"
            >
              <div className="absolute inset-0 bg-yellow-400 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-black font-bold rounded shadow text-sm">MORE INFO</button>
              </div>
              <div className="z-0">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-[35px] space-x-[10px]">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all ${index === currentSlide ? "bg-[#55A4B6]" : "bg-[#ccc]"
                  }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}

        {/* Prev Arrow — hidden on mobile */}
        {currentSlide > 0 && (
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="hidden md:flex absolute top-[50%] left-0 md:left-[-20px] transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full w-[40px] h-[40px] items-center justify-center z-10 hover:bg-gray-100"
          >
            <span className="text-2xl font-bold text-gray-700">‹</span>
          </button>
        )}

        {/* Next Arrow — hidden on mobile */}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="hidden md:flex absolute top-[50%] right-0 md:right-[-20px] transform -translate-y-1/2 bg-yellow-400 text-white border-2 border-white shadow-lg rounded-full w-[40px] h-[40px] items-center justify-center z-10 hover:bg-yellow-500"
          >
            <span className="text-2xl font-bold text-white">›</span>
          </button>
        )}
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: ProductData
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product._id}`}
      className="block border border-gray-200 bg-white hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        {product.freeShipping && (
          <div className="absolute top-2 sm:top-4 left-0 bg-red-500 text-white text-[10px] sm:text-xs font-bold py-1 px-2 z-10">
            FREE SHIPPING
          </div>
        )}
        <div className="p-3 sm:p-4">
          <div className="relative aspect-square mb-3 sm:mb-4">
            <Image
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 pt-0">
        {product.rating !== undefined && product.reviews !== undefined && (
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating || 0) ? "text-blue-500" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs sm:text-sm text-gray-600">
              {product.rating?.toFixed(1)} ({product.reviews})
            </span>
          </div>
        )}
        <p className="text-[10px] sm:text-xs text-gray-500 mb-1">SKU: {product.sku}</p>
        <h3 className="font-normal text-xs sm:text-sm mb-2 text-blue-800 hover:underline h-8 sm:h-10 overflow-hidden">{product.title}</h3>
        <p className="text-lg sm:text-xl font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
