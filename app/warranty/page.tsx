import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Warranty Policy | Intex Qatar",
    description: "Limited Warranty Policy for Intex products in Qatar.",
}

export default function WarrantyPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Intex Qatar – Limited Warranty Policy</h1>

            <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                    Your Intex product has been manufactured using high-quality materials and workmanship. All products are inspected for defects before leaving the factory. This Limited Warranty applies only to the original purchaser and is not transferable. Proof of purchase (original sales receipt) is required for all warranty claims.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Limited Warranty Period</h2>
                <p>The warranty period depends on the product. Please refer to the specific product below:</p>

                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Category: ABOVE GROUND POOLS</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Easy set: 180 days</li>
                            <li>Oval Frame: 1 year</li>
                            <li>Metal Frame: 1 Year</li>
                            <li>Prism Frame: 1 Year</li>
                            <li>Ultra Frame: 1 year</li>
                            <li>Ultra XTR Frame: 1 year</li>
                            <li>Graphite Gray Panel: 1 year</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 mb-2">Category: KRYSTAL CLEAR FILTRATION & SANITATION</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Cartridge Filter Pump (300/550/1000/1500 Gph): Filter Motor: 1 year, House or Inlet/outlet Fittings: 180 days</li>
                            <li>Cartridge Filter Pump (2500 Gph): Filter Motor: 1 year, House or Inlet/outlet Fittings: 180 days</li>
                            <li>Sand Filter Pump: Filter Motor: 1 year, House or Inlet/outlet Fittings: 180 days</li>
                            <li>Saltwater System: Filter Motor: 1 year, House or Inlet/outlet Fittings: 180 days, Titanium/ECO Plate/Ozone Generator Assembly: 1 year</li>
                            <li>Sand Filter Pump and Saltwater System Combination System: 1 year, House or Inlet/outlet Fittings: 180 days, Titanium/ECO Plate/Ozone Generator Assembly: 1 year</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 mb-2">Category: Pool Accessory</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Ground Cloth: NA</li>
                            <li>Debris/Deluxe Pool Cover: NA</li>
                            <li>Solar Cover: NA</li>
                            <li>Ladder: 1 Year</li>
                            <li>Auto Pool Cleaner: 6 Months</li>
                            <li>Pool Maintenance Kit: NA</li>
                            <li>Deluxe Pool Maintenance kit: NA</li>
                            <li>Surface Skimmer: NA</li>
                            <li>Solar Mat: NA</li>
                            <li>Solar Cover Reel: NA</li>
                            <li>Pool Canopy: NA</li>
                            <li>LED Pool Light: 6 Months</li>
                            <li>Pool Drain Pump: 6 Months</li>
                            <li>Hydro Flow Swim Triner: 6 Months</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Category: Air Mattresses</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Dura-Beam Standard Air Mattress: 90 days</li>
                            <li>Dura-Beam Plus Air Mattress: 180 days</li>
                            <li>Dura-Beam Deluxe Air Mattress: 1 Year</li>
                            <li>Dura-Beam Campind Air Mattress: NA</li>
                            <li>Dura-Beam PremAire Air Mattress: 1 year</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 mb-2">Category: Boats</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Sports Series: 90 days</li>
                            <li>Pro Series: 90 days</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 mb-2">Category: Spa</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>PureSpa Bubble Massage Set: 6 Months</li>
                            <li>PureSpa Jet and Bubble Deluxe Set: 6 Months</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 mb-2">Category: Accessory</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Multi-Colored Battery Operated LED Light for Bubble Spa: 6 Months</li>
                            <li>Multi-Colored LED Light with Hydroelectric Power for Jet or Bubble Spa: 6 Months</li>
                            <li>Rechargeable Handheld Vacuum: 6 Months</li>
                            <li>Inflatable Bench: NA</li>
                            <li>Cup Holder: NA</li>
                            <li>Headrest: NA</li>
                            <li>Floating Dispenser: NA</li>
                            <li>Spa Seat: NA</li>
                            <li>Tower Rack: NA</li>
                            <li>Spa Maintenance Kit: NA</li>
                            <li>Energy Efficiency Spa Cover: NA</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-4 italic">
                    The warranty period begins from the date of initial retail purchase or delivery, whichever is earlier.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">What Is Covered</h2>
                <p>If a manufacturing defect occurs within the warranty period:</p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li>Contact the Intex Service Center listed with your product or manual.</li>
                    <li>The Service Center will determine the validity of the claim.</li>
                    <li>Upon inspection, if the claim is valid, the item will be repaired or replaced at no charge.</li>
                </ol>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">What Is Not Covered</h2>
                <p>This Limited Warranty does not cover damage caused by:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Negligence, accident, or improper operation</li>
                    <li>Abnormal use or abuse</li>
                    <li>Improper voltage, current, maintenance, or storage</li>
                    <li>Ordinary wear and tear, punctures, tears, and abrasions</li>
                    <li>Environmental damage (fire, flood, freezing, rain, Heat, etc.)</li>
                    <li>Unauthorized alterations, repairs, or disassembly</li>
                </ul>
                <p className="mt-2">This warranty applies only to parts and components manufactured or sold by Intex.</p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Liability Limitation</h2>
                <p>
                    Implied warranties are limited to the terms of this warranty. Intex, its authorized agents, or employees will not be liable for direct or consequential damages. Some jurisdictions may not allow this limitation, in which case it may not apply to you.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">Dispute Resolution</h2>
                <p>
                    All disputes regarding this Limited Warranty shall be addressed through an informal dispute settlement board. Civil action cannot be instituted until the board’s procedures are carried out. Methods follow Local law and policy.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-8">How to Contact Intex</h2>
                <p>Do not return products to the place of purchase. For missing parts or assistance, contact:</p>
                <ul className="list-none space-y-1 mt-2">
                    <li><strong>Phone (Qatar):</strong> +974 44366766 / 44603294</li>
                    <li><strong>Website:</strong> <a href="https://intex-qatar.com/" className="text-blue-600 hover:underline">https://intex-qatar.com/</a></li>
                    <li><strong>Email:</strong> <a href="mailto:support@intex-qatar.com" className="text-blue-600 hover:underline">support@intex-qatar.com</a></li>
                </ul>
                <p className="mt-4 font-semibold">Proof of purchase must accompany all returns, or the warranty claim will be invalid.</p>
            </div>
        </div>
    )
}
