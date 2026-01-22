'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StyleSwitcher from '../features/StyleSwitcher'
import FadeIn from '../core/FadeIn'
import Button from '../ui/Button'

export default function Hero() {
  const [isBusiness, setIsBusiness] = useState(true)
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  const toggleStyle = () => setIsBusiness(prev => !prev)

  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Mobile Layout: Top/Bottom Split (Visual only, stacked) */}
      
      {/* Desktop Split Screen */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        
        {/* Left Side: Business / ON */}
        <motion.div 
          className="relative flex-1 h-1/2 md:h-full overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          animate={{
            flex: hoveredSide === 'left' ? 1.2 : 1,
            filter: isBusiness ? 'grayscale(0%)' : 'grayscale(100%) opacity(0.5)'
          }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsBusiness(true)}
        >
           <div 
             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
             style={{ backgroundImage: 'url("/hero_on.png")' }} // Office Image
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <h2 className="text-white text-5xl md:text-7xl font-playfair font-bold tracking-widest opacity-90 drop-shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
               ON
             </h2>
           </div>
        </motion.div>

        {/* Right Side: Relax / OFF */}
        <motion.div 
          className="relative flex-1 h-1/2 md:h-full overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          animate={{
            flex: hoveredSide === 'right' ? 1.2 : 1,
            filter: !isBusiness ? 'grayscale(0%)' : 'grayscale(100%) opacity(0.5)'
          }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsBusiness(false)}
        >
           <div 
             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
             style={{ backgroundImage: 'url("/hero_off.png")' }} // Relax Image
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <h2 className="text-white text-5xl md:text-7xl font-playfair font-bold tracking-widest opacity-90 drop-shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
               OFF
             </h2>
           </div>
        </motion.div>
      </div>

      {/* Center Overlay Content */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10 px-4">
        
        {/* Main Copy */}
        <AnimatePresence mode='wait'>
            <motion.div
                key={isBusiness ? 'business' : 'relax'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 mix-blend-difference text-white"
            >
                <h1 className="text-4xl md:text-6xl font-playfair mb-4 leading-tight">
                    {isBusiness ? "Command the Room." : "Own Your Space."}
                </h1>
                <p className="text-lg md:text-xl font-light tracking-wide font-sans opacity-90">
                    {isBusiness ? "Confidence in every silhouette." : "Luxury in every moment."}
                </p>
            </motion.div>
        </AnimatePresence>

        {/* Switcher - Pointer events re-enabled */}
        <div className="pointer-events-auto">
            <StyleSwitcher isBusiness={isBusiness} toggle={toggleStyle} />
        </div>
        
        <FadeIn delay={0.5} className="absolute bottom-10 md:bottom-20 pointer-events-auto">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black mt-8">
                 Explore Collection
             </Button>
        </FadeIn>
      </div>
    </div>
  )
}
