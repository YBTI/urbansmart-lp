'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ItemCardProps {
  id: string | number
  name: string
  price?: string
  imageOn: string
  imageOff: string
  category?: string
  isNew?: boolean
  link?: string
}

export default function ItemCard({
  id,
  name,
  price,
  imageOn,
  imageOff,
  category,
  isNew,
  link
}: ItemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const CardContent = (
    <div 
      className="group cursor-pointer flex flex-col h-full bg-transparent transform transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Mimicking a sleek metal rack frame */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4 border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-500">
        {/* Badges - Minimalist Wood Style */}
        {isNew && (
            <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-serif tracking-[0.2em] text-[#8c6239] after:content-[''] after:block after:w-8 after:h-[1px] after:bg-[#8c6239] after:mt-1">
                New
            </span>
        )}
        
        {/* Images */}
        <motion.img
          src={imageOn}
          alt={`${name} On Style`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
        <motion.img
          src={imageOff}
          alt={`${name} Off Style`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ scale: isHovered ? 1 : 1.05, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* Subtle Warm Overlay */}
        <div className={`absolute inset-0 bg-[#8c6239]/0 transition-colors duration-500 ${isHovered ? 'bg-[#8c6239]/5' : ''}`} />
      </div>

      {/* Info - Clean & Sophisticated with Wood Accent */}
      <div className="flex flex-col items-center gap-2 px-1 pb-1 text-center">
        {category && (
            <span className="text-[10px] text-[#8c6239]/70 uppercase tracking-widest font-sans font-medium">{category}</span>
        )}
        <h3 className="font-serif text-lg text-gray-900 tracking-wide font-medium relative inline-block group-hover:text-[#a67c52] transition-colors duration-300">
          {name}
        </h3>
        {price && (
            <div className="flex flex-col items-center">
                <p className="font-sans text-xs text-gray-600 tracking-widest">{price}</p>
                <div className="w-4 h-[1px] bg-[#d9b99b] mt-2 group-hover:w-8 transition-all duration-300"></div>
            </div>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
