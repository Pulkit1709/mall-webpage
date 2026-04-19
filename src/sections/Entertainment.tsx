import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ENTERTAINMENT } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/variants'

export function Entertainment() {
  const ref = useScrollReveal()

  return (
    <section id="entertainment" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
          <motion.span variants={fadeUp} className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6 block">
            Attractions
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-text-primary mb-8">
            Beyond <span className="italic text-accent-gold">Imagination</span>
          </motion.h2>
        </motion.div>

        <div className="relative aspect-video w-full mb-16 overflow-hidden border border-border-primary group">
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
            <div className="w-full h-full bg-tertiary flex items-center justify-center relative overflow-hidden">
               <img src="/images/entertainment.png" alt="Entertainment Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" loading="lazy" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">
              {ENTERTAINMENT.hero.title}
            </h3>
            <p className="text-text-secondary text-lg max-w-2xl">
              {ENTERTAINMENT.hero.sub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTERTAINMENT.attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-border-primary bg-secondary hover:border-accent-gold transition-colors duration-500 group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 filter opacity-50 group-hover:opacity-100">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif text-text-primary mb-3 group-hover:text-accent-gold transition-colors">
                {item.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
