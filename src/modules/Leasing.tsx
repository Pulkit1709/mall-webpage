import { motion } from 'framer-motion'
import { LEASING_PATHS } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'

export function Leasing() {
  return (
    <div className="py-20 bg-primary text-text-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-6">Leasing Opportunities</motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary text-lg max-w-2xl">Position your brand alongside the world's most prestigious names.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEASING_PATHS.map((path, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-border-primary bg-secondary hover:border-accent-gold transition-colors group"
            >
              <h3 className="text-2xl font-serif text-accent-gold mb-2">{path.type}</h3>
              <p className="text-text-primary mb-6 italic">{path.tagline}</p>
              
              <div className="space-y-4 text-sm text-text-secondary">
                <div className="flex justify-between border-b border-border-primary pb-2">
                  <span>Unit Size</span>
                  <span className="text-text-primary">{path.units}</span>
                </div>
                <div className="flex justify-between border-b border-border-primary pb-2">
                  <span>Location Focus</span>
                  <span className="text-text-primary">{path.location}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Tenant Support</span>
                  <span className="text-text-primary text-right max-w-[60%]">{path.support}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
