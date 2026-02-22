import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Payment Options | Intex Qatar",
    description: "Credit & Debit Cards That Can Be Used at Intex Qatar.",
}

export default function PaymentOptionsPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Payment Options Intex - Qatars of Credit & Debit Cards That Can Be Used</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    Intex-qatar.com accepts a variety of payment options, including credit and debit cards and cash on
                    delivery. The following credit and debit cards can be used as payment:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                    <li>Visa</li>
                    <li>MasterCard</li>
                    <li>American Express</li>
                    <li>Visa, MasterCard, or American Express prepaid cards</li>
                    <li>Cash on delivery (COD)</li>
                    <li>Qpay</li>
                </ul>
            </div>
        </div>
    )
}
