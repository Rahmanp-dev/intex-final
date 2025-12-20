"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Upload, Loader2 } from "lucide-react"

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void
  currentImage?: string
  label?: string
  className?: string
}

export default function ImageUploader({
  onImageUpload,
  currentImage,
  label = "Upload Image",
  className = "",
}: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(currentImage || null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file")
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Get presigned URL
      const presignedResponse = await fetch("/api/upload/presigned", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          directory: "products", // Can be customized based on usage
        }),
      })

      if (!presignedResponse.ok) {
        const errorData = await presignedResponse.json().catch(() => ({}))
        throw new Error(errorData.error || `Upload failed with status: ${presignedResponse.status}`)
      }

      const { url, fileUrl } = await presignedResponse.json()

      // Upload to S3 using presigned URL
      const uploadResponse = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file")
      }

      setImageUrl(fileUrl)
      onImageUpload(fileUrl)
      setError(null)
    } catch (error) {
      console.error("Upload error:", error)
      setImageUrl(null)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Label>{label}</Label>

      {/* Image Preview */}
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Preview"
            width={400}
            height={256}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">No image selected</p>
          </div>
        )}
      </div>

      {/* Upload Input */}
      <div className="flex items-center justify-center">
        <Label
          htmlFor="image-upload"
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md flex items-center transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              {imageUrl ? "Change Image" : "Upload Image"}
            </>
          )}
        </Label>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          disabled={isLoading}
        />
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-sm bg-red-50 p-2 rounded-md">{error}</div>}

      {/* Loading State */}
      {isLoading && (
        <div className="text-center">
          <div className="inline-flex items-center text-sm text-gray-600">
            <Loader2 className="animate-spin h-4 w-4 mr-2" />
            Uploading image...
          </div>
        </div>
      )}
    </div>
  )
}
