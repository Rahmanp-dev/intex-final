import { z } from "zod"

export const heroSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  image: z.string().min(1, "Image is required"),
})
