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
  const itemsPerSlide = 4
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
    <section className="py-[55px] bg-white relative">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <h2 className="text-[28px] font-bold text-[#4a4a4a] text-center mb-[40px]">FEATURED PRODUCTS</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] transition-all duration-500 ease-in-out">
          {visibleProducts.map((product) => (
            <div
              key={product._id}
              className="relative group rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 bg-white"
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-yellow-400 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-black font-bold rounded shadow">MORE INFO</button>
              </div>

              {/* Actual product card content */}
              <div className="z-0">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-[35px] space-x-[10px]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all ${
                index === currentSlide ? "bg-[#00b5c8]" : "bg-[#ccc]"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Prev Arrow */}
        {currentSlide > 0 && (
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="absolute top-[50%] left-[-20px] transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center z-10 hover:bg-gray-100"
          >
            <span className="text-2xl font-bold text-gray-700">‹</span>
          </button>
        )}

        {/* Next Arrow */}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="absolute top-[50%] right-[-20px] transform -translate-y-1/2 bg-yellow-400 text-white border-2 border-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center z-10 hover:bg-yellow-500"
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
      className="border border-gray-200 bg-white hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        {product.freeShipping && (
          <div className="absolute top-4 left-0 bg-red-500 text-white text-xs font-bold py-1 px-2 z-10">
            FREE SHIPPING
          </div>
        )}
        <div className="p-4">
          <div className="relative aspect-square mb-4">
            <Image
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        {product.rating !== undefined && product.reviews !== undefined && (
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? "text-blue-500" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">
              {product.rating?.toFixed(1)} ({product.reviews})
            </span>
          </div>
        )}
        <p className="text-xs text-gray-500 mb-1">SKU: {product.sku}</p>
        <h3 className="font-normal text-sm mb-2 text-blue-800 hover:underline h-10 overflow-hidden">{product.title}</h3>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
