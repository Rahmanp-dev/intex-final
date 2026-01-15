import { NextResponse } from "next/server"
import { getAuthFromRequest, isAdmin } from "@/lib/auth-utils"
import { connectToDatabase } from "@/lib/mongodb"
import { heroSchema } from "@/lib/validations/hero"
import { Hero } from "@/lib/models"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDatabase()
        const hero = await Hero.findById(params.id)

        if (!hero) {
            return NextResponse.json({ error: "Hero slide not found" }, { status: 404 })
        }

        return NextResponse.json(hero)
    } catch (error) {
        console.error("Hero GET error:", error)
        return NextResponse.json({ error: "Failed to fetch hero slide" }, { status: 500 })
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const auth = getAuthFromRequest(request)
        if (!auth || !isAdmin(auth)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await request.json()
        const validatedData = heroSchema.parse(body)

        await connectToDatabase()
        const hero = await Hero.findByIdAndUpdate(params.id, validatedData, { new: true })

        if (!hero) {
            return NextResponse.json({ error: "Hero slide not found" }, { status: 404 })
        }

        return NextResponse.json(hero)
    } catch (error: any) {
        console.error("Hero PUT error:", error)
        if (error.name === "ZodError") {
            return NextResponse.json({ error: "Validation error", details: error.errors }, { status: 400 })
        }
        return NextResponse.json({ error: "Failed to update hero slide" }, { status: 500 })
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const auth = getAuthFromRequest(request)
        if (!auth || !isAdmin(auth)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        await connectToDatabase()
        const hero = await Hero.findByIdAndDelete(params.id)

        if (!hero) {
            return NextResponse.json({ error: "Hero slide not found" }, { status: 404 })
        }

        return NextResponse.json({ message: "Hero slide deleted successfully" })
    } catch (error) {
        console.error("Hero DELETE error:", error)
        return NextResponse.json({ error: "Failed to delete hero slide" }, { status: 500 })
    }
}
