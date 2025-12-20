import { z } from "zod"

export const promoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  image: z.string().min(1, "Image is required"),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  backgroundColor: z.string().optional(),
  backgroundOpacity: z.number().min(0).max(1).optional(),
  position: z.enum(["left", "center", "right"]).optional(),
  isActive: z.boolean().optional(),
})
