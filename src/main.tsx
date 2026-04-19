import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter } from 'react-router'
import App from './App'
import '../tailwind.css'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})
;(window as any).lenis = lenis;

function raf(time: number) {
  lenis.raf(time)
  ScrollTrigger.update()
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value as number, { immediate: true })
    }
    return lenis.scroll
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
