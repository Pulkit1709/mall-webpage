import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENTS } from '../data/content'
import { useCounter } from '../hooks/useCounter'
import { useStore } from '../store/useStore'

function StatCounter({ target, label }: { target: number | string, label: string }) {
  const isNumber = !isNaN(Number(target.toString().replace(/[^0-9]/g, '')))
  const numericTarget = isNumber ? Number(target.toString().replace(/[^0-9]/g, '')) : 0
  const suffix = target.toString().replace(/[0-9]/g, '')
  
  const { ref, value } = useCounter(numericTarget, 1.5)

  return (
    <div>
      <div className="text-3xl md:text-4xl font-serif text-accent-gold mb-2">
        {isNumber ? (
          <><span ref={ref}>{value}</span>{suffix}</>
        ) : target}
      </div>
      <div className="text-xs text-text-secondary uppercase tracking-wider">{label}</div>
    </div>
  )
}

export function Events() {
  const [activeEvent, setActiveEvent] = useState(EVENTS[0])
  const { openModal } = useStore()

  return (
    <section id="events" className="py-32 bg-secondary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
        <div className="mb-20 text-center">
          <span className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6 block">
            Activations & Events
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-text-primary">
            The World's <span className="italic text-accent-gold">Stage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {EVENTS.map((event) => {
              const isActive = activeEvent.id === event.id
              return (
                <motion.button
                  key={event.id}
                  onClick={() => setActiveEvent(event)}
                  className={`relative text-left p-6 transition-colors duration-300 ${
                    isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'
                  }`}
                  whileHover={{ x: 6 }}
                  data-cursor="hover"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="eventBorder"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </AnimatePresence>
                  <h3 className="text-xl md:text-2xl font-serif mb-2">{event.category}</h3>
                  <p className="text-sm tracking-wider uppercase opacity-60">{event.meta}</p>
                </motion.button>
              )
            })}
          </div>

          <div className="lg:col-span-7 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary border border-border-primary p-8 md:p-12 sticky top-32"
              >
                <div className="text-accent-gold mb-6">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">
                  {activeEvent.title}
                </h3>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-12">
                  {activeEvent.description}
                </p>

                <div className="grid grid-cols-3 gap-8 mb-12 py-8 border-y border-border-primary">
                  {activeEvent.stats.map((stat, i) => (
                    <StatCounter key={`${activeEvent.id}-stat-${i}`} target={stat.val} label={stat.label} />
                  ))}
                </div>

                <button
                  onClick={() => openModal({
                    type: 'events',
                    title: `Host: ${activeEvent.title}`,
                    tag: 'Event Inquiry',
                    body: `Connect with our events team to discuss availability and specifications for ${activeEvent.category.toLowerCase()}.`,
                    defaultInterest: activeEvent.category
                  })}
                  className="bg-transparent border border-accent-gold text-accent-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-accent-gold hover:text-primary transition-colors"
                  data-cursor="hover"
                >
                  Request Specs
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
