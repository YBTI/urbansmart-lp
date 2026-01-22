'use client'

import { motion } from 'framer-motion'
import { Briefcase, Coffee } from 'lucide-react'

interface StyleSwitcherProps {
  isBusiness: boolean
  toggle: () => void
}

export default function StyleSwitcher({ isBusiness, toggle }: StyleSwitcherProps) {
  return (
    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-100 relative z-20">
      <span className={`text-sm tracking-widest transition-colors duration-300 ${isBusiness ? 'text-text-primary font-bold' : 'text-gray-400'}`}>
        OFFICE
      </span>
      
      <button 
        onClick={toggle}
        className="w-16 h-8 bg-gray-200 rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
        aria-label="Toggle Style"
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center text-text-primary"
          animate={{ x: isBusiness ? 0 : 32 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isBusiness ? <Briefcase size={12} /> : <Coffee size={12} />}
        </motion.div>
      </button>
      
      <span className={`text-sm tracking-widest transition-colors duration-300 ${!isBusiness ? 'text-text-primary font-bold' : 'text-gray-400'}`}>
        RELAX
      </span>
    </div>
  )
}
