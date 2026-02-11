import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Return Policy | Intex Qatar",
    description: "30-day return policy for Intex products in Qatar.",
}

export default function ReturnPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Intex-Qatar.com – Return Policy</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    At Intex-Qatar.com, we want you to be fully satisfied with your purchase. If for any reason you are not satisfied with a product, we offer a 30-day return policy. No return authorization number is necessary.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">To Be Eligible for a Return</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>The product must have been purchased from Intex-Qatar.com or through one of our authorized agents within the last 30 days from the date of delivery.</li>
                    <li>The item must be unused, in the same condition as received, and in the original packaging.</li>
                    <li>Products marked as final sale or non-returnable cannot be returned.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Returning a Product</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Once received and inspected, your refund will be processed within 2 business days, and a credit will be applied to your original method of payment.</li>
                </ul>
                <p className="font-semibold mt-2">Please Note: You are responsible for return shipping costs, which are non-refundable.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Defective or Incorrect Products</h2>
                <p>
                    If you receive a defective or incorrect product, please contact us immediately. Issues must be reported within 2 days of delivery. We will guide you on the next steps before you return the product.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Refunds</h2>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Refunds are processed within 2 business days of receiving the returned product. Credit will automatically be applied to your original payment method.</li>
                    <li>If your refund is delayed, please check with your bank or credit card provider, as it may take 7–10 business days to post. If issues persist, contact us <strong>Tel:- +974 44366766 / 44603294</strong>.</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-lg border mt-8">
                    <h3 className="font-bold text-gray-900 mb-2">Return Address</h3>
                    <p>
                        Bldg No. 26, St. 3013, Zone 91,<br />
                        Birkath Al Awamer, Doha, Qatar.
                    </p>
                </div>

                <p className="mt-6">
                    For any questions or assistance regarding returns or refunds, please contact us via chat or call <strong>Tel:- +974 44366766 / 44603294</strong>.
                </p>
            </div>
        </div>
    )
}
