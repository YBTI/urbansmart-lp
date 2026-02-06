'use client'

import { motion } from 'framer-motion'
import FadeIn from '../core/FadeIn'
import Section from '../ui/Section'
import Button from '../ui/Button'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'ステッカーリスト',
    imageOn: '/sticker_collection.png', 
    imageOff: '/sticker_collection.png', 
    link: 'https://shop.stiq.co.jp/a/wishlist-hero/wishlist/shared/E7A1alodNOTeoA53jKYa'
  },
  {
    id: 2,
    name: 'View All Items',
   　imageOn: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop', // Office
   　imageOff: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop', // Relax
  // link: '/collection'
  },
  {
    id: 3,
    name: 'Dual Fabric Blouse',
    imageOn: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop', // Office
    imageOff: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop' // Relax
  },
]

export default function Collection() {
  return (
    <Section className="bg-[#F9F9F9]">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h2 className="text-sm tracking-[0.3em] font-sans text-accent mb-4 uppercase">
               Collection
             </h2>
             <h3 className="text-3xl font-playfair font-medium">
               New Arrivals
             </h3>
           </div>
           {/* Button removed as 'View All Items' is now in the grid */}
        </div>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {products.map((product, index) => {
         const Content = (
           <div className="group cursor-pointer">
             <div className="relative aspect-[3/4] overflow-hidden mb-4 rounded-sm bg-gray-200">
               <img 
                 src={product.imageOn} 
                 alt={product.name}
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
               />
               <img 
                 src={product.imageOff} 
                 alt={`${product.name} OFF`}
                 className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
               />
               <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white flex justify-between items-end translate-y-2 group-hover:translate-y-0 transform transition-transform">
                   <span className="text-xs tracking-widest">VIEW DETAILS</span>
               </div>
             </div>
             <h4 className="font-playfair text-lg mb-1 group-hover:text-accent transition-colors">{product.name}</h4>
           </div>
         );

          return (
            <FadeIn key={product.id} delay={index * 0.1} direction="up">
              {product.link ? (
                product.link.startsWith('/') ? (
                   <Link href={product.link}>
                     {Content}
                   </Link>
                ) : (
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    {Content}
                  </a>
                )
              ) : (
                Content
              )}
            </FadeIn>
          );
       })}
     </div>

        {/* Mobile button removed */}
      </FadeIn>
    </Section>
  )
}


