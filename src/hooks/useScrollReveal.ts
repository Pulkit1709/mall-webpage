import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollReveal(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
          ...options
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [options])
  
  return ref
}
