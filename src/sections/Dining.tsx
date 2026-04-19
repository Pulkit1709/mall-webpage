import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { DINING_CARDS } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'

export function Dining() {
  const ref = useScrollReveal()

  return (
    <section id="dining" className="py-32 px-8 md:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6 block">
              Gastronomy
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-text-primary">
              Culinary <span className="italic text-accent-gold">Excellence</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
            className="text-text-secondary max-w-sm mt-8 md:mt-0"
          >
            From Michelin-starred concepts to immersive dining overlooking the Dubai Fountain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DINING_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group border border-border-primary bg-primary overflow-hidden"
              data-cursor="hover"
            >
              <div className="aspect-[4/3] bg-tertiary relative overflow-hidden flex items-center justify-center">
                <img src="/images/dining.png" alt={card.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100" loading="lazy" />
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-500 group-hover:w-full" />
                <span className="text-accent-gold text-xs uppercase tracking-widest mb-3 block">
                  {card.category}
                </span>
                <h3 className="text-2xl font-serif text-text-primary mb-4 group-hover:text-accent-gold transition-colors">
                  {card.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
