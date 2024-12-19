'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const technologies = [
  'Liferay', 'AEM', 'Spring Boot', 'ReactJS', 'React Native', 'NodeJS', 'AngularJS', 'DevOps', 'Quality Analyst'
]

export function HeroSection() {
  const [currentTechIndex, setCurrentTechIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length)
    }, 3000) // Slower rotation
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Top Talent For Your<br />Development Needs
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We offer expert developers who bring innovation and efficiency to your projects.
          Whether you need temporary support or a long-term partnership, we have the right talent to drive your success.
        </motion.p>

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
            className="bg-orange-500 hover:bg-black/90 text-white px-8 py-6 text-lg"
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

