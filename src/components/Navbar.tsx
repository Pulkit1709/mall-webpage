import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import { cn } from '../utils/cn'

const NAV_LINKS = [
  { id: 'hero', label: 'Platform' },
  { id: 'retail', label: 'Commerce' },
  { id: 'luxury', label: 'Prestige' },
  { id: 'dining', label: 'Culinary' },
  { id: 'events', label: 'Culture' }
]

export function Navbar() {
  const { activeSection, openModal, theme, toggleTheme } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!(window as any).lenis) return
    const lenis = (window as any).lenis
    
    const unsub = lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 80)
    })
    return () => lenis.off('scroll', unsub)
  }, [])

  const handleNavClick = (id: string) => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(`#${id}`, { 
        duration: 1.8, 
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      })
    }
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-colors duration-500",
        scrolled ? "bg-primary/90 backdrop-blur-md border-b border-border-primary" : "bg-transparent"
      )}
      initial={{ paddingBottom: '2rem', paddingTop: '2rem' }}
      animate={{ 
        paddingBottom: scrolled ? '1.25rem' : '2rem', 
        paddingTop: scrolled ? '1.25rem' : '2rem' 
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className="text-text-primary font-serif text-2xl tracking-wider cursor-pointer"
        onClick={() => handleNavClick('hero')}
        data-cursor="hover"
      >
        THE DUBAI MALL
      </div>

      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={cn(
              "text-sm tracking-widest uppercase transition-colors duration-300",
              activeSection === link.id ? "text-accent-gold" : "text-text-muted hover:text-text-primary"
            )}
            data-cursor="hover"
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          className="text-text-primary hover:text-accent-gold transition-colors"
          data-cursor="hover"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => openModal({
            type: 'general',
            title: 'Partner with Us',
            tag: 'Inquiry',
            body: 'Connect with our commercial team to explore leasing, sponsorship, and event opportunities at the world\'s most visited destination.'
          })}
          className="border border-accent-gold text-accent-gold px-6 py-2.5 text-sm tracking-widest uppercase hover:bg-accent-gold hover:text-primary transition-colors duration-300"
          data-cursor="hover"
        >
          Inquire
        </button>
      </div>
    </motion.nav>
  )
}
