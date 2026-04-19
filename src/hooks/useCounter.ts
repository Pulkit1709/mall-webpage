import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export function useCounter(target: number, duration = 2.5) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView && target > 0) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (val) => setValue(Math.round(val))
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  return { ref, value }
}
