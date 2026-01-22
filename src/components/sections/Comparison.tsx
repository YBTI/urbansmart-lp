'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../core/FadeIn'
import Section from '../ui/Section'
import Button from '../ui/Button'
import StyleSwitcher from '../features/StyleSwitcher' // Keeping if we want to toggle text, but image is static now

export default function Comparison() {
  // We can keep the state for text descriptions if we want interactive text, 
  // or simplify since the image shows both. Let's keep text interactive for engagement.
  const [isBusiness, setIsBusiness] = useState(true)

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <FadeIn direction="right" className="order-2 lg:order-1">
          <h2 className="text-sm tracking-[0.3em] font-sans text-accent mb-6 uppercase">
            Style Transformation
          </h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
            その一着は、<br />
            表情を変える。
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            上質な素材と計算されたシルエットだからこそ実現できる、<br />
            シーンを超えた着回し力。<br />
            ヒールを合わせればオフィスへ、<br />
            スニーカーに変えれば休日へ。
          </p>
          
          <div className="mb-8">
             <StyleSwitcher isBusiness={isBusiness} toggle={() => setIsBusiness(!isBusiness)} />
          </div>

          <div className="space-y-4">
            <h4 className="font-playfair text-xl transition-all duration-300">
                {isBusiness ? "Silky Relax Jacket - Office Style" : "Silky Relax Jacket - Weekend Style"}
            </h4>
            <p className="text-sm text-gray-500 min-h-[4.5em] transition-opacity duration-300">
                {isBusiness 
                    ? "Tシャツに羽織るだけで、洗練されたオフィスカジュアルに。シワになりにくい素材で、デスクワークも快適。" 
                    : "デニムと合わせて、大人のリラックススタイルに。軽やかな着心地は、週末のカフェタイムにぴったり。"}
            </p>
          </div>
          
          <div className="mt-8">
            <Button variant="secondary">View Item</Button>
          </div>
        </FadeIn>

        {/* Image Content - Single Dual Image as requested */}
        <div className="order-1 lg:order-2 h-[500px] md:h-[600px] relative overflow-hidden rounded-sm shadow-xl group">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
               style={{ 
                   backgroundImage: 'url("/comparison_dual.png")' 
               }}
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
      </div>
    </Section>
  )
}
