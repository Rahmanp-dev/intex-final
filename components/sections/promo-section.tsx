import Image from "next/image"
import Link from "next/link"
import type { PromoData } from "@/lib/types"

interface PromoSectionProps {
  data: PromoData
}

/* Exact intexcorp.com promo section styles */
const headingStyle: React.CSSProperties = {
  fontFamily: "Lato, Arial, Helvetica, sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "0.25px",
  lineHeight: "42px",
  margin: 0,
}

const descriptionStyle: React.CSSProperties = {
  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
  fontSize: "21px",
  fontWeight: 100,
  color: "#fff",
  lineHeight: "31.5px",
  margin: "10px 0 0 0",
}

const buttonStyle: React.CSSProperties = {
  fontFamily: "Lato, Arial, Helvetica, sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  color: "#fff",
  backgroundColor: "#55A4B6",
  textTransform: "uppercase",
  letterSpacing: "3px",
  padding: "8px 26px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "21px",
  border: "none",
}

export default function PromoSection({ data }: PromoSectionProps) {
  if (!data || !data.title) {
    return null
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop version — right-aligned text, matching intexcorp.com exactly */}
      <div className="hidden sm:block relative w-full h-[300px] md:h-[375px]">
        <div className="absolute inset-0">
          <Image
            src={data.image || "/placeholder.svg?height=375&width=1920"}
            alt={data.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Content — flex column, right-aligned, matching original position */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              textAlign: "right",
              marginRight: "49px",
            }}
          >
            <h2 style={headingStyle}>
              {data.title}
            </h2>
            {data.description && (
              <p style={descriptionStyle}>{data.description}</p>
            )}
            {data.buttonText && data.buttonLink && (
              <Link href={data.buttonLink} style={buttonStyle} className="hover:opacity-90 transition-opacity">
                {data.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile version — centered text, taller aspect ratio */}
      <div className="sm:hidden relative w-full aspect-[428/375]">
        <div className="absolute inset-0">
          <Image
            src={data.mobileImage || data.image || "/placeholder.svg?height=375&width=428"}
            alt={data.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/15" />
        {/* Mobile: centered content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            <h2
              style={{
                ...headingStyle,
                fontSize: "22px",
                lineHeight: "32px",
              }}
            >
              {data.title}
            </h2>
            {data.description && (
              <p
                style={{
                  ...descriptionStyle,
                  fontSize: "15px",
                  lineHeight: "22px",
                }}
              >
                {data.description}
              </p>
            )}
            {data.buttonText && data.buttonLink && (
              <Link
                href={data.buttonLink}
                style={{
                  ...buttonStyle,
                  fontSize: "12px",
                  padding: "7px 20px",
                  letterSpacing: "2px",
                }}
                className="hover:opacity-90 transition-opacity"
              >
                {data.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
