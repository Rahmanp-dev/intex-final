import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

/* Exact footer styles from intexcorp.com computed CSS */
const headingStyle: React.CSSProperties = {
  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.25px",
  textTransform: "uppercase",
  lineHeight: "21px",
  color: "#444",
}

const linkStyle: React.CSSProperties = {
  fontFamily: "Karla, Arial, Helvetica, sans-serif",
  fontSize: "12px",
  fontWeight: 700,
  color: "#666",
  textDecoration: "none",
  lineHeight: "18px",
}

const bottomBarStyle: React.CSSProperties = {
  fontFamily: "'PT Sans', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  letterSpacing: "normal",
  lineHeight: "14px",
  color: "#fff",
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#EBEBEB", paddingTop: "40px" }}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-[15px]">
        {/* Mobile: stacked, Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[60px]">

          {/* Left: White Card for Logo + Support */}
          <div className="bg-white shadow-sm p-6 sm:p-8 md:p-[40px] flex flex-col items-center text-center w-full md:max-w-[340px] mx-auto md:mx-0">
            <Image src="/images/logo.png" alt="Company Logo" width={180} height={55} className="mb-6 sm:mb-[30px] h-[40px] sm:h-[55px] w-auto" />

            <h3 style={{ ...headingStyle, fontSize: "13px", letterSpacing: "1px", marginBottom: "5px" }}>
              Customer Service
            </h3>
            <p style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif", fontSize: "12px", color: "#666", marginBottom: "5px" }}>
              Sat-Thu 8:00am – 5:30pm QST
            </p>
            <div className="flex flex-col gap-1 mb-6 sm:mb-[30px]">
              <a href="tel:+97444366766" style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "1px", color: "#55A4B6", textDecoration: "none" }} className="hover:underline">
                +974 44366766
              </a>
              <a href="tel:+97444603294" style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "1px", color: "#55A4B6", textDecoration: "none" }} className="hover:underline">
                +974 44603294
              </a>
              <a href="mailto:support@intex-qatar.com" style={{ ...linkStyle, marginTop: "4px" }} className="hover:underline">
                support@intex-qatar.com
              </a>
            </div>

            <h3 style={{ ...headingStyle, fontSize: "13px", letterSpacing: "1px", marginBottom: "15px" }}>
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-3">
              <a href="https://www.facebook.com/shopezy.qa" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer fill-current" />
              </a>
              <a href="https://www.instagram.com/shopezy.qa/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@shopezy.qa" target="_blank" rel="noopener noreferrer">
                <span className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex items-center justify-center font-bold text-[8px] sm:text-[9px] bg-[#F5B546] text-white rounded-sm hover:bg-[#e0a030]">TK</span>
              </a>
              <a href="https://www.youtube.com/@shopezyqatar" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#F5B546] hover:text-[#e0a030] cursor-pointer fill-current" />
              </a>
              <a href="https://www.threads.com/@shopezy.qa" target="_blank" rel="noopener noreferrer">
                <span className="w-5 h-5 sm:w-[22px] sm:h-[22px] flex items-center justify-center font-bold text-[11px] sm:text-[13px] text-[#F5B546] hover:text-[#e0a030]">@</span>
              </a>
            </div>
          </div>

          {/* Right Content Area — stacks on mobile */}
          <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-[60px] py-2 md:py-[10px]">

            {/* Support Links */}
            <div className="flex-1">
              <h3 style={{ ...headingStyle, marginBottom: "15px" }} className="text-center sm:text-left">Support</h3>
              <ul className="space-y-2 sm:space-y-[8px] text-center sm:text-left">
                <li><a href="https://shopezy.qa" target="_blank" style={linkStyle} className="hover:underline">Order Status</a></li>
                <li><a href="https://shopezy.qa" target="_blank" style={linkStyle} className="hover:underline">Claim Status</a></li>
                <li><Link href="/warranty" style={linkStyle} className="hover:underline">Warranty Policy</Link></li>
                <li><Link href="/return-policy" style={linkStyle} className="hover:underline">Return Policy</Link></li>
                <li><a href="https://intexcorp.com/recall/" target="_blank" style={linkStyle} className="hover:underline">Product Recall</a></li>
                <li><Link href="/payment-options" style={linkStyle} className="hover:underline">Payment Options</Link></li>
                <li><Link href="/safety-information" style={linkStyle} className="hover:underline">Safety Information</Link></li>
                <li><a href="https://intexcorp.com/faqs/" target="_blank" style={linkStyle} className="hover:underline">FAQs</a></li>
                <li><a href="https://www.intexdevelopment.com/videos/" target="_blank" style={linkStyle} className="hover:underline">Instructional Videos</a></li>
              </ul>
            </div>

            {/* Company & Newsletter */}
            <div className="flex-1">
              <h3 style={{ ...headingStyle, marginBottom: "15px" }} className="text-center sm:text-left">Our Company</h3>
              <ul className="space-y-2 sm:space-y-[8px] mb-8 sm:mb-[35px] text-center sm:text-left">
                <li><Link href="/about-us" style={linkStyle} className="hover:underline">About Us</Link></li>
                <li><a href="https://shopezy.qa/contact" target="_blank" style={linkStyle} className="hover:underline">Contact Us</a></li>
                <li><a href="https://shopezy.qa/contact" target="_blank" style={linkStyle} className="hover:underline">Support</a></li>
                <li><a href="https://intexcorp.com/" target="_blank" style={linkStyle} className="hover:underline">International Links</a></li>
              </ul>

              <h3 style={{ ...headingStyle, marginBottom: "12px" }} className="text-center sm:text-left">Subscribe To Our Newsletter</h3>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email Address"
                  className="w-full bg-white border border-[#ccc] px-3 py-2 text-[12px] focus:outline-none focus:border-[#55A4B6]"
                  style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif" }}
                />
                <button
                  className="text-white px-5 py-2 uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#55A4B6", fontFamily: "Montserrat, Arial, Helvetica, sans-serif", fontSize: "12px", fontWeight: 700 }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div style={{ backgroundColor: "#55A4B6", marginTop: "40px", padding: "12px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-[15px] text-center md:text-left">
          <p style={bottomBarStyle} className="leading-[1.5] text-[10px] sm:text-[12px]">
            Throughout this website, unless otherwise noted, ® are trademarks used in some countries under license from Intex Marketing Ltd to{" "}
            <Link href="/terms-of-use" style={{ color: "#fff", textDecoration: "underline" }}>Terms of Use</Link>{" "}|{" "}
            <Link href="/privacy-policy" style={{ color: "#fff", textDecoration: "underline" }}>Privacy Policy</Link>{" "}|{" "}
            <Link href="/accessibility-statement" style={{ color: "#fff", textDecoration: "underline" }}>Accessibility Statement</Link>
          </p>
          <p style={{ ...bottomBarStyle, fontSize: "10px", opacity: 0.7, marginTop: "4px" }}>
            Intex Qatar
          </p>
        </div>
      </div>
    </footer>
  )
}
