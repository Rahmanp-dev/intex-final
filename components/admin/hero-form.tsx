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
import { heroSchema } from "@/lib/validations/hero"
import type { HeroData } from "@/lib/types"
import ImageUploader from "@/components/ui/image-uploader"

interface HeroFormProps {
  hero?: HeroData
}

export default function HeroForm({ hero }: HeroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof heroSchema>>({
    resolver: zodResolver(heroSchema) as any,
    defaultValues: {
      title: hero?.title || "",
      description: hero?.description || "",
      buttonText: hero?.buttonText || "",
      buttonLink: hero?.buttonLink || "",
      image: hero?.image || "",
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

  const onSubmit = async (values: z.infer<typeof heroSchema>) => {
    try {
      setIsSubmitting(true)

      const token = getAuthToken()
      if (!token) {
        throw new Error("No authentication token found")
      }

      const response = await fetch("/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to update hero section")
      }

      const result = await response.json()
      console.log("Hero section updated successfully:", result)

      toast({
        title: "Hero section updated",
        description: "The hero section has been successfully updated.",
      })

      router.refresh()
    } catch (error) {
      console.error("Error updating hero section:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update hero section. Please try again.",
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
                      <Input placeholder="Hero title" {...field} />
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
                      <Input placeholder="Hero description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <ImageUploader
                      onImageUpload={handleImageUpload}
                      currentImage={field.value}
                      label="Background Image"
                    />
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
