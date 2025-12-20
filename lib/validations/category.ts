import { z } from "zod"

export const categorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  image: z.string().min(0, "Image is required"),
  isActive: z.boolean().optional(),
  order: z.number().min(0).optional(),
})
