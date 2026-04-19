import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { fadeUp, staggerContainer } from '../utils/variants'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInView, setIsInView] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    )
    
    const element = document.getElementById('hero')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 10
    })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const particleCount = 120
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 8
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xC9A96E,
      size: 0.06,
      transparent: true,
      opacity: 0.6
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xC9A96E,
      transparent: true,
      opacity: 0.15
    })

    const linesGroup = new THREE.Group()
    scene.add(linesGroup)

    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isInView) return // Pause rendering when out of view

      particles.rotation.y += 0.0003
      particles.position.x = Math.sin(Date.now() * 0.0005) * 0.5

      camera.position.x += (mousePos.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (-mousePos.y * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      linesGroup.clear()
      const posArray = particles.geometry.attributes.position.array
      const worldPositions = []
      
      for(let i = 0; i < particleCount; i++) {
        const v = new THREE.Vector3(posArray[i*3], posArray[i*3+1], posArray[i*3+2])
        v.applyMatrix4(particles.matrixWorld)
        worldPositions.push(v)
      }

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dist = worldPositions[i].distanceTo(worldPositions[j])
          if (dist < 3) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([worldPositions[i], worldPositions[j]])
            const lineMat = lineMaterial.clone()
            lineMat.opacity = 0.3 * (1 - dist / 3)
            const line = new THREE.Line(lineGeo, lineMat)
            linesGroup.add(line)
          }
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      geometry.dispose()
      material.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [mousePos, isInView])

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-primary">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary" />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.span 
          custom={0.3} variants={fadeUp}
          className="text-accent-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-8 block"
        >
          Dubai, United Arab Emirates · Est. 2008
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-text-primary leading-tight mb-6">
          <motion.span custom={0.5} variants={fadeUp} className="block">The World's Most</motion.span>
          <motion.span custom={0.7} variants={fadeUp} className="block italic text-accent-gold">Powerful</motion.span>
          <motion.span custom={0.9} variants={fadeUp} className="block">Audience.</motion.span>
        </h1>
        
        <motion.p 
          custom={1.1} variants={fadeUp}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          105 million global consumers. One physical ecosystem. Where market leaders are made.
        </motion.p>
        
        <motion.div 
          custom={1.4} variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <button 
            className="flex items-center justify-center bg-accent-gold text-primary px-10 h-14 font-sans uppercase tracking-widest text-sm hover:bg-accent-gold-light transition-colors"
            data-cursor="hover"
            onClick={() => {
              if ((window as any).lenis) {
                (window as any).lenis.scrollTo('#gateway', { duration: 1.5 })
              }
            }}
          >
            Enter Platform
          </button>
          <button 
            className="flex items-center justify-center border border-accent-gold text-accent-gold px-10 h-14 font-sans uppercase tracking-widest text-sm hover:bg-accent-gold hover:text-primary transition-colors"
            data-cursor="hover"
            onClick={() => {
              if ((window as any).lenis) {
                (window as any).lenis.scrollTo('#cta', { duration: 1.5 })
              }
            }}
          >
            Partner With Us
          </button>
        </motion.div>
      </motion.div>

    </section>
  )
}
