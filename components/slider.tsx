'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
    {
        title: "Transforming Ideas Into Digital Reality",
        description: "We deliver innovative software solutions that drive business growth and efficiency.",
        image: "/slider/8.png",
        gradient: "from-orange-400 to-yellow-500",
    },
    {
        title: "Cutting-Edge Solutions for Modern Businesses",
        description: "Stay ahead of the competition with our innovative IT services.",
        image: "/slider/cut1.png",
        gradient: "from-purple-400 to-pink-500",
    },
    {
        title: "Empower Your Digital Transformation",
        description: "Partner with us to revolutionize your business in the digital age.",
        image: "/slider/emp2.png",
        gradient: "from-blue-400 to-cyan-500",
    },
]

export function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
        }, 10000)

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
        <div className="relative h-[80vh]">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    className={`absolute inset-0 bg-orange-400 bg-gradient-to-r ${slides[currentSlide].gradient}`}
                    style={{ backgroundAttachment: "fixed" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-xl mb-8">
                                {slides[currentSlide].description}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                                    <Link href="/contact">
                                        Get Started
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                    <Link href="/services">
                                        Our Services
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

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
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentSlide ? 'bg-orange-500' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

