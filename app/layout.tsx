import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Armor of God",
  description: "Spiritual warfare educational platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
