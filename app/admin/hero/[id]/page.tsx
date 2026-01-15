import { notFound } from "next/navigation"
import HeroForm from "@/components/admin/hero-form"
import { getAuth } from "@/lib/auth" // Or appropriate auth check if needed server-side
import { Hero } from "@/lib/models" // We might need to fetch directly or use server-data if expanded
import { connectToDatabase } from "@/lib/mongodb"

// We can't use getHero() from server-data easily if it returns an array now, 
// unless we add a getHeroById function there. 
// For now, let's fetch directly here or add getHeroById. 
// Actually, adding getHeroById to server-data is cleaner.

import { getHeroById } from "@/lib/server-data"

interface EditHeroPageProps {
    params: {
        id: string
    }
}

export default async function EditHeroPage({ params }: EditHeroPageProps) {
    const hero = await getHeroById(params.id)

    if (!hero) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Edit Slide</h1>
            <HeroForm hero={hero} />
        </div>
    )
}
