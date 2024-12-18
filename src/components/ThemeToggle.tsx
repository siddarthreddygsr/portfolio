'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="w-24 h-8 bg-[var(--background-color)] border border-[var(--font-color)] relative font-mono text-xs flex items-center justify-start px-2 overflow-hidden"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          exit={{ width: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 flex overflow-hidden" 
        >
          {(darkMode ? 'LIGHT.MODE' : 'DARK.MODE').split(/\s*/).map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-[var(--font-color)]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

