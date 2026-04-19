import { motion } from 'framer-motion'
import { fadeUp } from '../utils/variants'

export function EventsModule() {
  return (
    <div className="py-20 bg-primary text-text-primary border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent-gold">Venue Specifications</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Our dedicated events team provides end-to-end support for activations of any scale, from intimate luxury pop-ups to arena-sized concerts.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-secondary border border-border-primary">
                <h4 className="text-xl font-serif mb-2">Technical Infrastructure</h4>
                <p className="text-sm text-text-secondary">High-density Wi-Fi, 3-phase power distribution, and dedicated broadcast fiber connections available across all primary event zones.</p>
              </div>
              <div className="p-6 bg-secondary border border-border-primary">
                <h4 className="text-xl font-serif mb-2">Logistics & Access</h4>
                <p className="text-sm text-text-secondary">24/7 loading bay access, heavy vehicle clearance, and secure staging areas adjacent to main activation zones.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-secondary border border-border-primary p-10"
          >
            <h3 className="text-2xl font-serif mb-8 border-b border-border-primary pb-4">Direct Booking Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Event Date</label>
                  <input type="date" className="w-full bg-primary border border-border-primary text-text-primary p-3 focus:border-accent-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Duration (Days)</label>
                  <input type="number" min="1" className="w-full bg-primary border border-border-primary text-text-primary p-3 focus:border-accent-gold outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Space Requirement</label>
                <select className="w-full bg-primary border border-border-primary text-text-primary p-3 focus:border-accent-gold outline-none transition-colors appearance-none">
                  <option>Atrium Activation (1,000 - 5,000 sqft)</option>
                  <option>Outdoor Promenade</option>
                  <option>Convention Center</option>
                  <option>Custom Build</option>
                </select>
              </div>
              <button className="w-full bg-accent-gold text-primary uppercase tracking-widest py-4 mt-4 hover:bg-accent-gold-light transition-colors font-medium">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
