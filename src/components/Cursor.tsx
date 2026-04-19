import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const ringConfig = { damping: 20, stiffness: 150, mass: 0.8 }
  const ringXSpring = useSpring(cursorX, ringConfig)
  const ringYSpring = useSpring(cursorY, ringConfig)

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="hover"]') || target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a') {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0 : 1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-accent-gold rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </>
  )
}
