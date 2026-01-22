'use client'

import FadeIn from '../core/FadeIn'
import Section from '../ui/Section'

export default function Concept() {
  return (
    <Section className="bg-background text-center">
      <FadeIn direction="up">
        <h2 className="text-sm md:text-base tracking-[0.3em] font-sans text-accent mb-8 uppercase">
          Brand Concept
        </h2>
        <h3 className="text-3xl md:text-5xl font-playfair font-medium leading-tight mb-12 text-text-primary">
          境界線は、<br className="md:hidden" />もう要らない。
        </h3>
        <div className="max-w-2xl mx-auto space-y-8 text-base md:text-lg text-gray-600 font-light leading-relaxed">
          <p>
            朝、鏡の前で背筋を伸ばす瞬間。<br />
            夜、ソファに身を沈めてほどける瞬間。
          </p>
          <p>
            私たちの毎日は、<br />
            「緊張」と「緩和」の繰り返しではありません。<br />
            それはひとつの流れるような物語です。
          </p>
          <p className="text-accent font-bold mt-4 mb-6 tracking-wider">
            スマートな自分にめぐり合う
          </p>
          <p>
            UrbanSmartは、ONとOFFの境界線をなくし、<br />
            どんなシーンでも、あなたらしくいられる服を提案します。
          </p>
        </div>
      </FadeIn>
    </Section>
  )
}
