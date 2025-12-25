import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import crypto from "crypto"
import path from "path"

const requiredEnvVars = [
  "AWS_REGION",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_S3_BUCKET_NAME",
]

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

if (missingVars.length > 0) {
  console.error(`Missing required environment variables for S3: ${missingVars.join(", ")}`)
  // We don't throw here to avoid crashing the build if these are missing during build time (though they shouldn't be needed for build)
  // But the S3Client will fail if used.
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1", // Fallback to avoid crash, but will fail auth if missing
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
})

export const generateUniqueFileName = (originalName: string) => {
  const timestamp = Date.now()
  const randomString = crypto.randomBytes(8).toString("hex")
  const extension = path.extname(originalName)
  return `${timestamp}-${randomString}${extension}`
}

export const getPresignedUploadUrl = async (
  fileName: string,
  fileType: string,
  directory: string = "products"
) => {
  const key = `${directory}/${fileName}`
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: key,
    ContentType: fileType,
  })

  try {
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 }) // URL expires in 5 minutes
    return {
      success: true,
      url: signedUrl,
      key,
      fileUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    }
  } catch (error) {
    console.error("Error generating presigned URL:", error)
    return {
      success: false,
      error: "Failed to generate upload URL",
    }
  }
}

export const buildS3Url = (key: string) => {
  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
}
