import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { RETAIL_METRICS, BRANDS } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'

export function Retail() {
  const revealRef = useScrollReveal()

  return (
    <section id="retail" className="py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-24" ref={revealRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6 block">
              Global Flagships
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-text-primary mb-8">
              The Epicenter of <br/><span className="italic text-accent-gold">Global Retail</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary text-lg mb-12 max-w-lg leading-relaxed">
              With 1,200+ outlets, The Dubai Mall represents the ultimate stage for retail brands. It is where global flagships are launched and regional exclusivity is defined.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {RETAIL_METRICS.map((metric, i) => (
                <div key={i}>
                  <div className="text-3xl font-serif text-accent-gold mb-2">{metric.value}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full aspect-square border border-border-primary flex items-center justify-center overflow-hidden bg-primary"
          >
            <img src="/images/retail.png" alt="Retail Architecture" className="w-full h-full object-cover opacity-80" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary" />
          </motion.div>
        </div>
      </div>

      <div className="relative w-full border-y border-border-primary py-8 bg-primary flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        <motion.div 
          className="flex gap-16 whitespace-nowrap px-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-2xl font-serif text-text-muted hover:text-accent-gold transition-colors cursor-default select-none">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
