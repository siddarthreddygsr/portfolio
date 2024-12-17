'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-[var(--background-color)] z-50 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <X className="w-6 h-6" />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <Link href="#about" onClick={toggleMenu}>about</Link>
            <Link href="#experience" onClick={toggleMenu}>experience</Link>
            <Link href="#projects" onClick={toggleMenu}>projects</Link>
            <a href="mailto:siddarthreddygsr@gmail.com" className="text-[var(--accent-color)]" onClick={toggleMenu}>contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}

