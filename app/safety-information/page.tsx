import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Safety Information | Intex Qatar",
    description: "Safety guidelines and tips for Intex pools and products.",
}

export default function SafetyPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Safety Information – Intex-Qatar</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    At Intex-Qatar, your safety is our top priority. We believe everyone deserves a fun and safe experience around water. Intex is working with safety experts to provide essential guidelines and support initiatives to make pools and outdoor spaces safer for all.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Watch the Kids</h2>
                <p>
                    Children should never be left unsupervised around water. According to the National Drowning Prevention Alliance (NDPA), USA, a child can drown in as little as 30 seconds.
                </p>
                <h3 className="font-medium text-gray-900 mt-2">Supervision Guidelines:</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Close:</strong> Stay within arm’s length of children in the pool.</li>
                    <li><strong>Constant:</strong> Give undivided attention, avoid distractions like phones or conversations.</li>
                    <li><strong>Capable:</strong> Supervisors should have swimming and CPR skills.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Learn to Swim</h2>
                <p>Everyone using the pool should know basic swimming and water safety skills, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Entering and exiting the water safely</li>
                    <li>Floating on the back</li>
                    <li>Treading water</li>
                    <li>Turning to face safety</li>
                    <li>Swimming short distances to an exit</li>
                    <li>Proper breathing techniques</li>
                </ul>
                <p className="mt-2">
                    We offer armband sets for children aged 3–5, helping them gain confidence in the water.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2">
                    <p className="text-sm font-medium">
                        ⚠️ Note: Armbands help build comfort but do not prevent drowning. Supervision is always required.
                    </p>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Secure the Pool</h2>
                <p>
                    Supervised swim time is the only safe time for children. Prevent unauthorized access by:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Installing a non-climbable, four-sided fence with a self-closing and self-latching gate.</li>
                    <li>Securing doors, gates, and windows with alarms to alert you if children approach the pool.</li>
                    <li>Removing and securing ladders when the pool is not in use.</li>
                </ul>
                <p className="mt-2 text-sm italic">
                    Our Deluxe Pool Ladder features removable steps to restrict access between swim times.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Learn Life-Saving Techniques</h2>
                <p>Quick action can save lives. Be prepared by:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Getting trained in basic water rescue, first aid, and CPR</li>
                    <li>Keeping rescue equipment and a charged phone near the pool</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Avoid the Drain</h2>
                <p>Pool drains and suction outlets can be extremely dangerous.</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Do not play or swim near drains.</li>
                    <li>Never enter a pool or spa with a loose, broken, or missing drain cover.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">The Right Setup</h2>
                <p>Proper placement and assembly are critical for safety:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Install the pool on a level surface, away from trees, power lines, and structures that a child can climb. Maintain at least 4 feet clearance.</li>
                    <li>Follow instructions carefully and double-check posts and locks.</li>
                    <li>Use a proper ladder: ensure it is the right size, has slip-resistant rungs and feet, and sits on solid, level ground.</li>
                </ul>
                <p className="mt-4 font-medium text-gray-900">
                    Quality matters. Our Ultra XTR® Frame Above-Ground Pool with Sand Filter Pump is a prime example of the safety and reliability Intex is known for.
                </p>
            </div>
        </div>
    )
}
