"use client"

import { Nfc } from "lucide-react"
import { useMediaQuery } from "react-responsive"
import Image from "next/image"

interface BusinessCardProps {
  name?: string
  surname?: string
  phone?: string
  email?: string
}

export default function BusinessCard({
  name = "Siddarth Reddy",
  surname = "Gurram",
  phone = "+91 9032854903",
  email = "siddarthreddygsr@gmail.com",
}: BusinessCardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div className="w-full flex justify-center items-center min-h-[350px]">
      {/* Card container that rotates on mobile */}
      <div
        className={`
          relative bg-[var(--background-color)] rounded-3xl border border-[#2a2a2a] shadow-md overflow-hidden
          transition-all duration-500
          ${
            isMobile
              ? "transform rotate-90 h-[250px] w-[400px]" // Rotated card for mobile with adjusted dimensions
              : "w-[400px] h-[250px]" // Horizontal card for desktop
          }
        `}
      >
        {/* Orange header */}
        <div className="bg-[#f26430] w-full" style={{ height: "20%" }}></div>

        {/* Content container */}
        <div className="p-2 h-[80%] relative">
          {/* Name section */}
          <div className="pb-2">
            <h1 className="text-2xl font-mono font-bold tracking-tight">{name}</h1>
            <h2 className="text-2xl font-mono font-bold tracking-tight">{surname}</h2>

            {/* NFC icon */}
            <div className="absolute top-4 right-4">
              <Nfc className="w-8 h-8" />
            </div>
          </div>

          {/* Contact info */}
          <div className="pt-8">
            <a href="https://vcard.link/card/IMZX.vcf" className="text-lg font-mono font-bold">
                {phone}
            </a>
        </div>


          <div className="flex justify-between items-center">
            <p className="text-sm font-mono font-bold break-all pr-2 max-w-[80%]">{email}</p>

            <div className="w-10 h-10 flex-shrink-0 ml-2">
              <Image
                src="/images/mario.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

