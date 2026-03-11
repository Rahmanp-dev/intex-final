"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from "lucide-react"

const SHOPEZY = "https://shopezy.qa/intex"

const NAV_ITEMS = [
  {
    label: "Products",
    href: SHOPEZY,
    hasDropdown: true,
    hasMegaMenu: true,
    children: [
      {
        heading: "Above Ground Pools",
        links: [
          { label: "Kids", href: SHOPEZY },
          { label: "Easy Set", href: SHOPEZY },
          { label: "Metal Frame", href: SHOPEZY },
          { label: "Prism Frame", href: SHOPEZY },
          { label: "Ultra XTR Frame", href: SHOPEZY },
          { label: "Krystal Clear Filtration & Sanitation", href: SHOPEZY },
          { label: "Pool Accessories", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Air Mattresses",
        links: [
          { label: "Dura-Beam Standard Series", href: SHOPEZY },
          { label: "Dura-Beam Plus Series", href: SHOPEZY },
          { label: "Dura-Beam Deluxe Series", href: SHOPEZY },
          { label: "Multi-Use / Camping", href: SHOPEZY },
          { label: "PremAire & TruAire", href: SHOPEZY },
          { label: "Pumps & Accessories", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Floats & Toys",
        links: [
          { label: "Novelties & Games", href: SHOPEZY },
          { label: "AquaFlow Swim Gear", href: SHOPEZY },
          { label: "Pool Toys", href: SHOPEZY },
          { label: "Pool Mats & Lounges", href: SHOPEZY },
          { label: "Play Centers", href: SHOPEZY },
          { label: "Play Series Boats", href: SHOPEZY },
          { label: "Bouncers & Playhouses", href: SHOPEZY },
          { label: "Parts & Accessories", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Sporting Goods",
        links: [
          { label: "iSUP Stand Up Paddle Boards", href: SHOPEZY },
          { label: "Sporting Lounges & Islands", href: SHOPEZY },
          { label: "Sport Series Boats", href: SHOPEZY },
          { label: "Professional Series Boats", href: SHOPEZY },
          { label: "Parts & Accessories", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Air Furniture",
        links: [
          { label: "Chairs", href: SHOPEZY },
          { label: "Kids Beds & Pillows", href: SHOPEZY },
          { label: "Loungers", href: SHOPEZY },
          { label: "Sofas", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
    ],
  },
  {
    label: "Replacement Parts",
    href: SHOPEZY,
    hasDropdown: true,
    hasMegaMenu: true,
    children: [
      {
        heading: "Pumps",
        links: [
          { label: "Electric Pumps", href: SHOPEZY },
          { label: "Manual Pumps", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Spas",
        links: [
          { label: "PureSpa", href: SHOPEZY },
          { label: "SimpleSpa", href: SHOPEZY },
          { label: "Spa Accessories", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Play Sets",
        links: [
          { label: "Swing Sets", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
      {
        heading: "Pets",
        links: [
          { label: "Pet Beds", href: SHOPEZY },
          { label: "Pet Pools", href: SHOPEZY },
          { label: "View All", href: SHOPEZY },
        ],
      },
    ],
  },
  { label: "Mega Markdown", href: SHOPEZY, hasDropdown: false },
  { label: "Safety", href: "/safety-information", hasDropdown: false },
  {
    label: "Support",
    href: SHOPEZY,
    hasDropdown: true,
    hasMegaMenu: false,
    children: [
      {
        heading: "",
        links: [
          { label: "Order Status", href: SHOPEZY },
          { label: "Claim Status", href: SHOPEZY },
        ],
      },
    ],
  },
  { label: "Clearance", href: SHOPEZY, hasDropdown: false },
]

/* Exact intexcorp.com computed nav style: Karla 13px/700/uppercase/normal-spacing/#333 */
const navStyle: React.CSSProperties = {
  fontFamily: "Karla, Arial, Helvetica, sans-serif",
  fontSize: "13px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "normal",
  lineHeight: "21px",
  color: "#333",
  whiteSpace: "nowrap",
}

export default function Header() {
  return (
    <>
      {/* Pool Recall Notice Banner */}
      <div style={{ backgroundColor: "#FFB533", textAlign: "center", padding: "8px 0" }}>
        <a
          href="https://intexcorp.com/recall/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Karla, Arial, Helvetica, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "normal",
            color: "#333",
            textDecoration: "none",
          }}
          className="hover:underline text-[14px] sm:text-[16px] md:text-[20px] leading-tight"
        >
          Pool Recall Notice
        </a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-3 sm:px-4 flex items-center justify-between h-[60px] sm:h-[70px] md:h-[75px]">

          {/* Mobile: hamburger on the left */}
          <div className="lg:hidden flex items-center">
            <MobileMenuToggle />
          </div>

          {/* Logo — centered on mobile, left on desktop */}
          <Link href="/" className="flex-shrink-0 lg:flex-shrink">
            <Image src="/images/logo.png" alt="INTEX Qatar" width={200} height={60} className="h-[40px] sm:h-[48px] md:h-[55px] w-auto" />
          </Link>

          {/* Desktop Nav */}
          <DesktopNav />

          {/* Right side icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Mobile: just cart icon */}
            <a
              href={SHOPEZY}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden hover:opacity-70"
              style={{ color: "#333" }}
            >
              <ShoppingCart className="w-5 h-5" />
            </a>

            {/* Desktop: full cart + user + search */}
            <a
              href={SHOPEZY}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-1 hover:opacity-70"
              style={{ ...navStyle, fontSize: "14px" }}
            >
              <ShoppingCart style={{ width: 16, height: 16 }} />
              <span>0 Items</span>
            </a>
            <a href={SHOPEZY} target="_blank" rel="noopener noreferrer" className="hidden lg:block hover:opacity-70" style={{ color: "#333" }}>
              <User style={{ width: 18, height: 18 }} />
            </a>
            <button className="hidden lg:block hover:opacity-70" style={{ color: "#333" }}>
              <Search style={{ width: 18, height: 18 }} />
            </button>


            <AdminLink />
          </div>
        </div>
      </header>
    </>
  )
}

function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="hidden lg:flex items-center">
      {NAV_ITEMS.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.hasDropdown ? (
            <button
              className="flex items-center px-[10px] xl:px-[14px] py-2 hover:opacity-70 transition-opacity"
              style={navStyle}
            >
              {item.label}
              <ChevronDown style={{ width: 10, height: 10, marginLeft: 3 }} />
            </button>
          ) : (
            <NavLink href={item.href} label={item.label} />
          )}

          {/* Mega Dropdown for Products / Replacement Parts */}
          {item.hasDropdown && item.children && openDropdown === item.label && item.hasMegaMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-lg z-50 min-w-[750px] p-8" style={{ borderTop: "3px solid #FFB533" }}>
              <div className={`grid gap-6 ${item.children.length <= 4 ? `grid-cols-${item.children.length}` : "grid-cols-5"}`}>
                {item.children.map((group) => (
                  <div key={group.heading}>
                    <h3 style={{
                      fontFamily: "Karla, Arial, Helvetica, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      marginBottom: "12px",
                    }}>
                      {group.heading}
                    </h3>
                    <ul className="space-y-[5px]">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{
                              fontFamily: "Karla, Arial, Helvetica, sans-serif",
                              fontSize: "12px",
                              fontWeight: 400,
                              color: "#55A4B6",
                              textDecoration: "none",
                              lineHeight: "1.6",
                            }}
                            className="hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Simple dropdown for Support */}
          {item.hasDropdown && item.children && openDropdown === item.label && !item.hasMegaMenu && (
            <div className="absolute right-0 top-full bg-white shadow-lg border border-gray-200 z-50 min-w-[180px] py-2">
              {item.children.map((group) =>
                group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-[8px] hover:bg-gray-50"
                    style={{
                      fontFamily: "Karla, Arial, Helvetica, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http")
  const props = {
    className: "px-[10px] xl:px-[14px] py-2 hover:opacity-70 transition-opacity inline-block",
    style: navStyle,
  }

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{label}</a>
  }
  return <Link href={href} {...props}>{label}</Link>
}

function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="lg:hidden" style={{ color: "#333" }} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[70px] bg-white z-50 overflow-y-auto lg:hidden">
          <div className="py-3 px-4 sm:py-4 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setIsOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function MobileNavItem({ item, onClose }: { item: typeof NAV_ITEMS[0]; onClose: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between py-3">
        {item.hasDropdown ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full"
            style={{ ...navStyle, fontSize: "14px" }}
          >
            {item.label}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        ) : (
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={onClose}
            style={{ ...navStyle, fontSize: "14px", textDecoration: "none" }}
          >
            {item.label}
          </a>
        )}
      </div>

      {item.hasDropdown && item.children && isExpanded && (
        <div className="pb-3 pl-4">
          {item.children.map((group) => (
            <div key={group.heading || "support"} className="mb-3">
              {group.heading && (
                <h4 style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#333", marginBottom: "4px" }}>
                  {group.heading}
                </h4>
              )}
              <ul className="space-y-1 pl-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={onClose}
                      style={{ fontSize: "12px", color: "#55A4B6", textDecoration: "none" }}
                      className="hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function AdminLink() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const cookies = document.cookie.split(";")
    const authCookie = cookies.find((c) => c.trim().startsWith("auth-token="))
    if (authCookie) {
      setIsAdmin(true)
    }
  }, [])

  if (!isAdmin) return null

  return (
    <Link
      href="/admin"
      className="hidden md:block border px-3 py-1 rounded hover:opacity-70"
      style={{ fontFamily: "Karla, Arial, Helvetica, sans-serif", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#55A4B6", borderColor: "#55A4B6", textDecoration: "none" }}
    >
      Admin
    </Link>
  )
}
