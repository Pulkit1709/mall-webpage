import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { LUXURY_PANELS } from '../data/content'
import { fadeUp } from '../utils/variants'

export function Luxury() {
  const containerRef = useScrollReveal()

  return (
    <section id="luxury" className="py-32 px-8 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-serif text-text-primary mb-16 text-center">
            Pinnacle of <span className="italic text-accent-gold">Luxury</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {LUXURY_PANELS.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group border border-border-primary bg-secondary p-10 flex flex-col justify-end ${
                panel.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10" />
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold/20 via-secondary to-secondary" />
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <span className="text-accent-gold text-xs uppercase tracking-widest mb-4 block">
                  {panel.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-text-primary mb-4">
                  {panel.title}
                </h3>
                <p className="text-text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {panel.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
