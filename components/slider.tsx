'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const slides = [

    {
        title: "Reliable Offshore Solutions",
        description: "Tailored Offshore Development Services to Enhance Your Business Efficiency",
        image: "/services/QES-Homepage-5.png",
        gradient: "from-zinc-200 to-orange-400",
        imagePosition: "left",
        ctaText: "View Solutions",
        ctaLink: "/services/enterprise-solutions"
    }, {
        title: "Quality Engineering Services",
        description: "Providing excellence in product testing, design validation, and test automation.",
        image: "/services/QES-Homepage-5.png",
        gradient: "from-orange-400 to-zinc-200",
        imagePosition: "right",
        ctaText: "Explore QE Services",
        ctaLink: "/services/quality-engineering"
    },
    {
        title: "Cloud Solutions & DevOps",
        description: "Elevate your infrastructure with scalable cloud solutions and optimized DevOps practices.",
        image: "/services/QES-Homepage-5.png",
        gradient: "from-zinc-200 to-orange-400",
        imagePosition: "left",
        ctaText: "Discover Cloud Solutions",
        ctaLink: "/services/cloud-solutions"
    },
    {
        title: "Digital Transformation",
        description: "Transform your business with advanced digital solutions and forward-thinking strategies.",
        image: "/services/QES-Homepage-5.png",
        gradient: "from-orange-400 to-zinc-200",
        imagePosition: "right",
        ctaText: "Start Transformation",
        ctaLink: "/services/digital-transformation"
    }

]

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
        }, 5000)

        return () => clearInterval(timer)
    }, [isAnimating])

    const navigate = (direction: 'next' | 'prev') => {
        if (isAnimating) return

        setIsAnimating(true)
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }

        setTimeout(() => setIsAnimating(false), 500)
    }

    return (
        <div className="relative h-[70vh] overflow-hidden">
            <AnimatePresence mode="wait">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <motion.div
                            key={index}
                            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative h-full">
                                <div className="absolute inset-0">
                                    <div className="container mx-auto h-full px-4">
                                        <div className="flex h-full items-center">
                                            {slide.imagePosition === "left" ? (
                                                <>
                                                    <motion.div
                                                        className="w-full md:w-1/2"
                                                        initial={{ x: -100, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2, duration: 0.5 }}
                                                    >
                                                        <Image
                                                            src={slide.image}
                                                            alt={slide.title}
                                                            width={600}
                                                            height={400}
                                                            className="object-contain"
                                                            priority
                                                        />
                                                    </motion.div>
                                                    <motion.div
                                                        className="w-full md:w-1/2 text-white md:pl-12"
                                                        initial={{ x: 100, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                    >
                                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                                            {slide.title}
                                                        </h1>
                                                        <p className="text-lg md:text-xl mb-8 text-white">
                                                            {slide.description}
                                                        </p>
                                                        <Button
                                                            asChild
                                                            size="lg"
                                                            className="bg-orange-500 hover:bg-orange-600 text-white"
                                                        >
                                                            <Link href={slide.ctaLink}>
                                                                {slide.ctaText}
                                                            </Link>
                                                        </Button>
                                                    </motion.div>
                                                </>
                                            ) : (
                                                <>
                                                    <motion.div
                                                        className="w-full md:w-1/2 text-white"
                                                        initial={{ x: -100, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2, duration: 0.5 }}
                                                    >
                                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                                            {slide.title}
                                                        </h1>
                                                        <p className="text-lg md:text-xl mb-8 text-gray-200">
                                                            {slide.description}
                                                        </p>
                                                        <Button
                                                            asChild
                                                            size="lg"
                                                            className="bg-orange-500 hover:bg-orange-600 text-white"
                                                        >
                                                            <Link href={slide.ctaLink}>
                                                                {slide.ctaText}
                                                            </Link>
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div
                                                        className="w-full md:w-1/2 md:pl-12"
                                                        initial={{ x: 100, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                    >
                                                        <Image
                                                            src={slide.image}
                                                            alt={slide.title}
                                                            width={600}
                                                            height={400}
                                                            className="object-contain"
                                                            priority
                                                        />
                                                    </motion.div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={() => navigate('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => navigate('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-orange-500' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

