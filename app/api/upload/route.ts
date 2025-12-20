import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { generateUniqueFileName } from "@/lib/s3-utils"

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function POST(request: Request) {
  try {
    // Check authentication using JWT
    const auth = getAuthFromRequest(request)
    if (!auth || !isAdmin(auth)) {
      return NextResponse.json({ error: "Unauthorized - Admin access required" }, { status: 401 })
    }

    // Get form data with file
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 })
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 })
    }

    // Upload to AWS S3
    const buffer = await file.arrayBuffer()
    const uniqueFileName = generateUniqueFileName(file.name)
    const directory = formData.get("directory") as string || "products"
    const key = `${directory}/${uniqueFileName}`

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: file.type,
    })

    await s3Client.send(command)

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`

    return NextResponse.json({
      success: true,
      fileUrl,
      key,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
