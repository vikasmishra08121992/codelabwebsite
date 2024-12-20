'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHomePage && !isScrolled
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent py-6' 
          : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center relative z-10">
          <Image 
            src={isTransparent ? "/codelab-logo.png" : "/codelab-logo.png"} 
            alt="CodeLab Technologies Logo" 
            width={150} 
            height={40}
            className="transition-opacity duration-300"
          />
        </Link>
        <nav className="relative z-10">
          <ul className="flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Technologies', 'Blog'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-orange-600 ${
                    isTransparent ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Button 
                asChild 
                variant="default"
                className={`transition-colors duration-300 ${
                  isTransparent 
                    ? "bg-transparent border border-white text-white hover:bg-orange-600 hover:border-orange-600" 
                    : "bg-orange-500 text-white hover:bg-orange-600"
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

