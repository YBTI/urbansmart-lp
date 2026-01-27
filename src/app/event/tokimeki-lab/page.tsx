import Link from 'next/link'
import FadeIn from '@/components/core/FadeIn'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react'

export default function TokimekiLab() {
  return (
    <main className="min-h-screen bg-[#FFF0F5]"> {/* Pale pink background for Tokimeki vibe */}
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <Link href="/">
          <Button variant="ghost" className="bg-white/80 backdrop-blur-md hover:bg-white text-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </nav>

      <Section className="pt-24 pb-12">
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Hero Image */}
            <div className="relative aspect-video w-full bg-gray-100">
              <img 
                src="/event_tokimeki_main.png" 
                alt="TOKIMEKI LAB Main Visual" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Event Title */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-sm font-bold tracking-wider mb-4">
                  SPECIAL POPUP EVENT
                </span>
                <h1 className="text-3xl md:text-5xl font-bold font-playfair text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  TOKIMEKI LAB.
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  トキメキに出会い、トキメキを作るファッションイベント
                </p>
              </div>

              {/* Event Description */}
              <div className="mb-16 bg-pink-50 p-8 rounded-xl border border-pink-100">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="w-1.5 h-6 bg-pink-400 rounded-full mr-3"></span>
                  Event Details
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="flex flex-col md:flex-row gap-4 mb-6 pb-6 border-b border-pink-200/50">
                    <div className="flex items-center gap-2">
                       <Calendar className="text-pink-500" />
                       <span className="font-bold text-lg">2026.2.15 (Sun) - 2.19 (Thu)</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Clock className="text-pink-500" />
                       <span>10:00 - 20:00</span>
                    </div>
                  </div>
                  
                  <p className="font-bold text-gray-800">【学生×AEON九州期間限定コラボイベント】</p>
                  <p>
                    ミーナ天神イベント会場にて「買う」だけじゃない「作って」楽しみ、自分だけの服を作れるショップイベント開催!!<br/>
                    トキメく服を自分で作って日常に彩りを届けます。
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Shop Layout */}
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                    Shop Layout
                  </h2>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 shadow-inner">
                    <img 
                      src="/shop_layout_map.png" 
                      alt="Shop Layout Diagram" 
                      className="w-full h-auto rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    DIYエリアやフォトスポットもご用意しています
                  </p>
                </div>

                {/* Access Map */}
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                    Access
                  </h2>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 shadow-inner mb-4">
                    <img 
                      src="/access_map_tenjin.png" 
                      alt="Access Map to Mina Tenjin" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">ミーナ天神（地下イベントスペース）</p>
                      <p className="text-sm mt-1">福岡県福岡市中央区天神4-3-8</p>
                      <p className="text-sm mt-1">地下鉄空港線「天神駅」より徒歩3分</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </Section>
    </main>
  )
}
