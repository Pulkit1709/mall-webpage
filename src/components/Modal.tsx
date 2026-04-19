import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store/useStore'

export function Modal() {
  const { modal, closeModal } = useStore()
  const { isOpen, config } = modal

  useEffect(() => {
    if (isOpen) {
      if ((window as any).lenis) (window as any).lenis.stop()
      document.body.style.overflow = 'hidden'
    } else {
      if ((window as any).lenis) (window as any).lenis.start()
      document.body.style.overflow = ''
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
      {isOpen && config && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full max-w-2xl bg-secondary border border-border-primary p-8 md:p-12 relative overflow-hidden"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-text-secondary hover:text-accent-gold transition-colors"
              data-cursor="hover"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8">
              <span className="text-accent-gold text-sm tracking-widest uppercase mb-4 block">
                {config.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">
                {config.title}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {config.body}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-tertiary border border-border-primary text-text-primary p-3 focus:outline-none focus:border-accent-gold transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-tertiary border border-border-primary text-text-primary p-3 focus:outline-none focus:border-accent-gold transition-colors" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Corporate Email</label>
                <input type="email" className="w-full bg-tertiary border border-border-primary text-text-primary p-3 focus:outline-none focus:border-accent-gold transition-colors" required />
              </div>

              <div>
                <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Company / Brand</label>
                <input type="text" className="w-full bg-tertiary border border-border-primary text-text-primary p-3 focus:outline-none focus:border-accent-gold transition-colors" required />
              </div>

              {config.defaultInterest && (
                <div>
                  <label className="block text-sm text-text-muted mb-2 uppercase tracking-wider">Area of Interest</label>
                  <input type="text" defaultValue={config.defaultInterest} className="w-full bg-tertiary border border-border-primary text-text-primary p-3 focus:outline-none focus:border-accent-gold transition-colors" />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-accent-gold text-primary font-medium py-4 px-8 mt-8 hover:bg-accent-gold-light transition-colors flex justify-center items-center gap-2"
                data-cursor="hover"
              >
                Submit Inquiry
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
