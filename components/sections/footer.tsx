import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] pt-[60px] text-[#4a4a4a] text-[13px] font-sans">
      <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row gap-[40px] md:gap-[80px]">
        {/* Left: White Card for Logo + Support */}
        <div className="bg-white shadow-sm p-[40px] flex flex-col items-center text-center max-w-[340px] w-full mx-auto md:mx-0">
          <Image src="/images/logo.png" alt="Company Logo" width={220} height={70} className="mb-[30px]" />

          <h3 className="text-[14px] font-bold tracking-wider mb-[5px] uppercase">Customer Service</h3>
          <p className="mb-[5px] text-[#666]">Sat-Thu 8:00am – 5:30pm QST</p>
          <div className="flex flex-col gap-1 mb-[30px]">
            <a href="tel:+97444366766" className="text-[#5998A6] font-bold text-[18px] hover:underline">
              +974 44366766
            </a>
            <a href="tel:+97444603294" className="text-[#5998A6] font-bold text-[18px] hover:underline">
              +974 44603294
            </a>
            <a href="mailto:support@intex-qatar.com" className="text-[#4a4a4a] hover:text-[#5998A6] mt-1">
              support@intex-qatar.com
            </a>
          </div>

          <h3 className="text-[14px] font-bold tracking-wider mb-[15px] uppercase">Connect With Us</h3>
          <div className="flex justify-center space-x-[15px]">
            <a href="https://www.facebook.com/shopezy.qa" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-[24px] h-[24px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer fill-current" />
            </a>
            <a href="https://www.instagram.com/shopezy.qa/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-[24px] h-[24px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@shopezy.qa" target="_blank" rel="noopener noreferrer">
              <span className="w-[24px] h-[24px] flex items-center justify-center font-bold text-[10px] bg-[#F5B546] text-white rounded-sm hover:bg-[#e0a030]">TK</span>
            </a>
            <a href="https://www.youtube.com/@shopezyqatar" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-[24px] h-[24px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer fill-current" />
            </a>
            <a href="https://www.threads.com/@shopezy.qa" target="_blank" rel="noopener noreferrer">
              <span className="w-[24px] h-[24px] flex items-center justify-center font-bold text-[14px] text-[#F5B546] hover:text-[#e0a030]">@</span>
            </a>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col md:flex-row gap-[40px] md:gap-[80px] py-[10px]">

          {/* Support Links */}
          <div className="flex-1">
            <h3 className="text-[14px] font-bold text-[#4a4a4a] mb-[20px] uppercase tracking-wide">Support</h3>
            <ul className="space-y-[12px] text-[#4a4a4a]">
              <li><a href="https://shopezy.qa" target="_blank" className="hover:text-[#5998A6]">Order Status</a></li>
              <li><a href="https://shopezy.qa" target="_blank" className="hover:text-[#5998A6]">Claim Status</a></li>
              <li><Link href="/warranty" className="hover:text-[#5998A6]">Warranty Policy</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#5998A6]">Return Policy</Link></li>
              <li>
                <div className="text-[#4a4a4a] hover:text-[#5998A6] cursor-pointer">Payment Options</div>
              </li>
              <li><Link href="/safety-information" className="hover:text-[#5998A6]">Safety Information</Link></li>
              <li><a href="https://intexcorp.com/faqs/" target="_blank" className="hover:text-[#5998A6]">FAQs</a></li>
              <li><a href="https://www.intexdevelopment.com/videos/video/category#" target="_blank" className="hover:text-[#5998A6]">Instructional Videos</a></li>
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div className="flex-1">
            <h3 className="text-[14px] font-bold text-[#4a4a4a] mb-[20px] uppercase tracking-wide">Our Company</h3>
            <ul className="space-y-[12px] mb-[40px]">
              <li><Link href="/about-us" className="hover:text-[#5998A6]">About Us</Link></li>
              <li><a href="https://shopezy.qa/contact" target="_blank" className="hover:text-[#5998A6]">Contact Us</a></li>
              <li><a href="https://shopezy.qa/contact" target="_blank" className="hover:text-[#5998A6]">Support</a></li>
              <li><a href="https://intexcorp.com/" target="_blank" className="hover:text-[#5998A6]">International Links</a></li>
            </ul>

            <h3 className="text-[14px] font-bold text-[#4a4a4a] mb-[15px] uppercase tracking-wide">Subscribe To Our Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email Address"
                className="w-full bg-white border border-[#ccc] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5998A6]"
              />
              <button className="bg-[#5998A6] text-white px-[25px] py-[10px] text-[13px] font-bold uppercase hover:bg-[#4a828e] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#5998A6] text-white text-[11px] mt-[60px] py-[15px]">
        <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row justify-between items-center gap-[15px]">
          <p className="opacity-90">© {new Date().getFullYear()} Intex Qatar. All rights reserved.</p>
          <div className="flex items-center space-x-[5px] opacity-90">
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
