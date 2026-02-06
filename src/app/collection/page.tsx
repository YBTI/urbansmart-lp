'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeIn from '@/components/core/FadeIn'
import Section from '@/components/ui/Section'
import Footer from '@/components/sections/Footer'
import ItemCard from '@/components/collection/ItemCard'
import CollectionGrid from '@/components/collection/CollectionGrid'
import { ArrowLeft } from 'lucide-react'

// Mock Data
const ITEMS = [
  {
    id: 1,
    name: 'Seamless Wide Pants',
    price: '¥18,000',
    category: 'Bottoms',
    imageOn: '/Collection%20Page/2309355099003-177804-1.jpg',
    imageOff: '/Collection%20Page/2309355099003-177805-1.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Classic Wool Coat',
    price: '¥42,000',
    category: 'Outer',
    imageOn: '/Collection%20Page/2309355607000-182584-1.jpg',
    imageOff: '/Collection%20Page/2309355607000-182585-1.jpg',
    isNew: true,
  },
  {
    id: 3,
    name: 'Dual Fabric Blouse',
    price: '¥14,500',
    category: 'Tops',
    imageOn: '/Collection%20Page/2309355609004-182605-1.jpg',
    imageOff: '/Collection%20Page/2309355609004-182606-1.jpg',
  },
  {
    id: 4,
    name: 'Cashmere Blend Knit',
    price: '¥22,000',
    category: 'Tops',
    imageOn: '/Collection%20Page/2309356272009-183196-1.jpg',
    imageOff: '/Collection%20Page/2309356272009-183197-1.jpg',
  },
  {
    id: 5,
    name: 'Oversized Trench',
    price: '¥38,000',
    category: 'Outer',
    imageOn: '/Collection%20Page/2309356274003-183248-1.jpg',
    imageOff: '/Collection%20Page/2309356274003-183249-1.jpg',
  },
  {
    id: 6,
    name: 'Relaxed Tapered',
    price: '¥16,000',
    category: 'Bottoms',
    imageOn: '/Collection%20Page/2309355099003-178914-1.jpg',
    imageOff: '/Collection%20Page/2309355099003-178915-1.jpg',
  },
  {
    id: 7,
    name: 'Silk Touch Scarf',
    price: '¥8,500',
    category: 'Accessories',
    imageOn: '/Collection%20Page/2309355607000-182803-1.jpg',
    imageOff: '/Collection%20Page/2309355607000-182804-1.jpg',
  },
  {
    id: 8,
    name: 'Minimal Leather Bag',
    price: '¥28,000',
    category: 'Accessories',
    imageOn: '/Collection%20Page/2309355609004-182827-1.jpg',
    imageOff: '/Collection%20Page/2309355609004-182828-1.jpg',
  }
];

function MagazineHero() {
  const modelImages = [
    { url: '/Collection%20Page/2309355099003-177807-1.jpg', label: 'Urban Layering', span: 'col-span-1 row-span-2' },
    { url: '/Collection%20Page/2309355099003-177810-1.jpg', label: 'City Walk', span: 'col-span-1 row-span-3' },
    { url: '/Collection%20Page/2309356272009-183200-1.jpg', label: 'Minimal Winter', span: 'col-span-1 row-span-2' },
    { url: '/Collection%20Page/2309356274003-183251-1.jpg', label: 'Office Casual', span: 'col-span-1 row-span-2' },
    { url: '/Collection%20Page/2309356272009-183385-1.jpg', label: 'Smart Comfort', span: 'col-span-1 row-span-2' },
    { url: '/Collection%20Page/2309355609004-182829-1.jpg', label: 'Daily Look', span: 'col-span-1 row-span-2' },
  ];

  return (
    <div className="bg-[#d1b79f]/30 pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Magazine Header */}
        <div className="flex justify-between items-end mb-8 border-b-2 border-black/10 pb-4">
          <div className="font-playfair font-bold text-sm tracking-[0.3em] uppercase">
            UrbanSmart <span className="text-[#a67c52]">2026 Winter</span>
          </div>
          <div className="hidden md:block font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400">
            Styling recommendations for modern urban life
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-[120px] font-black font-sans uppercase italic leading-[0.8] tracking-tighter text-gray-900">
            Urban<br/>Smart
          </h2>
        </div>

        {/* Masonry-style Layout (Prevents Cropping) */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {modelImages.map((img, i) => (
            <motion.div 
              key={i}
              className="relative overflow-hidden group bg-gray-100 break-inside-avoid"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={img.url} 
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                alt={img.label}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Magazine Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-xs leading-loose text-gray-600 font-sans tracking-widest">
                私たちが提案するのは、妥協のない美しさと機能性の融和。<br/>
                シームレスな日常を彩る、選び抜かれた冬のスタイリングガイド。<br/>
                ONとOFF、境界を超えて輝く現代のアーバンスタイルを、<br/>
                ファッションのプロたちが独自の視点でレコメンドします。
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {ITEMS.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-20">
                        <div className="relative aspect-square border border-black/5 mb-2">
                            <span className="absolute -top-2 -left-2 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center text-[10px] font-bold z-10">0{i+1}</span>
                            <img src={item.imageOn} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[8px] uppercase tracking-tighter text-gray-500 whitespace-nowrap overflow-hidden">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

// RENAMED: This is the active page content, currently hidden.
function ActiveCollectionPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0]"> {/* Warm minimal background */}
      
      {/* Store Beam Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white h-20 flex items-center px-8 md:px-12 justify-between shadow-lg border-b border-[#a67c52]/30">
        <Link href="/" className="flex items-center gap-2 group opacity-80 hover:opacity-100 transition-opacity">
            <ArrowLeft size={18} className="text-white" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase">Back to Entrance</span>
        </Link>
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
             <Link href="/" className="font-playfair text-2xl md:text-3xl tracking-[0.3em] text-[#E0D8C0] uppercase">urban smart</Link>
        </div>

        <div className="flex gap-6">
            <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] font-sans text-white/50">
                <span className="hover:text-[#E0D8C0] cursor-pointer transition-colors">LOOKBOOK</span>
                <span className="hover:text-[#E0D8C0] cursor-pointer transition-colors">ABOUT</span>
            </div>
        </div>
      </header>

      {/* Magazine Hero Section */}
      <MagazineHero />

      {/* Main Content Area */}
      <div className="pt-24 pb-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        
        {/* Filters - Minimalist Shelf Labels */}
        <FadeIn delay={0.2}>
            <div className="flex justify-center mb-20 border-b border-gray-200/60 w-full max-w-4xl mx-auto">
                {['All Items', 'Outerwear', 'Tops', 'Bottoms', 'Accessories'].map((filter, i) => (
                    <button 
                        key={filter}
                        className={`px-6 md:px-12 py-5 text-[10px] tracking-[0.3em] uppercase transition-all relative font-sans
                            ${i === 0 
                                ? 'text-black font-bold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[#a67c52]' 
                                : 'text-gray-400 hover:text-black'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </FadeIn>

        {/* Grid - Spacious Layout */}
        <FadeIn delay={0.4}>
            <CollectionGrid className="max-w-7xl mx-auto gap-x-12 gap-y-20">
                {ITEMS.map((item) => (
                    <ItemCard 
                        key={item.id}
                        {...item}
                    />
                ))}
            </CollectionGrid>
        </FadeIn>
      </div>

      <Footer />
    </main>
  )
}

export default function CollectionPage() {
    return (
        <main className="min-h-screen bg-[#F5F5F0] flex flex-col items-center justify-center relative overflow-hidden">
             {/* Simple Header */}
             <div className="absolute top-0 left-0 p-8">
                <Link href="/" className="flex items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity text-black">
                    <ArrowLeft size={18} />
                    <span className="font-sans text-xs tracking-[0.2em] uppercase">Back to Entrance</span>
                </Link>
             </div>

             <FadeIn>
                <div className="text-center z-10 p-8">
                     <p className="font-playfair text-xl md:text-2xl italic text-[#a67c52] mb-4 tracking-widest">UrbanSmart</p>
                     <h1 className="text-5xl md:text-8xl font-black font-sans uppercase text-gray-900 tracking-tighter mb-8 leading-[0.8]">
                        Coming<br/>Soon
                     </h1>
                     <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500">
                        2026 Winter Collection
                     </p>
                </div>
             </FadeIn>

             {/* Background Decoration */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                 <div className="text-[20vw] font-black font-serif text-black absolute -top-20 -left-20">U</div>
                 <div className="text-[20vw] font-black font-serif text-black absolute -bottom-20 -right-20">S</div>
             </div>
        </main>
    )
}
