import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import { fadeUp, staggerContainer } from '../utils/variants'

export function CTA() {
  const { openModal } = useStore()

  return (
    <section id="cta" className="py-32 bg-primary relative overflow-hidden border-t border-border-primary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMEEwQTBBIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxQTFBMUEiPjwvcmVjdD4KPC9zdmc+')] opacity-50 z-0" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-text-primary mb-8">
            Your Place in <br /> <span className="italic text-accent-gold">History</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-text-secondary text-xl mb-16 font-light">
            Join the world's most prestigious retail destination. 
            Secure your presence at The Dubai Mall.
          </motion.p>
          
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => openModal({
                type: 'lease',
                title: 'Retail Leasing',
                tag: 'Leasing Inquiry',
                body: 'Discuss available units, flagship positions, and F&B opportunities with our commercial leasing directors.'
              })}
              className="flex items-center justify-center bg-accent-gold text-primary px-8 h-16 font-sans uppercase tracking-widest text-sm font-medium hover:bg-accent-gold-light transition-colors"
              data-cursor="hover"
            >
              Leasing Inquiry
            </button>
            <button
              onClick={() => openModal({
                type: 'sponsor',
                title: 'Brand Partnership',
                tag: 'Sponsorship Inquiry',
                body: 'Explore naming rights, digital integration, and custom activation spaces across our 5.4M sqft estate.'
              })}
              className="flex items-center justify-center border border-accent-gold text-accent-gold px-8 h-16 font-sans uppercase tracking-widest text-sm hover:bg-accent-gold hover:text-primary transition-colors bg-primary"
              data-cursor="hover"
            >
              Sponsorship Inquiry
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
