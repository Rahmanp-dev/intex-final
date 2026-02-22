import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Intex Qatar",
    description: "Privacy Policy for Intex Qatar website.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="font-semibold text-lg text-gray-900 border-b pb-2 mb-6">intex-qatar.com</p>
                <p>
                    This Privacy Policy explains how intex-qatar.com ("we," "our," “us”) collects, uses, stores, and
                    protects your information when you visit or make a purchase from our Website.
                </p>
                <p>
                    By using this website, you agree to the practices described in this policy. This policy forms part
                    of our Terms of Use.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Information We Collect</h2>
                <h3 className="font-medium text-gray-900 mt-4 mb-2">Personal Information</h3>
                <p>We may collect the following information when you register, place an order, or contact us:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing and delivery address</li>
                    <li>Payment details (processed securely via payment providers)</li>
                </ul>

                <h3 className="font-medium text-gray-900 mt-4 mb-2">Usage Data</h3>
                <p>We may automatically collect technical information such as:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Cookies and tracking data</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">2. Cookies & Tracking Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Enable essential website functionality</li>
                    <li>Remember your preferences</li>
                    <li>Analyze website performance</li>
                    <li>Improve user experience</li>
                </ul>
                <p>
                    You may manage or disable cookies through your browser settings. Please note that disabling
                    cookies may affect certain features of the website.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Process and deliver orders</li>
                    <li>Manage your account</li>
                    <li>Provide customer support</li>
                    <li>Send order updates and service-related communications</li>
                    <li>Send promotional offers (if you have opted in)</li>
                    <li>Improve our products, services, and website performance</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Sharing of Information</h2>
                <p className="font-semibold text-gray-900">We do not sell your personal data.</p>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Payment processors</li>
                    <li>Delivery and logistics providers</li>
                    <li>IT and hosting service providers</li>
                    <li>Legal or regulatory authorities, when required by law</li>
                </ul>
                <p>All service providers are required to handle your data securely.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Data Retention</h2>
                <p>We retain your personal information only as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Fulfill orders</li>
                    <li>Meet legal or accounting requirements</li>
                    <li>Resolve disputes</li>
                </ul>
                <p>Usage data may be retained for internal analysis and security purposes.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Your Rights</h2>
                <p>Subject to applicable Qatar laws, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (where legally permitted)</li>
                    <li>Opt out of marketing communications</li>
                </ul>
                <p>To exercise your rights, please contact us using the details below.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Data Security</h2>
                <p>
                    We use reasonable administrative, technical, and security measures to protect your personal
                    data. However, no online transmission or storage system can be guaranteed 100% secure.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Children’s Privacy</h2>
                <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly collect
                    personal data from children.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">9. Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices of those external websites.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">10. International Data Transfers</h2>
                <p>
                    Your data may be processed within Qatar or by authorized service providers in other countries,
                    provided adequate security measures are in place.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">11. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Updates will be posted on this page with a
                    revised “Last updated” date.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">12. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us via the contact details
                    provided on intex-qatar.com.
                </p>
            </div>
        </div>
    )
}
