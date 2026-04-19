import { motion } from 'framer-motion'
import { ROI_FUNNEL } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'

export function ROIModule() {
  return (
    <section id="roi" className="py-24 bg-tertiary border-y border-border-primary">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-accent-gold text-xs tracking-[0.3em] uppercase block mb-4">
              The Conversion Engine
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-8 text-text-primary leading-tight">
              Engineered for <span className="italic text-accent-gold">Unfair Advantage</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary text-lg font-light leading-relaxed mb-8">
              We don't sell square footage. We sell access to 105 million affluent consumers with the highest conversion rate in global retail. 
              Our ecosystem is meticulously designed to pull volume and convert it at scale.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-text-muted">
              <span className="w-12 h-[1px] bg-accent-gold"></span>
              Verified 2024 Analytics
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            {/* SVG Funnel Visual */}
            <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-border-primary z-0">
              <motion.div 
                className="w-full bg-accent-gold origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </div>

            <div className="space-y-12 relative z-10">
              {ROI_FUNNEL.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-primary border border-accent-gold flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(201,169,110,0.15)]">
                    <span className="text-accent-gold font-serif text-xl">{i+1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-text-primary mb-2 flex items-baseline gap-4">
                      {item.metric}
                      <span className="text-sm font-sans uppercase tracking-widest text-text-muted">{item.label}</span>
                    </h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
