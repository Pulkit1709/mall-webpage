import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router'
import { Navbar } from './components/Navbar'
import { Modal } from './components/Modal'
import { Cursor } from './components/Cursor'
import { Hero } from './sections/Hero'
import { Gateway } from './sections/Gateway'
import { useStore } from './store/useStore'

const Stats = lazy(() => import('./sections/Stats').then(m => ({ default: m.Stats })))
const ROIModule = lazy(() => import('./sections/ROIModule').then(m => ({ default: m.ROIModule })))
const Retail = lazy(() => import('./sections/Retail').then(m => ({ default: m.Retail })))
const Luxury = lazy(() => import('./sections/Luxury').then(m => ({ default: m.Luxury })))
const Dining = lazy(() => import('./sections/Dining').then(m => ({ default: m.Dining })))
const Entertainment = lazy(() => import('./sections/Entertainment').then(m => ({ default: m.Entertainment })))
const Events = lazy(() => import('./sections/Events').then(m => ({ default: m.Events })))
const CTA = lazy(() => import('./sections/CTA').then(m => ({ default: m.CTA })))
const Sponsorship = lazy(() => import('./modules/Sponsorship').then(m => ({ default: m.Sponsorship })))

export default function App() {
  const { setActiveSection, theme, userPath } = useStore()
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [setActiveSection])

  return (
    <>
      <Cursor />
      <Navbar />
      <Modal />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Gateway />
            <Suspense fallback={<div className="h-64 flex items-center justify-center text-text-muted">Loading module...</div>}>
              {(userPath === 'all' || userPath === 'events') && <Stats />}
              {(userPath === 'all' || userPath === 'retail' || userPath === 'luxury') && <ROIModule />}
              {(userPath === 'all' || userPath === 'retail') && <Retail />}
              {(userPath === 'all' || userPath === 'luxury') && <Luxury />}
              {(userPath === 'all' || userPath === 'retail' || userPath === 'luxury') && <Dining />}
              {(userPath === 'all' || userPath === 'events') && <Entertainment />}
              {(userPath === 'all' || userPath === 'events' || userPath === 'sponsor') && <Events />}
              {userPath === 'sponsor' && <Sponsorship />}
              <CTA />
            </Suspense>
          </main>
        } />
      </Routes>
    </>
  )
}
