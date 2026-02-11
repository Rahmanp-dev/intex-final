import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | Intex Qatar",
    description: "Learn more about Intex Qatar, the authorized distributor of Intex products.",
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">About Intex-Qatar.com</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    At Intex-Qatar.com, everything we do revolves around quality, value, and family fun. As the authorised distributor of Intex in Qatar, we bring you premium products that are built to last, creating lasting memories for families across the country.
                </p>
                <p>
                    We offer a wide range of Inflatable Furniture, above-ground pools, spas, toys, boats, and more, all designed to provide comfort, safety, and enjoyment. With over 50 years of global experience, Intex has become a trusted name worldwide, and we are proud to represent this legacy in Qatar.
                </p>
                <p>
                    Our mission is simple: to deliver the highest quality products at affordable prices while ensuring exceptional customer service. Every product we distribute is carefully selected to meet Intex’s strict standards for quality, safety, and value.
                </p>
                <p>
                    At Intex-Qatar.com, we are also committed to sustainable practices. For more than a decade, we have collaborated with suppliers to reduce our environmental impact, including minimizing fossil fuel usage.
                </p>
                <p className="font-medium text-gray-900 text-lg">
                    Whether you’re looking to upgrade your backyard, enjoy a fun day with the family, or find reliable recreational products, Intex-Qatar.com is your trusted partner for quality and fun in Qatar.
                </p>
            </div>
        </div>
    )
}
