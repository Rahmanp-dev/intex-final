import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Use | Intex Qatar",
    description: "Terms of Use for Intex Qatar website.",
}

export default function TermsOfUsePage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="font-semibold text-lg text-gray-900 border-b pb-2 mb-6">intex-qatar.com</p>
                <p>
                    Welcome to intex-qatar.com (“Website”). By accessing or purchasing from this website, you
                    agree to the following Terms of Use. Please read them carefully.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Privacy</h2>
                <p>
                    Your use of this website is also governed by our privacy policy, which explains how we collect
                    and use your information.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Electronic Communications</h2>
                <p>
                    When you visit intex-qatar.com or contact us by email, you consent to receive communications
                    electronically. All notices, agreements, and communications provided electronically satisfy any
                    legal requirement that such communications be in writing.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Copyright</h2>
                <p>
                    All content on this website, including text, graphics, logos, images, videos, downloads, and
                    software, is the property of Intex-Qatar or its licensors and is protected by applicable copyright
                    laws.
                </p>
                <p>
                    You may not reproduce, distribute, or use any content without prior written permission.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Trademarks</h2>
                <p>
                    All trademarks, logos, product names, and brand elements displayed on this website are the
                    property of Intex-Qatar or used under license. These trademarks may not be used without
                    written permission or in any way that may cause confusion or harm to the brand.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Website Use & License</h2>
                <p>
                    We grant you a limited, non-transferable, and revocable license to access and use this Website
                    for personal, non-commercial purposes only.
                </p>
                <p>You may not:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Copy, modify, or reproduce any part of the website.</li>
                    <li>Use content for commercial purposes without permission.</li>
                    <li>Use data mining, scraping, or automated tools.</li>
                </ul>
                <p>Unauthorized use will terminate this license.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Product Information & Pricing</h2>
                <p>
                    We strive to ensure product descriptions, images, and prices are accurate. However, errors may
                    occur.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Prices are confirmed at the time of order processing.</li>
                    <li>If a product is incorrectly priced, we reserve the right to cancel the order or contact you before shipment.</li>
                    <li>If a product is not as described, your remedy is to return it unused according to our return policy.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Risk of Loss</h2>
                <p>
                    Ownership and risk of loss pass to you once the product is delivered to the shipping carrier.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Disclaimer of Warranties</h2>
                <p>
                    This website is provided on an “as is” and “as available” basis. We make no warranties, express
                    or implied, regarding the operation of the website or the accuracy of its content.
                </p>
                <p className="font-semibold">Use of this website is at your own risk.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">9. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, intex-qatar.com shall not be liable for any indirect,
                    incidental, or consequential damages arising from the use of this Website or its products.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">10. Governing Law</h2>
                <p>
                    These Terms of Use shall be governed by and interpreted in accordance with the laws of the
                    State of Qatar. Any disputes shall be subject to the exclusive jurisdiction of the courts of Qatar.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">11. Changes to Terms</h2>
                <p>
                    We reserve the right to update or modify these terms at any time. Continued use of the website
                    after changes means you accept the updated terms.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">12. Contact Information</h2>
                <p>
                    For any questions regarding these terms, please contact us through the contact details provided
                    on intex-qatar.com.
                </p>
            </div>
        </div>
    )
}
