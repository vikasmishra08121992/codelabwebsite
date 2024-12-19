'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const slides = [
  {
    title: "Top Talent For Your Development Needs",
    description: "We offer expert developers who bring innovation and efficiency to your projects.",
  },
  {
    title: "Cutting-Edge Solutions for Modern Businesses",
    description: "Stay ahead of the competition with our innovative IT services.",
  },
  {
    title: "Empower Your Digital Transformation",
    description: "Partner with us to revolutionize your business in the digital age.",
  },
]

const technologies = [
  'Liferay', 'AEM', 'Spring Boot', 'ReactJS', 'React Native', 'NodeJS', 'AngularJS', 'DevOps', 'Quality Analyst'
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTechIndex, setCurrentTechIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length)
    }, 3000)

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      clearInterval(techInterval)
      clearInterval(slideInterval)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150
    const primaryColor = '#FF6B35' // Orange color

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = primaryColor
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 107, 53, ${1 - distance / connectionDistance})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-[80vh]"
        
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={currentSlide}
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.p 
            key={currentSlide}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTechIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-8"
            >
              <span className="text-primary text-xl font-semibold">
                {technologies[currentTechIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-orange-600 text-white px-8 py-6 text-lg transition-colors duration-300"
          >
            <Link href="/contact">
              Hire Expert Developers Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

