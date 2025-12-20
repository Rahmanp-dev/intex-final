import { z } from "zod"

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  image: z.string().min(0, "Image is required"),
  sku: z.string().min(1, "SKU is required"),
  rating: z.number().min(0).max(5).optional(),
  reviews: z.number().min(0).optional(),
  freeShipping: z.boolean().optional(),
  featured: z.boolean().optional(),
  isActive: z.boolean().optional(),
  order: z.number().min(0).optional(),
  category: z.string().optional(),
})
