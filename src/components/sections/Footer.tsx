import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-playfair text-2xl font-bold mb-6 tracking-widest">UrbanSmart</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              オンとオフの境界線を超える、<br/>
              新しい時代の女性のためのウェア。
            </p>
          </div>
          
          <div>
            <h3 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Collection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gift Card</a></li>
            </ul>
          </div>

          <div>
             <h3 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">Help</h3>
             <ul className="space-y-4 text-sm text-gray-600">
               <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
               <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
               <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
             </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm mb-6 uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4 mb-8">
               <a href="https://www.instagram.com/nemu_plus?igsh=MTZsdXJ2eXZoZHgwaw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
            </div>
            
            <h3 className="font-sans font-bold text-sm mb-4 uppercase tracking-wider">Newsletter</h3>
            <div className="flex border-b border-gray-300 pb-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent text-sm outline-none placeholder-gray-400"
                />
                <button className="text-xs uppercase font-bold hover:text-accent tracking-widest">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
           <p>&copy; 2026 UrbanSmart Inc. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-accent">Privacy Policy</a>
               <a href="#" className="hover:text-accent">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  )
}
