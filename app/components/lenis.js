'use client'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LenisProvider({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let isAnimating = false // Prevent multiple bounces

    function onWheel(e) {
      if (isAnimating) return // Skip if already animating
      
      const atTop = window.scrollY <= 0
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight

      if (atTop && e.deltaY < 0) {
        bounce(el, 20) // Reduced distance
      } else if (atBottom && e.deltaY > 0) {
        bounce(el, -20) // Reduced distance
      }
    }

    function bounce(target, distance) {
      if (isAnimating) return
      isAnimating = true
      
      gsap.killTweensOf(target)
      
      // Use timeline for smoother control
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false
        }
      })
      tl.to(target, { 
        y: distance, 
        duration: 0.3, 
        ease: 'power2.out' 
      })
      .to(target, { 
        y: 0, 
        duration: 0.3, 
        ease: 'elastic.out(0.5, 0.5)' 
      })
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', onWheel)
      // Clean up any running animations
      if (el) {
        gsap.killTweensOf(el)
      }
    }
  }, [])

  return (
    <div ref={containerRef}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
        {children}
      </ReactLenis>
    </div>
  )
}