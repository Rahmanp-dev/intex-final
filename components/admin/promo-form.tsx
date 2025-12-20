"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { promoSchema } from "@/lib/validations/promo"
import type { PromoData } from "@/lib/types"
import ImageUploader from "@/components/ui/image-uploader"

interface PromoFormProps {
  promo?: PromoData
}

export default function PromoForm({ promo }: PromoFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof promoSchema>>({
    resolver: zodResolver(promoSchema),
    defaultValues: {
      title: promo?.title || "",
      description: promo?.description || "",
      buttonText: promo?.buttonText || "",
      buttonLink: promo?.buttonLink || "",
      image: promo?.image || "",
      backgroundColor: promo?.backgroundColor || "#00b5c8",
      backgroundOpacity: promo?.backgroundOpacity || 0.7,
      position: promo?.position || "right",
      isActive: promo?.isActive !== false,
    },
  })

  const handleImageUpload = (imageUrl: string) => {
    form.setValue("image", imageUrl)
  }

  const getAuthToken = () => {
    // Get JWT token from cookie
    const cookies = document.cookie.split(";")
    const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth-token="))
    return authCookie ? authCookie.split("=")[1] : null
  }

  const onSubmit = async (values: z.infer<typeof promoSchema>) => {
    try {
      setIsSubmitting(true)

      const token = getAuthToken()
      if (!token) {
        throw new Error("No authentication token found")
      }

      const response = await fetch("/api/promo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to update promo section")
      }

      const result = await response.json()
      console.log("Promo section updated successfully:", result)

      toast({
        title: "Promo section updated",
        description: "The promo section has been successfully updated.",
      })

      router.refresh()
    } catch (error) {
      console.error("Error updating promo section:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update promo section. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Promo title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Promo description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <FormField
                  control={form.control}
                  name="buttonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Shop Now" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="buttonLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Button Link</FormLabel>
                      <FormControl>
                        <Input placeholder="/category/featured" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="backgroundColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Color</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input type="color" className="w-12 h-10 p-1" {...field} />
                          <Input type="text" value={field.value} onChange={field.onChange} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="backgroundOpacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Opacity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          max="1"
                          placeholder="0.7"
                          {...field}
                          onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <ImageUploader
                      onImageUpload={handleImageUpload}
                      currentImage={field.value}
                      label="Background Image"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Content Position</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant={field.value === "left" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => field.onChange("left")}
                        >
                          Left
                        </Button>
                        <Button
                          type="button"
                          variant={field.value === "center" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => field.onChange("center")}
                        >
                          Center
                        </Button>
                        <Button
                          type="button"
                          variant={field.value === "right" ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => field.onChange("right")}
                        >
                          Right
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}
