import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Accessibility Statement | Intex Qatar",
    description: "Accessibility Statement for Intex Qatar website.",
}

export default function AccessibilityStatementPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="font-semibold text-lg text-gray-900 border-b pb-2 mb-6">intex-qatar.com</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Our Commitment</h2>
                <p>
                    At intex-qatar.com, we are committed to ensuring that our website is accessible and usable for
                    all customers, including people with disabilities and users of assistive technologies such as
                    screen readers.
                </p>
                <p>
                    We continuously work to improve the accessibility of our website in line with internationally
                    recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG).
                    Our goal is to provide an inclusive digital experience for all users.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Accessibility Features</h2>
                <p>To support accessibility, our website:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Follows modern accessibility best practices</li>
                    <li>Is tested using automated accessibility tools</li>
                    <li>Is reviewed and improved where issues are identified</li>
                    <li>Supports screen readers and keyboard navigation</li>
                </ul>
                <p>
                    Where available, users can activate accessibility tools via the “Enable Accessibility” option on
                    the website.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Ongoing Improvements</h2>
                <p>
                    Accessibility is an ongoing process. While we strive to ensure full accessibility across all pages
                    and features, some content or third-party integrations may occasionally present challenges. We
                    are committed to addressing accessibility issues promptly when identified.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Need Assistance?</h2>
                <p>
                    If you experience difficulty accessing any part of intex-qatar.com or need assistance, please
                    contact us with details of the issue, including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>The webpage URL</li>
                    <li>The nature of the accessibility concern</li>
                </ul>
                <p>
                    We will make reasonable efforts to provide the information or service you need in an accessible
                    format.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact Information</h2>
                <p>
                    Please reach out to us using the contact details provided on intex-qatar.com.
                </p>
            </div>
        </div>
    )
}
