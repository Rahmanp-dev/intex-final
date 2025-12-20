import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] pt-[60px] text-[#4a4a4a] text-[14px]">
      <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row gap-[30px]">
        {/* Left: Logo + Support */}
        <div className="bg-white w-full md:w-[320px] p-[30px] flex flex-col items-center text-center">
          <Image src="/images/logo.png" alt="Company Logo" width={200} height={65} className="mb-[20px]" />
          <h3 className="text-[15px] font-bold mb-[5px]">CUSTOMER SERVICE</h3>
          <p className="mb-[2px]">Mon-Fri 8:30am - 5pm PST</p>
          <a href="tel:1-800-123-4567" className="text-[#00b5c8] font-bold mb-[25px]">
            1-800-123-4567
          </a>

          <h3 className="text-[15px] font-bold mb-[15px]">CONNECT WITH US</h3>
          <div className="flex justify-center space-x-[12px]">
            <Facebook className="w-[22px] h-[22px] text-[#4a4a4a] hover:text-[#00b5c8] cursor-pointer" />
            <Instagram className="w-[22px] h-[22px] text-[#4a4a4a] hover:text-[#00b5c8] cursor-pointer" />
            <Youtube className="w-[22px] h-[22px] text-[#4a4a4a] hover:text-[#00b5c8] cursor-pointer" />
            <div className="w-[22px] h-[22px] bg-[#4a4a4a] hover:bg-[#00b5c8] cursor-pointer flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">P</span>
            </div>
            <Linkedin className="w-[22px] h-[22px] text-[#4a4a4a] hover:text-[#00b5c8] cursor-pointer" />
          </div>
        </div>

        {/* Middle: Support Links */}
        <div className="w-full md:w-[270px]">
          <h3 className="text-[15px] font-bold mb-[15px]">SUPPORT</h3>
          <ul className="space-y-[8px] text-[#4a4a4a]">
            {[
              "Order Status",
              "Claim Status",
              "Warranty Policy",
              "Return Policy",
              "Payment Options",
              "Safety Information",
              "FAQs",
              "Instructional Videos",
            ].map((item, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:text-[#00b5c8]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Company & Newsletter */}
        <div className="w-full md:w-[290px]">
          <h3 className="text-[15px] font-bold mb-[15px]">OUR COMPANY</h3>
          <ul className="space-y-[8px] mb-[35px]">
            {["About Us", "Contact Us", "Support", "International Links"].map((item, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:text-[#00b5c8]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-[15px] font-bold mb-[15px]">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-[#ccc] px-[12px] py-[9px] text-[13px]"
            />
            <button className="bg-[#00b5c8] text-white px-[16px] text-[13px] font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#00798a] text-white text-[12px] mt-[50px] py-[20px]">
        <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row justify-between gap-[20px]">
          <p className="leading-[1.4]">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="space-x-[8px] whitespace-nowrap">
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>{" "}
            |
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:underline">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
