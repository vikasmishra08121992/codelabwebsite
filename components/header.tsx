'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // Increased threshold
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center relative z-10">
          <Image 
            src={isScrolled ? "/codelab-logo.png" : "/codelab-logo.png"} 
            alt="CodeLab Technologies Logo" 
            width={150} 
            height={40}
            className="transition-opacity duration-300"
          />
        </Link>
        <nav className="relative z-10">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className={`transition-colors duration-300 hover:text-orange-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`transition-colors duration-300 hover:text-orange-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`transition-colors duration-300 hover:text-orange-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/technologies" 
                className={`transition-colors duration-300 hover:text-orange-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                Technologies
              </Link>
            </li>
            {/* <li>
              <Link 
                href="/blog" 
                className={`transition-colors duration-300 hover:text-orange-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Button 
                asChild 
                variant="default"
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? "text-white hover:bg-orange-600" 
                    : "text-white hover:bg-orange-600"
                }`}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

