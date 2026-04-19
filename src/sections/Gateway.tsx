import { motion } from 'framer-motion'
import { useStore, UserPath } from '../store/useStore'
import { fadeUp, staggerContainer } from '../utils/variants'

const PATHS: { id: UserPath; title: string; desc: string; icon: string }[] = [
  { id: 'retail', title: 'Retail Partner', desc: 'Secure flagship placement and drive unmatched sales per sqft.', icon: '🛍️' },
  { id: 'luxury', title: 'Luxury Brand', desc: 'Access VIP demographics in the world\'s most prestigious avenue.', icon: '✨' },
  { id: 'events', title: 'Event Organizer', desc: 'Activate massive crowds in our world-class cultural epicenter.', icon: '🎫' },
  { id: 'sponsor', title: 'Brand Sponsor', desc: 'Dominate the media canvas across 2,000+ digital touchpoints.', icon: '🎯' }
]

export function Gateway() {
  const { userPath, setUserPath } = useStore()

  const handleSelect = (id: UserPath) => {
    setUserPath(id);
    if ((window as any).lenis) {
      setTimeout(() => {
        (window as any).lenis.scrollTo('#stats', { duration: 1.5 })
      }, 100);
    }
  }

  return (
    <section id="gateway" className="py-24 bg-secondary border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-text-muted mb-4">
            Strategic Intent
          </motion.h2>
          <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-text-primary mb-16">
            How will you <span className="italic text-accent-gold">dominate</span> the market?
          </motion.h3>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATHS.map((path) => (
              <button
                key={path.id}
                onClick={() => handleSelect(path.id)}
                className={`group flex flex-col items-center text-center p-8 border transition-all duration-300 ${
                  userPath === path.id 
                    ? 'border-accent-gold bg-tertiary' 
                    : 'border-border-primary bg-primary hover:border-accent-gold hover:bg-tertiary'
                }`}
                data-cursor="hover"
              >
                <span className="text-4xl mb-6">{path.icon}</span>
                <h4 className="text-lg font-serif text-text-primary mb-3 group-hover:text-accent-gold transition-colors">{path.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{path.desc}</p>
              </button>
            ))}
          </motion.div>
          
          {userPath !== 'all' && (
            <motion.button 
              variants={fadeUp}
              onClick={() => handleSelect('all')}
              className="mt-12 text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors border-b border-transparent hover:border-text-primary pb-1"
              data-cursor="hover"
            >
              Reset to Full Overview
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
