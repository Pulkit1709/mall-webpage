import { motion } from 'framer-motion'
import { SPONSORSHIP_TIERS, MEDIA_CANVAS } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'
import { useStore } from '../store/useStore'

export function Sponsorship() {
  const { openModal } = useStore()

  return (
    <div className="py-24 bg-primary text-text-primary" id="sponsorship">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Module Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24 border-b border-border-primary pb-16">
          <motion.span variants={fadeUp} className="text-accent-gold text-xs tracking-[0.3em] uppercase block mb-4">Media Canvas</motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif mb-6">Own the <span className="italic text-accent-gold">Narrative</span></motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary text-xl max-w-2xl mx-auto font-light">
            Tap into 2,000+ high-definition digital screens and secure naming rights in the world's most trafficked physical ecosystem.
          </motion.p>
        </motion.div>

        {/* AI Heatmap Visualization (Simulated) */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <motion.h3 variants={fadeUp} className="text-3xl font-serif">Predictive Traffic & Demographics</motion.h3>
            <motion.div variants={fadeUp} className="flex items-center gap-3 bg-tertiary px-4 py-2 border border-border-primary rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-text-muted">AI Insights Active</span>
            </motion.div>
          </div>
          
          <motion.div variants={fadeUp} className="w-full h-96 bg-tertiary border border-border-primary relative overflow-hidden flex items-center justify-center group cursor-crosshair">
            {/* Simulated Heatmap SVG */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMEEwQTBBIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxQTFBMUEiPjwvcmVjdD4KPC9zdmc+')] mix-blend-screen" />
            <div className="absolute w-64 h-64 bg-accent-gold/20 rounded-full blur-[100px] top-1/4 left-1/4 animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-accent-gold/10 rounded-full blur-[80px] bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-8 bg-primary/80 backdrop-blur-sm border border-border-primary">
              <div>
                <div className="text-3xl font-serif text-accent-gold mb-1">1.2M</div>
                <div className="text-xs uppercase tracking-widest text-text-muted">Weekend Peak</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent-gold mb-1">Gen Z & Y</div>
                <div className="text-xs uppercase tracking-widest text-text-muted">Primary Demo</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent-gold mb-1">3.5 Hrs</div>
                <div className="text-xs uppercase tracking-widest text-text-muted">Avg Dwell Time</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent-gold mb-1">500M+</div>
                <div className="text-xs uppercase tracking-widest text-text-muted">Social Reach</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Media Canvas Screens */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-32">
          <motion.h3 variants={fadeUp} className="text-3xl font-serif mb-12">Digital Assets</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_CANVAS.map((screen, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 border border-border-primary bg-tertiary hover:border-accent-gold transition-colors duration-500">
                <div className="text-xs tracking-[0.2em] uppercase text-accent-gold mb-4">{screen.specs}</div>
                <h4 className="text-2xl font-serif mb-4">{screen.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{screen.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tiers */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h3 variants={fadeUp} className="text-3xl font-serif mb-12 text-center">Partnership Tiers</motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPONSORSHIP_TIERS.map((tier, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className={`p-10 border ${tier.border === 'gold' ? 'border-accent-gold bg-tertiary shadow-[0_0_30px_rgba(201,169,110,0.1)]' : 'border-border-primary bg-primary hover:border-text-muted'} relative overflow-hidden transition-all duration-500`}
              >
                {tier.border === 'gold' && (
                  <div className="absolute top-0 right-0 bg-accent-gold text-primary text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
                    Recommended by AI
                  </div>
                )}
                <h3 className={`text-3xl font-serif mb-8 ${tier.border === 'gold' ? 'text-accent-gold' : 'text-text-primary'}`}>
                  {tier.tier}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent-gold mr-3 mt-1 text-xs">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {tier.audience && (
                  <div className="pt-6 border-t border-border-primary/50">
                    <span className="text-xs uppercase tracking-widest text-text-muted block mb-2">Audience Reach</span>
                    <p className="text-sm font-medium">{tier.audience}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Deep Module CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-t border-border-primary pt-16"
        >
          <button
            onClick={() => openModal({
              type: 'sponsor',
              title: 'Request Custom Integration',
              tag: 'Sponsorship Inquiry',
              body: 'Our commercial team will generate a bespoke media plan based on your target demographic.'
            })}
            className="flex items-center justify-center mx-auto bg-accent-gold text-primary px-12 h-16 font-sans uppercase tracking-widest text-sm hover:bg-accent-gold-light transition-colors"
            data-cursor="hover"
          >
            Request Integration Plan
          </button>
        </motion.div>

      </div>
    </div>
  )
}
