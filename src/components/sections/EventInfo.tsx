import FadeIn from '../core/FadeIn'
import Section from '../ui/Section'
import Button from '../ui/Button'

export default function EventInfo() {
  return (
    <Section className="py-24 bg-[#F5F5F3]"> {/* Slightly different background for separation */}
      <FadeIn>
        <div className="relative rounded-sm overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: 'url("/event_popup_bg.jpg")' }}
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}

          {/* Content */}
          <div className="relative z-10 py-24 px-8 md:px-16 text-center text-white">
            <h2 className="text-sm tracking-[0.3em] font-sans mb-4 uppercase opacity-90">
              Event Information
            </h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 tracking-wide">
              UrbanSmart POPUP Shop
            </h3>
            
            <div className="inline-block border-t border-b border-white/30 py-6 px-12 backdrop-blur-sm bg-white/10 rounded-sm">
              <div className="mb-4">
                <p className="text-sm font-light tracking-wider mb-1">開催期間</p>
                <p className="text-2xl font-playfair">2/15 - 2/19</p>
              </div>
              <div>
                <p className="text-sm font-light tracking-wider mb-1">場所</p>
                <p className="text-xl font-sans">ミーナ天神（地下）</p>
              </div>
            </div>

            <div className="mt-10">
              <a href="/event/tokimeki-lab">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Map & Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
