import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata = {
  title: "INTEX: The leader in Above Ground Swimming Pools, Airbeds and Spas.",
  description: "The world leader in Above Ground Swimming Pools, Airbeds and Spas.",
  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Exact same Google Font imports as intexcorp.com */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:700,500,400%7CPoppins:600,400%7CKarla:400%7CLato:400%7CWork:Sans&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
