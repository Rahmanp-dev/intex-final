
import { NextRequest, NextResponse } from "next/server"
import { getPresignedUploadUrl, generateUniqueFileName } from "@/lib/s3-utils"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get("Authorization")
    console.log("Upload API: Auth Header:", authHeader ? `${authHeader.substring(0, 20)}...` : "Missing")

    const auth = getAuthFromRequest(request)
    console.log("Upload API: Auth Result:", auth ? "Success" : "Failed")

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized - Invalid or missing token" }, { status: 401 })
    }

    if (!isAdmin(auth)) {
      console.log("Upload API: Admin check failed. Role:", auth.role)
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 })
    }

    const { fileName, fileType, directory } = await request.json()

    if (!fileName || !fileType) {
      return NextResponse.json(
        { error: "fileName and fileType are required" },
        { status: 400 }
      )
    }

    // Validate file type (allow only images)
    if (!fileType.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 }
      )
    }

    const uniqueFileName = generateUniqueFileName(fileName)
    const result = await getPresignedUploadUrl(uniqueFileName, fileType, directory)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in presigned URL generation:", error)
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    )
  }
}
