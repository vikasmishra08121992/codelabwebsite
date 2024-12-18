'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: "Top Talent For Your Development Needs",
    description: "We offer expert developers who bring innovation and efficiency to your projects.",
    image: "/images/slider-1.jpg",
  },
  {
    title: "Cutting-Edge Solutions for Modern Businesses",
    description: "Stay ahead of the competition with our innovative IT services.",
    image: "/images/slider-2.jpg",
  },
  {
    title: "Empower Your Digital Transformation",
    description: "Partner with us to revolutionize your business in the digital age.",
    image: "/images/slider-3.jpg",
  },
]

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[70vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0  bg-gradient-to-l from-gray-100 to-orange-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-orange-500">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 text-orange-500">
                {slide.description}
              </p>
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-grey-100">
                <Link href="/contact">
                  Hire Expert Developers Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-50 p-2 rounded-full text-orange hover:bg-orange-400 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral-50 p-2 rounded-full text-orange hover:bg-orange-400 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

